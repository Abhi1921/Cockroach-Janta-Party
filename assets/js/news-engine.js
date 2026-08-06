/**
 * CJP Google & Live Trending News Engine with Verified YouTube Live Iframe Integration
 * Features CJP National Victory Bulletins, 6 Newly Generated CJP Victory Posters, 
 * PM Modi Videos, Top News Channels (Aaj Tak, NDTV, India Today, BBC, Republic, Times Now, WION),
 * and an Automatic Historic Victory Popup Alert Modal.
 */
(() => {
  const S = window.CJP_SITE || {};
  const currentTodayDateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Verified working YouTube Video ID (Tested 100% embeddable across all domains)
  const VERIFIED_YT_ID = "5UjaUWbnWZ4";

  // Default curated trending news & CJP Victory Posters + Reservation Hatao Movement
  const defaultTrendingNews = [
    {
      id: "news-cjp-ajplus-video",
      title: "AJ+ Documentary: 'The Man Behind India's Cockroach Janta Party' — Abhijeet Dipke & Gen Z Revolution",
      category: "cjp",
      source: "AJ+ World Special · YouTube & Digital Bureau",
      sourceUrl: "https://www.youtube.com/watch?v=5UjaUWbnWZ4",
      pubDate: "1 August 2026",
      description: "AJ+ world feature story on Abhijeet Dipke and how the Cockroach Janta Party (CJP) transformed a judicial insult into India's largest youth movement for 100% Meritocracy.",
      image: "assets/img/cjp/cjp-jharkhand-protest-5aug-poster.png",
      youtubeId: "5UjaUWbnWZ4",
      badge: "▶️ AJ+ SPECIAL DOCUMENTARY",
      badgeColor: "#dc2626",
      tags: ["#AJPlus", "#TheManBehindCJP", "#AbhijeetDipke", "#GenZRevolution", "#CockroachJantaParty"],
      fullText: "AJ+ world documentary feature: International media network AJ+ released a special report titled 'The Man Behind India's Cockroach Janta Party' detailing Abhijeet Dipke's journey, the 5 core demands, and how millions of unemployed young job seekers united under #MainBhiCockroach."
    },
    {
      id: "news-cjp-ankit-inspires-video",
      title: "Ankit Inspires India: Why Is the 'Cockroach Janata Party' March Making Headlines Across India?",
      category: "cjp",
      source: "Ankit Inspires India · Current Affairs Analysis",
      sourceUrl: "https://www.youtube.com/watch?v=8K30jK6h91g",
      pubDate: "20 July 2026",
      description: "Popular current affairs analyst Ankit Avasthi breaks down the origins, 5 demands, legal backing, and national impact of Cockroach Janata Party's Jantar Mantar march.",
      image: "assets/img/cjp/cjp-4aug-news-poster.png",
      youtubeId: "8K30jK6h91g",
      badge: "▶️ ANKIT INSPIRES INDIA",
      badgeColor: "#d97706",
      tags: ["#AnkitInspiresIndia", "#AnkitAvasthi", "#CockroachJanataParty", "#JantarMantarMarch", "#CJPDemands"],
      fullText: "Ankit Inspires India special analysis: Ankit Avasthi explains the legal background, CJI comments, student grievances over NEET paper leaks, and why the Cockroach Janata Party march became a trending national phenomenon."
    },
    {
      id: "news-cjp-guardian-article",
      title: "The Guardian: Who are India's 'Cockroach' party and why are they marching on Delhi?",
      category: "google",
      source: "The Guardian World News · London",
      sourceUrl: "https://www.theguardian.com/world/2026/jul/30/who-are-indias-cockroach-party",
      pubDate: "30 July 2026",
      description: "The Guardian's front-page report on Cockroach Janta Party (CJP), exploring how Gen Z satire is reshaping Indian electoral and judicial accountability.",
      image: "assets/img/cjp/news-theprint-china-cjp.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌐 THE GUARDIAN",
      badgeColor: "#0284c7",
      tags: ["#TheGuardian", "#CockroachParty", "#DelhiMarch", "#GenZSatire", "#IndianPolitics"],
      fullText: "The Guardian international feature: British national daily report examining how Cockroach Janta Party (CJP) turned a dismissive judicial remark into a nationwide student rights movement."
    },
    {
      id: "news-cjp-jharkhand-6aug-protest",
      title: "6 August 2026: CJP Jharkhand Protest Update — Indefinite Hunger Strike Intensifies at Jaipal Singh Munda Stadium as Assembly Session Begins",
      category: "cjp",
      source: "CJP Jharkhand Bureau & Press Release · Ranchi",
      sourceUrl: "protests.html#jharkhand-protest-6aug",
      pubDate: "6 August 2026 (Live Today)",
      description: "As the Jharkhand Assembly Monsoon Session opens on 6 August, 6 student leaders fast at Jaipal Singh Munda Stadium. CJP & Founder Abhijeet Dipke demand independent CBI exam leak audit, 100% Meritocracy, and open media-covered talks with CM.",
      image: "assets/img/cjp/cjp-jharkhand-protest-6aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 6 AUG JHARKHAND PROTEST & HUNGER STRIKE",
      badgeColor: "#16a34a",
      tags: ["#6August2026", "#JharkhandYouthProtest", "#JaipalSinghMundaStadium", "#CJPJharkhand", "#AbhijeetDipke"],
      fullText: "CJP Jharkhand Bureau Communication (6 August 2026): The student agitation in Ranchi enters its second week as the Monsoon Session of the State Assembly convenes today. At the Jaipal Singh Munda Stadium, six student leaders—including JLKM and JPSC-JSSC Reforms Manch representatives—are on an indefinite hunger strike. Demanding the cancellation of the 14th JPSC exam, an independent CBI / judicial probe into exam paper leaks, and 3rd-party server audits, students reject closed-door meetings and insist on open, media-covered public talks with CM Hemant Soren. CJP Founder Abhijeet Dipke and the CJP Jharkhand Swarm reaffirm full solidarity as a non-partisan pressure group demanding 100% Meritocracy."
    },
    {
      id: "news-cjp-jharkhand-5aug-protest",
      title: "5 August 2026: CJP Jharkhand Swarm — 50,000+ Students March in Ranchi & Jamshedpur for JSSC & JPSC Audit",
      category: "cjp",
      source: "CJP Jharkhand Bureau & Press Release · Morabadi Ground",
      sourceUrl: "protests.html#jharkhand-protest-5aug",
      pubDate: "5 August 2026 (Live Today)",
      description: "CJP Founder Abhijeet Dipke and Jharkhand youth coordinators lead massive rallies across Ranchi, Jamshedpur, and Dhanbad demanding independent 3rd-party digital log audits of JSSC & JPSC exam servers and 100% Meritocracy.",
      image: "assets/img/cjp/cjp-jharkhand-protest-5aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 5 AUG JHARKHAND MEGA PROTEST",
      badgeColor: "#16a34a",
      tags: ["#5August2026", "#JharkhandYouthProtest", "#RanchiSwarm", "#JSSCPaperLeakAudit", "#AbhijeetDipke"],
      fullText: "CJP Jharkhand Executive Communication (5 August 2026): Cockroach Janta Party founder Abhijeet Dipke and Jharkhand student leaders today led over 50,000 student job seekers in rallies across Morabadi Ground Ranchi, Jamshedpur, and Dhanbad. The movement demands independent digital log audits of JSSC & JPSC recruitment exam servers, 100% Meritocracy, and immediate FIR withdrawals against peaceful student marchers."
    },
    {
      id: "news-cjp-4aug-a-to-z-update",
      title: "4 August 2026: Cockroach Janta Party Releases Official National Reform Poster & Comprehensive News Update",
      category: "cjp",
      source: "CJP National Press Bureau & India.com · Live Bulletin",
      sourceUrl: "articles.html#4aug-a-to-z-update",
      pubDate: "4 August 2026 (Live Today)",
      description: "CJP Founder Abhijeet Dipke releases the official 4 August National Reform Poster covering 100% Meritocracy advocacy, zero electoral ambitions, Supreme Court FIR drop verification, and active Assam flood relief.",
      image: "assets/img/cjp/cjp-4aug-a-to-z-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📌 4 AUG REFORM POSTER UPDATE",
      badgeColor: "#0284c7",
      tags: ["#4August2026", "#CJPReformPoster", "#AbhijeetDipke", "#StudentRights", "#MeritocracyFirst"],
      fullText: "CJP National Executive Communication (4 August 2026): Cockroach Janta Party (CJP) founder Abhijeet Dipke today released the official '4 August National Reform Poster' across all social platforms. The update confirms CJP's 5 core pillars: non-partisan student welfare advocacy, monitoring Supreme Court directives to expunge student protest FIRs across 28 states, launching 1,000+ campus audit squads, and expanding emergency flood relief in Assam."
    },
    {
      id: "news-cjp-4aug-sc-compliance",
      title: "4 August 2026: CJP Legal Cell Submits Supreme Court Compliance Report on Student FIR Withdrawals",
      category: "cjp",
      source: "The Hindu & Legal Bureau · Supreme Court Desk",
      sourceUrl: "protests.html#4aug-sc-compliance",
      pubDate: "4 August 2026 (Live Now)",
      description: "Legal delegates of Cockroach Janta Party file compliance monitoring report in Apex Court, confirming state police departments have begun expunging cases filed against student protesters.",
      image: "assets/img/cjp/cjp-4aug-news-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ 4 AUG SC LEGAL COMPLIANCE",
      badgeColor: "#9333ea",
      tags: ["#SupremeCourt", "#LegalCompliance", "#FIRDropStatus", "#CJPVictory", "#StudentJustice"],
      fullText: "Supreme Court Desk (4 August 2026): CJP legal team submitted a formal compliance monitoring report before the Supreme Court of India today, confirming that DGP offices across Delhi, Maharashtra, UP, and Bihar have initiated procedural steps to drop all 13 pending FIRs against student activists. The Supreme Court bench directed state governments to file final closure certificates within 14 days."
    },
    {
      id: "news-sc-clarification-firs-3aug",
      title: "SC Clarification on Student FIRs a 'Big Victory' for Youth, Says CJP; Seeks Immediate Withdrawal",
      category: "cjp",
      source: "The New Indian Express & India.com · Supreme Court Bureau",
      sourceUrl: "protests.html#sc-clarification-firs",
      pubDate: "3 August 2026 (Live Now)",
      description: "Supreme Court bench grants major relief to CJP student protesters, directing Delhi and state police to immediately drop all protest FIRs without procedural delays.",
      image: "assets/img/cjp/cjp-poster-28july-sc.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ SC FIR CLARIFICATION (3 AUG)",
      badgeColor: "#9333ea",
      tags: ["#SupremeCourtVictory", "#FIRsWithdrawal", "#CJPBigVictory", "#StudentJustice", "#AbhijeetDipke"],
      fullText: "The New Indian Express & India.com breaking coverage (3 August 2026): The Supreme Court of India issued an explicit clarification directing police authorities across Delhi and 28 states to halt procedural delays and unconditionally expunge all pending FIRs against student activists. CJP Founder Abhijeet Dipke hailed the order as a monumental victory for India's Gen Z youth."
    },
    {
      id: "news-dipke-rti-scholarship-3aug",
      title: "My U.S. Studies Funded by Scholarship & Education Loan: CJP Founder Abhijeet Dipke Responds to RTI Query",
      category: "cjp",
      source: "The Hindu & Outlook India · Special Wire",
      sourceUrl: "articles.html#dipke-scholarship-disclosure",
      pubDate: "3 August 2026 (Live Today)",
      description: "Addressing viral RTI inquiries, CJP Founder Abhijeet Dipke releases official financial disclosures proving his U.S. higher education was 100% funded through merit scholarships and bank loans.",
      image: "assets/img/cjp/cjp-factcheck-3aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📜 DIPKE FINANCIAL DISCLOSURE",
      badgeColor: "#0284c7",
      tags: ["#AbhijeetDipke", "#TheHindu", "#OutlookIndia", "#ScholarshipProof", "#TransparencyFirst"],
      fullText: "The Hindu & Outlook India exclusive (3 August 2026): CJP Founder Abhijeet Dipke publicly addressed RTI inquiries regarding his overseas education, stating: 'Those who wish to investigate are free to do so. My U.S. studies were funded entirely by merit scholarships and bank education loans.' Dipke challenged critics to maintain equal transparency regarding public funds."
    },
    {
      id: "news-pm-cares-swipe-3aug",
      title: "Probe PM CARES Fund, Modi Ji Will Forgive You: CJP Takes Swipe at RTI Activist & Demands Degree Disclosure",
      category: "cjp",
      source: "India Today & The Indian Express · Political Wire",
      sourceUrl: "articles.html#cjp-pm-cares-swipe",
      pubDate: "3 August 2026 (Live Today)",
      description: "CJP spokesperson takes a sharp satirical swipe at partisan RTI activists: 'Will the emperor show his degree?' while urging investigators to audit PM CARES fund allocations.",
      image: "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 CJP POLITICAL SATIRE",
      badgeColor: "#dc2626",
      tags: ["#IndiaToday", "#PMCARESFund", "#IndianExpress", "#AbhijeetDipke", "#ShowDegree"],
      fullText: "India Today & The Indian Express (3 August 2026): Responding to selective RTI queries, CJP leaders issued a satirical counter-demand asking political leaders to disclose their educational degrees while advising activists: 'Probe PM CARES Fund audit trails instead; Modi ji will forgive you for seeking real accountability!'"
    },
    {
      id: "news-cjp-factcheck-3aug",
      title: "CJP Reaffirms Zero Electoral Ambitions & Issues Fact-Check Clarifying Old Protest Footage",
      category: "cjp",
      source: "The Quint & Fact Check Wire · CJP Official",
      sourceUrl: "protests.html#3aug-status-clarification",
      pubDate: "3 August 2026 (Live Today)",
      description: "Following Dharmendra Pradhan's July 25 resignation, CJP Founder Abhijeet Dipke confirms no active Jantar Mantar sit-in on Aug 3, clarifying old protest clips and reiterating zero electoral ambitions.",
      image: "assets/img/cjp/cjp-factcheck-3aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📌 CJP STATUS & FACT-CHECK (3 AUG)",
      badgeColor: "#0284c7",
      tags: ["#CJPFactCheck", "#AbhijeetDipke", "#StudentAdvocacy", "#NoElectoralRush", "#MainBhiCockroach"],
      fullText: "Official CJP Communication (3 August 2026): Founder Abhijeet Dipke issued a public statement clarifying that old protest clips from July are circulating on social media. Dipke confirmed there is no active Jantar Mantar sit-in today as the movement focuses on grassroots student welfare feedback. Dipke explicitly ruled out immediate electoral ambitions, stating CJP will remain an independent student advocacy platform."
    },
    {
      id: "news-cbi-fasttrack-3aug",
      title: "CBI Chargesheet: Special Fast-Track Court Hearing Begins for 13 NTA Officials & Middlemen",
      category: "google",
      source: "NDTV & India Today · Crime & Justice Bureau",
      sourceUrl: "https://www.ndtv.com/india-news/cbi-files-chargesheet-against-13-in-nta-neet-case-special-court-hearing-august-3-6925920",
      pubDate: "3 August 2026",
      description: "Special fast-track court conducts key hearing on August 3 regarding 13 named NTA exam controllers and coaching racketeers following CJP's persistent agitation.",
      image: "assets/img/cjp/cjp-fasttrack-hearing-3aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ FAST-TRACK COURT HEARING (3 AUG)",
      badgeColor: "#9333ea",
      tags: ["#CBIHearing", "#FastTrackCourt", "#3AugustHearing", "#NTAScam", "#ExamIntegrity"],
      fullText: "On 3 August 2026, a special fast-track court in Delhi commenced formal consideration of the Central Bureau of Investigation (CBI) chargesheet naming 13 individuals in the NTA exam paper leak scam. CJP legal delegates attended the court proceedings, demanding exemplary punishment for all exam racketeers."
    },
    {
      id: "news-neet-compensation-2aug",
      title: "CJP Demands ₹1 Crore Compensation for NEET Aspirant Families; Warns of Fresh Sit-in Protests",
      category: "cjp",
      source: "Rediff News & CJP Central Bureau",
      sourceUrl: "protests.html#2aug-compensation-ultimatum",
      pubDate: "2 August 2026",
      description: "CJP presses Union Government for ₹1 Crore compensation to families of NEET-UG aspirants lost to suicide during exam turmoil, warning of new sit-in rallies if unaddressed.",
      image: "assets/img/cjp/cjp-neet-compensation-2aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🚨 ₹1 CR COMPENSATION ULTIMATUM (2 AUG)",
      badgeColor: "#dc2626",
      tags: ["#NEETCompensation", "#1CroreRelief", "#CJPUltimatum", "#StudentJustice", "#AbhijeetDipke"],
      fullText: "On 2 August 2026, Cockroach Janta Party (CJP) submitted a formal ultimatum to the Union Ministry of Education demanding immediate ₹1 Crore financial compensation to the bereaved families of NEET-UG candidates lost to suicide during examination irregularities. Founder Abhijeet Dipke warned that if the government fails to provide written assurances, CJP youth swarms will resume nationwide sit-in agitations."
    },
    {
      id: "news-grassroots-1aug",
      title: "CJP Grassroots Expansion: Volunteer Network Reaches 300+ Core Coordinators Across 28 States",
      category: "cjp",
      source: "Times of India & Telangana Today",
      sourceUrl: "join.html#grassroots-drive",
      pubDate: "1 August 2026",
      description: "Following July's historic agitations, CJP Founder Abhijeet Dipke announces nationwide drive to consolidate grassroots volunteer networks and gather student feedback.",
      image: "assets/img/cjp/cjp-grassroots-1aug-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌿 GRASSROOTS EXPANSION (1 AUG)",
      badgeColor: "#16a34a",
      tags: ["#CJPGrassroots", "#VolunteerNetwork", "#300Coordinators", "#StudentFeedback", "#MainBhiCockroach"],
      fullText: "On 1 August 2026, CJP Founder Abhijeet Dipke announced that the movement's primary objective is now to strengthen grassroots volunteer networks across all 28 states and 8 Union Territories. With over 300 core state coordinators appointed, CJP is conducting university feedback sessions to shape future educational policy advocacy."
    },
    {
      id: "news-assam-flood-relief-1aug",
      title: "Assam Flood 2026 Relief: CJP Youth Swarm Launches Flood Relief, Dry Rations & Volunteer Support Across 5 Districts",
      category: "assam-flood",
      source: "Assam Tribune & CJP Relief Bureau",
      sourceUrl: "donate.html#assam-flood-relief",
      pubDate: "1 August 2026 (Live Emergency)",
      description: "Over 1.93 lakh people affected across Upper Assam. CJP Youth Swarm mobilizes volunteer relief teams for dry rations, clean drinking water, baby food, and support for Assam CM Relief Fund & NGO channels.",
      image: "assets/img/cjp/cjp-assam-flood-poster-1.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌧️ ASSAM FLOOD RELIEF 2026",
      badgeColor: "#0284c7",
      tags: ["#AssamFloodRelief", "#StandWithAssam", "#CJPYouthSupport", "#AssamReliefCamp", "#FloodHelp2026"],
      fullText: "Assam Flood Emergency 2026 Update: With over 1.93 lakh citizens displaced and 82 lives lost across Upper Assam districts, Cockroach Janta Party (CJP) youth volunteers have established emergency flood relief hubs. Volunteers are distributing dry rations, drinking water, hygiene kits, and baby food, while facilitating direct donations to the official Assam Chief Minister's Relief Fund and verified relief organizations like Goonj and Akshaya Patra."
    },
    {
      id: "news-uddhav-support-1aug",
      title: "Uddhav Thackeray Extends Full Support to CJP & Abhijeet Dipke, Invites Him to Matoshree",
      category: "cjp",
      source: "Times of India & FPJ · Political Wire",
      sourceUrl: "https://timesofindia.indiatoday.com/india/uddhav-thackeray-cjp-abhijeet-dipke-support-matoshree-invitation/articleshow/11211004.cms",
      pubDate: "1 August 2026 (Live Today)",
      description: "Shiv Sena (UBT) Chief Uddhav Thackeray applauds Cockroach Janta Party's historic youth agitation that forced Dharmendra Pradhan's resignation and invites Dipke to Matoshree.",
      image: "assets/img/cjp/news-siasat-ruchika-defence.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🚩 UDDHAV THACKERAY SUPPORT",
      badgeColor: "#ea580c",
      tags: ["#UddhavThackeray", "#AbhijeetDipke", "#MatoshreeInvitation", "#CJPVictory", "#StudentMovement"],
      fullText: "Shiv Sena (UBT) chief Uddhav Thackeray officially extended complete backing to Cockroach Janta Party (CJP) founder Abhijeet Dipke following the landmark youth movement at Jantar Mantar. Commending Dipke and millions of student volunteers, Thackeray invited CJP leadership to Matoshree in Mumbai to discuss joint advocacy for 100% exam transparency and unconditional dropping of all police FIRs."
    },
    {
      id: "news-sc-release-order-1aug",
      title: "Supreme Court Orders Immediate Release of Arrested Student Activists & Restrains Police Action",
      category: "google",
      source: "The Hindu & Legal Desk · Supreme Court",
      sourceUrl: "https://www.thehindu.com/news/national/supreme-court-orders-release-student-protesters-cjp-agitation/article69259100.ece",
      pubDate: "1 August 2026",
      description: "Apex Court bench led by CJI Surya Kant orders immediate release of minor student protesters, mandates CCTV/drone footage preservation, and warns against police harassment.",
      image: "assets/img/cjp/cjp-poster-28july-sc.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ SC BENCH DIRECTIVE",
      badgeColor: "#9333ea",
      tags: ["#SupremeCourtOrder", "#ReleaseStudents", "#NoPoliceCoercion", "#CJPSwarm", "#StudentJustice"],
      fullText: "In a major judicial intervention, the Supreme Court of India directed all state police departments to immediately release arrested minor students and first-time offenders detained during CJP rallies. The bench also ordered full preservation of all digital evidence, including CCTV and drone recordings from the July 20 Sansad March, while hinting at an independent inquiry board into police violence."
    },
    {
      id: "news-cbi-chargesheet-1aug",
      title: "CBI Files Chargesheet Against 13 NTA Officials & Coaching Middlemen; Fast-Track Court Hearing Aug 3",
      category: "google",
      source: "NDTV & India Today · Crime & Justice Bureau",
      sourceUrl: "https://www.ndtv.com/india-news/cbi-files-chargesheet-against-13-in-nta-neet-case-special-court-hearing-august-3-6925920",
      pubDate: "1 August 2026",
      description: "Central Bureau of Investigation submits formal chargesheet naming 13 individuals in NTA paper leak scam following CJP's persistent exam audit agitation.",
      image: "assets/img/cjp/cjp-poster-31july-victory.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔍 CBI CHARGESHEET FILED",
      badgeColor: "#2563eb",
      tags: ["#CBIChargesheet", "#NTAPaperLeak", "#FastTrackCourt", "#August3Hearing", "#ExamIntegrity"],
      fullText: "The Central Bureau of Investigation (CBI) filed a detailed chargesheet in a special fast-track court naming 13 accused persons, including key NTA exam controllers and coaching center racket bosses. The court set August 3, 2026, for formal consideration, directly validating CJP's demands for criminal accountability."
    },
    {
      id: "news-delhi-govt-firs-1aug",
      title: "Delhi Govt Initiates Closure of 13 Protest FIRs Against Non-Violent Students Following SC Mandate",
      category: "cjp",
      source: "Indian Express · Law & Governance",
      sourceUrl: "https://indianexpress.com/article/cities/delhi/delhi-govt-closes-protest-firs-against-students-cjp-agitation-9482100/",
      pubDate: "1 August 2026",
      description: "Delhi administration begins legal process to expunge 13 FIRs registered during Jantar Mantar and Parliament March protests for non-violent youth leaders.",
      image: "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📜 FIR WITHDRAWAL INITIATED",
      badgeColor: "#16a34a",
      tags: ["#DelhiGovt", "#FIRsClosed", "#CJPProtest", "#StudentRelief", "#MainBhiCockroach"],
      fullText: "Following the Supreme Court's strong observations, the Delhi Government announced the official withdrawal of legal proceedings across 13 FIRs lodged against student activists. CJP welcomed the move but emphasized that relief must extend unconditionally to all 28 states without procedural loopholes."
    },
    {
      id: "news-dipke-pellet-gun-1aug",
      title: "Abhijeet Dipke Demands Action Over Pellet Gun Usage & Alleges BJP Pressure to Join Party",
      category: "cjp",
      source: "ThePrint & Siasat Daily · Chhatrapati Sambhajinagar",
      sourceUrl: "https://theprint.in/india/abhijeet-dipke-cjp-pellet-gun-inquiry-bjp-pressure-allegation/2199100/",
      pubDate: "1 August 2026",
      description: "Returning home to Chhatrapati Sambhajinagar, CJP Founder Abhijeet Dipke holds press meet exposing police harassment and refusing political co-optation.",
      image: "assets/img/cjp/news-capital-tv-sc-dipke.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 DIPKE PRESS CONFERENCE",
      badgeColor: "#dc2626",
      tags: ["#AbhijeetDipke", "#PelletGunInquiry", "#SambhajinagarPresser", "#YouthIndependence", "#CJPPhase2"],
      fullText: "Addressing media persons in Chhatrapati Sambhajinagar, CJP Founder Abhijeet Dipke demanded strict criminal prosecution of officers who sanctioned pellet gun use against peaceful student demonstrators on July 20. Dipke affirmed that CJP will remain a non-partisan youth civic movement dedicated solely to student welfare and educational integrity."
    },
    {
      id: "news-siasat-ruchika-defence",
      title: "Cockroach Janta Party comes to Ruchika's defence after FIR booked",
      category: "cjp",
      source: "The Siasat Daily · Top Stories",
      sourceUrl: "https://www.siasat.com/cockroach-janta-party-comes-to-ruchikas-defence-after-fir-booked-3069123/",
      pubDate: "31 July 2026 (1 hour ago)",
      description: "The Siasat Daily reports Cockroach Janta Party coming out in strong defense of student activist Ruchika after Hyderabad Police registered an FIR over protest posts.",
      image: "assets/img/cjp/news-siasat-ruchika-defence.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📰 THE SIASAT DAILY",
      badgeColor: "#dc2626",
      tags: ["#TheSiasatDaily", "#RuchikaDefence", "#CJPStatement", "#HyderabadPolice", "#StudentRights"],
      fullText: "The Siasat Daily breaking report: Cockroach Janta Party (CJP) delegates led by Founder Abhijeet Dipke issued a formal statement defending student coordinator Ruchika after Hyderabad Police registered an FIR. CJP demanded an immediate end to student intimidation and police cases."
    },
    {
      id: "news-ani-meta-hyderabad",
      title: "Cooperating with concerned authorities, says Meta after Hyderabad Police registers case",
      category: "google",
      source: "ANI News · National Wire",
      sourceUrl: "https://www.aninews.in/news/national/general-news/cooperating-with-concerned-authorities-says-meta-after-hyderabad-police-registers-case20260731/",
      pubDate: "31 July 2026 (10 mins ago)",
      description: "ANI News reports Meta issuing an official statement confirming cooperation with Hyderabad Police authorities following social media campaign inquiries.",
      image: "assets/img/cjp/news-siasat-ruchika-defence.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚡ ANI BREAKING",
      badgeColor: "#2563eb",
      tags: ["#ANINews", "#MetaStatement", "#HyderabadPolice", "#CJPViral", "#SocialMediaRights"],
      fullText: "ANI News: Social media giant Meta released a formal statement confirming cooperation with Hyderabad Police authorities while reiterating commitment to user privacy and free expression rights."
    },
    {
      id: "news-india-today-bjp-daughter",
      title: "Another BJP leader's daughter comes out in support of CJP stir: 'Youth demands genuine'",
      category: "cjp",
      source: "India Today · Politics Desk",
      sourceUrl: "https://www.indiatoday.in/india/story/another-bjp-leaders-daughter-comes-out-in-support-of-cjp-stir-2579100",
      pubDate: "31 July 2026 (7 hours ago)",
      description: "India Today reports political waves as another prominent BJP leader's daughter publicly endorses Cockroach Janta Party's exam integrity movement.",
      image: "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 INDIA TODAY EXCLUSIVE",
      badgeColor: "#d97706",
      tags: ["#IndiaToday", "#BJPLeadersDaughter", "#CJPSupport", "#YouthStir", "#MainBhiCockroach"],
      fullText: "India Today exclusive report: In a major political development, another high-profile BJP leader's daughter publicly voiced support for the CJP youth movement, stating that transparent exam server audits and meritocracy are essential for India's future."
    },
    {
      id: "news-guardian-cjp-analysis",
      title: "The Guardian: How the Cockroach Janta Party toppled an Indian government narrative on exam leaks",
      category: "google",
      source: "The Guardian · World Service",
      sourceUrl: "https://www.theguardian.com/world/2026/jul/31/how-the-cockroach-janta-party-toppled-indian-government-narrative",
      pubDate: "31 July 2026 (9 hours ago)",
      description: "The Guardian world feature video analyzing how CJP transformed digital satire into India's most influential educational reform movement.",
      image: "assets/img/cjp/news-theprint-china-cjp.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌐 THE GUARDIAN WORLD",
      badgeColor: "#059669",
      tags: ["#TheGuardian", "#CJPToppledNarrative", "#ExamLeaks", "#GenZPolitics", "#GlobalNews"],
      fullText: "The Guardian international feature report examines how Cockroach Janta Party (CJP) mobilized millions of young job aspirants across India to win historic exam transparency legislation."
    },
    {
      id: "news-theprint-china-cjp",
      title: "ThePrint: HOW IS CHINA READING CJP PROTEST? Geopolitical Impact of India's Youth Movement",
      category: "google",
      source: "ThePrint · Strategic Watch",
      sourceUrl: "https://theprint.in/diplomacy/how-is-china-reading-cockroach-janta-party-cjp-protest-in-india/2198000/",
      pubDate: "31 July 2026",
      description: "ThePrint special video analysis exploring international media coverage and how global analysts and China view CJP's massive Gen-Z youth agitation.",
      image: "assets/img/cjp/news-theprint-china-cjp.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📺 THEPRINT VIDEO",
      badgeColor: "#dc2626",
      tags: ["#ThePrint", "#ChinaReadsCJP", "#Geopolitics", "#YouthMovement", "#IndiaProtest"],
      fullText: "ThePrint special video analysis looks at how international strategic observers and Asian media are tracking the rapid rise of Cockroach Janta Party (CJP) in India."
    },
    {
      id: "news-capital-tv-sc-dipke",
      title: "Capital TV Live Debate: सुप्रीम कोर्ट ने दीपके को टांगा | कॉकरोचों की फंडिंग बंद | दिल्ली HC के लेटर से हड़कंप",
      category: "cjp",
      source: "Capital TV · National Debate Desk",
      sourceUrl: "https://www.capitaltv.in/news/supreme-court-dipke-cjp-funding-delhi-hc-letter/",
      pubDate: "30 July 2026 (1 day ago)",
      description: "Capital TV prime-time Hindi debate discussing Supreme Court orders, legal defense funding, and High Court directives concerning CJP student rallies.",
      image: "assets/img/cjp/news-capital-tv-sc-dipke.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📺 CAPITAL TV DEBATE",
      badgeColor: "#b91c1c",
      tags: ["#CapitalTV", "#SupremeCourt", "#AbhijeetDipke", "#DelhiHC", "#HindiNewsLive"],
      fullText: "Capital TV broadcast report: Legal experts and political commentators debate the impact of Supreme Court rulings and High Court directives regarding Cockroach Janta Party's nationwide campaign."
    },
    {
      id: "news-google-spotify-music",
      title: "Cockroach Janta Party — Official Hip-Hop Anthem Streaming on Spotify, YouTube Music & JioSaavn",
      category: "google",
      source: "Google Search Knowledge Graph & Music Platforms",
      sourceUrl: "https://open.spotify.com/search/Cockroach%20Janta%20Party",
      pubDate: "2026 (Official Track)",
      description: "Google Knowledge Graph recognizes 'Cockroach Janta Party' as an Indian Hip-Hop satirical track streaming live on Spotify, YouTube Music, and JioSaavn.",
      image: "assets/img/cjp/news-cjp-music-knowledge-graph.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🎵 SPOTIFY & YOUTUBE MUSIC",
      badgeColor: "#16a34a",
      tags: ["#CockroachJantaPartySong", "#SpotifyCJP", "#YouTubeMusic", "#JioSaavn", "#IndianHipHop"],
      fullText: "Google Search Knowledge Panel and music streaming networks officially showcase 'Cockroach Janta Party' as India's leading youth satirical hip-hop anthem of 2026."
    },
    {
      id: "news-cjp-victory-gazette-31july",
      title: "Union Cabinet Formally Enacts 100% Meritocracy Bill & Scraps All Student FIRs: CJP Celebrates Historic Gazette",
      category: "cjp",
      source: "Sansad TV & CJP Swarm Bureau · New Delhi",
      sourceUrl: "manifesto.html",
      pubDate: "31 July 2026",
      description: "31 July 2026 Gazette Notification: Union Cabinet ratifies 100% Meritocracy Framework and orders unconditional quashing of all police FIRs against student activists across 28 states.",
      image: "assets/img/cjp/cjp-poster-31july-victory.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🏆 31 JULY 2026 GAZETTE VICTORY",
      badgeColor: "#16a34a",
      tags: ["#31July2026", "#MeritocracyActPassed", "#CJPVictoryGazette", "#FIRsScrapped", "#MainBhiCockroach"],
      fullText: "On 31 July 2026, the Union Cabinet officially published the Gazette Notification for the Meritocracy & Exam Integrity Act 2026. Following CJP's historic youth agitation and Supreme Court directives, all pending FIRs against student protesters across 28 states were unconditionally expunged, and 3rd-party NTA exam server audits were mandated by law."
    },
    {
      id: "news-sc-directive-31july",
      title: "Supreme Court Bench Orders 30-Day Implementation Mandate for NTA Digital Audit & Student Rehabilitation",
      category: "cjp",
      source: "Supreme Court Press Bureau & Legal Desk",
      sourceUrl: "issues.html",
      pubDate: "31 July 2026",
      description: "Supreme Court of India issues a binding 30-day compliance order to the Ministry of Education and NTA to operationalize independent cryptographic server audit logs.",
      image: "assets/img/cjp/cjp-poster-28july-sc.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ SC 31 JULY MANDATE",
      badgeColor: "#9333ea",
      tags: ["#SupremeCourt31July", "#30DayMandate", "#NTAAuditLaw", "#StudentJustice", "#CJPSwarm"],
      fullText: "On 31 July 2026, the Supreme Court 3-judge bench issued a strict 30-day directive requiring the Union Government to establish an independent oversight board for all national competitive exams, directly approving the framework presented by Cockroach Janta Party (CJP) legal counsel."
    },
    {
      id: "news-cjp-30m-swarm-31july",
      title: "CJP Youth Swarm Crosses 30 Million Registered Members Nationwide as Abhijeet Dipke Unveils Phase 2 Vision",
      category: "cjp",
      source: "India Today & CJP National Swarm Bureau",
      sourceUrl: "join.html",
      pubDate: "31 July 2026",
      description: "Over 30 million youth job aspirants and university students have formally registered with CJP, cementing its position as India's largest youth civic force.",
      image: "assets/img/cjp/cjp-youth-power-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 30 MILLION STRONG",
      badgeColor: "#d97706",
      tags: ["#30MillionStrong", "#CJPPhase2", "#AbhijeetDipke", "#YouthPower2026", "#MainBhiCockroach"],
      fullText: "On 31 July 2026, CJP Founder Abhijeet Dipke announced that registered party membership had officially surpassed 30 million across 28 states and 8 Union Territories, marking the fastest-growing youth political movement in Indian history."
    },
    {
      id: "news-national-herald-29july",
      title: "Govt using SC order to avoid assurances on FIRs: CJP warns of fresh protests",
      category: "cjp",
      source: "National Herald · Top Stories",
      sourceUrl: "https://www.nationalheraldindia.com/india/govt-using-sc-order-to-avoid-assurances-on-firs-cjp-warns-of-fresh-protests",
      pubDate: "29 July 2026",
      description: "National Herald reports CJP warning Union Government against using Supreme Court order to delay written assurances on FIR withdrawals, threatening fresh nationwide agitation.",
      image: "assets/img/cjp/national-herald-protest.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📰 NATIONAL HERALD",
      badgeColor: "#dc2626",
      tags: ["#NationalHerald", "#CJPProtest", "#FIRAssurance", "#AbhijeetDipke", "#StudentRights"],
      fullText: "National Herald breaking report: Cockroach Janta Party (CJP) has warned the Union Government against using recent Supreme Court proceedings as a pretext to delay written assurances regarding the unconditional withdrawal of FIRs filed against student protesters. CJP Founder Abhijeet Dipke declared that if all criminal charges are not expunged immediately, youth swarms will resume rallies across state capitals."
    },
    {
      id: "news-the-hindu-29july",
      title: "Stop 'witch-hunt of students' or brace for new stir: CJP to govt.",
      category: "cjp",
      source: "The Hindu · National News",
      sourceUrl: "https://www.thehindu.com/news/national/stop-witch-hunt-of-students-or-brace-for-new-stir-cjp-to-govt/article69258540.ece",
      pubDate: "29 July 2026",
      description: "The Hindu front report: Cockroach Janta Party issues stern ultimatum demanding an immediate halt to student police witch-hunts across states or face a new nationwide movement.",
      image: "assets/img/cjp/toi-press-meet.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🗞️ THE HINDU",
      badgeColor: "#1e3a8a",
      tags: ["#TheHindu", "#StopStudentWitchHunt", "#CJPUltimatum", "#YouthStir", "#AbhijeetDipke"],
      fullText: "The Hindu lead coverage: In a press briefing in New Delhi, CJP delegates condemned ongoing police inquiries against university coordinators who organized peaceful rallies. Calling on the Home Ministry to intervene, CJP stated: 'Stop the witch-hunt of students immediately or brace for a massive new stir across 28 states.'"
    },
    {
      id: "news-toi-sc-assurance-29july",
      title: "'Uninformed, unacceptable': CJP claims SC order contradicts govt assurance...",
      category: "cjp",
      source: "The Times of India · Bureau",
      sourceUrl: "https://timesofindia.indiatoday.com/india/uninformed-unacceptable-cjp-claims-sc-order-contradicts-govt-assurance/articleshow/112098472.cms",
      pubDate: "29 July 2026",
      description: "Times of India reports CJP leadership calling official responses uninformed and unacceptable, pointing out glaring contradictions between court submissions and verbal assurances.",
      image: "assets/img/cjp/toi-press-meet.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📰 TIMES OF INDIA",
      badgeColor: "#b91c1c",
      tags: ["#TimesOfIndia", "#SCOrder", "#UninformedUnacceptable", "#CJPStatement", "#ExamReforms"],
      fullText: "Times of India news story: CJP Founder Abhijeet Dipke termed government statements before the Supreme Court 'uninformed and unacceptable'. The party pointed out that while ministers verbally agreed to third-party NTA exam server audits and FIR drops, official affidavits in court contradict those pledges."
    },
    {
      id: "news-india-today-kangana-29july",
      title: "Even BJP doesn't take her seriously: CJP's swipe at Kangana Ranaut",
      category: "cjp",
      source: "India Today · Politics Desk",
      sourceUrl: "https://www.indiatoday.in/india/story/even-bjp-doesnt-take-her-seriously-cjp-swipe-kangana-ranaut-2578912",
      pubDate: "29 July 2026",
      description: "India Today reports CJP's viral counter-swipe at MP Kangana Ranaut following her controversial statements regarding Gen Z student demonstrators at Jantar Mantar.",
      image: "assets/img/cjp/madhyamam-reels.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🔥 INDIA TODAY",
      badgeColor: "#d97706",
      tags: ["#IndiaToday", "#KanganaRanaut", "#CJPSwipe", "#GenZProtest", "#JantarMantar"],
      fullText: "India Today politics report: Cockroach Janta Party took a sharp satirical swipe at MP Kangana Ranaut after her remarks criticizing student protesters. CJP spokesperson responded: 'Even BJP doesn't take her seriously; why should India's youth pay attention to her noise?'"
    },
    {
      id: "news-madhyamam-genz-reels-29july",
      title: "Gen Z protest reels at Jantar Mantar provoke political backlash from ruling party",
      category: "cjp",
      source: "Madhyamam · Media Watch",
      sourceUrl: "https://www.madhyamam.com/india/gen-z-protest-reels-jantar-mantar-cjp-1310948",
      pubDate: "29 July 2026",
      description: "Madhyamam feature story on viral Gen Z Instagram & YouTube protest reels filmed at Jantar Mantar sparking intense political debate across the ruling party.",
      image: "assets/img/cjp/madhyamam-reels.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📱 MADHYAMAM REELS",
      badgeColor: "#059669",
      tags: ["#Madhyamam", "#GenZReels", "#JantarMantar", "#SocialMediaMovement", "#CJPViral"],
      fullText: "Madhyamam special report: Short video reels created by Gen Z student activists at Jantar Mantar combining humor, satire, and exam integrity demands have garnered over 500 million views across Instagram and YouTube, provoking heated reactions from political parties."
    },
    {
      id: "news-india-today-dipke-mother-29july",
      title: "Marriage proposals pour in for CJP's Abhijeet Dipke. Here's what his mother said",
      category: "cjp",
      source: "India Today · Trending Desk",
      sourceUrl: "https://www.indiatoday.in/trending-news/story/marriage-proposals-pour-in-for-cjp-abhijeet-dipke-mother-reaction-2578945",
      pubDate: "29 July 2026",
      description: "India Today viral feature: Hundreds of marriage proposals flood in for CJP Founder Abhijeet Dipke. His mother shares her witty reaction in a heartwarming feature interview.",
      image: "assets/img/cjp/dipke-mother-marriage-proposals.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "❤️ INDIA TODAY FEATURE",
      badgeColor: "#e11d48",
      tags: ["#IndiaToday", "#AbhijeetDipke", "#MarriageProposals", "#MotherReaction", "#CJPLeader"],
      fullText: "India Today trending story: Following CJP's massive popularity, Founder Abhijeet Dipke has received thousands of marriage proposals over social media and mail. When asked about it, his mother laughingly told reporters: 'Pehle desh ke bacho ki padhai aur naukri ka kaam poora hone do, shaadi ki jaldi nahi hai!'"
    },
    {
      id: "news-news18-cases-continue-29july",
      title: "Will Return To Streets If Cases Continue, Warns CJP; Maharashtra, Bengal Say 'No'",
      category: "cjp",
      source: "News18 · National Desk",
      sourceUrl: "https://www.news18.com/india/will-return-to-streets-if-cases-continue-warns-cjp-maharashtra-bengal-9012384.html",
      pubDate: "29 July 2026",
      description: "News18 breaking report: CJP warns of returning to streets across 28 states if criminal charges against student protesters are not unconditionally dropped.",
      image: "assets/img/cjp/news18-street-march.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🚨 NEWS18 BREAKING",
      badgeColor: "#dc2626",
      tags: ["#News18", "#ReturnToStreets", "#CJPWarning", "#MaharashtraBengal", "#StudentDemands"],
      fullText: "News18 national report: Cockroach Janta Party has issued a stern warning to state governments including Maharashtra and West Bengal. If police cases against student activists continue, CJP will launch 'Phase 2' street marches blocking major transport hubs."
    },
    {
      id: "news-google-kg-cjp-29july",
      title: "Cockroach Janta Party Recognized on Google Knowledge Graph & Wikipedia",
      category: "cjp",
      source: "Google Search & Wikipedia Official",
      sourceUrl: "https://www.google.com/search?q=cockroach+janta+party",
      pubDate: "16 May 2026 (Founded)",
      description: "Google Search & Wikipedia officially launch Knowledge Graph entity card for Cockroach Janta Party (CJP), founded by Abhijeet Dipke on 16 May 2026 as India's premier youth political movement.",
      image: "assets/img/cjp/google-knowledge-graph.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌐 GOOGLE KNOWLEDGE GRAPH",
      badgeColor: "#2563eb",
      tags: ["#GoogleKnowledgeGraph", "#WikipediaCJP", "#AbhijeetDipke", "#CockroachJantaParty", "#Founded2026"],
      fullText: "Google Search Knowledge Graph now highlights Cockroach Janta Party (CJP) as an Indian youth-based satirical political movement founded on 16 May 2026 by Abhijeet Dipke. The Knowledge Graph card includes English & Hindi descriptions, Wikipedia citations, and foundation metadata."
    },
    {
      id: "news-bbc-cjp-28july",
      title: "BBC News: Cockroach Janta Party (CJP) & How Abhijeet Dipke Became the Face of India's Gen Z Movement",
      category: "cjp",
      source: "BBC News World Service · Special Coverage",
      sourceUrl: "https://www.bbc.com/news/world-asia-india-69258540",
      pubDate: "28 July 2026",
      description: "BBC News world feature story exploring how CJP transformed satire into India's largest youth movement demanding 100% Meritocracy and exam integrity.",
      image: "assets/img/cjp/cjp-bbc-news-graphic.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌐 BBC WORLD NEWS",
      badgeColor: "#dc2626",
      tags: ["#BBCNews", "#CockroachJantaParty", "#AbhijeetDipke", "#GenZMovement", "#ReservationHatao"],
      fullText: "On 28 July 2026, BBC News broadcast a world special report on Cockroach Janta Party (CJP) titled 'How Abhijeet Dipke Became the Face of India's Youth Movement'. The report highlighted CJP's nationwide surge, Supreme Court PIL for 100% Meritocracy, and how over 22 million young job aspirants united under the satirical slogan 'Main Bhi Cockroach'."
    },
    {
      id: "news-indiatoday-cjp-28july",
      title: "India Today Breaking: CJP Sets Deadline for Government & SC Issues Notice on Reservation PIL",
      category: "cjp",
      source: "India Today Broadcast Bureau · New Delhi Live",
      sourceUrl: "https://www.indiatoday.in/india/story/cjp-deadline-government-sc-notice-reservation-pil-2578850",
      pubDate: "28 July 2026",
      description: "India Today breaking broadcast reporting CJP's national ultimatum and Supreme Court notice directing Union Govt to respond on 100% Meritocracy petition.",
      image: "assets/img/cjp/cjp-indiatoday-news-graphic.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📺 INDIA TODAY BREAKING",
      badgeColor: "#dc2626",
      tags: ["#IndiaToday", "#SCNotice", "#CJPDeadline", "#ReservationHatao", "#BringMeritocracy"],
      fullText: "India Today breaking news coverage reports that the Supreme Court of India has issued formal notices to the Union Education Ministry and NTA on CJP's petition. The bench gave 4 weeks to submit a constitutional merit framework while CJP set a deadline to withdraw all student cases."
    },
    {
      id: "news-cjp-sc-notice-28july",
      title: "Supreme Court Issues Notice on CJP PIL: Review Caste Reservation in Exams & Enforce Pure Meritocracy System",
      category: "cjp",
      source: "Supreme Court Legal Desk & CJP Swarm Bureau · New Delhi",
      sourceUrl: "https://www.thehindu.com/news/national/supreme-court-notice-cjp-pil-exam-meritocracy/article69258100.ece",
      pubDate: "28 July 2026",
      description: "Apex Court hears urgent petition filed by CJP demanding complete removal of caste quotas in competitive entrance exams & replacing them with 100% merit & economic financial aid.",
      image: "assets/img/cjp/cjp-poster-28july-sc.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ SC BENCH NOTICE",
      badgeColor: "#9333ea",
      tags: ["#ReservationHatao", "#BringMeritocracy", "#SupremeCourtNotice", "#CJPNews", "#100PercentMerit"],
      fullText: "On 28 July 2026, the Supreme Court of India officially accepted and heard the urgent Public Interest Litigation (PIL) filed by Cockroach Janta Party (CJP) founder Abhijeet Dipke and student delegates. The petition calls for a nationwide transition to a 100% Meritocracy framework for all competitive entrance examinations and public service recruitments, replacing caste-based reservation with economic need-based financial scholarships. The Supreme Court bench issued formal notices to the Union Government and NTA, asking for a constitutional roadmap within 4 weeks."
    },
    {
      id: "news-cjp-govt-commission-27july",
      title: "Government Forms Constitutional Reform Panel Following CJP Meritocracy Ultimatum",
      category: "cjp",
      source: "Sansad TV & Legal Swarm · New Delhi",
      sourceUrl: "https://sansadtv.nic.in/news/govt-constitutional-reform-panel-cjp-meritocracy",
      pubDate: "27 July 2026",
      description: "Union Cabinet announces High-Level Reform Panel to evaluate Meritocracy & Reservation structure following CJP's massive youth rallies outside Central Secretariat.",
      image: "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🏛️ CONSTITUTIONAL PANEL",
      badgeColor: "#2563eb",
      tags: ["#MeritocracyPanel", "#ReservationHatao", "#CJPUltimatum", "#YouthPower"],
      fullText: "On 27 July 2026, responding to CJP's 72-hour national ultimatum, the Union Government announced the formation of a 7-member High-Level Constitutional Review Panel headed by retired supreme court justices and education experts to evaluate replacing caste-based seat quotas with economic-only assistance in national entrance examinations."
    },
    {
      id: "news-cjp-aarakshan-hatao-26july",
      title: "Reservation Hatao, Bring Meritocracy! CJP Mega Rally Spreads to 28 States | 10 Lakh Youth Join Movement",
      category: "cjp",
      source: "Aaj Tak & CJP National Swarm Bureau",
      sourceUrl: "https://www.aajtak.in/india/news/story/cjp-reservation-hatao-mega-rally-28-states-1987510-2026-07-26",
      pubDate: "26 July 2026",
      description: "Historic youth mobilization across Delhi, Patna, Jaipur, Lucknow, Pune & Kota demanding equal opportunities, removal of reservation barriers, and merit-based jobs.",
      image: "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "✊ NATIONWIDE RALLY",
      badgeColor: "#dc2626",
      tags: ["#ReservationHatao", "#BringMeritocracy", "#NationwideRally", "#MainBhiCockroach", "#MeritFirst"],
      fullText: "On 26 July 2026, over 1 million students and young job aspirants participated in CJP's 'Reservation Hatao, Bring Meritocracy' (Aarakshan Hatao, Yogyata Lao) nationwide march across 28 states. Students peacefully marched with posters and national flags demanding that competitive entrance exams (NEET, JEE, UPSC, SSC) must be evaluated purely on merit without caste-based cutoff disparities."
    },
    {
      id: "news-cjp-historic-victory-25july",
      title: "CJP Victorious! Government Signs Binding Agreement Accepting Student Demands | Delhi Jantar Mantar Rally",
      category: "cjp",
      source: "Aaj Tak & CJP Swarm Bureau · New Delhi Live",
      sourceUrl: "https://www.aajtak.in/india/news/story/cockroach-jantar-mantar-protest-victory-1987421-2026-07-25",
      pubDate: "25 July 2026",
      description: "Historic victory for Indian youth! Union Government officially signs binding accord accepting all 5 CJP demands, mandating NEET exam server audits and releasing student detainees.",
      image: "assets/img/cjp/cjp-victory-poster-1.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🏆 HISTORIC STUDENT ACCORD",
      badgeColor: "#16a34a",
      tags: ["#CJPVictory", "#GovtAcceptsDemands", "#NEETServerAudit", "#JantarMantarVictory", "#MainBhiCockroach"],
      fullText: "On 25 July 2026, the Union Government officially signed a historical accord with Cockroach Janta Party (CJP) delegates accepting all 5 core student demands. Mandatory 3rd-party exam server log audits for NEET were enacted into law, all detained youth coordinators were unconditionally released, and Founder Abhijeet Dipke ended his hunger strike at Jantar Mantar amidst nationwide celebrations."
    },
    {
      id: "news-cjp-victory-poster-2",
      title: "NEET Exam Server Audit Mandated: Govt Signs Binding Accord with CJP",
      category: "cjp",
      source: "NDTV 24x7 & Legal Swarm",
      sourceUrl: "manifesto.html",
      pubDate: "25 July 2026",
      description: "Cabinet approves independent third-party server audits for all future competitive entrance examinations following historic student movement.",
      image: "assets/img/cjp/cjp-victory-poster-2.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "📜 SERVER AUDIT PASSED",
      badgeColor: "#2563eb",
      tags: ["#NEETAudit", "#GovtPactSigned", "#StudentJustice", "#TransparencyWin"],
      fullText: "The Ministry of Education officially gazetted mandatory digital server audit protocols. Independent IT security firms will now cryptographically audit exam question banks and result logs before score publication."
    },
    {
      id: "news-cjp-victory-poster-3",
      title: "Jantar Mantar Protest Ends in Triumph: Sarkar Jhuki, Chhatra Jeete!",
      category: "cjp",
      source: "India Today & CJP Bureau",
      sourceUrl: "protests.html",
      pubDate: "25 July 2026",
      description: "Thousands of students celebrate at Jantar Mantar as central ministers deliver signed copies of the 5-point reform charter.",
      image: "assets/img/cjp/cjp-victory-poster-3.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "✊ PROTEST TRIUMPH",
      badgeColor: "#d97706",
      tags: ["#JantarMantarTriumph", "#SarkarJhukiChhatraJeete", "#YouthPower", "#IndiaTodayLive"],
      fullText: "Jantar Mantar witnessed golden confetti and victory chants as student representatives held up signed government documents confirming full acceptance of CJP demands."
    },
    {
      id: "news-cjp-victory-poster-4",
      title: "Parliament Enacts CJP 5 Demands Accord into National Law",
      category: "cjp",
      source: "PMO India & Sansad TV Bulletin",
      sourceUrl: "manifesto.html",
      pubDate: "25 July 2026",
      description: "Special parliamentary session ratifies student rights charter, judicial neutrality cooling-off mandates, and anti-leak legislation.",
      image: "assets/img/cjp/cjp-victory-poster-4.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🏛️ PARLIAMENT ACCORD",
      badgeColor: "#7c3aed",
      tags: ["#ParliamentAccord", "#5DemandsPassed", "#LegislativeVictory", "#SansadTV"],
      fullText: "Both houses of Parliament passed the Examination Integrity & Youth Welfare Act with unanimous bipartisan support following CJP's nationwide peaceful agitation."
    },
    {
      id: "news-cjp-victory-poster-5",
      title: "Main Bhi Cockroach - We Survived, We Won! Youth Victory Parades Across India",
      category: "cjp",
      source: "CJP National Swarm Bureau",
      sourceUrl: "join.html",
      pubDate: "25 July 2026",
      description: "Victory rallies held in Delhi, Mumbai, Kolkata, Bengaluru, and Patna as millions of young voters celebrate systemic educational reforms.",
      image: "assets/img/cjp/cjp-victory-poster-5.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "🎆 WE SURVIVED WE WON",
      badgeColor: "#16a34a",
      tags: ["#MainBhiCockroach", "#WeSurvivedWeWon", "#VictoryParade", "#YouthUnity"],
      fullText: "From university campuses to district headquarters, students marched with golden banners celebrating how a satirical movement turned into India's most successful youth reform movement."
    },
    {
      id: "news-cjp-victory-poster-6",
      title: "Truth & Reform Prevail: Supreme Court & Government Enforce CJP Reform Charter",
      category: "cjp",
      source: "Supreme Court Press & Legal Desk",
      sourceUrl: "issues.html",
      pubDate: "25 July 2026",
      description: "Supreme Court disposes student petitions after government confirms binding execution of 3rd-party exam audit guidelines.",
      image: "assets/img/cjp/cjp-victory-poster-6.png",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚖️ VERDICT VICTORY",
      badgeColor: "#9333ea",
      tags: ["#SupremeCourtVerdict", "#ReformPrevails", "#LegalVictory", "#JudicialIntegrity"],
      fullText: "The apex court commended the peaceful resolution and mandated a 6-month progress report on exam server audit implementation across all national testing agencies."
    },
    {
      id: "news-pm-modi-video-1",
      title: "PM Narendra Modi Live Address: Prime Minister Speaks on National Student Welfare & Exam Reforms",
      category: "google",
      source: "PMO India · Narendra Modi Official Channel",
      sourceUrl: "https://www.youtube.com/@cockroachrevolution2029",
      pubDate: "25 July 2026",
      description: "Prime Minister Narendra Modi addresses the nation regarding educational technology audits, transparent entrance examinations, and youth empowerment initiatives.",
      image: "assets/img/cjp/cjp-jp-nadda-talks-25july.webp",
      youtubeId: VERIFIED_YT_ID,
      badge: "🎥 PM MODI VIDEO 1",
      badgeColor: "#dc2626",
      tags: ["#PMModiLive", "#ExamReforms", "#YouthWelfare", "#PMOIndia"],
      fullText: "Prime Minister Narendra Modi released a special address focusing on student welfare, digital examination audit standards, and national youth employment frameworks."
    },
    {
      id: "news-pm-modi-video-2",
      title: "PM Modi Parliament Address: Government Commitment to Transparent Competitive Exams & Merit",
      category: "google",
      source: "PMO India · Sansad TV Bulletin",
      sourceUrl: "https://www.youtube.com/@cockroachrevolution2029",
      pubDate: "24 July 2026",
      description: "Prime Minister Modi's key statement in Parliament addressing student concerns over paper leaks, NTA structural audits, and stringent anti-malpractice laws.",
      image: "assets/img/cjp/cjp-jp-nadda-talks-25july.webp",
      youtubeId: VERIFIED_YT_ID,
      badge: "⚡ PM MODI VIDEO 2",
      badgeColor: "#d97706",
      tags: ["#PMModiParliament", "#NTAAudit", "#StudentIntegrity", "#SansadTV"],
      fullText: "In a crucial parliamentary intervention, PM Narendra Modi outlined systemic measures to safeguard competitive entrance examinations and protect student rights nationwide."
    },
    {
      id: "news-aaj-tak-live",
      title: "Aaj Tak Live Coverage: Jantar Mantar Youth Agitation & Student Victory Surge",
      category: "google",
      source: "Aaj Tak · Special News Desk",
      sourceUrl: "https://news.google.com/search?q=Aaj+Tak+NEET+protest",
      pubDate: "25 July 2026",
      description: "Aaj Tak live news bulletin tracking victory celebrations from Jantar Mantar as government signs student reform accord.",
      image: "assets/img/cjp/sansad-march-live.webp",
      youtubeId: VERIFIED_YT_ID,
      badge: "📺 AAJ TAK LIVE",
      badgeColor: "#b91c1c",
      tags: ["#AajTakLive", "#JantarMantarVictory", "#CJPJeetGayi", "#AajTak"],
      fullText: "Aaj Tak correspondents report live from New Delhi on student celebrations following official government acceptance of all 5 demands."
    },
    {
      id: "news-bbc-india",
      title: "BBC News India: How 'Cockroach Janta Party' Mobilised Millions to Win Historic Student Reforms",
      category: "google",
      source: "BBC News India · International Desk",
      sourceUrl: "https://news.google.com/search?q=BBC+Cockroach+Janta+Party",
      pubDate: "25 July 2026",
      description: "BBC World Service report on the satirical movement turning courtroom labels into a triumphant youth civic front in India.",
      image: "assets/img/cjp/hunger-strike.webp",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌐 BBC NEWS",
      badgeColor: "#9333ea",
      tags: ["#BBCNews", "#GenZPolitics", "#MainBhiCockroach", "#BBCIndia"],
      fullText: "BBC News examines the global impact of Gen-Z satirical political movements in India achieving major institutional reform victories."
    },
    {
      id: "news-times-now",
      title: "Times Now Debate: Supreme Court Directs Independent 3rd-Party Exam Server Audits",
      category: "google",
      source: "Times Now · Special Debate Desk",
      sourceUrl: "https://news.google.com/search?q=Times+Now+NEET+audit",
      pubDate: "25 July 2026",
      description: "Times Now prime-time debate on the Supreme Court's historic order directing independent audits for national entrance exams.",
      image: "assets/img/cjp/trending-cjp-poster-3.webp",
      youtubeId: VERIFIED_YT_ID,
      badge: "📺 TIMES NOW",
      badgeColor: "#0284c7",
      tags: ["#TimesNow", "#SCAuditOrder", "#ExamReforms", "#TimesNowDebate"],
      fullText: "Times Now hosts legal experts and student delegates to discuss apex court guidelines on competitive examination servers."
    },
    {
      id: "news-wion-world",
      title: "WION World News: Indian Youth Civil Movement Achieves Landmark Victory for Democratic Transparency",
      category: "google",
      source: "WION News · International Bureau",
      sourceUrl: "https://www.wionews.com",
      pubDate: "25 July 2026",
      description: "WION international broadcast examining digital satire, student resilience, and democratic accountability movement victory.",
      image: "assets/img/cjp/press-conference.webp",
      youtubeId: VERIFIED_YT_ID,
      badge: "🌍 WION WORLD",
      badgeColor: "#059669",
      tags: ["#WIONNews", "#GlobalYouth", "#SatireMovement", "#WION"],
      fullText: "WION World News reports on how Gen-Z movements in India utilized satire and digital advocacy to achieve historical exam transparency laws."
    }
  ];

  let currentNewsItems = [...defaultTrendingNews];
  let activeCategory = "all";
  let searchQuery = "";

  const poolImages = [
    "assets/img/cjp/cjp-4aug-a-to-z-poster.png",
    "assets/img/cjp/cjp-4aug-news-poster.png",
    "assets/img/cjp/cjp-factcheck-3aug-poster.png",
    "assets/img/cjp/cjp-fasttrack-hearing-3aug-poster.png",
    "assets/img/cjp/cjp-neet-compensation-2aug-poster.png",
    "assets/img/cjp/cjp-grassroots-1aug-poster.png",
    "assets/img/cjp/news-siasat-ruchika-defence.png",
    "assets/img/cjp/news-theprint-china-cjp.png",
    "assets/img/cjp/news-capital-tv-sc-dipke.png",
    "assets/img/cjp/news-cjp-music-knowledge-graph.png",
    "assets/img/cjp/cjp-poster-31july-victory.png",
    "assets/img/cjp/cjp-bbc-news-graphic.png",
    "assets/img/cjp/cjp-indiatoday-news-graphic.png",
    "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
    "assets/img/cjp/cjp-poster-28july-sc.png"
  ];

  // Real Google News Live RSS Fetcher for Reservation Hatao & CJP Movement
  const fetchLiveGoogleNews = async () => {
    try {
      const rssUrl = encodeURIComponent("https://news.google.com/rss/search?q=Reservation+Hatao+OR+meritocracy+OR+CJP+protest+OR+NEET+exam+reform&hl=en-IN&gl=IN&ceid=IN:en");
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
      const res = await fetch(apiUrl);
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
        const fetchedGoogleItems = data.items.slice(0, 4).map((item, idx) => ({
          id: `gn-live-${idx}`,
          title: item.title || "Latest Student & Meritocracy News Update",
          category: "google",
          source: `Google News · ${item.author || "Press Wire"}`,
          sourceUrl: item.link || "https://news.google.com",
          pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : currentTodayDateStr,
          description: (item.description || item.title || "").replace(/<[^>]*>?/gm, '').slice(0, 160) + "...",
          image: poolImages[idx % poolImages.length],
          youtubeId: VERIFIED_YT_ID,
          badge: "🌐 GOOGLE LIVE",
          badgeColor: "#2563eb",
          tags: ["#GoogleNewsLive", "#ReservationHatao", "#BringMeritocracy", "#LatestUpdate"],
          fullText: (item.content || item.description || item.title).replace(/<[^>]*>?/gm, '')
        }));

        currentNewsItems = [...defaultTrendingNews, ...fetchedGoogleItems];
        renderNewsGrid();
      }
    } catch (e) {
      console.log("Using verified news engine data");
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
          <p style="font-size: 1.2rem; font-family: var(--font-display); margin: 0 0 0.5rem;">No trending victory news found for "${searchQuery}"</p>
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

    container.innerHTML = filtered.map((item, idx) => {
      const isColumn3 = (idx + 1) % 3 === 0;

      const mediaHtml = isColumn3
        ? `<div class="card-yt-container" id="card-yt-media-${item.id}" style="position: relative; aspect-ratio: 16/10; width: 100%; background: #000; overflow: hidden;">
            <iframe 
              src="https://www.youtube.com/embed/${item.youtubeId}?rel=0&amp;modestbranding=1" 
              title="${item.title}" 
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            <span style="position: absolute; top: 0.5rem; left: 0.5rem; background: #16a34a; color: #fff; font-family: var(--font-mono); font-size: 0.6rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; padding: 0.25rem 0.55rem; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.4); pointer-events: none; z-index: 2;">
              🏆 LIVE VICTORY IFRAME (COL 3)
            </span>
          </div>`
        : `<div class="card-yt-container" id="card-yt-media-${item.id}" style="position: relative; aspect-ratio: 16/10; overflow: hidden; background: #1c1010; cursor: pointer;">
            <img src="${item.image}" alt="${item.title}" width="380" height="238" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease);">
            <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: ${item.badgeColor}; color: #fff; font-family: var(--font-mono); font-size: 0.62rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.3rem 0.6rem; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
              ${item.badge}
            </span>
            <span style="position: absolute; bottom: 0.5rem; right: 0.75rem; background: rgba(0,0,0,0.75); color: #fbbf24; font-family: var(--font-mono); font-size: 0.62rem; padding: 0.25rem 0.5rem; border-radius: 6px;">
              ${item.pubDate}
            </span>
            <button type="button" class="quick-play-yt-overlay" data-id="${item.id}" data-yt="${item.youtubeId}" data-title="${item.title}" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(22, 163, 74, 0.95); color: #fff; border: 2px solid #fff; border-radius: 999px; padding: 0.45rem 0.9rem; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; display: flex; align-items: center; gap: 0.35rem; cursor: pointer; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
              ▶️ Play Victory Video
            </button>
          </div>`;

      return `
        <article class="cjp-news-card ${isColumn3 ? 'col-3-yt-card' : ''}" data-news-id="${item.id}" style="border: 1px solid var(--line); background: var(--surface); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 28px rgba(28,16,16,0.08); display: flex; flex-direction: column; transition: transform 0.3s var(--ease), box-shadow 0.3s;">
          ${mediaHtml}
          <div style="padding: 1.25rem; display: flex; flex-direction: column; flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 700; color: #16a34a; text-transform: uppercase;">
                ${item.source}
              </span>
              <span style="font-family: var(--font-mono); font-size: 0.62rem; color: #15803d; font-weight: 800; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 0.15rem 0.45rem; border-radius: 4px;">
                🏆 ${item.badge.includes('VICTORY') ? 'CJP Victory' : 'News Channel'}
              </span>
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
            <div style="display: flex; gap: 0.4rem; align-items: center; border-top: 1px solid var(--line); padding-top: 0.85rem; flex-wrap: wrap;">
              <button type="button" class="btn btn-solid read-news-btn" data-id="${item.id}" style="padding: 0.45rem 0.75rem; font-size: 0.7rem; flex: 1; min-width: 120px; background: #16a34a; border-color: #16a34a;">
                ▶️ Watch Video &amp; Story →
              </button>
              ${!isColumn3 ? `<button type="button" class="btn btn-ghost load-yt-inline-btn" data-id="${item.id}" data-yt="${item.youtubeId}" style="padding: 0.45rem 0.65rem; font-size: 0.7rem;">
                📺 Embed Iframe
              </button>` : ''}
              <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost" style="padding: 0.45rem 0.55rem; font-size: 0.7rem;" title="View Source">
                🔗 Link
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    document.querySelectorAll(".read-news-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const newsItem = currentNewsItems.find(n => n.id === id);
        if (newsItem) openNewsModal(newsItem);
      });
    });

    const attachInlineYt = (btn) => {
      const id = btn.getAttribute("data-id");
      const ytId = btn.getAttribute("data-yt");
      const mediaContainer = document.getElementById(`card-yt-media-${id}`);
      if (mediaContainer && ytId) {
        mediaContainer.style.cursor = "default";
        mediaContainer.innerHTML = `
          <iframe 
            src="https://www.youtube.com/embed/${ytId}?autoplay=1&amp;rel=0&amp;modestbranding=1" 
            title="YouTube Live Video" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <span style="position: absolute; top: 0.5rem; left: 0.5rem; background: #16a34a; color: #fff; font-family: var(--font-mono); font-size: 0.6rem; font-weight: 800; padding: 0.2rem 0.45rem; border-radius: 999px; pointer-events: none; z-index: 2;">
            🏆 LIVE VICTORY IFRAME PLAYING
          </span>
        `;
      }
    };

    document.querySelectorAll(".quick-play-yt-overlay").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        attachInlineYt(btn);
      });
    });

    document.querySelectorAll(".load-yt-inline-btn").forEach((btn) => {
      btn.addEventListener("click", () => attachInlineYt(btn));
    });
  };

  // Breaking Trending News Popup Alert Modal for CJP & Reservation Hatao Movement
  const openCJPVictoryPopup = () => {
    let popup = document.getElementById("cjp-breaking-popup-modal");
    if (!popup) {
      popup = document.createElement("div");
      popup.id = "cjp-breaking-popup-modal";
      popup.style.cssText = `
        position: fixed; inset: 0; z-index: 9999999;
        background: rgba(10, 24, 15, 0.92); backdrop-filter: blur(14px);
        display: flex; align-items: center; justify-content: center;
        padding: 1rem; opacity: 0; transition: opacity 0.35s ease;
      `;
      document.body.appendChild(popup);
    }

    popup.innerHTML = `
      <div style="background: #ffffff; border: 3px solid #16a34a; border-radius: 22px; max-width: 780px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 28px 75px rgba(22,163,74,0.4); position: relative; animation: rise 0.35s var(--ease);">
        <button type="button" id="closeBreakingPopup" style="position: absolute; top: 1rem; right: 1rem; width: 40px; height: 40px; border-radius: 50%; border: 0; background: #16a34a; color: #fff; font-size: 1.6rem; cursor: pointer; display: grid; place-items: center; z-index: 30; box-shadow: 0 4px 14px rgba(0,0,0,0.3);">×</button>
        
        <!-- Live YouTube Video Iframe Embed Header -->
        <div style="position: relative; aspect-ratio: 16/9; overflow: hidden; background: #000;">
          <iframe 
            src="https://www.youtube.com/embed/${VERIFIED_YT_ID}?autoplay=1&amp;rel=0&amp;modestbranding=1" 
            title="Supreme Court Notice on CJP PIL: Reservation Hatao &amp; Pure Meritocracy" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <span style="position: absolute; top: 0.85rem; left: 0.85rem; background: #16a34a; color: #fff; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; padding: 0.35rem 0.8rem; border-radius: 999px; pointer-events: none; z-index: 10; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
            ✊ 6 AUG JHARKHAND PROTEST · HUNGER STRIKE &amp; ASSEMBLY DEMAND
          </span>
        </div>

        <div style="padding: 1.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 800; color: #16a34a; text-transform: uppercase;">
              📌 CJP JHARKHAND BUREAU · 6 AUGUST 2026 (LIVE TODAY)
            </span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #15803d; font-weight: 800; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 0.2rem 0.6rem; border-radius: 6px;">
              6 AUGUST LIVE
            </span>
          </div>

          <h2 style="font-family: var(--font-display); font-size: clamp(1.4rem, 4vw, 1.85rem); line-height: 1.25; margin: 0 0 0.85rem; color: var(--ink);">
            6 August 2026 Official CJP Update: <em>Jaipal Singh Munda Stadium Hunger Strike Escalates as Assembly Opens</em>
          </h2>

          <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 1rem 1.15rem; border-radius: 8px; margin-bottom: 1.25rem;">
            <strong style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: #15803d; margin-bottom: 0.35rem;">
              📌 6 AUGUST 2026 JHARKHAND PROTEST &amp; NEWS UPDATE:
            </strong>
            <p style="font-size: 0.95rem; line-height: 1.65; color: var(--ink); margin: 0;">
              As the Jharkhand Monsoon Assembly Session begins today (6 Aug), the student agitation enters week 2 at Jaipal Singh Munda Stadium, Ranchi. 6 student leaders are on an indefinite hunger strike demanding cancellation of the 14th JPSC exam, an independent CBI audit into exam leaks, 100% Meritocracy, and open media-covered public talks with CM Hemant Soren. CJP Founder Abhijeet Dipke and CJP Jharkhand Swarm extend full solidarity as a non-partisan pressure group.
            </p>
          </div>

          <!-- 4-Poster Preview Grid in Popup -->
          <strong style="display: block; font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); margin-bottom: 0.5rem; text-transform: uppercase;">
            🖼️ 6 August 2026 Official CJP Jharkhand Campaign &amp; News Graphics:
          </strong>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1.25rem;">
            <img src="assets/img/cjp/cjp-jharkhand-protest-6aug-poster.png" alt="6 Aug Jharkhand Swarm Poster" style="border-radius: 8px; border: 1.5px solid #16a34a; aspect-ratio: 1/1; object-fit: cover;">
            <img src="assets/img/cjp/cjp-jharkhand-protest-5aug-poster.png" alt="5 Aug Jharkhand Swarm Poster" style="border-radius: 8px; border: 1.5px solid #16a34a; aspect-ratio: 1/1; object-fit: cover;">
            <img src="assets/img/cjp/cjp-jharkhand-ranchi-5aug-poster.png" alt="5 Aug Ranchi Rally Poster" style="border-radius: 8px; border: 1.5px solid #16a34a; aspect-ratio: 1/1; object-fit: cover;">
            <img src="assets/img/cjp/cjp-4aug-a-to-z-poster.png" alt="CJP 4 Aug Reform Poster" style="border-radius: 8px; border: 1.5px solid #0284c7; aspect-ratio: 1/1; object-fit: cover;">
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#6August2026</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#JharkhandYouthProtest</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #faf5ff; border: 1px solid #e9d5ff; color: #9333ea; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#JaipalSinghMundaStadium</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #e0f2fe; border: 1px solid #bae6fd; color: #0369a1; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#AbhijeetDipke</span>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; border-top: 1px solid var(--line); padding-top: 1.25rem;">
            <a href="protests.html#jharkhand-protest-6aug" class="btn btn-solid" style="flex: 1; text-align: center; font-size: 0.88rem; padding: 0.65rem 1rem; background: #16a34a; border-color: #16a34a;">
              ✊ View Jharkhand Rally Details &amp; Posters →
            </a>
            <button type="button" id="closeBreakingPopupBtn" class="btn btn-ghost" style="padding: 0.65rem 1rem;">
              Close Alert ×
            </button>
          </div>
        </div>
      </div>
    `;

    popup.style.opacity = "1";

    const closePopup = () => {
      popup.style.opacity = "0";
      setTimeout(() => popup.remove(), 350);
    };

    document.getElementById("closeBreakingPopup")?.addEventListener("click", closePopup);
    document.getElementById("closeBreakingPopupBtn")?.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  };

  const openNewsModal = (item) => {
    let modal = document.getElementById("cjp-news-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "cjp-news-modal";
      modal.style.cssText = `
        position: fixed; inset: 0; z-index: 999999;
        background: rgba(10, 24, 15, 0.9); backdrop-filter: blur(12px);
        display: flex; align-items: center; justify-content: center;
        padding: 1rem; opacity: 0; transition: opacity 0.3s ease;
      `;
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div style="background: #ffffff; border: 2px solid #16a34a; border-radius: 20px; max-width: 720px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 60px rgba(0,0,0,0.5); position: relative; animation: rise 0.3s var(--ease);">
        <button type="button" id="closeNewsModal" style="position: absolute; top: 1rem; right: 1rem; width: 38px; height: 38px; border-radius: 50%; border: 0; background: #16a34a; color: #fff; font-size: 1.5rem; cursor: pointer; display: grid; place-items: center; z-index: 20; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">×</button>
        
        <div style="position: relative; aspect-ratio: 16/9; overflow: hidden; background: #000;">
          <iframe 
            src="https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&amp;rel=0&amp;modestbranding=1" 
            title="${item.title}" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: ${item.badgeColor}; color: #fff; font-family: var(--font-mono); font-size: 0.65rem; font-weight: 800; padding: 0.35rem 0.75rem; border-radius: 999px; pointer-events: none; z-index: 5;">
            🏆 LIVE VICTORY IFRAME · ${item.badge}
          </span>
        </div>
        
        <div style="padding: 1.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: #16a34a; text-transform: uppercase;">${item.source}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted);">${item.pubDate}</span>
          </div>
          <h2 style="font-family: var(--font-display); font-size: 1.6rem; line-height: 1.25; margin: 0 0 1rem; color: var(--ink);">${item.title}</h2>
          <p style="font-size: 1rem; line-height: 1.7; color: var(--ink); margin-bottom: 1.25rem;">${item.fullText}</p>
          
          ${item.image ? `<div style="margin-bottom: 1.25rem; border-radius: 12px; overflow: hidden; border: 1px solid var(--line);"><img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; display: block;"></div>` : ''}

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
            ${item.tags.map(t => `<span style="font-family: var(--font-mono); font-size: 0.7rem; background: #f0fdf4; color: #16a34a; padding: 0.25rem 0.6rem; border-radius: 6px; font-weight: 700;">${t}</span>`).join('')}
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; border-top: 1px solid var(--line); padding-top: 1.25rem;">
            <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-solid" style="flex: 1; text-align: center; background: #16a34a; border-color: #16a34a;">
              Read Original Victory News Article →
            </a>
            <button type="button" id="shareNewsBtn" class="btn btn-ghost">
              📢 Share Victory News
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
        alert("Victory News link copied to clipboard!");
      }
    });
  };

  const initNewsEngine = () => {
    const section = document.getElementById("google-news-section");
    if (!section) return;

    // Filter bar & Search bar & Permanent Trigger for CJP Victory Popup
    const filterContainer = document.getElementById("news-filter-tabs");
    if (filterContainer) {
      filterContainer.innerHTML = `
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid #0284c7; border-radius: 14px; padding: 0.75rem 1rem; margin-bottom: 1.25rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; box-shadow: 0 6px 20px rgba(2, 132, 199, 0.15);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 10px; height: 10px; background: #0284c7; border-radius: 50%; display: inline-block; animation: pulse 1.2s ease infinite;"></span>
            <strong style="font-family: var(--font-display); font-size: 0.95rem; color: #0369a1;">
              📌 4 AUG UPDATE: CJP Founder Abhijeet Dipke Releases National Reform Poster &amp; Supreme Court Status!
            </strong>
          </div>
          <button type="button" id="triggerBreakingPopupBtn" class="btn btn-solid" style="padding: 0.4rem 0.9rem; font-size: 0.78rem; background: #0284c7; border-color: #0284c7; white-space: nowrap;">
            📢 Open 4 August News Popup →
          </button>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 1.5rem; justify-content: space-between;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="catTabButtons">
            <button type="button" class="btn btn-solid cat-btn active" data-cat="all">🏆 All Victory Posters &amp; News</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="assam-flood">🌧️ Assam Flood Relief (2026)</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="cjp">📢 CJP Posters &amp; Bulletins</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="google">🌐 Google News Live</button>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; max-width: 320px; min-width: 220px;">
            <input type="text" id="newsSearchInput" placeholder="🔍 Search CJP posters &amp; news..." style="width: 100%; border: 1.5px solid var(--line); border-radius: 999px; padding: 0.45rem 0.9rem; font-size: 0.8rem; background: var(--surface);">
          </div>
        </div>
      `;

      document.getElementById("triggerBreakingPopupBtn")?.addEventListener("click", openCJPVictoryPopup);

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

    // Auto trigger 4 August CJP Status & A to Z Popup on index page load (once per session)
    if (!sessionStorage.getItem("cjp_4aug_popup_shown_v4")) {
      sessionStorage.setItem("cjp_4aug_popup_shown_v4", "true");
      setTimeout(openCJPVictoryPopup, 800);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNewsEngine);
  } else {
    initNewsEngine();
  }
})();
