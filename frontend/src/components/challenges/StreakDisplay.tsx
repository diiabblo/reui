import React from 'react';
import { ChallengeStreak } from '@/types/challenge';

interface StreakDisplayProps {
  streak: ChallengeStreak;
}

/**
 * Display user's challenge streak information
 */
export const StreakDisplay: React.FC<StreakDisplayProps> = ({ streak }) => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span>🔥</span>
          <span>Challenge Streak</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-3xl font-bold">{streak.currentStreak}</p>
          <p className="text-sm opacity-90">Current Streak</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{streak.longestStreak}</p>
          <p className="text-sm opacity-90">Longest Streak</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{streak.totalChallengesCompleted}</p>
          <p className="text-sm opacity-90">Total Completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">
            {Math.round((streak.streakBonusMultiplier - 1) * 100)}%
          </p>
          <p className="text-sm opacity-90">Bonus Multiplier</p>
        </div>
      </div>

      {streak.currentStreak >= 7 && (
        <div className="mt-4 bg-white/20 rounded-lg p-3">
          <p className="text-center font-medium">
            🎉 Amazing! You're on a {streak.currentStreak} day streak!
          </p>
        </div>
      )}

      {streak.lastCompletedDate && (
        <div className="mt-4 text-sm opacity-75 text-center">
          Last completed: {new Date(streak.lastCompletedDate).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};
