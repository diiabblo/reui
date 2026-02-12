/**
 * Multiplayer game type definitions
 */

export type RoomStatus = 'waiting' | 'in_progress' | 'completed';
export type PlayerStatus = 'waiting' | 'ready' | 'playing' | 'finished';

export interface GameRoom {
  id: string;
  name: string;
  hostAddress: string;
  maxPlayers: number;
  currentPlayers: number;
  status: RoomStatus;
  categoryId?: string;
  questionCount: number;
  entryFee: number;
  prizePool: number;
  createdAt: Date;
  startedAt?: Date;
}

export interface RoomPlayer {
  address: string;
  username: string;
  avatar?: string;
  status: PlayerStatus;
  score: number;
  questionsAnswered: number;
  correctAnswers: number;
  joinedAt: Date;
  isHost: boolean;
}

export interface GameRoomDetails extends GameRoom {
  players: RoomPlayer[];
  currentQuestionIndex: number;
  timeRemaining: number;
}

export interface MultiplayerMessage {
  id: string;
  roomId: string;
  sender: string;
  senderUsername: string;
  message: string;
  timestamp: Date;
  type: 'chat' | 'system';
}

export interface RoomFilters {
  status?: RoomStatus;
  minPlayers?: number;
  maxEntryFee?: number;
  categoryId?: string;
}
