import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { founderData } from '@/data/founderData';
import { SchemaScript } from '@/components/SchemaScript';
import { ShieldCheck, CheckCircle, Calendar, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership & Founder Profile | Cockroach Janta Party Wale',
  description: 'Factual biography, public commitments, non-partisan founding principles, and verified timeline of Cockroach Janta Party Wale leadership.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/founder'
  }
};

export default function FounderPage() {
  // Person JSON-LD Schema for verified leadership representation
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: founderData.name,
    jobTitle: founderData.role,
    worksFor: {
      '@type': 'Organization',
      name: founderData.organization
    },
    description: founderData.biography[0]
  };

  return (
    <div className="founder-page">
      <SchemaScript schema={personSchema} />
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Founder & Leadership' }]} />

        {/* Profile Header */}
        <section className="founder-hero-card">
          <span className="badge badge-saffron mb-3">Leadership Profile</span>
          <h1 className="heading-display page-h1">{founderData.name}</h1>
          <p className="role-tagline">{founderData.role} — {founderData.organization}</p>
        </section>

        {/* Biography & Mission */}
        <section className="section-padding">
          <div className="grid-2">
            <div className="bio-container">
              <h2 className="heading-display section-h2">Background &amp; Founding Story</h2>
              {founderData.biography.map((para, idx) => (
                <p key={idx} className="paragraph-text">{para}</p>
              ))}

              <div className="sources-box">
                <h3 className="sources-title">Verified Historical Documentation</h3>
                <ul className="sources-list">
                  {founderData.sources.map((src, idx) => (
                    <li key={idx}>
                      <FileText size={14} className="source-icon" />
                      <span><strong>{src.title}</strong> — {src.publisher} ({src.year})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="charter-commitments-card card-base">
              <h3 className="commitments-title">Public Charter Commitments</h3>
              <p className="commitments-intro">
                The founding secretariat operates under strict non-partisan governance principles:
              </p>
              <ul className="commitments-list">
                {founderData.publicCommitments.map((commit, idx) => (
                  <li key={idx}>
                    <CheckCircle size={18} className="icon-green" />
                    <span>{commit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-subtle timeline-card">
          <div className="section-header text-center">
            <span className="badge badge-saffron">History</span>
            <h2 className="heading-display section-h2">Leadership Activity Timeline</h2>
          </div>

          <div className="timeline-wrapper">
            {founderData.timeline.map((item, idx) => (
              <div key={idx} className="timeline-row">
                <div className="year-badge">{item.year}</div>
                <div className="event-box card-base">
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .founder-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .page-h1 {
          font-size: 2.6rem;
          margin-bottom: 0.5rem;
        }
        .role-tagline {
          font-size: 1.15rem;
          color: var(--primary-hover);
          font-weight: 600;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.5rem;
        }
        .section-h2 {
          font-size: 2rem;
          margin-bottom: 1.25rem;
        }
        .paragraph-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .sources-box {
          background-color: var(--bg-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          margin-top: 2rem;
        }
        .sources-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .sources-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        .sources-list li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
        }
        .source-icon {
          color: var(--primary);
        }
        .charter-commitments-card {
          padding: 2rem;
          background-color: var(--bg-surface);
        }
        .commitments-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }
        .commitments-intro {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .commitments-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .commitments-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-main);
          line-height: 1.5;
        }
        .icon-green {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .timeline-card {
          border-radius: var(--radius-xl);
          margin-top: 3rem;
        }
        .timeline-wrapper {
          max-width: 700px;
          margin: 2rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .timeline-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .year-badge {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary);
          width: 80px;
          flex-shrink: 0;
          text-align: right;
        }
        .event-box {
          padding: 1rem 1.5rem;
          flex-grow: 1;
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
        }
        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
