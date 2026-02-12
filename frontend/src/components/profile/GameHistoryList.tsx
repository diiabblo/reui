"use client";

import { GameHistory } from '@/types/profile';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from '@/utils/dateUtils';

interface GameHistoryListProps {
  history: GameHistory[];
}

export default function GameHistoryList({ history }: GameHistoryListProps) {
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">🎮</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          No Games Yet
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Start playing to build your game history!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Game History
      </h2>

      <div className="space-y-4">
        {history.map((game, index) => (
          <GameHistoryItem key={game.gameId} game={game} index={index} />
        ))}
      </div>
    </div>
  );
}

interface GameHistoryItemProps {
  game: GameHistory;
  index: number;
}

function GameHistoryItem({ game, index }: GameHistoryItemProps) {
  const percentage = (game.score / game.totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-700 rounded-r-lg p-4"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            Game #{game.gameId}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {formatDistanceToNow(game.timestamp)} ago
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
            {game.score}/{game.totalQuestions}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {percentage.toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
          {game.difficulty}
        </span>
        <span className="text-sm font-medium text-green-600 dark:text-green-400">
          +{game.rewardEarned} USDC
        </span>
      </div>
    </motion.div>
  );
}
