import { Referral, ReferralReward } from '@/types/referral';
import { REFERRAL_CONFIG } from '@/constants/referral';

export const calculateReferralReward = (
  referral: Referral,
  isBonus: boolean = false
): ReferralReward => {
  const referrerReward = isBonus
    ? REFERRAL_CONFIG.BONUS_REWARD
    : REFERRAL_CONFIG.REFERRER_REWARD;

  const totalReward = referrerReward + REFERRAL_CONFIG.REFEREE_REWARD;

  return {
    referrerReward,
    refereeReward: REFERRAL_CONFIG.REFEREE_REWARD,
    bonusReward: isBonus ? REFERRAL_CONFIG.BONUS_REWARD : 0,
    totalReward,
  };
};

export const isReferralEligibleForBonus = (referral: Referral): boolean => {
  return referral.status === 'completed' && !referral.rewarded;
};

export const formatReferralEarnings = (amount: number): string => {
  return amount.toLocaleString() + ' points';
};
