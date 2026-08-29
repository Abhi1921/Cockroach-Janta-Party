'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Search news, campaigns, manifesto, resources...',
  onClear
}) => {
  return (
    <div className="search-bar-wrapper">
      <Search size={20} className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        aria-label="Search site content"
      />
      {value && (
        <button
          onClick={() => {
            onChange('');
            if (onClear) onClear();
          }}
          className="clear-btn"
          aria-label="Clear search text"
        >
          <X size={18} />
        </button>
      )}

      <style jsx>{`
        .search-bar-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          background-color: var(--bg-surface);
          border: 1.5px solid var(--border-medium);
          border-radius: var(--radius-full);
          padding: 0.25rem 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.2s ease;
        }
        .search-bar-wrapper:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-light);
        }
        .search-icon {
          color: var(--text-muted);
          margin-right: 0.75rem;
          flex-shrink: 0;
        }
        .search-input {
          width: 100%;
          height: 44px;
          border: none;
          background: transparent;
          font-size: 1rem;
          color: var(--text-main);
          outline: none;
        }
        .clear-btn {
          color: var(--text-muted);
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .clear-btn:hover {
          color: var(--text-main);
          background-color: var(--bg-subtle);
        }
      `}</style>
    </div>
  );
};
