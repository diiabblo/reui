import React from 'react';

interface CategoryFilterHeaderProps {
  selectedCount: number;
  totalCount: number;
  onClearFilters: () => void;
}

/**
 * Header component for category filter section
 */
export const CategoryFilterHeader: React.FC<CategoryFilterHeaderProps> = ({
  selectedCount,
  totalCount,
  onClearFilters,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Select Categories
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {selectedCount === 0
            ? 'All categories selected'
            : `${selectedCount} of ${totalCount} categories selected`}
        </p>
      </div>
      
      {selectedCount > 0 && (
        <button
          onClick={onClearFilters}
          className="px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 
                     hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );
};
