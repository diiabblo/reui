/**
 * User Profile Types
 * 
 * Type definitions for user profile and statistics
 */

export interface UserStats {
  totalGames: number;
  totalWins: number;
  totalLosses: number;
  winRate: number;
  totalRewards: string;
  averageScore: number;
}

export interface UserProfile {
  address: string;
  username?: string;
  stats: UserStats;
  createdAt: number;
  lastActive: number;
}

export interface GameHistory {
  gameId: string;
  timestamp: number;
  score: number;
  totalQuestions: number;
  rewardEarned: string;
  difficulty: 'easy' | 'medium' | 'hard';
}
