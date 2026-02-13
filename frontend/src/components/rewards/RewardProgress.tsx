import React from 'react';
import { REWARD_TIERS } from '@/constants/rewards';

interface RewardProgressProps {
  currentPoints: number;
}

export const RewardProgress: React.FC<RewardProgressProps> = ({ currentPoints }) => {
  const currentTier = REWARD_TIERS.slice().reverse().find(t => currentPoints >= t.minPoints) || REWARD_TIERS[0];
  const nextTier = REWARD_TIERS.find(t => t.minPoints > currentPoints);
  const progress = nextTier 
    ? ((currentPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100 
    : 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Rewards</h3>
      <div className="mb-4">
        <p className="text-3xl font-bold text-purple-600">{currentPoints} pts</p>
        <p className="text-gray-600 dark:text-gray-400">{currentTier.name} Tier</p>
      </div>
      {nextTier && (
        <div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-sm text-gray-500">{nextTier.minPoints - currentPoints} points to {nextTier.name}</p>
        </div>
      )}
    </div>
  );
};
