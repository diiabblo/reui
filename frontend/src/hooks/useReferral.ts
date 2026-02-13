import { useState, useEffect, useCallback } from 'react';
import { Referral, ReferralStats, ReferralCode } from '@/types/referral';
import { REFERRAL_CONFIG } from '@/constants/referral';

export const useReferral = (address?: string) => {
  const [referralCode, setReferralCode] = useState<ReferralCode | null>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [stats, setStats] = useState<ReferralStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReferralData = useCallback(async () => {
    if (!address) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      const mockCode: ReferralCode = {
        code: 'REUI2025',
        ownerAddress: address,
        createdAt: new Date(),
        totalReferrals: 15,
        totalEarnings: 7500,
        isActive: true,
      };

      const mockReferrals: Referral[] = [
        {
          id: '1',
          referrerAddress: address,
          refereeAddress: '0xabc...123',
          referralCode: 'REUI2025',
          status: 'rewarded',
          referredAt: new Date('2025-01-15'),
          completedAt: new Date('2025-01-20'),
          rewardAmount: 500,
        },
        {
          id: '2',
          referrerAddress: address,
          refereeAddress: '0xdef...456',
          referralCode: 'REUI2025',
          status: 'completed',
          referredAt: new Date('2025-02-01'),
          completedAt: new Date('2025-02-05'),
          rewardAmount: 500,
        },
      ];

      const mockStats: ReferralStats = {
        totalReferrals: 15,
        completedReferrals: 12,
        pendingReferrals: 3,
        totalEarnings: 7500,
        referralCode: 'REUI2025',
      };

      setReferralCode(mockCode);
      setReferrals(mockReferrals);
      setStats(mockStats);
    } catch (error) {
      console.error('Error fetching referral data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchReferralData();
  }, [fetchReferralData]);

  const generateNewCode = useCallback(async () => {
    // Mock API call
    const newCode: ReferralCode = {
      code: 'NEW' + Math.random().toString(36).substring(7).toUpperCase(),
      ownerAddress: address || '',
      createdAt: new Date(),
      totalReferrals: 0,
      totalEarnings: 0,
      isActive: true,
    };
    setReferralCode(newCode);
    return newCode;
  }, [address]);

  return {
    referralCode,
    referrals,
    stats,
    isLoading,
    generateNewCode,
    refetch: fetchReferralData,
  };
};
