import React, { useState, useEffect } from 'react';
import { formatTimeRemaining } from '@/utils/challengeUtils';

interface ChallengeTimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isPaused?: boolean;
}

/**
 * Countdown timer for challenges
 */
export const ChallengeTimer: React.FC<ChallengeTimerProps> = ({
  initialTime,
  onTimeUp,
  isPaused = false,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    if (isPaused || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timeRemaining, onTimeUp]);

  const percentage = (timeRemaining / initialTime) * 100;
  const isLowTime = percentage < 25;
  const isCritical = percentage < 10;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Time Remaining
        </span>
        <span
          className={`text-2xl font-bold ${
            isCritical
              ? 'text-red-600 animate-pulse'
              : isLowTime
              ? 'text-orange-600'
              : 'text-gray-900 dark:text-white'
          }`}
        >
          {formatTimeRemaining(timeRemaining)}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ${
            isCritical
              ? 'bg-red-600'
              : isLowTime
              ? 'bg-orange-500'
              : 'bg-green-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
