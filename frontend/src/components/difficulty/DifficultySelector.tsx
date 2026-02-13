import React from 'react';
import { DifficultyCard } from './DifficultyCard';
import { DifficultyLevel, DIFFICULTY_LEVELS } from '@/constants/difficulty';

interface DifficultySelectorProps {
  selected: DifficultyLevel;
  onSelect: (level: DifficultyLevel) => void;
  unlockedLevels: DifficultyLevel[];
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selected,
  onSelect,
  unlockedLevels,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {DIFFICULTY_LEVELS.map((difficulty) => (
        <DifficultyCard
          key={difficulty.level}
          difficulty={difficulty}
          isSelected={selected === difficulty.level}
          isUnlocked={unlockedLevels.includes(difficulty.level)}
          onSelect={() => onSelect(difficulty.level)}
        />
      ))}
    </div>
  );
};
