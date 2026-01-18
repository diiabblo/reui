import { useWriteContract, useWaitForTransactionReceipt, useAccount, useReadContract } from 'wagmi';
import { CONTRACTS } from '@/config/contracts';
import { parseEther, formatEther } from 'viem';
import { useState, useEffect, useCallback } from 'react';
import { getRandomQuestions } from '@/data/questions';

// Type for loading states
export interface LoadingState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

/**
 * Hook for player registration mutations
 */
export function usePlayerMutations() {
  const { address } = useAccount();

  // Register username
  const [registerState, setRegisterState] = useState<LoadingState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });

  // Update username state
  const [updateUsernameState, setUpdateUsernameState] = useState<LoadingState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });

  const {
    writeContractAsync: registerUsernameAsync,
    data: registerData,
    isPending: registerIsPending,
    isError: registerIsError,
    error: registerError,
  } = useWriteContract();

  const {
    writeContractAsync: updateUsernameAsync,
    data: updateData,
    isPending: updateIsPending,
    isError: updateIsError,
    error: updateError,
  } = useWriteContract();

  const {
    isSuccess: registerIsSuccess,
    isError: registerTxError,
    error: registerTxErrorObj,
    isLoading: isRegisterTxLoading
  } = useWaitForTransactionReceipt({
    hash: registerData,
  });

  const {
    isSuccess: updateIsSuccess,
    isError: updateTxError,
    error: updateTxErrorObj,
    isLoading: isUpdateTxLoading
  } = useWaitForTransactionReceipt({
    hash: updateData,
  });

  // Update register state based on transaction status
  useEffect(() => {
    setRegisterState(prev => ({
      ...prev,
      isLoading: registerIsPending || isRegisterTxLoading,
      isSuccess: registerIsSuccess,
      isError: registerIsError || registerTxError,
      error: registerError || registerTxErrorObj || null,
    }));
  }, [registerIsPending, isRegisterTxLoading, registerIsSuccess, registerIsError, registerTxError, registerError, registerTxErrorObj]);

  // Update username state based on transaction status
  useEffect(() => {
    setUpdateUsernameState(prev => ({
      ...prev,
      isLoading: updateIsPending || isUpdateTxLoading,
      isSuccess: updateIsSuccess,
      isError: updateIsError || updateTxError,
      error: updateError || updateTxErrorObj || null,
    }));
  }, [updateIsPending, isUpdateTxLoading, updateIsSuccess, updateIsError, updateTxError, updateError, updateTxErrorObj]);

  const registerUsername = useCallback(async (username: string) => {
    setRegisterState(prev => ({ ...prev, isLoading: true, isError: false, error: null }));
    try {
      const result = await registerUsernameAsync({
        address: CONTRACTS.triviaGameV2.address,
        abi: CONTRACTS.triviaGameV2.abi,
        functionName: 'registerUsername',
        args: [username],
      });
      return result;
    } catch (error) {
      setRegisterState(prev => ({
        ...prev,
        isError: true,
        error: error instanceof Error ? error : new Error('Failed to register username')
      }));
      throw error;
    }
  }, [registerUsernameAsync]);

  const updateUsername = useCallback(async (username: string) => {
    setUpdateUsernameState(prev => ({ ...prev, isLoading: true, isError: false, error: null }));
    try {
      const result = await updateUsernameAsync({
        address: CONTRACTS.triviaGameV2.address,
        abi: CONTRACTS.triviaGameV2.abi,
        functionName: 'updateUsername',
        args: [username],
        value: parseEther('0.001'),
      });
      return result;
    } catch (error) {
      setUpdateUsernameState(prev => ({
        ...prev,
        isError: true,
        error: error instanceof Error ? error : new Error('Failed to update username')
      }));
      throw error;
    }
  }, [updateUsernameAsync]);

  return {
    registerUsername,
    registerState,
    updateUsername,
    updateUsernameState,
  };
}

/**
 * Hook for game session mutations
 */
