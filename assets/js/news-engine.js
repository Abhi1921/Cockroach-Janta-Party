/**
 * CJP Google & Live Trending News Engine
 * Fetches real-time Google News & presents CJP movement breaking updates, posters, and trending SEO tags.
 */
(() => {
  const S = window.CJP_SITE || {};
  const currentTodayDateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Default curated trending news & posters (22 July 2026 updates)
  const defaultTrendingNews = [
    {
      id: "news-cjp-22july-parliament",
      title: "22 July Parliament Lockout: Opposition Halts House Proceedings Over CJP Student Lathicharge",
      category: "cjp",
      source: "CJP Swarm Bureau · New Delhi",
      sourceUrl: "protests.html",
      pubDate: "22 July 2026",
      description: "Parliament proceedings in Lok Sabha & Rajya Sabha disrupted on 22 July as opposition leaders demand accountability for police violence against CJP youth protesters.",
      image: "assets/img/cjp/trending-cjp-poster-22july.webp",
      badge: "🚨 22 JULY BREAKING",
      badgeColor: "var(--signal)",
      tags: ["#22JulyProtest", "#ParliamentLockout", "#CJPYouth", "#MainBhiCockroach"],
      fullText: "On 22 July 2026, opposition MPs shut down parliamentary proceedings to demand answers over police baton charges against CJP student protesters near Jantar Mantar. The CJP leadership reiterated demands for Education Minister Dharmendra Pradhan's resignation."
    },
    {
      id: "news-cjp-22july-audit-art",
      title: "CJP Founder Abhijeet Dipke Announces Nationwide Campus Auditor Swarms (22 July Statement)",
      category: "cjp",
      source: "CJP Press Room",
      sourceUrl: "articles.html",
      pubDate: "22 July 2026",
      description: "Addressing media at Jantar Mantar on 22 July, founder Abhijeet Dipke launched decentralized student audit squads across Indian universities.",
      image: "assets/img/cjp/cjp-22july-protest-art.webp",
      badge: "✊ 22 JULY POSTER RELEASE",
      badgeColor: "var(--gold)",
      tags: ["#CampusSwarm", "#AbhijeetDipke", "#22JulyAudit", "#YouthRights"],
      fullText: "In a press conference on 22 July 2026, CJP founder Abhijeet Dipke announced that while street marches are suspended to protect students from police aggression, 50,000+ CJP members will conduct digital and on-ground audits of exam centers across states."
    },
    {
      id: "news-google-neet-audit",
      title: "NEET Paper Leak Scandal: Supreme Court Mandates Independent 3rd-Party Server Audits",
      category: "google",
      source: "Google News · Times of India",
      sourceUrl: "https://news.google.com/search?q=NEET+paper+leak",
      pubDate: "22 July 2026",
      description: "Supreme Court directs central authorities to publish normalized scorecards and conduct independent third-party audits of all national competitive exams.",
      image: "assets/img/cjp/trending-cjp-poster-1.webp",
      badge: "🎓 EXAM REFORM",
      badgeColor: "var(--gold)",
      tags: ["#NEETAudit", "#ExamIntegrity", "#StudentRights", "#GoogleNews"],
      fullText: "In a landmark hearing on 22 July 2026, the apex court ordered a comprehensive audit of competitive examination servers and security protocols. Student groups across the nation welcomed the move while calling for immediate administrative accountability."
    },
    {
      id: "news-cjp-talks-nadda",
      title: "CJP Delegation & Health Ministry Hold High-Stakes Stand-Off Over Student Detainees",
      category: "cjp",
      source: "CJP Media Desk",
      sourceUrl: "articles.html",
      pubDate: "22 July 2026",
      description: "Key CJP representatives held talks with Health Minister J.P. Nadda regarding exam safety and unconditional release of detained student leaders.",
      image: "assets/img/cjp/trending-cjp-poster-2.webp",
      badge: "⚡ GOVT TALKS",
      badgeColor: "var(--navy)",
      tags: ["#JPNadda", "#YouthRepresentation", "#StudentDemands"],
      fullText: "During the high-stakes dialogue on 22 July, CJP delegates presented the 5-Point Swarm Manifesto. Minister Nadda assured internal cabinet reviews while discussing youth employment and examination safety."
    },
    {
      id: "news-google-wangchuk-health",
      title: "Activists Visit Sonam Wangchuk Medical Care Desk — Joint Declaration Issued on 22 July",
      category: "google",
      source: "Google News · BBC India",
      sourceUrl: "https://news.google.com/search?q=Sonam+Wangchuk+hunger+strike",
      pubDate: "22 July 2026",
      description: "Student delegations visit medical care desk following Sonam Wangchuk's eviction, issuing a joint manifesto for student & environmental rights.",
      image: "assets/img/cjp/trending-cjp-poster-3.webp",
      badge: "🌐 GLOBAL MEDIA",
      badgeColor: "var(--signal)",
      tags: ["#SonamWangchuk", "#BBCNews", "#GenZPolitics", "#HungerStrike"],
      fullText: "On 22 July 2026, delegations of student leaders visited medical facilities where activist Sonam Wangchuk continues his fast, uniting youth environmentalists and student reform movements into a single pressure front."
    },
    {
      id: "news-hunger-strike-dipke",
      title: "Abhijeet Dipke Fasting & Sit-in at Jantar Mantar Headquarters Enters Crucial Phase",
      category: "cjp",
      source: "CJP Bureau",
      sourceUrl: "protests.html",
      pubDate: "22 July 2026",
      description: "CJP founder Abhijeet Dipke pledges to continue fast until all student coordinators detained during the Sansad march are unconditionally freed.",
      image: "assets/img/cjp/hunger-strike.webp",
      badge: "🔥 HUNGER STRIKE",
      badgeColor: "var(--signal)",
      tags: ["#AbhijeetDipke", "#HungerStrike", "#FreeStudentDetainees"],
      fullText: "High police presence continues at Jantar Mantar as CJP founder Abhijeet Dipke maintains his indefinite hunger strike. Thousands of supportive messages continue to flood social media under #MainBhiCockroach."
    }
  ];

  let currentNewsItems = [...defaultTrendingNews];
  let activeCategory = "all";
  let searchQuery = "";

  // Real Google News Live RSS Fetcher (via RSS2JSON Proxy)
  const fetchLiveGoogleNews = async () => {
    try {
      const rssUrl = encodeURIComponent("https://news.google.com/rss/search?q=NEET+OR+student+protest+OR+youth+unemployment+India&hl=en-IN&gl=IN&ceid=IN:en");
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
      const res = await fetch(apiUrl);
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
        const fetchedGoogleItems = data.items.slice(0, 6).map((item, idx) => ({
          id: `gn-live-${idx}`,
          title: item.title || "Latest Student & Youth News Update",
          category: "google",
          source: `Google News · ${item.author || "Press Wire"}`,
          sourceUrl: item.link || "https://news.google.com",
          pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : currentTodayDateStr,
          description: (item.description || item.title || "").replace(/<[^>]*>?/gm, '').slice(0, 160) + "...",
          image: idx % 2 === 0 ? "assets/img/cjp/trending-cjp-poster-2.webp" : "assets/img/cjp/student-banners.webp",
          badge: "🌐 GOOGLE LIVE",
          badgeColor: "#2563eb",
          tags: ["#GoogleNewsLive", "#YouthNews", "#LatestUpdate"],
          fullText: (item.content || item.description || item.title).replace(/<[^>]*>?/gm, '')
        }));

        // Merge fetched Google News with CJP updates
        currentNewsItems = [...fetchedGoogleItems, ...defaultTrendingNews];
        renderNewsGrid();
      }
    } catch (e) {
      console.log("Using cached trending news engine data");
    }
  };

  const renderNewsGrid = () => {
    const container = document.getElementById("google-news-grid");
    if (!container) return;

    let filtered = currentNewsItems.filter((item) => {
      const matchesCat = activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.tags.some(t => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);">
          <p style="font-size: 1.2rem; font-family: var(--font-display); margin-0 0 0.5rem;">No trending news found for "${searchQuery}"</p>
          <button type="button" id="resetNewsSearch" class="btn btn-solid" style="margin-top: 0.5rem;">Reset News Search</button>
        </div>
      `;
      document.getElementById("resetNewsSearch")?.addEventListener("click", () => {
        searchQuery = "";
        const sInput = document.getElementById("newsSearchInput");
        if (sInput) sInput.value = "";
        renderNewsGrid();
      });
      return;
    }

    container.innerHTML = filtered.map((item) => `
      <article class="cjp-news-card" data-news-id="${item.id}" style="border: 1px solid var(--line); background: var(--surface); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 28px rgba(28,16,16,0.08); display: flex; flex-direction: column; transition: transform 0.3s var(--ease), box-shadow 0.3s;">
        <div style="position: relative; aspect-ratio: 16/10; overflow: hidden; background: #1c1010;">
          <img src="${item.image}" alt="${item.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease);">
          <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: ${item.badgeColor}; color: #fff; font-family: var(--font-mono); font-size: 0.62rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.3rem 0.6rem; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
            ${item.badge}
          </span>
          <span style="position: absolute; bottom: 0.5rem; right: 0.75rem; background: rgba(0,0,0,0.75); color: #fbbf24; font-family: var(--font-mono); font-size: 0.62rem; padding: 0.25rem 0.5rem; border-radius: 6px;">
            ${item.pubDate}
          </span>
        </div>
        <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1;">
          <div style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; color: var(--signal); margin-bottom: 0.4rem; text-transform: uppercase;">
            ${item.source}
          </div>
          <h3 style="font-family: var(--font-display); font-size: 1.15rem; line-height: 1.25; margin: 0 0 0.6rem; color: var(--ink);">
            ${item.title}
          </h3>
          <p style="font-size: 0.9rem; color: var(--muted); line-height: 1.5; margin: 0 0 1rem; flex: 1;">
            ${item.description}
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1rem;">
            ${item.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 0.62rem; background: var(--bg-2); color: var(--ink); padding: 0.2rem 0.45rem; border-radius: 4px; font-weight: 600;">${t}</span>`).join('')}
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; border-top: 1px solid var(--line); padding-top: 0.85rem;">
            <button type="button" class="btn btn-solid read-news-btn" data-id="${item.id}" style="padding: 0.45rem 0.85rem; font-size: 0.7rem; flex: 1;">
              Read Story &amp; Poster →
            </button>
            <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost" style="padding: 0.45rem 0.65rem; font-size: 0.7rem;" title="View Source">
              🔗 Source
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click handlers to open news modal
    document.querySelectorAll(".read-news-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const newsItem = currentNewsItems.find(n => n.id === id);
        if (newsItem) openNewsModal(newsItem);
      });
    });
  };

  const openNewsModal = (item) => {
    let modal = document.getElementById("cjp-news-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "cjp-news-modal";
      modal.style.cssText = `
        position: fixed; inset: 0; z-index: 999999;
        background: rgba(18, 8, 8, 0.85); backdrop-filter: blur(10px);
        display: flex; align-items: center; justify-content: center;
        padding: 1rem; opacity: 0; transition: opacity 0.3s ease;
      `;
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div style="background: #ffffff; border: 2px solid var(--signal); border-radius: 20px; max-width: 680px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 24px 60px rgba(0,0,0,0.5); position: relative; animation: rise 0.3s var(--ease);">
        <button type="button" id="closeNewsModal" style="position: absolute; top: 1rem; right: 1rem; width: 36px; height: 36px; border-radius: 50%; border: 0; background: var(--signal); color: #fff; font-size: 1.4rem; cursor: pointer; display: grid; place-items: center; z-index: 10; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">×</button>
        <div style="position: relative; aspect-ratio: 16/9; overflow: hidden; background: #000;">
          <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; top: 1rem; left: 1rem; background: ${item.badgeColor}; color: #fff; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 800; padding: 0.35rem 0.75rem; border-radius: 999px;">
            ${item.badge}
          </span>
        </div>
        <div style="padding: 1.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--signal); text-transform: uppercase;">${item.source}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted);">${item.pubDate}</span>
          </div>
          <h2 style="font-family: var(--font-display); font-size: 1.6rem; line-height: 1.2; margin: 0 0 1rem; color: var(--ink);">${item.title}</h2>
          <p style="font-size: 1rem; line-height: 1.7; color: var(--ink); margin-bottom: 1.25rem;">${item.fullText}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
            ${item.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 0.7rem; background: var(--bg-2); color: var(--signal); padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 700;">${t}</span>`).join('')}
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; border-top: 1px solid var(--line); padding-top: 1.25rem;">
            <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-solid" style="flex: 1; text-align: center;">
              Read Original Google News Article →
            </a>
            <button type="button" id="shareNewsBtn" class="btn btn-ghost">
              📢 Share Trending News
            </button>
          </div>
        </div>
      </div>
    `;

    modal.style.opacity = "1";
    document.getElementById("closeNewsModal")?.addEventListener("click", () => {
      modal.style.opacity = "0";
      setTimeout(() => modal.remove(), 300);
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.opacity = "0";
        setTimeout(() => modal.remove(), 300);
      }
    });

    document.getElementById("shareNewsBtn")?.addEventListener("click", () => {
      if (navigator.share) {
        navigator.share({
          title: item.title,
          text: item.description,
          url: item.sourceUrl
        }).catch(() => {});
      } else {
        navigator.clipboard?.writeText(`${item.title} - ${item.sourceUrl}`);
        alert("News link copied to clipboard!");
      }
    });
  };

  const initNewsEngine = () => {
    const section = document.getElementById("google-news-section");
    if (!section) return;

    // Filter bar & Search bar
    const filterContainer = document.getElementById("news-filter-tabs");
    if (filterContainer) {
      filterContainer.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 1.5rem; justify-content: space-between;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="catTabButtons">
            <button type="button" class="btn btn-solid cat-btn active" data-cat="all">🔥 All Trending</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="google">🌐 Google News Live</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="cjp">📢 CJP Movement</button>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; max-width: 320px; min-width: 220px;">
            <input type="text" id="newsSearchInput" placeholder="🔍 Search trending news..." style="width: 100%; border: 1.5px solid var(--line); border-radius: 999px; padding: 0.45rem 0.9rem; font-size: 0.8rem; background: var(--surface);">
          </div>
        </div>
      `;

      document.querySelectorAll(".cat-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".cat-btn").forEach(b => {
            b.classList.remove("btn-solid", "active");
            b.classList.add("btn-ghost");
          });
          btn.classList.remove("btn-ghost");
          btn.classList.add("btn-solid", "active");
          activeCategory = btn.getAttribute("data-cat");
          renderNewsGrid();
        });
      });

      document.getElementById("newsSearchInput")?.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderNewsGrid();
      });
    }

    renderNewsGrid();
    fetchLiveGoogleNews();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNewsEngine);
  } else {
    initNewsEngine();
  }
})();
