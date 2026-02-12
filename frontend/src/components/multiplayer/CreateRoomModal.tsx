import React, { useState } from 'react';
import { MULTIPLAYER_CONFIG } from '@/constants/multiplayer';
import { GAME_CATEGORIES } from '@/constants/categories';

interface CreateRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (roomData: any) => void;
}

/**
 * Modal for creating a new game room
 */
export const CreateRoomModal: React.FC<CreateRoomModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    maxPlayers: MULTIPLAYER_CONFIG.DEFAULT_PLAYERS,
    questionCount: MULTIPLAYER_CONFIG.DEFAULT_QUESTIONS,
    entryFee: 0,
    categoryId: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Create Game Room
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Room Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Epic Trivia Battle"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Max Players: {formData.maxPlayers}
            </label>
            <input
              type="range"
              min={MULTIPLAYER_CONFIG.MIN_PLAYERS}
              max={MULTIPLAYER_CONFIG.MAX_PLAYERS}
              value={formData.maxPlayers}
              onChange={(e) => setFormData({ ...formData, maxPlayers: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Questions: {formData.questionCount}
            </label>
            <input
              type="range"
              min={MULTIPLAYER_CONFIG.MIN_QUESTIONS}
              max={MULTIPLAYER_CONFIG.MAX_QUESTIONS}
              value={formData.questionCount}
              onChange={(e) => setFormData({ ...formData, questionCount: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">All Categories</option>
              {GAME_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Entry Fee
            </label>
            <input
              type="number"
              min={MULTIPLAYER_CONFIG.MIN_ENTRY_FEE}
              max={MULTIPLAYER_CONFIG.MAX_ENTRY_FEE}
              value={formData.entryFee}
              onChange={(e) => setFormData({ ...formData, entryFee: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                       focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
