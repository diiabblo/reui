"use client";

import { motion } from 'framer-motion';
import { UserStats } from '@/types/profile';

interface StatsCardProps {
  stats: UserStats;
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Game Statistics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatItem
          label="Total Games"
          value={stats.totalGames}
          icon="🎮"
        />
        <StatItem
          label="Wins"
          value={stats.totalWins}
          icon="🏆"
          color="text-green-600"
        />
        <StatItem
          label="Losses"
          value={stats.totalLosses}
          icon="📉"
          color="text-red-600"
        />
        <StatItem
          label="Win Rate"
          value={`${stats.winRate.toFixed(1)}%`}
          icon="📊"
          color="text-blue-600"
        />
        <StatItem
          label="Total Rewards"
          value={`${stats.totalRewards} USDC`}
          icon="💰"
          color="text-yellow-600"
        />
        <StatItem
          label="Avg Score"
          value={stats.averageScore.toFixed(1)}
          icon="⭐"
          color="text-purple-600"
        />
      </div>
    </div>
  );
}

interface StatItemProps {
  label: string;
  value: string | number;
  icon: string;
  color?: string;
}

function StatItem({ label, value, icon, color = 'text-gray-900' }: StatItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className={`text-2xl font-bold ${color} dark:text-white mb-1`}>
        {value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {label}
      </div>
    </motion.div>
  );
}
