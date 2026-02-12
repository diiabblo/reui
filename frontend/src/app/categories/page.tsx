'use client';

import React, { useState, useEffect } from 'react';
import { GAME_CATEGORIES } from '@/constants/categories';
import { useCategoryFilter } from '@/hooks/useCategoryFilter';
import {
  CategoryFilterHeader,
  CategoryGrid,
  SelectedCategoryTags,
  CategorySearch,
} from '@/components/categories';
import {
  saveCategoryPreferences,
  loadCategoryPreferences,
} from '@/utils/categoryStorage';
import { Category } from '@/types/category';

/**
 * Main categories page component
 */
export default function CategoriesPage() {
  const [displayedCategories, setDisplayedCategories] = useState<Category[]>(GAME_CATEGORIES);
  const [isLoading, setIsLoading] = useState(true);

  const {
    filterState,
    toggleCategory,
    clearFilters,
    setCategories,
  } = useCategoryFilter();

  // Load saved preferences on mount
  useEffect(() => {
    const savedCategories = loadCategoryPreferences();
    if (savedCategories.length > 0) {
      setCategories(savedCategories);
    }
    setIsLoading(false);
  }, [setCategories]);

  // Save preferences when selection changes
  useEffect(() => {
    if (!isLoading) {
      saveCategoryPreferences(filterState.selectedCategories);
    }
  }, [filterState.selectedCategories, isLoading]);

  const handleToggleCategory = (categoryId: string) => {
    toggleCategory(categoryId as any);
  };

  const handleSearchResults = (results: Category[]) => {
    setDisplayedCategories(results);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading categories...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <CategoryFilterHeader
          selectedCount={filterState.selectedCategories.length}
          totalCount={GAME_CATEGORIES.length}
          onClearFilters={clearFilters}
        />

        <SelectedCategoryTags
          selectedCategories={filterState.selectedCategories}
          categories={GAME_CATEGORIES}
          onRemoveCategory={handleToggleCategory}
        />

        <CategorySearch
          categories={GAME_CATEGORIES}
          onSearchResults={handleSearchResults}
        />

        <CategoryGrid
          categories={displayedCategories}
          selectedCategories={filterState.selectedCategories}
          onToggleCategory={handleToggleCategory}
        />

        {filterState.selectedCategories.length > 0 && (
          <div className="mt-8 text-center">
            <button
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold 
                         rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Start Game with Selected Categories
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
