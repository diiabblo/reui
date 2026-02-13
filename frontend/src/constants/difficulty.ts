export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'expert';

export interface DifficultyConfig {
  level: DifficultyLevel;
  name: string;
  description: string;
  icon: string;
  color: string;
  pointMultiplier: number;
  timeLimit: number;
  unlockRequirement?: number;
}

export const DIFFICULTY_LEVELS: DifficultyConfig[] = [
  {
    level: 'easy',
    name: 'Easy',
    description: 'Perfect for beginners',
    icon: '🌱',
    color: '#10B981',
    pointMultiplier: 1.0,
    timeLimit: 60,
  },
  {
    level: 'medium',
    name: 'Medium',
    description: 'A balanced challenge',
    icon: '⚡',
    color: '#F59E0B',
    pointMultiplier: 1.5,
    timeLimit: 45,
    unlockRequirement: 1000,
  },
  {
    level: 'hard',
    name: 'Hard',
    description: 'Test your knowledge',
    icon: '🔥',
    color: '#EF4444',
    pointMultiplier: 2.0,
    timeLimit: 30,
    unlockRequirement: 5000,
  },
  {
    level: 'expert',
    name: 'Expert',
    description: 'Only for masters',
    icon: '💎',
    color: '#8B5CF6',
    pointMultiplier: 3.0,
    timeLimit: 20,
    unlockRequirement: 15000,
  },
];

export const getDifficultyByLevel = (level: DifficultyLevel) => 
  DIFFICULTY_LEVELS.find(d => d.level === level);

export const calculatePoints = (basePoints: number, difficulty: DifficultyLevel) => {
  const config = getDifficultyByLevel(difficulty);
  return Math.round(basePoints * (config?.pointMultiplier || 1));
};
