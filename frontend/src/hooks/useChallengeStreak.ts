import { useState, useEffect, useCallback } from 'react';
import { ChallengeStreak } from '@/types/challenge';
import { loadChallengeStreak, saveChallengeStreak } from '@/utils/challengeStorage';
import { updateStreak } from '@/utils/challengeUtils';

/**
 * Hook for managing challenge streak state
 */
export const useChallengeStreak = () => {
  const [streak, setStreak] = useState<ChallengeStreak>({
    currentStreak: 0,
    longestStreak: 0,
    totalChallengesCompleted: 0,
    streakBonusMultiplier: 1.0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load streak on mount
  useEffect(() => {
    const savedStreak = loadChallengeStreak();
    setStreak(savedStreak);
    setIsLoading(false);
  }, []);

  const incrementStreak = useCallback(() => {
    const updatedStreak = updateStreak(streak, new Date());
    setStreak(updatedStreak);
    saveChallengeStreak(updatedStreak);
  }, [streak]);

  const resetStreak = useCallback(() => {
    const resetStreak: ChallengeStreak = {
      currentStreak: 0,
      longestStreak: streak.longestStreak,
      totalChallengesCompleted: streak.totalChallengesCompleted,
      streakBonusMultiplier: 1.0,
    };
    setStreak(resetStreak);
    saveChallengeStreak(resetStreak);
  }, [streak]);

  return {
    streak,
    isLoading,
    incrementStreak,
    resetStreak,
  };
};
