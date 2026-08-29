import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Cookie Policy | Cockroach Janta Party Wale',
  description: 'Information regarding essential cookies and session state used on cockroachjantapartywale.com.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/cookies'
  }
};

export default function CookiesPage() {
  return (
    <div className="legal-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />

        <article className="legal-card card-base p-5">
          <span className="badge badge-saffron mb-3">Legal &amp; Compliance</span>
          <h1 className="heading-display text-3xl mb-4">Cookie Policy</h1>
          <p className="text-sm text-muted mb-4">Last Updated: August 2026</p>

          <div className="legal-body space-y-4 text-secondary leading-relaxed text-sm">
            <h2 className="text-lg font-bold text-main">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your browser to maintain functional web sessions and user interface preferences.
            </p>

            <h2 className="text-lg font-bold text-main">2. Essential Cookies Only</h2>
            <p>
              We deploy only essential technical cookies required for portal operation, search query memory, and responsive navigation drawer states. We do not use third-party advertising tracking cookies.
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
