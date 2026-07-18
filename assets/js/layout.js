(() => {
  const S = window.CJP_SITE || {};
  const page = (document.body.dataset.page || "").toLowerCase();
  const year = new Date().getFullYear();

  // Slim navbar — 6 items cleanly aligned in one line
  const nav = [
    ["vision", "Vision"],
    ["manifesto", "5 Demands"],
    ["articles", "Media"],
    ["protests", "Actions"],
    ["issues", "Issues"],
    ["tracker", "Tracker"],
    ["members", "Members"],
    ["gallery", "Gallery"],
    ["join", "Join Us"],
    ["contact", "Contact"],
  ];

  const active = (file) => (page === file.replace(".html", "").replace(/^\//, "") ? " is-active" : "");

  const top = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="announce-bar" id="announceBar" role="region" aria-label="Announcements">
    <div class="announce-track">
      <span>#MainBhiCockroach — reclaiming the insult as youth power</span>
      <span>Founded ${S.foundedFull || "16 May 2026"} by ${S.founder || "Abhijeet Dipke"} · New Delhi</span>
      <span>Not an ECI-registered party · Satire with a purpose</span>
    </div>
    <button type="button" class="announce-close" id="announceClose" aria-label="Close">×</button>
  </div>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Cockroach Janta Party home">
        <img src="assets/img/logo.png" alt="Cockroach Janta Party logo" width="52" height="52" decoding="async">
        <div class="brand-text">
          <strong>Cockroach Janta Party</strong>
          <small>${S.tagline || "Voice of the Lazy & Unemployed"}</small>
        </div>
      </a>
      <button type="button" class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="main-nav" id="mainNav" aria-label="Primary">
        ${nav.map(([href, label]) => `<a href="${href}" class="${active(href).trim()}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <div class="lang-select" id="langSelect">
          <button type="button" class="lang-btn" aria-expanded="false" aria-label="Select Language">
            🌐 <span>ENGLISH</span> ▾
          </button>
          <div class="lang-menu" hidden role="listbox" aria-label="Languages">
            <button type="button" class="lang-opt" role="option" data-lang="en" aria-selected="true">🌐 English</button>
            <button type="button" class="lang-opt" role="option" data-lang="hi" aria-selected="false">🇮🇳 हिन्दी</button>
          </div>
        </div>
        <a href="donate" class="btn btn-ghost${active("donate")}">Support site</a>
        <a href="join" class="btn btn-solid${active("join")}">Join Free</a>
      </div>
    </div>
  </header>`;

  const bottom = `
  <section class="support-top support-after-art" id="support-dev-layout">
    <div class="support-top-inner">
      <div class="support-top-copy">
        <p class="eyebrow">Keep the site alive · Voluntary</p>
        <h2>Building this site takes <em>nights.</em> A little help goes a long way.</h2>
        <p>
          This website is built and run by hand — design, code, hosting, domain, and daily updates.
          If you believe the story deserves a home online and want to chip in,
          you can send a <strong>voluntary tip</strong> via the scanner. No pressure. No guilt trip. Ever.
        </p>
        <ul class="support-bullets">
          <li>This is <strong>not</strong> an NGO, trust, or charity donation</li>
          <li>This is <strong>not</strong> a political party fund or election contribution</li>
          <li>It is optional support for <strong>website development &amp; running costs</strong> only</li>
          <li><strong>No tax deduction / 80G</strong> — please treat it as a personal tip</li>
        </ul>
        <p class="support-fine">
          Read the fine print: <a href="donate">Support page</a> · <a href="terms#payment-policy">Payment policy</a>
        </p>
      </div>
      <div class="support-qr-card">
        <div class="qr-slot">
          <img src="assets/img/upi-qr.png" alt="Scan to pay via UPI for website support" width="240" height="240" loading="lazy">
        </div>
        <p class="qr-caption"><strong>Scan &amp; pay</strong> (UPI / any supported app)</p>
        <p class="qr-hint">You choose the amount · Optional remark: “Website support”</p>
        <a href="donate" class="btn btn-solid" style="width:100%;margin-top:0.75rem">Full details &amp; policy →</a>
      </div>
    </div>
  </section>
  <section class="dispatch" id="dispatch">
    <div class="dispatch-inner">
      <div class="dispatch-copy">
        <p class="eyebrow">Stay updated</p>
        <h2 id="dispatch-title">Campus alerts. <em>When it counts.</em></h2>
        <p>Protest updates and manifesto notes — no spam.</p>
      </div>
      <form class="dispatch-form" id="subscribeForm">
        <div class="dispatch-row">
          <label class="visually-hidden" for="subEmail" style="position:absolute;left:-9999px">Email</label>
          <input type="email" id="subEmail" name="email" placeholder="you@example.in" required autocomplete="email">
          <button type="submit" class="btn btn-accent">Subscribe</button>
        </div>
        <p class="form-note">By subscribing you agree to occasional CJP updates.</p>
        <p class="form-success" id="subscribeMsg" hidden></p>
      </form>
    </div>
  </section>
  <footer class="site-footer">
    <div class="footer-inner">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <a href="/" class="footer-brand" style="text-decoration: none; color: inherit;">
          <img src="assets/img/logo.png" alt="Cockroach Janta Party logo" width="44" height="44" decoding="async">
          <div>
            <strong>Cockroach Janta Party</strong>
            <p>Youth satirical movement. Founded 16 May 2026. Not registered with the Election Commission of India.</p>
          </div>
        </a>
        <div class="footer-socials" style="display: flex; gap: 0.75rem; align-items: center; margin-top: 0.5rem;">
          <a href="https://x.com/cjp_official" target="_blank" rel="noopener" aria-label="CJP Official X (Twitter)" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); color: #fff; transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'; this.style.transform='scale(1.08)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'; this.style.transform='scale(1)'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://instagram.com/cjp_official" target="_blank" rel="noopener" aria-label="CJP Official Instagram" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); color: #fff; transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'; this.style.transform='scale(1.08)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'; this.style.transform='scale(1)'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://x.com/abhijeet_dipke" target="_blank" rel="noopener" aria-label="Founder Abhijeet Dipke X" style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); color: #fff; transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'; this.style.transform='scale(1.08)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'; this.style.transform='scale(1)'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </a>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <h4>Explore</h4>
          <a href="vision">About</a>
          <a href="manifesto">Manifesto</a>
          <a href="articles">News</a>
          <a href="protests">Protests (20 July)</a>
        </div>
        <div>
          <h4>More</h4>
          <a href="gallery">Gallery</a>
          <a href="members">Members</a>
          <a href="issues">Issues</a>
          <a href="tracker">Tracker</a>
        </div>
        <div>
          <h4>Act</h4>
          <a href="donate">Support site</a>
          <a href="join">Join</a>
          <a href="raise-issue">File Issue</a>
          <a href="terms#payment-policy">Payment policy</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="contact">Contact</a>
          <a href="terms">Terms</a>
          <a href="terms#satire">Satire</a>
          <a href="sitemap.xml">Sitemap</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} ${S.legalName || "CJP"} · cockroachjantapartywale.com</p>
      <p>Sources: public press &amp; Wikipedia (Cockroach Janta Party)</p>
    </div>
  </footer>
  <div class="protest-mini-widget" id="protestMiniWidget">
    <button type="button" class="widget-close" id="protestWidgetClose" aria-label="Close float widget">×</button>
    <div class="widget-badge">🚨 NEXT PROTEST · 20 JULY 2026</div>
    <a href="protests#protest-20-july" class="widget-body">
      <img src="assets/img/cjp/protest-20-july.jpg?v=20july" alt="20 July 2026 Jantar Mantar Youth Protest" width="70" height="90" loading="eager">
      <div class="widget-info">
        <strong>20 JULY MARCH</strong>
        <p>Jantar Mantar, New Delhi · 10:00 AM</p>
        <span class="btn-mini">RSVP / Details →</span>
      </div>
    </a>
  </div>
  <button type="button" class="live-chat" id="liveChat" aria-label="Open Live Chat">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    Chat
  </button>
  <div class="chat-panel" id="chatPanel" hidden>
    <div class="chat-head"><strong>CJP Chat</strong><button type="button" id="chatClose" aria-label="Close">×</button></div>
    <div class="chat-body">
      <p>Ask about joining, protests, or the manifesto.</p>
      <div class="chat-messages" id="chatMessages"></div>
    </div>
    <form class="chat-form" id="chatForm">
      <input type="text" id="chatInput" placeholder="Type…" autocomplete="off" required aria-label="Message">
      <button type="submit">Send</button>
    </form>
  </div>`;

  const mountTop = document.getElementById("site-top");
  const mountBottom = document.getElementById("site-bottom");
  if (mountTop) mountTop.outerHTML = top;
  if (mountBottom) mountBottom.outerHTML = bottom;

  if (S.url && !document.getElementById("ld-org")) {
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: S.legalName,
      alternateName: S.shortName,
      url: S.url,
      logo: `${S.url}/assets/img/logo.png`,
      description: S.description,
      foundingDate: "2026-05-16",
      founder: { "@type": "Person", name: S.founder },
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
