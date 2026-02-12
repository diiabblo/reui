import { ChallengeReward, ChallengeProgress, ChallengeStreak } from '@/types/challenge';
import { CHALLENGE_CONFIG } from '@/constants/challenges';

/**
 * Calculate total reward for a completed challenge
 */
export const calculateChallengeReward = (
  progress: ChallengeProgress,
  baseReward: number,
  bonusReward: number,
  streak: ChallengeStreak,
  totalQuestions: number,
  timeLimit: number
): ChallengeReward => {
  const isPerfect = progress.correctAnswers === totalQuestions;
  const perfectBonus = isPerfect ? CHALLENGE_CONFIG.PERFECT_SCORE_BONUS : 0;

  // Speed bonus: extra points for completing quickly
  const timeUsed = timeLimit - progress.timeRemaining;
  const timePercentage = progress.timeRemaining / timeLimit;
  const speedBonus = timePercentage > 0.5
    ? Math.floor(bonusReward * timePercentage * CHALLENGE_CONFIG.SPEED_BONUS_MULTIPLIER / 100)
    : 0;

  // Streak bonus
  const streakMultiplier = Math.min(
    1 + (streak.currentStreak * CHALLENGE_CONFIG.STREAK_BONUS_INCREMENT),
    CHALLENGE_CONFIG.MAX_STREAK_BONUS
  );
  const streakBonus = Math.floor((baseReward + bonusReward) * (streakMultiplier - 1));

  const totalReward = baseReward + bonusReward + perfectBonus + speedBonus + streakBonus;

  return {
    baseReward,
    perfectBonus,
    speedBonus,
    streakBonus,
    totalReward,
  };
};

/**
 * Update streak based on challenge completion
 */
export const updateStreak = (
  currentStreak: ChallengeStreak,
  completedDate: Date
): ChallengeStreak => {
  const lastCompleted = currentStreak.lastCompletedDate
    ? new Date(currentStreak.lastCompletedDate)
    : null;

  if (!lastCompleted) {
    return {
      currentStreak: 1,
      longestStreak: 1,
      lastCompletedDate: completedDate,
      totalChallengesCompleted: currentStreak.totalChallengesCompleted + 1,
      streakBonusMultiplier: 1 + CHALLENGE_CONFIG.STREAK_BONUS_INCREMENT,
    };
  }

  const daysSinceLastCompleted = Math.floor(
    (completedDate.getTime() - lastCompleted.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Streak continues if completed within 1-2 days
  const newStreak = daysSinceLastCompleted <= 1
    ? currentStreak.currentStreak + 1
    : 1;

  return {
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, currentStreak.longestStreak),
    lastCompletedDate: completedDate,
    totalChallengesCompleted: currentStreak.totalChallengesCompleted + 1,
    streakBonusMultiplier: Math.min(
      1 + (newStreak * CHALLENGE_CONFIG.STREAK_BONUS_INCREMENT),
      CHALLENGE_CONFIG.MAX_STREAK_BONUS
    ),
  };
};

/**
 * Format time remaining for display
 */
export const formatTimeRemaining = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Get completion percentage
 */
export const getCompletionPercentage = (
  questionsAnswered: number,
  totalQuestions: number
): number => {
  return Math.round((questionsAnswered / totalQuestions) * 100);
};
