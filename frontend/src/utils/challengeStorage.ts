import { DailyChallenge, ChallengeStreak } from '@/types/challenge';

const CHALLENGE_STORAGE_KEY = 'reui_daily_challenge';
const STREAK_STORAGE_KEY = 'reui_challenge_streak';

/**
 * Save daily challenge to local storage
 */
export const saveDailyChallenge = (challenge: DailyChallenge): void => {
  try {
    localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(challenge));
  } catch (error) {
    console.error('Failed to save daily challenge:', error);
  }
};

/**
 * Load daily challenge from local storage
 */
export const loadDailyChallenge = (): DailyChallenge | null => {
  try {
    const stored = localStorage.getItem(CHALLENGE_STORAGE_KEY);
    if (!stored) return null;
    
    const challenge = JSON.parse(stored);
    challenge.expiresAt = new Date(challenge.expiresAt);
    return challenge;
  } catch (error) {
    console.error('Failed to load daily challenge:', error);
    return null;
  }
};

/**
 * Save challenge streak to local storage
 */
export const saveChallengeStreak = (streak: ChallengeStreak): void => {
  try {
    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(streak));
  } catch (error) {
    console.error('Failed to save challenge streak:', error);
  }
};

/**
 * Load challenge streak from local storage
 */
export const loadChallengeStreak = (): ChallengeStreak => {
  try {
    const stored = localStorage.getItem(STREAK_STORAGE_KEY);
    if (!stored) {
      return {
        currentStreak: 0,
        longestStreak: 0,
        totalChallengesCompleted: 0,
        streakBonusMultiplier: 1.0,
      };
    }
    
    const streak = JSON.parse(stored);
    if (streak.lastCompletedDate) {
      streak.lastCompletedDate = new Date(streak.lastCompletedDate);
    }
    return streak;
  } catch (error) {
    console.error('Failed to load challenge streak:', error);
    return {
      currentStreak: 0,
      longestStreak: 0,
      totalChallengesCompleted: 0,
      streakBonusMultiplier: 1.0,
    };
  }
};

/**
 * Clear daily challenge from storage
 */
export const clearDailyChallenge = (): void => {
  try {
    localStorage.removeItem(CHALLENGE_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear daily challenge:', error);
  }
};