export function useGameMutations() {
  const { address } = useAccount();
  const [submitState, setSubmitState] = useState<LoadingState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });
  const [startGameState, setStartGameState] = useState<LoadingState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });

  // Start a new game
  const {
    writeContractAsync: startGameAsync,
    data: startGameData,
    isPending: startGameIsPending,
    isError: startGameIsError,
    error: startGameError,
  } = useWriteContract();

  // Submit answers
  const {
    writeContractAsync: submitAnswersAsync,
    data: submitAnswersData,
    isPending: submitIsPending,
    isError: submitIsError,
    error: submitError,
  } = useWriteContract();

  // Track transaction status for start game
  const {
    isSuccess: startGameIsSuccess,
    isError: startGameTxError,
    error: startGameTxErrorObj,
    isLoading: isStartGameTxLoading
  } = useWaitForTransactionReceipt({
    hash: startGameData,
  });

  // Track transaction status for submit answers
  const {
    isSuccess: submitIsSuccess,
    isError: submitTxError,
    error: submitTxErrorObj,
    isLoading: isSubmitTxLoading
  } = useWaitForTransactionReceipt({
    hash: submitAnswersData,
  });

  // Update start game state
  useEffect(() => {
    setStartGameState(prev => ({
      ...prev,
      isLoading: startGameIsPending || isStartGameTxLoading,
      isSuccess: startGameIsSuccess,
      isError: startGameIsError || startGameTxError,
      error: startGameError || startGameTxErrorObj || null,
    }));
  }, [
    startGameIsPending,
    isStartGameTxLoading,
    startGameIsSuccess,
    startGameIsError,
    startGameTxError,
    startGameError,
    startGameTxErrorObj
  ]);

  // Update submit answers state
  useEffect(() => {
    setSubmitState(prev => ({
      ...prev,
      isLoading: submitIsPending || isSubmitTxLoading,
      isSuccess: submitIsSuccess,
      isError: submitIsError || submitTxError,
      error: submitError || submitTxErrorObj || null,
    }));
  }, [
    submitIsPending,
    isSubmitTxLoading,
    submitIsSuccess,
    submitIsError,
    submitTxError,
    submitError,
    submitTxErrorObj
  ]);

  // Start a new game
  const startGame = useCallback(async () => {
    if (!address) throw new Error('No address connected');

    setStartGameState(prev => ({ ...prev, isLoading: true, isError: false, error: null }));
    try {
      // Get random questions (mocked for now, should be replaced with actual question selection logic)
      const questions = getRandomQuestions(5);
      const questionIds = questions.map(q => q.id);

      const result = await startGameAsync({
        address: CONTRACTS.triviaGameV2.address,
        abi: CONTRACTS.triviaGameV2.abi,
        functionName: 'startGame',
        args: [questionIds],
      });

      return result;
    } catch (error) {
      setStartGameState(prev => ({
        ...prev,
        isError: true,
        error: error instanceof Error ? error : new Error('Failed to start game')
      }));
      throw error;
    }
  }, [address, startGameAsync]);

  const submitAnswers = useCallback(async (sessionId: number, answers: number[], timeSpent: number[]) => {
    if (!address) throw new Error('No address connected');
    if (answers.length !== timeSpent.length) {
      throw new Error('Answers and timeSpent arrays must have the same length');
    }

    setSubmitState(prev => ({ ...prev, isLoading: true, isError: false, error: null }));
    try {
      const result = await submitAnswersAsync({
        address: CONTRACTS.triviaGameV2.address,
        abi: CONTRACTS.triviaGameV2.abi,
        functionName: 'submitAnswers',
        args: [sessionId, answers, timeSpent],
      });
      return result;
    } catch (error) {
      setSubmitState(prev => ({
        ...prev,
        isError: true,
        error: error instanceof Error ? error : new Error('Failed to submit answers')
      }));
      throw error;
    }
  }, [address, submitAnswersAsync]);

  return {
    // Start a new game session
    startGame,
    startGameState,

    // Submit answers
    submitAnswers,
    submitState,
  };
}

/**
 * Hook for faucet mutations
 */
export function useFaucetMutations() {
  const [faucetState, setFaucetState] = useState<LoadingState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });

  // Claim function
  const {
    writeContractAsync: claimFaucetAsync,
    data: claimData,
    isPending: claimIsPending,
    isError: claimIsError,
    error: claimError,
  } = useWriteContract();

  const {
    isSuccess: claimIsSuccess,
    isError: claimTxError,
    error: claimTxErrorObj,
    isLoading: isClaimTxLoading
  } = useWaitForTransactionReceipt({
    hash: claimData,
  });

  // Update claim state
  useEffect(() => {
    setFaucetState(prev => ({
      ...prev,
      isLoading: claimIsPending || isClaimTxLoading,
      isSuccess: claimIsSuccess,
      isError: claimIsError || claimTxError,
      error: claimError || claimTxErrorObj || null,
    }));
  }, [
    claimIsPending,
    isClaimTxLoading,
    claimIsSuccess,
    claimIsError,
    claimTxError,
    claimError,
    claimTxErrorObj
  ]);

  const claim = useCallback(async () => {
    setFaucetState(prev => ({ ...prev, isLoading: true, isError: false, error: null }));
    try {
      const result = await claimFaucetAsync({
        address: CONTRACTS.faucet?.address,
        abi: CONTRACTS.faucet?.abi,
        functionName: 'claim',
      });
      return result;
    } catch (error) {
      setFaucetState(prev => ({
        ...prev,
        isError: true,
        error: error instanceof Error ? error : new Error('Failed to claim from faucet')
      }));
      throw error;
    }
  }, [claimFaucetAsync]);

  return {
    claim,
    claimState: faucetState,
  };
}