(() => {
  const S = window.CJP_SITE || {};
  const page = (document.body.dataset.page || "").toLowerCase();
  const year = new Date().getFullYear();

  const nav = [
    ["vision.html", "Vision"],
    ["manifesto.html", "Manifesto"],
    ["articles.html", "Articles"],
    ["gallery.html", "Gallery"],
    ["members.html", "Members"],
    ["issues.html", "Issues"],
    ["tracker.html", "Tracker"],
    ["protests.html", "Protests"],
    ["contact.html", "Contact"],
  ];

  const members = [
    ["Isha Kapoor", "Jaipur, RJ", "IK"],
    ["Dev Patel", "Surat, GJ", "DP"],
    ["Meera Iyer", "Chennai, TN", "MI"],
    ["Zoya Khan", "Lucknow, UP", "ZK"],
    ["Rohan Das", "Guwahati, AS", "RD"],
    ["Kabir Singh", "Chandigarh", "KS"],
    ["Ananya Rao", "Hyderabad", "AR"],
    ["Farhan Ali", "Bhopal, MP", "FA"],
  ];

  const active = (file) => (page === file.replace(".html", "") ? " is-active" : "");

  const tickerItems = members
    .map(([name, place, initials]) => {
      const h = Math.abs([...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360);
      return `<div class="ticker-item">
        <div class="avatar" style="--h:${h}" aria-hidden="true">${initials}</div>
        <div><strong>${name}</strong><span>${place}</span></div>
      </div>`;
    })
    .join("");

  const showTicker = document.body.dataset.ticker !== "off";

  const top = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="announce-bar" id="announceBar" role="region" aria-label="Announcements">
    <div class="announce-track">
      <span>Education budgets need receipts — not slogans. #YouthVoice #Accountability</span>
      <span>Membership is free. Lifelong. Zero missed-call rituals.</span>
      <span>New tracker alerts drop when campuses move.</span>
    </div>
    <button type="button" class="announce-close" id="announceClose" aria-label="Close announcement">×</button>
  </div>
  <div class="meta-bar" aria-hidden="true">
    <div class="meta-track">
      <span>SIGNAL DROP — VOL 2</span><span>◆</span>
      <span>FILED: PUBLIC DISCONTENT</span><span>◆</span>
      <span>COMMUNITY FUNDED</span><span>◆</span>
      <span>HQ: WHEREVER THE WIFI WORKS</span><span>◆</span>
      <span>EST. ${S.foundingDate || "2024"}</span>
    </div>
  </div>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="${S.legalName || "CJP"} home">
        <img src="assets/img/logo.svg" alt="Cockroach Janta Party logo" width="52" height="52" decoding="async">
        <div class="brand-text">
          <strong>COCKROACH<br>JANTA PARTY</strong>
          <small>Est. ${S.foundingDate || "2024"}</small>
        </div>
      </a>
      <button type="button" class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="main-nav" id="mainNav" aria-label="Primary">
        ${nav.map(([href, label]) => `<a href="${href}" class="${active(href).trim()}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <div class="lang-select" id="langSelect">
          <button type="button" class="lang-btn" aria-haspopup="listbox" aria-expanded="false">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>
            ENGLISH <span class="chev">▾</span>
          </button>
          <ul class="lang-menu" role="listbox" hidden>
            <li role="option" data-lang="en" aria-selected="true">English</li>
            <li role="option" data-lang="hi">हिन्दी</li>
          </ul>
        </div>
        <a href="donate.html" class="btn btn-ghost${active("donate.html")}">Support Us</a>
        <a href="join.html" class="btn btn-solid${active("join.html")}">Join Us</a>
        <a href="raise-issue.html" class="btn btn-ghost${active("raise-issue.html")}">File Issue →</a>
      </div>
    </div>
  </header>
  ${
    showTicker
      ? `<div class="member-ticker" aria-label="Members joining live">
    <div class="live-badge"><span class="pulse"></span> LIVE · JOINING</div>
    <div class="ticker-viewport"><div class="ticker-track">${tickerItems}${tickerItems}</div></div>
  </div>`
      : ""
  }`;

  const bottom = `
  <section class="dispatch" id="dispatch" aria-labelledby="dispatch-title">
    <div class="dispatch-inner">
      <div class="dispatch-copy">
        <p class="eyebrow">Signal brief</p>
        <h2 id="dispatch-title">One email. <em>When campuses move.</em></h2>
        <p>Protest alerts, budget receipts, and tracker wins — no spam, no influencer fluff.</p>
      </div>
      <form class="dispatch-form" id="subscribeForm">
        <div class="dispatch-row">
          <label class="visually-hidden" for="subEmail" style="position:absolute;left:-9999px">Email</label>
          <input type="email" id="subEmail" name="email" placeholder="you@example.in" required autocomplete="email">
          <button type="submit" class="btn btn-accent">Subscribe</button>
        </div>
        <p class="form-note">Unsubscribe anytime. We hate spam more than you do.</p>
        <p class="form-success" id="subscribeMsg" hidden></p>
      </form>
    </div>
  </section>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="assets/img/logo.svg" alt="" width="44" height="44" decoding="async">
        <div>
          <strong>${S.legalName || "CJP"}</strong>
          <p>Satirical civic movement. Not a registered party. Receipts over rhetoric. Community funded.</p>
        </div>
      </div>
      <div class="footer-cols">
        <div><h4>The Party</h4><a href="vision.html">Vision</a><a href="manifesto.html">Manifesto</a><a href="members.html">Members</a><a href="revolutionaries.html">Legacy</a></div>
        <div><h4>Coverage</h4><a href="articles.html">Articles</a><a href="issues.html">Issues</a><a href="gallery.html">Gallery</a><a href="protests.html">Actions</a></div>
        <div><h4>Act</h4><a href="join.html">Join Us</a><a href="raise-issue.html">File Issue</a><a href="donate.html">Support Us</a><a href="tracker.html">Tracker</a></div>
        <div><h4>Legal</h4><a href="contact.html">Contact</a><a href="terms.html">Terms</a><a href="terms.html#satire">Satire</a><a href="terms.html#privacy">Privacy</a><a href="sitemap.xml">Sitemap</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} ${S.legalName || "CJP"}. Built for the burnt-out and still standing.</p>
      <p>Freedom · Equality · Fraternity · Justice</p>
    </div>
  </footer>
  <button type="button" class="live-chat" id="liveChat" aria-label="Open Live Chat">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    Live Chat
  </button>
  <div class="chat-panel" id="chatPanel" hidden>
    <div class="chat-head"><strong>Live Chat</strong><button type="button" id="chatClose" aria-label="Close chat">×</button></div>
    <div class="chat-body">
      <p>Ask about joining, filing issues, or funding the site.</p>
      <div class="chat-messages" id="chatMessages"></div>
    </div>
    <form class="chat-form" id="chatForm">
      <input type="text" id="chatInput" placeholder="Type a message…" autocomplete="off" required aria-label="Chat message">
      <button type="submit">Send</button>
    </form>
  </div>`;

  const mountTop = document.getElementById("site-top");
  const mountBottom = document.getElementById("site-bottom");
  if (mountTop) mountTop.outerHTML = top;
  if (mountBottom) mountBottom.outerHTML = bottom;

  // JSON-LD Organization (sitewide)
  if (S.url && !document.getElementById("ld-org")) {
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: S.legalName,
      alternateName: S.shortName,
      url: S.url,
      logo: `${S.url}/assets/img/logo.svg`,
      description: S.description,
      foundingDate: S.foundingDate,
      email: S.email,
      sameAs: S.sameAs || [],
      slogan: S.tagline,
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "ld-org";
    el.textContent = JSON.stringify(org);
    document.head.appendChild(el);
  }
})();
