import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { updatesData } from '@/data/updatesData';
import { UpdateCard } from '@/components/UpdateCard';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Verified Public Updates | Cockroach Janta Party Wale',
  description: 'Chronological timeline of public audit releases, civic workshop announcements, and official municipal filings.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/updates'
  }
};

export default function UpdatesPage() {
  return (
    <div className="updates-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Verified Updates' }]} />

        {/* Hero */}
        <section className="updates-hero-card">
          <div className="badge badge-saffron mb-3">
            <ShieldCheck size={14} /> Chronological Audit Feed
          </div>
          <h1 className="heading-display page-h1">Verified Public Updates</h1>
          <p className="page-lead">
            Live chronological log of official filings, audit releases, and community forum summaries.
          </p>
        </section>

        {/* Updates List */}
        <section className="section-padding container-narrow">
          <div className="space-y-4">
            {updatesData.map((upd) => (
              <UpdateCard key={upd.id} update={upd} />
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .updates-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .page-h1 { font-size: 2.6rem; margin-bottom: 0.75rem; }
        .page-lead { font-size: 1.15rem; color: var(--text-secondary); max-width: 800px; line-height: 1.6; }
        .space-y-4 > :global(* + *) { margin-top: 1.5rem; }
      `}</style>
    </div>
  );
}
