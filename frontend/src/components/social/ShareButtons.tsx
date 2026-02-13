import React from 'react';
import { ShareButton } from './ShareButton';
import { ShareContent } from '@/utils/shareUtils';

interface ShareButtonsProps {
  content: ShareContent;
  onShare?: (result: any) => void;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ content, onShare }) => {
  const platforms: Array<'twitter' | 'facebook' | 'linkedin' | 'copy'> = [
    'twitter',
    'facebook',
    'linkedin',
    'copy',
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((platform) => (
        <ShareButton
          key={platform}
          platform={platform}
          content={content}
          onShare={onShare}
        />
      ))}
    </div>
  );
};
