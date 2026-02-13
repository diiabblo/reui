import React from 'react';
import { REFERRAL_CONFIG } from '@/constants/referral';

interface ReferralStatsProps {
  totalReferrals: number;
  completedReferrals: number;
  pendingReferrals: number;
  totalEarnings: number;
}

export const ReferralStats: React.FC<ReferralStatsProps> = ({
  totalReferrals,
  completedReferrals,
  pendingReferrals,
  totalEarnings,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
        <p className="text-3xl font-bold text-purple-600">{totalReferrals}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Total Referrals</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
        <p className="text-3xl font-bold text-green-600">{completedReferrals}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
        <p className="text-3xl font-bold text-yellow-600">{pendingReferrals}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
        <p className="text-3xl font-bold text-pink-600">{totalEarnings}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Total Earned</p>
      </div>
    </div>
  );
};
