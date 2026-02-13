'use client';

import React, { useState } from 'react';
import { useReferral } from '@/hooks/useReferral';
import {
  ReferralCodeCard,
  ReferralStats,
  ReferralList,
  ReferralHowItWorks,
  ReferralInput,
} from '@/components/referral';

export default function ReferralPage() {
  const { referralCode, referrals, stats, isLoading, generateNewCode } = useReferral();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleApplyCode = (code: string) => {
    console.log('Applying referral code:', code);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Referral Program
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Share with friends and earn rewards!
          </p>
        </div>

        {stats && <ReferralStats {...stats} />}

        {referralCode && (
          <ReferralCodeCard
            code={referralCode}
            onCopy={handleCopy}
            onGenerateNew={generateNewCode}
          />
        )}

        {copied && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
            Code copied to clipboard!
          </div>
        )}

        <div className="mt-6">
          <ReferralHowItWorks />
        </div>

        <div className="mt-6">
          <ReferralInput onSubmit={handleApplyCode} />
        </div>

        <div className="mt-6">
          <ReferralList referrals={referrals} />
        </div>
      </div>
    </div>
  );
}
