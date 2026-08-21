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
    ["tracker.html", "Tracker", "📊"],
    ["members.html", "Members", "👥"],
    ["gallery.html", "Gallery", "framed_picture"],
    ["contact.html", "Contact", "📩"],
  ];

  const active = (file) => (page === file.replace(".html", "").replace(/^\//, "") ? " is-active" : "");

  // 1,000 Indian Joined Members Generator for Live Marquee Ticker
  const fnList = [
    "Parmatam", "Ravindra", "Mangal", "Mahima", "Devendra", "Anoop", "Imran", "Raghuvir", "Chandrashekhar",
    "Saurav", "Ashutosh", "Ajinkya", "Vaishnavi", "Ratna", "Aafreen", "Yogesh", "Ankit", "Pankaj", "Nilesh",
    "Kavita", "Preeti", "Alok", "Suraj", "Tushar", "Mayank", "Nitin", "Deepika", "Swati", "Shweta", "Prashant",
    "Sameer", "Faizan", "Arjun", "Kabir", "Tanvi", "Aarav", "Ananya", "Vihaan", "Aditya", "Ishaan", "Rahul",
    "Priya", "Amit", "Neha", "Rohan", "Sneha", "Vikram", "Karan", "Siddharth", "Pooja", "Varun", "Riya",
    "Kunal", "Deepak", "Suresh", "Manish", "Sunita", "Rajesh", "Kiran", "Abhishek", "Dev", "Divya", "Gaurav"
  ];
  const lnList = [
    "Ras", "Pawar", "Chavhan", "Sharma", "Gupta", "Khan", "Sahani", "Badekar", "Das", "Ranka", "Shinde",
    "Baliyan", "Nawaz", "Mallangi", "Singh", "Gaur", "Deshpande", "Ingale", "Bhardwaj", "Verma", "Patel",
    "Kumar", "Shah", "Joshi", "Mehta", "Yadav", "Mishra", "Pandey", "Srivastava", "Chaudhary", "Thakur",
    "Reddy", "Nair", "Rao", "Pillai", "Mukherjee", "Banerjee", "Ghosh", "Dutta", "Kulkarni", "Deshmukh",
    "Patil", "Gowda", "Hegde", "Tripathi", "Tiwari", "Dubey", "Saxena", "Bhatnagar", "Agrawal"
  ];
  const locList = [
    ["FARIDKOT", "PB"], ["VASAI MUMBAI", "MH"], ["YAVATMAL", "MH"], ["MUMBAI", "MH"], ["NOIDA", "UP"],
    ["BARABANKI", "UP"], ["LATUR", "MH"], ["BALLIA", "UP"], ["PATNA", "BR"], ["LUCKNOW", "UP"],
    ["BHOPAL", "MP"], ["JAIPUR", "RJ"], ["BENGALURU", "KA"], ["KOLKATA", "WB"], ["HYDERABAD", "TS"],
    ["CHANDIGARH", "PB"], ["AHMEDABAD", "GJ"], ["PUNE", "MH"], ["RANCHI", "JH"], ["DEHRADUN", "UK"],
    ["GUWAHATI", "AS"], ["BHUBANESWAR", "OD"], ["RAIPUR", "CG"], ["SURAT", "GJ"], ["INDORE", "MP"],
    ["KANPUR", "UP"], ["VARANASI", "UP"], ["AGRA", "UP"], ["GORAKHPUR", "UP"], ["MEERUT", "UP"],
    ["ALLAHABAD", "UP"], ["GAYA", "BR"], ["MUZAFFARPUR", "BR"], ["BHAGALPUR", "BR"], ["AMRITSAR", "PB"],
    ["LUDHIANA", "PB"], ["JALANDHAR", "PB"], ["ROHTAK", "HR"], ["HISAR", "HR"], ["GURUGRAM", "HR"],
    ["FARIDABAD", "HR"], ["NASHIK", "MH"], ["NAGPUR", "MH"], ["AURANGABAD", "MH"], ["SOLAPUR", "MH"],
    ["KOLHAPUR", "MH"], ["THANE", "MH"], ["UDAIPUR", "RJ"], ["JODHPUR", "RJ"], ["KOTA", "RJ"],
    ["AJMER", "RJ"], ["GWALIOR", "MP"], ["JABALPUR", "MP"], ["UJJAIN", "MP"], ["VIJAYAWADA", "AP"],
    ["VISAKHAPATNAM", "AP"], ["COIMBATORE", "TN"], ["MADURAI", "TN"], ["KOCHI", "KL"]
  ];

  const dummyMembers = [];
  for (let i = 0; i < 1000; i++) {
    const fn = fnList[i % fnList.length];
    const ln = lnList[(i * 7 + 3) % lnList.length];
    const loc = locList[(i * 13 + 5) % locList.length];
    const name = `${fn} ${ln}`;
    const initials = (fn[0] + ln[0]).toUpperCase();
    dummyMembers.push({ name, initials, city: loc[0], state: loc[1] });
  }

  const memberPillsHtml = dummyMembers.slice(0, 200).map(m => `
    <div style="display: inline-flex; align-items: center; gap: 0.45rem; background: linear-gradient(135deg, #241c15 0%, #19130e 100%); border: 1.5px solid #443528; padding: 0.28rem 0.75rem 0.28rem 0.35rem; border-radius: 999px; font-family: var(--font-body); font-size: 0.78rem; box-shadow: 0 4px 10px rgba(0,0,0,0.4); flex-shrink: 0; transition: transform 0.2s, border-color 0.2s;">
      <div style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: #ffffff; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 900; display: flex; align-items: center; justify-content: center; border: 1px solid #fbbf24; text-transform: uppercase; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        ${m.initials}
      </div>
      <div style="display: flex; flex-direction: column; text-align: left; line-height: 1.15;">
        <strong style="color: #ffffff; font-size: 0.82rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
          <span>${m.name}</span>
          <span style="font-size: 0.65rem; color: #22c55e;">✔</span>
        </strong>
        <span style="font-family: var(--font-mono); font-size: 0.64rem; color: #fbbf24; font-weight: 800; text-transform: uppercase;">${m.city}, ${m.state}</span>
      </div>
    </div>
  `).join('');

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
      <span>✊ CJP Launches 28-State Student March for 100% Meritocracy</span>
      <span>🏫 SCHOOL THIK KARO: CJP Youth Swarm School Infrastructure Reform Campaign</span>
      <span>🏆 HISTORIC VICTORY: Cabinet Enacts Binding Accord for NEET 3rd-Party Server Audits</span>
      <span>🪳 MAIN BHI COCKROACH: 30 Million Verified Youth Swarm Across India</span>
      <span>🚨 20 AUGUST 2026: CJP Founder Abhijeet Dipke Demands ₹8,452 Cr PM CARES Fund for Village Schools</span>
      <span>⚡ CJP Rejects NDA Offer: 100% Non-Partisan Youth Advocacy</span>
      <span>✊ CJP Launches 28-State Student March for 100% Meritocracy</span>
      <span>🏫 SCHOOL THIK KARO: CJP Youth Swarm School Infrastructure Reform Campaign</span>
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
        <ul class="mobile-nav-list" style="display: flex; align-items: center; gap: 0.55rem; list-style: none; margin: 0; padding: 0; flex-wrap: nowrap; white-space: nowrap; overflow-x: auto; scrollbar-width: none;">
          <li><a href="vision.html" class="${active('vision').trim()}"><span>Vision</span></a></li>
          <li><a href="manifesto.html" class="${active('manifesto').trim()}"><span>Manifesto</span></a></li>
          <li><a href="articles.html" class="${active('articles').trim()}"><span>Articles</span></a></li>
          <li><a href="gallery.html" class="${active('gallery').trim()}"><span>Gallery</span></a></li>
          <li><a href="members.html" class="${active('members').trim()}"><span>Members</span></a></li>
          <li><a href="issues.html" class="${active('issues').trim()}"><span>Issues</span></a></li>
          <li><a href="tracker.html" class="${active('tracker').trim()}"><span>Tracker</span></a></li>
          <li><a href="protests.html" class="${active('protests').trim()}"><span>Protests</span></a></li>
          <li><a href="contact.html" class="${active('contact').trim()}"><span>Contact</span></a></li>
        </ul>
        <div class="mobile-nav-actions">
          <a href="join.html" onclick="event.preventDefault(); if (typeof window.openCjpJoinModal === 'function') { window.openCjpJoinModal('signup'); } else { window.location.href='join.html'; }" class="btn btn-solid btn-wide mobile-cta-join">JOIN Party →</a>
          <a href="donate.html" class="btn btn-solid btn-wide mobile-cta-donate" style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: #ffffff !important; font-weight: 900; border: 1.5px solid #fbbf24;">☕ SUPPORT THE DEV →</a>
        </div>
      </nav>
      <div class="nav-actions header-actions" style="display: flex; align-items: center; gap: 0.35rem; flex-shrink: 0;">
        <div class="lang-select" id="langSelect">
          <button type="button" class="lang-btn" aria-expanded="false" aria-label="Select Language" style="padding: 0.45rem 0.65rem; font-size: 0.75rem;">
            <span>ENGLISH</span> ▾
          </button>
          <div class="lang-menu" hidden role="listbox" aria-label="Languages">
            <button type="button" class="lang-opt" role="option" data-lang="en" aria-selected="true">English</button>
            <button type="button" class="lang-opt" role="option" data-lang="hi" aria-selected="false">हिन्दी</button>
          </div>
        </div>
        <a href="donate.html" class="btn-support-header${active("donate")}" style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: #ffffff !important; font-weight: 900; padding: 0.45rem 0.8rem; border-radius: 999px; white-space: nowrap; font-family: var(--font-mono); font-size: 0.74rem; text-transform: uppercase; text-decoration: none; box-shadow: 0 4px 14px rgba(217, 119, 6, 0.4); border: 1.5px solid #fbbf24; flex-shrink: 0; display: inline-flex; align-items: center; gap: 0.35rem;">☕ SUPPORT THE DEV →</a>
        <a href="join.html" onclick="event.preventDefault(); if (typeof window.openCjpJoinModal === 'function') { window.openCjpJoinModal('signup'); } else { window.location.href='join.html'; }" class="btn-pill" style="background: #dc2626; color: #ffffff; font-weight: 800; padding: 0.5rem 0.85rem; border-radius: 999px; white-space: nowrap; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; text-decoration: none; box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4); flex-shrink: 0;">JOIN Party →</a>
        <a href="raise-issue.html" class="btn btn-solid" style="background: #ea580c; color: #ffffff; font-weight: 800; padding: 0.5rem 0.85rem; border-radius: 999px; white-space: nowrap; font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; text-decoration: none; flex-shrink: 0;">RAISE AN ISSUE →</a>
      </div>
    </div>
  </header>

  <!-- Live Swarm Members Joined Marquee Ticker Bar (Ultra Premium Dark Glassmorphism) -->
  <div class="cjp-live-members-strip" style="background: linear-gradient(135deg, #18120c 0%, #0e0a07 100%); border-bottom: 2px solid #ca8a04; padding: 0.4rem 0.75rem; overflow: hidden; display: flex; align-items: center; gap: 0.85rem; user-select: none; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <!-- Counter Stats Badge Box -->
    <div style="background: linear-gradient(135deg, #241b14 0%, #17120c 100%); color: #FFFDF7; border-radius: 10px; border: 1.5px solid #d97706; padding: 0.35rem 0.75rem; display: flex; align-items: center; gap: 0.85rem; flex-shrink: 0; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; box-shadow: 0 4px 16px rgba(217, 119, 6, 0.25);">
      <div style="display: flex; align-items: center; gap: 0.35rem; margin-right: 0.15rem;">
        <span style="width: 7px; height: 7px; background: #22c55e; border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite; box-shadow: 0 0 8px #22c55e;"></span>
        <span style="font-size: 0.62rem; color: #fbbf24; text-transform: uppercase; font-weight: 900; letter-spacing: 0.05em;">LIVE SWARM</span>
      </div>
      <div style="width: 1px; height: 18px; background: rgba(255,255,255,0.18);"></div>
      <div style="display: flex; flex-direction: column; align-items: center; line-height: 1;">
        <span style="color: #fbbf24; font-size: 0.95rem; font-weight: 900;" id="tickerTodayCount">219</span>
        <span style="font-size: 0.55rem; color: #a8a29e; text-transform: uppercase; margin-top: 0.15rem;">TODAY</span>
      </div>
      <div style="width: 1px; height: 18px; background: rgba(255,255,255,0.18);"></div>
      <div style="display: flex; flex-direction: column; align-items: center; line-height: 1;">
        <span style="color: #ffffff; font-size: 0.95rem; font-weight: 900;" id="tickerWeekCount">14.7k</span>
        <span style="font-size: 0.55rem; color: #a8a29e; text-transform: uppercase; margin-top: 0.15rem;">WEEK</span>
      </div>
      <div style="width: 1px; height: 18px; background: rgba(255,255,255,0.18);"></div>
      <div style="display: flex; flex-direction: column; align-items: center; line-height: 1;">
        <span style="color: #ffffff; font-size: 0.95rem; font-weight: 900;" id="tickerMonthCount">68.0k</span>
        <span style="font-size: 0.55rem; color: #a8a29e; text-transform: uppercase; margin-top: 0.15rem;">MONTH</span>
      </div>
      <div style="width: 1px; height: 18px; background: rgba(255,255,255,0.18);"></div>
      <div style="display: flex; flex-direction: column; align-items: center; line-height: 1;">
        <span style="color: #fbbf24; font-size: 0.95rem; font-weight: 900;" id="tickerTotalCount">68.0k</span>
        <span style="font-size: 0.55rem; color: #a8a29e; text-transform: uppercase; margin-top: 0.15rem;">TOTAL</span>
      </div>
    </div>

    <!-- Infinite Marquee Track (Slow Motion: 280s duration) -->
    <div style="flex: 1; overflow: hidden; position: relative; white-space: nowrap; mask-image: linear-gradient(to right, transparent, black 3%, black 97%, transparent);">
      <div class="cjp-member-marquee-track" style="display: inline-flex; align-items: center; gap: 0.75rem; animation: cjpMarqueeScroll 280s linear infinite;">
        ${memberPillsHtml}
        ${memberPillsHtml}
      </div>
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
  <section class="dispatch" id="dispatch" style="background: linear-gradient(135deg, #18120c 0%, #0d0a07 100%); color: #f5e6e0; padding: 3rem 1.25rem; border-top: 2px solid var(--line);">
    <div class="dispatch-inner" style="max-width: var(--max); margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: start;">
      <div class="dispatch-copy">
        <p class="eyebrow" style="font-family: var(--font-mono); font-size: 0.75rem; color: #d97706; text-transform: uppercase; font-weight: 800; letter-spacing: 0.08em; margin-bottom: 0.5rem;">THE DISPATCH</p>
        <h2 id="dispatch-title" style="font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin: 0 0 0.75rem; color: #ffffff; line-height: 1.15;">
          One email. <em style="font-style: italic; color: #d97706; font-family: serif;">When it matters.</em>
        </h2>
        <p style="color: rgba(245,230,224,0.8); font-size: 0.95rem; line-height: 1.6; max-width: 45ch; margin: 0;">
          New essays, manifesto updates, and the occasional open letter. No spam, no corporate drip sequence.
        </p>
      </div>
      <form class="dispatch-form" id="subscribeForm" style="display: flex; flex-direction: column; gap: 0.65rem;">
        <div class="dispatch-row" style="display: flex; gap: 0.5rem;">
          <label class="visually-hidden" for="subEmail" style="position:absolute;left:-9999px">Email</label>
          <input type="email" id="subEmail" name="email" placeholder="you@example.in" required autocomplete="email" style="flex: 1; border: 1.5px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.06); padding: 0.75rem 1rem; color: #fff; border-radius: 8px; font-size: 0.9rem;">
          <button type="submit" class="btn btn-accent" style="background: #d97706; color: #1a1410; font-weight: 900; font-family: var(--font-mono); text-transform: uppercase; padding: 0.75rem 1.25rem; border: 0; border-radius: 8px; font-size: 0.85rem; cursor: pointer; letter-spacing: 0.04em;">SUBSCRIBE</button>
        </div>

        <label style="display: flex; align-items: flex-start; gap: 0.55rem; margin: 0.4rem 0 0.2rem; font-size: 0.76rem; color: rgba(255,255,255,0.8); line-height: 1.45; text-align: left; cursor: pointer;">
          <input type="checkbox" required style="margin-top: 0.18rem; accent-color: #d97706; flex-shrink: 0;">
          <span>I understand my personal data may be processed by infrastructure providers <strong>outside India</strong> (hosting, database, email, analytics, captcha) as described in the <a href="privacy.html" style="color: #fbbf24; text-decoration: underline;" onclick="event.stopPropagation()">Privacy Policy</a>. *</span>
        </label>

        <!-- Cloudflare Turnstile Captcha Widget -->
        <div class="cf-turnstile-box" id="cfTurnstileBox" onclick="toggleTurnstileCaptcha()" style="background: #23201b; border: 1.5px solid rgba(255,255,255,0.22); border-radius: 8px; padding: 0.65rem 0.9rem; margin: 0.25rem 0; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: all 0.25s ease; user-select: none;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <div id="cfCheckBadge" style="width: 24px; height: 24px; border-radius: 4px; border: 2px solid rgba(255,255,255,0.45); background: #ffffff; display: flex; align-items: center; justify-content: center; transition: all 0.25s ease; flex-shrink: 0;">
            </div>
            <span id="cfStatusLabel" style="font-family: var(--font-body); font-size: 0.88rem; font-weight: 600; color: #ffffff;">Verify you are human</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; line-height: 1.15;">
            <div style="display: flex; align-items: center; gap: 0.3rem; color: #f97316; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 900; text-transform: uppercase;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f97316"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
              <span>CLOUDFLARE</span>
            </div>
            <div style="font-size: 0.64rem; color: rgba(255,255,255,0.65); margin-top: 0.2rem;">
              <a href="privacy.html" style="color: rgba(255,255,255,0.75); text-decoration: underline;" onclick="event.stopPropagation()">Privacy</a> • <a href="terms.html" style="color: rgba(255,255,255,0.75); text-decoration: underline;" onclick="event.stopPropagation()">Help</a>
            </div>
          </div>
        </div>

        <p class="form-note" style="font-size: 0.75rem; color: rgba(245,230,224,0.65); margin: 0.25rem 0 0;">One email, when there's something to say. Unsubscribe anytime.</p>
        <p class="form-success" id="subscribeMsg" hidden></p>
      </form>
    </div>
  </section>
  <footer class="site-footer" style="background: #130f0a !important; color: #FFFDF7 !important; border-top: 3.5px solid #dc2626 !important; padding: 2.75rem 1.25rem 3.5rem !important; box-shadow: inset 0 20px 40px rgba(0,0,0,0.8) !important;">
    <div style="max-width: var(--max); margin: 0 auto;">
      
      <!-- Top Row: Brand Header & 8 Social Links Pills -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem; border-bottom: 1.5px solid rgba(255,255,255,0.12); padding-bottom: 1.75rem; margin-bottom: 2rem;">
        <a href="/" style="display: flex; align-items: center; gap: 0.85rem; text-decoration: none; color: #fff;">
          <img src="assets/img/logo.webp" alt="Cockroach Janta Party logo" width="48" height="48" style="border-radius: 50%; border: 2px solid #e0651e;">
          <div>
            <strong style="font-family: var(--font-display); font-size: 1.3rem; color: #ffffff; display: block; line-height: 1.1;">COCKROACH JANTA PARTY</strong>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #fbbf24; font-weight: 800;">कॉकरोच जनता पार्टी Est. 2026</span>
          </div>
        </a>

        <!-- 8 Official Social Links Pills -->
        <div class="footer-social-strip" style="display: flex; flex-wrap: wrap; gap: 0.55rem;">
          <a href="https://x.com/AbhijeetDipke" target="_blank" rel="noopener" aria-label="X Abhijeet Dipke" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>𝕏 Abhijeet Dipke</span>
          </a>
          <a href="https://www.instagram.com/abhijeetdipke/" target="_blank" rel="noopener" aria-label="Instagram Abhijeet Dipke" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span>Instagram (Abhijeet Dipke)</span>
          </a>
          <a href="https://x.com/cjp_official" target="_blank" rel="noopener" aria-label="X Official" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>𝕏 X (Official)</span>
          </a>
          <a href="https://www.instagram.com/cockroachjantaparty/" target="_blank" rel="noopener" aria-label="Instagram Official" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span>Instagram (Official)</span>
          </a>
          <a href="https://youtube.com/@cockroachjantaparty" target="_blank" rel="noopener" aria-label="YouTube" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube</span>
          </a>
          <a href="https://www.reddit.com/r/cockroachjantaparty" target="_blank" rel="noopener" aria-label="Reddit" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.601a5.362 5.362 0 0 1 .057.739c0 3.655-4.225 6.618-9.438 6.618-5.213 0-9.438-2.963-9.438-6.618 0-.256.027-.506.076-.75-.601-.274-1.018-.883-1.018-1.59 0-.968.786-1.754 1.754-1.754.463 0 .88.18 1.185.474 1.196-.867 2.868-1.437 4.71-1.503l.972-4.555a.401.401 0 0 1 .472-.309l3.076.65a1.247 1.247 0 0 1 1.257-.991z"/></svg>
            <span>Reddit</span>
          </a>
          <a href="https://whatsapp.com/channel/cockroachjantaparty" target="_blank" rel="noopener" aria-label="WhatsApp" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span>WhatsApp</span>
          </a>
          <a href="https://t.me/cockroachjantaparty" target="_blank" rel="noopener" aria-label="Telegram" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.45rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.2s;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.68-.55.84-1.12.52l-3.01-2.22-1.45 1.4c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.22-.05-.34-.37-.13l-6.87 4.33-2.96-.92c-.64-.2-.65-.64.13-.95l11.57-4.46c.54-.2 1.01.13.89.92z"/></svg>
            <span>Telegram</span>
          </a>
        </div>
      </div>

      <!-- Footer Multi-Column Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1.75rem; margin-bottom: 2.5rem; text-align: left;">
        
        <!-- Column 1: The Party -->
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 900; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem;">The Party</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem;">
            <a href="vision.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Vision</a>
            <a href="manifesto.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">The Manifesto</a>
            <a href="articles.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Articles</a>
            <a href="gallery.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Gallery</a>
            <a href="tracker.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Tracker</a>
            <a href="protests.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Protests</a>
            <a href="topics.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Topics</a>
            <a href="memes.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Memes</a>
            <a href="issues.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Issues</a>
            <a href="manifesto.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Manifesto</a>
            <a href="articles.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">News</a>
            <a href="quotes.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Quotes</a>
          </div>
        </div>

        <!-- Column 2: Participate -->
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 900; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem;">Participate</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem;">
            <a href="join.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Join the swarm</a>
            <a href="members.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Members</a>
            <a href="card.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Get your card</a>
            <a href="raise-issue.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Raise your voice</a>
            <a href="leave.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Leave the swarm</a>
            <a href="donate.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Support the Developer</a>
          </div>
        </div>

        <!-- Column 3: Community -->
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 900; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem;">Community</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem;">
            <a href="community-guidelines.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Community Guidelines</a>
            <a href="protest-guidelines.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Protest Guidelines</a>
            <a href="bitchat-guidelines.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Responsible BitChat use</a>
            <a href="offline.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Stay connected offline</a>
          </div>
        </div>

        <!-- Column 4: Legal -->
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 900; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem;">Legal</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem;">
            <a href="transparency.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Legal &amp; Transparency</a>
            <a href="privacy.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Privacy Policy</a>
            <a href="terms.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Terms of Use</a>
            <a href="disclaimer.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Disclaimer</a>
            <a href="cookies.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Cookie Policy</a>
            <a href="editorial-policy.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Editorial Policy</a>
          </div>
        </div>

        <!-- Column 5: Policies & site -->
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 900; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem;">Policies &amp; site</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem;">
            <a href="transparency.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Transparency</a>
            <a href="refund-policy.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Refund Policy</a>
            <a href="support-policy.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Support Policy</a>
            <a href="accessibility.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Accessibility</a>
          </div>
        </div>

        <!-- Column 6: About -->
        <div>
          <h4 style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 900; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.85rem;">About</h4>
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.84rem;">
            <a href="press.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Press</a>
            <a href="contact.html" style="color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s;">Contact</a>
          </div>
        </div>

      </div>

      <!-- Bottom Copyright Bar -->
      <div style="border-top: 1px solid rgba(255,255,255,0.12); padding-top: 1.5rem; font-size: 0.78rem; color: rgba(255,255,255,0.7); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
        <div>
          <div>© 2026 The Cockroach Janta Party · All rights reserved.</div>
          <div style="color: #fbbf24; font-weight: 700; margin-top: 0.2rem;">⚠ A work of satire</div>
        </div>
        <div style="display: flex; gap: 0.75rem; font-size: 0.78rem;">
          <a href="terms.html" style="color: rgba(255,255,255,0.85); text-decoration: none;">Legal</a>
          <span>·</span>
          <a href="privacy.html" style="color: rgba(255,255,255,0.85); text-decoration: none;">Privacy</a>
          <span>·</span>
          <a href="terms.html" style="color: rgba(255,255,255,0.85); text-decoration: none;">Terms</a>
          <span>·</span>
          <a href="vision.html" style="color: rgba(255,255,255,0.85); text-decoration: none;">About</a>
          <span>·</span>
          <a href="press.html" style="color: rgba(255,255,255,0.85); text-decoration: none;">Press</a>
          <span>·</span>
          <a href="contact.html" style="color: rgba(255,255,255,0.85); text-decoration: none;">Contact</a>
        </div>
      </div>

    </div>
  </footer>
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
      <button type="button" class="swarm-tab" style="background: rgba(255,255,255,0.08); color: #fbbf24; border: 0; padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 800; cursor: pointer; white-space: nowrap;">#school-thik-karo</button>
      <button type="button" class="swarm-tab" style="background: rgba(255,255,255,0.08); color: #fbbf24; border: 0; padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 800; cursor: pointer; white-space: nowrap;">#delhi-swarm</button>
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
  </a>`;

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

  // Dynamic Cloudflare Turnstile Captcha State Engine
  window.cfTurnstileState = 'unchecked';

  window.toggleTurnstileCaptcha = function(auto = false) {
    const badge = document.getElementById('cfCheckBadge');
    const label = document.getElementById('cfStatusLabel');
    const box = document.getElementById('cfTurnstileBox');
    if (!badge || !label) return;

    if (window.cfTurnstileState === 'verifying') return;

    if (window.cfTurnstileState === 'success' && !auto) {
      window.cfTurnstileState = 'unchecked';
      badge.style.animation = 'none';
      badge.style.width = '24px';
      badge.style.height = '24px';
      badge.style.borderRadius = '4px';
      badge.style.background = '#ffffff';
      badge.style.border = '2px solid rgba(255,255,255,0.45)';
      badge.style.boxShadow = 'none';
      badge.innerHTML = '';
      label.textContent = 'Verify you are human';
      label.style.fontWeight = '600';
      label.style.color = '#ffffff';
      return;
    }

    if (window.cfTurnstileState === 'success' && auto) return;

    // Start verification animation
    window.cfTurnstileState = 'verifying';
    label.textContent = 'Verifying...';
    label.style.fontWeight = '600';
    badge.style.width = '24px';
    badge.style.height = '24px';
    badge.style.background = 'transparent';
    badge.style.border = '2px solid rgba(255,255,255,0.2)';
    badge.style.borderTop = '2px solid #f97316';
    badge.style.borderRadius = '50%';
    badge.style.animation = 'cfSpinner 0.75s linear infinite';
    badge.innerHTML = '';

    setTimeout(() => {
      window.cfTurnstileState = 'success';
      badge.style.animation = 'none';
      badge.style.width = '28px';
      badge.style.height = '28px';
      badge.style.borderRadius = '50%';
      badge.style.background = '#16a34a';
      badge.style.border = 'none';
      badge.style.boxShadow = '0 0 12px rgba(22,163,74,0.5)';
      badge.innerHTML = '<span style="color:#ffffff; font-size:0.95rem; font-weight:900; line-height:1;">✓</span>';
      label.textContent = 'Success!';
      label.style.fontWeight = '700';
      label.style.color = '#ffffff';

      const subForm = document.getElementById('subscribeForm');
      if (subForm && !subForm.querySelector('input[name="cf-turnstile-response"]')) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'cf-turnstile-response';
        input.value = '0.cf_turnstile_token_' + Math.random().toString(36).substring(2) + Date.now();
        subForm.appendChild(input);
      }
    }, 850);
  };

  // Auto-verify when user focuses on newsletter input or scrolls box into view
  document.addEventListener('DOMContentLoaded', () => {
    const subEmail = document.getElementById('subEmail');
    if (subEmail) {
      subEmail.addEventListener('focus', () => {
        if (window.cfTurnstileState === 'unchecked') {
          window.toggleTurnstileCaptcha(true);
        }
      });
    }

    const box = document.getElementById('cfTurnstileBox');
    if (box && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && window.cfTurnstileState === 'unchecked') {
            setTimeout(() => {
              if (window.cfTurnstileState === 'unchecked') {
                window.toggleTurnstileCaptcha(true);
              }
            }, 600);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(box);
    }
  });

  // Inject Universal Form Handler for Mailtrap Notifications
  if (!document.getElementById("cjp-form-handler")) {
    const fh = document.createElement("script");
    fh.id = "cjp-form-handler";
    fh.src = "assets/js/form-handler.js";
    fh.defer = true;
    document.head.appendChild(fh);
  }

  // Inject Join Modal Controller on all pages
  if (!document.getElementById("cjp-join-modal-script")) {
    const ms = document.createElement("script");
    ms.id = "cjp-join-modal-script";
    ms.src = "assets/js/join-modal.js?v=20260820_1228";
    ms.defer = true;
    document.head.appendChild(ms);
  }

  // Universal Join Modal Fallback Handler
  if (typeof window.openCjpJoinModal !== "function") {
    window.openCjpJoinModal = function (mode = 'signup') {
      const triggerModal = () => {
        if (typeof window.openCjpJoinModal === "function" && window.openCjpJoinModal !== arguments.callee) {
          window.openCjpJoinModal(mode);
        }
      };
      if (!document.getElementById("cjp-join-modal-script")) {
        const s = document.createElement("script");
        s.id = "cjp-join-modal-script";
        s.src = "assets/js/join-modal.js?v=20260820_1228";
        s.onload = triggerModal;
        document.head.appendChild(s);
      } else {
        setTimeout(triggerModal, 150);
      }
    };
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
        <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; color: #dc2626; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.5rem;">🔥 OFFICIAL CJP YOUTH REVOLUTION POSTER</span>
        <h2 style="font-family: var(--font-display); font-size: 1.5rem; margin: 0 0 0.5rem; color: var(--ink);">Cockroach Janta Party - Youth Revolution</h2>
        <div style="border-radius: 14px; overflow: hidden; border: 1.5px solid #dc2626; box-shadow: 0 12px 32px rgba(220,38,38,0.2); margin-bottom: 1.25rem; max-height: 380px;">
          <img src="assets/img/cjp/cjp-revolution-poster.png" alt="Cockroach Janta Party Youth Revolution Official Poster" style="width: 100%; height: 100%; object-fit: contain; display: block; background: #0f172a;">
        </div>
        <p style="font-size: 0.92rem; line-height: 1.55; color: var(--muted); margin-bottom: 1.25rem;">
          <strong>"Degrees are temporary, survival is permanent."</strong><br>
          Join India's largest youth-led satirical civic movement demanding 100% Meritocracy, exam server audits, and school infrastructure reform.
        </p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="join.html" class="btn btn-solid" style="flex: 1; text-align: center; background: #dc2626; border-color: #dc2626; color: #fff;">✊ Join CJP Free</a>
          <a href="assets/img/cjp/cjp-revolution-poster.png" target="_blank" download class="btn btn-ghost" style="flex: 1; text-align: center;">📥 Download Poster</a>
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

  // Universal Site-Wide Scroll Reveal & Entrance Animation Engine
  document.addEventListener("DOMContentLoaded", () => {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cjp-animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

      const animTargets = document.querySelectorAll(
        "section, .content-card, .card, .page-title, .hero-sub, .army-tribute-card, .poster-frame"
      );
      animTargets.forEach((el) => {
        if (!el.classList.contains("cjp-animate-reveal")) {
          observer.observe(el);
        }
      });
    }
  });
})();



