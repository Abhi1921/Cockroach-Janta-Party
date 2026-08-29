import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CampaignItem } from '@/data/campaignsData';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

interface CampaignCardProps {
  campaign: CampaignItem;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const getBadgeClass = (status: CampaignItem['status']) => {
    switch (status) {
      case 'Ongoing': return 'badge-green';
      case 'Upcoming': return 'badge-blue';
      case 'Completed': return 'badge-saffron';
      default: return 'badge-slate';
    }
  };

  return (
    <article className="card-base campaign-card">
      <div className="campaign-image-wrapper">
        <Image
          src={campaign.featuredImage}
          alt={campaign.imageAlt}
          width={600}
          height={350}
          className="campaign-image"
          loading="lazy"
        />
        <span className={`badge ${getBadgeClass(campaign.status)} campaign-status-badge`}>
          {campaign.status}
        </span>
      </div>

      <div className="campaign-body">
        <div className="campaign-meta">
          <span className="meta-info">
            <MapPin size={14} /> {campaign.location}
          </span>
          <span className="meta-info">
            <Calendar size={14} /> {campaign.startDate}
          </span>
        </div>

        <h3 className="campaign-title">
          <Link href={`/campaigns/${campaign.slug}`}>{campaign.title}</Link>
        </h3>

        <p className="campaign-summary">{campaign.summary}</p>

        <div className="campaign-goals-preview">
          <span className="goals-label">Campaign Focus:</span>
          <ul className="goals-list">
            {campaign.goals.slice(0, 2).map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </div>

        <div className="campaign-footer">
          <Link href={`/campaigns/${campaign.slug}`} className="btn btn-outline btn-sm w-full">
            View Campaign Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .campaign-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .campaign-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          background-color: var(--bg-subtle);
        }
        .campaign-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .campaign-card:hover .campaign-image {
          transform: scale(1.04);
        }
        .campaign-status-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 2;
          box-shadow: var(--shadow-sm);
        }
        .campaign-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .campaign-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }
        .meta-info {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .campaign-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }
        .campaign-title a:hover {
          color: var(--primary);
        }
        .campaign-summary {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }
        .campaign-goals-preview {
          background-color: var(--bg-subtle);
          padding: 0.85rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
        }
        .goals-label {
          font-weight: 700;
          color: var(--text-main);
          display: block;
          margin-bottom: 0.35rem;
        }
        .goals-list {
          padding-left: 1.1rem;
          color: var(--text-secondary);
        }
        .goals-list li {
          margin-bottom: 0.2rem;
        }
        .campaign-footer {
          margin-top: auto;
        }
        .w-full {
          width: 100%;
        }
      `}</style>
    </article>
  );
};
