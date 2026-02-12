import { CategoryId } from '@/types/category';

/**
 * Local storage key for category preferences
 */
const CATEGORY_PREFERENCE_KEY = 'reui_category_preferences';

export interface CategoryPreferences {
  selectedCategories: CategoryId[];
  lastUpdated: string;
}

/**
 * Save category preferences to local storage
 */
export const saveCategoryPreferences = (categories: CategoryId[]): void => {
  try {
    const preferences: CategoryPreferences = {
      selectedCategories: categories,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(CATEGORY_PREFERENCE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Failed to save category preferences:', error);
  }
};

/**
 * Load category preferences from local storage
 */
export const loadCategoryPreferences = (): CategoryId[] => {
  try {
    const stored = localStorage.getItem(CATEGORY_PREFERENCE_KEY);
    if (!stored) return [];
    
    const preferences: CategoryPreferences = JSON.parse(stored);
    return preferences.selectedCategories || [];
  } catch (error) {
    console.error('Failed to load category preferences:', error);
    return [];
  }
};

/**
 * Clear category preferences from local storage
 */
export const clearCategoryPreferences = (): void => {
  try {
    localStorage.removeItem(CATEGORY_PREFERENCE_KEY);
  } catch (error) {
    console.error('Failed to clear category preferences:', error);
  }
};
