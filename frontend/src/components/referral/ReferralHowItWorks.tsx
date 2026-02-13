import React from 'react';
import { REFERRAL_CONFIG } from '@/constants/referral';

interface ReferralHowItWorksProps {}

export const ReferralHowItWorks: React.FC<ReferralHowItWorksProps> = () => {
  const steps = [
    {
      number: 1,
      title: 'Share Your Code',
      description: 'Share your unique referral code with friends',
      icon: '📤',
    },
    {
      number: 2,
      title: 'Friend Signs Up',
      description: 'Your friend creates an account using your code',
      icon: '✅',
    },
    {
      number: 3,
      title: 'They Play',
      description: 'They complete their first game',
      icon: '🎮',
    },
    {
      number: 4,
      title: 'Earn Rewards',
      description: `You earn ${REFERRAL_CONFIG.REFERRER_REWARD} points, they get ${REFERRAL_CONFIG.REFEREE_REWARD}!`,
      icon: '🎁',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        How It Works
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-3xl">
              {step.icon}
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
