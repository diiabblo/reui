export interface RewardTier {
  tier: number;
  name: string;
  minPoints: number;
  rewards: string[];
}

export const REWARD_TIERS: RewardTier[] = [
  { tier: 1, name: 'Bronze', minPoints: 0, rewards: ['Bronze Badge', '5% bonus'] },
  { tier: 2, name: 'Silver', minPoints: 5000, rewards: ['Silver Badge', '10% bonus', 'Early access'] },
  { tier: 3, name: 'Gold', minPoints: 15000, rewards: ['Gold Badge', '15% bonus', 'Exclusive events'] },
  { tier: 4, name: 'Platinum', minPoints: 50000, rewards: ['Platinum Badge', '20% bonus', 'VIP support'] },
];
