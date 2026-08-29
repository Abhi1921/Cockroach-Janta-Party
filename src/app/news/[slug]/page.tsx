import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { newsData } from '@/data/newsData';
import { ShareButtons } from '@/components/ShareButtons';
import { SchemaScript } from '@/components/SchemaScript';
import { NewsCard } from '@/components/NewsCard';
import { Calendar, Clock, User, FileText, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsData.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | CJP News`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author.name],
      images: [{ url: article.featuredImage, alt: article.imageAlt }]
    },
    alternates: {
      canonical: `https://cockroachjantapartywale.com/news/${article.slug}`
    }
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsData.filter((a) => a.slug !== article.slug).slice(0, 2);

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: [article.featuredImage],
    datePublished: article.publishDate,
    dateModified: article.updatedDate || article.publishDate,
    author: [
      {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role
      }
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Cockroach Janta Party Wale',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cockroachjantapartywale.com/logo.png'
      }
    }
  };

  return (
    <div className="news-article-page">
      <SchemaScript schema={articleSchema} />
      <div className="container py-4">
        <Breadcrumbs
          items={[
            { label: 'News', href: '/news' },
            { label: article.title }
          ]}
        />

        <article className="article-container card-base">
          {/* Header */}
          <div className="article-header">
            <span className="badge badge-saffron mb-3">{article.category}</span>
            <h1 className="heading-display article-h1">{article.title}</h1>
            <p className="article-summary-lead">{article.summary}</p>

            <div className="article-meta-bar">
              <div className="meta-left">
                <span className="meta-author">
                  <User size={15} /> <strong>{article.author.name}</strong> ({article.author.role})
                </span>
                <span className="meta-date">
                  <Calendar size={15} /> {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  {article.updatedDate && ` (Updated: ${article.updatedDate})`}
                </span>
                <span className="meta-time">
                  <Clock size={15} /> {article.readingTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="article-featured-image-wrapper">
            <Image
              src={article.featuredImage}
              alt={article.imageAlt}
              width={1100}
              height={550}
              className="article-featured-img"
              priority
            />
            <span className="image-caption">{article.imageAlt}</span>
          </div>

          {/* Share Buttons */}
          <ShareButtons title={article.title} />

          {/* Content Body */}
          <div className="article-body">
            {article.content.map((sec, idx) => (
              <div key={idx} className="content-block">
                {sec.heading && <h2 className="content-h2">{sec.heading}</h2>}
                <p className="content-text">{sec.text}</p>
                {sec.list && (
                  <ul className="content-list">
                    {sec.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Sources & References */}
            {article.sources.length > 0 && (
              <div className="sources-card">
                <h3 className="sources-h3">
                  <FileText size={18} className="sources-icon" /> Verified Reference Sources
                </h3>
                <ul className="sources-list">
                  {article.sources.map((src, idx) => (
                    <li key={idx}>
                      <strong>{src.title}</strong> — Published by {src.publisher} ({src.date})
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="tags-wrapper">
              <span className="tags-label">Tags:</span>
              {article.tags.map((tag) => (
                <span key={tag} className="badge badge-slate">{tag}</span>
              ))}
            </div>
          </div>

          <div className="article-footer">
            <Link href="/news" className="btn btn-outline">
              <ArrowLeft size={16} /> Back to News Archive
            </Link>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="related-articles-section mt-5">
            <h3 className="heading-display text-2xl mb-4">Related Verified News</h3>
            <div className="grid-2">
              {relatedArticles.map((rel) => (
                <NewsCard key={rel.slug} article={rel} />
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .article-container {
          padding: 3.5rem 3rem;
          background-color: var(--bg-surface);
          margin-bottom: 3rem;
        }
        .article-h1 {
          font-size: 2.6rem;
          line-height: 1.25;
          margin-bottom: 1.25rem;
        }
        .article-summary-lead {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .article-meta-bar {
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
          margin-bottom: 2rem;
        }
        .meta-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .meta-author, .meta-date, .meta-time {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .article-featured-image-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .article-featured-img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: cover;
        }
        .image-caption {
          display: block;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
          font-style: italic;
        }
        .article-body {
          margin-top: 2.5rem;
        }
        .content-block {
          margin-bottom: 2rem;
        }
        .content-h2 {
          font-family: var(--font-serif);
          font-size: 1.7rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }
        .content-text {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .content-list {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 1.02rem;
          color: var(--text-main);
        }
        .content-list li {
          margin-bottom: 0.4rem;
        }
        .sources-card {
          background-color: var(--bg-subtle);
          border-left: 4px solid var(--primary);
          padding: 1.5rem;
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
          margin: 2.5rem 0;
        }
        .sources-h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .sources-icon {
          color: var(--primary);
        }
        .sources-list {
          padding-left: 1.25rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .sources-list li {
          margin-bottom: 0.35rem;
        }
        .tags-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }
        .tags-label {
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .article-footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .article-container { padding: 2rem 1.5rem; }
          .article-h1 { font-size: 2rem; }
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
