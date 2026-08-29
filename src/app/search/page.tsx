'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SearchBar } from '@/components/SearchBar';
import { newsData } from '@/data/newsData';
import { campaignsData } from '@/data/campaignsData';
import { manifestoData } from '@/data/manifestoData';
import { resourcesData } from '@/data/resourcesData';
import { faqData } from '@/data/faqData';
import { Search, ArrowRight, FileText, Flag, Newspaper, HelpCircle, Archive } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  type: 'News' | 'Campaign' | 'Manifesto' | 'Resource' | 'FAQ';
  summary: string;
  url: string;
  date?: string;
}

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const res: SearchResult[] = [];

    // Search News
    newsData.forEach((n) => {
      if (
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        res.push({
          id: `news-${n.slug}`,
          title: n.title,
          type: 'News',
          summary: n.summary,
          url: `/news/${n.slug}`,
          date: n.publishDate
        });
      }
    });

    // Search Manifesto
    manifestoData.forEach((m) => {
      if (
        m.title.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q) ||
        m.keyDemands.some((d) => d.toLowerCase().includes(q))
      ) {
        res.push({
          id: `manifesto-${m.slug}`,
          title: `Point ${m.numberStr}: ${m.title}`,
          type: 'Manifesto',
          summary: m.summary,
          url: `/manifesto/${m.slug}`
        });
      }
    });

    // Search Campaigns
    campaignsData.forEach((c) => {
      if (
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q)
      ) {
        res.push({
          id: `campaign-${c.slug}`,
          title: c.title,
          type: 'Campaign',
          summary: c.summary,
          url: `/campaigns/${c.slug}`,
          date: c.startDate
        });
      }
    });

    // Search Resources
    resourcesData.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)) {
        res.push({
          id: `res-${r.id}`,
          title: r.title,
          type: 'Resource',
          summary: r.description,
          url: '/resources',
          date: r.date
        });
      }
    });

    // Search FAQ
    faqData.forEach((f) => {
      if (f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) {
        res.push({
          id: `faq-${f.id}`,
          title: f.question,
          type: 'FAQ',
          summary: f.answer,
          url: '/faq'
        });
      }
    });

    return res;
  }, [query]);

  const getTypeIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'News': return Newspaper;
      case 'Campaign': return Flag;
      case 'Manifesto': return FileText;
      case 'Resource': return Archive;
      case 'FAQ': return HelpCircle;
    }
  };

  return (
    <div className="container py-4">
      <Breadcrumbs items={[{ label: 'Site Search' }]} />

      {/* Hero */}
      <section className="search-hero-card">
        <span className="badge badge-saffron mb-3">Instant Search Engine</span>
        <h1 className="heading-display page-h1">Search CJP Portal</h1>
        <p className="page-lead">
          Find news articles, manifesto positions, campaign status reports, downloadable resources, and FAQ answers.
        </p>

        <div className="search-box-wrapper mt-4">
          <SearchBar value={query} onChange={setQuery} placeholder="Type keywords like 'sanitation', 'tender', 'water', 'RTI'..." />
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding container-narrow">
        {query.trim() !== '' && (
          <div className="results-header mb-4">
            <h2>
              Search Results for &quot;<strong>{query}</strong>&quot; ({results.length} found)
            </h2>
          </div>
        )}

        {results.length > 0 ? (
          <div className="results-list space-y-4">
            {results.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <article key={item.id} className="card-base result-card p-4">
                  <div className="result-meta flex items-center justify-between mb-2">
                    <span className="badge badge-saffron flex items-center gap-1">
                      <TypeIcon size={13} /> {item.type}
                    </span>
                    {item.date && <span className="text-xs text-muted">{item.date}</span>}
                  </div>
                  <h3 className="result-title text-xl font-serif font-bold mb-2">
                    <Link href={item.url}>{item.title}</Link>
                  </h3>
                  <p className="result-summary text-secondary text-sm mb-3">{item.summary}</p>
                  <Link href={item.url} className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                    View Details <ArrowRight size={14} />
                  </Link>
                </article>
              );
            })}
          </div>
        ) : query.trim() !== '' ? (
          <div className="empty-state-card card-base text-center p-5">
            <Search size={40} className="mx-auto text-muted mb-3" />
            <h3 className="text-xl font-bold">No Matching Results Found</h3>
            <p className="text-secondary mt-2">
              We couldn&apos;t find any portal material matching &quot;{query}&quot;. Try searching for broader terms like &quot;sanitation&quot;, &quot;drains&quot;, &quot;RTI&quot;, or &quot;manifesto&quot;.
            </p>
          </div>
        ) : (
          <div className="initial-state-card card-base text-center p-5">
            <Search size={40} className="mx-auto text-primary mb-3" />
            <h3 className="text-xl font-bold">Enter a Search Query</h3>
            <p className="text-secondary mt-2">
              Type keywords above to instantly search across all CJP public information modules.
            </p>
          </div>
        )}
      </section>

      <style jsx>{`
        .search-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .page-h1 { font-size: 2.6rem; margin-bottom: 0.75rem; }
        .page-lead { font-size: 1.15rem; color: var(--text-secondary); max-width: 800px; line-height: 1.6; }
        .search-box-wrapper { max-width: 750px; }
        .results-header h2 { font-size: 1.25rem; color: var(--text-main); }
        .space-y-4 > :global(* + *) { margin-top: 1.25rem; }
        .result-title a:hover { color: var(--primary); }
      `}</style>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container py-5 text-center">Loading Search Portal...</div>}>
      <SearchContent />
    </Suspense>
  );
}
