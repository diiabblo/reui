import React from 'react';
import { Category } from '@/types/category';

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onToggle: () => void;
}

/**
 * Category card component for displaying and selecting categories
 */
export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative p-4 rounded-xl border-2 transition-all duration-200
        hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          isSelected
            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
        }
      `}
      style={{
        ...(isSelected && { borderColor: category.color }),
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl">{category.icon}</span>
        <h3 className="font-semibold text-sm text-center">{category.name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center line-clamp-2">
          {category.description}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
          <span>{category.questionCount}</span>
          <span>questions</span>
        </div>
      </div>
      
      {isSelected && (
        <div 
          className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
          style={{ backgroundColor: category.color }}
        >
          ✓
        </div>
      )}
    </button>
  );
};
