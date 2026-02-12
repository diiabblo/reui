import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { GameHistory } from '@/types/profile';

export function useGameHistory() {
  const { address } = useAccount();
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (address) {
      fetchHistory();
    }
  }, [address]);

  const fetchHistory = async () => {
    setIsLoading(true);
    // TODO: Fetch from contract
    setHistory([]);
    setIsLoading(false);
  };

  return { history, isLoading, refetch: fetchHistory };
}
