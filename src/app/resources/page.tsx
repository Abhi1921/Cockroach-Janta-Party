import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { resourcesData } from '@/data/resourcesData';
import { ResourceCard } from '@/components/ResourceCard';
import { FileText, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Civic Resources & Documents | Cockroach Janta Party Wale',
  description: 'Download free civic audit handbooks, Right to Information (RTI) templates, vector management briefs, and water testing guides.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/resources'
  }
};

export default function ResourcesPage() {
  return (
    <div className="resources-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Resources' }]} />

        {/* Hero */}
        <section className="resources-hero-card">
          <div className="badge badge-saffron mb-3">
            <FileText size={14} /> Open Public Library
          </div>
          <h1 className="heading-display page-h1">Civic Resources &amp; Guides</h1>
          <p className="page-lead">
            Downloadable policy briefs, RTI application templates, water quality testing instructions, and municipal audit manuals.
          </p>
        </section>

        {/* Resources Grid */}
        <section className="section-padding">
          <div className="grid-2">
            {resourcesData.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .resources-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .page-h1 { font-size: 2.6rem; margin-bottom: 0.75rem; }
        .page-lead { font-size: 1.15rem; color: var(--text-secondary); max-width: 800px; line-height: 1.6; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        @media (max-width: 992px) { .grid-2 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
