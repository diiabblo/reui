/**
 * Multiplayer game configuration and constants
 */

export const MULTIPLAYER_CONFIG = {
  MIN_PLAYERS: 2,
  MAX_PLAYERS: 10,
  DEFAULT_PLAYERS: 4,
  MIN_QUESTIONS: 5,
  MAX_QUESTIONS: 20,
  DEFAULT_QUESTIONS: 10,
  MIN_ENTRY_FEE: 0,
  MAX_ENTRY_FEE: 10000,
  ROOM_EXPIRY_HOURS: 1,
  ANSWER_TIME_LIMIT: 30, // seconds per question
  WAITING_ROOM_TIMEOUT: 300, // 5 minutes
};

/**
 * Room status configurations
 */
export const ROOM_STATUS_CONFIG = {
  waiting: {
    label: 'Waiting',
    color: '#F59E0B',
    icon: '⏳',
    description: 'Waiting for players',
  },
  in_progress: {
    label: 'In Progress',
    color: '#10B981',
    icon: '🎮',
    description: 'Game in progress',
  },
  completed: {
    label: 'Completed',
    color: '#6B7280',
    icon: '✓',
    description: 'Game finished',
  },
};

/**
 * Calculate prize distribution
 */
export const calculatePrizeDistribution = (
  prizePool: number,
  playerCount: number
): number[] => {
  if (playerCount === 2) {
    return [prizePool * 0.7, prizePool * 0.3];
  } else if (playerCount === 3) {
    return [prizePool * 0.5, prizePool * 0.3, prizePool * 0.2];
  } else {
    // Top 3 get prizes
    return [prizePool * 0.5, prizePool * 0.3, prizePool * 0.2];
  }
};

/**
 * Calculate score for a correct answer
 */
export const calculateAnswerScore = (
  timeRemaining: number,
  timeLimit: number,
  basePoints: number = 100
): number => {
  const timeBonus = (timeRemaining / timeLimit) * 50;
  return Math.round(basePoints + timeBonus);
};

/**
 * Get room status configuration
 */
export const getRoomStatusConfig = (status: string) => {
  return ROOM_STATUS_CONFIG[status as keyof typeof ROOM_STATUS_CONFIG];
};
