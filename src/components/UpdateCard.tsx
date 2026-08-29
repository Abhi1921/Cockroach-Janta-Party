import React from 'react';
import Link from 'next/link';
import { UpdateItem } from '@/data/updatesData';
import { ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';

interface UpdateCardProps {
  update: UpdateItem;
}

export const UpdateCard: React.FC<UpdateCardProps> = ({ update }) => {
  return (
    <div className="card-base update-card">
      <div className="update-meta-bar">
        <span className="update-date">
          <Calendar size={14} /> {update.date}
        </span>
        <span className="badge badge-saffron">{update.category}</span>
      </div>

      <h3 className="update-title">{update.title}</h3>
      <p className="update-summary">{update.summary}</p>
      {update.details && <p className="update-details">{update.details}</p>}

      <div className="update-footer">
        <div className="verified-source">
          <ShieldCheck size={14} className="source-icon" />
          <span>Source: {update.verifiedSource}</span>
        </div>
        {update.link && (
          <Link href={update.link.href} className="update-link">
            {update.link.text} <ArrowUpRight size={14} />
          </Link>
        )}
      </div>

      <style jsx>{`
        .update-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .update-meta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .update-date {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .update-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .update-summary {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .update-details {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        .update-footer {
          margin-top: auto;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          font-size: 0.82rem;
        }
        .verified-source {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--accent-green);
          font-weight: 600;
        }
        .update-link {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          color: var(--primary);
          font-weight: 600;
        }
        .update-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};
