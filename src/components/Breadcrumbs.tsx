import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { SchemaScript } from './SchemaScript';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: item.href ? `${siteConfig.domain}${item.href}` : undefined
    }))
  };

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="breadcrumbs-nav">
        <ol className="breadcrumbs-list">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} className="breadcrumbs-item">
                {idx === 0 ? (
                  <Link href="/" className="crumb-link home-link" aria-label="Home">
                    <Home size={14} />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast || !item.href ? (
                  <span className="crumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="crumb-link">
                    {item.label}
                  </Link>
                )}
                {!isLast && <ChevronRight size={14} className="crumb-separator" />}
              </li>
            );
          })}
        </ol>

        <style jsx>{`
          .breadcrumbs-nav {
            padding: 0.75rem 0;
            margin-bottom: 1.5rem;
          }
          .breadcrumbs-list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.4rem;
            list-style: none;
            font-size: 0.88rem;
          }
          .breadcrumbs-item {
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }
          .crumb-link {
            color: var(--text-secondary);
            font-weight: 500;
            transition: color 0.15s ease;
          }
          .crumb-link:hover {
            color: var(--primary);
            text-decoration: underline;
          }
          .home-link {
            display: inline-flex;
            align-items: center;
          }
          .crumb-current {
            color: var(--text-main);
            font-weight: 600;
            max-width: 280px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .crumb-separator {
            color: var(--text-muted);
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
          }
        `}</style>
      </nav>
    </>
  );
};
