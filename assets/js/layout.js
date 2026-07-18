(() => {
  const S = window.CJP_SITE || {};
  const page = (document.body.dataset.page || "").toLowerCase();
  const year = new Date().getFullYear();

  // Indian names list for developer support ticker
  const donorNames = [
    "Aarav K.", "Ananya S.", "Vihaan S.", "Aditya P.", "Ishaan M.", 
    "Rahul G.", "Priya N.", "Amit Verma", "Neha Sharma", "Rohan D.", 
    "Sneha Patel", "Vikram R.", "Karan J.", "Siddharth M.", "Pooja K.", 
    "Varun S.", "Riya Sen", "Kunal Shah", "Deepak Gupta", "Suresh Kumar", 
    "Manish P.", "Sunita R.", "Rajesh T.", "Kiran J.", "Abhishek P.",
    "Dev M.", "Divya K.", "Gaurav S.", "Harish V.", "Jyoti N."
  ];

  const generateTicker = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const name = donorNames[Math.floor(Math.random() * donorNames.length)];
      const amount = Math.floor(Math.random() * 10000) + 1;
      items.push(`<span>💚 ${name} paid ₹${amount.toLocaleString('en-IN')} for website development</span>`);
    }
    return [...items, ...items].join("");
  };

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
  <div class="dev-ticker-bar" role="region" aria-label="Developer Support Ticker">
    <div class="dev-ticker-track">
      ${generateTicker()}
    </div>
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
            <p style="margin: 0.5rem 0 0; font-size: 0.88rem; line-height: 1.5; color: rgba(255,255,255,0.75);">
              A political party for the lazy, the unemployed, and the chronically correct. Headquartered wherever the wifi works.
            </p>
          </div>
        </a>
        <div style="display: grid; grid-template-columns: repeat(5, 36px); gap: 0.5rem; margin-top: 0.5rem;">
          <!-- X (Twitter) -->
          <a href="https://x.com/cjp_official" target="_blank" rel="noopener" aria-label="X" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <!-- Instagram -->
          <a href="https://instagram.com/cjp_official" target="_blank" rel="noopener" aria-label="Instagram" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <!-- Reddit -->
          <a href="https://reddit.com/r/CockroachJantaParty" target="_blank" rel="noopener" aria-label="Reddit" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.24-1.72l1.37-4.31 3.81.81c.01.88.74 1.58 1.62 1.58 1.65 0 3-1.35 3-3s-1.35-3-3-3c-.83 0-1.58.34-2.14.88l-4.23-.9c-.18-.04-.38.03-.49.18l-1.61 5.08c-2.45.04-4.71.68-6.38 1.71-.58-.75-1.48-1.23-2.44-1.23-1.65 0-3 1.35-3 3 0 1.2.71 2.23 1.74 2.71-.04.26-.06.52-.06.79 0 3.86 4.49 7 10 7s10-3.14 10-7c0-.27-.02-.53-.06-.79 1.03-.48 1.74-1.51 1.74-2.71zm-18.75 3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25zm11 2.5c-.9 1-2.49 1.5-4.25 1.5s-3.35-.5-4.25-1.5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0 .7.75 1.9 1.2 3.55 1.2s2.85-.45 3.55-1.2c.2-.2.5-.2.7 0 .2.2.2.5 0 .7zm-.75-3.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
          </a>
          <!-- Discord -->
          <a href="https://discord.gg/cjp" target="_blank" rel="noopener" aria-label="Discord" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>
          </a>
          <!-- Facebook -->
          <a href="https://facebook.com/CockroachJantaParty" target="_blank" rel="noopener" aria-label="Facebook" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 36px); gap: 0.5rem;">
          <!-- WhatsApp -->
          <a href="https://chat.whatsapp.com/CockroachJantaParty" target="_blank" rel="noopener" aria-label="WhatsApp" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.46l-6.256 1.648zM12.008 2.2c-5.448 0-9.879 4.43-9.883 9.879-.001 1.97.513 3.892 1.492 5.59l.327.568-1.073 3.92 4.01-1.053.551.327c1.626.966 3.486 1.477 5.393 1.478 5.451 0 9.883-4.432 9.887-9.885.002-2.64-1.02-5.122-2.879-6.983C17.18 3.22 14.7 2.2 12.008 2.2zm5.424 13.064c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg>
          </a>
          <!-- Telegram -->
          <a href="https://t.me/CockroachJantaParty" target="_blank" rel="noopener" aria-label="Telegram" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; color: #fff; background: rgba(255,255,255,0.03); transition: all 0.2s;" onmouseover="this.style.background='var(--signal)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.761-.17.708-.43 1.108-.738 1.138-.67.062-1.18-.444-1.83-1.884-.216-.481-.432-.864-.648-1.248-.37-.658-.74-1.316-1.11-1.974-.126-.222-.252-.444-.378-.666-.34-.598-.68-1.196-1.02-1.794-.09-.158-.18-.316-.27-.474-.2-.35-.4-.7-.6-.1-.132.394-.264.788-.396 1.182-.416 1.238-1.238 3.714-1.654 4.952-.162.482-.324.964-.486 1.446-.118.354-.236.708-.354 1.062-.128.384-.256.768-.384 1.152-.06.182-.12.364-.18.546l-.234-.148c.196-1.57.588-4.71 1.176-9.42.12-.962.24-1.924.36-2.886.09-.728.18-1.456.27-2.184l.324.354c.294.324.588.648.882.972.182.2.364.4.546.6.616.678 1.232 1.356 1.848 2.034.254.278.508.556.762.834z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <h4>The Manifesto</h4>
          <a href="manifesto">The Manifesto</a>
          <a href="articles">Articles</a>
          <a href="gallery">Gallery</a>
          <a href="tracker">Tracker</a>
          <a href="protests">Protests</a>
        </div>
        <div>
          <h4>Issues</h4>
          <a href="issues">Issues</a>
          <a href="manifesto">Manifesto</a>
          <a href="articles">News</a>
          <a href="vision#quotes">Quotes</a>
        </div>
        <div>
          <h4>Support the Developer</h4>
          <a href="donate">Support the Developer</a>
          <a href="members">Members</a>
          <a href="join">Get your card</a>
          <a href="raise-issue">Raise your voice</a>
          <a href="join">Volunteer</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="terms#privacy">Privacy Policy</a>
          <a href="terms">Terms of Use</a>
          <a href="terms#cookies">Cookie Policy</a>
          <a href="terms#editorial">Editorial Policy</a>
          <a href="terms#satire">Disclaimer</a>
          <a href="vision">About</a>
          <a href="articles#press-kit">Press Kit</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} Cockroach Janta Party · cockroachjantapartywale.com · Satirical &amp; Parody Movement</p>
      <p>Sources: public press &amp; Wikipedia (Cockroach Janta Party) · Not an ECI-registered political party</p>
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

  // Close announce bar listener
  const announceCloseBtn = document.getElementById("announceClose");
  const announceBar = document.getElementById("announceBar");
  if (announceCloseBtn && announceBar) {
    announceCloseBtn.addEventListener("click", () => {
      announceBar.style.display = "none";
    });
  }

  // Close protest mini widget listener
  const protestCloseBtn = document.getElementById("protestWidgetClose");
  const protestWidget = document.getElementById("protestMiniWidget");
  if (protestCloseBtn && protestWidget) {
    protestCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      protestWidget.style.display = "none";
    });
  }

  // Prevent FOUC: Reveal page once layout is mounted
  document.body.classList.remove("no-fouc");

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

  // Basic security to protect source code from casual inspection (Disable right-click and common shortcuts)
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("keydown", (e) => {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
      (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
      (e.ctrlKey && e.shiftKey && e.keyCode === 67) // Ctrl+Shift+C
    ) {
      e.preventDefault();
      return false;
    }
  });
})();
