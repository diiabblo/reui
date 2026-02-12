import React from 'react';
import { Category } from '@/types/category';
import { getCategoryColor } from '@/constants/categories';

interface SelectedCategoryTagsProps {
  selectedCategories: string[];
  categories: Category[];
  onRemoveCategory: (categoryId: string) => void;
}

/**
 * Display selected categories as removable tags
 */
export const SelectedCategoryTags: React.FC<SelectedCategoryTagsProps> = ({
  selectedCategories,
  categories,
  onRemoveCategory,
}) => {
  if (selectedCategories.length === 0) {
    return null;
  }

  const selectedCategoryObjects = categories.filter((cat) =>
    selectedCategories.includes(cat.id)
  );

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {selectedCategoryObjects.map((category) => (
        <span
          key={category.id}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white"
          style={{ backgroundColor: getCategoryColor(category.id) }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
          <button
            onClick={() => onRemoveCategory(category.id)}
            className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
            aria-label={`Remove ${category.name}`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
      ))}
    </div>
  );
};
