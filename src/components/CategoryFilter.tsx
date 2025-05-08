import React from 'react';
import { categories } from '../data/categories';
import type { CategoryId } from '../data/categories';

interface CategoryFilterProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`px-6 py-2 rounded-full transition-all ${
            activeCategory === id
              ? 'bg-violet-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}