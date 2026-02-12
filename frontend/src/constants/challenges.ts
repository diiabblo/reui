import { ChallengeDifficulty } from '@/types/challenge';

/**
 * Difficulty configuration and metadata
 */
export const DIFFICULTY_CONFIG: Record<
  ChallengeDifficulty,
  {
    label: string;
    color: string;
    icon: string;
    multiplier: number;
    description: string;
  }
> = {
  easy: {
    label: 'Easy',
    color: '#10B981',
    icon: '🌱',
    multiplier: 1.0,
    description: 'Perfect for beginners',
  },
  medium: {
    label: 'Medium',
    color: '#F59E0B',
    icon: '⚡',
    multiplier: 1.5,
    description: 'A balanced challenge',
  },
  hard: {
    label: 'Hard',
    color: '#EF4444',
    icon: '🔥',
    multiplier: 2.0,
    description: 'Test your knowledge',
  },
  expert: {
    label: 'Expert',
    color: '#8B5CF6',
    icon: '💎',
    multiplier: 3.0,
    description: 'Only for masters',
  },
};

/**
 * Challenge timing constants
 */
export const CHALLENGE_CONFIG = {
  DAILY_RESET_HOUR: 0, // UTC midnight
  CHALLENGE_DURATION_HOURS: 24,
  MIN_QUESTIONS: 5,
  MAX_QUESTIONS: 15,
  DEFAULT_TIME_LIMIT: 300, // 5 minutes
  STREAK_BONUS_INCREMENT: 0.1, // 10% per day
  MAX_STREAK_BONUS: 2.0, // 200% max
  PERFECT_SCORE_BONUS: 500,
  SPEED_BONUS_MULTIPLIER: 100,
};

/**
 * Get difficulty configuration
 */
export const getDifficultyConfig = (difficulty: ChallengeDifficulty) => {
  return DIFFICULTY_CONFIG[difficulty];
};

/**
 * Calculate challenge expiration time
 */
export const getChallengeExpirationTime = (startDate: Date): Date => {
  const expiration = new Date(startDate);
  expiration.setHours(
    expiration.getHours() + CHALLENGE_CONFIG.CHALLENGE_DURATION_HOURS
  );
  return expiration;
};

/**
 * Check if challenge is expired
 */
export const isChallengeExpired = (expiresAt: Date): boolean => {
  return new Date() > new Date(expiresAt);
};
