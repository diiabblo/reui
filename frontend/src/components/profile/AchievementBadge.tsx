import { motion } from 'framer-motion';

interface AchievementBadgeProps {
  title: string;
  icon: string;
  unlocked: boolean;
}

export default function AchievementBadge({ title, icon, unlocked }: AchievementBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: unlocked ? 1.1 : 1 }}
      className={`p-4 rounded-lg text-center ${
        unlocked ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100 opacity-50'
      }`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-sm font-semibold">{title}</div>
    </motion.div>
  );
}
