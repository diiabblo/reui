import { useState, useEffect, useCallback } from 'react';
import { DailyChallenge } from '@/types/challenge';
import { loadDailyChallenge, saveDailyChallenge, clearDailyChallenge } from '@/utils/challengeStorage';
import { isChallengeExpired, getChallengeExpirationTime } from '@/constants/challenges';

/**
 * Hook for managing daily challenge state
 */
export const useDailyChallenge = () => {
  const [challenge, setChallenge] = useState<DailyChallenge | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load challenge on mount
  useEffect(() => {
    const loadChallenge = async () => {
      try {
        const saved = loadDailyChallenge();
        
        // Check if challenge is expired
        if (saved && isChallengeExpired(saved.expiresAt)) {
          clearDailyChallenge();
          // Fetch new challenge
          await fetchNewChallenge();
        } else if (saved) {
          setChallenge(saved);
        } else {
          await fetchNewChallenge();
        }
      } catch (error) {
        console.error('Error loading daily challenge:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadChallenge();
  }, []);

  const fetchNewChallenge = async () => {
    // Mock data - replace with actual API call
    const mockChallenge: DailyChallenge = {
      id: `challenge-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      title: 'Science Trivia Master',
      description: 'Test your knowledge of scientific discoveries and innovations',
      difficulty: 'medium',
      categoryId: 'science',
      questionCount: 10,
      timeLimit: 300,
      baseReward: 1000,
      bonusReward: 500,
      status: 'active',
      expiresAt: getChallengeExpirationTime(new Date()),
    };

    setChallenge(mockChallenge);
    saveDailyChallenge(mockChallenge);
  };

  const startChallenge = useCallback(() => {
    if (!challenge) return;
    
    const updated = { ...challenge, status: 'active' as const };
    setChallenge(updated);
    saveDailyChallenge(updated);
  }, [challenge]);

  const completeChallenge = useCallback(() => {
    if (!challenge) return;
    
    const updated = { ...challenge, status: 'completed' as const };
    setChallenge(updated);
    saveDailyChallenge(updated);
  }, [challenge]);

  const failChallenge = useCallback(() => {
    if (!challenge) return;
    
    const updated = { ...challenge, status: 'failed' as const };
    setChallenge(updated);
    saveDailyChallenge(updated);
  }, [challenge]);

  return {
    challenge,
    isLoading,
    startChallenge,
    completeChallenge,
    failChallenge,
    refetch: fetchNewChallenge,
  };
};
