import { useState, useCallback, useEffect } from 'react';
import { DifficultyLevel } from '@/constants/difficulty';

export const useDifficulty = (initialLevel: DifficultyLevel = 'easy') => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>(initialLevel);
  const [unlockedDifficulties, setUnlockedDifficulties] = useState<DifficultyLevel[]>(['easy']);

  const unlockDifficulty = useCallback((level: DifficultyLevel) => {
    setUnlockedDifficulties((prev) => {
      if (!prev.includes(level)) {
        return [...prev, level];
      }
      return prev;
    });
  }, []);

  const selectDifficulty = useCallback((level: DifficultyLevel) => {
    if (unlockedDifficulties.includes(level)) {
      setSelectedDifficulty(level);
    }
  }, [unlockedDifficulties]);

  return {
    selectedDifficulty,
    unlockedDifficulties,
    selectDifficulty,
    unlockDifficulty,
  };
};
