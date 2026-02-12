import React from 'react';
import { ChallengeProgress } from '@/types/challenge';
import { getCompletionPercentage } from '@/utils/challengeUtils';

interface ChallengeProgressBarProps {
  progress: ChallengeProgress;
  totalQuestions: number;
}

/**
 * Visual progress bar for challenge completion
 */
export const ChallengeProgressBar: React.FC<ChallengeProgressBarProps> = ({
  progress,
  totalQuestions,
}) => {
  const percentage = getCompletionPercentage(progress.questionsAnswered, totalQuestions);
  const accuracy = progress.questionsAnswered > 0
    ? Math.round((progress.correctAnswers / progress.questionsAnswered) * 100)
    : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Progress
        </span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {progress.questionsAnswered} / {totalQuestions}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-600 dark:text-gray-400">Correct: </span>
          <span className="font-bold text-green-600 dark:text-green-400">
            {progress.correctAnswers}
          </span>
        </div>
        <div>
          <span className="text-gray-600 dark:text-gray-400">Accuracy: </span>
          <span className="font-bold text-purple-600 dark:text-purple-400">
            {accuracy}%
          </span>
        </div>
        <div>
          <span className="text-gray-600 dark:text-gray-400">Score: </span>
          <span className="font-bold text-gray-900 dark:text-white">
            {progress.score}
          </span>
        </div>
      </div>
    </div>
  );
};
