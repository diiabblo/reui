import React from 'react';
import { ReferralCode } from '@/types/referral';
import { formatReferralCode } from '@/constants/referral';

interface ReferralCodeCardProps {
  code: ReferralCode;
  onCopy: () => void;
  onGenerateNew: () => void;
}

export const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({
  code,
  onCopy,
  onGenerateNew,
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Your Referral Code</h3>
      
      <div className="bg-white/20 rounded-lg p-4 mb-4">
        <p className="text-3xl font-bold text-center tracking-wider">
          {formatReferralCode(code.code)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold">{code.totalReferrals}</p>
          <p className="text-sm opacity-80">Total Referrals</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">{code.totalEarnings}</p>
          <p className="text-sm opacity-80">Total Earned</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onCopy}
          className="flex-1 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
        >
          Copy Code
        </button>
        <button
          onClick={onGenerateNew}
          className="flex-1 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors"
        >
          Generate New
        </button>
      </div>
    </div>
  );
};
