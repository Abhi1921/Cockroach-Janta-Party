export interface GlossaryEntry {
  letter: string;
  term: string;
  category: 'Concepts' | 'Campaigns' | 'Governance' | 'Satire' | 'People' | 'Terms';
  definition: string;
  cjpInterpretation: string;
  relatedCampaign?: string;
  relatedArticleSlug?: string;
  sourceReference?: string;
}

export const glossaryData: GlossaryEntry[] = [
  {
    letter: 'A',
    term: 'Article 142 Immunity Clause',
    category: 'Governance',
    definition: 'Constitutional provision under Article 142 of the Supreme Court of India used to pass orders ensuring complete justice.',
    cjpInterpretation: 'Cited by CJP legal advocates to demand non-punitive protection and quashing of FIRs filed against peaceful student protesters.',
    relatedCampaign: 'Black Monday',
    sourceReference: 'Constitution of India, Article 142'
  },
  {
    letter: 'B',
    term: 'Black Monday',
    category: 'Campaigns',
    definition: 'Monthly civilian observation movement where participants wear black attire to work or university.',
    cjpInterpretation: 'Symbolic non-violent civic action demanding 3-year mandatory contractor repair warranties on newly paved public roads.',
    relatedCampaign: 'Black Monday',
    relatedArticleSlug: 'black-monday-20-july-recap-report'
  },
  {
    letter: 'C',
    term: 'Cockroach Citizenship',
    category: 'Concepts',
    definition: 'The philosophy of resilience, endurance, and nocturnal vigilance against municipal negligence.',
    cjpInterpretation: 'Cockroaches survive monsoons, broken pavement, and pest sprays—symbolizing ordinary taxpayers who refuse to be silenced by apathy.',
    relatedArticleSlug: 'dimagi-naxal-satire-manifesto-release'
  },
  {
    letter: 'D',
    term: 'Dimagi Naxal Satire',
    category: 'Satire',
    definition: 'A satirical term poking fun at media commentators who label ordinary citizens asking for basic infrastructure as radicals.',
    cjpInterpretation: 'CJP turns derogatory television buzzwords into badges of honor for active RTI filers and civic observers.',
    relatedArticleSlug: 'dimagi-naxal-satire-manifesto-release'
  },
  {
    letter: 'E',
    term: 'Exam Transparency Charter',
    category: 'Governance',
    definition: 'Set of proposed standards requiring national competitive exam boards to release answer keys and OMR sheets publicly.',
    cjpInterpretation: 'A core CJP demand ensuring student NEET/JEE candidates are protected from unannounced normalization metrics and paper leaks.'
  },
  {
    letter: 'F',
    term: 'Fridge Survival Right',
    category: 'Satire',
    definition: 'Lighthearted cultural declaration protecting nocturnal access to leftover kitchen food.',
    cjpInterpretation: 'Established under CJP Mascot Philosophy: "Leave the fridge unlocked—survival is our fundamental right."'
  },
  {
    letter: 'G',
    term: 'Geotagged Sewer Auditing',
    category: 'Governance',
    definition: 'The practice of embedding GPS coordinates and depth measurements into pre-monsoon drain desilting logs.',
    cjpInterpretation: 'Pioneered by CJP ward observers to stop contractors from claiming un-cleared drains were desilted.',
    relatedCampaign: 'pre-monsoon-drain-desilting-audit-2026'
  },
  {
    letter: 'H',
    term: 'Har Ghar Ki Sarkar',
    category: 'Concepts',
    definition: 'Official slogan of Cockroach Janata Party (CJP).',
    cjpInterpretation: 'Asserts that true governance begins at the doorstep of every household through clean tap water, functional street lights, and asphalt warranties.'
  },
  {
    letter: 'I',
    term: 'Infrastructure Warranty Board',
    category: 'Campaigns',
    definition: 'On-site physical signboards displaying paving contractor name, tender number, cost, and 3-year warranty expiration date.',
    cjpInterpretation: 'Mandatory CJP manifesto point enforcing direct public accountability on municipal worksites.',
    relatedCampaign: 'contractor-warranty-notice-board-drive'
  },
  {
    letter: 'J',
    term: 'Janta Grievance Ticker',
    category: 'Terms',
    definition: 'Real-time public dispatch feed tracking unaddressed municipal complaints across urban sectors.',
    cjpInterpretation: 'Used on the CJP portal to display live community reports on potholes, dead street lamps, and sewer overflows.'
  },
  {
    letter: 'K',
    term: 'Kitchen Swarm Assembly',
    category: 'Satire',
    definition: 'The symbolic legislative body composed of nocturnal kitchen observers.',
    cjpInterpretation: 'Represents CJP’s grass-roots community culture where humor meets civic awareness.'
  },
  {
    letter: 'L',
    term: 'Liquidated Pothole Damages',
    category: 'Governance',
    definition: 'Financial penalty clauses deducted from contractor performance guarantees when roads crumble within 36 months.',
    cjpInterpretation: 'CJP advocates for automatic penalty transfers directly into municipal road repair funds.'
  },
  {
    letter: 'M',
    term: 'Midnight Kitchen Rights',
    category: 'Campaigns',
    definition: 'Cultural satire campaign highlighting nocturnal electricity grid cuts and food refrigeration integrity.',
    cjpInterpretation: 'Combines consumer rights with humor, demanding stable 24/7 power supply for residential sectors.',
    relatedCampaign: 'midnight-kitchen-rights'
  },
  {
    letter: 'N',
    term: 'No Corner Left Behind',
    category: 'Campaigns',
    definition: 'Nighttime civic audit campaign mapping unlit streets, dark alleyways, and burned-out municipal street lights.',
    cjpInterpretation: 'Ensures public safety and nocturnal visibility through direct citizen reporting.',
    relatedCampaign: 'no-corner-left-behind'
  },
  {
    letter: 'O',
    term: 'Open RTI Ledger',
    category: 'Governance',
    definition: 'Proactive digital publishing under Section 4 of the Right to Information Act 2005.',
    cjpInterpretation: 'CJP demands zero-paywall digital access to all municipal ward tenders and expenditure vouchers.',
    sourceReference: 'RTI Act 2005 Section 4'
  },
  {
    letter: 'P',
    term: 'Pothole Warranty Act (Draft)',
    category: 'Concepts',
    definition: 'Satirical draft legislation proposed by CJP requiring road builders to repair re-emerging potholes for free within 3 years.',
    cjpInterpretation: 'Demonstrates how legal reform can prevent annual budget waste on low-grade asphalt paving.',
    relatedCampaign: 'black-monday'
  },
  {
    letter: 'Q',
    term: 'Quality TDS Kiosk',
    category: 'Governance',
    definition: 'Mobile volunteer testing stations measuring total dissolved solids (TDS) and chlorine levels in piped household water.',
    cjpInterpretation: 'Empowers local residents with immediate water purity diagnostics at metro transit hubs.',
    relatedArticleSlug: 'community-water-quality-testing-charter'
  },
  {
    letter: 'R',
    term: 'Resilience Index',
    category: 'Terms',
    definition: 'Fictional metric measuring a neighborhood’s ability to withstand municipal delays, waterlogging, and traffic blockades.',
    cjpInterpretation: 'Used in CJP annual civic reports to rate ward performance based on public disclosure speed.'
  },
  {
    letter: 'S',
    term: 'School Thik Karo',
    category: 'Campaigns',
    definition: 'Nationwide citizen campaign inspecting primary school roofs, desks, and sanitation blocks.',
    cjpInterpretation: 'CJP urges local authorities to prioritize basic classroom infrastructure over ceremonial inaugurations.',
    relatedCampaign: 'school-thik-karo',
    relatedArticleSlug: 'school-thik-karo-pan-india-launch'
  },
  {
    letter: 'T',
    term: 'Tap Water Purity Charter',
    category: 'Governance',
    definition: 'Public standard requiring municipal water boards to publish daily water test reports from ward pumping stations.',
    cjpInterpretation: 'Ensures clean, odorless drinking water for every urban household.',
    sourceReference: 'BIS IS 10500 Guidelines'
  },
  {
    letter: 'U',
    term: 'Uninterrupted Sewer Flow',
    category: 'Governance',
    definition: 'Subterranean engineering standard requiring clear drainage lines free from plastic blockages.',
    cjpInterpretation: 'Monitored by CJP sanitation observers during pre-monsoon field audits.'
  },
  {
    letter: 'V',
    term: 'VIP Convoy Neutrality',
    category: 'Governance',
    definition: 'Policy proposal restricting political motorcades from blocking emergency ambulances and public buses.',
    cjpInterpretation: 'CJP demands equal traffic signal priority for ordinary working citizens.'
  },
  {
    letter: 'W',
    term: 'WiFi For Every Cockroach',
    category: 'Campaigns',
    definition: 'Satirical digital rights campaign advocating for free high-speed public internet in parks, libraries, and subways.',
    cjpInterpretation: 'Highlights the digital divide and promotes open digital access for education and civic complaints.',
    relatedCampaign: 'wifi-for-every-cockroach'
  },
  {
    letter: 'X',
    term: 'X-Ray Road Radar (Concept)',
    category: 'Satire',
    definition: 'Fictional scanner used by CJP to inspect asphalt thickness before contractor payments are approved.',
    cjpInterpretation: 'Illustrates the necessity of technical quality audits in public works.'
  },
  {
    letter: 'Y',
    term: 'Youth Swarm Secretariat',
    category: 'People',
    definition: 'The student-led coordinating council of Cockroach Janata Party.',
    cjpInterpretation: 'Directs ward audits, RTI workshops, poster releases, and peaceful civic assemblies.'
  },
  {
    letter: 'Z',
    term: 'Zero-Paywall Governance',
    category: 'Concepts',
    definition: 'The principle that all public information, tender documents, and civic scorecards must be freely accessible online.',
    cjpInterpretation: 'The core digital philosophy of CJP and cockroachjantapartywale.com.'
  }
];
