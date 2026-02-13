import { useState, useCallback } from 'react';

export const useShare = () => {
  const [isLoading, setIsLoading] = useState(false);

  const share = useCallback(async (data: any) => {
    if (navigator.share) {
      try {
        await navigator.share(data);
        return { success: true };
      } catch (error) {
        return { success: false, error };
      }
    }
    return { success: false, error: 'Web Share not supported' };
  }, []);

  return { share, isLoading };
};
