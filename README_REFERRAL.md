# Referral System

The referral program enables users to invite friends and earn rewards for successful referrals.

## Rewards Structure

| Reward Type | Amount | Description |
|-------------|--------|-------------|
| Referrer | 500 points | Earned when referee completes first game |
| Referee | 250 points | Bonus for using a referral code |
| Bonus | 1000 points | Earned after 10 successful referrals |

## How It Works

1. Share your unique referral code with friends
2. Friends create account and enter your code
3. They complete their first game
4. Both you and your friend receive rewards!

## Features

- **Unique Codes**: Auto-generated 8-character referral codes
- **Code Customization**: Generate new codes anytime
- **Progress Tracking**: Monitor referrals and earnings
- **Bonus System**: Extra rewards for milestones
- **Referral History**: Track all your referrals

## Components

- `ReferralCodeCard`: Display and manage your referral code
- `ReferralList`: View all your referrals with status
- `ReferralStats`: Dashboard with statistics
- `ReferralHowItWorks`: Educational guide
- `ReferralInput`: Form to enter referral codes

## Hooks

- `useReferral`: Manages referral code, stats, and referrals

## Usage

```tsx
import { useReferral } from '@/hooks/useReferral';
import { ReferralCodeCard } from '@/components/referral';

const ReferralPage = () => {
  const { referralCode, stats } = useReferral(address);
  
  return (
    <ReferralCodeCard code={referralCode} onCopy={handleCopy} />
  );
};
```
