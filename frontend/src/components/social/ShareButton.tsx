import React from 'react';
import { ShareContent, generateShareUrl, copyToClipboard } from '@/utils/shareUtils';

interface ShareButtonProps {
  platform: 'twitter' | 'facebook' | 'linkedin' | 'copy';
  content: ShareContent;
  onShare?: (result: any) => void;
}

const platformConfig = {
  twitter: { icon: '𝕏', color: '#000000', label: 'Twitter' },
  facebook: { icon: 'f', color: '#1877F2', label: 'Facebook' },
  linkedin: { icon: 'in', color: '#0A66C2', label: 'LinkedIn' },
  copy: { icon: '📋', color: '#6B7280', label: 'Copy' },
};

export const ShareButton: React.FC<ShareButtonProps> = ({ platform, content, onShare }) => {
  const config = platformConfig[platform];

  const handleShare = async () => {
    if (platform === 'copy') {
      const success = await copyToClipboard(content.text + (content.url ? ` ${content.url}` : ''));
      onShare?.({ success, platform: 'clipboard' });
      return;
    }

    const url = generateShareUrl(platform, content);
    window.open(url, '_blank', 'width=600,height=400');
    onShare?.({ success: true, platform });
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
      style={{ backgroundColor: config.color, color: 'white' }}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </button>
  );
};
