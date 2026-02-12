'use client';

import React from 'react';
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { useChallengeStreak } from '@/hooks/useChallengeStreak';
import { ChallengeCard, StreakDisplay } from '@/components/challenges';

/**
 * Daily challenges page
 */
export default function ChallengesPage() {
  const { challenge, isLoading, startChallenge } = useDailyChallenge();
  const { streak, isLoading: streakLoading } = useChallengeStreak();

  if (isLoading || streakLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading challenge...</div>
      </div>
    );
  }

  const handleStartChallenge = () => {
    startChallenge();
    // Navigate to challenge game page
    // router.push(`/challenges/${challenge?.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Daily Challenges
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete challenges to earn rewards and build your streak!
          </p>
        </div>

        <div className="mb-8">
          <StreakDisplay streak={streak} />
        </div>

        {challenge ? (
          <ChallengeCard challenge={challenge} onStart={handleStartChallenge} />
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No challenge available. Check back tomorrow!
            </p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {streak.totalChallengesCompleted}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Completed
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {Math.round((streak.streakBonusMultiplier - 1) * 100)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Bonus Multiplier
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {streak.longestStreak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Longest Streak
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
