import { useState, useCallback, useEffect } from 'react';
import { CategoryStats } from '@/types/category';

/**
 * Mock hook for fetching category statistics
 * In production, this would fetch from the blockchain or backend API
 */
export const useCategoryStats = (address?: string) => {
  const [stats, setStats] = useState<CategoryStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchStats = useCallback(async () => {
    if (!address) {
      setStats([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Mock data - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockStats: CategoryStats[] = [
        {
          categoryId: 'general',
          totalPlayed: 45,
          correctAnswers: 38,
          averageScore: 850,
          lastPlayed: new Date('2025-02-10'),
        },
        {
          categoryId: 'science',
          totalPlayed: 32,
          correctAnswers: 28,
          averageScore: 775,
          lastPlayed: new Date('2025-02-11'),
        },
        {
          categoryId: 'history',
          totalPlayed: 28,
          correctAnswers: 22,
          averageScore: 720,
          lastPlayed: new Date('2025-02-09'),
        },
      ];

      setStats(mockStats);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch stats'));
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    isLoading,
    error,
    refetch: fetchStats,
  };
};
