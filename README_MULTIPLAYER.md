# Multiplayer Mode

Real-time multiplayer trivia battles where players compete head-to-head for prizes in a competitive gaming environment.

## Features

- **Room Creation**: Host custom game rooms with configurable settings
- **Room Browser**: Browse and join available rooms with filters
- **Real-Time Sync**: Live updates for all players in the room
- **Live Leaderboard**: See player rankings update in real-time
- **Chat System**: In-game chat for player communication
- **Prize Pools**: Entry fees accumulate into winner prizes
- **Player Stats**: Track accuracy, speed, and performance
- **Auto-Matching**: Quick join for instant gameplay

## Room Configuration

Hosts can customize:
- **Room Name**: Custom room identifier
- **Max Players**: 2-10 players per room
- **Question Count**: 5-20 questions per game
- **Category**: Specific topic or mixed categories
- **Entry Fee**: 0-10,000 points buy-in
- **Time Limits**: Per-question time constraints

## Prize Distribution

```
2 Players:  1st: 70%, 2nd: 30%
3 Players:  1st: 50%, 2nd: 30%, 3rd: 20%
4+ Players: 1st: 50%, 2nd: 30%, 3rd: 20%
```

## Components

### RoomCard
Display individual room details with join button.

### RoomList
Grid of available rooms with filtering options.

### PlayerList
Shows all players in a room with ready states.

### RoomChat
Real-time chat for player communication.

### CreateRoomModal
Modal form for creating new game rooms.

### LiveLeaderboard
Real-time rankings during active games.

## Hooks

### useGameRooms
Fetches and manages list of available rooms with polling.

### useGameRoom
Manages individual room state and player actions.

### useRoomChat
Handles chat messages and system notifications.

## Game Flow

1. **Browse Rooms**: View available rooms with filters
2. **Join/Create**: Join existing room or create new one
3. **Waiting Room**: Players mark ready when prepared
4. **Game Start**: Host starts when enough players ready
5. **Live Play**: Answer questions with real-time scoring
6. **Results**: Final leaderboard and prize distribution

## Room States

| State | Description | Actions Available |
|-------|-------------|-------------------|
| Waiting | Gathering players | Join, Leave, Ready, Start (host) |
| In Progress | Game active | Play, Chat, View leaderboard |
| Completed | Game finished | View results, Leave |

## Scoring System

```typescript
Answer Score = Base (100) + Time Bonus (0-50)
Time Bonus = (timeRemaining / timeLimit) * 50

Example:
- Answered in 5s / 30s = 100 + 41.67 = 141 points
- Answered in 25s / 30s = 100 + 8.33 = 108 points
```

## Usage

```tsx
import { useGameRooms } from '@/hooks/useGameRooms';
import { RoomCard } from '@/components/multiplayer';

const MultiplayerPage = () => {
  const { rooms } = useGameRooms({ status: 'waiting' });
  
  return (
    <div>
      {rooms.map(room => (
        <RoomCard key={room.id} room={room} onJoin={handleJoin} />
      ))}
    </div>
  );
};
```

## Integration Points

- Smart contracts for entry fees and prize distribution
- WebSocket server for real-time synchronization
- Leaderboard system for global rankings
- Achievement system for multiplayer milestones
- Anti-cheat mechanisms

## Future Enhancements

- Tournament brackets
- Team-based gameplay
- Spectator mode
- Voice chat integration
- Replay system
- Custom rule sets
- Seasonal rankings
- Clan/guild systems
