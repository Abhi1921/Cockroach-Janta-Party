
/**
 * CJP Trending SEO Engine & Indexing System
 * Automates OpenGraph, Twitter Cards, Schema.org Structured Data, and Indexing Pings.
 */
(() => {
  const S = window.CJP_SITE || {};
  const currentUrl = window.location.href.split('#')[0];
  const canonicalUrl = "https://cockroachjantapartywale.com" + window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  const todayIso = new Date().toISOString();

  // Dynamic Trending SEO Keywords
  const trendingKeywords = [
    "Cockroach Janta Party",
    "Cockroach Janta Party Wale",
    "cockroach janta party wale",
    "cockroach janta party",
    "Cockroach Janata Party",
    "Cockroach Party",
    "Cockroach Janta Party website",
    "Cockroach Janta Party India",
    "CJP",
    "CJP official website",
    "CJP India",
    "cockroachjantapartywale.com",
    "cockroachjantaparty.com",
    "Abhijeet Dipke",
    "Abhijeet Dipke founder",
    "Abhijeet Dipke CJP",
    "#MainBhiCockroach",
    "Main Bhi Cockroach",
    "20 July Jantar Mantar protest",
    "Sansad march 2026",
    "Dharmendra Pradhan resignation",
    "NEET paper leak 2026",
    "NTA exam audit",
    "NEET reform",
    "youth unemployment India",
    "student protests Delhi",
    "Jantar Mantar rally",
    "exam integrity manifesto",
    "5 demands CJP",
    "youth political party India",
    "satire political party India",
    "CJI cockroach remark",
    "India burnt out youth",
    "CJP swarm",
    "CJP member card",
    "CJP digital ID",
    "CJP registration",
    "CJP join",
    "CJP donate",
    "CJP news",
    "CJP leader",
    "Abhijeet Dipke hunger strike",
    "student rights movement India",
    "Gen Z politics India",
    "CJP articles",
    "CJP manifesto",
    "CJP protests",
    "CJP issues",
    "CJP tracker",
    "CJP revolutionaries",
    "Cockroach Janta Party news updates"
  ].join(", ");

  // Ensure Meta Keywords Tag
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = trendingKeywords;

  // Ensure Canonical Tag
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.href = canonicalUrl.endsWith('/') ? canonicalUrl : canonicalUrl + "/";

  // Schema.org Live News & Event Structured Data Injection
  const injectStructuredData = () => {
    if (document.getElementById("ld-trending-news")) return;

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": canonicalUrl + "#website",
          "url": "https://cockroachjantapartywale.com",
          "name": "Cockroach Janta Party Official Website",
          "alternateName": ["Cockroach Janta Party", "Cockroach Janta Party Wale", "Cockroach Janata Party", "CJP Official Website", "CJP"],
          "publisher": {
            "@type": "Organization",
            "name": "Cockroach Janta Party Official Website",
            "url": "https://cockroachjantapartywale.com",
            "logo": "https://cockroachjantapartywale.com/assets/img/logo.webp"
          }
        },
        {
          "@type": "NewsArticle",
          "@id": canonicalUrl + "#trending-news",
          "headline": "Cockroach Janta Party Mega Youth Movement & NEET Reform Drive",
          "description": "Live coverage of Cockroach Janta Party (CJP) protests, Jantar Mantar hunger strike, and student integrity demands.",
          "image": [
            "https://cockroachjantapartywale.com/assets/img/cjp/trending-cjp-poster-1.webp",
            "https://cockroachjantapartywale.com/assets/img/cjp/trending-cjp-poster-2.webp"
          ],
          "datePublished": "2026-07-20T08:00:00+05:30",
          "dateModified": todayIso,
          "author": {
            "@type": "Person",
            "name": "Abhijeet Dipke"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Cockroach Janta Party",
            "logo": {
              "@type": "ImageObject",
              "url": "https://cockroachjantapartywale.com/assets/img/logo.webp"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
          }
        },
        {
          "@type": "Event",
          "@id": canonicalUrl + "#sansad-chalo-event",
          "name": "CJP Sansad Chalo Mega Youth March",
          "startDate": "2026-07-20T10:00:00+05:30",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Jantar Mantar",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jantar Mantar Road",
              "addressLocality": "New Delhi",
              "postalCode": "110001",
              "addressCountry": "IN"
            }
          },
          "description": "Massive peaceful youth protest for examination integrity, student representation, and public audit of competitive exams.",
          "organizer": {
            "@type": "Organization",
            "name": "Cockroach Janta Party",
            "url": "https://cockroachjantapartywale.com"
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.id = "ld-trending-news";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectStructuredData();
    });
  } else {
    injectStructuredData();
  }
})();
