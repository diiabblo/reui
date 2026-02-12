import { useState, useCallback, useEffect } from 'react';
import { GameRoomDetails, RoomPlayer } from '@/types/multiplayer';

/**
 * Hook for managing game room details
 */
export const useGameRoom = (roomId: string) => {
  const [room, setRoom] = useState<GameRoomDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRoomDetails = useCallback(async () => {
    if (!roomId) return;

    try {
      setIsLoading(true);
      setError(null);

      // Mock data - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 300));

      const mockPlayers: RoomPlayer[] = [
        {
          address: '0x1234...5678',
          username: 'Alice',
          status: 'ready',
          score: 0,
          questionsAnswered: 0,
          correctAnswers: 0,
          joinedAt: new Date(),
          isHost: true,
        },
        {
          address: '0xabcd...efgh',
          username: 'Bob',
          status: 'waiting',
          score: 0,
          questionsAnswered: 0,
          correctAnswers: 0,
          joinedAt: new Date(),
          isHost: false,
        },
      ];

      const mockRoom: GameRoomDetails = {
        id: roomId,
        name: 'Science Showdown',
        hostAddress: '0x1234...5678',
        maxPlayers: 4,
        currentPlayers: 2,
        status: 'waiting',
        categoryId: 'science',
        questionCount: 10,
        entryFee: 100,
        prizePool: 200,
        createdAt: new Date(),
        players: mockPlayers,
        currentQuestionIndex: 0,
        timeRemaining: 30,
      };

      setRoom(mockRoom);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch room details'));
    } finally {
      setIsLoading(false);
    }
  }, [roomId]);

  const joinRoom = useCallback(async () => {
    // Mock join room logic
    console.log('Joining room:', roomId);
  }, [roomId]);

  const leaveRoom = useCallback(async () => {
    // Mock leave room logic
    console.log('Leaving room:', roomId);
  }, [roomId]);

  const setReady = useCallback(async () => {
    // Mock set ready logic
    console.log('Setting ready in room:', roomId);
  }, [roomId]);

  const startGame = useCallback(async () => {
    // Mock start game logic
    console.log('Starting game in room:', roomId);
  }, [roomId]);

  useEffect(() => {
    fetchRoomDetails();
    
    // Polling for real-time updates
    const interval = setInterval(fetchRoomDetails, 2000);
    return () => clearInterval(interval);
  }, [fetchRoomDetails]);

  return {
    room,
    isLoading,
    error,
    joinRoom,
    leaveRoom,
    setReady,
    startGame,
    refetch: fetchRoomDetails,
  };
};
