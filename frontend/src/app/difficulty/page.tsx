'use client';

import React from 'react';
import { DifficultySelector } from '@/components/difficulty';
import { useDifficulty } from '@/hooks/useDifficulty';

export default function DifficultyPage() {
  const { selectedDifficulty, unlockedDifficulties, selectDifficulty } = useDifficulty();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Select Difficulty
        </h1>
        <DifficultySelector
          selected={selectedDifficulty}
          onSelect={selectDifficulty}
          unlockedLevels={unlockedDifficulties}
        />
      </div>
    </div>
  );
}
