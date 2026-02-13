export interface ShareResult {
  success: boolean;
  platform: string;
  error?: string;
}

export interface ShareContent {
  title: string;
  text: string;
  url?: string;
  imageUrl?: string;
  hashtags?: string[];
}

export const SHARE_CONFIG = {
  twitter: {
    baseUrl: 'https://twitter.com/intent/tweet',
    hashtags: ['reui', 'Web3', 'Base', 'trivia'],
  },
  facebook: {
    baseUrl: 'https://www.facebook.com/sharer/sharer.php',
  },
  linkedin: {
    baseUrl: 'https://www.linkedin.com/sharing/share-offsite/',
  },
};

export const generateShareUrl = (platform: string, content: ShareContent): string => {
  const encodedText = encodeURIComponent(content.text);
  const encodedUrl = content.url ? encodeURIComponent(content.url) : '';
  
  switch (platform) {
    case 'twitter':
      const hashtags = content.hashtags?.join(',') || SHARE_CONFIG.twitter.hashtags.join(',');
      return `${SHARE_CONFIG.twitter.baseUrl}?text=${encodedText}&url=${encodedUrl}&hashtags=${hashtags}`;
    case 'facebook':
      return `${SHARE_CONFIG.facebook.baseUrl}?u=${encodedUrl}`;
    case 'linkedin':
      return `${SHARE_CONFIG.linkedin.baseUrl}?url=${encodedUrl}`;
    default:
      return '';
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
