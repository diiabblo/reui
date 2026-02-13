import { useState, useEffect } from 'react';
import { LeaderboardEntry } from '@/types/leaderboard';

export const useLeaderboard = (limit = 10) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      await new Promise((r) => setTimeout(r, 300));
      const mockEntries: LeaderboardEntry[] = Array.from({ length: limit }, (_, i) => ({
        rank: i + 1,
        address: `0x${(i * 1111).toString(16)}...${(i * 9999).toString(16).slice(-4)}`,
        username: `Player${i + 1}`,
        score: 10000 - i * 500,
        gamesPlayed: 50 - i * 2,
      }));
      setEntries(mockEntries);
      setIsLoading(false);
    };
    fetchLeaderboard();
  }, [limit]);

  return { entries, isLoading };
};
