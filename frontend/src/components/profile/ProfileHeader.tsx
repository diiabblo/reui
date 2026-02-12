"use client";

import { motion } from 'framer-motion';

interface ProfileHeaderProps {
  address: string;
  username?: string;
  joinedDate: number;
}

export default function ProfileHeader({ address, username, joinedDate }: ProfileHeaderProps) {
  const formattedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const memberSince = new Date(joinedDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {username || formattedAddress}
            </h1>
            <p className="text-blue-100 text-sm">
              {address}
            </p>
            <p className="text-blue-200 text-xs mt-1">
              Member since {memberSince}
            </p>
          </div>
        </div>

        <button
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
          onClick={() => {/* TODO: Implement edit profile */}}
        >
          Edit Profile
        </button>
      </div>
    </motion.div>
  );
}
