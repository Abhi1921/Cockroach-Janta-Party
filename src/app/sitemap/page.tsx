import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { manifestoData } from '@/data/manifestoData';
import { newsData } from '@/data/newsData';
import { campaignsData } from '@/data/campaignsData';
import { galleryData } from '@/data/galleryData';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Visual Site Map | Cockroach Janta Party Wale',
  description: 'Human-readable visual site directory of all pages, articles, manifesto policy documents, campaigns, media gallery items, and legal policies.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/sitemap'
  }
};

export default function VisualSitemapPage() {
  const sections = [
    {
      title: 'Main Navigation Pages',
      links: [
        { title: 'Home Page', href: '/' },
        { title: 'About Movement', href: '/about' },
        { title: 'Civic Manifesto Index', href: '/manifesto' },
        { title: 'Founder & Leadership', href: '/founder' },
        { title: 'Verified News Archive', href: '/news' },
        { title: 'Campaigns Index', href: '/campaigns' },
        { title: 'Media Gallery', href: '/gallery' },
        { title: 'Join Volunteer Network', href: '/join' },
        { title: 'Frequently Asked Questions', href: '/faq' },
        { title: 'Contact Secretariat', href: '/contact' },
        { title: 'Press & Media Kit', href: '/press' },
        { title: 'Civic Resources', href: '/resources' },
        { title: 'Verified Public Updates', href: '/updates' },
        { title: 'Site-Wide Search Engine', href: '/search' }
      ]
    },
    {
      title: 'Manifesto Policy Charters',
      links: manifestoData.map((m) => ({
        title: `Point ${m.numberStr}: ${m.title}`,
        href: `/manifesto/${m.slug}`
      }))
    },
    {
      title: 'Verified Editorial News Articles',
      links: newsData.map((n) => ({
        title: n.title,
        href: `/news/${n.slug}`
      }))
    },
    {
      title: 'Civic Campaigns & Initiatives',
      links: campaignsData.map((c) => ({
        title: c.title,
        href: `/campaigns/${c.slug}`
      }))
    },
    {
      title: 'Media Gallery Visual Items',
      links: galleryData.map((g) => ({
        title: g.title,
        href: `/gallery/${g.slug}`
      }))
    },
    {
      title: 'Legal & Policy Information',
      links: siteConfig.legalLinks
    }
  ];

  return (
    <div className="sitemap-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Visual Sitemap' }]} />

        <section className="sitemap-hero-card card-base p-5 mb-5">
          <span className="badge badge-saffron mb-3">Site Architecture</span>
          <h1 className="heading-display text-3xl mb-2">HTML Visual Sitemap</h1>
          <p className="text-secondary text-base max-w-2xl">
            A comprehensive, human-readable directory of all canonical routes, policy positions, news releases, campaigns, and media assets published on cockroachjantapartywale.com.
          </p>
        </section>

        <section className="grid-2 gap-4">
          {sections.map((sec, idx) => (
            <div key={idx} className="sitemap-card card-base p-4">
              <h2 className="heading-display text-xl mb-3 text-primary">{sec.title}</h2>
              <ul className="space-y-2 list-disc pl-5 text-sm">
                {sec.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors font-medium">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <style jsx>{`
        .sitemap-hero-card { background-color: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-xl); }
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 3rem; }
        @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
