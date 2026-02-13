import { Tournament } from '@/types/tournament';

export const TOURNAMENT_CONFIG = {
  MIN_PARTICIPANTS: 10,
  MAX_PARTICIPANTS: 1000,
  DURATION_DAYS: 7,
};

export const formatTournamentStatus = (status: string) => {
  const colors = {
    upcoming: 'bg-blue-100 text-blue-700',
    active: 'bg-green-100 text-green-700',
    completed: 'bg-gray-100 text-gray-700',
  };
  return colors[status as keyof typeof colors] || '';
};
