import { useState, useEffect } from 'react';
import { Tournament } from '@/types/tournament';

export const useTournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      await new Promise((r) => setTimeout(r, 300));
      setTournaments([
        { id: '1', name: 'Weekly Championship', description: 'Compete for the top spot', startDate: new Date(), endDate: new Date(Date.now() + 7 * 86400000), prizePool: 10000, participants: 150, maxParticipants: 500, status: 'active' },
        { id: '2', name: 'Weekend Warrior', description: 'Special weekend tournament', startDate: new Date(Date.now() + 3 * 86400000), endDate: new Date(Date.now() + 5 * 86400000), prizePool: 5000, participants: 0, maxParticipants: 200, status: 'upcoming' },
      ]);
      setIsLoading(false);
    };
    fetchTournaments();
  }, []);

  return { tournaments, isLoading };
};
