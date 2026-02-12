import React from 'react';
import { GameRoom } from '@/types/multiplayer';

interface RoomListProps {
  rooms: GameRoom[];
  onJoinRoom: (roomId: string) => void;
}

/**
 * Grid layout for displaying available rooms
 */
export const RoomList: React.FC<RoomListProps> = ({ rooms, onJoinRoom }) => {
  if (rooms.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎮</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No rooms available
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Be the first to create a room!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room) => {
        const isFull = room.currentPlayers >= room.maxPlayers;
        const canJoin = room.status === 'waiting' && !isFull;

        return (
          <div
            key={room.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {room.name}
            </h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Players</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {room.currentPlayers}/{room.maxPlayers}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Entry Fee</span>
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {room.entryFee}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Prize Pool</span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {room.prizePool}
                </span>
              </div>
            </div>

            {canJoin ? (
              <button
                onClick={() => onJoinRoom(room.id)}
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                         rounded-lg transition-colors"
              >
                Join Room
              </button>
            ) : (
              <button
                disabled
                className="w-full py-2 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed"
              >
                {isFull ? 'Full' : 'In Progress'}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
