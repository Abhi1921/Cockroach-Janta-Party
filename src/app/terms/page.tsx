import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use | Cockroach Janta Party Wale',
  description: 'Terms of Use governing public access and informational content on cockroachjantapartywale.com.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/terms'
  }
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

        <article className="legal-card card-base p-5">
          <span className="badge badge-saffron mb-3">Legal &amp; Compliance</span>
          <h1 className="heading-display text-3xl mb-4">Terms of Use</h1>
          <p className="text-sm text-muted mb-4">Last Updated: August 2026</p>

          <div className="legal-body space-y-4 text-secondary leading-relaxed text-sm">
            <h2 className="text-lg font-bold text-main">1. Acceptance of Terms</h2>
            <p>
              By accessing cockroachjantapartywale.com, you agree to comply with these Terms of Use and all applicable laws governing digital civic portals.
            </p>

            <h2 className="text-lg font-bold text-main">2. Informational Purpose</h2>
            <p>
              All materials published on this portal—including manifesto positions, news analyses, and audit reports—are provided strictly for non-partisan public information. They do not constitute legal or professional advice.
            </p>

            <h2 className="text-lg font-bold text-main">3. Intellectual Property &amp; Open Access</h2>
            <p>
              Public policy documents, audit guidelines, and RTI templates published by CJP Wale are available for non-commercial educational use provided attribution is maintained.
            </p>
          </div>
        </article>
      </div>

      <style jsx>{`
        .legal-card { background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xl); margin-bottom: 3rem; }
        .legal-body :global(h2) { margin-top: 1.5rem; margin-bottom: 0.5rem; }
      `}</style>
    </div>
  );
}
