import { DifficultyLevel, DifficultyConfig, DIFFICULTY_LEVELS } from '@/constants/difficulty';

interface DifficultyCardProps {
  difficulty: DifficultyConfig;
  isSelected: boolean;
  isUnlocked: boolean;
  onSelect: () => void;
}

export const DifficultyCard: React.FC<DifficultyCardProps> = ({
  difficulty,
  isSelected,
  isUnlocked,
  onSelect,
}) => {
  return (
    <button
      onClick={isUnlocked ? onSelect : undefined}
      disabled={!isUnlocked}
      className={`p-6 rounded-xl border-2 transition-all ${
        isSelected ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-gray-700'
      } ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-300'}`}
    >
      <div className="text-4xl mb-3">{difficulty.icon}</div>
      <h3 className="font-bold text-gray-900 dark:text-white mb-1">{difficulty.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{difficulty.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold" style={{ color: difficulty.color }}>
          {difficulty.pointMultiplier}x
        </span>
        {!isUnlocked && (
          <span className="text-xs text-gray-500">🔒 {difficulty.unlockRequirement} pts</span>
        )}
      </div>
    </button>
  );
};
