import React from 'react';

interface AchievementBadgeProps {
  icon: string;
  name: string;
  description: string;
  isUnlocked: boolean;
  progress?: number;
  target?: number;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  icon,
  name,
  description,
  isUnlocked,
  progress,
  target,
}) => {
  const progressPercent = progress && target ? (progress / target) * 100 : 0;

  return (
    <div className={`p-4 rounded-xl border-2 ${isUnlocked ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
      <div className="text-4xl mb-2">{isUnlocked ? icon : '🔒'}</div>
      <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      {!isUnlocked && progress !== undefined && target && (
        <div className="mt-3">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${progressPercent}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-1">{progress}/{target}</p>
        </div>
      )}
    </div>
  );
};
