import React from 'react';
import { DailyChallenge } from '@/types/challenge';
import { getDifficultyConfig } from '@/constants/challenges';
import { getCategoryById } from '@/constants/categories';

interface ChallengeCardProps {
  challenge: DailyChallenge;
  onStart: () => void;
}

/**
 * Display card for daily challenge
 */
export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  challenge,
  onStart,
}) => {
  const difficulty = getDifficultyConfig(challenge.difficulty);
  const category = getCategoryById(challenge.categoryId);
  
  const isCompleted = challenge.status === 'completed';
  const isFailed = challenge.status === 'failed';
  const isExpired = challenge.status === 'expired';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-purple-500">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{category?.icon || '🎮'}</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {challenge.title}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {challenge.description}
          </p>
        </div>
        
        <div
          className="px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1"
          style={{ backgroundColor: difficulty.color }}
        >
          <span>{difficulty.icon}</span>
          <span>{difficulty.label}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Questions</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {challenge.questionCount}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Time Limit</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {Math.floor(challenge.timeLimit / 60)}m
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Reward</p>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {challenge.baseReward + challenge.bonusReward}
          </p>
        </div>
      </div>

      {isCompleted && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-500 rounded-lg p-4 mb-4">
          <p className="text-green-700 dark:text-green-300 font-medium text-center">
            ✓ Challenge Completed!
          </p>
        </div>
      )}

      {isFailed && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-500 rounded-lg p-4 mb-4">
          <p className="text-red-700 dark:text-red-300 font-medium text-center">
            Challenge Failed - Try again tomorrow!
          </p>
        </div>
      )}

      {isExpired && (
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-500 rounded-lg p-4 mb-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
            Challenge Expired - Check back for a new one!
          </p>
        </div>
      )}

      {!isCompleted && !isFailed && !isExpired && (
        <button
          onClick={onStart}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                     rounded-lg transition-colors shadow-lg hover:shadow-xl"
        >
          Start Challenge
        </button>
      )}
    </div>
  );
};
