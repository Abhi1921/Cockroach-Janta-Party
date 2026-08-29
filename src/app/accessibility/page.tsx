import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Cockroach Janta Party Wale',
  description: 'WCAG AA accessibility commitments, keyboard navigation standards, and feedback channels for Cockroach Janta Party Wale.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/accessibility'
  }
};

export default function AccessibilityPage() {
  return (
    <div className="legal-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Accessibility Statement' }]} />

        <article className="legal-card card-base p-5">
          <span className="badge badge-saffron mb-3">Accessibility Standards</span>
          <h1 className="heading-display text-3xl mb-4">Accessibility Statement</h1>

          <div className="legal-body space-y-4 text-secondary leading-relaxed text-sm">
            <h2 className="text-lg font-bold text-main">Our Commitment</h2>
            <p>
              Cockroach Janta Party Wale is dedicated to ensuring digital accessibility for people of all abilities. We apply World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG 2.1 Level AA) across all pages.
            </p>

            <h2 className="text-lg font-bold text-main">Accessibility Features</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full keyboard navigation support with visible focus rings (:focus-visible).</li>
              <li>Skip to main content link for screen-reader users.</li>
              <li>Descriptive ALT attributes on all media images.</li>
              <li>WCAG AA compliant color contrast ratios.</li>
              <li>Semantic HTML5 heading hierarchy.</li>
            </ul>

            <h2 className="text-lg font-bold text-main">Feedback Channel</h2>
            <p>
              If you experience any accessibility barriers, email accessibility@cockroachjantapartywale.com with details of the page and screen reader/browser combination.
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
