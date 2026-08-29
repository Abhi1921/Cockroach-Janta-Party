import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { manifestoData } from '@/data/manifestoData';
import { newsData } from '@/data/newsData';
import { campaignsData } from '@/data/campaignsData';
import { galleryData } from '@/data/galleryData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const staticRoutes = [
    '',
    '/about',
    '/manifesto',
    '/founder',
    '/news',
    '/campaigns',
    '/gallery',
    '/join',
    '/faq',
    '/contact',
    '/press',
    '/resources',
    '/updates',
    '/privacy',
    '/terms',
    '/cookies',
    '/accessibility',
    '/sitemap'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const manifestoRoutes = manifestoData.map((m) => ({
    url: `${baseUrl}/manifesto/${m.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const newsRoutes = newsData.map((n) => ({
    url: `${baseUrl}/news/${n.slug}`,
    lastModified: n.updatedDate || n.publishDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }));

  const campaignRoutes = campaignsData.map((c) => ({
    url: `${baseUrl}/campaigns/${c.slug}`,
    lastModified: c.startDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  const galleryRoutes = galleryData.map((g) => ({
    url: `${baseUrl}/gallery/${g.slug}`,
    lastModified: g.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [
    ...staticRoutes,
    ...manifestoRoutes,
    ...newsRoutes,
    ...campaignRoutes,
    ...galleryRoutes
  ];
}
