import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GalleryItem } from '@/data/galleryData';
import { Maximize2, MapPin, Calendar } from 'lucide-react';

interface GalleryCardProps {
  item: GalleryItem;
  onOpenLightbox?: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onOpenLightbox }) => {
  return (
    <div className="card-base gallery-card">
      <div className="gallery-image-container">
        <Image
          src={item.imageUrl}
          alt={item.imageAlt}
          width={600}
          height={400}
          className="gallery-img"
          loading="lazy"
        />
        <div className="gallery-overlay">
          <button
            onClick={() => onOpenLightbox && onOpenLightbox(item)}
            className="lightbox-trigger-btn"
            title="Expand Full Resolution Photo"
            aria-label={`Expand photo: ${item.title}`}
          >
            <Maximize2 size={20} />
          </button>
          <span className="badge badge-saffron gallery-badge">{item.category}</span>
        </div>
      </div>

      <div className="gallery-info">
        <div className="gallery-meta">
          <span className="meta-pin"><MapPin size={13} /> {item.location}</span>
          <span className="meta-date"><Calendar size={13} /> {item.date}</span>
        </div>
        <h3 className="gallery-title">
          <Link href={`/gallery/${item.slug}`}>{item.title}</Link>
        </h3>
        <p className="gallery-caption">{item.caption}</p>
        <div className="gallery-footer-meta">
          <span className="photographer-credit">Photo: {item.photographer}</span>
          <Link href={`/gallery/${item.slug}`} className="details-link">
            Details &rarr;
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gallery-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .gallery-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background-color: var(--bg-subtle);
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s ease;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1rem;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }
        .lightbox-trigger-btn {
          background-color: rgba(255, 255, 255, 0.9);
          color: var(--text-main);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .lightbox-trigger-btn:hover {
          background-color: var(--primary);
          color: white;
          transform: scale(1.1);
        }
        .gallery-info {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .gallery-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .meta-pin, .meta-date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .gallery-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }
        .gallery-title a:hover {
          color: var(--primary);
        }
        .gallery-caption {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .gallery-footer-meta {
          margin-top: auto;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
        }
        .photographer-credit {
          color: var(--text-muted);
        }
        .details-link {
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
