'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination-nav" aria-label="Page Navigation">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-btn page-arrow"
        aria-label="Previous Page"
      >
        <ChevronLeft size={18} /> Prev
      </button>

      <div className="page-numbers">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`page-btn ${p === currentPage ? 'active' : ''}`}
            aria-current={p === currentPage ? 'page' : undefined}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-btn page-arrow"
        aria-label="Next Page"
      >
        Next <ChevronRight size={18} />
      </button>

      <style jsx>{`
        .pagination-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }
        .page-numbers {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .page-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          height: 38px;
          padding: 0 0.75rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-medium);
          background-color: var(--bg-surface);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        .page-btn:hover:not(:disabled) {
          border-color: var(--primary);
          color: var(--primary);
          background-color: var(--primary-light);
        }
        .page-btn.active {
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        .page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
      `}</style>
    </nav>
  );
};
