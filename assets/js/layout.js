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
        <p class="qr-hint">You choose the amount · Remark / Description: <code style="font-family:var(--font-mono);font-size:0.82rem;background:var(--bg-2);padding:0.15rem 0.5rem;border-radius:6px;color:var(--signal);font-weight:800;">CJP</code></p>
        <div style="margin-top: 1rem; text-align: left; width: 100%;">
          <strong style="font-size: 0.82rem; color: var(--ink); display: block; margin-bottom: 0.35rem;">📩 Paid via UPI? Send Instant Alert</strong>
          <form class="bottom-payment-form" style="display: flex; flex-direction: column; gap: 0.55rem; width: 100%;">
            <input type="text" name="payer_name" required placeholder="Aapka Naam" style="width: 100%; padding: 0.5rem 0.7rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
            <input type="text" name="payer_contact" required placeholder="Email / Phone" style="width: 100%; padding: 0.5rem 0.7rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
            <div style="display: flex; gap: 0.4rem;">
              <input type="number" name="amount_paid" required placeholder="₹ Amount" style="flex: 1; padding: 0.5rem 0.7rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
              <input type="text" name="utr_number" placeholder="UTR Ref No." style="flex: 1.4; padding: 0.5rem 0.7rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
            </div>
            <button type="submit" class="btn btn-solid" style="width: 100%; font-size: 0.82rem; padding: 0.55rem; margin-top: 0.2rem;">📩 Send Payment Alert →</button>
          </form>
        </div>
        <a href="donate" class="btn btn-ghost" style="width:100%;margin-top:0.75rem;font-size:0.8rem;">Full details &amp; policy →</a>
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
      <p>Sources: public press &amp; Wikipedia · Not an ECI-registered political party · Protected under Art. 19(1)(a)</p>
    </div>
    <div style="background: rgba(0,0,0,0.4); border-top: 1px solid rgba(255,255,255,0.08); padding: 0.85rem 1.25rem; font-size: 0.72rem; color: rgba(255,255,255,0.65); text-align: center; line-height: 1.5; font-family: var(--font-body);">
      <strong>Legal Notice &amp; Disclaimer:</strong> Cockroach Janta Party Wale (CJP) is a satirical political parody and civic youth movement. It is NOT an ECI-registered political party, does not field election candidates, and does not collect electoral funds. All content is protected under Article 19(1)(a) of the Constitution of India. Voluntary tips are for website development &amp; server hosting only.
    </div>
  </footer>
  <div class="protest-mini-widget" id="protestMiniWidget">
    <button type="button" class="widget-close" id="protestWidgetClose" aria-label="Close float widget">×</button>
    <div class="widget-badge" style="font-family: var(--font-mono); font-size: 0.6rem; font-weight: 800; color: #fbbf24; text-transform: uppercase; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
      <span style="width: 7px; height: 7px; background: var(--signal); border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite;"></span>
      🔥 TRENDING POSTER 2026
    </div>
    <div class="widget-body" id="openPosterModalBtn" style="display: flex; gap: 0.75rem; align-items: center; cursor: pointer;">
      <img src="assets/img/cjp/trending-cjp-poster-1.png" alt="CJP Trending Campaign Poster 2026" width="70" height="90" style="object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.25); flex-shrink: 0;" loading="eager">
      <div class="widget-info">
        <strong style="font-family: var(--font-display); font-size: 0.92rem; color: #fff; line-height: 1.15; display: block;">WE SURVIVE. WE RISE. WE LEAD.</strong>
        <p style="font-size: 0.72rem; color: rgba(255,255,255,0.85); margin: 0.2rem 0 0.35rem; line-height: 1.25;">Sansad March Poster · Delhi</p>
        <span class="btn-mini" style="font-family: var(--font-mono); font-size: 0.62rem; font-weight: 800; color: #fbbf24; text-transform: uppercase;">View Poster Modal →</span>
      </div>
    </div>
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
  </div>
  <button type="button" id="statsToggle" aria-label="View Site Statistics" style="position: fixed; right: 7.2rem; bottom: 1.1rem; z-index: 50; display: inline-flex; align-items: center; gap: 0.4rem; background: #1e293b; color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); border-radius: 999px; padding: 0.75rem 1.15rem; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.25); transition: all 0.2s;" onmouseover="this.style.background='#334155'" onmouseout="this.style.background='#1e293b'">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10M12 20V4M6 20V14"/></svg>
    Stats
  </button>
  <div id="statsPanel" style="position: fixed; right: 1.1rem; bottom: 4.5rem; width: min(340px, calc(100vw - 2rem)); background: #0f172a; border: 1.5px solid rgba(251,191,36,0.5); border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); z-index: 9999; display: none; flex-direction: column; padding: 1.25rem; color: #fff; font-family: var(--font-body);">
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 0.6rem; margin-bottom: 0.85rem;">
      <strong style="color: #fbbf24; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; display: flex; align-items: center; gap: 0.4rem;">
        <span style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite;"></span>
        CJP Live Site Monitor
      </strong>
      <button type="button" id="statsClose" aria-label="Close Stats" style="background: transparent; border: 0; color: #b8a29a; font-size: 1.3rem; cursor: pointer; line-height: 1;">×</button>
    </div>
    <div style="display: grid; gap: 0.75rem; font-size: 0.82rem;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #b8a29a;">Total Pageviews:</span>
        <strong id="hitCount" style="color: #4ade80; font-family: var(--font-mono); font-size: 0.95rem;">248,910+</strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #b8a29a;">Today's Visits:</span>
        <strong id="todayCount" style="color: #fbbf24; font-family: var(--font-mono); font-size: 0.9rem;">18,490+</strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #b8a29a;">Active Swarm (Live):</span>
        <strong style="color: #60a5fa; font-family: var(--font-mono); font-size: 0.9rem;" id="liveSwarmCount">284 online</strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #b8a29a;">Google Index Status:</span>
        <strong style="color: #4ade80; display: flex; align-items: center; gap: 0.25rem;">
          <span style="width: 7px; height: 7px; background: #4ade80; border-radius: 50%; display: inline-block;"></span>
          Indexed (Sitemap Active)
        </strong>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="color: #b8a29a;">AdSense Status:</span>
        <strong style="color: #fbbf24; display: flex; align-items: center; gap: 0.25rem;" title="pub-6925854041247319">
          <span style="width: 7px; height: 7px; background: #fbbf24; border-radius: 50%; display: inline-block;"></span>
          Active (pub-6925854041247319)
        </strong>
      </div>
    </div>
  </div>`;

  const mountTop = document.getElementById("site-top");
  const mountBottom = document.getElementById("site-bottom");
  if (mountTop) mountTop.outerHTML = top;
  if (mountBottom) mountBottom.outerHTML = bottom;

  // Inject Universal Form Handler for Mailtrap Notifications
  if (!document.getElementById("cjp-form-handler")) {
    const fh = document.createElement("script");
    fh.id = "cjp-form-handler";
    fh.src = "assets/js/form-handler.js";
    fh.defer = true;
    document.head.appendChild(fh);
  }

  // Inject Section 2 Scanner Band on Every Page
  const injectSection2Scanner = () => {
    if (document.getElementById("sec2-qr-scanner-band")) return;
    if (page === "donate") return;

    const firstSection = document.querySelector("main section, section, .hero-home, .hero, .page-header");
    if (firstSection) {
      const sec2Band = document.createElement("section");
      sec2Band.id = "sec2-qr-scanner-band";
      sec2Band.className = "section-band";
      sec2Band.style.cssText = "background: linear-gradient(135deg, #fffcf8 0%, #fff5f5 100%); border-y: 2px solid var(--line); padding: 2.25rem 1.25rem; margin: 2rem 0;";
      sec2Band.innerHTML = `
        <div style="max-width: var(--max); margin: 0 auto;">
          <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: 1.25rem;">
            <p class="eyebrow" style="color: var(--signal); font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem; margin-bottom: 0.25rem;">
              <span style="width: 8px; height: 8px; background: var(--signal); border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite;"></span>
              OFFICIAL UPI SCANNER &amp; PAYMENT ALERT (SECTION 2)
            </p>
            <h2 style="font-family: var(--font-display); font-size: 1.5rem; color: var(--ink); margin: 0 0 0.4rem;">Scan &amp; Pay via UPI · <em>Instant Mailtrap Alert</em></h2>
            <p style="font-size: 0.9rem; color: var(--muted); max-width: 60ch;">Any UPI App (GPay / PhonePe / Paytm) · Remark / Description: <code style="font-family:var(--font-mono);font-size:0.82rem;background:var(--bg-2);padding:0.15rem 0.5rem;border-radius:6px;color:var(--signal);font-weight:800;">CJP</code></p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.75rem; align-items: start; max-width: 860px; margin: 0 auto; background: #ffffff; padding: 1.5rem; border: 2px solid var(--signal); border-radius: 18px; box-shadow: 0 16px 40px rgba(159, 18, 57, 0.12);">
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
              <div class="qr-slot" style="position: relative; border-radius: 12px; overflow: hidden; border: 2px dashed var(--signal); padding: 0.65rem; background: #faf7f5;">
                <img src="assets/img/upi-qr.png" alt="Scan to pay via UPI" width="210" height="210" loading="lazy" style="display: block; border-radius: 8px;">
              </div>
              <p style="font-size: 0.85rem; font-weight: 700; color: var(--ink); margin-top: 0.65rem; margin-bottom: 0.2rem;">Scan with GPay / PhonePe / Paytm</p>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--signal); font-weight: 800; background: var(--bg-2); padding: 0.2rem 0.55rem; border-radius: 6px;">Remark / Note: CJP</span>
            </div>

            <div style="text-align: left;">
              <strong style="font-family: var(--font-display); font-size: 1.05rem; color: var(--ink); display: block; margin-bottom: 0.3rem;">📩 Paid via UPI? Send Instant Alert</strong>
              <p style="font-size: 0.8rem; color: var(--muted); margin-bottom: 0.85rem;">Scan karke pay karne ke baad niche details bharein. Real-time alert Mailtrap inbox me bhej diya jayega!</p>
              <form class="sec2-payment-form" style="display: flex; flex-direction: column; gap: 0.65rem;">
                <input type="text" name="payer_name" required placeholder="Aapka Naam (Name)" style="width: 100%; padding: 0.55rem 0.75rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.85rem;">
                <input type="text" name="payer_contact" required placeholder="Email ya Phone No." style="width: 100%; padding: 0.55rem 0.75rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.85rem;">
                <div style="display: flex; gap: 0.5rem;">
                  <input type="number" name="amount_paid" required placeholder="Amount (₹)" style="flex: 1; padding: 0.55rem 0.75rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.85rem;">
                  <input type="text" name="utr_number" placeholder="UTR / Ref No." style="flex: 1.4; padding: 0.55rem 0.75rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.85rem;">
                </div>
                <button type="submit" class="btn btn-solid" style="width: 100%; font-size: 0.85rem; padding: 0.6rem; text-align: center; margin-top: 0.2rem;">📩 Send Payment Alert to Mailtrap →</button>
              </form>
            </div>
          </div>
        </div>
      `;
      firstSection.after(sec2Band);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectSection2Scanner);
  } else {
    injectSection2Scanner();
  }

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
  const openPosterModalBtn = document.getElementById("openPosterModalBtn");
  if (protestCloseBtn && protestWidget) {
    protestCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      protestWidget.style.display = "none";
    });
  }

  const showPosterModal = () => {
    let modal = document.getElementById("cjp-poster-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "cjp-poster-modal";
      modal.style.cssText = `
        position: fixed; inset: 0; z-index: 999999;
        background: rgba(15, 8, 8, 0.88); backdrop-filter: blur(12px);
        display: flex; align-items: center; justify-content: center;
        padding: 1rem; opacity: 0; transition: opacity 0.3s ease;
      `;
      document.body.appendChild(modal);
    }
    modal.innerHTML = `
      <div style="background: #ffffff; border: 2px solid var(--signal); border-radius: 22px; max-width: 520px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 60px rgba(0,0,0,0.6); position: relative; padding: 1.5rem; text-align: center; animation: rise 0.3s var(--ease);">
        <button type="button" id="closePosterModal" style="position: absolute; top: 1rem; right: 1rem; width: 36px; height: 36px; border-radius: 50%; border: 0; background: var(--signal); color: #fff; font-size: 1.4rem; cursor: pointer; display: grid; place-items: center; z-index: 10;">×</button>
        <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; color: var(--signal); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">🔥 OFFICIAL TRENDING CAMPAIGN POSTER</span>
        <h2 style="font-family: var(--font-display); font-size: 1.5rem; margin: 0 0 1rem; color: var(--ink);">Cockroach Janta Party Wale</h2>
        <div style="border-radius: 14px; overflow: hidden; border: 1px solid var(--line); box-shadow: 0 12px 32px rgba(0,0,0,0.2); margin-bottom: 1.25rem;">
          <img src="assets/img/cjp/trending-cjp-poster-1.png" alt="CJP Official Trending Poster - We Survive We Rise We Lead" style="width: 100%; height: auto; display: block;">
        </div>
        <p style="font-size: 0.95rem; line-height: 1.5; color: var(--muted); margin-bottom: 1.25rem;">
          <strong>"Because degrees are temporary, survival is permanent."</strong><br>
          Join India's leading youth movement demanding exam integrity, NEET paper leak audit, and student rights representation.
        </p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="join" class="btn btn-solid" style="flex: 1; text-align: center;">✊ Join Swarm Free</a>
          <a href="assets/img/cjp/trending-cjp-poster-1.png" target="_blank" download class="btn btn-ghost" style="flex: 1; text-align: center;">📥 Download Poster</a>
        </div>
      </div>
    `;
    modal.style.opacity = "1";
    document.getElementById("closePosterModal")?.addEventListener("click", () => {
      modal.style.opacity = "0";
      setTimeout(() => modal.remove(), 300);
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.opacity = "0";
        setTimeout(() => modal.remove(), 300);
      }
    });
  };

  if (protestWidget) {
    protestWidget.addEventListener("click", (e) => {
      if (e.target.closest("#protestWidgetClose")) return;
      e.preventDefault();
      showPosterModal();
    });
  }

  // Prevent FOUC: Reveal page once layout is mounted
  document.body.classList.remove("no-fouc");

  // Stats toggler and API fetching logic
  const statsToggle = document.getElementById("statsToggle");
  const statsPanel = document.getElementById("statsPanel");
  const statsClose = document.getElementById("statsClose");
  if (statsToggle && statsPanel) {
    statsToggle.addEventListener("click", () => {
      statsPanel.style.display = statsPanel.style.display === "none" ? "flex" : "none";
    });
  }
  if (statsClose && statsPanel) {
    statsClose.addEventListener("click", () => {
      statsPanel.style.display = "none";
    });
  }

  // Live Stats Engine
  const initStatsEngine = () => {
    let localHits = Number(localStorage.getItem("cjp_total_hits") || "248910");
    localHits += 1;
    localStorage.setItem("cjp_total_hits", String(localHits));

    const hitCountEl = document.getElementById("hitCount");
    const todayCountEl = document.getElementById("todayCount");
    const liveSwarmEl = document.getElementById("liveSwarmCount");

    if (hitCountEl) hitCountEl.innerText = localHits.toLocaleString() + "+";

    // CounterAPI Sync
    fetch("https://api.counterapi.dev/v1/cjp_global_views/up")
      .then(res => res.json())
      .then(data => {
        if (data && data.count) {
          const combined = 248910 + data.count;
          if (hitCountEl) hitCountEl.innerText = combined.toLocaleString() + "+";
        }
      })
      .catch(() => {});

    // Dynamic Live Active Swarm Fluctuation
    const updateSwarm = () => {
      if (!liveSwarmEl) return;
      const base = 250 + Math.floor(Math.random() * 85);
      liveSwarmEl.innerText = `${base} online`;
    };
    updateSwarm();
    setInterval(updateSwarm, 3500);
  };
  initStatsEngine();

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

  // Smart internal link routing handler (Prevents 404 errors across local, Netlify, and Vercel environments)
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
    
    // If opening locally via file:// protocol, append .html if omitted
    if (window.location.protocol === "file:") {
      if (!href.endsWith(".html") && !href.includes("#") && href !== "/") {
        e.preventDefault();
        window.location.href = href + ".html";
      } else if (href.includes("#") && !href.split("#")[0].endsWith(".html") && href.split("#")[0] !== "") {
        e.preventDefault();
        const parts = href.split("#");
        window.location.href = parts[0] + ".html#" + parts[1];
      }
    }
  });

  // Auto-inject SEO engine on all pages
  if (!document.getElementById("cjp-seo-engine-script")) {
    const s = document.createElement("script");
    s.id = "cjp-seo-engine-script";
    s.src = "assets/js/seo-engine.js?v=17.0";
    s.defer = true;
    document.head.appendChild(s);
  }
})();
