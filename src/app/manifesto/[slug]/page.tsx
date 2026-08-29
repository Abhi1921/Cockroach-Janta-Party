import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { manifestoData } from '@/data/manifestoData';
import { newsData } from '@/data/newsData';
import { ShareButtons } from '@/components/ShareButtons';
import { SchemaScript } from '@/components/SchemaScript';
import { ShieldCheck, CheckCircle, FileText, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return manifestoData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const point = manifestoData.find((p) => p.slug === slug);
  if (!point) return {};

  return {
    title: `${point.title} | CJP Manifesto`,
    description: point.summary,
    alternates: {
      canonical: `https://cockroachjantapartywale.com/manifesto/${point.slug}`
    }
  };
}

export default async function ManifestoDetailPage({ params }: Props) {
  const { slug } = await params;
  const point = manifestoData.find((p) => p.slug === slug);

  if (!point) {
    notFound();
  }

  const relatedNews = newsData.filter((n) => n.tags.includes(point.category) || n.summary.includes(point.category)).slice(0, 2);

  // Article/WebPage Schema for Manifesto Point
  const manifestoSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: point.title,
    description: point.summary,
    publisher: {
      '@type': 'Organization',
      name: 'Cockroach Janta Party Wale'
    }
  };

  return (
    <div className="manifesto-detail-page">
      <SchemaScript schema={manifestoSchema} />
      <div className="container py-4">
        <Breadcrumbs
          items={[
            { label: 'Manifesto', href: '/manifesto' },
            { label: point.title }
          ]}
        />

        <article className="manifesto-detail-card">
          <div className="detail-header">
            <div className="meta-top">
              <span className="point-number">Point {point.numberStr}</span>
              <span className="badge badge-saffron">{point.category}</span>
            </div>
            <h1 className="heading-display detail-h1">{point.title}</h1>
            <p className="detail-summary-box">{point.summary}</p>
          </div>

          <ShareButtons title={point.title} />

          <div className="detail-body">
            <h2 className="section-title">Policy Explanation</h2>
            {point.detailedExplanation.map((para, idx) => (
              <p key={idx} className="body-paragraph">{para}</p>
            ))}

            <div className="demands-callout-box">
              <h3 className="demands-h3">
                <ShieldCheck size={20} className="icon-orange" /> Statutory Key Demands
              </h3>
              <ul className="demands-list">
                {point.keyDemands.map((demand, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="icon-check" />
                    <span>{demand}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="impact-box">
              <h3 className="impact-h3">Target Policy Impact</h3>
              <p>{point.policyImpact}</p>
            </div>

            {point.references.length > 0 && (
              <div className="references-box">
                <h3 className="ref-h3">Verified Reference Sources</h3>
                <ul className="ref-list">
                  {point.references.map((ref, idx) => (
                    <li key={idx}>
                      <strong>{ref.title}</strong> — {ref.publisher} ({ref.year})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="detail-footer">
            <Link href="/manifesto" className="btn btn-outline">
              <ArrowLeft size={16} /> Back to Full Manifesto
            </Link>
          </div>
        </article>

        {relatedNews.length > 0 && (
          <section className="related-section">
            <h3 className="heading-display text-xl mb-3">Related Verified News Articles</h3>
            <div className="grid-2">
              {relatedNews.map((art) => (
                <div key={art.slug} className="card-base p-4">
                  <h4 className="font-bold text-lg mb-2">
                    <Link href={`/news/${art.slug}`}>{art.title}</Link>
                  </h4>
                  <p className="text-sm text-secondary mb-3">{art.summary}</p>
                  <Link href={`/news/${art.slug}`} className="text-primary text-sm font-semibold">
                    Read Article &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .manifesto-detail-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 3rem;
        }
        .meta-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .point-number {
          font-family: var(--font-serif);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--primary);
        }
        .detail-h1 {
          font-size: 2.4rem;
          line-height: 1.25;
          margin-bottom: 1.25rem;
        }
        .detail-summary-box {
          font-size: 1.15rem;
          color: var(--text-secondary);
          background-color: var(--bg-subtle);
          padding: 1.25rem 1.5rem;
          border-left: 4px solid var(--primary);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          line-height: 1.6;
        }
        .detail-body {
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
        .demands-callout-box {
          background-color: var(--primary-light);
          border: 1px solid var(--primary-border);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          margin: 2rem 0;
        }
        .demands-h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--primary-hover);
          margin-bottom: 1rem;
        }
        .icon-orange {
          color: var(--primary);
        }
        .demands-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .demands-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1rem;
          color: var(--text-main);
          font-weight: 500;
        }
        .icon-check {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .impact-box {
          background-color: var(--bg-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
          font-size: 0.98rem;
          color: var(--text-main);
        }
        .impact-h3 {
          font-weight: 700;
          margin-bottom: 0.35rem;
        }
        .references-box {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }
        .ref-h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .ref-list {
          padding-left: 1.25rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .detail-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
