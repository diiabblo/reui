# Game Categories Filter

This feature allows users to filter trivia questions by category, providing a more personalized gaming experience.

## Features

- **10 Categories**: General Knowledge, Science, History, Sports, Entertainment, Geography, Art & Culture, Technology, Literature, and Music
- **Visual Category Cards**: Each category displays with a unique icon, color, and question count
- **Multi-Select**: Users can select multiple categories for mixed-topic games
- **Search Functionality**: Quick search to find specific categories
- **Persistent Preferences**: Selected categories are saved to localStorage
- **Category Statistics**: Track performance per category
- **Responsive Design**: Works seamlessly on mobile and desktop

## Components

### CategoryCard
Individual category display with icon, name, description, and selection state.

### CategoryGrid
Responsive grid layout for displaying all available categories.

### CategoryFilterHeader
Header showing selection count and clear filters button.

### SelectedCategoryTags
Displays selected categories as removable tags.

### CategorySearch
Search input for filtering categories by name or description.

### CategoryStatsCard
Shows user statistics for individual categories.

## Hooks

### useCategoryFilter
Manages category selection state and provides helper functions.

### useCategoryStats
Fetches and manages category performance statistics.

## Usage

```tsx
import { useCategoryFilter } from '@/hooks/useCategoryFilter';
import { CategoryGrid } from '@/components/categories';
import { GAME_CATEGORIES } from '@/constants/categories';

const MyComponent = () => {
  const { filterState, toggleCategory } = useCategoryFilter();
  
  return (
    <CategoryGrid
      categories={GAME_CATEGORIES}
      selectedCategories={filterState.selectedCategories}
      onToggleCategory={toggleCategory}
    />
  );
};
```

## Integration

The category filter integrates with the game start flow:
1. User selects desired categories
2. Preferences are saved to localStorage
3. Game fetches questions only from selected categories
4. Statistics are tracked per category for analytics

## Future Enhancements

- Dynamic category creation from admin panel
- Category difficulty ratings
- Recommended categories based on performance
- Category-specific leaderboards
