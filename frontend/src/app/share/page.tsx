'use client';

import React from 'react';
import { ShareButtons, ShareCard } from '@/components/social';

export default function SharePage() {
  const shareContent = {
    title: 'Play reui - Web3 Trivia Game',
    text: 'I just scored 8500 points on reui! Join me on the Base network trivia game.',
    url: 'https://reui.xyz',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Share Your Score
        </h1>

        <div className="mb-8">
          <ShareCard
            title={shareContent.title}
            description={shareContent.text}
            shareUrl={shareContent.url}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Share to Social Media
          </h2>
          <ShareButtons content={shareContent} />
        </div>
      </div>
    </div>
  );
}
