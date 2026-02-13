import { ReferralCode, ReferralStats } from '@/types/referral';

const REFERRAL_CODE_KEY = 'reui_referral_code';
const REFERRAL_STATS_KEY = 'reui_referral_stats';
const APPLIED_CODE_KEY = 'reui_applied_referral_code';

export const saveReferralCode = (code: ReferralCode): void => {
  try {
    localStorage.setItem(REFERRAL_CODE_KEY, JSON.stringify(code));
  } catch (error) {
    console.error('Error saving referral code:', error);
  }
};

export const loadReferralCode = (): ReferralCode | null => {
  try {
    const stored = localStorage.getItem(REFERRAL_CODE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading referral code:', error);
    return null;
  }
};

export const saveReferralStats = (stats: ReferralStats): void => {
  try {
    localStorage.setItem(REFERRAL_STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving referral stats:', error);
  }
};

export const loadReferralStats = (): ReferralStats | null => {
  try {
    const stored = localStorage.getItem(REFERRAL_STATS_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading referral stats:', error);
    return null;
  }
};

export const setAppliedReferralCode = (code: string): void => {
  try {
    localStorage.setItem(APPLIED_CODE_KEY, code);
  } catch (error) {
    console.error('Error saving applied code:', error);
  }
};

export const getAppliedReferralCode = (): string | null => {
  try {
    return localStorage.getItem(APPLIED_CODE_KEY);
  } catch (error) {
    console.error('Error getting applied code:', error);
    return null;
  }
};
