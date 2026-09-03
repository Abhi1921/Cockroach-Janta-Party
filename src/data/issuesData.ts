export interface CivicIssue {
  id: string;
  num: string;
  title: string;
  titleHi?: string;
  category: 'SUBTERRANEAN DRAINAGE' | 'PUBLIC INFRASTRUCTURE' | 'PUBLIC HEALTH' | 'YOUTH EMPLOYMENT' | 'DIGITAL RIGHTS' | 'EDUCATION' | 'ENVIRONMENT' | 'ACCOUNTABILITY';
  categoryHi?: string;
  whatIsIssue: string;
  whatIsIssueHi?: string;
  problem: string;
  whatCjpSays: string;
  whatCjpSaysHi?: string;
  whyMatters: string;
  whyMattersHi?: string;
  source: string;
  featuredImage: string;
  relatedCampaign?: string;
  route: string;
  severity: 'Critical' | 'High' | 'Medium';
  accentColor?: string;
  badgeColor?: string;
}

export const issuesData: CivicIssue[] = [
  {
    id: "issue-1",
    num: "01",
    title: "Monsoon Sewer Waterlogging & Silt Clearance",
    titleHi: "मानसून सीवर जलभराव व गाद सफाई समस्या",
    category: "SUBTERRANEAN DRAINAGE",
    categoryHi: "भूमिगत जल निकासी एवं सफाई",
    whatIsIssue: "Urban drainage networks often experience severe blockages during heavy rains when subterranean desilting is delayed or insufficiently executed.",
    whatIsIssueHi: "भारी बारिश के दौरान भूमिगत सीवर सफाई में देरी या अधूरी कार्रवाई के कारण शहरी नालों में भारी जलभराव हो जाता है।",
    problem: "Urban drainage networks often experience severe blockages during heavy rains when subterranean desilting is delayed or insufficiently executed.",
    whatCjpSays: "CJP demands bi-weekly mechanized desilting schedules and public geotagged clearance depth verification logs published prior to monsoon seasons.",
    whatCjpSaysHi: "सीजेपी की मांग है कि मानसून से पहले हर वार्ड सीवर की सफाई की गहराई जांच की जीआईएस टैग्ड रिपोर्ट सार्वजनिक की जाए।",
    whyMatters: "Waterlogging damages local public infrastructure, creates sanitation hazards, and interrupts neighborhood transportation.",
    whyMattersHi: "जलभराव से सार्वजनिक संपत्ति को नुकसान पहुंचता है, बीमारी का खतरा बढ़ता है और आवागमन बाधित होता है।",
    source: "CJP Civic Audit Series 2026 / Municipal Sanitation Manual",
    featuredImage: "/cjp_poster_sanitation.png",
    relatedCampaign: "Pre-Monsoon Drain Audit",
    route: "/campaigns",
    severity: "Critical",
    accentColor: "#C0392B",
    badgeColor: "bg-[#C0392B] text-white"
  },
  {
    id: "issue-2",
    num: "02",
    title: "Contractor 3-Year Paving Warranty Compliance",
    titleHi: "ठेकेदार 3-वर्षीय सड़क मरम्मत वारंटी अनुपालन",
    category: "PUBLIC INFRASTRUCTURE",
    categoryHi: "सार्वजनिक अवसंरचना व सड़कें",
    whatIsIssue: "Public road paving contracts frequently suffer early deterioration without clear public contractor liability notice boards.",
    whatIsIssueHi: "सड़क निर्माण के कुछ ही दिनों बाद गड्ढे हो जाते हैं, जबकि निर्माण स्थल पर ठेकेदार की मरम्मत वारंटी का कोई बोर्ड नहीं होता।",
    problem: "Public road paving contracts frequently suffer early deterioration without clear public contractor liability notice boards.",
    whatCjpSays: "CJP advocates for mandatory physical on-site notice boards displaying contractor liability contact numbers on every road worksite over ₹5 Lakhs.",
    whatCjpSaysHi: "सीजेपी हर ₹5 लाख से ऊपर के निर्माण स्थल पर ठेकेदार का फोन नंबर और 3 साल की वारंटी का बोर्ड अनिवार्य करने की मांग करती है।",
    whyMatters: "Physical notice boards allow citizens to hold paving contractors accountable for re-emerging potholes within warranty periods.",
    whyMattersHi: "बोर्ड होने पर नागरिक खुद ठेकेदार से मुफ्त मरम्मत करवा सकते हैं और सरकारी पैसे की बर्बादी रोक सकते हैं।",
    source: "Section 4 RTI Mandate / PWD Paving Contract Guidelines",
    featuredImage: "/cjp_black_monday_poster.png",
    relatedCampaign: "Black Monday Movement",
    route: "/black-monday",
    severity: "Critical",
    accentColor: "#D9572B",
    badgeColor: "bg-[#D9572B] text-white"
  },
  {
    id: "issue-3",
    num: "03",
    title: "Government School Infrastructure & Classroom Gap",
    titleHi: "सरकारी स्कूल अवसंरचना व बुनियादी सुविधाएं",
    category: "EDUCATION",
    categoryHi: "शिक्षा एवं प्राथमिक विद्यालय",
    whatIsIssue: "Thousands of primary schools lack functional toilets, roof waterproofing, clean drinking water, and adequate student desks.",
    whatIsIssueHi: "हजारों प्राथमिक सरकारी स्कूलों में टूटी छतें, खराब शौचालय और विद्यार्थियों के लिए डेस्क की कमी है।",
    problem: "Thousands of primary schools lack functional toilets, roof waterproofing, clean drinking water, and adequate student desks.",
    whatCjpSays: "CJP calls for prioritizing basic classroom roof repairs, functional toilets, and desk allocations over ceremonial inauguration speeches.",
    whatCjpSaysHi: "सीजेपी का स्पष्ट रुख है - भाषणों और उद्घाटनों से पहले स्कूलों में डेस्क और वाटरप्रूफ छतें दी जाएं।",
    whyMatters: "Accessible learning environments empower young students to prepare for academic and vocational opportunities.",
    whyMattersHi: "सुरक्षित और सुसज्जित माहौल में ही बच्चे अच्छी शिक्षा और उज्ज्वल भविष्य हासिल कर सकते हैं।",
    source: "CJP Education Access Charter / RTI Scorecard",
    featuredImage: "/cjp_school_thik_karo_poster.png",
    relatedCampaign: "School Thik Karo",
    route: "/school-thik-karo",
    severity: "Critical",
    accentColor: "#E6A100",
    badgeColor: "bg-[#E6A100] text-black"
  },
  {
    id: "issue-4",
    num: "04",
    title: "Piped Drinking Water Purity & TDS Diagnostics",
    titleHi: "पेयजल शुद्धता व मुफ्त टीडीएस जांच कियोस्क",
    category: "PUBLIC HEALTH",
    categoryHi: "जनस्वास्थ्य एवं पेयजल",
    whatIsIssue: "Household tap water supply lines in densely populated wards occasionally suffer from pipeline contamination and brown mud sediment.",
    whatIsIssueHi: "घने वार्डों में पेयजल पाइपलाइनों में सीवर का मटैला पानी मिलने से पीलिया और टाइफाइड का खतरा रहता है।",
    problem: "Household tap water supply lines in densely populated wards occasionally suffer from pipeline contamination and brown mud sediment.",
    whatCjpSays: "CJP organizes mobile volunteer water quality testing kiosks offering free TDS and chlorine diagnostics to household residents.",
    whatCjpSaysHi: "सीजेपी वालंटियर कियोस्क लगाकर आम नागरिकों को मुफ्त टीडीएस और क्लोरीन पानी जांच किट उपलब्ध कराती है।",
    whyMatters: "Clean drinking water is a fundamental civic right essential for preventing waterborne illnesses in urban wards.",
    whyMattersHi: "साफ पानी जीवन का मौलिक अधिकार है, जिसके बिना स्वास्थ्य की रक्षा असंभव है।",
    source: "BIS IS 10500 Drinking Water Guidelines",
    featuredImage: "/cjp_sc_fir_quash_poster.png",
    relatedCampaign: "Clean Water Charter",
    route: "/join",
    severity: "High",
    accentColor: "#2980B9",
    badgeColor: "bg-[#2980B9] text-white"
  },
  {
    id: "issue-5",
    num: "05",
    title: "Direct Wages & Municipal Maintenance Apprenticeships",
    titleHi: "प्रत्यक्ष वेतन व नगर निगम युवा प्रशिक्षुता",
    category: "YOUTH EMPLOYMENT",
    categoryHi: "युवा रोजगार व श्रमिक अधिकार",
    whatIsIssue: "Sanitation and maintenance workers face contractor middleman wage retention and lack of direct bank transfers.",
    whatIsIssueHi: "सफाई और रखरखाव कर्मचारियों को बिचौलियों द्वारा कटौतियों का सामना करना पड़ता है और समय पर वेतन नहीं मिलता।",
    problem: "Sanitation and maintenance workers face contractor middleman wage retention and lack of direct bank transfers.",
    whatCjpSays: "CJP demands direct municipal bank wage disbursements and transparent ward-level apprentice positions for local youth.",
    whatCjpSaysHi: "सीजेपी की मांग है कि सफाई कर्मियों को सीधे बैंक खाते में वेतन मिले और युवाओं को वार्ड स्तर पर अप्रेंटिस मिले।",
    whyMatters: "Eliminating contractor middleman deductions ensures fair compensation and dignified local employment opportunities.",
    whyMattersHi: "बिचौलियों को हटाने से श्रमिकों को पूरा वेतन मिलता है और युवाओं को सम्मानजनक रोजगार मिलता है।",
    source: "CJP Youth Employment Position Paper 2026",
    featuredImage: "/cjp_dispatch_paying_attention_poster.png",
    relatedCampaign: "Swarm Labor Charter",
    route: "/join",
    severity: "High",
    accentColor: "#8E44AD",
    badgeColor: "bg-[#8E44AD] text-white"
  },
  {
    id: "issue-6",
    num: "06",
    title: "Section 4 Open RTI Publishing & Zero Paywalls",
    titleHi: "धारा 4 खुला आरटीआई प्रकाशन व शून्य शुल्क",
    category: "DIGITAL RIGHTS",
    categoryHi: "डिजिटल अधिकार व आरटीआई",
    whatIsIssue: "Public tender documents, expenditure ledgers, and municipal audit records are often inaccessible behind administrative hurdles.",
    whatIsIssueHi: "सरकारी टेंडर, बजट आवंटन और रखरखाव खर्च का विवरण आम नागरिकों की पहुंच से दूर रखा जाता है।",
    problem: "Public tender documents, expenditure ledgers, and municipal audit records are often inaccessible behind administrative hurdles.",
    whatCjpSays: "CJP advocates for zero paywall online publishing of all ward maintenance budgets and contractor bill-of-quantities.",
    whatCjpSaysHi: "सीजेपी की मांग है कि हर वार्ड का बजट, काम का ब्योरा और भुगतान आरटीआई कानून की धारा 4 के तहत ऑनलाइन मुफ्त प्रकाशित हो।",
    whyMatters: "Transparent digital access enables ordinary citizens to monitor municipal spending without bureaucratic barriers.",
    whyMattersHi: "पारदर्शी डिजिटल डेटा से नागरिक स्वयं भ्रष्टाचार पर नजर रख सकते हैं।",
    source: "Right to Information Act 2005",
    featuredImage: "/cjp_news_hero_poster.png",
    relatedCampaign: "RTI Open Ledger",
    route: "/transparency",
    severity: "High",
    accentColor: "#27AE60",
    badgeColor: "bg-[#27AE60] text-white"
  },
  {
    id: "issue-7",
    num: "07",
    title: "Urban Park Preservation & Native Tree Canopy",
    titleHi: "शहरी पार्क संरक्षण व हरित क्षेत्र सुरक्षा",
    category: "ENVIRONMENT",
    categoryHi: "पर्यावरण एवं हरित क्षेत्र",
    whatIsIssue: "Neighborhood green spaces are frequently neglected or encroached upon, reducing urban biodiversity and air quality.",
    whatIsIssueHi: "वार्डों के सार्वजनिक पार्क कचरे के ढेर बनते जा रहे हैं और वृक्षों की कटाई से प्रदूषण बढ़ रहा है।",
    problem: "Neighborhood green spaces are frequently neglected or encroached upon, reducing urban biodiversity and air quality.",
    whatCjpSays: "CJP demands participatory budgeting for local park upkeep and native tree planting drives across all ward sectors.",
    whatCjpSaysHi: "सीजेपी पार्क के रख-रखाव के लिए निवासी संघों के साथ बजट और देसी पौधे लगाने की मांग करती है।",
    whyMatters: "Preserving urban greenery improves air quality and provides healthy recreational areas for local communities.",
    whyMattersHi: "हरियाली से हवा की गुणवत्ता सुधरती है और बच्चों-बुजुर्गों को स्वस्थ वातावरण मिलता है।",
    source: "CJP Environmental Initiative 2026",
    featuredImage: "/cjp_sep5_protest_poster.png",
    relatedCampaign: "Clean Corner Mission",
    route: "/join",
    severity: "Medium",
    accentColor: "#27AE60",
    badgeColor: "bg-[#27AE60] text-white"
  },
  {
    id: "issue-8",
    num: "08",
    title: "Participatory Ward Budgeting & Pre-Payment Audits",
    titleHi: "भागीदारी पूर्ण वार्ड बजट व भुगतान-पूर्व ऑडिट",
    category: "ACCOUNTABILITY",
    categoryHi: "पारदर्शिता एवं जवाबदेही",
    whatIsIssue: "Municipal contractor invoices are often approved without public review from Resident Welfare Associations.",
    whatIsIssueHi: "ठेकेदारों के बिल बिना काम के भौतिक निरीक्षण और निवासी संघों की सहमति के पास कर दिए जाते हैं।",
    problem: "Municipal contractor invoices are often approved without public review from Resident Welfare Associations.",
    whatCjpSays: "CJP proposes mandatory open-door ward review sessions before final contractor payment approvals.",
    whatCjpSaysHi: "सीजेपी की मांग है कि ठेकेदार का अंतिम भुगतान तभी हो जब वार्ड निवासी काम की गुणवत्ता को मंजूरी दें।",
    whyMatters: "Direct community audit input prevents substandard public works and promotes municipal transparency.",
    whyMattersHi: "सीधे नागरिक ऑडिट से घटिया निर्माण पर रोक लगती है और सार्वजनिक धन सुरक्षित रहता है।",
    source: "CJP Municipal Reform Paper",
    featuredImage: "/cjp_system_change_quote.jpg",
    relatedCampaign: "Ward Budget Reform",
    route: "/transparency",
    severity: "Critical",
    accentColor: "#D9572B",
    badgeColor: "bg-[#D9572B] text-white"
  }
];
