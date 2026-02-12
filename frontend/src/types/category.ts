/**
 * Category type definitions for the trivia game
 */

export type CategoryId = 
  | 'general'
  | 'science'
  | 'history'
  | 'sports'
  | 'entertainment'
  | 'geography'
  | 'art'
  | 'technology'
  | 'literature'
  | 'music';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
  questionCount: number;
  isActive: boolean;
}

export interface CategoryFilterState {
  selectedCategories: CategoryId[];
  showAll: boolean;
}

export interface CategoryStats {
  categoryId: CategoryId;
  totalPlayed: number;
  correctAnswers: number;
  averageScore: number;
  lastPlayed?: Date;
}
