import React, { useState } from 'react';
import { REFERRAL_CONFIG } from '@/constants/referral';

interface ReferralInputProps {
  onSubmit: (code: string) => void;
}

export const ReferralInput: React.FC<ReferralInputProps> = ({ onSubmit }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < REFERRAL_CONFIG.CODE_LENGTH) {
      setError('Please enter a valid referral code');
      return;
    }
    setError('');
    onSubmit(code.toUpperCase());
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Have a Referral Code?
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="Enter referral code"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white uppercase"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                     rounded-lg transition-colors"
          >
            Apply
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
        Enter a friend&apos;s referral code to get {REFERRAL_CONFIG.REFEREE_REWARD} bonus points!
      </p>
    </div>
  );
};
