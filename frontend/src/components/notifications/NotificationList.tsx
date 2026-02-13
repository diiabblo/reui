import React from 'react';
import { Notification } from '@/types/notification';
import { NotificationItem } from './NotificationItem';

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onMarkAsRead,
}) => {
  if (notifications.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔔</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No notifications
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          You&apos;re all caught up!
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
        />
      ))}
    </div>
  );
};
