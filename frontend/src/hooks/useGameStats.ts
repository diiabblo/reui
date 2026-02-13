import { useState, useEffect } from 'react';
import { GameStats } from '@/types/stats';

export const useGameStats = () => {
  const [stats, setStats] = useState<GameStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      await new Promise((r) => setTimeout(r, 300));
      setStats({
        totalGamesPlayed: 50,
        totalQuestionsAnswered: 500,
        correctAnswers: 420,
        totalPointsEarned: 25000,
        highestScore: 9500,
        currentStreak: 7,
        longestStreak: 15,
      });
      setIsLoading(false);
    };
    fetchStats();
  }, []);

  return { stats, isLoading };
};
