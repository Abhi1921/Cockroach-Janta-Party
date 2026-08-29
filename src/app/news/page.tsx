'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { newsData } from '@/data/newsData';
import { NewsCard } from '@/components/NewsCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterPills } from '@/components/FilterPills';
import { Pagination } from '@/components/Pagination';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsData.map((a) => a.category)));
    return ['All', ...cats];
  }, []);

  const filteredNews = useMemo(() => {
    return newsData.filter((article) => {
      const matchesCat = activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage]);

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <div className="news-index-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'News & Updates' }]} />

        {/* Page Header */}
        <section className="news-hero-card">
          <div className="badge badge-saffron mb-3">
            <Newspaper size={14} /> Editorial Press Desk
          </div>
          <h1 className="heading-display page-h1">Verified Civic News &amp; Reports</h1>
          <p className="page-lead">
            Empirical civic investigations, municipal budget analyses, vector control policy papers, and public audit releases.
          </p>

          <div className="search-filter-box mt-4">
            <SearchBar value={searchQuery} onChange={handleSearchChange} placeholder="Search articles by title, tag, or topic..." />
            <FilterPills categories={categories} activeCategory={activeCategory} onSelectCategory={handleCategorySelect} />
          </div>
        </section>

        {/* News Grid */}
        <section className="section-padding">
          {paginatedNews.length > 0 ? (
            <>
              <div className="grid-3">
                {paginatedNews.map((article) => (
                  <NewsCard key={article.slug} article={article} />
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </>
          ) : (
            <div className="empty-state-card card-base text-center p-5">
              <h3>No Articles Found</h3>
              <p className="text-secondary mt-2">
                No news articles match your current search &quot;{searchQuery}&quot; or filter category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="btn btn-outline btn-sm mt-3"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        .news-hero-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .page-h1 {
          font-size: 2.6rem;
          margin-bottom: 0.75rem;
        }
        .page-lead {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 800px;
          line-height: 1.6;
        }
        .search-filter-box {
          max-width: 800px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 992px) {
          .grid-3 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
