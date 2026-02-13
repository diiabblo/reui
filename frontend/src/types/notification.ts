export interface Notification {
  id: string;
  type: 'achievement' | 'referral' | 'reward' | 'challenge' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export const NOTIFICATION_CONFIG = {
  achievement: { icon: '🏆', color: '#F59E0B' },
  referral: { icon: '👥', color: '#8B5CF6' },
  reward: { icon: '🎁', color: '#10B981' },
  challenge: { icon: '🎯', color: '#EF4444' },
  system: { icon: 'ℹ️', color: '#6B7280' },
};
