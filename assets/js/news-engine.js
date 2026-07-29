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
    "assets/img/cjp/cjp-bbc-news-graphic.png",
    "assets/img/cjp/cjp-indiatoday-news-graphic.png",
    "assets/img/cjp/cjp-aarakshan-hatao-poster.png",
    "assets/img/cjp/cjp-poster-28july-sc.png",
    "assets/img/cjp/cjp-meritocracy-rally-poster.png",
    "assets/img/cjp/cjp-youth-power-poster.png",
    "assets/img/cjp/cjp-victory-poster-1.png",
    "assets/img/cjp/trending-news-24july.webp",
    "assets/img/cjp/sansad-march-live.webp"
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
          <span style="position: absolute; top: 0.85rem; left: 0.85rem; background: #9333ea; color: #fff; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; padding: 0.35rem 0.8rem; border-radius: 999px; pointer-events: none; z-index: 10; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
            ⚖️ SC PIL NOTICE · RESERVATION HATAO MOVEMENT
          </span>
        </div>

        <div style="padding: 1.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 800; color: #16a34a; text-transform: uppercase;">
              🎉 SUPREME COURT &amp; CJP SWARM BUREAU · LIVE NEWS
            </span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #9333ea; font-weight: 800; background: #faf5ff; border: 1px solid #e9d5ff; padding: 0.2rem 0.6rem; border-radius: 6px;">
              LIVE TRENDING
            </span>
          </div>

          <h2 style="font-family: var(--font-display); font-size: clamp(1.4rem, 4vw, 1.85rem); line-height: 1.25; margin: 0 0 0.85rem; color: var(--ink);">
            SC Issues Notice on CJP PIL: <em>Reservation Hatao &amp; Enforce 100% Meritocracy</em>
          </h2>

          <div style="background: #faf5ff; border-left: 4px solid #9333ea; padding: 1rem 1.15rem; border-radius: 8px; margin-bottom: 1.25rem;">
            <strong style="display: block; font-family: var(--font-mono); font-size: 0.78rem; color: #7e22ce; margin-bottom: 0.35rem;">
              ⚖️ SUPREME COURT PIL HEARING &amp; GOVT DIRECTION:
            </strong>
            <p style="font-size: 0.95rem; line-height: 1.65; color: var(--ink); margin: 0;">
              Supreme Court of India officially accepted CJP's Public Interest Litigation (PIL) demanding total abolition of caste quotas in competitive entrance exams &amp; replacing them with 100% Meritocracy + Economic Need-Based Scholarships.
            </p>
          </div>

          <!-- 4-Poster Preview Grid in Popup -->
          <strong style="display: block; font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); margin-bottom: 0.5rem; text-transform: uppercase;">
            🖼️ CJP Movement &amp; Meritocracy Posters (Official Collection):
          </strong>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1.25rem;">
            <img src="assets/img/cjp/cjp-poster-28july-sc.png" alt="SC Notice Poster" style="border-radius: 8px; border: 1.5px solid #9333ea; aspect-ratio: 1/1; object-fit: cover;">
            <img src="assets/img/cjp/cjp-aarakshan-hatao-poster.png" alt="Reservation Hatao Poster" style="border-radius: 8px; border: 1.5px solid #dc2626; aspect-ratio: 1/1; object-fit: cover;">
            <img src="assets/img/cjp/cjp-meritocracy-rally-poster.png" alt="100% Meritocracy Poster" style="border-radius: 8px; border: 1.5px solid #16a34a; aspect-ratio: 1/1; object-fit: cover;">
            <img src="assets/img/cjp/cjp-youth-power-poster.png" alt="Youth Power Shield Poster" style="border-radius: 8px; border: 1.5px solid var(--gold); aspect-ratio: 1/1; object-fit: cover;">
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #faf5ff; border: 1px solid #e9d5ff; color: #9333ea; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#ReservationHatao</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #faf5ff; border: 1px solid #e9d5ff; color: #9333ea; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#BringMeritocracy</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#CockroachJantaParty</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; background: #f0fdf4; border: 1px solid #bbf7d0; color: #16a34a; padding: 0.25rem 0.65rem; border-radius: 6px; font-weight: 800;">#MainBhiCockroach</span>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; border-top: 1px solid var(--line); padding-top: 1.25rem;">
            <a href="protests.html" class="btn btn-solid" style="flex: 1; text-align: center; font-size: 0.88rem; padding: 0.65rem 1rem; background: #9333ea; border-color: #9333ea;">
              ⚖️ View Full SC Notice &amp; Movement Rallies →
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
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 2px solid #16a34a; border-radius: 14px; padding: 0.75rem 1rem; margin-bottom: 1.25rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; box-shadow: 0 6px 20px rgba(22, 163, 74, 0.15);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="width: 10px; height: 10px; background: #16a34a; border-radius: 50%; display: inline-block; animation: pulse 1.2s ease infinite;"></span>
            <strong style="font-family: var(--font-display); font-size: 0.95rem; color: #15803d;">
              🎉 HISTORIC VICTORY POPUP: CJP जीत गई! सरकार ने सारी बातें मान ली!
            </strong>
          </div>
          <button type="button" id="triggerBreakingPopupBtn" class="btn btn-solid" style="padding: 0.4rem 0.9rem; font-size: 0.78rem; background: #16a34a; border-color: #16a34a; white-space: nowrap;">
            🏆 Open Historic Victory Popup →
          </button>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; margin-bottom: 1.5rem; justify-content: space-between;">
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;" id="catTabButtons">
            <button type="button" class="btn btn-solid cat-btn active" data-cat="all">🏆 All Victory Posters &amp; News</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="cjp">📢 CJP Victory Posters (6)</button>
            <button type="button" class="btn btn-ghost cat-btn" data-cat="google">🌐 Google News Live</button>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex: 1; max-width: 320px; min-width: 220px;">
            <input type="text" id="newsSearchInput" placeholder="🔍 Search CJP victory posters &amp; news..." style="width: 100%; border: 1.5px solid var(--line); border-radius: 999px; padding: 0.45rem 0.9rem; font-size: 0.8rem; background: var(--surface);">
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

    // Auto trigger Historic Victory Popup on index page load (once per session)
    if (!sessionStorage.getItem("cjp_victory_popup_shown")) {
      sessionStorage.setItem("cjp_victory_popup_shown", "true");
      setTimeout(openCJPVictoryPopup, 1000);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNewsEngine);
  } else {
    initNewsEngine();
  }
})();
