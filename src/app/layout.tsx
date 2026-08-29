import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/data/siteConfig';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { Footer } from '@/components/Footer';
import { SchemaScript } from '@/components/SchemaScript';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Official Website`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'Cockroach Janta Party',
    'Cockroach Janata Party',
    'Cockroach Janta Party Wale',
    'CJP Wale',
    'Cockroach Janta Party official website',
    'Cockroach Janta Party manifesto',
    'Cockroach Janta Party founder',
    'Cockroach Janta Party news',
    'Cockroach Janta Party campaigns',
    'Cockroach Janta Party contact',
    'Cockroach Janta Party FAQ',
    'Civic Sanitation India',
    'Urban Hygiene Audit'
  ],
  authors: [{ name: 'Cockroach Janta Party Wale Editorial Wing' }],
  creator: 'Cockroach Janta Party Wale',
  publisher: 'Cockroach Janta Party Wale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Official Website`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cockroach Janta Party Wale Official Portal'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Official Website`,
    description: siteConfig.description,
    creator: '@cjpwale_official'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: `${siteConfig.domain}/manifest.webmanifest`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Global Organization & WebSite JSON-LD
  const globalSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.domain,
      logo: `${siteConfig.domain}/logo.png`,
      email: siteConfig.contactEmail,
      sameAs: Object.values(siteConfig.socialLinks)
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.domain,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteConfig.domain}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        <SchemaScript schema={globalSchemas} />
        <link rel="canonical" href={siteConfig.domain} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content" style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
