'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/data/galleryData';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={`Media viewer: ${item.title}`}>
      <div className="lightbox-backdrop" onClick={onClose} />

      <div className="lightbox-container">
        {/* Close Button */}
        <button onClick={onClose} className="lightbox-close-btn" aria-label="Close Lightbox (Esc)">
          <X size={24} />
        </button>

        {/* Prev / Next Buttons */}
        {onPrev && (
          <button onClick={onPrev} className="nav-arrow nav-prev" aria-label="Previous Image">
            <ChevronLeft size={28} />
          </button>
        )}
        {onNext && (
          <button onClick={onNext} className="nav-arrow nav-next" aria-label="Next Image">
            <ChevronRight size={28} />
          </button>
        )}

        {/* Image Content Frame */}
        <div className="lightbox-content">
          <div className="image-frame">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              width={1200}
              height={800}
              className="full-image"
              priority
            />
          </div>

          <div className="lightbox-caption-box">
            <div className="caption-header">
              <span className="badge badge-saffron">{item.category}</span>
              <div className="meta-pills">
                <span><MapPin size={13} /> {item.location}</span>
                <span><Calendar size={13} /> {item.date}</span>
                <span><Camera size={13} /> {item.photographer}</span>
              </div>
            </div>
            <h2 className="lightbox-title">{item.title}</h2>
            <p className="lightbox-caption-text">{item.caption}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .lightbox-backdrop {
          position: absolute;
          inset: 0;
          background-color: rgba(9, 13, 22, 0.92);
          backdrop-filter: blur(8px);
        }
        .lightbox-container {
          position: relative;
          z-index: 2001;
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .lightbox-close-btn {
          position: absolute;
          top: -45px;
          right: 0;
          color: white;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }
        .lightbox-close-btn:hover {
          background: var(--primary);
        }
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2002;
          transition: all 0.2s ease;
        }
        .nav-arrow:hover {
          background: var(--primary);
        }
        .nav-prev {
          left: -60px;
        }
        .nav-next {
          right: -60px;
        }
        .lightbox-content {
          background-color: var(--bg-dark-section);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          display: flex;
          flex-direction: column;
        }
        .image-frame {
          position: relative;
          width: 100%;
          max-height: 60vh;
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .full-image {
          width: 100%;
          height: 100%;
          max-height: 60vh;
          object-fit: contain;
        }
        .lightbox-caption-box {
          padding: 1.5rem;
          color: white;
        }
        .caption-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .meta-pills {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.82rem;
          color: #94A3B8;
        }
        .meta-pills span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
        }
        .lightbox-caption-text {
          font-size: 0.92rem;
          color: #CBD5E1;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .nav-prev { left: 10px; }
          .nav-next { right: 10px; }
        }
      `}</style>
    </div>
  );
};
