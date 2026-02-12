import React from 'react';
import { ChallengeReward } from '@/types/challenge';

interface RewardSummaryProps {
  reward: ChallengeReward;
}

/**
 * Display breakdown of challenge rewards
 */
export const RewardSummary: React.FC<RewardSummaryProps> = ({ reward }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 text-white shadow-lg">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span>🏆</span>
        <span>Rewards Earned</span>
      </h3>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-90">Base Reward</span>
          <span className="font-bold text-lg">{reward.baseReward}</span>
        </div>

        {reward.perfectBonus > 0 && (
          <div className="flex justify-between items-center bg-white/20 rounded-lg px-3 py-2">
            <span className="text-sm opacity-90 flex items-center gap-1">
              <span>✨</span>
              <span>Perfect Score Bonus</span>
            </span>
            <span className="font-bold text-lg">+{reward.perfectBonus}</span>
          </div>
        )}

        {reward.speedBonus > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90 flex items-center gap-1">
              <span>⚡</span>
              <span>Speed Bonus</span>
            </span>
            <span className="font-bold text-lg">+{reward.speedBonus}</span>
          </div>
        )}

        {reward.streakBonus > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90 flex items-center gap-1">
              <span>🔥</span>
              <span>Streak Bonus</span>
            </span>
            <span className="font-bold text-lg">+{reward.streakBonus}</span>
          </div>
        )}
      </div>

      <div className="border-t border-white/30 pt-3">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Total Reward</span>
          <span className="text-3xl font-bold">{reward.totalReward}</span>
        </div>
      </div>
    </div>
  );
};
