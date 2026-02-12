import React from 'react';
import { GameRoom } from '@/types/multiplayer';
import { getRoomStatusConfig } from '@/constants/multiplayer';
import { getCategoryById } from '@/constants/categories';

interface RoomCardProps {
  room: GameRoom;
  onJoin: (roomId: string) => void;
}

/**
 * Display card for a game room
 */
export const RoomCard: React.FC<RoomCardProps> = ({ room, onJoin }) => {
  const statusConfig = getRoomStatusConfig(room.status);
  const category = getCategoryById(room.categoryId || '');
  const isFull = room.currentPlayers >= room.maxPlayers;
  const canJoin = room.status === 'waiting' && !isFull;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{category?.icon || '🎮'}</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {room.name}
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Host: {room.hostAddress}
          </p>
        </div>
        
        <div
          className="px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1"
          style={{ backgroundColor: statusConfig?.color }}
        >
          <span>{statusConfig?.icon}</span>
          <span>{statusConfig?.label}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Players</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {room.currentPlayers}/{room.maxPlayers}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Questions</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {room.questionCount}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Entry Fee</p>
          <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
            {room.entryFee}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Prize Pool</p>
          <p className="text-lg font-bold text-green-600 dark:text-green-400">
            {room.prizePool}
          </p>
        </div>
      </div>

      {category && (
        <div className="mb-4">
          <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm text-gray-700 dark:text-gray-300">
            {category.name}
          </span>
        </div>
      )}

      {canJoin ? (
        <button
          onClick={() => onJoin(room.id)}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                     rounded-lg transition-colors"
        >
          Join Room
        </button>
      ) : isFull ? (
        <button
          disabled
          className="w-full py-2 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed"
        >
          Room Full
        </button>
      ) : (
        <button
          disabled
          className="w-full py-2 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed"
        >
          {statusConfig?.label}
        </button>
      )}
    </div>
  );
};
