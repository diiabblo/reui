import { useState, useCallback } from 'react';
import { Referral } from '@/types/referral';

export const useReferralHistory = (address?: string) => {
  const [history, setHistory] = useState<Referral[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHistory = useCallback(async () => {
    if (!address) return;
    
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    const mockHistory: Referral[] = [];
    setHistory(mockHistory);
    setIsLoading(false);
  }, [address]);

  return {
    history,
    isLoading,
    fetchHistory,
  };
};
