
/**
 * CJP Trending SEO Engine & Indexing System
 * Automates OpenGraph, Twitter Cards, Schema.org Structured Data, FAQPage, and Indexing Pings.
 */
(() => {
  const S = window.CJP_SITE || {};
  const currentUrl = window.location.href.split('#')[0];
  const canonicalUrl = "https://cockroachjantapartywale.com" + window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  const todayIso = new Date().toISOString();

  // Comprehensive Union SEO Keywords (Incorporates Cockroach, Assam, Reservation & CJP A-Z Tags)
  const trendingKeywords = [
    // A to Z Keyword Cluster: Cockroach, Assam & Reservation
    "Assam Flood 2026 Relief",
    "Assam CM Relief Fund Donation",
    "Assam Reservation Debate 2026",
    "Assam Student Protests Guwahati",
    "Abhijeet Dipke CJP Founder",
    "Aarakshan Hatao Yogyata Lao CJP",
    "Anti Defection Law 20 Year Ban",
    "Akshaya Patra Assam Relief Drive",
    "Assam Youth Activism 2026",
    "Assam Brahmaputra Flood Crisis",
    "Bring Meritocracy 2026",
    "BBC News Cockroach Janta Party",
    "Bal Raksha Bharat Assam Relief",
    "Burnt Out Youth India Movement",
    "BJP Minister Dharmendra Pradhan Resignation",
    "Cockroach Janta Party Official Website",
    "Cockroach Janata Party",
    "Cockroach Party India",
    "Cockroach Janta Party Wale",
    "cockroachjantapartywale.com",
    "cockroachjantaparty.com",
    "www.cockroachjantaparty.com",
    "thecockroachjantaparty.org.in",
    "cockroachjantaparty.org",
    "CJP Official Portal",
    "CJP Swarm 30 Million Members",
    "CJI Cockroach Remark Reclaimed",
    "Caste Reservation Abolition India 2026",
    "CBI Chargesheet 13 NTA Officials",
    "Dharmendra Pradhan Resignation 25 July",
    "Digital Satire Movement India",
    "Delhi Student Protests Jantar Mantar",
    "Donate Assam Flood CM Relief Fund",
    "Direct Meritocracy Entrance Exams",
    "Exam Integrity Manifesto CJP",
    "Economic Aid Meritocracy Framework",
    "Equal Opportunity Student Movement",
    "Education Reform India 2026",
    "Flood Relief Assam 2026 Emergency",
    "Free Digital Membership Card CJP",
    "Fair Dealing Copyright Act 1957",
    "Goonj Rahat Assam Flood Relief",
    "Gen Z Politics India 2026",
    "Google Knowledge Graph Cockroach Janta Party",
    "Government Student Rights Accord 2026",
    "Hyderabad Police FIR Ruchika Defence",
    "Hunger Strike Abhijeet Dipke Jantar Mantar",
    "High Court Writ Petition Student Release",
    "India Burnt Out Youth Movement",
    "Independent Exam Audit Board NTA",
    "India Today Breaking News CJP",
    "Instagram @cockroachjantaparty",
    "Jantar Mantar Student Rally 2026",
    "Judicial Cooling Off Period 5 Years",
    "Join Cockroach Janta Party Free Card",
    "Kangana Ranaut CJP Swipe India Today",
    "Knowledge Panel Cockroach Janta Party",
    "Live Google News CJP Feed",
    "Legal Defense Swarm CJP",
    "Lok Sabha Exam Integrity Debate",
    "Main Bhi Cockroach Movement",
    "Meritocracy Act Passed 31 July 2026",
    "Meta Hyderabad Police CJP Statement",
    "Matoshree Invitation Uddhav Thackeray",
    "NEET Paper Leak Audit 2026",
    "NTA Server Log Cryptographic Audit",
    "National Herald Protest Report",
    "News18 Street March Warning",
    "Official Cockroach Janta Party Portal",
    "Opposition Support Uddhav Thackeray",
    "Overqualified Unemployed Youth India",
    "Parliamentary Gazette 31 July 2026",
    "Pellet Gun Inquiry Demand Abhijeet Dipke",
    "Public Interest Litigation Supreme Court Meritocracy",
    "Quashing All Student FIRs 28 States",
    "Quotas vs Meritocracy India 2026",
    "Reservation Hatao Andolan",
    "Reservation Hatao Bring Meritocracy",
    "RHA CJP Movement 2026",
    "Ruchika Defence Hyderabad FIR CJP",
    "RSS News Feed CJP Official",
    "Supreme Court Bench Notice 28 July 2026",
    "Supreme Court Release Student Protesters Order 1 August 2026",
    "Siasat Daily Ruchika Defence Report",
    "Stand With Assam Flood Relief 2026",
    "Spotify Cockroach Janta Party Song",
    "The Cockroach Janta Party",
    "ThePrint China CJP Analysis",
    "Times of India SC Order Contradiction",
    "Twitter @Cockroachisback",
    "Uddhav Thackeray Backs CJP 1 August 2026",
    "Union Cabinet Gazette Notification Meritocracy Act",
    "Unemployment Youth Movement India",
    "Verified Assam Flood Donation Sites",
    "Victory Gazette 31 July 2026",
    "Viksit Bharat Meritocracy System",
    "Wikipedia Cockroach Janta Party",
    "WION World News CJP Feature",
    "Women 50 Percent Cabinet Reservation Demand",
    "Xokhi Assam Relief Verification",
    "Youth Power Emblem CJP",
    "Youth Employment Manifesto 2026",
    "YouTube @cockroachrevolution2029",
    "Zero Corporate Monopolies Media Laws",
    "cpmember.in",
    "cockroachjantaparty.ran.in",
    "cockroachjantaparty.co",
    "cockroachjanataparty.pro",
    "cjpparty.com",
    "cockroachparty.org",
    "cockroachjanata.info",
    "cackroachjantaparty.in",
    "cockroachjantaparty.co.in",
    "cockroachjantapartyjoin.in"
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
            "https://cpmember.in",
            "https://cockroachjantaparty.ran.in",
            "https://cockroachjantaparty.co",
            "https://cockroachjanataparty.pro",
            "https://cjpparty.com",
            "https://cockroachparty.org",
            "https://www.cockroachjanata.info",
            "https://cackroachjantaparty.in",
            "https://cockroachjantaparty.co.in",
            "https://cockroachjantapartyjoin.in",
            "https://en.wikipedia.org/wiki/Cockroach_Janta_Party",
            "https://www.britannica.com/topic/Cockroach-Janta-Party",
            "https://www.bbc.com/news",
            "https://theprint.in",
            "https://www.siasat.com",
            "https://www.capitaltv.in",
            "https://www.indiatoday.in",
            "https://timesofindia.indiatimes.com",
            "https://www.thehindu.com",
            "https://www.ndtv.com",
            "https://www.nationalheraldindia.com",
            "https://www.aninews.in",
            "https://www.wionews.com",
            "https://thewire.in",
            "https://www.moneycontrol.com",
            "https://www.livemint.com",
            "https://www.hindustantimes.com",
            "https://www.aljazeera.com",
            "https://www.madhyamam.com",
            "https://www.news18.com",
            "https://news.abplive.com",
            "https://sansadtv.nic.in",
            "https://www.instagram.com/cockroachjantaparty/",
            "https://www.instagram.com/abhijeetdipke/",
            "https://x.com/Cockroachisback",
            "https://x.com/abhijeet_dipke",
            "https://www.facebook.com/profile.php?id=61590017357770",
            "https://discord.gg/cockroach",
            "https://www.reddit.com/r/CockroachJantaParty09/",
            "https://t.me/thecockroachchannel",
            "https://whatsapp.com/channel/0029VbBqF7S5fM5Rf1mRV540",
            "https://www.youtube.com/@cockroachrevolution2029",
            "https://open.spotify.com/search/Cockroach%20Janta%20Party",
            "https://music.youtube.com/search?q=Cockroach+Janta+Party",
            "https://www.jiosaavn.com/search/Cockroach%20Janta%20Party",
            "https://www.threads.net/@cockroachjantaparty",
            "https://www.linkedin.com/company/cockroachjantaparty",
            "https://medium.com/tag/cockroach-janta-party",
            "https://www.pinterest.com/cockroachjantaparty/",
            "https://www.tumblr.com/tagged/cockroachjantaparty"
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
          "headline": "1 August 2026 CJP News: Uddhav Thackeray Backs Movement; SC Orders Release of Student Protesters & CBI Charges 13 in NTA Leak",
          "description": "Live Google News coverage of Cockroach Janta Party (CJP) developments on 1 August 2026: Uddhav Thackeray invites Abhijeet Dipke to Matoshree, SC directs immediate release of minor student activists, CBI files chargesheet against 13 in NTA leak, and Delhi Govt initiates closure of protest FIRs.",
          "image": [
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-poster-31july-victory.png",
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-poster-28july-sc.png",
            "https://cockroachjantapartywale.com/assets/img/cjp/cjp-aarakshan-hatao-poster.png"
          ],
          "datePublished": "2026-08-01T08:00:00+05:30",
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
