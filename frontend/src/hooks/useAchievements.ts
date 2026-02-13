import { useState, useEffect } from 'react';
import { Achievement, AchievementState } from '@/types/achievement';

export const useAchievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      await new Promise((r) => setTimeout(r, 300));
      setAchievements([
        { id: '1', title: 'First Win', description: 'Win your first game', icon: '🎯', category: 'milestone', unlockedAt: '2025-01-15', progress: 1, target: 1, isUnlocked: true },
        { id: '2', title: 'Streak Master', description: 'Get a 7-day streak', icon: '🔥', category: 'streak', progress: 5, target: 7, isUnlocked: false },
        { id: '3', title: 'Speed Demon', description: 'Answer 50 questions in under 10s', icon: '⚡', category: 'time', progress: 35, target: 50, isUnlocked: false },
        { id: '4', title: 'Trivia Expert', description: 'Answer 500 questions correctly', icon: '🧠', category: 'skill', progress: 420, target: 500, isUnlocked: false },
      ]);
      setIsLoading(false);
    };
    fetchAchievements();
  }, []);

  return { achievements, isLoading };
};
