import React from 'react';
import { Referral } from '@/types/referral';

interface ReferralListProps {
  referrals: Referral[];
}

export const ReferralList: React.FC<ReferralListProps> = ({ referrals }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'rewarded':
        return 'bg-green-100 text-green-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Your Referrals
      </h3>

      {referrals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No referrals yet. Share your code to get started!
        </p>
      ) : (
        <div className="space-y-3">
          {referrals.map((referral) => (
            <div
              key={referral.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {referral.refereeAddress}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Referred: {new Date(referral.referredAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(referral.status)}`}
                >
                  {referral.status}
                </span>
                {referral.rewardAmount > 0 && (
                  <p className="text-sm font-bold text-green-600 dark:text-green-400 mt-1">
                    +{referral.rewardAmount}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
