import React from 'react';
import { RoomPlayer } from '@/types/multiplayer';

interface PlayerListProps {
  players: RoomPlayer[];
  maxPlayers: number;
}

/**
 * Display list of players in a room
 */
export const PlayerList: React.FC<PlayerListProps> = ({ players, maxPlayers }) => {
  const emptySlots = maxPlayers - players.length;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Players ({players.length}/{maxPlayers})
      </h3>

      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player.address}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                {player.username[0].toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {player.username}
                  </p>
                  {player.isHost && (
                    <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded">
                      Host
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {player.address}
                </p>
              </div>
            </div>

            <div>
              {player.status === 'ready' && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-sm rounded-full">
                  ✓ Ready
                </span>
              )}
              {player.status === 'waiting' && (
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Waiting
                </span>
              )}
              {player.status === 'playing' && (
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                  Playing
                </span>
              )}
            </div>
          </div>
        ))}

        {Array.from({ length: emptySlots }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"
          >
            <div className="flex items-center gap-3 opacity-50">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
              <p className="text-gray-500 dark:text-gray-400">Waiting for player...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
