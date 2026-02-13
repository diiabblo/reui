/**
 * Referral system type definitions
 */

export interface ReferralCode {
  code: string;
  ownerAddress: string;
  createdAt: Date;
  totalReferrals: number;
  totalEarnings: number;
  isActive: boolean;
}

export interface Referral {
  id: string;
  referrerAddress: string;
  refereeAddress: string;
  referralCode: string;
  status: 'pending' | 'completed' | 'rewarded';
  referredAt: Date;
  completedAt?: Date;
  rewardAmount: number;
}

export interface ReferralStats {
  totalReferrals: number;
  completedReferrals: number;
  pendingReferrals: number;
  totalEarnings: number;
  referralCode: string;
}

export interface ReferralReward {
  referrerReward: number;
  refereeReward: number;
  bonusReward: number;
  totalReward: number;
}
