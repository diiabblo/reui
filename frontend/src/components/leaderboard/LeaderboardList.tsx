import React from 'react';
import { LeaderboardEntry } from '@/types/leaderboard';

interface LeaderboardListProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardList: React.FC<LeaderboardListProps> = ({ entries }) => {
  return (
    <div className="space-y-2">
      {entries.map((entry) => (
        <div
          key={entry.rank}
          className={`flex items-center justify-between p-4 rounded-lg ${
            entry.rank <= 3
              ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
              : 'bg-gray-50 dark:bg-gray-800'
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl w-10 text-center">
              {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
            </span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{entry.username}</p>
              <p className="text-sm text-gray-500">{entry.address}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-purple-600">{entry.score}</p>
            <p className="text-sm text-gray-500">{entry.gamesPlayed} games</p>
          </div>
        </div>
      ))}
    </div>
  );
};
