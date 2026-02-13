import { useState, useEffect, useCallback } from 'react';
import { Notification, NOTIFICATION_CONFIG } from '@/types/notification';

export const useNotifications = (address?: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNotifications = useCallback(async () => {
    if (!address) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 300));

      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'achievement',
          title: 'Achievement Unlocked!',
          message: 'You earned the "First Win" badge',
          read: false,
          createdAt: new Date(),
        },
        {
          id: '2',
          type: 'reward',
          title: 'Reward Earned!',
          message: 'You received 500 points from referral',
          read: false,
          createdAt: new Date(Date.now() - 86400000),
        },
      ];

      setNotifications(mockNotifications);
      setUnreadCount(mockNotifications.filter((n) => !n.read).length);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
  }, []);

  return {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    markAllAsRead,
    refetch: fetchNotifications,
  };
};
