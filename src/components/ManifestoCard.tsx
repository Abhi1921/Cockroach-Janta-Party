import React from 'react';
import Link from 'next/link';
import { ManifestoPoint } from '@/data/manifestoData';
import { FileText, ArrowRight, ShieldCheck } from 'lucide-react';

interface ManifestoCardProps {
  point: ManifestoPoint;
}

export const ManifestoCard: React.FC<ManifestoCardProps> = ({ point }) => {
  return (
    <article className="card-base manifesto-card">
      <div className="manifesto-card-header">
        <span className="manifesto-number">{point.numberStr}</span>
        <span className="badge badge-saffron">{point.category}</span>
      </div>

      <h3 className="manifesto-title">
        <Link href={`/manifesto/${point.slug}`}>{point.title}</Link>
      </h3>

      <p className="manifesto-summary">{point.summary}</p>

      <div className="demands-box">
        <div className="demands-header">
          <ShieldCheck size={15} className="demands-icon" />
          <span>Core Demands:</span>
        </div>
        <ul className="demands-list">
          {point.keyDemands.slice(0, 2).map((demand, i) => (
            <li key={i}>{demand}</li>
          ))}
        </ul>
      </div>

      <div className="manifesto-footer">
        <Link href={`/manifesto/${point.slug}`} className="read-policy-link">
          Read Full Policy Charter <ArrowRight size={14} />
        </Link>
      </div>

      <style jsx>{`
        .manifesto-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .manifesto-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .manifesto-number {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }
        .manifesto-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.85rem;
          color: var(--text-main);
        }
        .manifesto-title a:hover {
          color: var(--primary);
        }
        .manifesto-summary {
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .demands-box {
          background-color: var(--bg-subtle);
          border-left: 3px solid var(--primary);
          padding: 0.85rem 1rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
        }
        .demands-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.35rem;
        }
        .demands-icon {
          color: var(--primary);
        }
        .demands-list {
          padding-left: 1.1rem;
          color: var(--text-secondary);
        }
        .demands-list li {
          margin-bottom: 0.2rem;
        }
        .manifesto-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }
        .read-policy-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary);
          transition: gap 0.2s ease;
        }
        .manifesto-card:hover .read-policy-link {
          gap: 0.6rem;
        }
      `}</style>
    </article>
  );
};
