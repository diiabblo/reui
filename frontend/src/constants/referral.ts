export const REFERRAL_CONFIG = {
  CODE_LENGTH: 8,
  REFERRER_REWARD: 500,
  REFEREE_REWARD: 250,
  BONUS_THRESHOLD: 10,
  BONUS_REWARD: 1000,
  MAX_REFERRALS_PER_CODE: 100,
};

export const generateReferralCode = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < REFERRAL_CONFIG.CODE_LENGTH; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export const formatReferralCode = (code: string): string => {
  return code.toUpperCase().replace(/(.{4})/g, '$1 ').trim();
};
