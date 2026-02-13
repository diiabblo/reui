import React, { useState, useRef } from 'react';

interface ShareCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  shareUrl?: string;
}

export const ShareCard: React.FC<ShareCardProps> = ({
  title,
  description,
  imageUrl,
  shareUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {imageUrl && (
        <div className="aspect-video bg-gray-200 dark:bg-gray-700">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};
