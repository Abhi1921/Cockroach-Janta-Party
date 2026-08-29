import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/data/newsData';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, featured = false }) => {
  return (
    <article className={`card-base news-card ${featured ? 'news-card-featured' : ''}`}>
      <div className="card-image-wrapper">
        <Image
          src={article.featuredImage}
          alt={article.imageAlt}
          width={600}
          height={380}
          className="card-image"
          loading="lazy"
        />
        <span className="badge badge-saffron category-badge">{article.category}</span>
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span className="meta-item">
            <Calendar size={14} /> {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="meta-item">
            <Clock size={14} /> {article.readingTime}
          </span>
        </div>

        <h3 className="card-title">
          <Link href={`/news/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="card-summary">{article.summary}</p>

        <div className="card-footer">
          <span className="author-name">By {article.author.name}</span>
          <Link href={`/news/${article.slug}`} className="read-more-link" aria-label={`Read full article: ${article.title}`}>
            Read Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .news-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          background-color: var(--bg-subtle);
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .news-card:hover .card-image {
          transform: scale(1.04);
        }
        .category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          z-index: 2;
          box-shadow: var(--shadow-sm);
        }
        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }
        .card-title a:hover {
          color: var(--primary);
        }
        .card-summary {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .author-name {
          color: var(--text-muted);
          font-weight: 500;
        }
        .read-more-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--primary);
          font-weight: 600;
          transition: gap 0.2s ease;
        }
        .news-card:hover .read-more-link {
          gap: 0.5rem;
        }
      `}</style>
    </article>
  );
};
