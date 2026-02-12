import { useState, useCallback } from 'react';
import { CategoryId, CategoryFilterState } from '@/types/category';

/**
 * Hook for managing category filter state
 */
export const useCategoryFilter = (initialCategories: CategoryId[] = []) => {
  const [filterState, setFilterState] = useState<CategoryFilterState>({
    selectedCategories: initialCategories,
    showAll: initialCategories.length === 0,
  });

  const toggleCategory = useCallback((categoryId: CategoryId) => {
    setFilterState((prev) => {
      const isSelected = prev.selectedCategories.includes(categoryId);
      const newSelected = isSelected
        ? prev.selectedCategories.filter((id) => id !== categoryId)
        : [...prev.selectedCategories, categoryId];

      return {
        selectedCategories: newSelected,
        showAll: newSelected.length === 0,
      };
    });
  }, []);

  const selectCategory = useCallback((categoryId: CategoryId) => {
    setFilterState({
      selectedCategories: [categoryId],
      showAll: false,
    });
  }, []);

  const clearFilters = useCallback(() => {
    setFilterState({
      selectedCategories: [],
      showAll: true,
    });
  }, []);

  const setCategories = useCallback((categories: CategoryId[]) => {
    setFilterState({
      selectedCategories: categories,
      showAll: categories.length === 0,
    });
  }, []);

  const isCategorySelected = useCallback(
    (categoryId: CategoryId) => {
      return filterState.selectedCategories.includes(categoryId);
    },
    [filterState.selectedCategories]
  );

  return {
    filterState,
    toggleCategory,
    selectCategory,
    clearFilters,
    setCategories,
    isCategorySelected,
  };
};
