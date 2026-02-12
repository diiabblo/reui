import React from 'react';
import { CategoryStats } from '@/types/category';
import { getCategoryById } from '@/constants/categories';

interface CategoryStatsCardProps {
  stats: CategoryStats;
}

/**
 * Display statistics for a specific category
 */
export const CategoryStatsCard: React.FC<CategoryStatsCardProps> = ({ stats }) => {
  const category = getCategoryById(stats.categoryId);
  
  if (!category) return null;

  const accuracyRate = stats.totalPlayed > 0 
    ? Math.round((stats.correctAnswers / stats.totalPlayed) * 100) 
    : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{category.icon}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {category.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {stats.totalPlayed} games played
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Accuracy</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {accuracyRate}%
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Avg Score</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {stats.averageScore.toFixed(0)}
          </p>
        </div>
      </div>

      {stats.lastPlayed && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Last played: {new Date(stats.lastPlayed).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};
