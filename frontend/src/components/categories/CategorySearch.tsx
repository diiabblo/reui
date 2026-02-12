import React, { useState } from 'react';
import { Category } from '@/types/category';

interface CategorySearchProps {
  categories: Category[];
  onSearchResults: (results: Category[]) => void;
}

/**
 * Search input for filtering categories by name or description
 */
export const CategorySearch: React.FC<CategorySearchProps> = ({
  categories,
  onSearchResults,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    
    if (!value.trim()) {
      onSearchResults(categories);
      return;
    }

    const filtered = categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(value.toLowerCase()) ||
        cat.description.toLowerCase().includes(value.toLowerCase())
    );
    
    onSearchResults(filtered);
  };

  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search categories..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 
                   rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      />
      {searchTerm && (
        <button
          onClick={() => handleSearch('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
