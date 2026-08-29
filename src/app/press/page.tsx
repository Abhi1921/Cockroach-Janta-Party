import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SocialLinks } from '@/components/SocialLinks';
import { siteConfig } from '@/data/siteConfig';
import { Newspaper, Mail, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media Kit | Cockroach Janta Party Wale',
  description: 'Official press releases, media contact details, brand asset download center, and editorial guidelines for journalists.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/press'
  }
};

export default function PressPage() {
  return (
    <div className="press-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Press & Media' }]} />

        {/* Hero */}
        <section className="press-hero-card">
          <div className="badge badge-saffron mb-3">
            <Newspaper size={14} /> Official Media Center
          </div>
          <h1 className="heading-display page-h1">Press &amp; Media Kit</h1>
          <p className="page-lead">
            Verified media releases, downloadable high-resolution logos, leadership quotes, and press contact details for journalists.
          </p>
        </section>

        {/* Grid */}
        <section className="section-padding">
          <div className="grid-2">
            <div className="media-contacts-card card-base p-4">
              <h2 className="heading-display text-xl mb-3">Press Contact Desk</h2>
              <p className="text-secondary text-sm mb-4">
                For interview requests, official statements, or data verification inquiries:
              </p>
              <div className="contact-box bg-subtle p-3 rounded-md mb-4">
                <span className="text-xs text-muted block">Primary Press Email</span>
                <a href={`mailto:${siteConfig.pressEmail}`} className="text-primary font-bold text-lg">
                  {siteConfig.pressEmail}
                </a>
              </div>
              <h3 className="font-bold text-sm mb-2">Social Channels for Media Updates</h3>
              <SocialLinks variant="light" size="sm" />
            </div>

            <div className="brand-assets-card card-base p-4">
              <h2 className="heading-display text-xl mb-3">Downloadable Brand Assets</h2>
              <p className="text-secondary text-sm mb-4">
                Official logos, vector graphics, and style guidelines for media use.
              </p>

              <div className="assets-list space-y-3">
                <div className="asset-item flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <strong className="block text-sm">Primary Brand Mark (PNG / SVG)</strong>
                    <span className="text-xs text-muted">High-res vector logo</span>
                  </div>
                  <button
                    onClick={() => alert('Simulated Logo Download: CJP-Primary-Logo.zip')}
                    className="btn btn-outline btn-sm"
                  >
                    <Download size={14} /> Download
                  </button>
                </div>

                <div className="asset-item flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <strong className="block text-sm">Editorial Press Briefing PDF</strong>
                    <span className="text-xs text-muted">2026 Factsheet &amp; Objectives</span>
                  </div>
                  <button
                    onClick={() => alert('Simulated PDF Download: CJP-Press-Briefing-2026.pdf')}
                    className="btn btn-outline btn-sm"
                  >
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Policy */}
        <section className="section-padding bg-subtle rounded-xl p-5 text-center">
          <ShieldCheck size={32} className="text-primary mx-auto mb-3" />
          <h2 className="heading-display text-2xl mb-2">Non-Sensationalism Media Guarantee</h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm leading-relaxed">
            All statements issued by CJP Wale are factual public disclosures. We strictly prohibit misleading claims, artificial endorsement counters, or sensationalized press releases.
          </p>
        </section>
      </div>

      <style jsx>{`
        .press-hero-card {
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
        @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
