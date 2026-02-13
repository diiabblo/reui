export interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  prizePool: number;
  participants: number;
  maxParticipants: number;
  status: 'upcoming' | 'active' | 'completed';
}
