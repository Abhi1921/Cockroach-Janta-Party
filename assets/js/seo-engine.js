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
    "Cockroach Janata Party",
    "CJP",
    "Abhijeet Dipke hunger strike",
    "NEET paper leak protest 2026",
    "CJP Sansad Chalo march",
    "Jantar Mantar protest news today",
    "student rights India",
    "youth political satire movement",
    "#MainBhiCockroach trending news",
    "Supreme Court CJI cockroach remark",
    "Sonam Wangchuk eviction Jantar Mantar",
    "JP Nadda CJP delegation meeting",
    "Dharmendra Pradhan resignation demand"
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
          "@type": "NewsArticle",
          "@id": canonicalUrl + "#trending-news",
          "headline": "Cockroach Janta Party Mega Youth Movement & NEET Reform Drive",
          "description": "Live coverage of Cockroach Janta Party (CJP) protests, Jantar Mantar hunger strike, and student integrity demands.",
          "image": [
            "https://cockroachjantapartywale.com/assets/img/cjp/trending-cjp-poster-1.png",
            "https://cockroachjantapartywale.com/assets/img/cjp/trending-cjp-poster-2.png"
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
              "url": "https://cockroachjantapartywale.com/assets/img/logo.png"
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

  // IndexNow API ping trigger (for Bing & Yandex search indexation)
  const pingIndexNow = () => {
    try {
      const data = {
        host: "cockroachjantapartywale.com",
        key: "4892701bf4e93012",
        keyLocation: "https://cockroachjantapartywale.com/cjp2026indexnow4892701bf4e93012.txt",
        urlList: [
          "https://cockroachjantapartywale.com/",
          "https://cockroachjantapartywale.com/vision",
          "https://cockroachjantapartywale.com/manifesto",
          "https://cockroachjantapartywale.com/articles",
          "https://cockroachjantapartywale.com/protests",
          "https://cockroachjantapartywale.com/issues",
          "https://cockroachjantapartywale.com/join"
        ]
      };
      fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(data)
      }).catch(() => {});
    } catch(e) {}
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectStructuredData();
      pingIndexNow();
    });
  } else {
    injectStructuredData();
    pingIndexNow();
  }
})();
