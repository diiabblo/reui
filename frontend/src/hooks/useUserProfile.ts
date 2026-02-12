import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import { UserProfile, UserStats } from '@/types/profile';

/**
 * Hook to fetch and manage user profile data
 */
export function useUserProfile() {
  const { address } = useAccount();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!address) {
      setProfile(null);
      return;
    }

    fetchProfile();
  }, [address]);

  const fetchProfile = async () => {
    if (!address) return;

    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual profile fetching from contract/API
      const mockProfile: UserProfile = {
        address,
        stats: {
          totalGames: 0,
          totalWins: 0,
          totalLosses: 0,
          winRate: 0,
          totalRewards: '0',
          averageScore: 0,
        },
        createdAt: Date.now(),
        lastActive: Date.now(),
      };

      setProfile(mockProfile);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshProfile = () => {
    fetchProfile();
  };

  return {
    profile,
    isLoading,
    error,
    refreshProfile,
  };
}
