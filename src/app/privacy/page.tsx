import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cockroach Janta Party Wale',
  description: 'Official privacy policy for Cockroach Janta Party Wale digital portal outlining data collection, processing, and protection standards.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/privacy'
  }
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <article className="legal-card card-base p-5">
          <span className="badge badge-saffron mb-3">Legal &amp; Compliance</span>
          <h1 className="heading-display text-3xl mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted mb-4">Last Updated: August 2026</p>

          <div className="legal-body space-y-4 text-secondary leading-relaxed text-sm">
            <h2 className="text-lg font-bold text-main">1. Overview</h2>
            <p>
              Cockroach Janta Party Wale (&quot;CJP Wale&quot;, &quot;we&quot;, &quot;our&quot;) is committed to respecting the privacy of visitors to cockroachjantapartywale.com. This Privacy Policy outlines what information is collected, how it is used, and the security measures implemented to protect personal data.
            </p>

            <h2 className="text-lg font-bold text-main">2. Data We Collect</h2>
            <p>
              We collect minimal personal data. When you submit a form via our /contact or /join pages, we process the information provided (such as name, email address, phone number, and location ward). We do not sell or rent personal information to third parties.
            </p>

            <h2 className="text-lg font-bold text-main">3. Cookies &amp; Analytics</h2>
            <p>
              We utilize privacy-conscious, lightweight web analytics to understand traffic patterns and search engine performance. No invasive cross-site tracking cookies are deployed.
            </p>

            <h2 className="text-lg font-bold text-main">4. Data Security</h2>
            <p>
              All communications between your browser and our portal are encrypted using HTTPS. Form submissions are sanitized to protect against unauthorized access.
            </p>

            <h2 className="text-lg font-bold text-main">5. Contact Information</h2>
            <p>
              For privacy inquiries or data removal requests, contact privacy@cockroachjantapartywale.com.
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
