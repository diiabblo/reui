import React from 'react';
import { Category } from '@/types/category';
import { CategoryCard } from './CategoryCard';

interface CategoryGridProps {
  categories: Category[];
  selectedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
}

/**
 * Grid layout for displaying category cards
 */
export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedCategories,
  onToggleCategory,
}) => {
  if (categories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No categories available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isSelected={selectedCategories.includes(category.id)}
          onToggle={() => onToggleCategory(category.id)}
        />
      ))}
    </div>
  );
};
