export interface Campaign {
  slug: string;
  title: string;
  titleHi?: string;
  summary: string;
  summaryHi?: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  category: 'EDUCATION' | 'INFRASTRUCTURE' | 'ENVIRONMENT' | 'CIVIC RIGHTS' | 'SATIRE';
  categoryHi?: string;
  location: string;
  startDate: string;
  featuredImage: string;
  imageAlt?: string;
  slogan: string;
  sloganHi?: string;
  posterId?: string;
  route: string;
  number?: string;
  accentColor?: string;
  badgeColor?: string;
  impactMetrics: { label: string; value: string; labelHi?: string }[];
  description: string;
}

export const campaignsData: Campaign[] = [
  {
    slug: "school-thik-karo",
    number: "01",
    title: "School Thik Karo (Fix Our Schools Campaign)",
    titleHi: "स्कूल ठीक करो (विद्यालय सुधार अभियान)",
    summary: "Fictional civic campaign inspecting public school roofs, student desks, and sanitation facilities using citizen RTI scorecards.",
    summaryHi: "नागरिक आरटीआई स्कोरकार्ड के माध्यम से सरकारी स्कूलों की छतों, डेस्क और स्वच्छता का निरीक्षण।",
    status: "Ongoing",
    category: "EDUCATION",
    categoryHi: "शिक्षा एवं प्राथमिक विद्यालय",
    location: "Pan-India Municipal Wards",
    startDate: "AUG 2026",
    slogan: "DESKS BEFORE SPEECHES, ROOFS BEFORE DEDICATIONS",
    sloganHi: "भाषणों से पहले डेस्क, उद्घाटनों से पहले छतें",
    featuredImage: "/cjp_school_thik_karo_poster.png",
    posterId: "poster-2",
    route: "/school-thik-karo",
    accentColor: "#E6A100",
    badgeColor: "bg-[#E6A100] text-black",
    impactMetrics: [
      { label: "Schools Audited", labelHi: "स्कूलों का ऑडिट", value: "280+" },
      { label: "RTIs Filed", labelHi: "आरटीआई दायर", value: "410" },
      { label: "Desks Repaired", labelHi: "डेस्क की मरम्मत", value: "1,200" }
    ],
    description: "CJP's premier satire campaign urging civic authorities to prioritize basic classroom infrastructure over ceremonial inaugurations."
  },
  {
    slug: "black-monday",
    number: "02",
    title: "Black Monday (Pothole Warranty Movement)",
    titleHi: "ब्लैक मंडे (सड़क वारंटी आंदोलन)",
    summary: "Monthly civilian observation campaign wearing black attire to demand 3-year mandatory contractor repair warranties on paved roads.",
    summaryHi: "सड़कों पर 3 साल की ठेकेदार मरम्मत वारंटी की मांग के लिए काला परिधान पहनकर नागरिक विरोध।",
    status: "Ongoing",
    category: "INFRASTRUCTURE",
    categoryHi: "सड़क एवं अवसंरचना",
    location: "Delhi, Pune, Bengaluru & Hyderabad",
    startDate: "JUL 2026",
    slogan: "NO SILENCE FOR CIVIC FAILURE",
    sloganHi: "नागरिक विफलता पर कोई खामोशी नहीं",
    featuredImage: "/cjp_black_monday_poster.png",
    posterId: "poster-3",
    route: "/black-monday",
    accentColor: "#D9572B",
    badgeColor: "bg-[#D9572B] text-white",
    impactMetrics: [
      { label: "Participants", labelHi: "भागीदार नागरिक", value: "45,000+" },
      { label: "Roads Cataloged", labelHi: "सड़कों का डेटाबेस", value: "3,100" },
      { label: "Warranties Enforced", labelHi: "वारंटी लागू की गई", value: "28" }
    ],
    description: "A nationwide peaceful civic campaign highlighting poor asphalt quality by cataloging pothole coordinates across major arterial roads."
  },
  {
    slug: "clean-corner-mission",
    number: "03",
    title: "Clean Corner Mission",
    titleHi: "क्लीन कॉर्नर मिशन (कचरा मुक्त वार्ड)",
    summary: "Neighborhood swarm movement identifying illegal garbage dumps and advocating for daily municipal waste collection.",
    summaryHi: "अवैध कचरा ढेरों की पहचान और दैनिक नगर निगम कचरा संग्रहण की मांग के लिए नागरिक अभियान।",
    status: "Ongoing",
    category: "ENVIRONMENT",
    categoryHi: "पर्यावरण एवं स्वच्छता",
    location: "Urban Neighborhood Sectors",
    startDate: "AUG 2026",
    slogan: "GARBAGE DUMPS ARE NOT TOURIST DESTINATIONS",
    sloganHi: "कचरे के ढेर पर्यटन स्थल नहीं हैं",
    featuredImage: "/cjp_dispatch_paying_attention_poster.png",
    posterId: "poster-6",
    route: "/join",
    accentColor: "#27AE60",
    badgeColor: "bg-[#27AE60] text-white",
    impactMetrics: [
      { label: "Corners Cleared", labelHi: "कचरा स्थल साफ", value: "185" },
      { label: "Bins Installed", labelHi: "डस्टबिन स्थापित", value: "64" },
      { label: "Swarm Volunteers", labelHi: "स्वयंसेवक स्वार्म", value: "3,200" }
    ],
    description: "Satirical cleanliness drive mobilizing residents to photograph neglected public spaces and petition ward councilors."
  },
  {
    slug: "pre-monsoon-drain-desilting-audit-2026",
    number: "04",
    title: "Pre-Monsoon Subterranean Drain Desilting Audit",
    titleHi: "प्री-मानसून नाला सफाई गहराई ऑडिट 2026",
    summary: "Verifying subterranean sewer lines and logging contractor desilting depth measurements ahead of heavy monsoon rainfall.",
    summaryHi: "मानसून की बारिश से पहले वार्ड सीवर सफाई की गहराई जांच और भौतिक सत्यापन।",
    status: "Completed",
    category: "INFRASTRUCTURE",
    categoryHi: "सड़क एवं अवसंरचना",
    location: "Delhi Metro Wards 1 to 45",
    startDate: "JUN 2026",
    slogan: "CLEAN DRAINS BEFORE MONSOON RAINS",
    sloganHi: "बारिश से पहले सीवर नाले साफ करो",
    featuredImage: "/cjp_poster_sanitation.png",
    posterId: "poster-15",
    route: "/join",
    accentColor: "#C0392B",
    badgeColor: "bg-[#C0392B] text-white",
    impactMetrics: [
      { label: "Wards Monitored", labelHi: "निरीक्षित वार्ड", value: "45" },
      { label: "Drains Audited", labelHi: "जांचे गए नाले", value: "340+" },
      { label: "RTI Filings", labelHi: "आरटीआई प्रश्न", value: "112" }
    ],
    description: "CJP field audit captains conducted physical depth checks across subterranean storm drains to ensure contractors fulfilled mandatory quotas."
  },
  {
    slug: "contractor-warranty-notice-board-drive",
    number: "05",
    title: "Contractor 3-Year Repair Warranty Notice Board Drive",
    titleHi: "ठेकेदार 3-वर्षीय मरम्मत वारंटी बोर्ड अभियान",
    summary: "Ensuring public road paving work orders carry visible 3-year warranty notice boards detailing contractor contact information.",
    summaryHi: "सार्वजनिक सड़क निर्माण स्थलों पर ठेकेदार विवरण और 3 साल के मरम्मत वारंटी बोर्ड का सत्यापन।",
    status: "Ongoing",
    category: "CIVIC RIGHTS",
    categoryHi: "नागरिक अधिकार व पारदर्शिता",
    location: "Commercial Sectors 14, 18, & 22",
    startDate: "JUL 2026",
    slogan: "TRANSPARENCY ON EVERY ROAD SITE",
    sloganHi: "हर निर्माण स्थल पर पारदर्शिता का बोर्ड",
    featuredImage: "/cjp_sc_fir_quash_poster.png",
    posterId: "poster-7",
    route: "/black-monday",
    accentColor: "#2980B9",
    badgeColor: "bg-[#2980B9] text-white",
    impactMetrics: [
      { label: "Sites Inspected", labelHi: "साइट्स निरीक्षित", value: "68" },
      { label: "Notice Boards Fixed", labelHi: "बोर्ड लगाए गए", value: "34" },
      { label: "Auditors Joined", labelHi: "ऑडिटर नागरिक", value: "120+" }
    ],
    description: "A targeted campaign to enforce on-site transparency in municipal road paving contracts."
  },
  {
    slug: "no-corner-left-behind",
    number: "06",
    title: "No Corner Left Behind (Street Light Campaign)",
    titleHi: "नो कॉर्नर लेफ्ट बिहाइंड (स्ट्रीट लाइट अभियान)",
    summary: "Nighttime civic audit campaign mapping unlit streets, dark alleyways, and malfunctioning sodium bulbs across cities.",
    summaryHi: "अंधेरी गलियों और खराब स्ट्रीट लाइटों की मैपिंग व तुरंत सुधार हेतु रात्रि नागरिक मार्च।",
    status: "Ongoing",
    category: "CIVIC RIGHTS",
    categoryHi: "नागरिक अधिकार व पारदर्शिता",
    location: "Suburban Ward Districts",
    startDate: "AUG 2026",
    slogan: "LIGHT EVERY DARK ALLEYWAY WITH HONESTY",
    sloganHi: "इमानदारी से हर अंधेरी गली को रोशन करो",
    featuredImage: "/cjp_sep5_protest_poster.png",
    posterId: "poster-10",
    route: "/protests",
    accentColor: "#F39C12",
    badgeColor: "bg-[#F39C12] text-black",
    impactMetrics: [
      { label: "Dark Spots Mapped", labelHi: "अंधेरे स्थल चिन्हित", value: "920" },
      { label: "Bulbs Replaced", labelHi: "लाइट्स बदली गईं", value: "410" },
      { label: "Night Walks", labelHi: "रात्रि गश्त", value: "32" }
    ],
    description: "Focused on street lighting and nocturnal public safety through direct civic reporting."
  },
  {
    slug: "wifi-for-every-cockroach",
    number: "07",
    title: "WiFi For Every Cockroach",
    titleHi: "हर कॉकरोच के लिए मुफ़्त वाई-फ़ाई",
    summary: "Satirical digital rights drive demanding free, high-speed public internet in all public parks, libraries, and subterranean drains.",
    summaryHi: "सार्वजनिक पार्कों, पुस्तकालयों और नाले क्षेत्रों में मुफ़्त हाई-स्पीड वाई-फ़ाई की मांग।",
    status: "Upcoming",
    category: "SATIRE",
    categoryHi: "व्यंग्य एवं डिजिटल अधिकार",
    location: "Digital Swarm Infrastructure",
    startDate: "SEP 2026",
    slogan: "UNINTERRUPTED SPEEDS IN EVERY SEWER & CLASSROOM",
    sloganHi: "सीवर से लेकर कक्षा तक अबाधित स्पीड",
    featuredImage: "/cjp_news_hero_poster.png",
    posterId: "poster-4",
    route: "/join",
    accentColor: "#8E44AD",
    badgeColor: "bg-[#8E44AD] text-white",
    impactMetrics: [
      { label: "Hotspots Tracked", labelHi: "हॉटस्पॉट ट्रैक किए गए", value: "150" },
      { label: "Digital Petitions", labelHi: "डिजिटल याचिकाएं", value: "18,400" },
      { label: "Open APs Demanded", labelHi: "ओपन एपी की मांग", value: "500" }
    ],
    description: "A parody campaign highlighting the digital divide and advocating for open digital access for every urban resident."
  },
  {
    slug: "midnight-kitchen-rights",
    number: "08",
    title: "Midnight Kitchen Rights",
    titleHi: "मिडनाइट किचन अधिकार अभियान",
    summary: "Humorous mascot campaign asserting constitutional fridge survival rights and nocturnal consumer protection.",
    summaryHi: "रात के समय फ्रिज सर्वाइवल अधिकारों और उपभोक्ता सुरक्षा के लिए विनोदी शुभंकर अभियान।",
    status: "Completed",
    category: "SATIRE",
    categoryHi: "व्यंग्य एवं डिजिटल अधिकार",
    location: "Kitchen Swarm Sector",
    startDate: "JUN 2026",
    slogan: "LEAVE THE FRIDGE UNLOCKED",
    sloganHi: "फ्रिज को खुला रखें - सर्वाइवल हमारा अधिकार है",
    featuredImage: "/cjp_system_change_quote.jpg",
    posterId: "poster-5",
    route: "/memes",
    accentColor: "#D9572B",
    badgeColor: "bg-[#D9572B] text-white",
    impactMetrics: [
      { label: "Fridges Inspected", labelHi: "फ्रिज का निरीक्षण", value: "10,000+" },
      { label: "Leftovers Saved", labelHi: "बचा हुआ भोजन सुरक्षित", value: "99.9%" },
      { label: "Memes Generated", labelHi: "मीम्स उत्पन्न", value: "5,400" }
    ],
    description: "A lighthearted cultural satire establishing CJP's iconic cockroach mascot philosophy of resilience."
  }
];

