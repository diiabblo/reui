/**
 * Daily challenge type definitions
 */

export type ChallengeDifficulty = 'easy' | 'medium' | 'hard' | 'expert';
export type ChallengeStatus = 'locked' | 'active' | 'completed' | 'failed' | 'expired';

export interface DailyChallenge {
  id: string;
  date: string;
  title: string;
  description: string;
  difficulty: ChallengeDifficulty;
  categoryId: string;
  questionCount: number;
  timeLimit: number; // in seconds
  baseReward: number;
  bonusReward: number;
  status: ChallengeStatus;
  expiresAt: Date;
}

export interface ChallengeProgress {
  challengeId: string;
  questionsAnswered: number;
  correctAnswers: number;
  score: number;
  timeRemaining: number;
  completedAt?: Date;
}

export interface ChallengeStreak {
  currentStreak: number;
  longestStreak: number;
  lastCompletedDate?: Date;
  totalChallengesCompleted: number;
  streakBonusMultiplier: number;
}

export interface ChallengeReward {
  baseReward: number;
  perfectBonus: number;
  speedBonus: number;
  streakBonus: number;
  totalReward: number;
}
