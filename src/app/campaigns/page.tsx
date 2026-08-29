'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { campaignsData, CampaignItem } from '@/data/campaignsData';
import { CampaignCard } from '@/components/CampaignCard';
import { FilterPills } from '@/components/FilterPills';
import { Flag } from 'lucide-react';

export default function CampaignsPage() {
  const [activeStatus, setActiveStatus] = useState<string>('All');

  const statuses = ['All', 'Ongoing', 'Upcoming', 'Completed', 'Archived'];

  const filteredCampaigns = useMemo(() => {
    if (activeStatus === 'All') return campaignsData;
    return campaignsData.filter((c) => c.status === activeStatus);
  }, [activeStatus]);

  return (
    <div className="campaigns-index-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Campaigns' }]} />

        {/* Hero */}
        <section className="campaigns-hero-card">
          <div className="badge badge-saffron mb-3">
            <Flag size={14} /> Civic Action Hub
          </div>
          <h1 className="heading-display page-h1">Civic Campaigns &amp; Initiatives</h1>
          <p className="page-lead">
            Transparent, ground-level monitoring campaigns tracking municipal drainage clearing, open tender disclosures, and streetlight coverage.
          </p>

          <div className="filter-wrapper mt-4">
            <FilterPills categories={statuses} activeCategory={activeStatus} onSelectCategory={setActiveStatus} />
          </div>
        </section>

        {/* Campaigns Grid */}
        <section className="section-padding">
          {filteredCampaigns.length > 0 ? (
            <div className="grid-2">
              {filteredCampaigns.map((camp) => (
                <CampaignCard key={camp.slug} campaign={camp} />
              ))}
            </div>
          ) : (
            <div className="empty-state-card card-base text-center p-5">
              <h3>No Campaigns Found</h3>
              <p className="text-secondary mt-2">
                No civic campaigns match the status &quot;{activeStatus}&quot;.
              </p>
              <button onClick={() => setActiveStatus('All')} className="btn btn-outline btn-sm mt-3">
                Show All Campaigns
              </button>
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        .campaigns-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .page-h1 {
          font-size: 2.6rem;
          margin-bottom: 0.75rem;
        }
        .page-lead {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.6;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
