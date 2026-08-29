'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { galleryData, GalleryItem } from '@/data/galleryData';
import { GalleryCard } from '@/components/GalleryCard';
import { LightboxModal } from '@/components/LightboxModal';
import { FilterPills } from '@/components/FilterPills';
import { Image as GalleryIcon } from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(galleryData.map((g) => g.category)));
    return ['All', ...cats];
  }, []);

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'All') return galleryData;
    return galleryData.filter((g) => g.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = filteredGallery.findIndex((g) => g.id === item.id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex !== null && activeLightboxIndex > 0) {
      setActiveLightboxIndex(activeLightboxIndex - 1);
    }
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex !== null && activeLightboxIndex < filteredGallery.length - 1) {
      setActiveLightboxIndex(activeLightboxIndex + 1);
    }
  };

  return (
    <div className="gallery-index-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Media Gallery' }]} />

        {/* Hero */}
        <section className="gallery-hero-card">
          <div className="badge badge-saffron mb-3">
            <GalleryIcon size={14} /> Visual Documentation Archive
          </div>
          <h1 className="heading-display page-h1">Field Audits &amp; Media Gallery</h1>
          <p className="page-lead">
            High-resolution visual evidence of municipal drainage inspections, community forums, drinking water testing, and policy awareness posters.
          </p>

          <div className="filter-wrapper mt-4">
            <FilterPills categories={categories} activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="grid-3">
            {filteredGallery.map((item) => (
              <GalleryCard key={item.id} item={item} onOpenLightbox={handleOpenLightbox} />
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && filteredGallery[activeLightboxIndex] && (
          <LightboxModal
            item={filteredGallery[activeLightboxIndex]}
            onClose={() => setActiveLightboxIndex(null)}
            onPrev={activeLightboxIndex > 0 ? handlePrevLightbox : undefined}
            onNext={activeLightboxIndex < filteredGallery.length - 1 ? handleNextLightbox : undefined}
          />
        )}
      </div>

      <style jsx>{`
        .gallery-hero-card {
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
