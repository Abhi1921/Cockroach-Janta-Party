'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { faqData, FAQItem } from '@/data/faqData';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SearchBar } from '@/components/SearchBar';
import { FilterPills } from '@/components/FilterPills';
import { SchemaScript } from '@/components/SchemaScript';
import { HelpCircle, ShieldCheck } from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(faqData.map((f) => f.category)));
    return ['All', ...cats];
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Valid FAQPage JSON-LD Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <div className="faq-page">
      <SchemaScript schema={faqSchema} />
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* Hero */}
        <section className="faq-hero-card">
          <div className="badge badge-saffron mb-3">
            <HelpCircle size={14} /> Public Information Center
          </div>
          <h1 className="heading-display page-h1">Frequently Asked Questions</h1>
          <p className="page-lead">
            Find verified answers regarding Cockroach Janta Party Wale, our manifesto policies, information verification protocols, and contact options.
          </p>

          <div className="search-filter-box mt-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search questions (e.g. manifesto, verification, contact)..." />
            <FilterPills categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
          </div>
        </section>

        {/* FAQ List */}
        <section className="section-padding container-narrow">
          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} />
          ) : (
            <div className="empty-state-card card-base text-center p-5">
              <h3>No Questions Found</h3>
              <p className="text-secondary mt-2">
                No FAQ item matches your query &quot;{searchQuery}&quot;.
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
        .faq-hero-card {
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
      `}</style>
    </div>
  );
}
