
/**
 * CJP Trending SEO Engine & Indexing System
 * Automates OpenGraph, Twitter Cards, Schema.org Structured Data, FAQPage, and Indexing Pings.
 */
(() => {
  const S = window.CJP_SITE || {};
  const currentUrl = window.location.href.split('#')[0];
  const canonicalUrl = "https://cockroachjantapartywale.com" + window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  const todayIso = new Date().toISOString();

  // Comprehensive Union SEO Keywords (Incorporates cockroachjantaparty.com & thecockroachjantaparty.org.in)
  const trendingKeywords = [
    "Cockroach Janta Party Official Website",
    "cockroachjantaparty.com",
    "www.cockroachjantaparty.com",
    "thecockroachjantaparty.org.in",
    "www.thecockroachjantaparty.org.in",
    "cockroachjantaparty.org",
    "Cockroach Janta Party",
    "Cockroach Janata Party",
    "The Cockroach Janta Party",
    "TCJP",
    "CJP",
    "कॉकरोच जनता पार्टी",
    "cockroach janta party manifesto",
    "cockroach janta party members",
    "cockroach janta party join",
    "cockroach janta party demands",
    "cockroach janta party eligibility",
    "India cockroach party",
    "Janta party India 2026",
    "Indian political satire",
    "satirical political party India",
    "Indian youth political movement",
    "Indian electoral reform",
    "anti-defection law India",
    "women reservation 50 percent India",
    "media monopoly India",
    "Rajya Sabha post-retirement appointment",
    "Ambani Adani media licences",
    "graduate unemployment India",
    "Indian politics 2026",
    "unemployment political movement India",
    "overqualified unemployed India",
    "burnt-out youth India",
    "Gen Z politics India",
    "Gen Z political movement India",
    "engineering graduates jobless India",
    "why graduates are unemployed in India",
    "India youth unemployment 2026",
    "naukri nahi mil rahi",
    "degree hai job nahi",
    "satirical political movement India",
    "Cockroach Janta Party Wale",
    "cockroach janta party wale",
    "Cockroach Party",
    "Cockroach Janta Party website",
    "Cockroach Janta Party India",
    "CJP official website",
    "CJP India",
    "cockroachjantapartywale.com",
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
    "CJP articles",
    "CJP manifesto",
    "CJP protests",
    "CJP issues",
    "CJP tracker",
    "CJP revolutionaries",
    "Cockroach Janta Party news updates",
    "CJP Official",
    "CJP Youth Swarm",
    "CJP Digital ID Card",
    "CJP Membership",
    "CJP Manifesto 5 Demands",
    "CJP Supreme Court Notice",
    "CJP Abhijeet Dipke",
    "Cockroach Janta Party",
    "Cockroach Janata Party",
    "The Cockroach Janta Party",
    "Cockroach Janta Party Wale",
    "cockroachjantaparty.com",
    "cockroachjantapartywale.com",
    "thecockroachjantaparty.org.in",
    "cockroachjantaparty.org",
    "Cockroach Party India",
    "Reservation Hatao Movement",
    "Reservation Hatao Bring Meritocracy",
    "Aarakshan Hatao Yogyata Lao CJP",
    "Remove Caste Reservation India 2026",
    "100 Percent Meritocracy Entrance Exams",
    "NEET Exam Meritocracy CJP",
    "Cockroach Janta Party Reservation Protest",
    "Supreme Court Notice Caste Quota CJP",
    "General Category Merit Rights India 2026",
    "Supreme Court Notice Meritocracy CJP",
    "CJP Latest News Updates",
    "Abhijeet Dipke Reservation Hatao",
    "Economic Aid Meritocracy Framework India",
    "Equal Opportunity Student Agitation CJP",
    "Caste Reservation Abolition India",
    "Meritocracy Student Protest India",
    "Supreme Court PIL Reservation Reform",
    "100 Percent Meritocracy System"
  ].join(", ");

  // Ensure Meta Keywords Tag
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = trendingKeywords;

  // Ensure Meta Tags Alignment from cockroachjantaparty.com & thecockroachjantaparty.org.in
  const metaAdditions = [
    { name: "format-detection", content: "telephone=no, address=no, email=no" },
    { property: "og:see_also", content: "https://www.cockroachjantaparty.com" },
    { property: "og:see_also", content: "https://www.thecockroachjantaparty.org.in" },
    { property: "og:see_also", content: "https://cockroachjantaparty.org" },
    { property: "og:locale", content: "en_IN" },
    { property: "og:site_name", content: "Cockroach Janta Party" }
  ];

  metaAdditions.forEach(m => {
    const selector = m.name ? `meta[name="${m.name}"]` : `meta[property="${m.property}"][content="${m.content}"]`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      if (m.name) tag.name = m.name;
      if (m.property) tag.setAttribute('property', m.property);
      document.head.appendChild(tag);
    }
    tag.content = m.content;
  });

  // Ensure Google Site Verification Tag
  let gscTag = document.querySelector('meta[name="google-site-verification"]');
  if (!gscTag) {
    gscTag = document.createElement('meta');
    gscTag.name = "google-site-verification";
    gscTag.content = "Lxdnf1IqpXNpOSTlI8OgBvQdM1L0KwgHANOqUZ5_jDc";
    document.head.appendChild(gscTag);
  }

  // Ensure RSS Feed Link Tag for Google News Crawlers
  let rssLink = document.querySelector('link[type="application/rss+xml"]');
  if (!rssLink) {
    rssLink = document.createElement('link');
    rssLink.rel = "alternate";
    rssLink.type = "application/rss+xml";
    rssLink.title = "Cockroach Janta Party News Feed";
    rssLink.href = "https://cockroachjantapartywale.com/rss.xml";
    document.head.appendChild(rssLink);
  }

  // Ensure Canonical Tag
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.href = canonicalUrl.endsWith('/') ? canonicalUrl : canonicalUrl + "/";

  // Dynamic BreadcrumbList Schema Generator
  const getBreadcrumbSchema = () => {
    const rawPath = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/^\//, "");
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cockroachjantapartywale.com/"
      }
    ];

    if (rawPath && rawPath !== "/") {
      const formattedName = rawPath.charAt(0).toUpperCase() + rawPath.slice(1).replace(/-/g, " ");
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": formattedName,
        "item": "https://cockroachjantapartywale.com/" + rawPath
      });
    }

    return {
      "@type": "BreadcrumbList",
      "@id": canonicalUrl + "#breadcrumb",
      "itemListElement": items
    };
  };

  // Automated IndexNow Ping to Bing/Search Engine Crawlers
  const pingIndexNow = () => {
    try {
      const payload = {
        host: "cockroachjantapartywale.com",
        key: "cjp2026indexnow4892701bf4e93012",
        keyLocation: "https://cockroachjantapartywale.com/cjp2026indexnow4892701bf4e93012.txt",
        urlList: [canonicalUrl.endsWith('/') ? canonicalUrl : canonicalUrl + "/"]
      };
      if (navigator.sendBeacon) {
        navigator.sendBeacon("https://api.indexnow.org/indexnow", JSON.stringify(payload));
      }
    } catch (e) {
      // Silent catch
    }
  };

  // Schema.org Live News, FAQPage & Event Structured Data Injection
  const injectStructuredData = () => {
    if (document.getElementById("ld-trending-news")) return;

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": canonicalUrl + "#website",
          "url": "https://cockroachjantapartywale.com",
          "name": "Cockroach Janta Party",
          "alternateName": ["CJP", "Cockroach Janta Party Wale", "Cockroach Janata Party", "The Cockroach Janta Party"],
          "publisher": {
            "@type": "Organization",
            "name": "Cockroach Janta Party",
            "url": "https://cockroachjantapartywale.com",
            "logo": "https://cockroachjantapartywale.com/assets/img/logo.webp"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://cockroachjantapartywale.com/articles?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": canonicalUrl + "#organization",
          "name": "The Cockroach Janta Party",
          "alternateName": ["TCJP", "CJP", "Cockroach Janta Party Wale"],
          "url": "https://cockroachjantapartywale.com",
          "sameAs": [
            "https://www.cockroachjantaparty.com",
            "https://www.thecockroachjantaparty.org.in",
            "https://cockroachjantaparty.org",
            "https://x.com/cjp_official",
            "https://instagram.com/cjp_official"
          ],
          "logo": "https://cockroachjantapartywale.com/assets/img/logo.webp",
          "image": "https://cockroachjantapartywale.com/assets/img/cjp/trending-cjp-poster-25july.png",
          "areaServed": { "@type": "Country", "name": "India" },
          "description": "The Cockroach Janta Party (CJP) is an Indian youth movement & satirical political platform founded by Abhijeet Dipke demanding NEET paper leak audits, judicial neutrality, and student rights.",
          "slogan": "Voice of India's Burnt-Out Youth",
          "email": "contact@cockroachjantapartywale.com",
          "keywords": trendingKeywords
        },
        {
          "@type": "FAQPage",
          "@id": canonicalUrl + "#faqpage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is The Cockroach Janta Party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Cockroach Janta Party (CJP) is an Indian youth movement founded in May 2026 by Abhijeet Dipke, in response to the public use of 'cockroach' as a slur against young, unemployed and politically active Indians. It reclaims the insult and pairs it with five demands covering judicial reform, electoral integrity, women's reservation, media monopoly, and the anti-defection law."
              }
            },
            {
              "@type": "Question",
              "name": "Why is it called the Cockroach Janta Party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The name reclaims a slur used against young, jobless and online Indians. Reclaiming insults is a recurring pattern in political movements: the more derisive the original term, the more durable the eventual movement."
              }
            },
            {
              "@type": "Question",
              "name": "What are the five demands of the Cockroach Janta Party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The movement’s five demands are: (1) No Rajya Sabha seats for retiring Chief Justices. (2) Criminal liability under UAPA for any deleted legitimate vote. (3) Fifty per cent women's reservation in Parliament and Cabinet, without expanding the total seat count. (4) Cancellation of broadcast licences for media houses owned by Ambani and Adani. (5) A twenty-year bar on defectors from contesting elections or holding any public office."
              }
            },
            {
              "@type": "Question",
              "name": "How can I join the Cockroach Janta Party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To join the movement and get your free digital card, visit our join page on cockroachjantapartywale.com/join. The platform is free and open to all resilient youth demanding exam integrity."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Cockroach Janta Party a registered political party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The CJP movement is not registered with the Election Commission of India and describes itself as a platform and civic youth movement rather than a conventional party."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Cockroach Janta Party membership free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, signing up and getting your membership card on this website is 100% free with no fees or charges."
              }
            },
            {
              "@type": "Question",
              "name": "Where is the Cockroach Janta Party headquartered?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The movement operates wherever the wifi works, maintained by independent developers and student volunteers."
              }
            },
            {
              "@type": "Question",
              "name": "Who runs the Cockroach Janta Party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The CJP movement was founded in May 2026 by Abhijeet Dipke along with student delegates across India."
              }
            },
            {
              "@type": "Question",
              "name": "Does the Cockroach Janta Party contest elections?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The CJP movement fields no candidates and is not registered with the Election Commission of India."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Cockroach Janta Party affiliated with any political party?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. CJP is independent and not affiliated with, endorsed by, or funded by any political party or election campaign."
              }
            }
          ]
        },
        {
          "@type": "NewsArticle",
          "@id": canonicalUrl + "#trending-news",
          "headline": "CJP Aarakshan Hatao Andolan & Supreme Court Notice 28 July 2026: 100% Meritocracy Movement",
          "description": "Live coverage of Cockroach Janta Party (CJP) Reservation Hatao Andolan, Supreme Court PIL notice, and 25-28 July youth protests.",
          "image": [
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-poster-28july-sc.png",
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-aarakshan-hatao-poster.png"
          ],
          "datePublished": "2026-07-25T08:00:00+05:30",
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
          "@id": "https://cockroachjantapartywale.com/#sansad-chalo-event",
          "name": "CJP Sansad Chalo Mega Youth March",
          "description": "Nationwide student & youth rally to Jantar Mantar demanding NEET paper leak audits, judicial neutrality, and student rights.",
          "startDate": "2026-07-20T10:00:00+05:30",
          "endDate": "2026-07-20T18:00:00+05:30",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": "Jantar Mantar",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jantar Mantar Road",
              "addressLocality": "New Delhi",
              "addressRegion": "DL",
              "postalCode": "110001",
              "addressCountry": "IN"
            }
          },
          "image": [
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-aarakshan-hatao-poster.png",
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-poster-28july-sc.png"
          ],
          "organizer": {
            "@type": "Organization",
            "name": "Cockroach Janta Party",
            "url": "https://cockroachjantapartywale.com"
          },
          "performer": {
            "@type": "Person",
            "name": "Abhijeet Dipke",
            "url": "https://cockroachjantapartywale.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://cockroachjantapartywale.com/protests",
            "validFrom": "2026-05-16T00:00:00+05:30"
          }
        },
        getBreadcrumbSchema()
      ]
    };

    const script = document.createElement("script");
    script.id = "ld-trending-news";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Trigger instant IndexNow ping to search engines
    pingIndexNow();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectStructuredData();
    });
  } else {
    injectStructuredData();
  }
})();
