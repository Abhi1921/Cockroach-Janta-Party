'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar" role="region" aria-label="Official Announcement">
      <div className="container announcement-content">
        <div className="announcement-badge">
          <ShieldCheck size={14} /> Official Notice
        </div>
        <p className="announcement-text">
          2026 Pre-Monsoon Drainage & Sanitation Audit Report is now live for public inspection.
        </p>
        <Link href="/news/public-audit-urban-drainage-sanitation-2026" className="announcement-link">
          Read Report <ArrowRight size={13} />
        </Link>
      </div>

      <style jsx>{`
        .announcement-bar {
          background-color: var(--secondary);
          color: var(--text-inverse);
          padding: 0.5rem 0;
          font-size: 0.85rem;
          border-bottom: 1px solid var(--border-dark);
        }
        .announcement-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          text-align: center;
        }
        .announcement-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background-color: rgba(217, 107, 39, 0.2);
          color: var(--primary-border);
          padding: 0.15rem 0.6rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        .announcement-text {
          font-weight: 400;
          color: #E2E8F0;
        }
        .announcement-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--primary-border);
          font-weight: 600;
          transition: transform 0.2s ease;
        }
        .announcement-link:hover {
          color: #ffffff;
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
};
