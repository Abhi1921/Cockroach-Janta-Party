import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { manifestoData } from '@/data/manifestoData';
import { ManifestoCard } from '@/components/ManifestoCard';
import { ShieldCheck, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Civic Manifesto 2026 | Cockroach Janta Party Wale',
  description: 'Read the official 2026 Civic Manifesto of Cockroach Janta Party Wale covering subterranean drainage rights, tender transparency, vector control, and drinking water safety.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/manifesto'
  }
};

export default function ManifestoPage() {
  return (
    <div className="manifesto-index-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Manifesto' }]} />

        {/* Manifesto Header */}
        <section className="manifesto-hero-card">
          <div className="hero-badge">
            <ShieldCheck size={16} /> Official 2026 Policy Charter
          </div>
          <h1 className="heading-display page-h1">The CJP Civic Manifesto</h1>
          <p className="page-lead">
            Five mandatory policy positions establishing enforceable civic sanitation standards, open municipal data disclosure, and public health accountability.
          </p>
        </section>

        {/* Grid of Manifesto Points */}
        <section className="section-padding">
          <div className="grid-2">
            {manifestoData.map((point) => (
              <ManifestoCard key={point.id} point={point} />
            ))}
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="guiding-principles-card section-padding bg-subtle">
          <div className="container container-narrow text-center">
            <h2 className="heading-display section-h2">Guiding Principles of Our Charter</h2>
            <p className="principles-text">
              Every demand in our manifesto is constructed from documented statutory citizen rights, municipal bye-law frameworks, and empirical public health standards.
            </p>
            <div className="principles-actions">
              <Link href="/join" className="btn btn-primary btn-lg">
                Join Local Audit Team <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Submit Policy Inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .manifesto-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--primary-light);
          color: var(--primary-hover);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-border);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .page-h1 {
          font-size: 2.6rem;
          margin-bottom: 1rem;
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
        .guiding-principles-card {
          border-radius: var(--radius-xl);
          margin-top: 3rem;
        }
        .section-h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .principles-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .principles-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
