import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { founderData } from '@/data/founderData';
import { resourcesData } from '@/data/resourcesData';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqData } from '@/data/faqData';
import { ResourceCard } from '@/components/ResourceCard';
import { ShieldCheck, CheckCircle2, Calendar, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About The Movement | Cockroach Janta Party Wale',
  description: 'Background, founding principles, urban sanitation objectives, open data commitments, and verified activity timeline of Cockroach Janta Party Wale.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/about'
  }
};

export default function AboutPage() {
  const aboutFaqs = faqData.filter((f) => f.category === 'General' || f.category === 'Verification & Audits');

  return (
    <div className="about-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Banner */}
        <section className="about-hero-card">
          <span className="badge badge-saffron mb-3">Organization Overview</span>
          <h1 className="heading-display page-h1">About Cockroach Janta Party Wale</h1>
          <p className="page-lead">
            A non-partisan civic movement dedicated to urban sanitation rights, transparent municipal budgeting, open data RTI auditing, and scientific vector management across urban sectors.
          </p>
        </section>

        {/* Mission & Background */}
        <section className="section-padding">
          <div className="grid-2">
            <div className="content-box">
              <h2 className="heading-display section-h2">Founding Background &amp; Purpose</h2>
              <p className="paragraph-text">
                Cockroach Janta Party Wale was founded in 2024 to provide an organized, data-driven voice for citizens suffering from chronic municipal neglect, subterranean drainage blockages, and unmonitored pest hazards.
              </p>
              <p className="paragraph-text">
                Unlike traditional political bodies, CJP operates strictly as an empirical civic auditor and public information portal. Our volunteers examine municipal work orders, test drinking water samples, and file public disclosures under Right to Information (RTI) frameworks.
              </p>
              <div className="info-callout">
                <ShieldCheck size={20} className="callout-icon" />
                <div>
                  <strong>Informational Integrity Standard:</strong>
                  <p>We do not fabricate member counts, artificial endorsements, or fake statistics. All claims published by CJP are verifiable via official civic filings and field audit logs.</p>
                </div>
              </div>
            </div>

            <div className="commitments-panel card-base">
              <h3 className="panel-title">Core Objectives</h3>
              <ul className="pillars-list">
                <li>
                  <CheckCircle2 size={18} className="list-icon" />
                  <div>
                    <strong>Underground Sanitation Rights:</strong> Bi-weekly mechanized cleaning of subterranean stormwater and sewer drains.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="list-icon" />
                  <div>
                    <strong>Tender Disclosure:</strong> Open API and mandatory site boards publishing contractor payment vouchers and 3-year road warranties.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="list-icon" />
                  <div>
                    <strong>Vector Suppression:</strong> WHO-compliant biological anti-larval treatment in residential sectors prior to monsoon months.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="list-icon" />
                  <div>
                    <strong>Drinking Water Safety:</strong> Ward-level free testing booths for chlorine levels and dissolved solids in piped supply.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Verified Timeline */}
        <section className="section-padding bg-subtle timeline-section">
          <div className="section-header text-center">
            <span className="badge badge-saffron">Milestones</span>
            <h2 className="heading-display section-h2">Verified Activity Timeline</h2>
            <p className="section-subtitle">Key civic audit releases and public governance campaigns undertaken since inception.</p>
          </div>

          <div className="timeline-container">
            {founderData.timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-marker" />
                <div className="timeline-content card-base">
                  <span className="badge badge-saffron mb-1">Official Milestone</span>
                  <p className="timeline-text">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloadable Resources & Documents */}
        <section className="section-padding">
          <div className="section-header-flex">
            <div>
              <span className="badge badge-saffron">Public Documents</span>
              <h2 className="heading-display section-h2">Related Civic Resources</h2>
            </div>
            <Link href="/resources" className="btn btn-outline">
              View All Resources &rarr;
            </Link>
          </div>

          <div className="grid-2">
            {resourcesData.slice(0, 2).map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding container-narrow">
          <div className="section-header text-center">
            <span className="badge badge-saffron">FAQ</span>
            <h2 className="heading-display section-h2">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={aboutFaqs} />
        </section>
      </div>

      <style jsx>{`
        .about-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
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
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
        }
        .section-h2 {
          font-size: 2rem;
          margin-bottom: 1.25rem;
        }
        .paragraph-text {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .info-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background-color: var(--primary-light);
          border: 1px solid var(--primary-border);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          color: var(--text-main);
          margin-top: 1.5rem;
        }
        .callout-icon {
          color: var(--primary-hover);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .commitments-panel {
          padding: 2rem;
          background-color: var(--bg-surface);
        }
        .panel-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
        }
        .pillars-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .pillars-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .pillars-list strong {
          color: var(--text-main);
        }
        .list-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        /* Timeline */
        .timeline-section {
          border-radius: var(--radius-xl);
          margin: 3rem 0;
        }
        .timeline-container {
          max-width: 750px;
          margin: 2.5rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
        }
        .timeline-container::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 110px;
          width: 3px;
          background-color: var(--border-medium);
        }
        .timeline-item {
          display: flex;
          align-items: flex-start;
          position: relative;
        }
        .timeline-year {
          width: 90px;
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary);
          text-align: right;
          padding-right: 1.5rem;
        }
        .timeline-marker {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: var(--primary);
          border: 4px solid #FFFFFF;
          box-shadow: var(--shadow-sm);
          position: absolute;
          left: 103.5px;
          top: 4px;
          z-index: 2;
        }
        .timeline-content {
          margin-left: 2.5rem;
          padding: 1.25rem 1.5rem;
          flex-grow: 1;
        }
        .timeline-text {
          font-size: 0.98rem;
          color: var(--text-main);
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
          .timeline-container::before {
            left: 20px;
          }
          .timeline-year {
            width: auto;
            text-align: left;
            padding-right: 0;
            margin-bottom: 0.5rem;
          }
          .timeline-marker {
            left: 13.5px;
          }
          .timeline-item {
            flex-direction: column;
            padding-left: 40px;
          }
          .timeline-content {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
