'use client';

import React from 'react';
import { TournamentCard } from '@/components/tournaments';
import { useTournaments } from '@/hooks/useTournaments';

export default function TournamentsPage() {
  const { tournaments, isLoading } = useTournaments();

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Tournaments</h1>
        <div className="grid gap-6">
          {tournaments.map((t) => (
            <TournamentCard key={t.id} tournament={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
