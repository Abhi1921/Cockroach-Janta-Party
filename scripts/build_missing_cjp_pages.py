import os

pages_data = [
    {
        "slug": "topics",
        "page_id": "topics",
        "title": "CJP Hot Topics & Policy Debates",
        "breadcrumb": "Topics",
        "eyebrow": "🔥 HOT DEBATES & POLICY DISCOURSE",
        "h1": "Movement Topics & <em>Policy Debates</em>",
        "lede": "Explore key political topics, exam integrity audits, 100% Meritocracy debates, and campus policy discussions driven by Cockroach Janta Party (CJP) youth advocates across India.",
        "description": "CJP Hot Topics & Policy Debates — NEET server audits, 100% meritocracy, judicial cooling-off, PM CARES fund school allocation, and youth rights.",
        "keywords": "CJP topics, CJP debates, NEET audit topic, meritocracy debate, judicial reform CJP, school thik karo topic",
        "content": """
      <div class="cards-3col" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
        <article class="content-card" style="border: 1.5px solid var(--line); background: #FFFDF7; border-radius: 16px; padding: 1.25rem;">
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #dc2626; font-weight: 800;">🔥 TOPIC #1</span>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin: 0.4rem 0; color: var(--ink);">NEET & Exam Server Audits</h3>
          <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.55;">Demanding 3rd-party independent cryptographic server log audits for all national competitive exams following leak scandals.</p>
          <a href="articles.html" class="btn btn-solid" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Explore Topic →</a>
        </article>
        <article class="content-card" style="border: 1.5px solid var(--line); background: #FFFDF7; border-radius: 16px; padding: 1.25rem;">
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #d97706; font-weight: 800;">✊ TOPIC #2</span>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin: 0.4rem 0; color: var(--ink);">100% Meritocracy Charter</h3>
          <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.55;">Advocating 100% merit-based selection combined with economic need scholarships for underprivileged students.</p>
          <a href="rha.html" class="btn btn-solid" style="padding: 0.5rem 1rem; font-size: 0.8rem; background: #d97706; border-color: #d97706;">Explore Topic →</a>
        </article>
        <article class="content-card" style="border: 1.5px solid var(--line); background: #FFFDF7; border-radius: 16px; padding: 1.25rem;">
          <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #16a34a; font-weight: 800;">🧹 TOPIC #3</span>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin: 0.4rem 0; color: var(--ink);">'School Thik Karo' Campaign</h3>
          <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.55;">Reallocating PM CARES fund corpus to provide desks, water, and teachers for rural government schools.</p>
          <a href="protests.html#school-thik-karo-campaign" class="btn btn-solid" style="padding: 0.5rem 1rem; font-size: 0.8rem; background: #16a34a; border-color: #16a34a;">Explore Topic →</a>
        </article>
      </div>
        """
    },
    {
        "slug": "memes",
        "page_id": "memes",
        "title": "CJP Satirical Memes & Parody Art Vault",
        "breadcrumb": "Memes Vault",
        "eyebrow": "🪳 MEMES, SATIRE & DIGITAL PARODY",
        "h1": "CJP Satirical Memes & <em>Parody Vault</em>",
        "lede": "Browse viral digital memes, satirical posters, and parody graphics created by CJP volunteers to counter courtroom slurs and political hypocrisy.",
        "description": "CJP Satirical Memes & Parody Art Vault — High resolution viral memes, satirical placards, and digital parody graphics.",
        "keywords": "CJP memes, cockroach party memes, #MainBhiCockroach memes, political satire India, viral student memes",
        "content": """
      <div style="margin: 2rem 0; background: #ffffff; border: 2px solid var(--line); border-radius: 18px; padding: 2rem;">
        <h2 style="font-family: var(--font-display); font-size: 1.5rem; margin-top: 0;">🪳 Satire as Civic Power</h2>
        <p style="font-size: 0.95rem; color: var(--muted); line-height: 1.6;">When courtroom remarks labeled unemployed youth as 'cockroaches', CJP adopted satire as a weapon of protest. Check out our high-resolution graphics, stickers, and placard templates.</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <a href="gallery.html" class="btn btn-solid">🖼️ Open Visual Posters Gallery (37+ Assets) →</a>
          <a href="gallery.html#rhm-posters" class="btn btn-ghost">💯 Download RHM Meritocracy Posters</a>
        </div>
      </div>
        """
    },
    {
        "slug": "quotes",
        "page_id": "quotes",
        "title": "Iconic CJP Quotes & Public Statements",
        "breadcrumb": "Quotes",
        "eyebrow": "💬 STATEMENTS & COURTROOM RETORTS",
        "h1": "Iconic CJP Quotes & <em>Public Statements</em>",
        "lede": "Collection of memorable quotes, press conference retorts, and central statements issued by CJP founder Abhijeet Dipke and student delegates.",
        "description": "Iconic CJP Quotes & Statements by Abhijeet Dipke — Courtroom retorts, press releases, and student rights speeches.",
        "keywords": "CJP quotes, Abhijeet Dipke quotes, Main Bhi Cockroach quotes, CJP courtroom retorts, student protest quotes India",
        "content": """
      <div style="display: flex; flex-direction: column; gap: 1.5rem; margin: 2rem 0;">
        <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1.25rem 1.5rem; border-radius: 10px;">
          <blockquote style="margin: 0; font-family: var(--font-display); font-size: 1.15rem; color: #9f1239; line-height: 1.6;">
            "We were called cockroaches because we survive despite systemic toxicity. We accept the title proudly — because cockroaches outlive dinosaurs!"
          </blockquote>
          <span style="display: block; margin-top: 0.5rem; font-family: var(--font-mono); font-size: 0.8rem; color: #dc2626; font-weight: 800;">— Abhijeet Dipke (16 May 2026, CJP Launch Statement)</span>
        </div>
        <div style="background: #fff7ed; border-left: 4px solid #d97706; padding: 1.25rem 1.5rem; border-radius: 10px;">
          <blockquote style="margin: 0; font-family: var(--font-display); font-size: 1.15rem; color: #9a3412; line-height: 1.6;">
            "Demanding desks for village primary schools or cryptographic log audits for leaked NEET exams is NOT Naxalism — it is basic constitutional citizenship!"
          </blockquote>
          <span style="display: block; margin-top: 0.5rem; font-family: var(--font-mono); font-size: 0.8rem; color: #d97706; font-weight: 800;">— Abhijeet Dipke (20 August 2026, Press Briefing)</span>
        </div>
      </div>
        """
    },
    {
        "slug": "card",
        "page_id": "card",
        "title": "Get Your Digital Swarm Member Card",
        "breadcrumb": "Digital Card",
        "eyebrow": "💳 VERIFIED SWARM MEMBER IDENTITY",
        "h1": "Get Your Digital <em>Member Card</em>",
        "lede": "Generate your official verified Cockroach Janta Party (CJP) digital membership card instantly. 100% free, encrypted, and non-partisan.",
        "description": "Get Your Digital Swarm Member Card — Instant free verification and digital ID generation for Cockroach Janta Party members.",
        "keywords": "CJP member card, CJP digital ID, cockroach party digital card, get CJP ID card, join swarm card",
        "content": """
      <div style="margin: 2rem 0; background: #ffffff; border: 2.5px solid #dc2626; border-radius: 20px; padding: 2rem; box-shadow: 0 16px 40px rgba(220,38,38,0.15);">
        <h2 style="font-family: var(--font-display); font-size: 1.5rem; margin-top: 0; color: var(--ink);">💳 Instant Digital Member ID Generator</h2>
        <p style="font-size: 0.95rem; color: var(--muted); margin-bottom: 1.5rem;">Join over 30 million registered youth members. Fill details on the Join page to render your custom digital ID card!</p>
        <a href="join.html" class="btn btn-solid" style="padding: 0.75rem 1.5rem;">✊ Go to Join Page & Render Card Now →</a>
      </div>
        """
    },
    {
        "slug": "leave",
        "page_id": "leave",
        "title": "Leave the Swarm / Unsubscribe Protocol",
        "breadcrumb": "Leave Swarm",
        "eyebrow": "⚙️ USER AUTONOMY & DATA FREEDOM",
        "h1": "Leave the Swarm <em>(Opt-Out)</em>",
        "lede": "Respecting individual choice and data freedom. If you wish to leave the Cockroach Janta Party swarm or unsubscribe from updates, process your request instantly.",
        "description": "Leave the Swarm / Unsubscribe Protocol — Opt-out and data deletion request for Cockroach Janta Party members.",
        "keywords": "leave CJP swarm, unsubscribe CJP, CJP opt out, data deletion CJP",
        "content": """
      <div style="margin: 2rem 0; background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; margin-top: 0;">Unsubscribe & Data Deletion Request</h2>
        <p style="font-size: 0.92rem; color: var(--muted); line-height: 1.6;">CJP adheres to strict privacy rights. If you no longer wish to receive email notifications or want your member ID record purged, send a request to our data desk.</p>
        <form style="display: flex; flex-direction: column; gap: 0.85rem; max-width: 480px; margin-top: 1rem;">
          <input type="email" placeholder="Your Registered Email Address" required style="padding: 0.65rem 0.85rem; border: 1.5px solid var(--line); border-radius: 8px;">
          <button type="submit" class="btn btn-ghost" style="text-align: center;">Send Unsubscribe Request →</button>
        </form>
      </div>
        """
    },
    {
        "slug": "community-guidelines",
        "page_id": "community-guidelines",
        "title": "Swarm Community Guidelines & Conduct Rules",
        "breadcrumb": "Community Guidelines",
        "eyebrow": "📜 CIVIC CONDUCT & SWARM RULES",
        "h1": "Swarm Community <em>Guidelines</em>",
        "lede": "Standards of conduct for CJP members, forum participants, and online volunteers. Promoting respectful dialogue, non-violence, and zero harassment.",
        "description": "Swarm Community Guidelines & Rules of Engagement — Non-violent, zero-hate speech standards for Cockroach Janta Party volunteers.",
        "keywords": "CJP community guidelines, swarm rules, CJP conduct, non violence student movement",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Strict Non-Violence Commitment</h2>
        <p>All CJP demonstrations, campus clean-ups, and rallies must remain 100% peaceful and non-violent without exception.</p>
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 1.5rem;">2. Zero Hate Speech & Discrimination</h2>
        <p>CJP welcomes students of all backgrounds. Hate speech based on religion, caste, gender, or region is strictly prohibited.</p>
      </div>
        """
    },
    {
        "slug": "protest-guidelines",
        "page_id": "protest-guidelines",
        "title": "Peaceful Protest & Assembly Guidelines",
        "breadcrumb": "Protest Guidelines",
        "eyebrow": "📢 CONSTITUTIONAL ASSEMBLY STANDARDS",
        "h1": "Peaceful Protest <em>Guidelines</em>",
        "lede": "Legal and administrative guidelines for organizing peaceful student sit-ins, placard rallies, and memorandum handovers under Article 19.",
        "description": "Peaceful Protest & Assembly Guidelines — Legal safety, police coordination, and non-violent protest standards for CJP rallies.",
        "keywords": "CJP protest guidelines, peaceful assembly guide, student rally safety India, Article 19 protest rules",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Prior Police Intimation & Permits</h2>
        <p>Ensure local police intimation letters are submitted before conducting marches or public sit-ins at designated protest venues.</p>
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 1.5rem;">2. Emergency First Aid & Legal Contacts</h2>
        <p>Every student rally delegation must include designated medical volunteers and legal team liaison contacts.</p>
      </div>
        """
    },
    {
        "slug": "bitchat-guidelines",
        "page_id": "bitchat-guidelines",
        "title": "Responsible BitChat & Encrypted Use",
        "breadcrumb": "BitChat Guidelines",
        "eyebrow": "🔐 ENCRYPTED P2P COMMUNICATION",
        "h1": "Responsible BitChat & <em>P2P Use</em>",
        "lede": "Safety and responsibility protocols for using encrypted BitChat and mesh messaging channels during student rallies and volunteer coordination.",
        "description": "Responsible BitChat & Encrypted Use — Safety protocols for encrypted peer-to-peer volunteer communication.",
        "keywords": "BitChat guidelines, CJP encrypted chat, P2P messaging guide, volunteer safety CJP",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Peer-to-Peer Encryption Safety</h2>
        <p>BitChat channels are used for volunteer logistics and emergency rally alerts. Never share personal passwords or sensitive financial credentials.</p>
      </div>
        """
    },
    {
        "slug": "offline",
        "page_id": "offline",
        "title": "Stay Connected Offline / Mesh Networking",
        "breadcrumb": "Offline Guide",
        "eyebrow": "📡 NETWORK RESILIENCE & OFFLINE ACCESS",
        "h1": "Stay Connected <em>Offline</em>",
        "lede": "How to access CJP manifestos, digital ID cards, emergency helplines, and rally schedules during internet shutdowns or network blackouts.",
        "description": "Stay Connected Offline — Mesh networking and offline access guides for CJP student volunteers during internet shutdowns.",
        "keywords": "CJP offline guide, internet shutdown guide, mesh networking students, offline manifestos CJP",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Local Bluetooth & Mesh Communication</h2>
        <p>During localized internet blackouts, use offline P2P Bluetooth mesh apps to broadcast emergency medical and legal assistance locations.</p>
      </div>
        """
    },
    {
        "slug": "transparency",
        "page_id": "transparency",
        "title": "Legal & Financial Transparency Report",
        "breadcrumb": "Transparency",
        "eyebrow": "⚖️ AUDIT & FINANCIAL OPENNESS",
        "h1": "Legal & Financial <em>Transparency</em>",
        "lede": "Complete transparency report regarding voluntary website development tips, domain hosting expenses, and non-ECI legal disclosures.",
        "description": "Legal & Financial Transparency Report — Open disclosures regarding hosting costs, non-NGO status, and satire protections.",
        "keywords": "CJP transparency report, CJP financial disclosure, website dev tips transparency",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. 100% Open Host & Server Expenses</h2>
        <p>All voluntary UPI tips received via Section 2 are strictly utilized for domain registration, cloud hosting, and continuous website updates. CJP does not collect political election funds.</p>
      </div>
        """
    },
    {
        "slug": "disclaimer",
        "page_id": "disclaimer",
        "title": "Satire, Parody & Non-ECI Disclaimer",
        "breadcrumb": "Disclaimer",
        "eyebrow": "⚖️ CONSTITUTIONAL PARODY & SATIRE",
        "h1": "Satire & Parody <em>Disclaimer</em>",
        "lede": "Official legal notice clarifying that Cockroach Janta Party (CJP) is a satirical civic youth movement protected under Article 19(1)(a).",
        "description": "Satire, Parody & Non-ECI Disclaimer — Legal notice confirming CJP's status as a non-ECI registered satirical parody movement.",
        "keywords": "CJP disclaimer, satire disclaimer, Article 19 parody defense, non ECI party disclaimer",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Constitutional Satire & Parody Notice</h2>
        <p>Cockroach Janta Party Wale (CJP) is an independent civic youth movement utilizing satire, parody, and dark humor. It is NOT registered with the Election Commission of India (ECI) and does not field candidates for public office.</p>
      </div>
        """
    },
    {
        "slug": "cookies",
        "page_id": "cookies",
        "title": "Cookie & Advertising Policy",
        "breadcrumb": "Cookie Policy",
        "eyebrow": "🍪 PRIVACY & COOKIE DISCLOSURES",
        "h1": "Cookie & Advertising <em>Policy</em>",
        "lede": "Details on how cookies, Google AdSense, and local browser storage are utilized to improve site performance and security.",
        "description": "Cookie & Advertising Policy — Detailed cookie management, Google AdSense disclosures, and analytics tracking terms.",
        "keywords": "CJP cookie policy, Google AdSense cookies, CJP privacy cookies",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Google AdSense & Third-Party Cookies</h2>
        <p>We use third-party vendor cookies (such as Google AdSense) to serve advertisements based on prior visits to our website.</p>
      </div>
        """
    },
    {
        "slug": "editorial-policy",
        "page_id": "editorial-policy",
        "title": "Editorial Integrity & IP Copyright Policy",
        "breadcrumb": "Editorial Policy",
        "eyebrow": "📰 JOURNALISTIC INTEGRITY & COPYRIGHT",
        "h1": "Editorial Integrity & <em>IP Policy</em>",
        "lede": "Standards for news aggregation, press release attribution, campaign graphic licensing, and intellectual property protections.",
        "description": "Editorial Integrity & IP Copyright Policy — Fair use attribution, news verification, and graphic licensing terms.",
        "keywords": "CJP editorial policy, IP policy CJP, news verification standards",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. News Verification & Attribution</h2>
        <p>All news bulletins aggregate reports from reputable national press agencies (PTI, HT, TOI, NDTV, Reuters, BBC). Campaign posters are released under Creative Commons CC-BY 4.0.</p>
      </div>
        """
    },
    {
        "slug": "refund-policy",
        "page_id": "refund-policy",
        "title": "Voluntary Support Refund & Dispute Policy",
        "breadcrumb": "Refund Policy",
        "eyebrow": "💳 VOLUNTARY TIP REFUNDS",
        "h1": "Refund & Support <em>Policy</em>",
        "lede": "Guidelines for voluntary developer support tips, accidental UPI duplicate payments, and refund assistance protocols.",
        "description": "Voluntary Support Refund & Dispute Policy — Help terms for duplicate or accidental UPI tips.",
        "keywords": "CJP refund policy, UPI duplicate payment refund, website tip refund",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Accidental / Duplicate Payment Refunds</h2>
        <p>If you accidentally send duplicate UPI tips or enter an incorrect amount, submit your UTR reference number to our contact desk for prompt case-by-case resolution.</p>
      </div>
        """
    },
    {
        "slug": "support-policy",
        "page_id": "support-policy",
        "title": "Platform Support & SLA Terms",
        "breadcrumb": "Support Policy",
        "eyebrow": "💻 PLATFORM & DEVELOPER HELP",
        "h1": "Platform Support <em>Terms</em>",
        "lede": "Operational commitment for 24/7 website uptime, bug reporting response times, and volunteer technical support.",
        "description": "Platform Support & SLA Terms — Technical support response commitments and website maintenance standards.",
        "keywords": "CJP support policy, developer support SLA, website uptime CJP",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. 24/7 Platform Uptime & Bug Help</h2>
        <p>Our dev team actively monitors website logs and server performance to ensure continuous access for student volunteers worldwide.</p>
      </div>
        """
    },
    {
        "slug": "accessibility",
        "page_id": "accessibility",
        "title": "Web Accessibility Commitment & Standard",
        "breadcrumb": "Accessibility",
        "eyebrow": "♿ INCLUSIVE DESIGN & WCAG 2.1",
        "h1": "Web Accessibility <em>Commitment</em>",
        "lede": "Ensuring cockroachjantapartywale.com is fully accessible to people of all abilities in accordance with WCAG 2.1 AA guidelines.",
        "description": "Web Accessibility Commitment & Standard — WCAG 2.1 AA compliance, screen reader support, and high contrast modes.",
        "keywords": "CJP accessibility, WCAG compliance CJP, accessible student website",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. High Contrast & Screen Reader Compatibility</h2>
        <p>Our templates utilize semantic HTML5, explicit ARIA roles, scalable typography, and high contrast color ratios to support screen readers and assistive devices.</p>
      </div>
        """
    },
    {
        "slug": "press",
        "page_id": "press",
        "title": "Press Kit & Media Relations Bureau",
        "breadcrumb": "Press Kit",
        "eyebrow": "📺 OFFICIAL PRESS KIT & MEDIA ASSETS",
        "h1": "Press Kit & <em>Media Bureau</em>",
        "lede": "High-resolution CJP logos, verified spokespersons contacts, press releases, and media guidelines for journalists.",
        "description": "Press Kit & Media Relations Bureau — Official logos, press releases, media contacts, and media kit downloads for CJP.",
        "keywords": "CJP press kit, media bureau CJP, CJP logo download, press contacts CJP",
        "content": """
      <div style="background: #ffffff; border: 1.5px solid var(--line); border-radius: 18px; padding: 2rem; margin: 2rem 0; line-height: 1.75; font-size: 0.95rem; color: #334155;">
        <h2 style="font-family: var(--font-display); font-size: 1.4rem; color: #0f172a; margin-top: 0;">1. Media Inquiries & Spokesperson Desk</h2>
        <p>Journalists requesting interviews or official commentary can reach the central press desk directly at hello@cockroachjantapartywale.com.</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.25rem;">
          <a href="contact.html" class="btn btn-solid">📩 Contact Press Bureau →</a>
          <a href="gallery.html" class="btn btn-ghost">🖼️ Access High-Res Media Assets</a>
        </div>
      </div>
        """
    }
]

template = """<!DOCTYPE html>
<html lang="en-IN">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-F6Z7M4B6C6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag("js", new Date());
    gtag("config", "G-F6Z7M4B6C6");
  </script>
  <script>
    if (window.location.pathname.endsWith(".html")) {{
      var clean = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
      if (clean === "") clean = "/";
      window.history.replaceState(null, "", clean + window.location.search + window.location.hash);
    }}
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Cockroach Janta Party Wale</title>
  <meta name="description" content="{description}">
  <meta name="keywords" content="{keywords}">
  <meta name="google-site-verification" content="Lxdnf1IqpXNpOSTlI8OgBvQdM1L0KwgHANOqUZ5_jDc">
  <meta name="google-adsense-account" content="ca-pub-6659325833077415">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6659325833077415" crossorigin="anonymous"></script>
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="theme-color" content="#dc2626">
  <link rel="canonical" href="https://cockroachjantapartywale.com/{slug}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://cockroachjantapartywale.com/{slug}">
  <meta property="og:title" content="{title} | Cockroach Janta Party Wale">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://cockroachjantapartywale.com/assets/img/og-default.webp">
  <meta property="og:site_name" content="Cockroach Janta Party Official Website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@cjp_official">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/assets/img/logo.webp" type="image/png">
  <link rel="apple-touch-icon" href="/assets/img/logo.webp">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css?v=20260820_1215">
</head>
<body class="" data-page="{page_id}">
  <div id="site-top"></div>
  <main id="main">
    <section class="page">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / {breadcrumb}</nav>
      <p class="eyebrow">{eyebrow}</p>
      <h1 class="page-title">{h1}</h1>
      <p class="lede">{lede}</p>

      <!-- SECTION 2: OFFICIAL UPI SCANNER & INSTANT PAYMENT ALERT BAND -->
      <section id="sec2-qr-scanner-band" class="section-band" style="background: linear-gradient(180deg, #fdfbf7 0%, #f4ebd7 100%); border-top: 2px solid var(--line); border-bottom: 2px solid var(--line); padding: 2.5rem 1rem; margin: 2rem 0;">
        <div style="max-width: var(--max); margin: 0 auto;">
          <div style="text-align: center; max-width: 760px; margin: 0 auto 1.5rem;">
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(220, 38, 38, 0.1); border: 1.5px solid #dc2626; color: #b91c1c; padding: 0.35rem 0.85rem; border-radius: 999px; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.6rem;">
              <span style="width: 8px; height: 8px; background: #dc2626; border-radius: 50%; display: inline-block; animation: pulse 1.4s ease infinite;"></span>
              <span>⚡ VOLUNTARY DEVELOPER &amp; WEBSITE SUPPORT (SECTION 2)</span>
            </div>
            <h2 style="font-family: var(--font-display); font-size: clamp(1.5rem, 4vw, 2.2rem); color: var(--ink); margin: 0 0 0.4rem; line-height: 1.2;">
              Scan &amp; Pay via UPI · <em>Instant Verification Alert</em>
            </h2>
            <p style="font-size: 0.92rem; color: var(--muted); margin: 0;">
              This platform is independently designed, coded, hosted, and updated 24/7. Your voluntary tips directly fund domain hosting, server infrastructure, and daily news updates.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 1.5rem; max-width: 920px; margin: 0 auto; background: #ffffff; padding: 1.5rem; border: 2.5px solid #dc2626; border-radius: 20px; box-shadow: 0 16px 40px rgba(220, 38, 38, 0.15); box-sizing: border-box;">
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
              <div style="position: relative; border-radius: 14px; overflow: hidden; border: 2.5px dashed #dc2626; padding: 0.65rem; background: #fffcf8; width: 100%; max-width: 220px; margin: 0 auto 0.65rem;">
                <img src="assets/img/upi-qr.webp" alt="Scan to Pay via UPI" width="200" height="200" loading="lazy" style="display: block; border-radius: 8px; width: 100%; height: auto;">
              </div>
              <p style="font-family: var(--font-display); font-size: 0.88rem; font-weight: 800; color: var(--ink); margin: 0 0 0.2rem;">
                Scan with Any UPI App (GPay / PhonePe / Paytm / BHIM)
              </p>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #dc2626; font-weight: 800; background: #fef2f2; border: 1px solid #fca5a5; padding: 0.2rem 0.55rem; border-radius: 6px; margin-bottom: 1rem; display: inline-block;">
                Remark / Description: <code style="font-weight: 900; color: #b91c1c;">CJP</code>
              </div>

              <!-- Voluntary Support Tiers Format -->
              <div style="width: 100%; background: linear-gradient(135deg, #fffcf8 0%, #fff7ed 100%); border: 1.5px solid #fdba74; border-radius: 12px; padding: 0.85rem; text-align: left; box-sizing: border-box; margin-bottom: 0.85rem;">
                <strong style="font-family: var(--font-display); font-size: 0.85rem; color: #c2410c; display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.5rem;">
                  <span>☕</span> Voluntary Support Tiers &amp; Format
                </strong>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.74rem; font-family: var(--font-mono);">
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.35rem 0.5rem; border-radius: 6px; display: flex; justify-content: space-between;">
                    <span>☕ Chai</span><strong style="color: #ea580c;">₹20–₹50</strong>
                  </div>
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.35rem 0.5rem; border-radius: 6px; display: flex; justify-content: space-between;">
                    <span>🍕 Snacks</span><strong style="color: #ea580c;">₹100–₹200</strong>
                  </div>
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.35rem 0.5rem; border-radius: 6px; display: flex; justify-content: space-between;">
                    <span>🍔 Meals</span><strong style="color: #ea580c;">₹250–₹500</strong>
                  </div>
                  <div style="background: #ffffff; border: 1px solid #fed7aa; padding: 0.35rem 0.5rem; border-radius: 6px; display: flex; justify-content: space-between;">
                    <span>💻 Server</span><strong style="color: #ea580c;">₹1,000+</strong>
                  </div>
                </div>
              </div>

              <!-- Legal Disclosures -->
              <div style="width: 100%; background: #fef2f2; border: 1px solid #fecdd3; border-radius: 10px; padding: 0.65rem 0.8rem; font-size: 0.72rem; color: #9f1239; line-height: 1.45; text-align: left; box-sizing: border-box;">
                <strong style="display: block; font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; margin-bottom: 0.2rem; color: #dc2626;">⚖️ LEGAL &amp; POLICY DISCLOSURES:</strong>
                • Voluntary tip for website hosting &amp; dev labor.<br>
                • Not an NGO/Charity (No 80G tax receipt).<br>
                • Not an ECI political party. Civic satire under Art. 19(1)(a).
              </div>
            </div>

            <div style="text-align: left; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
              <div>
                <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: #ffffff; padding: 0.85rem 1rem; border-radius: 12px; margin-bottom: 1rem; border: 1.5px solid #334155;">
                  <strong style="font-family: var(--font-display); font-size: 0.98rem; color: #fef08a; display: block; margin-bottom: 0.2rem;">
                    📩 Paid via UPI? Send Instant Verification Alert
                  </strong>
                  <p style="font-size: 0.78rem; color: rgba(255,255,255,0.85); margin: 0;">
                    Submit your payment details for real-time developer desk verification.
                  </p>
                </div>

                <form class="sec2-payment-form" style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%; box-sizing: border-box;">
                  <div>
                    <label style="display: block; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 800; color: var(--ink); margin-bottom: 0.2rem; text-transform: uppercase;">Your Full Name <span style="color: #dc2626;">*</span></label>
                    <input type="text" name="payer_name" required placeholder="e.g. Rahul Sharma" style="width: 100%; box-sizing: border-box; padding: 0.55rem 0.75rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.85rem;">
                  </div>
                  <div>
                    <label style="display: block; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 800; color: var(--ink); margin-bottom: 0.2rem; text-transform: uppercase;">Email or Phone No. <span style="color: #dc2626;">*</span></label>
                    <input type="text" name="payer_contact" required placeholder="e.g. rahul@gmail.com" style="width: 100%; box-sizing: border-box; padding: 0.55rem 0.75rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.85rem;">
                  </div>
                  <div style="display: flex; gap: 0.5rem; width: 100%;">
                    <div style="flex: 1 1 40%;">
                      <label style="display: block; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 800; color: var(--ink); margin-bottom: 0.2rem; text-transform: uppercase;">Amount Paid <span style="color: #dc2626;">*</span></label>
                      <input type="number" name="amount_paid" required placeholder="₹100" style="width: 100%; box-sizing: border-box; padding: 0.55rem 0.6rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.85rem;">
                    </div>
                    <div style="flex: 1 1 60%;">
                      <label style="display: block; font-family: var(--font-mono); font-size: 0.7rem; font-weight: 800; color: var(--ink); margin-bottom: 0.2rem; text-transform: uppercase;">UTR / Ref No.</label>
                      <input type="text" name="utr_number" placeholder="12-digit UTR" style="width: 100%; box-sizing: border-box; padding: 0.55rem 0.6rem; border: 1.5px solid var(--line); border-radius: 8px; font-size: 0.85rem;">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-solid" style="width: 100%; box-sizing: border-box; font-size: 0.85rem; padding: 0.65rem; text-align: center; margin-top: 0.3rem;">📩 Submit Verification Alert →</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {content}

    </section>
  </main>
  <div id="site-bottom"></div>
  <script src="assets/js/site-config.js?v=20260820_1215" defer></script>
  <script src="assets/js/layout.js?v=20260820_1215" defer></script>
  <script src="assets/js/main.js?v=20260820_1215" defer></script>
</body>
</html>"""

count = 0
for p in pages_data:
    filename = f"{p['slug']}.html"
    filepath = os.path.join(".", filename)
    rendered = template.format(**p)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(rendered)
    count += 1
    print(f"✅ Generated missing page: {filename}")

print(f"Total new pages generated: {count}")
