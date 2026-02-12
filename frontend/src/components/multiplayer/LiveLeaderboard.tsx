import React from 'react';
import { RoomPlayer } from '@/types/multiplayer';

interface LiveLeaderboardProps {
  players: RoomPlayer[];
}

/**
 * Real-time leaderboard during multiplayer games
 */
export const LiveLeaderboard: React.FC<LiveLeaderboardProps> = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>🏆</span>
        <span>Live Leaderboard</span>
      </h3>

      <div className="space-y-2">
        {sortedPlayers.map((player, index) => {
          const accuracy = player.questionsAnswered > 0
            ? Math.round((player.correctAnswers / player.questionsAnswered) * 100)
            : 0;

          return (
            <div
              key={player.address}
              className={`flex items-center justify-between p-3 rounded-lg ${
                index === 0
                  ? 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30'
                  : index === 1
                  ? 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600'
                  : index === 2
                  ? 'bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30'
                  : 'bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 w-8">
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {player.username}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {accuracy}% accuracy • {player.questionsAnswered} answered
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {player.score}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">points</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
