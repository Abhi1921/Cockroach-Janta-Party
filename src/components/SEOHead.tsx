import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'news';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  schemaData?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "Cockroach Janta Party, Cockroach Janta Party Wale, cockroachjanatapartywale.com, CJP, CJP Party, Abhijeet Dipke, Ashutosh Ranka, Saurav Das, School Thik Karo, Supreme Court FIR quash archive, Black Monday 20 July, youth civic movement, public accountability, RTI transparency, urban governance, ward audit",
  ogImage = "/cjp_banner.png",
  canonicalUrl,
  ogType = 'website',
  author = 'Cockroach Janta Party Secretariat',
  publishedTime,
  modifiedTime,
  noindex = false,
  schemaData
}) => {
  useEffect(() => {
    // 1. Page Title: Ensure high ranking brand keyword "Cockroach Janta Party Wale"
    const fullTitle = title === "Cockroach Janta Party" || title === "Cockroach Janta Party Wale"
      ? "Cockroach Janta Party Wale — Independent Commentary & Updates"
      : title.includes("Cockroach Janta Party")
        ? title
        : `${title} | Cockroach Janta Party Wale`;
    document.title = fullTitle;

    // Helper to set meta attributes safely
    const setMeta = (nameAttr: string, nameValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://cockroachjantapartywale.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
    const targetCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://cockroachjantapartywale.com/');

    // 2. Core Search Engine Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', author);
    setMeta('name', 'application-name', 'Cockroach Janta Party Official Website');
    setMeta('name', 'theme-color', '#16120D');
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large');
    setMeta('name', 'geo.region', 'IN-DL');
    setMeta('name', 'geo.placename', 'New Delhi');

    // 3. Open Graph Tags (Facebook, LinkedIn, WhatsApp)
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', targetCanonical);
    setMeta('property', 'og:site_name', 'Cockroach Janta Party Official Website');
    setMeta('property', 'og:locale', 'en_US');

    if (publishedTime) setMeta('property', 'article:published_time', publishedTime);
    if (modifiedTime) setMeta('property', 'article:modified_time', modifiedTime);
    if (author) setMeta('property', 'article:author', author);

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullOgImage);
    setMeta('name', 'twitter:site', '@Cockroachisback');
    setMeta('name', 'twitter:creator', '@abhijeet_dipke');

    // 5. Canonical Link
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', targetCanonical);

    // 6. Dynamic BreadcrumbList & Page Schema.org JSON-LD for Google Search Console
    let breadcrumbScript = document.querySelector('#seo-breadcrumb-schema');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'seo-breadcrumb-schema';
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(breadcrumbScript);
    }
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Cockroach Janta Party Official Website",
          "item": "https://cockroachjantapartywale.com/"
        },
        ...(targetCanonical !== "https://cockroachjantapartywale.com/" ? [{
          "@type": "ListItem",
          "position": 2,
          "name": title.replace(" | Cockroach Janta Party", "").replace(" | Cockroach Janta Party Wale", ""),
          "item": targetCanonical
        }] : [])
      ]
    };
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);

    // 7. Custom Schema JSON-LD (if provided for News, Person, Article)
    if (schemaData) {
      let customSchemaScript = document.querySelector('#seo-custom-schema');
      if (!customSchemaScript) {
        customSchemaScript = document.createElement('script');
        customSchemaScript.id = 'seo-custom-schema';
        customSchemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(customSchemaScript);
      }
      customSchemaScript.textContent = JSON.stringify(schemaData);
    }
  }, [title, description, keywords, ogImage, canonicalUrl, ogType, author, publishedTime, modifiedTime, noindex, schemaData]);

  return null;
};
