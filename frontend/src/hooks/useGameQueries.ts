import { useReadContract, useAccount } from 'wagmi';
import { CONTRACTS } from '@/config/contracts';
import { useState, useEffect, useMemo } from 'react';

// Type for loading states
export interface LoadingState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

/**
 * Hook for player registration queries and username management
 */
export function usePlayerRegistration() {
  const { address } = useAccount();
  const [isFetchingPlayerInfo, setIsFetchingPlayerInfo] = useState(false);
  const [playerInfoError, setPlayerInfoError] = useState<Error | null>(null);

  // Check if player is registered
  const {
    data: playerInfo,
    refetch: refetchPlayerInfo,
    isFetching: isFetchingPlayerInfoQuery,
    isError: isPlayerInfoError,
    error: playerInfoQueryError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getPlayerInfo',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  });

  // Update loading state when fetching player info
  useEffect(() => {
    setIsFetchingPlayerInfo(isFetchingPlayerInfoQuery);
    if (isPlayerInfoError) {
      setPlayerInfoError(playerInfoQueryError || new Error('Failed to fetch player info'));
    } else if (playerInfoQueryError === null) {
      setPlayerInfoError(null);
    }
  }, [isFetchingPlayerInfoQuery, isPlayerInfoError, playerInfoQueryError]);

  // Check if registered by checking if username exists (index 0)
  const isRegistered = useMemo(() => {
    if (!playerInfo) return false;
    const username = (playerInfo as any)[0];
    const result = !!(username && username.length > 0);
    console.log('Registration check:', { address, playerInfo, username, isRegistered: result });
    return result;
  }, [playerInfo, address]);

  return {
    playerInfo,
    isRegistered,
    isFetchingPlayerInfo,
    playerInfoError,
    refetchPlayerInfo,
  };
}

/**
 * Hook for game session queries
 */
export function useGameSession() {
  const { address } = useAccount();
  const [isFetchingSession, setIsFetchingSession] = useState(false);
  const [sessionError, setSessionError] = useState<Error | null>(null);

  // Get player's session count
  const {
    data: sessionCount,
    refetch: refetchSessionCount,
    isFetching: isFetchingSessionCount,
    isError: isSessionCountError,
    error: sessionCountError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getPlayerSessionCount',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  // Get latest session ID
  const {
    data: latestSessionId,
    refetch: refetchLatestSession,
    isFetching: isFetchingLatestSession,
    isError: isLatestSessionError,
    error: latestSessionError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getLatestSessionId',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  // Update session loading state
  useEffect(() => {
    setIsFetchingSession(isFetchingSessionCount || isFetchingLatestSession);
    if (isSessionCountError || isLatestSessionError) {
      setSessionError(sessionCountError || latestSessionError || new Error('Failed to fetch session data'));
    } else if (sessionCountError === null && latestSessionError === null) {
      setSessionError(null);
    }
  }, [
    isFetchingSessionCount,
    isFetchingLatestSession,
    isSessionCountError,
    isLatestSessionError,
    sessionCountError,
    latestSessionError
  ]);

  return {
    sessionCount,
    latestSessionId,
    isFetchingSession,
    sessionError,
    refetchSessionCount,
    refetchLatestSession,
  };
}

/**
 * Hook for session data queries
 */
export function useSession(sessionId?: number) {
  const { address } = useAccount();

  const {
    data: sessionData,
    refetch: refetchSession,
    isFetching: isFetchingSession,
    isError: isSessionError,
    error: sessionError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getSession',
    args: sessionId !== undefined ? [sessionId] : undefined,
    query: {
      enabled: sessionId !== undefined,
    },
  });

  const {
    data: sessionQuestions,
    refetch: refetchSessionQuestions,
    isFetching: isFetchingSessionQuestions,
    isError: isSessionQuestionsError,
    error: sessionQuestionsError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getSessionQuestions',
    args: sessionId !== undefined ? [sessionId] : undefined,
    query: {
      enabled: sessionId !== undefined,
    },
  });

  const {
    data: sessionAnswers,
    refetch: refetchSessionAnswers,
    isFetching: isFetchingSessionAnswers,
    isError: isSessionAnswersError,
    error: sessionAnswersError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getSessionAnswers',
    args: sessionId !== undefined ? [sessionId] : undefined,
    query: {
      enabled: sessionId !== undefined,
    },
  });

  return {
    sessionData,
    sessionQuestions,
    sessionAnswers,
    isFetchingSession: isFetchingSession || isFetchingSessionQuestions || isFetchingSessionAnswers,
    sessionError: sessionError || sessionQuestionsError || sessionAnswersError,
    refetchSession,
    refetchSessionQuestions,
    refetchSessionAnswers,
  };
}

/**
 * Hook for questions queries
 */
export function useQuestions() {
  const {
    data: totalQuestions,
    refetch: refetchTotalQuestions,
    isFetching: isFetchingTotalQuestions,
    isError: isTotalQuestionsError,
    error: totalQuestionsError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getTotalQuestions',
    args: [],
  });

  return {
    totalQuestions,
    isFetchingTotalQuestions,
    totalQuestionsError,
    refetchTotalQuestions,
  };
}

/**
 * Hook for individual question queries
 */
export function useContractQuestion(questionId?: number) {
  const {
    data: question,
    refetch: refetchQuestion,
    isFetching: isFetchingQuestion,
    isError: isQuestionError,
    error: questionError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getQuestion',
    args: questionId !== undefined ? [questionId] : undefined,
    query: {
      enabled: questionId !== undefined,
    },
  });

  return {
    question,
    isFetchingQuestion,
    questionError,
    refetchQuestion,
  };
}

/**
 * Hook for game questions queries
 */
export function useGameQuestions(sessionId?: number) {
  const {
    data: gameQuestions,
    refetch: refetchGameQuestions,
    isFetching: isFetchingGameQuestions,
    isError: isGameQuestionsError,
    error: gameQuestionsError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getGameQuestions',
    args: sessionId !== undefined ? [sessionId] : undefined,
    query: {
      enabled: sessionId !== undefined,
    },
  });

  return {
    gameQuestions,
    isFetchingGameQuestions,
    gameQuestionsError,
    refetchGameQuestions,
  };
}

/**
 * Hook for leaderboard queries
 */
export function useLeaderboard(count: number = 10) {
  const {
    data: leaderboard,
    refetch: refetchLeaderboard,
    isFetching: isFetchingLeaderboard,
    isError: isLeaderboardError,
    error: leaderboardError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getLeaderboard',
    args: [count],
  });

  return {
    leaderboard,
    isFetchingLeaderboard,
    leaderboardError,
    refetchLeaderboard,
  };
}

/**
 * Hook for contract info queries
 */
export function useContractInfo() {
  const {
    data: contractInfo,
    refetch: refetchContractInfo,
    isFetching: isFetchingContractInfo,
    isError: isContractInfoError,
    error: contractInfoError
  } = useReadContract({
    address: CONTRACTS.triviaGameV2.address,
    abi: CONTRACTS.triviaGameV2.abi,
    functionName: 'getContractInfo',
    args: [],
  });

  return {
    contractInfo,
    isFetchingContractInfo,
    contractInfoError,
    refetchContractInfo,
  };
}