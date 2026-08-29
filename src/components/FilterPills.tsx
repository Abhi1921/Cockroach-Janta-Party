'use client';

import React from 'react';

interface FilterPillsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FilterPills: React.FC<FilterPillsProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="filter-pills-wrapper">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`pill-btn ${isActive ? 'active' : ''}`}
            aria-pressed={isActive}
          >
            {cat}
          </button>
        );
      })}

      <style jsx>{`
        .filter-pills-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin: 1.25rem 0;
        }
        .pill-btn {
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--border-medium);
          background-color: var(--bg-surface);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .pill-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .pill-btn.active {
          background-color: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
};
