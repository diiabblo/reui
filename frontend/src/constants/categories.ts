import { Category } from '@/types/category';

/**
 * Predefined categories available in the game
 */
export const GAME_CATEGORIES: Category[] = [
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'Test your knowledge on a wide range of topics',
    icon: '🧠',
    color: '#8B5CF6',
    questionCount: 250,
    isActive: true,
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Biology, Chemistry, Physics, and more',
    icon: '🔬',
    color: '#10B981',
    questionCount: 180,
    isActive: true,
  },
  {
    id: 'history',
    name: 'History',
    description: 'Events and people that shaped our world',
    icon: '📜',
    color: '#F59E0B',
    questionCount: 200,
    isActive: true,
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Athletic competitions and sporting events',
    icon: '⚽',
    color: '#EF4444',
    questionCount: 150,
    isActive: true,
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Movies, TV shows, celebrities, and pop culture',
    icon: '🎬',
    color: '#EC4899',
    questionCount: 220,
    isActive: true,
  },
  {
    id: 'geography',
    name: 'Geography',
    description: 'Countries, cities, landmarks, and more',
    icon: '🌍',
    color: '#06B6D4',
    questionCount: 175,
    isActive: true,
  },
  {
    id: 'art',
    name: 'Art & Culture',
    description: 'Painting, sculpture, and cultural heritage',
    icon: '🎨',
    color: '#F97316',
    questionCount: 130,
    isActive: true,
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Computers, internet, and digital innovation',
    icon: '💻',
    color: '#3B82F6',
    questionCount: 190,
    isActive: true,
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Books, authors, and literary works',
    icon: '📚',
    color: '#A855F7',
    questionCount: 140,
    isActive: true,
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Songs, artists, and musical genres',
    icon: '🎵',
    color: '#14B8A6',
    questionCount: 165,
    isActive: true,
  },
];

/**
 * Get category by ID
 */
export const getCategoryById = (id: string): Category | undefined => {
  return GAME_CATEGORIES.find((cat) => cat.id === id);
};

/**
 * Get all active categories
 */
export const getActiveCategories = (): Category[] => {
  return GAME_CATEGORIES.filter((cat) => cat.isActive);
};

/**
 * Get category color by ID
 */
export const getCategoryColor = (id: string): string => {
  const category = getCategoryById(id);
  return category?.color || '#6B7280';
};
