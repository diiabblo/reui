import React from 'react';
import { Tournament } from '@/types/tournament';
import { formatTournamentStatus } from '@/constants/tournament';

interface TournamentCardProps {
  tournament: Tournament;
  onJoin?: (id: string) => void;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, onJoin }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-purple-500">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{tournament.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${formatTournamentStatus(tournament.status)}`}>
          {tournament.status}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{tournament.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Prize Pool</p>
          <p className="text-xl font-bold text-purple-600">{tournament.prizePool}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Participants</p>
          <p className="text-xl font-bold">{tournament.participants}/{tournament.maxParticipants}</p>
        </div>
      </div>
      {tournament.status === 'upcoming' && onJoin && (
        <button onClick={() => onJoin(tournament.id)} className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
          Join Tournament
        </button>
      )}
    </div>
  );
};
