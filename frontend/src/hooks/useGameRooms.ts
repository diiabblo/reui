import { useState, useCallback, useEffect } from 'react';
import { GameRoom, RoomFilters } from '@/types/multiplayer';
import { MULTIPLAYER_CONFIG } from '@/constants/multiplayer';

/**
 * Hook for managing game rooms list
 */
export const useGameRooms = (filters?: RoomFilters) => {
  const [rooms, setRooms] = useState<GameRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRooms = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Mock data - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockRooms: GameRoom[] = [
        {
          id: 'room-1',
          name: 'Science Showdown',
          hostAddress: '0x1234...5678',
          maxPlayers: 4,
          currentPlayers: 2,
          status: 'waiting',
          categoryId: 'science',
          questionCount: 10,
          entryFee: 100,
          prizePool: 400,
          createdAt: new Date(),
        },
        {
          id: 'room-2',
          name: 'History Battle',
          hostAddress: '0xabcd...efgh',
          maxPlayers: 6,
          currentPlayers: 4,
          status: 'waiting',
          categoryId: 'history',
          questionCount: 15,
          entryFee: 50,
          prizePool: 300,
          createdAt: new Date(),
        },
        {
          id: 'room-3',
          name: 'General Knowledge Arena',
          hostAddress: '0x9876...5432',
          maxPlayers: 10,
          currentPlayers: 8,
          status: 'in_progress',
          categoryId: 'general',
          questionCount: 20,
          entryFee: 200,
          prizePool: 2000,
          createdAt: new Date(),
          startedAt: new Date(),
        },
      ];

      // Apply filters
      let filtered = mockRooms;
      if (filters?.status) {
        filtered = filtered.filter((room) => room.status === filters.status);
      }
      if (filters?.minPlayers) {
        filtered = filtered.filter((room) => room.currentPlayers >= filters.minPlayers);
      }
      if (filters?.maxEntryFee) {
        filtered = filtered.filter((room) => room.entryFee <= filters.maxEntryFee);
      }
      if (filters?.categoryId) {
        filtered = filtered.filter((room) => room.categoryId === filters.categoryId);
      }

      setRooms(filtered);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch rooms'));
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchRooms();
    
    // Polling for real-time updates
    const interval = setInterval(fetchRooms, 5000);
    return () => clearInterval(interval);
  }, [fetchRooms]);

  return {
    rooms,
    isLoading,
    error,
    refetch: fetchRooms,
  };
};
