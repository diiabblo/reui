# Daily Challenges

The Daily Challenges feature provides users with fresh trivia challenges every day, encouraging regular engagement through streak tracking and bonus rewards.

## Features

- **Daily Fresh Challenges**: New challenge every 24 hours at UTC midnight
- **Difficulty Levels**: Easy, Medium, Hard, and Expert with different reward multipliers
- **Streak Tracking**: Build streaks for consecutive completions with bonus multipliers
- **Time-Limited**: Complete challenges within the time limit for speed bonuses
- **Reward System**: Base rewards plus bonuses for perfection, speed, and streaks
- **Progress Tracking**: Real-time tracking of answers, accuracy, and score
- **Auto-Expiration**: Challenges expire after 24 hours

## Components

### ChallengeCard
Main card displaying challenge details, difficulty, rewards, and start button.

### StreakDisplay
Shows current streak, longest streak, total completions, and bonus multiplier.

### ChallengeTimer
Countdown timer with visual progress bar and color-coded warnings.

### ChallengeProgressBar
Displays question progress, correct answers, accuracy, and score.

### RewardSummary
Breakdown of all earned rewards including bonuses.

## Hooks

### useDailyChallenge
Manages daily challenge state, loading, and status updates.

### useChallengeStreak
Tracks and updates user's challenge completion streak.

## Reward Calculation

```typescript
Total Reward = Base + Bonus + Perfect + Speed + Streak

- Base: Fixed reward for completion
- Bonus: Additional reward based on difficulty
- Perfect: 500 points for 100% accuracy
- Speed: Bonus for completing quickly (up to 100% of bonus)
- Streak: Multiplier increases 10% per day (max 200%)
```

## Streak System

- Completing challenges on consecutive days builds streak
- Missing a day resets current streak (longest streak preserved)
- Streak multiplier: +10% per consecutive day
- Maximum streak bonus: 200% (20 consecutive days)

## Difficulty Levels

| Level  | Icon | Multiplier | Description         |
|--------|------|------------|---------------------|
| Easy   | 🌱   | 1.0x       | Perfect for beginners |
| Medium | ⚡   | 1.5x       | A balanced challenge  |
| Hard   | 🔥   | 2.0x       | Test your knowledge   |
| Expert | 💎   | 3.0x       | Only for masters      |

## Usage

```tsx
import { useDailyChallenge } from '@/hooks/useDailyChallenge';
import { ChallengeCard } from '@/components/challenges';

const MyComponent = () => {
  const { challenge, startChallenge } = useDailyChallenge();
  
  return (
    <ChallengeCard challenge={challenge} onStart={startChallenge} />
  );
};
```

## Integration

The daily challenges integrate with:
1. User authentication for tracking
2. Reward distribution system
3. Leaderboards for challenge completion
4. Achievement system for streaks
5. Analytics for engagement tracking

## Future Enhancements

- Weekly mega-challenges with higher rewards
- Challenge sharing and competitions
- Custom difficulty selection
- Team challenges
- Special event challenges
- Challenge history and replays
