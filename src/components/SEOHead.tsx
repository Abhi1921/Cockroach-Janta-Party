import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "Cockroach Janta Party, CJP, CJP Party, Abhijeet Dipke, Ashutosh Ranka, Saurav Das, School Thik Karo, Black Monday 20 July, youth civic movement, public accountability, RTI transparency, urban governance, ward audit",
  ogImage = "/cjp_banner.png",
  canonicalUrl
}) => {
  useEffect(() => {
    // 1. Page Title: Strictly "Cockroach Janta Party" when specified, or append cleanly
    const fullTitle = title === "Cockroach Janta Party"
      ? "Cockroach Janta Party"
      : title.includes("Cockroach Janta Party")
        ? title
        : `${title} | Cockroach Janta Party`;
    document.title = fullTitle;

    // Helper to set meta attributes
    const setMeta = (nameAttr: string, nameValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // 2. Standard Meta Tags & Site Name
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'application-name', 'Cockroach Janta Party Official Website');

    // 3. Open Graph Tags
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Cockroach Janta Party Official Website');

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 5. Canonical Link
    const targetCanonical = canonicalUrl || 'https://cockroachjantapartywale.com/';
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', targetCanonical);

    // 6. Dynamic BreadcrumbList Schema.org JSON-LD for Google Search Console
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
          "name": title.replace(" | Cockroach Janta Party", ""),
          "item": targetCanonical
        }] : [])
      ]
    };
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};
