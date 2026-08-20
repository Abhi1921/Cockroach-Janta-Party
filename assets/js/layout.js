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



  // Complete 10 primary navbar links with mobile icons
  const nav = [
    ["vision.html", "Vision", "👁️"],
    ["manifesto.html", "5 Demands", "📜"],
    ["articles.html", "Media", "📰"],
    ["protests.html", "Actions", "✊"],
    ["rha.html", "RHA Movement", "✊"],
    ["tracker.html", "Tracker", "📊"],
    ["members.html", "Members", "👥"],
    ["gallery.html", "Gallery", "framed_picture"],
    ["join.html", "Join Us", "💳"],
    ["contact.html", "Contact", "📩"],
  ];

  const active = (file) => (page === file.replace(".html", "").replace(/^\//, "") ? " is-active" : "");

  const top = `
  <a class="skip-link" href="#main">Skip to content</a>
  
  <!-- CJP Historic Victory Announcement Top Strip -->
  <div class="MarchCampaignStrip-module__x5w8qa__strip" role="region" aria-label="CJP Historic Victory announcement" style="background: linear-gradient(90deg, #15803d 0%, #16a34a 50%, #047857 100%); color: #ffffff;">
    <div class="MarchCampaignStrip-module__x5w8qa__inner">
      <span class="MarchCampaignStrip-module__x5w8qa__badge" style="background: #fbbf24; color: #000; font-weight: 800;">🏆 VICTORY!</span>
      <p class="MarchCampaignStrip-module__x5w8qa__text" style="color: #ffffff;">
        <strong style="color: #fef08a;">🎉 CJP Historic Victory Accord Enacted into Law!</strong>
        <span class="MarchCampaignStrip-module__x5w8qa__sep">·</span>
        Union Cabinet officially signs binding accord mandating NEET 3rd-party exam server audits, releasing student detainees, &amp; enacting CJP 5 demands into law!
      </p>
      <a class="MarchCampaignStrip-module__x5w8qa__cta" href="articles.html#breaking-news-section" style="background: #ffffff; color: #15803d; font-weight: 800;">View Victory Accord →</a>
    </div>
  </div>

  <!-- Top Marquee Running Ticker Bar -->
  <div class="top-strip">
    <div class="ticker">
      <span>🚨 20 AUGUST 2026: CJP Founder Abhijeet Dipke Demands ₹8,452 Cr PM CARES Fund for Village Schools</span>
      <span>⚡ CJP Rejects NDA Offer: 100% Non-Partisan Youth Advocacy</span>
      <span>✊ RHA &amp; CJP Launch 28-State Student March for 100% Meritocracy</span>
      <span>🔥 JHARKHAND ASSEMBLY SIEGE DAY 27: Solidarity March in Ranchi with Devendra Mahto</span>
      <span>🏆 HISTORIC VICTORY: Cabinet Enacts Binding Accord for NEET 3rd-Party Server Audits</span>
      <span>🪳 MAIN BHI COCKROACH: 30 Million Verified Youth Swarm Across India</span>
      <span>🚨 20 AUGUST 2026: CJP Founder Abhijeet Dipke Demands ₹8,452 Cr PM CARES Fund for Village Schools</span>
      <span>⚡ CJP Rejects NDA Offer: 100% Non-Partisan Youth Advocacy</span>
      <span>✊ RHA &amp; CJP Launch 28-State Student March for 100% Meritocracy</span>
      <span>🔥 JHARKHAND ASSEMBLY SIEGE DAY 27: Solidarity March in Ranchi with Devendra Mahto</span>
    </div>
  </div>



  <header class="nav site-header">
    <div class="nav-inner header-inner">
      <a class="brand" href="/" aria-label="Cockroach Janta Party home">
        <img src="assets/img/logo.webp" alt="Cockroach Janta Party logo" width="48" height="48" decoding="async" style="object-fit:contain;border-radius:50%">
        <span class="brand-text">
          <span class="brand-name">COCKROACH<br>JANTA PARTY</span>
          <span class="brand-tag">कॉकरोच जनता पार्टी Est. 2026</span>
        </span>
      </a>
      <button type="button" class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="primary-nav main-nav" id="mainNav" aria-label="Primary">
        <ul class="mobile-nav-list" style="display: flex; align-items: center; gap: 0.9rem; list-style: none; margin: 0; padding: 0;">
          <!-- Dropdown 1: CJP Core & Vision -->
          <li class="cjp-mega-nav-item">
            <a href="vision.html" class="${(active('vision') || active('index')).trim()}">
              <span class="nav-icon">⚡</span><span class="nav-label">CJP Core ▾</span>
            </a>
            <div class="cjp-mega-dropdown">
              <div class="cjp-dropdown-header" style="background: linear-gradient(135deg, #1e1b4b 0%, #311b92 100%); color: #fff;">
                <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 900; color: #fbbf24; text-transform: uppercase;">⚡ CORE DIRECTORY</span>
                <strong style="display: block; font-family: var(--font-display); font-size: 0.95rem; margin-top: 0.15rem;">Cockroach Janta Party Hub</strong>
              </div>
              <a href="/" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🏠</span>
                <div>
                  <div class="cjp-dropdown-title">Home Hub</div>
                  <span class="cjp-dropdown-sub">Main CJP Movement Portal</span>
                </div>
                <span class="cjp-mega-dropdown-badge" style="background:#e0f2fe;color:#0369a1">Main</span>
              </a>
              <a href="cockroach-janta-party-wale.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🪳</span>
                <div>
                  <div class="cjp-dropdown-title">CJP Wale Desk</div>
                  <span class="cjp-dropdown-sub">Official Domain &amp; Entity</span>
                </div>
                <span class="cjp-mega-dropdown-badge" style="background:#fef3c7;color:#92400e">Official</span>
              </a>
              <a href="vision.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">👁️</span>
                <div>
                  <div class="cjp-dropdown-title">Vision &amp; Ideology</div>
                  <span class="cjp-dropdown-sub">Satire, Parody &amp; Youth Rights</span>
                </div>
              </a>
              <a href="manifesto.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📜</span>
                <div>
                  <div class="cjp-dropdown-title">5 Demands Manifesto</div>
                  <span class="cjp-dropdown-sub">Enacted Youth Reform Charter</span>
                </div>
                <span class="cjp-mega-dropdown-badge" style="background:#dcfce7;color:#15803d">Enacted</span>
              </a>
              <a href="members.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">👥</span>
                <div>
                  <div class="cjp-dropdown-title">30M+ Members</div>
                  <span class="cjp-dropdown-sub">Verified Swarm Directory</span>
                </div>
              </a>
              <a href="revolutionaries.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🔥</span>
                <div>
                  <div class="cjp-dropdown-title">Revolutionaries</div>
                  <span class="cjp-dropdown-sub">Founders &amp; Student Leaders</span>
                </div>
              </a>
              <a href="tracker.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📊</span>
                <div>
                  <div class="cjp-dropdown-title">Movement Tracker</div>
                  <span class="cjp-dropdown-sub">Real-Time Metric Analytics</span>
                </div>
              </a>
              <a href="dimagi-naxal.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #fef2f2; color: #dc2626;">🧠</span>
                <div>
                  <div class="cjp-dropdown-title">Dimagi Naxal Explainer</div>
                  <span class="cjp-dropdown-sub">Media Dossier &amp; OpIndia Feature</span>
                </div>
              </a>
              <a href="parody-history.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📖</span>
                <div>
                  <div class="cjp-dropdown-title">Parody History</div>
                  <span class="cjp-dropdown-sub">Global Political Satire Archive</span>
                </div>
              </a>
              <a href="faq.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">❓</span>
                <div>
                  <div class="cjp-dropdown-title">Full CJP FAQ</div>
                  <span class="cjp-dropdown-sub">Knowledge Base &amp; Q&amp;A</span>
                </div>
              </a>
            </div>
          </li>

          <!-- Dropdown 2: RHM & Meritocracy -->
          <li class="cjp-mega-nav-item">
            <a href="rha.html" class="${active('rha').trim()}" style="color: #dc2626; font-weight: 800;">
              <span class="nav-icon">✊</span><span class="nav-label">RHM &amp; Merit ▾</span>
            </a>
            <div class="cjp-mega-dropdown" style="border-color: #dc2626;">
              <div class="cjp-dropdown-header" style="background: linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%); color: #fff;">
                <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 900; color: #fca5a5; text-transform: uppercase;">✊ MERITOCRACY CAMPAIGNS</span>
                <strong style="display: block; font-family: var(--font-display); font-size: 0.95rem; margin-top: 0.15rem;">Reservation Hatao Movement</strong>
              </div>
              <a href="rha.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #fee2e2; color: #dc2626;">✊</span>
                <div>
                  <div class="cjp-dropdown-title">RHM Main Portal</div>
                  <span class="cjp-dropdown-sub">28-State Student Rallies</span>
                </div>
              </a>
              <a href="school-thik-karo.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #dcfce7; color: #16a34a;">🏫</span>
                <div>
                  <div class="cjp-dropdown-title">School Thik Karo</div>
                  <span class="cjp-dropdown-sub">PM CARES Village School Drive</span>
                </div>
              </a>
              <a href="neet-audit.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #f3e8ff; color: #7c3aed;">💻</span>
                <div>
                  <div class="cjp-dropdown-title">NEET Server Audit</div>
                  <span class="cjp-dropdown-sub">Cryptographic Log Audit</span>
                </div>
              </a>
              <a href="issues.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📋</span>
                <div>
                  <div class="cjp-dropdown-title">Public Issues Board</div>
                  <span class="cjp-dropdown-sub">Exam Paper Leak Registry</span>
                </div>
              </a>
              <a href="raise-issue.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📢</span>
                <div>
                  <div class="cjp-dropdown-title">Raise Your Voice</div>
                  <span class="cjp-dropdown-sub">Submit Student Grievance</span>
                </div>
              </a>
            </div>
          </li>

          <!-- Dropdown 3: Protests & State Swarms -->
          <li class="cjp-mega-nav-item">
            <a href="protests.html" class="${active('protests').trim()}" style="color: #dc2626; font-weight: 800;">
              <span class="nav-icon">🚨</span><span class="nav-label">Protests &amp; Swarms ▾</span>
            </a>
            <div class="cjp-mega-dropdown" style="border-color: #dc2626;">
              <div class="cjp-dropdown-header" style="background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%); color: #fff;">
                <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 900; color: #fef08a; text-transform: uppercase;">🚨 STATE SWARM CHAPTERS</span>
                <strong style="display: block; font-family: var(--font-display); font-size: 0.95rem; margin-top: 0.15rem;">Protests &amp; State Swarms</strong>
              </div>
              <a href="protests.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #fee2e2; color: #dc2626;">🚨</span>
                <div>
                  <div class="cjp-dropdown-title">Protests &amp; Actions Hub</div>
                  <span class="cjp-dropdown-sub">Nationwide Student Agitations</span>
                </div>
              </a>
              <a href="jharkhand-protest.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #fee2e2; color: #dc2626;">🔥</span>
                <div>
                  <div class="cjp-dropdown-title">Jharkhand Assembly Siege</div>
                  <span class="cjp-dropdown-sub">Ranchi Student Agitation Dossier</span>
                </div>
              </a>
              <a href="delhi-chapter.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🏛️</span>
                <div>
                  <div class="cjp-dropdown-title">Delhi NCR Swarm</div>
                  <span class="cjp-dropdown-sub">DU, JNU &amp; SC Campus Chapter</span>
                </div>
              </a>
              <a href="bihar-chapter.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🔥</span>
                <div>
                  <div class="cjp-dropdown-title">Bihar BPSC Swarm</div>
                  <span class="cjp-dropdown-sub">Patna Gandhi Maidan Chapter</span>
                </div>
              </a>
              <a href="maharashtra-chapter.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🚩</span>
                <div>
                  <div class="cjp-dropdown-title">Maharashtra Swarm</div>
                  <span class="cjp-dropdown-sub">Hingoli &amp; Pune MPSC Chapter</span>
                </div>
              </a>
              <a href="bitchat.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🔐</span>
                <div>
                  <div class="cjp-dropdown-title">Encrypted BitChat Mesh</div>
                  <span class="cjp-dropdown-sub">Offline P2P Rally Communication</span>
                </div>
              </a>
              <a href="offline.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📡</span>
                <div>
                  <div class="cjp-dropdown-title">Stay Connected Offline</div>
                  <span class="cjp-dropdown-sub">Internet Shutdown Protocols</span>
                </div>
              </a>
            </div>
          </li>

          <!-- Dropdown 4: News & Media Desk -->
          <li class="cjp-mega-nav-item">
            <a href="articles.html" class="${active('articles').trim()}">
              <span class="nav-icon">📰</span><span class="nav-label">News &amp; Media ▾</span>
            </a>
            <div class="cjp-mega-dropdown" style="border-color: #0284c7;">
              <div class="cjp-dropdown-header" style="background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%); color: #fff;">
                <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 900; color: #bae6fd; text-transform: uppercase;">📰 PRESS &amp; WIRE DESK</span>
                <strong style="display: block; font-family: var(--font-display); font-size: 0.95rem; margin-top: 0.15rem;">CJP News &amp; Media Desk</strong>
              </div>
              <a href="articles.html#all-news-tab" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #e0f2fe; color: #0284c7;">🌐</span>
                <div>
                  <div class="cjp-dropdown-title">Tab 1: All News Wire</div>
                  <span class="cjp-dropdown-sub">Real-Time Breaking Bulletins</span>
                </div>
              </a>
              <a href="articles.html#cjp-bulletins-tab" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📌</span>
                <div>
                  <div class="cjp-dropdown-title">Tab 2: Official Bulletins</div>
                  <span class="cjp-dropdown-sub">Campaign Posters &amp; Bulletins</span>
                </div>
              </a>
              <a href="articles.html#media-coverage-tab" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📺</span>
                <div>
                  <div class="cjp-dropdown-title">Tab 3: Google &amp; Live Media</div>
                  <span class="cjp-dropdown-sub">BBC, Reuters &amp; TV News Wire</span>
                </div>
              </a>
              <a href="anthem.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #fee2e2; color: #dc2626;">🎵</span>
                <div>
                  <div class="cjp-dropdown-title">CJP Hip-Hop Anthem</div>
                  <span class="cjp-dropdown-sub">#MainBhiCockroach Spotify Track</span>
                </div>
              </a>
              <a href="press.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📺</span>
                <div>
                  <div class="cjp-dropdown-title">Press Kit &amp; Media Bureau</div>
                  <span class="cjp-dropdown-sub">High-Res Assets &amp; Releases</span>
                </div>
              </a>
              <a href="contact.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📩</span>
                <div>
                  <div class="cjp-dropdown-title">Press &amp; Contact Bureau</div>
                  <span class="cjp-dropdown-sub">Spokesperson Inquiry Desk</span>
                </div>
              </a>
            </div>
          </li>

          <!-- Dropdown 5: Posters & Memes -->
          <li class="cjp-mega-nav-item">
            <a href="gallery.html" class="${(active('gallery') || active('memes')).trim()}">
              <span class="nav-icon">🖼️</span><span class="nav-label">Posters &amp; Memes ▾</span>
            </a>
            <div class="cjp-mega-dropdown" style="border-color: #16a34a;">
              <div class="cjp-dropdown-header" style="background: linear-gradient(135deg, #052e16 0%, #15803d 100%); color: #fff;">
                <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 900; color: #86efac; text-transform: uppercase;">🖼️ ASSETS &amp; SATIRE ARCHIVE</span>
                <strong style="display: block; font-family: var(--font-display); font-size: 0.95rem; margin-top: 0.15rem;">Posters &amp; Memes Vault</strong>
              </div>
              <a href="gallery.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #dcfce7; color: #15803d;">🖼️</span>
                <div>
                  <div class="cjp-dropdown-title">Visual Gallery (37+ Assets)</div>
                  <span class="cjp-dropdown-sub">Campaign Posters &amp; Artworks</span>
                </div>
              </a>
              <a href="memes.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill" style="background: #fef9c3; color: #ca8a04;">🪳</span>
                <div>
                  <div class="cjp-dropdown-title">Satirical Memes Vault</div>
                  <span class="cjp-dropdown-sub">Viral Gen-Z Parody Graphics</span>
                </div>
              </a>
              <a href="quotes.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">💬</span>
                <div>
                  <div class="cjp-dropdown-title">Iconic Quotes &amp; Statements</div>
                  <span class="cjp-dropdown-sub">Courtroom Retorts &amp; Speeches</span>
                </div>
              </a>
            </div>
          </li>

          <!-- Dropdown 6: Policies & Legal -->
          <li class="cjp-mega-nav-item">
            <a href="privacy.html" class="${(active('privacy') || active('terms') || active('transparency')).trim()}">
              <span class="nav-icon">⚖️</span><span class="nav-label">Policies &amp; Legal ▾</span>
            </a>
            <div class="cjp-mega-dropdown">
              <div class="cjp-dropdown-header" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: #fff;">
                <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 900; color: #94a3b8; text-transform: uppercase;">⚖️ LEGAL &amp; GOVERNANCE</span>
                <strong style="display: block; font-family: var(--font-display); font-size: 0.95rem; margin-top: 0.15rem;">Policies &amp; Site Standards</strong>
              </div>
              <a href="transparency.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">⚖️</span>
                <div>
                  <div class="cjp-dropdown-title">Legal &amp; Transparency</div>
                  <span class="cjp-dropdown-sub">Financial Audit &amp; Disclosures</span>
                </div>
              </a>
              <a href="privacy.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🔒</span>
                <div>
                  <div class="cjp-dropdown-title">Privacy Policy</div>
                  <span class="cjp-dropdown-sub">Data Protection &amp; Zero Tracking</span>
                </div>
              </a>
              <a href="terms.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📜</span>
                <div>
                  <div class="cjp-dropdown-title">Terms of Use</div>
                  <span class="cjp-dropdown-sub">Website Rules &amp; Art 19 Rights</span>
                </div>
              </a>
              <a href="disclaimer.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">⚠️</span>
                <div>
                  <div class="cjp-dropdown-title">Satire &amp; Parody Disclaimer</div>
                  <span class="cjp-dropdown-sub">Non-ECI Party Notice</span>
                </div>
              </a>
              <a href="community-guidelines.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📜</span>
                <div>
                  <div class="cjp-dropdown-title">Community Guidelines</div>
                  <span class="cjp-dropdown-sub">Swarm Conduct &amp; Non-Violence</span>
                </div>
              </a>
              <a href="protest-guidelines.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📢</span>
                <div>
                  <div class="cjp-dropdown-title">Protest Guidelines</div>
                  <span class="cjp-dropdown-sub">Peaceful Assembly Rules</span>
                </div>
              </a>
              <a href="bitchat-guidelines.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🔐</span>
                <div>
                  <div class="cjp-dropdown-title">BitChat Rules</div>
                  <span class="cjp-dropdown-sub">Encrypted Mesh Safety</span>
                </div>
              </a>
              <a href="cookies.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">🍪</span>
                <div>
                  <div class="cjp-dropdown-title">Cookie &amp; Ads Policy</div>
                  <span class="cjp-dropdown-sub">AdSense Cookie Settings</span>
                </div>
              </a>
              <a href="editorial-policy.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">📰</span>
                <div>
                  <div class="cjp-dropdown-title">Editorial &amp; IP Policy</div>
                  <span class="cjp-dropdown-sub">News Verification &amp; Licensing</span>
                </div>
              </a>
              <a href="refund-policy.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">💳</span>
                <div>
                  <div class="cjp-dropdown-title">Refund Policy</div>
                  <span class="cjp-dropdown-sub">Voluntary Tip Dispute Help</span>
                </div>
              </a>
              <a href="support-policy.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">💻</span>
                <div>
                  <div class="cjp-dropdown-title">Platform Support SLA</div>
                  <span class="cjp-dropdown-sub">Server Uptime Commitments</span>
                </div>
              </a>
              <a href="accessibility.html" class="cjp-mega-dropdown-link">
                <span class="cjp-dropdown-icon-pill">♿</span>
                <div>
                  <div class="cjp-dropdown-title">Web Accessibility</div>
                  <span class="cjp-dropdown-sub">WCAG 2.1 Compliance</span>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <div class="mobile-nav-actions">
          <a href="join.html" class="btn btn-solid btn-wide mobile-cta-join">✊ Join Swarm Free →</a>
          <a href="donate.html" class="btn btn-ghost btn-wide mobile-cta-donate">💚 Support Developer</a>
        </div>
      </nav>
      <div class="nav-actions header-actions">
        <div class="lang-select" id="langSelect">
          <button type="button" class="lang-btn" aria-expanded="false" aria-label="Select Language">
            🌐 <span>ENGLISH</span> ▾
          </button>
          <div class="lang-menu" hidden role="listbox" aria-label="Languages">
            <button type="button" class="lang-opt" role="option" data-lang="en" aria-selected="true">🌐 English</button>
            <button type="button" class="lang-opt" role="option" data-lang="hi" aria-selected="false">🇮🇳 हिन्दी</button>
          </div>
        </div>
        <a href="donate.html" class="btn btn-ghost${active("donate")}">Support site</a>
        <a href="join.html" class="btn-pill" style="background: #dc2626; color: #ffffff; font-weight: 800; padding: 0.55rem 1.2rem; border-radius: 999px; white-space: nowrap; font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em; text-decoration: none; box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4); flex-shrink: 0;">✊ Join The Party</a>
      </div>
    </div>
  </header>

  <!-- Category Sub-Navbar Bar Below Header (Quick Hubs Access) -->
  <div class="cjp-sub-navbar-bar">
    <div class="cjp-sub-navbar-inner">
      <a href="/" class="cjp-sub-nav-chip ${active('index')}">⚡ CJP Main Hub</a>
      <a href="rha.html" class="cjp-sub-nav-chip ${active('rha')}" style="background: rgba(220,38,38,0.2); border-color: #dc2626; color: #fca5a5;">✊ RHM Movement (100% Merit)</a>
      <a href="jharkhand-protest.html" class="cjp-sub-nav-chip ${active('jharkhand-protest')}" style="background: rgba(220,38,38,0.25); border-color: #dc2626; color: #fee2e2;">🚨 Jharkhand Siege</a>
      <a href="school-thik-karo.html" class="cjp-sub-nav-chip ${active('school-thik-karo')}" style="background: rgba(22,163,74,0.2); border-color: #16a34a; color: #86efac;">🏫 School Thik Karo</a>
      <a href="neet-audit.html" class="cjp-sub-nav-chip ${active('neet-audit')}" style="background: rgba(147,51,234,0.2); border-color: #9333ea; color: #c084fc;">💻 NEET Server Audit</a>
      <a href="dimagi-naxal.html" class="cjp-sub-nav-chip ${active('dimagi-naxal')}" style="background: rgba(220,38,38,0.25); border-color: #dc2626; color: #fca5a5;">🧠 Dimagi Naxal</a>
      <a href="articles.html" class="cjp-sub-nav-chip ${active('articles')}">📰 News Desk (3 Tabs)</a>
      <a href="gallery.html" class="cjp-sub-nav-chip ${active('gallery')}">🖼️ Posters Gallery</a>
      <a href="anthem.html" class="cjp-sub-nav-chip ${active('anthem')}" style="background: rgba(220,38,38,0.2); border-color: #dc2626; color: #fee2e2;">🎵 CJP Anthem</a>
      <a href="card.html" class="cjp-sub-nav-chip ${active('card')}">💳 Member Card</a>
      <a href="faq.html" class="cjp-sub-nav-chip ${active('faq')}">❓ Full FAQ</a>
      <a href="join.html" class="cjp-sub-nav-chip ${active('join')}" style="background: rgba(220,38,38,0.2); border-color: #dc2626; color: #fee2e2;">✊ Join Party</a>
    </div>
  </div>

  <!-- Exam Crisis Charter Banner Bar -->
  <div class="exam-banner-bar">
    <div class="exam-banner-inner">
      <div style="display:flex;flex-direction:column;gap:6px">
        <span class="exam-banner-badge">Released 15 July 2026</span>
        <span class="exam-banner-title">5 Demands to End India's Exam Crisis</span>
      </div>
      <a class="btn-primary" style="flex-shrink:0" href="manifesto.html">Read the Charter →</a>
    </div>
  </div>`;

  const scannerBoxHtml = `
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
          Read the fine print: <a href="donate.html">Support page</a> · <a href="terms.html#payment-policy">Payment policy</a>
        </p>
      </div>
      <div class="support-qr-card">
        <div class="qr-slot">
          <img src="assets/img/upi-qr.webp" alt="Scan to pay via UPI for website support" width="240" height="240" loading="lazy">
        </div>
        <p class="qr-caption"><strong>Scan &amp; pay</strong> (UPI / any supported app)</p>
        <p class="qr-hint">You choose the amount · Remark / Description: <code style="font-family:var(--font-mono);font-size:0.82rem;background:var(--bg-2);padding:0.15rem 0.5rem;border-radius:6px;color:var(--signal);font-weight:800;">CJP</code></p>
        
        <!-- Personal Food / Snacks Support Note Box -->
        <div style="background: linear-gradient(135deg, #fffcf8 0%, #fff7ed 100%); border: 1.5px solid #fdba74; border-radius: 12px; padding: 0.75rem 0.85rem; margin-top: 0.75rem; font-size: 0.76rem; color: #78350f; line-height: 1.4; text-align: left; width: 100%; box-sizing: border-box;">
          <strong style="font-weight: 800; font-family: var(--font-display); font-size: 0.84rem; color: #ea580c; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.35rem;">☕ Support Developer's Hard Work! 🍕</strong>
          I independently design, code, host, and maintain this platform around the clock. If you wish to support this work, you can send a voluntary tip for <strong>Tea ☕ (₹20-50), Snacks 🍕 (₹100-200), Lunch/Dinner 🍔 (₹250-500) or Server Hosting 💻 (₹1000+)</strong>!
          <div style="font-size: 0.72rem; color: #c2410c; font-weight: 700; margin-top: 0.35rem;">
            ❤️ Your small contribution helps maintain independent daily updates!
          </div>
        </div>

        <!-- Legal Compliance Disclosures Box -->
        <div style="margin-top: 0.75rem; padding: 0.65rem 0.85rem; background: #fef2f2; border: 1px solid #fecdd3; border-radius: 10px; font-size: 0.72rem; color: #9f1239; line-height: 1.45; text-align: left; width: 100%; box-sizing: border-box;">
          <strong style="display: block; font-family: var(--font-mono); font-size: 0.68rem; text-transform: uppercase; margin-bottom: 0.2rem; color: #dc2626;">⚖️ LEGAL &amp; POLICY DISCLOSURES:</strong>
          • <strong>Voluntary Tip:</strong> Personal hosting &amp; dev labor support.<br>
          • <strong>Not NGO / Charity:</strong> No 80G tax receipts issued.<br>
          • <strong>Not Political Fund:</strong> Not an ECI-registered political party.<br>
          • <strong>Free Speech Protection:</strong> Protected under Art. 19(1)(a).
        </div>
        <div style="margin-top: 1rem; text-align: left; width: 100%; box-sizing: border-box;">
          <strong style="font-size: 0.84rem; color: var(--ink); display: block; margin-bottom: 0.35rem; font-family: var(--font-display);">📩 Paid via UPI? Send Instant Verification Alert</strong>
          <form class="bottom-payment-form" style="display: flex; flex-direction: column; gap: 0.55rem; width: 100%;">
            <input type="text" name="payer_name" required placeholder="Your Full Name" style="width: 100%; padding: 0.55rem 0.7rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
            <input type="text" name="payer_contact" required placeholder="Email or Phone Number" style="width: 100%; padding: 0.55rem 0.7rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
            <div style="display: flex; gap: 0.4rem; width: 100%; box-sizing: border-box;">
              <input type="number" name="amount_paid" required placeholder="Amount (₹)" style="flex: 1 1 40%; min-width: 0; width: 100%; box-sizing: border-box; padding: 0.55rem 0.6rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
              <input type="text" name="utr_number" placeholder="UTR / Ref No." style="flex: 1 1 60%; min-width: 0; width: 100%; box-sizing: border-box; padding: 0.55rem 0.6rem; border: 1px solid var(--line); border-radius: 6px; font-size: 0.82rem;">
            </div>
            <button type="submit" class="btn btn-solid" style="width: 100%; font-size: 0.82rem; padding: 0.6rem; margin-top: 0.2rem; background: #dc2626; border-color: #dc2626; color: #fff; font-weight: 800;">📩 Submit Verification Alert →</button>
            <p class="form-success payment-alert-msg" hidden style="font-size: 0.75rem; color: var(--green); margin-top: 0.3rem; text-align: center; font-weight: 700;"></p>
          </form>
        </div>
        <a href="donate.html" class="btn btn-ghost" style="width:100%;margin-top:0.75rem;font-size:0.8rem;">Full details &amp; policy →</a>
      </div>
    </div>
  </section>`;

  const bottom = `
  ${page === "index" || page === "" ? scannerBoxHtml : ""}
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

        <!-- Cloudflare Turnstile Captcha Widget -->
        <div class="cf-turnstile-box" id="cfTurnstileBox" onclick="toggleTurnstileCaptcha()" style="background: #23201b; border: 1.5px solid rgba(255,255,255,0.22); border-radius: 10px; padding: 0.65rem 0.9rem; margin: 0.75rem 0; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <div id="cfCheckBadge" style="width: 28px; height: 28px; border-radius: 50%; background: #16a34a; display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.9rem; font-weight: 900; box-shadow: 0 0 10px rgba(22,163,74,0.4);">
              ✓
            </div>
            <span id="cfStatusLabel" style="font-family: var(--font-body); font-size: 0.9rem; font-weight: 700; color: #ffffff;">Success!</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; line-height: 1.15;">
            <div style="display: flex; align-items: center; gap: 0.3rem; color: #f97316; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 900; text-transform: uppercase;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f97316"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
              <span>CLOUDFLARE</span>
            </div>
            <div style="font-size: 0.64rem; color: rgba(255,255,255,0.65); margin-top: 0.2rem;">
              <a href="privacy.html" style="color: rgba(255,255,255,0.75); text-decoration: underline;">Privacy</a> • <a href="terms.html" style="color: rgba(255,255,255,0.75); text-decoration: underline;">Help</a>
            </div>
          </div>
        </div>

        <p class="form-note">One email, when there's something to say. Unsubscribe anytime.</p>
        <p class="form-success" id="subscribeMsg" hidden></p>
      </form>
    </div>
  </section>
  <footer class="site-footer">
    <div class="footer-inner">
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <a href="/" class="footer-brand" style="text-decoration: none; color: inherit;">
          <img src="assets/img/logo.webp" alt="Cockroach Janta Party logo" width="44" height="44" decoding="async">
          <div>
            <strong>Cockroach Janta Party</strong>
            <p style="margin: 0.5rem 0 0; font-size: 0.88rem; line-height: 1.5; color: rgba(255,255,255,0.75);">
              A political party for the lazy, the unemployed, and the chronically correct. Headquartered wherever the wifi works.
            </p>
          </div>
        </a>
        <div class="footer-social-strip">
          <a href="https://youtube.com/@cockroachjantaparty" target="_blank" rel="noopener" aria-label="YouTube">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube</span>
          </a>
          <a href="https://instagram.com/cockroachjantaparty" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span>Instagram</span>
          </a>
          <a href="https://x.com/cjp_official" target="_blank" rel="noopener" aria-label="X Twitter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>X (Twitter)</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61590017357770" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span>Facebook</span>
          </a>
          <a href="https://t.me/cockroachjantaparty" target="_blank" rel="noopener" aria-label="Telegram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.68-.55.84-1.12.52l-3.01-2.22-1.45 1.4c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.57-4.46c.54-.2 1.01.13.89.92z"/></svg>
            <span>Telegram</span>
          </a>
          <a href="https://whatsapp.com/channel/cockroachjantaparty" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span>WhatsApp</span>
          </a>
          <a href="https://open.spotify.com/artist/cjp" target="_blank" rel="noopener" aria-label="Spotify">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.38-1.38 9.841-.719 13.56 1.56.36.24.54.84.18 1.261zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z"/></svg>
            <span>Spotify</span>
          </a>
          <a href="vision.html#wikipedia-archive" aria-label="Wikipedia Entry">
            <span style="font-size: 0.95rem; line-height: 1;">🌐</span>
            <span>Wikipedia Entry</span>
          </a>
        </div>
      </div>
      <div class="footer-cols">
        <div>
          <h4>Vision &amp; Content</h4>
          <a href="vision.html">Vision &amp; Ideology</a>
          <a href="manifesto.html">The Manifesto (5 Demands)</a>
          <a href="articles.html">Articles &amp; News Desk</a>
          <a href="gallery.html">Visual Posters Gallery</a>
          <a href="tracker.html">Movement Tracker</a>
          <a href="protests.html">Protests &amp; Actions</a>
          <a href="topics.html">Hot Topics &amp; Policy Debates</a>
          <a href="memes.html">Satirical Memes Vault</a>
          <a href="issues.html">Public Issues Board</a>
          <a href="quotes.html">Iconic Quotes &amp; Statements</a>
          <a href="dimagi-naxal.html">Dimagi Naxal Explainer</a>
          <a href="vision.html#wikipedia-archive">Wikipedia Archive Entry</a>
        </div>
        <div>
          <h4>Participate &amp; Join</h4>
          <a href="join.html">Join the Swarm</a>
          <a href="members.html">30M+ Members Directory</a>
          <a href="card.html">Get Your Member Card</a>
          <a href="raise-issue.html">Raise Your Voice / Issue</a>
          <a href="leave.html">Leave the Swarm (Opt-Out)</a>
          <a href="donate.html">Support the Developer</a>
          <a href="cockroach-janta-party-wale.html">CJP Wale Official Desk</a>
          <a href="revolutionaries.html">Founders &amp; Revolutionaries</a>
        </div>
        <div>
          <h4>Community &amp; Guidelines</h4>
          <a href="community-guidelines.html">Community Guidelines</a>
          <a href="protest-guidelines.html">Protest Guidelines</a>
          <a href="bitchat-guidelines.html">Responsible BitChat Use</a>
          <a href="offline.html">Stay Connected Offline</a>
          <a href="press.html">Press Kit &amp; Media Bureau</a>
          <a href="contact.html">Press &amp; Contact Bureau</a>
        </div>
        <div>
          <h4>Legal &amp; Transparency</h4>
          <a href="transparency.html">Legal &amp; Transparency</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Use</a>
          <a href="disclaimer.html">Satire &amp; Parody Disclaimer</a>
          <a href="cookies.html">Cookie &amp; Advertising Policy</a>
          <a href="editorial-policy.html">Editorial &amp; IP Policy</a>
          <a href="refund-policy.html">Refund Policy</a>
          <a href="support-policy.html">Platform Support Terms</a>
          <a href="accessibility.html">Web Accessibility Commitment</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} Cockroach Janta Party · cockroachjantapartywale.com · Satirical &amp; Parody Movement</p>
      
      <!-- ALL COCKROACH JANTA PARTY WALE PAGES & ALIASES DIRECTORY BAND -->
      <div style="margin-top: 1rem; padding: 1rem 1.25rem; background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 14px; text-align: left;">
        <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #fbbf24; font-weight: 800; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">
          🪳 COCKROACH JANTA PARTY WALE — ALL OFFICIAL PAGES &amp; DOMAIN ALIASES DIRECTORY:
        </span>
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; font-size: 0.78rem;">
          <a href="cockroach-janta-party-wale.html" style="color: #fef08a; text-decoration: underline; font-weight: 800; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.25); border-radius: 6px; border: 1px solid #dc2626;">🪳 Cockroach Janta Party Wale</a>
          <a href="cockroach-janta-party.html" style="color: #fef08a; text-decoration: underline; font-weight: 800; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.25); border-radius: 6px; border: 1px solid #dc2626;">⚡ Cockroach Janta Party</a>
          <a href="cockroach-janata-party.html" style="color: #fef08a; text-decoration: underline; font-weight: 800; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.25); border-radius: 6px; border: 1px solid #dc2626;">🔥 Cockroach Janata Party</a>
          <a href="cocroach-janata-party.html" style="color: #fef08a; text-decoration: underline; font-weight: 800; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.25); border-radius: 6px; border: 1px solid #dc2626;">🌐 Cocroach Janata Party</a>
          <a href="cjp.html" style="color: #fef08a; text-decoration: underline; font-weight: 800; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.25); border-radius: 6px; border: 1px solid #dc2626;">📌 CJP Portal</a>
          <a href="dimagi-naxal.html" style="color: #fca5a5; text-decoration: underline; font-weight: 800; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.25); border-radius: 6px; border: 1px solid #dc2626;">🧠 Dimagi Naxal Explainer</a>
          <a href="vision.html" style="color: #bae6fd; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(2,132,199,0.2); border-radius: 6px;">👁️ Vision</a>
          <a href="manifesto.html" style="color: #bae6fd; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(2,132,199,0.2); border-radius: 6px;">📜 Manifesto</a>
          <a href="articles.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">📰 Articles</a>
          <a href="gallery.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">🖼️ Gallery</a>
          <a href="tracker.html" style="color: #c084fc; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(147,51,234,0.2); border-radius: 6px;">📊 Tracker</a>
          <a href="protests.html" style="color: #7dd3fc; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(3,105,161,0.2); border-radius: 6px;">🚨 Protests</a>
          <a href="topics.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">🔥 Topics</a>
          <a href="memes.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">🪳 Memes</a>
          <a href="issues.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">📋 Issues</a>
          <a href="quotes.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">💬 Quotes</a>
          <a href="join.html" style="color: #fca5a5; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.2); border-radius: 6px;">✊ Join Swarm</a>
          <a href="members.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">👥 Members</a>
          <a href="card.html" style="color: #fca5a5; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.2); border-radius: 6px;">💳 Member Card</a>
          <a href="raise-issue.html" style="color: #fca5a5; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.2); border-radius: 6px;">📢 Raise Voice</a>
          <a href="leave.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">⚙️ Leave Swarm</a>
          <a href="donate.html" style="color: #fef08a; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">💚 Support Dev</a>
          <a href="community-guidelines.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">📜 Community Rules</a>
          <a href="protest-guidelines.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">📢 Protest Rules</a>
          <a href="bitchat-guidelines.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">🔐 BitChat Rules</a>
          <a href="offline.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">📡 Offline Mesh</a>
          <a href="transparency.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">⚖️ Transparency</a>
          <a href="privacy.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">🔒 Privacy</a>
          <a href="terms.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">⚖️ Terms</a>
          <a href="disclaimer.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">⚠️ Disclaimer</a>
          <a href="cookies.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">🍪 Cookies</a>
          <a href="editorial-policy.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">📰 Editorial IP</a>
          <a href="refund-policy.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">💳 Refunds</a>
          <a href="support-policy.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">💻 Dev Support SLA</a>
          <a href="accessibility.html" style="color: #94a3b8; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(255,255,255,0.1); border-radius: 6px;">♿ Accessibility</a>
          <a href="jharkhand-protest.html" style="color: #fca5a5; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.2); border-radius: 6px;">🔥 Jharkhand Siege</a>
          <a href="school-thik-karo.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">🏫 School Thik Karo</a>
          <a href="neet-audit.html" style="color: #c084fc; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(147,51,234,0.2); border-radius: 6px;">💻 NEET Server Audit</a>
          <a href="faq.html" style="color: #bae6fd; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(2,132,199,0.2); border-radius: 6px;">❓ CJP FAQ</a>
          <a href="delhi-chapter.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">🏛️ Delhi Swarm</a>
          <a href="bihar-chapter.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">🔥 Bihar Swarm</a>
          <a href="maharashtra-chapter.html" style="color: #fde047; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(234,179,8,0.2); border-radius: 6px;">🚩 Maharashtra Swarm</a>
          <a href="bitchat.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">🔐 BitChat P2P</a>
          <a href="parody-history.html" style="color: #c084fc; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(147,51,234,0.2); border-radius: 6px;">📖 Parody History</a>
          <a href="anthem.html" style="color: #fca5a5; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(220,38,38,0.2); border-radius: 6px;">🎵 CJP Anthem</a>
          <a href="press.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">📺 Press Kit</a>
          <a href="contact.html" style="color: #86efac; text-decoration: underline; font-weight: 700; padding: 0.2rem 0.5rem; background: rgba(22,163,74,0.2); border-radius: 6px;">📩 Contact Bureau</a>
        </div>
      </div>

      <p style="margin-top: 0.85rem; font-size: 0.76rem; color: rgba(255,255,255,0.75);">Sources: public press &amp; Wikipedia · Not an ECI-registered political party · Protected under Art. 19(1)(a)</p>
    </div>
    <div style="background: rgba(0,0,0,0.4); border-top: 1px solid rgba(255,255,255,0.08); padding: 0.85rem 1.25rem; font-size: 0.72rem; color: rgba(255,255,255,0.65); text-align: center; line-height: 1.5; font-family: var(--font-body);">
      <strong>Legal Notice &amp; Disclaimer:</strong> Cockroach Janta Party Wale (CJP) is a satirical political parody and civic youth movement. It is NOT an ECI-registered political party, does not field election candidates, and does not collect electoral funds. All content is protected under Article 19(1)(a) of the Constitution of India. Voluntary tips are for website development &amp; server hosting only.
    </div>
  </footer>
  <div class="protest-mini-widget" id="protestMiniWidget">
    <button type="button" class="widget-close" id="protestWidgetClose" aria-label="Close float widget">×</button>
    <div class="widget-badge" style="font-family: var(--font-mono); font-size: 0.6rem; font-weight: 800; color: #dc2626; text-transform: uppercase; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
      <span style="width: 7px; height: 7px; background: #dc2626; border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite;"></span>
      ✊ RHA MOVEMENT · 100% MERITOCRACY
    </div>
    <div class="widget-body" id="openPosterModalBtn" style="display: flex; gap: 0.75rem; align-items: center; cursor: pointer;">
      <img src="assets/img/cjp/cjp-aarakshan-hatao-poster.png" alt="Reservation Hatao Bring Meritocracy RHA Poster" width="70" height="90" style="object-fit: cover; border-radius: 8px; border: 1px solid rgba(220,38,38,0.5); flex-shrink: 0;" loading="eager">
      <div class="widget-info">
        <strong style="font-family: var(--font-display); font-size: 0.92rem; color: #fff; line-height: 1.15; display: block;">RESERVATION HATAO, BRING MERITOCRACY!</strong>
        <p style="font-size: 0.72rem; color: rgba(255,255,255,0.85); margin: 0.2rem 0 0.35rem; line-height: 1.25;">RHA 28-State Student March · Delhi</p>
        <span class="btn-mini" style="font-family: var(--font-mono); font-size: 0.62rem; font-weight: 800; color: #fbbf24; text-transform: uppercase;">View RHA Poster &amp; Portal →</span>
      </div>
    </div>
  </div>
  <button type="button" class="live-chat swarm-chat-btn" id="liveChat" aria-label="Open CJP Swarm Chat" style="position: fixed !important; right: 1.1rem !important; bottom: 1.1rem !important; z-index: 9997 !important; background: #17120c !important; border: 2px solid #ca8a04 !important; border-radius: 999px !important; padding: 0.55rem 1.15rem !important; display: inline-flex !important; align-items: center !important; gap: 0.55rem !important; color: #fbbf24 !important; font-family: var(--font-mono) !important; font-size: 0.85rem !important; font-weight: 900 !important; letter-spacing: 0.05em !important; box-shadow: 0 10px 30px rgba(202, 138, 4, 0.45), 0 0 20px rgba(220, 38, 38, 0.25) !important; cursor: pointer !important;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    <span>SWARM CHAT</span>
    <span style="width: 8px; height: 8px; background: #22c55e; border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite; box-shadow: 0 0 8px #22c55e;"></span>
  </button>
  <div class="chat-panel" id="chatPanel" hidden style="position: fixed !important; right: 1.1rem !important; bottom: 4.8rem !important; width: min(380px, calc(100vw - 2rem)); background: #17120c !important; border: 2.5px solid #dc2626 !important; border-radius: 18px !important; box-shadow: 0 20px 60px rgba(0,0,0,0.85), 0 0 30px rgba(220,38,38,0.3) !important; z-index: 9999 !important; overflow: hidden;">
    <div class="chat-head" style="background: linear-gradient(135deg, #dc2626 0%, #9f1239 100%) !important; color: #fff !important; padding: 0.85rem 1rem !important; display: flex !important; align-items: center !important; justify-content: space-between !important;">
      <div>
        <strong style="font-family: var(--font-display); font-size: 1rem; color: #fff; display: flex; align-items: center; gap: 0.4rem;">
          <span>💬</span> CJP Swarm Encrypted Chat
        </strong>
        <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #fef08a; font-weight: 800; display: block; margin-top: 0.15rem;">
          🟢 30,482,910 Swarm Members Online
        </span>
      </div>
      <button type="button" id="chatClose" aria-label="Close Chat" style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.3); color: #fff; width: 28px; height: 28px; border-radius: 50%; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; justify-content: center;">×</button>
    </div>

    <!-- Swarm Channel Selector Tabs -->
    <div style="display: flex; gap: 0.35rem; padding: 0.5rem 0.75rem; background: #221a14; border-bottom: 1px solid rgba(255,255,255,0.1); overflow-x: auto; font-family: var(--font-mono); font-size: 0.7rem;">
      <button type="button" class="swarm-tab active" style="background: #dc2626; color: #fff; border: 0; padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 800; cursor: pointer; white-space: nowrap;">#general-swarm</button>
      <button type="button" class="swarm-tab" style="background: rgba(255,255,255,0.08); color: #fbbf24; border: 0; padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 800; cursor: pointer; white-space: nowrap;">#rha-meritocracy</button>
      <button type="button" class="swarm-tab" style="background: rgba(255,255,255,0.08); color: #fbbf24; border: 0; padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 800; cursor: pointer; white-space: nowrap;">#jharkhand-siege</button>
    </div>

    <div class="chat-body" style="padding: 0.85rem; max-height: 280px; overflow-y: auto; background: #120e0a; color: #fff;">
      <p style="font-size: 0.75rem; color: #fbbf24; margin: 0 0 0.6rem; background: rgba(217,119,6,0.2); padding: 0.4rem 0.65rem; border-radius: 6px; border: 1px solid rgba(217,119,6,0.4); font-family: var(--font-mono);">
        🔐 Encrypted BitChat P2P Mesh Active · All messages self-destruct in 24 hours.
      </p>
      <div class="chat-messages" id="chatMessages" style="display: flex; flex-direction: column; gap: 0.55rem;">
        <div style="background: rgba(255,255,255,0.06); padding: 0.55rem 0.75rem; border-radius: 8px; border-left: 3px solid #dc2626;">
          <strong style="font-size: 0.74rem; color: #fca5a5; font-family: var(--font-mono);">Simran (Bhopal) · 12:18 PM</strong>
          <p style="font-size: 0.84rem; margin: 0.2rem 0 0; color: #fff;">Joined Cockroach Janta Party! 100% Meritocracy Act zindabad! 🪳</p>
        </div>
        <div style="background: rgba(255,255,255,0.06); padding: 0.55rem 0.75rem; border-radius: 8px; border-left: 3px solid #16a34a;">
          <strong style="font-size: 0.74rem; color: #86efac; font-family: var(--font-mono);">Kunal (Bengaluru) · 12:19 PM</strong>
          <p style="font-size: 0.84rem; margin: 0.2rem 0 0; color: #fff;">#MainBhiCockroach digital member card generated! 💳</p>
        </div>
        <div style="background: rgba(255,255,255,0.06); padding: 0.55rem 0.75rem; border-radius: 8px; border-left: 3px solid #d97706;">
          <strong style="font-size: 0.74rem; color: #fef08a; font-family: var(--font-mono);">Ranchi Volunteer Desk · 12:21 PM</strong>
          <p style="font-size: 0.84rem; margin: 0.2rem 0 0; color: #fff;">Solidarity march at Jaipal Singh Munda Stadium starting at 2 PM!</p>
        </div>
      </div>
    </div>

    <form class="chat-form" id="chatForm" style="display: flex; border-top: 1px solid rgba(255,255,255,0.15); background: #1c1610; padding: 0.5rem;">
      <input type="text" id="chatInput" placeholder="Type message to the swarm…" autocomplete="off" required aria-label="Swarm Message" style="flex: 1; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.5); color: #fff; padding: 0.55rem 0.75rem; border-radius: 8px; font-size: 0.82rem;">
      <button type="submit" style="background: #dc2626; color: #fff; border: 0; padding: 0.55rem 0.9rem; border-radius: 8px; font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; margin-left: 0.4rem; cursor: pointer;">Send</button>
    </form>
  </div>
  <a href="contact.html" id="waLeadBtn" aria-label="Contact Bureau Lead" class="cjp-wa-floating-btn" style="position: fixed !important; left: 1.1rem !important; bottom: 1.1rem !important; z-index: 9998 !important;">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.008 2.2c-5.448 0-9.879 4.43-9.883 9.879-.001 1.97.513 3.892 1.492 5.59l.327.568-1.073 3.92 4.01-1.053.551.327c1.626.966 3.486 1.477 5.393 1.478 5.451 0 9.883-4.432 9.887-9.885.002-2.64-1.02-5.122-2.879-6.983C17.18 3.22 14.7 2.2 12.008 2.2zm5.424 13.064c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/></svg>
    <span>💬 Contact Bureau</span>
  </a>
  <button type="button" id="cacheClearBtn" aria-label="Clear Cache and Hard Refresh" title="Clear Cache &amp; Hard Refresh" style="position: fixed; top: 1.1rem; right: 1.1rem; z-index: 999999; width: 42px; height: 42px; border-radius: 50%; background: #dc2626; color: #ffffff; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 8px 24px rgba(220,38,38,0.55); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1.0)'">
    <svg class="cache-refresh-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
  </button>`;

  const mountTop = document.getElementById("site-top");
  const mountBottom = document.getElementById("site-bottom");
  if (mountTop) mountTop.outerHTML = top;
  if (mountBottom) mountBottom.outerHTML = bottom;

  // Instant Header & Language Dropdown Interactive Handlers
  (function bindHeaderEvents() {
    const navToggle = document.getElementById("navToggle");
    const headerInner = document.querySelector(".header-inner");
    const mainNav = document.getElementById("mainNav");
    const langSelect = document.getElementById("langSelect");

    if (navToggle && headerInner) {
      navToggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = headerInner.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });

      if (mainNav) {
        mainNav.querySelectorAll("a").forEach(function (a) {
          a.addEventListener("click", function () {
            headerInner.classList.remove("nav-open");
            navToggle.setAttribute("aria-expanded", "false");
          });
        });
      }

      const siteHeader = document.querySelector(".site-header");
      if (siteHeader) {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            siteHeader.classList.add("is-scrolled");
          } else {
            siteHeader.classList.remove("is-scrolled");
          }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
      }
    }

    if (langSelect) {
      const btn = langSelect.querySelector(".lang-btn");
      const menu = langSelect.querySelector(".lang-menu");

      if (btn && menu) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const isHidden = menu.hasAttribute("hidden") || menu.style.display === "none";
          if (isHidden) {
            menu.removeAttribute("hidden");
            menu.style.display = "flex";
            btn.setAttribute("aria-expanded", "true");
          } else {
            menu.setAttribute("hidden", "");
            menu.style.display = "none";
            btn.setAttribute("aria-expanded", "false");
          }
        });

        menu.querySelectorAll("[role=option]").forEach(function (opt) {
          opt.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            const targetOpt = e.target.closest("[data-lang]") || opt;
            const lang = targetOpt.getAttribute("data-lang") || "en";

            menu.querySelectorAll("[role=option]").forEach(function (o) {
              o.setAttribute("aria-selected", "false");
            });
            targetOpt.setAttribute("aria-selected", "true");

            const labelSpan = btn.querySelector("span");
            if (labelSpan) {
              labelSpan.textContent = lang === "hi" ? "हिन्दी" : "ENGLISH";
            }

            menu.setAttribute("hidden", "");
            menu.style.display = "none";
            btn.setAttribute("aria-expanded", "false");

            if (typeof window.applyCjpLanguage === "function") {
              window.applyCjpLanguage(lang);
            }
          });
        });
      }
    }

    document.addEventListener("click", function (e) {
      if (headerInner && !headerInner.contains(e.target)) {
        headerInner.classList.remove("nav-open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      }
      if (langSelect && !langSelect.contains(e.target)) {
        const menu = langSelect.querySelector(".lang-menu");
        const btn = langSelect.querySelector(".lang-btn");
        if (menu) {
          menu.setAttribute("hidden", "");
          menu.style.display = "none";
        }
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  })();

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
    if (page === "donate") return;

    const sec2HtmlContent = `
        <div style="max-width: var(--max); margin: 0 auto;">
          
          <!-- Top Header -->
          <div style="text-align: center; max-width: 760px; margin: 0 auto 2rem;">
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(220, 38, 38, 0.1); border: 1.5px solid #dc2626; color: #b91c1c; padding: 0.35rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.75rem;">
              <span style="width: 8px; height: 8px; background: #dc2626; border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite;"></span>
              <span>⚡ VOLUNTARY DEVELOPER &amp; WEBSITE SUPPORT (SECTION 2)</span>
            </div>
            <h2 style="font-family: var(--font-display); font-size: clamp(1.6rem, 4vw, 2.4rem); color: var(--ink); margin: 0 0 0.5rem; line-height: 1.2;">
              Scan &amp; Pay via UPI · <em>Instant Verification Alert</em>
            </h2>
            <p style="font-size: 0.98rem; color: var(--muted); line-height: 1.6; margin: 0;">
              This platform is independently designed, coded, hosted, and updated 24/7. Your voluntary tips directly fund domain hosting, server infrastructure, and daily news updates.
            </p>
          </div>

          <!-- Main Card Container (2 Columns) -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr)); gap: 1.75rem; max-width: 960px; margin: 0 auto; background: #ffffff; padding: clamp(1.25rem, 3vw, 2rem); border: 2.5px solid #dc2626; border-radius: 24px; box-shadow: 0 20px 50px rgba(220, 38, 38, 0.15); box-sizing: border-box;">
            
            <!-- Column 1: QR Code & Voluntary Support Tiers -->
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
              
              <!-- UPI QR Code Frame -->
              <div style="position: relative; border-radius: 16px; overflow: hidden; border: 2.5px dashed #dc2626; padding: 0.75rem; background: #fffcf8; width: 100%; max-width: 240px; margin: 0 auto 0.75rem; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
                <img src="assets/img/upi-qr.webp" alt="Scan to Pay via UPI" width="220" height="220" loading="lazy" style="display: block; border-radius: 10px; width: 100%; height: auto;">
              </div>
              
              <p style="font-family: var(--font-display); font-size: 0.92rem; font-weight: 800; color: var(--ink); margin: 0 0 0.25rem;">
                Scan with Any UPI App (GPay / PhonePe / Paytm / BHIM)
              </p>
              <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #dc2626; font-weight: 800; background: #fef2f2; border: 1px solid #fca5a5; padding: 0.25rem 0.65rem; border-radius: 8px; margin-bottom: 1.25rem; display: inline-block;">
                Remark / Description: <code style="font-weight: 900; color: #b91c1c;">CJP</code>
              </div>

              <!-- Structured Support Tiers Format (Tea, Snacks, Lunch, Dinner, Server) -->
              <div style="width: 100%; background: linear-gradient(135deg, #fffcf8 0%, #fff7ed 100%); border: 1.5px solid #fdba74; border-radius: 14px; padding: 1rem; text-align: left; box-sizing: border-box; margin-bottom: 1rem;">
                <strong style="font-family: var(--font-display); font-size: 0.88rem; color: #c2410c; display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.65rem;">
                  <span>☕</span> Voluntary Support Tiers &amp; Format
                </strong>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.78rem; font-family: var(--font-mono);">
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.45rem 0.6rem; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <span>☕ Tea &amp; Chai</span>
                    <strong style="color: #ea580c;">₹20 – ₹50</strong>
                  </div>
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.45rem 0.6rem; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <span>🍕 Snacks &amp; Pizza</span>
                    <strong style="color: #ea580c;">₹100 – ₹200</strong>
                  </div>
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.45rem 0.6rem; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <span>🍔 Lunch &amp; Dinner</span>
                    <strong style="color: #ea580c;">₹250 – ₹500</strong>
                  </div>
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.45rem 0.6rem; border-radius: 8px; display: flex; align-items: center; justify-content: space-between;">
                    <span>💻 Server &amp; Infra</span>
                    <strong style="color: #ea580c;">₹1,000+</strong>
                  </div>
                </div>
                <p style="font-size: 0.72rem; color: #9a3412; margin: 0.5rem 0 0; line-height: 1.35; font-style: italic;">
                  *Every single contribution directly empowers daily site maintenance and updates.
                </p>
              </div>

              <!-- Legal Compliance & Policy Disclosures -->
              <div style="width: 100%; background: #fef2f2; border: 1px solid #fecdd3; border-radius: 12px; padding: 0.75rem 0.9rem; font-size: 0.74rem; color: #9f1239; line-height: 1.5; text-align: left; box-sizing: border-box;">
                <strong style="display: block; font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase; margin-bottom: 0.3rem; color: #dc2626;">
                  ⚖️ LEGAL &amp; POLICY DISCLOSURES:
                </strong>
                • <strong>Voluntary Tip:</strong> Personal contribution for website hosting &amp; dev labor.<br>
                • <strong>Not NGO / Charity:</strong> No 80G tax exemption certificates issued.<br>
                • <strong>Not Political Contribution:</strong> Not an ECI-registered political party.<br>
                • <strong>Free Speech Protection:</strong> Civic satire protected under Art. 19(1)(a).
              </div>

            </div>

            <!-- Column 2: Instant Payment Alert Verification Form -->
            <div style="text-align: left; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
              <div>
                <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: #ffffff; padding: 1rem 1.15rem; border-radius: 14px; margin-bottom: 1.25rem; border: 1.5px solid #334155;">
                  <strong style="font-family: var(--font-display); font-size: 1.05rem; color: #fef08a; display: block; margin-bottom: 0.25rem;">
                    📩 Paid via UPI? Send Instant Verification Alert
                  </strong>
                  <p style="font-size: 0.82rem; color: rgba(255,255,255,0.85); margin: 0; line-height: 1.45;">
                    After completing your UPI payment, submit your details below. Real-time verification confirmation will be sent directly to the developer desk!
                  </p>
                </div>

                <form class="sec2-payment-form" style="display: flex; flex-direction: column; gap: 0.85rem; width: 100%; box-sizing: border-box;">
                  <div>
                    <label style="display: block; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: var(--ink); margin-bottom: 0.3rem; text-transform: uppercase;">
                      Your Full Name <span style="color: #dc2626;">*</span>
                    </label>
                    <input type="text" name="payer_name" required placeholder="e.g. Rahul Sharma" style="width: 100%; box-sizing: border-box; padding: 0.65rem 0.85rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.88rem; background: #ffffff;">
                  </div>

                  <div>
                    <label style="display: block; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: var(--ink); margin-bottom: 0.3rem; text-transform: uppercase;">
                      Email Address or Phone No. <span style="color: #dc2626;">*</span>
                    </label>
                    <input type="text" name="payer_contact" required placeholder="e.g. rahul@example.com or 9876543210" style="width: 100%; box-sizing: border-box; padding: 0.65rem 0.85rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.88rem; background: #ffffff;">
                  </div>

                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; width: 100%; box-sizing: border-box;">
                    <div>
                      <label style="display: block; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: var(--ink); margin-bottom: 0.3rem; text-transform: uppercase;">
                        Amount Paid (₹) <span style="color: #dc2626;">*</span>
                      </label>
                      <input type="number" name="amount_paid" required placeholder="₹ 100" style="width: 100%; box-sizing: border-box; padding: 0.65rem 0.75rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.88rem; background: #ffffff;">
                    </div>
                    <div>
                      <label style="display: block; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: var(--ink); margin-bottom: 0.3rem; text-transform: uppercase;">
                        UTR / Reference No.
                      </label>
                      <input type="text" name="utr_number" placeholder="12-digit UTR No." style="width: 100%; box-sizing: border-box; padding: 0.65rem 0.75rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.88rem; background: #ffffff;">
                    </div>
                  </div>

                  <button type="submit" class="btn btn-solid" style="width: 100%; box-sizing: border-box; font-size: 0.88rem; padding: 0.75rem; text-align: center; margin-top: 0.35rem; background: #dc2626; border-color: #dc2626; color: #ffffff; font-weight: 800; border-radius: 10px; box-shadow: 0 8px 24px rgba(220, 38, 38, 0.35); cursor: pointer;">
                    📩 Submit Instant Payment Alert →
                  </button>
                  <p class="form-success payment-alert-msg" hidden style="font-size: 0.82rem; color: #16a34a; margin-top: 0.4rem; text-align: center; font-weight: 700; background: #dcfce7; padding: 0.5rem; border-radius: 6px;"></p>
                </form>
              </div>

              <div style="margin-top: 1rem; padding-top: 0.85rem; border-top: 1px dashed var(--line); font-size: 0.75rem; color: var(--muted); display: flex; justify-content: space-between; align-items: center;">
                <span>Need receipt help? <a href="contact.html" style="color: #dc2626; font-weight: 700; text-decoration: underline;">Contact Bureau</a></span>
                <a href="terms.html#payment-policy" style="color: var(--muted); text-decoration: underline;">Payment Policy</a>
              </div>
            </div>

          </div>

        </div>
    `;

    const existingBand = document.getElementById("sec2-qr-scanner-band");
    if (existingBand) {
      existingBand.innerHTML = sec2HtmlContent;
      return;
    }

    const firstSection = document.querySelector("main section, section, .hero-home, .hero, .page-header");
    if (firstSection) {
      const sec2Band = document.createElement("section");
      sec2Band.id = "sec2-qr-scanner-band";
      sec2Band.className = "section-band";
      sec2Band.style.cssText = "background: linear-gradient(180deg, #fdfbf7 0%, #f4ebd7 100%); border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); padding: 3rem 1.25rem; margin: 2.5rem 0;";
      sec2Band.innerHTML = sec2HtmlContent;
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
      <div style="background: #ffffff; border: 2px solid #dc2626; border-radius: 22px; max-width: 520px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 60px rgba(0,0,0,0.6); position: relative; padding: 1.5rem; text-align: center; animation: rise 0.3s var(--ease);">
        <button type="button" id="closePosterModal" style="position: absolute; top: 1rem; right: 1rem; width: 36px; height: 36px; border-radius: 50%; border: 0; background: #dc2626; color: #fff; font-size: 1.4rem; cursor: pointer; display: grid; place-items: center; z-index: 10;">×</button>
        <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; color: #dc2626; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">✊ OFFICIAL RHA MOVEMENT POSTER</span>
        <h2 style="font-family: var(--font-display); font-size: 1.5rem; margin: 0 0 0.5rem; color: var(--ink);">Reservation Hatao, Bring Meritocracy!</h2>
        <div style="border-radius: 14px; overflow: hidden; border: 1.5px solid #dc2626; box-shadow: 0 12px 32px rgba(220,38,38,0.2); margin-bottom: 1.25rem; max-height: 380px;">
          <img src="assets/img/cjp/cjp-aarakshan-hatao-poster.png" alt="Reservation Hatao Bring Meritocracy Official RHA Poster" style="width: 100%; height: 100%; object-fit: contain; display: block; background: #0f172a;">
        </div>
        <p style="font-size: 0.92rem; line-height: 1.55; color: var(--muted); margin-bottom: 1.25rem;">
          <strong>"Remove Reservation, Bring Meritocracy! 100% Meritocracy Movement."</strong><br>
          Join India's 28-state student movement demanding 100% Merit-Based entrance exams (NEET, JEE, UPSC, SSC) and economic need-based financial aid.
        </p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="rha.html" class="btn btn-solid" style="flex: 1; text-align: center; background: #dc2626; border-color: #dc2626; color: #fff;">✊ Explore RHA Portal</a>
          <a href="assets/img/cjp/cjp-aarakshan-hatao-poster.png" target="_blank" download class="btn btn-ghost" style="flex: 1; text-align: center;">📥 Download RHA Poster</a>
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

  // Stats toggler and smooth animation logic
  const statsToggle = document.getElementById("statsToggle");
  const statsPanel = document.getElementById("statsPanel");
  const statsClose = document.getElementById("statsClose");
  if (statsToggle && statsPanel) {
    statsToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      statsPanel.classList.toggle("is-open");
    });
  }
  if (statsClose && statsPanel) {
    statsClose.addEventListener("click", (e) => {
      e.stopPropagation();
      statsPanel.classList.remove("is-open");
    });
  }
  // WhatsApp Click Tracking & Lead Analytics
  const waLeadBtn = document.getElementById("waLeadBtn");
  if (waLeadBtn) {
    waLeadBtn.addEventListener("click", () => {
      let leads = Number(localStorage.getItem("cjp_wa_leads_count") || "0") + 1;
      localStorage.setItem("cjp_wa_leads_count", String(leads));
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "Contact",
          event_label: "WhatsApp Floating Lead Button",
          value: 1
        });
      }
    });
  }


  // Instant Cache Purge & Hard Refresh Event Handler
  const cacheClearBtn = document.getElementById("cacheClearBtn");
  if (cacheClearBtn) {
    cacheClearBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const icon = cacheClearBtn.querySelector("svg");
      if (icon) icon.classList.add("cjp-spinning");
      cacheClearBtn.style.background = "#16a34a";
      cacheClearBtn.title = "Purging Cache & Hard Refreshing...";
      try {
        localStorage.clear();
        sessionStorage.clear();
        if ('caches' in window) {
          caches.keys().then(function(names) {
            names.forEach(function(name) {
              caches.delete(name);
            });
          });
        }
        if (navigator.serviceWorker) {
          navigator.serviceWorker.getRegistrations().then(function(registrations) {
            registrations.forEach(function(r) { r.unregister(); });
          });
        }
      } catch (err) {
        console.log("Cache purge error:", err);
      }
      setTimeout(function () {
        window.location.href = window.location.pathname + "?cache_buster=" + Date.now();
      }, 350);
    });
  }

  // Real-Time Live Stats Engine
  const initStatsEngine = () => {
    // 1. Total Pageviews counter
    let localHits = Number(localStorage.getItem("cjp_total_hits") || "248919");
    localHits += 1;
    localStorage.setItem("cjp_total_hits", String(localHits));

    // 2. Today's Visits counter
    const todayKey = "cjp_today_date";
    const todayHitsKey = "cjp_today_hits";
    const currentDate = new Date().toDateString();
    let todayHits = Number(localStorage.getItem(todayHitsKey) || "18490");
    if (localStorage.getItem(todayKey) !== currentDate) {
      localStorage.setItem(todayKey, currentDate);
      todayHits = 18490;
    }
    todayHits += 1;
    localStorage.setItem(todayHitsKey, String(todayHits));

    const hitCountEl = document.getElementById("hitCount");
    const todayCountEl = document.getElementById("todayCount");
    const liveSwarmEl = document.getElementById("liveSwarmCount");

    const renderHits = () => {
      if (hitCountEl) hitCountEl.innerText = localHits.toLocaleString("en-IN") + "+";
      if (todayCountEl) todayCountEl.innerText = todayHits.toLocaleString("en-IN") + "+";
    };
    renderHits();

    // 3. Dynamic Real-Time Increment Simulation (every 2.8s)
    setInterval(() => {
      const increment = Math.floor(Math.random() * 3) + 1; // +1 to +3
      localHits += increment;
      todayHits += increment;
      localStorage.setItem("cjp_total_hits", String(localHits));
      localStorage.setItem(todayHitsKey, String(todayHits));
      
      renderHits();
      
      // Counter pulse highlight animation
      if (hitCountEl) {
        hitCountEl.classList.remove("stat-counter-animate");
        void hitCountEl.offsetWidth; // trigger reflow
        hitCountEl.classList.add("stat-counter-animate");
      }
    }, 2800);

    // 4. Dynamic Live Active Swarm Fluctuation (every 2.2s)
    const updateSwarm = () => {
      if (!liveSwarmEl) return;
      const base = 265 + Math.floor(Math.random() * 75); // 265 to 340 online
      liveSwarmEl.innerHTML = `<span class="stats-live-pulse-dot"></span> ${base} online`;
    };
    updateSwarm();
    setInterval(updateSwarm, 2200);
  };
  initStatsEngine();

  if (S.url && !document.getElementById("ld-org")) {
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: S.legalName,
      alternateName: S.shortName,
      url: S.url,
      logo: `${S.url}/assets/img/logo.webp`,
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


