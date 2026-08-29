import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { galleryData } from '@/data/galleryData';
import { ShareButtons } from '@/components/ShareButtons';
import { SchemaScript } from '@/components/SchemaScript';
import { MapPin, Calendar, Camera, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return galleryData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = galleryData.find((g) => g.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} | CJP Media Gallery`,
    description: item.caption,
    openGraph: {
      title: item.title,
      description: item.caption,
      images: [{ url: item.imageUrl, alt: item.imageAlt }]
    },
    alternates: {
      canonical: `https://cockroachjantapartywale.com/gallery/${item.slug}`
    }
  };
}

export default async function GalleryDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = galleryData.find((g) => g.slug === slug);

  if (!item) {
    notFound();
  }

  const imageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: item.title,
    caption: item.caption,
    contentUrl: item.imageUrl,
    datePublished: item.date,
    author: {
      '@type': 'Person',
      name: item.photographer
    }
  };

  return (
    <div className="gallery-detail-page">
      <SchemaScript schema={imageSchema} />
      <div className="container py-4">
        <Breadcrumbs
          items={[
            { label: 'Gallery', href: '/gallery' },
            { label: item.title }
          ]}
        />

        <article className="gallery-detail-card card-base">
          <div className="gallery-header">
            <span className="badge badge-saffron mb-2">{item.category}</span>
            <h1 className="heading-display detail-h1">{item.title}</h1>
            <p className="detail-caption-lead">{item.caption}</p>

            <div className="meta-pills-row">
              <span><MapPin size={15} /> Location: <strong>{item.location}</strong></span>
              <span><Calendar size={15} /> Date: <strong>{item.date}</strong></span>
              <span><Camera size={15} /> Photo Credit: <strong>{item.photographer}</strong></span>
            </div>
          </div>

          <div className="full-res-image-frame">
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              width={1200}
              height={800}
              className="detail-img"
              priority
            />
            <span className="image-resolution-badge">Format: {item.resolution}</span>
          </div>

          <ShareButtons title={item.title} />

          <div className="tags-row">
            <span className="tags-label">Tags:</span>
            {item.tags.map((t) => (
              <span key={t} className="badge badge-slate">{t}</span>
            ))}
          </div>

          <div className="detail-footer">
            <Link href="/gallery" className="btn btn-outline">
              <ArrowLeft size={16} /> Back to Media Gallery
            </Link>
          </div>
        </article>
      </div>

      <style jsx>{`
        .gallery-detail-card {
          padding: 3rem 2.5rem;
          background-color: var(--bg-surface);
          margin-bottom: 3rem;
        }
        .detail-h1 {
          font-size: 2.4rem;
          margin-bottom: 0.75rem;
        }
        .detail-caption-lead {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .meta-pills-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
          margin-bottom: 2rem;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .meta-pills-row span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .full-res-image-frame {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: #000;
          margin-bottom: 2rem;
        }
        .detail-img {
          width: 100%;
          height: auto;
          max-height: 650px;
          object-fit: contain;
        }
        .image-resolution-badge {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(15, 23, 42, 0.85);
          color: white;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .tags-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        .tags-label {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .detail-footer {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-light);
        }
        @media (max-width: 768px) {
          .gallery-detail-card { padding: 2rem 1.5rem; }
        }
      `}</style>
    </div>
  );
}
