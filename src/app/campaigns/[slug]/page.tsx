import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { campaignsData } from '@/data/campaignsData';
import { newsData } from '@/data/newsData';
import { ShareButtons } from '@/components/ShareButtons';
import { SchemaScript } from '@/components/SchemaScript';
import { MapPin, Calendar, CheckCircle2, FileText, ArrowLeft, ShieldCheck } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return campaignsData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = campaignsData.find((c) => c.slug === slug);
  if (!campaign) return {};

  return {
    title: `${campaign.title} | CJP Campaign`,
    description: campaign.summary,
    alternates: {
      canonical: `https://cockroachjantapartywale.com/campaigns/${campaign.slug}`
    }
  };
}

export default async function CampaignDetailPage({ params }: Props) {
  const { slug } = await params;
  const campaign = campaignsData.find((c) => c.slug === slug);

  if (!campaign) {
    notFound();
  }

  const relatedNews = campaign.relatedNewsSlug
    ? newsData.find((n) => n.slug === campaign.relatedNewsSlug)
    : null;

  const campaignSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: campaign.title,
    description: campaign.summary
  };

  return (
    <div className="campaign-detail-page">
      <SchemaScript schema={campaignSchema} />
      <div className="container py-4">
        <Breadcrumbs
          items={[
            { label: 'Campaigns', href: '/campaigns' },
            { label: campaign.title }
          ]}
        />

        <article className="campaign-container card-base">
          {/* Header */}
          <div className="campaign-header">
            <div className="status-badge-row mb-3">
              <span className="badge badge-green">{campaign.status} Campaign</span>
              <span className="badge badge-saffron">{campaign.location}</span>
            </div>
            <h1 className="heading-display campaign-h1">{campaign.title}</h1>
            <p className="campaign-summary-lead">{campaign.summary}</p>

            <div className="campaign-meta-row">
              <span><MapPin size={16} /> Location: <strong>{campaign.location}</strong></span>
              <span><Calendar size={16} /> Start Date: <strong>{campaign.startDate}</strong></span>
              {campaign.endDate && <span>End Date: <strong>{campaign.endDate}</strong></span>}
            </div>
          </div>

          {/* Featured Image */}
          <div className="campaign-media-wrapper">
            <Image
              src={campaign.featuredImage}
              alt={campaign.imageAlt}
              width={1100}
              height={550}
              className="campaign-featured-img"
              priority
            />
          </div>

          <ShareButtons title={campaign.title} />

          {/* Body */}
          <div className="campaign-body">
            <h2 className="section-title">Campaign Description</h2>
            {campaign.description.map((para, idx) => (
              <p key={idx} className="body-paragraph">{para}</p>
            ))}

            {/* Campaign Goals */}
            <div className="goals-box">
              <h3 className="goals-h3">
                <ShieldCheck size={20} className="icon-green" /> Primary Campaign Goals
              </h3>
              <ul className="goals-list">
                {campaign.goals.map((goal, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="icon-check" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campaign Timeline */}
            <div className="timeline-box">
              <h3 className="timeline-h3">Campaign Event Timeline</h3>
              <div className="timeline-items">
                {campaign.timeline.map((ev, idx) => (
                  <div key={idx} className="timeline-row">
                    <span className="ev-date">{ev.date}</span>
                    <span className="ev-desc">{ev.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation & Reports */}
            {campaign.documentation.length > 0 && (
              <div className="docs-box">
                <h3 className="docs-h3">Documentation &amp; Reports</h3>
                <ul className="docs-list">
                  {campaign.documentation.map((doc, idx) => (
                    <li key={idx}>
                      <FileText size={16} className="icon-doc" />
                      <span><strong>{doc.title}</strong> ({doc.type})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related News Link */}
            {relatedNews && (
              <div className="related-news-callout">
                <h3 className="callout-h3">Related News Report</h3>
                <p><strong>{relatedNews.title}</strong></p>
                <Link href={`/news/${relatedNews.slug}`} className="btn btn-outline btn-sm mt-2">
                  Read News Article &rarr;
                </Link>
              </div>
            )}
          </div>

          <div className="campaign-footer">
            <Link href="/campaigns" className="btn btn-outline">
              <ArrowLeft size={16} /> Back to All Campaigns
            </Link>
          </div>
        </article>
      </div>

      <style jsx>{`
        .campaign-container {
          padding: 3.5rem 3rem;
          background-color: var(--bg-surface);
          margin-bottom: 3rem;
        }
        .status-badge-row {
          display: flex;
          gap: 0.5rem;
        }
        .campaign-h1 {
          font-size: 2.6rem;
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .campaign-summary-lead {
          font-size: 1.18rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .campaign-meta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .campaign-meta-row span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .campaign-media-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .campaign-featured-img {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
        }
        .campaign-body {
          margin-top: 2.5rem;
        }
        .section-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        .body-paragraph {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .goals-box {
          background-color: var(--primary-light);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          margin: 2rem 0;
        }
        .goals-h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--primary-hover);
          margin-bottom: 1rem;
        }
        .goals-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .goals-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 1rem;
          color: var(--text-main);
          font-weight: 500;
        }
        .icon-check {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .timeline-box {
          background-color: var(--bg-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
        }
        .timeline-h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .timeline-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.95rem;
        }
        .ev-date {
          font-weight: 700;
          color: var(--primary);
          width: 100px;
          flex-shrink: 0;
        }
        .ev-desc {
          color: var(--text-main);
        }
        .docs-box {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
          margin-bottom: 2rem;
        }
        .docs-h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .docs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.92rem;
        }
        .docs-list li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
        }
        .icon-doc {
          color: var(--primary);
        }
        .related-news-callout {
          background-color: var(--primary-light);
          border: 1px solid var(--primary-border);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
        }
        .callout-h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-hover);
          margin-bottom: 0.35rem;
        }
        .campaign-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }
        @media (max-width: 768px) {
          .campaign-container { padding: 2rem 1.5rem; }
          .campaign-h1 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
