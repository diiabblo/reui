'use client';

import React, { useState } from 'react';
import { useGameRooms } from '@/hooks/useGameRooms';
import { RoomCard, CreateRoomModal } from '@/components/multiplayer';
import { RoomFilters } from '@/types/multiplayer';

/**
 * Multiplayer game rooms page
 */
export default function MultiplayerPage() {
  const [filters, setFilters] = useState<RoomFilters>({ status: 'waiting' });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { rooms, isLoading } = useGameRooms(filters);

  const handleJoinRoom = (roomId: string) => {
    // Navigate to room detail page
    console.log('Joining room:', roomId);
    // router.push(`/multiplayer/${roomId}`);
  };

  const handleCreateRoom = (roomData: any) => {
    console.log('Creating room:', roomData);
    // API call to create room
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading rooms...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Multiplayer Rooms
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join a room or create your own to compete with other players
            </p>
          </div>
          
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                     rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Create Room
          </button>
        </div>

        <div className="mb-6 flex gap-4">
          <button
            onClick={() => setFilters({ status: 'waiting' })}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filters.status === 'waiting'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Waiting Rooms
          </button>
          <button
            onClick={() => setFilters({ status: 'in_progress' })}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filters.status === 'in_progress'
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilters({})}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !filters.status
                ? 'bg-purple-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            All Rooms
          </button>
        </div>

        {rooms.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No rooms available
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Be the first to create a room!
            </p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                       rounded-lg transition-colors"
            >
              Create Room
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} onJoin={handleJoinRoom} />
            ))}
          </div>
        )}

        <CreateRoomModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={handleCreateRoom}
        />
      </div>
    </div>
  );
}
