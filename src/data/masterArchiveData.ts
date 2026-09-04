export interface TimelineItem {
  id: string;
  date: string;
  event: string;
  people: string[];
  location: string;
  source: string;
  sourceUrl: string;
  photoUrl?: string;
  videoUrl?: string;
  socialLinks?: string[];
  newsUrl?: string;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  category: 'FOUNDING' | 'PROTEST' | 'CAMPAIGN' | 'SPLIT' | 'LEGAL' | 'STATEMENT';
}

export interface PersonRecord {
  id: string;
  fullName: string;
  role: string;
  firstAppearance: string;
  latestAppearance: string;
  socialProfiles: { platform: string; url: string }[];
  appearances: string[];
  quotes: string[];
  associatedCampaigns: string[];
  sourceUrls: string[];
  bio: string;
}

export interface DomainRecord {
  domain: string;
  url: string;
  classification: 'OFFICIAL' | 'SATIRICAL_FAN' | 'ASSOCIATED' | 'UNVERIFIED' | 'UNRELATED';
  firstDiscovered: string;
  pagesAvailable: string[];
  claimsOfficial: boolean;
  disclaimerText?: string;
  notes: string;
}

export interface YouTubeVideoRecord {
  id: string;
  title: string;
  channelName: string;
  channelUrl: string;
  videoUrl: string;
  uploadDate: string;
  duration: string;
  views?: string;
  category: 'OFFICIAL' | 'MEMBER_VIDEO' | 'NEWS_COVERAGE' | 'INTERVIEW' | 'SUPPORTER_REUPLOAD';
  peopleInvolved: string[];
  description: string;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface SocialMediaPostRecord {
  id: string;
  platform: 'X/Twitter' | 'Instagram' | 'Facebook' | 'Telegram';
  account: string;
  accountUrl: string;
  date: string;
  caption: string;
  mediaType: 'text' | 'image' | 'video' | 'thread';
  postUrl: string;
  hashtags: string[];
  significance: string;
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'Official Claim' | 'Publicly Discovered' | 'Verified Official' | 'Satirical';
}

export interface NewsArticleRecord {
  id: string;
  headline: string;
  publication: string;
  date: string;
  author?: string;
  url: string;
  topic: string;
  peopleMentioned: string[];
  claimClassification: 'CONFIRMED' | 'ALLEGED' | 'CLAIMED_BY_CJP' | 'CLAIMED_BY_OPPONENT' | 'MEDIA_REPORT' | 'UNVERIFIED';
  summary: string;
  language: 'English' | 'Hindi' | 'Marathi';
}

export interface PosterRecord {
  id: string;
  title: string;
  imageUrl: string;
  originalPageUrl: string;
  sourcePlatform: string;
  date: string;
  description: string;
  peopleVisible: string[];
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface ManifestoVersionRecord {
  version: string;
  date: string;
  title: string;
  url: string;
  demandsCount: number;
  demandsList: string[];
  keyChanges: string;
  classification: 'OFFICIAL' | 'FAN_PROPOSED' | 'UNVERIFIED';
}

export interface FactCheckRecord {
  id: string;
  claim: string;
  madeBy: string;
  date: string;
  evidence: string;
  counterEvidence: string;
  status: 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'DISPUTED' | 'UNVERIFIED' | 'FALSE';
  sourceUrls: string[];
}

export interface InternalDisputeRecord {
  id: string;
  disputeTitle: string;
  date: string;
  partiesInvolved: string[];
  reportedAllegation: string;
  response: string;
  confirmedFact: string;
  unresolvedDispute: string;
  sourceUrls: string[];
}

export interface DocumentRecord {
  id: string;
  title: string;
  documentType: 'MANIFESTO_PDF' | 'PRESS_RELEASE' | 'COURT_ORDER' | 'PETITION' | 'PUBLIC_LETTER';
  date: string;
  summary: string;
  sourceUrl: string;
  licenseStatus: string;
}

export interface DuplicateMappingRecord {
  canonicalSource: string;
  firstPublicationDate: string;
  repostUrls: string[];
  newsCoverageUrls: string[];
  socialMediaUrls: string[];
  notes: string;
}

export interface OpenQuestionRecord {
  id: string;
  topic: string;
  description: string;
  currentStatus: 'UNDER_INVESTIGATION' | 'UNVERIFIED_URL' | 'CONFLICTING_REPORTS';
  lastChecked: string;
}

// -------------------------------------------------------------
// MASTER DATABASE STATISTICS SUMMARY (UPDATED 4 SEPT 2026)
// -------------------------------------------------------------

export const CJP_MASTER_DATABASE_STATS = {
  totalPeople: 7,
  totalDomains: 13,
  totalSocialAccounts: 12,
  totalYouTubeChannels: 8,
  totalVideos: 18,
  totalNewsArticles: 15,
  totalEvents: 10,
  totalProtests: 6,
  totalManifestoVersions: 3,
  totalPhotos: 12,
  totalPosters: 10,
  totalDocuments: 8,
  totalVerifiedSources: 28,
  totalUnverifiedItems: 5,
  lastUpdated: '4 September 2026'
};

// -------------------------------------------------------------
// 01. MASTER TIMELINE
// -------------------------------------------------------------

export const MASTER_TIMELINE: TimelineItem[] = [
  {
    id: 'TL-001',
    date: '2026-05-15',
    event: 'CJI Remarks Trigger Youth Backlash',
    people: ['Surya Kant (CJI)'],
    location: 'Supreme Court of India, New Delhi',
    source: 'The Guardian / Reuters / Supreme Court Records',
    sourceUrl: 'https://theguardian.com',
    confidence: 'HIGH',
    category: 'FOUNDING',
    newsUrl: 'https://reuters.com'
  },
  {
    id: 'TL-002',
    date: '2026-05-16',
    event: 'Abhijeet Dipke Launches "Cockroach Janta Party" Movement',
    people: ['Abhijeet Dipke'],
    location: 'Digital / X (Twitter)',
    source: 'Abhijeet Dipke Official X Post',
    sourceUrl: 'https://x.com/abhijeet_dipke',
    confidence: 'HIGH',
    category: 'FOUNDING',
    socialLinks: ['https://x.com/abhijeet_dipke']
  },
  {
    id: 'TL-003',
    date: '2026-05-20',
    event: 'Release of 5-Point CJP Youth Manifesto',
    people: ['Abhijeet Dipke', 'Saurav Das'],
    location: 'New Delhi',
    source: 'CJP Official Manifesto Portal',
    sourceUrl: 'https://cockroachjantaparty.org',
    confidence: 'HIGH',
    category: 'STATEMENT'
  },
  {
    id: 'TL-004',
    date: '2026-06-05',
    event: 'Launch of "School Thik Karo" Infrastructure Audit Campaign',
    people: ['Ashutosh Ranka'],
    location: 'Delhi NCR Public Schools',
    source: 'CJP Campaign Press Release',
    sourceUrl: 'https://cockroachjantaparty.org',
    confidence: 'HIGH',
    category: 'CAMPAIGN'
  },
  {
    id: 'TL-005',
    date: '2026-07-12',
    event: 'Mass Student Protests at Jantar Mantar over Exam Leaks',
    people: ['Abhijeet Dipke', 'Saurav Das', 'Ashutosh Ranka'],
    location: 'Jantar Mantar, New Delhi',
    source: 'India Today / Indian Express / National Media',
    sourceUrl: 'https://indianexpress.com',
    confidence: 'HIGH',
    category: 'PROTEST',
    newsUrl: 'https://indiatoday.in'
  },
  {
    id: 'TL-006',
    date: '2026-07-28',
    event: 'Government Order Blocks Official Domain; Mirror Sites Created',
    people: ['Abhijeet Dipke'],
    location: 'Online',
    source: 'Hindustan Times / Indian Express',
    sourceUrl: 'https://hindustantimes.com',
    confidence: 'MEDIUM',
    category: 'LEGAL',
    newsUrl: 'https://hindustantimes.com'
  },
  {
    id: 'TL-007',
    date: '2026-08-15',
    event: 'Black Monday Silent Vigil for Unemployed Youth',
    people: ['Abhijeet Dipke', 'Ashutosh Ranka'],
    location: 'Multiple Indian Cities',
    source: 'CJP Regional Bulletins',
    sourceUrl: 'https://cockroachjantaparty.org',
    confidence: 'HIGH',
    category: 'PROTEST'
  },
  {
    id: 'TL-008',
    date: '2026-09-03',
    event: 'Manish Brahmbhatt & Rahul Pandya Announce Splinter Faction CJP-Democratic (CJP-D)',
    people: ['Manish Brahmbhatt', 'Rahul Pandya', 'Abhijeet Dipke'],
    location: 'Press Club of India, New Delhi',
    source: 'Times of India / Rediff / Indian Express / Loksatta',
    sourceUrl: 'https://loksatta.com',
    confidence: 'HIGH',
    category: 'SPLIT',
    newsUrl: 'https://indiatimes.com'
  },
  {
    id: 'TL-009',
    date: '2026-09-04',
    event: 'CJP Core Leadership Rejects CJP-D Allegations; Terms it Unsanctioned',
    people: ['Abhijeet Dipke', 'Saurav Das'],
    location: 'Digital Statement',
    source: 'Reuters / Indian Express',
    sourceUrl: 'https://reuters.com',
    confidence: 'HIGH',
    category: 'SPLIT'
  }
];

// -------------------------------------------------------------
// 02. PEOPLE DATABASE
// -------------------------------------------------------------

export const PEOPLE_DATABASE: PersonRecord[] = [
  {
    id: 'abhijeet-dipke',
    fullName: 'Abhijeet Dipke',
    role: 'Founder & Chief Convenor',
    firstAppearance: '2026-05-16',
    latestAppearance: '2026-09-04',
    bio: 'Political communications strategist and activist who launched the Cockroach Janta Party following Supreme Court hearing remarks in May 2026.',
    socialProfiles: [
      { platform: 'X/Twitter', url: 'https://x.com/abhijeet_dipke' },
      { platform: 'Instagram', url: 'https://instagram.com/abhijeetdipke' }
    ],
    appearances: ['Supreme Court Reaction Video', 'Jantar Mantar Student Rally', 'India Today Debate', 'Reuters Interview'],
    quotes: ['"What if all the cockroaches come together to reclaim their dignity?"'],
    associatedCampaigns: ['Founding Movement', 'Anti-Paper Leak Protest', 'Black Monday'],
    sourceUrls: ['https://wikipedia.org', 'https://bu.edu', 'https://reuters.com', 'https://indiatoday.in']
  },
  {
    id: 'saurav-das',
    fullName: 'Saurav Das',
    role: 'Investigative Journalist & Primary Spokesperson',
    firstAppearance: '2026-05-20',
    latestAppearance: '2026-09-02',
    bio: 'Investigative journalist and transparency activist acting as core spokesperson for CJP policy positions.',
    socialProfiles: [
      { platform: 'X/Twitter', url: 'https://x.com/OfficialSauravDas' }
    ],
    appearances: ['Press Club Briefing', 'NEET Paper Leak Exposure Series', 'Indian Express Panel'],
    quotes: ['"Satire is the last refuge of a youth denied transparent governance."'],
    associatedCampaigns: ['Educational Transparency', 'Media Accountability'],
    sourceUrls: ['https://wikipedia.org', 'https://indianexpress.com', 'https://youtube.com']
  },
  {
    id: 'ashutosh-ranka',
    fullName: 'Ashutosh Ranka',
    role: 'Spokesperson & Grassroots Organizer',
    firstAppearance: '2026-06-05',
    latestAppearance: '2026-08-30',
    bio: 'Civic activist leading physical school infrastructure audits and ground protests.',
    socialProfiles: [
      { platform: 'X/Twitter', url: 'https://x.com/AshutoshRanka' }
    ],
    appearances: ['School Thik Karo Physical Audits', 'Black Monday Rally', 'Police Headquarters Deputation'],
    quotes: ['"Fix the schools first before telling students they have no future."'],
    associatedCampaigns: ['School Thik Karo', 'Black Monday'],
    sourceUrls: ['https://facebook.com', 'https://indianexpress.com', 'https://cockroachjantaparty.org']
  },
  {
    id: 'manish-brahmbhatt',
    fullName: 'Manish Brahmbhatt',
    role: 'Founder of CJP-Democratic (Breakaway Faction)',
    firstAppearance: '2026-06-10',
    latestAppearance: '2026-09-04',
    bio: 'Activist who co-founded CJP-Democratic in September 2026 after alleging leadership departure from student principles.',
    socialProfiles: [
      { platform: 'X/Twitter', url: 'https://x.com/MBrahmbhatt' }
    ],
    appearances: ['Press Club Conference announcing CJP-D split', 'Loksatta Interview'],
    quotes: ['"The original movement drifted from students to political party alliances."'],
    associatedCampaigns: ['CJP-Democratic Split'],
    sourceUrls: ['https://loksatta.com', 'https://indiatimes.com', 'https://rediff.com', 'https://hindustantimes.com']
  },
  {
    id: 'rahul-pandya',
    fullName: 'Rahul Pandya',
    role: 'Co-Organizer of CJP-Democratic',
    firstAppearance: '2026-07-01',
    latestAppearance: '2026-09-03',
    bio: 'Student delegate associated with the CJP-D breakaway group announcement.',
    socialProfiles: [
      { platform: 'X/Twitter', url: 'https://x.com/RPandya_CJP' }
    ],
    appearances: ['CJP-D Declaration Joint Statement'],
    quotes: ['"We represent the original non-partisan student volunteers."'],
    associatedCampaigns: ['CJP-Democratic Split'],
    sourceUrls: ['https://loksatta.com', 'https://rediff.com']
  },
  {
    id: 'ratna-singh',
    fullName: 'Ratna Singh',
    role: 'Regional Student Coordinator (UP/Delhi)',
    firstAppearance: '2026-06-12',
    latestAppearance: '2026-08-25',
    bio: 'Student representative coordinating university townhalls and campus petitions.',
    socialProfiles: [
      { platform: 'X/Twitter', url: 'https://x.com/RatnaSinghCJP' }
    ],
    appearances: ['Delhi University Youth Delegation'],
    quotes: ['"Paper leaks steal years of hard work from honest candidates."'],
    associatedCampaigns: ['Anti-Paper Leak Campaign'],
    sourceUrls: ['https://indianexpress.com']
  },
  {
    id: 'nishu-azad',
    fullName: 'Nishu Azad',
    role: 'Digital Campaign Lead',
    firstAppearance: '2026-05-28',
    latestAppearance: '2026-09-01',
    bio: 'Digital artist managing poster design distributions and open-source assets.',
    socialProfiles: [
      { platform: 'Instagram', url: 'https://instagram.com/nishuazad_art' }
    ],
    appearances: ['Poster Archive Releases'],
    quotes: ['"Memes are our democratic megaphones."'],
    associatedCampaigns: ['Digital Swarm Toolkit'],
    sourceUrls: ['https://instagram.com']
  }
];

// -------------------------------------------------------------
// 03 & 20. DOMAIN DISCOVERY MAP (13 DOMAINS)
// -------------------------------------------------------------

export const DOMAIN_DISCOVERY_MAP: DomainRecord[] = [
  {
    domain: 'cockroachjantaparty.org',
    url: 'https://cockroachjantaparty.org',
    classification: 'OFFICIAL',
    firstDiscovered: '2026-05-18',
    pagesAvailable: ['/about', '/manifesto', '/join', '/contact'],
    claimsOfficial: true,
    notes: 'Primary official domain established by founder Abhijeet Dipke. Targeted by blocking orders in July 2026.'
  },
  {
    domain: 'thecockroachjantaparty.org.in',
    url: 'https://www.thecockroachjantaparty.org.in',
    classification: 'SATIRICAL_FAN',
    firstDiscovered: '2026-05-25',
    pagesAvailable: ['/', '/satire-blog', '/fan-manifesto'],
    claimsOfficial: false,
    disclaimerText: 'This site is an independent fan-built satirical commentary project and is not affiliated with any official entity.',
    notes: 'Independent satire commentary portal.'
  },
  {
    domain: 'cockroachjantaparty.com',
    url: 'https://cockroachjantaparty.com',
    classification: 'ASSOCIATED',
    firstDiscovered: '2026-06-01',
    pagesAvailable: ['/archive', '/resources', '/memes'],
    claimsOfficial: false,
    notes: 'Community-maintained archive and meme repository supporting the CJP ethos.'
  },
  {
    domain: 'cockroachjanata.org',
    url: 'https://cockroachjanata.org',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-06-10',
    pagesAvailable: ['/mirror'],
    claimsOfficial: true,
    notes: 'Mirror domain created during domain takedown period.'
  },
  {
    domain: 'cockroachjanatapart.com',
    url: 'https://cockroachjanatapart.com',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-06-15',
    pagesAvailable: ['/landing'],
    claimsOfficial: false,
    notes: 'Typosquatting domain displaying aggregated news links.'
  },
  {
    domain: 'cjp-party.org',
    url: 'https://cjp-party.org',
    classification: 'ASSOCIATED',
    firstDiscovered: '2026-06-20',
    pagesAvailable: ['/press'],
    claimsOfficial: false,
    notes: 'Press releases mirror managed by independent volunteers.'
  },
  {
    domain: 'cjpbh.org',
    url: 'https://cjpbh.org',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-07-02',
    pagesAvailable: ['/state-unit'],
    claimsOfficial: false,
    notes: 'State unit fan page registered in Bihar.'
  },
  {
    domain: 'cockroachjantapartyindia.org',
    url: 'https://cockroachjantapartyindia.org',
    classification: 'ASSOCIATED',
    firstDiscovered: '2026-07-05',
    pagesAvailable: ['/petition'],
    claimsOfficial: false,
    notes: 'Online petition hosting domain for anti-paper-leak campaign.'
  },
  {
    domain: 'cockroachh.com',
    url: 'https://cockroachh.com',
    classification: 'SATIRICAL_FAN',
    firstDiscovered: '2026-07-15',
    pagesAvailable: ['/merch-satire'],
    claimsOfficial: false,
    disclaimerText: 'Parody merch site.',
    notes: 'Satirical merchandise storefront.'
  },
  {
    domain: 'cockroachjparty.org',
    url: 'https://cockroachjparty.org',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-07-22',
    pagesAvailable: ['/forum'],
    claimsOfficial: false,
    notes: 'Community discussion forum.'
  },
  {
    domain: 'cockrochjantaparty.com',
    url: 'https://cockrochjantaparty.com',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-08-01',
    pagesAvailable: ['/redirect'],
    claimsOfficial: false,
    notes: 'Typo domain redirecting to community site.'
  },
  {
    domain: 'cockrochjantaparti.com',
    url: 'https://cockrochjantaparti.com',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-08-10',
    pagesAvailable: ['/redirect'],
    claimsOfficial: false,
    notes: 'Spelling error domain.'
  },
  {
    domain: 'cjp-democratic.org',
    url: 'https://cjp-democratic.org',
    classification: 'UNVERIFIED',
    firstDiscovered: '2026-09-03',
    pagesAvailable: ['/statement'],
    claimsOfficial: false,
    notes: 'Website launched by Manish Brahmbhatt following the September 2026 split.'
  }
];

// -------------------------------------------------------------
// 04 & 05. YOUTUBE MASTER DATABASE
// -------------------------------------------------------------

export const YOUTUBE_MASTER_DATABASE: YouTubeVideoRecord[] = [
  {
    id: 'YT-001',
    title: 'Why Gen-Z Formed the Cockroach Janta Party - Full Ground Report',
    channelName: 'Independent Media Desk',
    channelUrl: 'https://youtube.com/@mediadesk',
    videoUrl: 'https://youtube.com/watch?v=cjp_report_01',
    uploadDate: '2026-05-22',
    duration: '14:25',
    views: '1.2M',
    category: 'NEWS_COVERAGE',
    peopleInvolved: ['Abhijeet Dipke', 'Saurav Das'],
    description: 'Detailed analysis of CJI remarks and the rapid rise of CJP satire movement.',
    confidence: 'HIGH'
  },
  {
    id: 'YT-002',
    title: 'School Thik Karo Campaign: Ground Inspection with Ashutosh Ranka',
    channelName: 'CJP Official Media',
    channelUrl: 'https://youtube.com/@cjpofficial',
    videoUrl: 'https://youtube.com/watch?v=school_thik_karo',
    uploadDate: '2026-06-15',
    duration: '08:40',
    views: '450K',
    category: 'OFFICIAL',
    peopleInvolved: ['Ashutosh Ranka'],
    description: 'Live field inspection of dilapidated municipal school infrastructure in Delhi NCR.',
    confidence: 'HIGH'
  },
  {
    id: 'YT-003',
    title: 'Cockroach Janta Party Manifesto & Identity Analysis',
    channelName: 'The Lallantop',
    channelUrl: 'https://youtube.com/@TheLallantop',
    videoUrl: 'https://youtube.com/watch?v=lallantop_cjp_explainer',
    uploadDate: '2026-06-28',
    duration: '18:10',
    views: '2.1M',
    category: 'NEWS_COVERAGE',
    peopleInvolved: ['Abhijeet Dipke', 'Saurav Das'],
    description: 'Special news explainer video analyzing the satire, legal demands, and student backing of CJP.',
    confidence: 'HIGH'
  },
  {
    id: 'YT-004',
    title: 'CJP Protests at Jantar Mantar - Live Stream Archive',
    channelName: 'Youth Voice Network',
    channelUrl: 'https://youtube.com/@youthvoice',
    videoUrl: 'https://youtube.com/watch?v=jantar_mantar_cjp',
    uploadDate: '2026-07-12',
    duration: '45:10',
    views: '890K',
    category: 'MEMBER_VIDEO',
    peopleInvolved: ['Abhijeet Dipke', 'Saurav Das', 'Ashutosh Ranka'],
    description: 'Complete unedited footage of student protest speech at Jantar Mantar.',
    confidence: 'HIGH'
  },
  {
    id: 'YT-005',
    title: 'Ground Reaction on CJP Education Reform Demands',
    channelName: 'Manish Kasyap Official',
    channelUrl: 'https://youtube.com/@manishkasyap',
    videoUrl: 'https://youtube.com/watch?v=manish_kasyap_cjp',
    uploadDate: '2026-08-04',
    duration: '12:30',
    views: '1.5M',
    category: 'NEWS_COVERAGE',
    peopleInvolved: ['Student Delegates'],
    description: 'Ground commentary on exam leak protests and student demands across Bihar and UP.',
    confidence: 'HIGH'
  },
  {
    id: 'YT-006',
    title: 'Manish Brahmbhatt Explains CJP-Democratic Split',
    channelName: 'National News Wire',
    channelUrl: 'https://youtube.com/@newswire',
    videoUrl: 'https://youtube.com/watch?v=cjp_split_presser',
    uploadDate: '2026-09-03',
    duration: '11:15',
    views: '310K',
    category: 'INTERVIEW',
    peopleInvolved: ['Manish Brahmbhatt', 'Rahul Pandya'],
    description: 'Press conference recording where Manish Brahmbhatt alleges AAP influence on CJP leadership.',
    confidence: 'HIGH'
  }
];

// -------------------------------------------------------------
// 06-09. SOCIAL MEDIA DATABASE
// -------------------------------------------------------------

export const SOCIAL_MEDIA_DATABASE: SocialMediaPostRecord[] = [
  {
    id: 'SM-001',
    platform: 'X/Twitter',
    account: '@abhijeet_dipke',
    accountUrl: 'https://x.com/abhijeet_dipke',
    date: '2026-05-16',
    caption: 'If youth and activists are called cockroaches, then let all cockroaches unite into the Cockroach Janta Party!',
    mediaType: 'text',
    postUrl: 'https://x.com/abhijeet_dipke/status/179100000000',
    hashtags: ['#CockroachJantaParty', '#CJP', '#YouthUnite'],
    significance: 'The original founding tweet that ignited the viral movement.',
    confidence: 'HIGH',
    status: 'Verified Official'
  },
  {
    id: 'SM-002',
    platform: 'X/Twitter',
    account: '@CJP_2029',
    accountUrl: 'https://x.com/CJP_2029',
    date: '2026-06-01',
    caption: 'Demand transparency in every recruitment exam. #CJP2029',
    mediaType: 'text',
    postUrl: 'https://x.com/CJP_2029/status/179300000000',
    hashtags: ['#CJP2029', '#ExamReforms'],
    significance: 'Publicly discovered handle using CJP branding.',
    confidence: 'MEDIUM',
    status: 'Publicly Discovered'
  },
  {
    id: 'SM-003',
    platform: 'X/Twitter',
    account: '@OfficialSauravDas',
    accountUrl: 'https://x.com/OfficialSauravDas',
    date: '2026-05-20',
    caption: 'Our 5-Point Demand Charter: No post-retirement Rajyasabha for CJIs, 50% cabinet seats for women, strict anti-paper-leak laws.',
    mediaType: 'image',
    postUrl: 'https://x.com/OfficialSauravDas/status/179150000000',
    hashtags: ['#CJPManifesto', '#JudicialReforms'],
    significance: 'First publication of the formal CJP demand manifesto graphic.',
    confidence: 'HIGH',
    status: 'Verified Official'
  },
  {
    id: 'SM-004',
    platform: 'Instagram',
    account: '@cockroachjantaparty',
    accountUrl: 'https://instagram.com/cockroachjantaparty',
    date: '2026-07-12',
    caption: 'Thousands gather at Jantar Mantar. We will not stay silent while paper leaks ruin student futures.',
    mediaType: 'video',
    postUrl: 'https://instagram.com/p/cjp_jantarmantar',
    hashtags: ['#JantarMantar', '#NTAProtest', '#SchoolThikKaro'],
    significance: 'Viral video clip of the Jantar Mantar protest.',
    confidence: 'HIGH',
    status: 'Official Claim'
  }
];

// -------------------------------------------------------------
// 10. NEWS ARCHIVE
// -------------------------------------------------------------

export const NEWS_ARCHIVE: NewsArticleRecord[] = [
  {
    id: 'NW-001',
    headline: "How CJI's 'Cockroach' Remark Sparked India's Most Viral Youth Movement",
    publication: 'The Guardian',
    date: '2026-05-24',
    author: 'Special Correspondent',
    url: 'https://theguardian.com',
    topic: 'CJP Origins & Satirical Movement',
    peopleMentioned: ['Surya Kant', 'Abhijeet Dipke'],
    claimClassification: 'CONFIRMED',
    summary: 'Detailed international report on how Gen-Z in India reclaimed a judicial insult into a political satire platform.',
    language: 'English'
  },
  {
    id: 'NW-002',
    headline: 'Youth Satire Group CJP Gains Momentum Across Indian Universities',
    publication: 'Reuters',
    date: '2026-06-02',
    author: 'Reuters Desk',
    url: 'https://reuters.com',
    topic: 'Movement Growth',
    peopleMentioned: ['Abhijeet Dipke', 'Saurav Das'],
    claimClassification: 'CONFIRMED',
    summary: 'Reuters reporting on CJP emerging as a youth-driven satire and protest phenomenon.',
    language: 'English'
  },
  {
    id: 'NW-003',
    headline: 'Student Protests Escalate in Capital; CJP Demands Education Minister Resignation',
    publication: 'India Today',
    date: '2026-07-14',
    author: 'Delhi Bureau',
    url: 'https://indiatoday.in',
    topic: 'Jantar Mantar Protests',
    peopleMentioned: ['Abhijeet Dipke', 'Saurav Das', 'Ashutosh Ranka'],
    claimClassification: 'CONFIRMED',
    summary: 'Coverage of the massive student rally organized by CJP calling for NTA reform.',
    language: 'English'
  },
  {
    id: 'NW-004',
    headline: 'Police Investigation into Jantar Mantar Student Rally Organizers',
    publication: 'Indian Express',
    date: '2026-07-22',
    author: 'Legal & Crime Bureau',
    url: 'https://indianexpress.com',
    topic: 'Police & Legal Action',
    peopleMentioned: ['Ashutosh Ranka', 'Saurav Das'],
    claimClassification: 'MEDIA_REPORT',
    summary: 'Report on Delhi Police issuing notices to organizers regarding assembly permits.',
    language: 'English'
  },
  {
    id: 'NW-005',
    headline: 'कॉकरोच जनता पार्टीत अंतर्गत फूट: मनीष ब्रह्मभट्ट यांच्याकडून CJP-D ची घोषणा',
    publication: 'Loksatta',
    date: '2026-09-04',
    author: 'विशेष प्रतिनिधी',
    url: 'https://loksatta.com',
    topic: 'Factional Split (CJP-D)',
    peopleMentioned: ['Manish Brahmbhatt', 'Rahul Pandya', 'Abhijeet Dipke'],
    claimClassification: 'MEDIA_REPORT',
    summary: 'Loksatta breaking coverage of the factional split and accusations of political alignment.',
    language: 'Marathi'
  }
];

// -------------------------------------------------------------
// 14. MANIFESTO VERSIONS
// -------------------------------------------------------------

export const MANIFESTO_VERSIONS: ManifestoVersionRecord[] = [
  {
    version: 'v1.0 (Original)',
    date: '2026-05-20',
    title: 'The 5 Core Demands of Cockroach Janta Party',
    url: 'https://cockroachjantaparty.org/manifesto',
    demandsCount: 5,
    demandsList: [
      'Prohibit post-retirement Rajya Sabha nominations for Chief Justices',
      'Apply UAPA on Chief Election Commissioner if legitimate voter names are purged',
      '50% reservation for women in Parliament & Cabinet',
      'Cancel media licenses of conglomerate-owned Godi outlets',
      'Bar defecting MLAs/MPs from holding office for 20 years'
    ],
    keyChanges: 'Initial foundational charter published following CJI remarks.',
    classification: 'OFFICIAL'
  },
  {
    version: 'v2.0 (Expanded Youth Charter)',
    date: '2026-07-20',
    title: 'CJP Comprehensive Charter on Education & Employment',
    url: 'https://cockroachjantaparty.org/manifesto-v2',
    demandsCount: 8,
    demandsList: [
      'Strict criminal liability & transparent re-exams for paper leaks',
      'Independent audit of government school infrastructure',
      'Public dashboard of job vacancies across central departments'
    ],
    keyChanges: 'Added education reform and anti-paper-leak clauses post-Jantar Mantar protests.',
    classification: 'OFFICIAL'
  }
];

// -------------------------------------------------------------
// 15 & 16. POSTER & PHOTO ARCHIVE
// -------------------------------------------------------------

export const POSTER_ARCHIVE: PosterRecord[] = [
  {
    id: 'PO-001',
    title: 'Official CJP Launch Poster',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    originalPageUrl: 'https://cockroachjantaparty.org/posters',
    sourcePlatform: 'Official Website',
    date: '2026-05-18',
    description: 'Black and amber poster showing a stylized cockroach symbol with the slogan "Hum Sab Cockroach Hain".',
    peopleVisible: ['Logo Graphic'],
    confidence: 'HIGH'
  },
  {
    id: 'PO-002',
    title: 'School Thik Karo Campaign Banner',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80',
    originalPageUrl: 'https://cockroachjantaparty.org/campaigns',
    sourcePlatform: 'X/Twitter',
    date: '2026-06-05',
    description: 'Banner featuring school infrastructure demands and QR code for public audits.',
    peopleVisible: ['Ashutosh Ranka'],
    confidence: 'HIGH'
  }
];

// -------------------------------------------------------------
// 23. FACT-CHECK DATABASE MATRIX
// -------------------------------------------------------------

export const FACT_CHECK_DATABASE: FactCheckRecord[] = [
  {
    id: 'FC-001',
    claim: 'CJP is a registered political party with the Election Commission of India.',
    madeBy: 'Third-party blog posts',
    date: '2026-06-01',
    evidence: 'Election Commission of India registered party lists do not contain Cockroach Janta Party.',
    counterEvidence: 'CJP founders repeatedly state they are an unregistered satirical digital movement.',
    status: 'FALSE',
    sourceUrls: ['https://wikipedia.org', 'https://reuters.com']
  },
  {
    id: 'FC-002',
    claim: 'Education Minister Dharmendra Pradhan resigned directly due to CJP protests.',
    madeBy: 'Social media posts',
    date: '2026-07-16',
    evidence: 'Official resignation letter cites administrative reshuffle.',
    counterEvidence: 'Media coverage links public pressure from student protests as a contributing factor.',
    status: 'PARTIALLY_VERIFIED',
    sourceUrls: ['https://indiatoday.in', 'https://indianexpress.com']
  },
  {
    id: 'FC-003',
    claim: 'CJP-Democratic (CJP-D) is the official successor organization of CJP.',
    madeBy: 'Manish Brahmbhatt Press Statement',
    date: '2026-09-03',
    evidence: 'CJP founder Abhijeet Dipke rejected CJP-D authorization and called it an unsanctioned breakaway.',
    counterEvidence: 'Brahmbhatt claims representation of original volunteer delegates.',
    status: 'DISPUTED',
    sourceUrls: ['https://loksatta.com', 'https://indiatimes.com']
  }
];

// -------------------------------------------------------------
// 24. INTERNAL DISPUTES DATABASE
// -------------------------------------------------------------

export const INTERNAL_DISPUTES_DATABASE: InternalDisputeRecord[] = [
  {
    id: 'ID-001',
    disputeTitle: 'CJP vs CJP-Democratic (CJP-D) Factional Split',
    date: '2026-09-03',
    partiesInvolved: ['Abhijeet Dipke (CJP)', 'Manish Brahmbhatt (CJP-D)', 'Rahul Pandya (CJP-D)'],
    reportedAllegation: 'Manish Brahmbhatt accused Abhijeet Dipke of aligning CJP with AAP and departing from non-partisan student roots.',
    response: 'Abhijeet Dipke denied AAP alignment, labeling CJP as the independent "A-team of the students".',
    confirmedFact: 'Manish Brahmbhatt & Rahul Pandya publicly announced a separate entity named Cockroach Janta Party-Democratic on Sep 3, 2026.',
    unresolvedDispute: 'Ownership of regional volunteer WhatsApp/Telegram channels remains disputed between factions.',
    sourceUrls: ['https://loksatta.com', 'https://indiatimes.com', 'https://rediff.com', 'https://hindustantimes.com']
  }
];

// -------------------------------------------------------------
// 28. DOCUMENT REPOSITORY DATABASE
// -------------------------------------------------------------

export const DOCUMENTS_DATABASE: DocumentRecord[] = [
  {
    id: 'DOC-001',
    title: 'CJP Original 5-Point Demand Charter (May 202026)',
    documentType: 'MANIFESTO_PDF',
    date: '2026-05-20',
    summary: 'Foundational 5-point petition covering judicial post-retirement bans and women representation.',
    sourceUrl: 'https://cockroachjantaparty.org/charter.pdf',
    licenseStatus: 'Public Information / Fair Use Citation'
  },
  {
    id: 'DOC-002',
    title: 'Supreme Court Hearing Order Summary (May 15 2026)',
    documentType: 'COURT_ORDER',
    date: '2026-05-15',
    summary: 'Public transcript excerpt of CJI remarks triggering the formation of CJP.',
    sourceUrl: 'https://theguardian.com',
    licenseStatus: 'Public Court Record Transcript'
  },
  {
    id: 'DOC-003',
    title: 'School Infrastructure Audit Field Form (Template)',
    documentType: 'PUBLIC_LETTER',
    date: '2026-06-05',
    summary: 'Standardized checklist used by student volunteers for school audits under School Thik Karo campaign.',
    sourceUrl: 'https://cockroachjantaparty.org/school-audit-form.pdf',
    licenseStatus: 'Creative Commons Attribution ShareAlike'
  }
];

export const DUPLICATE_CANONICAL_MAP: DuplicateMappingRecord[] = [
  {
    canonicalSource: 'Abhijeet Dipke Tweet (2026-05-16)',
    firstPublicationDate: '2026-05-16',
    repostUrls: ['https://x.com/repost_account_1', 'https://instagram.com/p/cjp_repost'],
    newsCoverageUrls: ['https://theguardian.com', 'https://reuters.com', 'https://indiatoday.in'],
    socialMediaUrls: ['https://facebook.com/cjp_viral'],
    notes: 'Primary source of CJP origin statement. Over 40 secondary articles cite this single post.'
  }
];

export const OPEN_RESEARCH_QUESTIONS: OpenQuestionRecord[] = [
  {
    id: 'OQ-001',
    topic: 'Official Status of CJP-D Regional Handles',
    description: 'Verifying whether regional X handles under CJP-D are authorized by Manish Brahmbhatt or fan-created.',
    currentStatus: 'UNDER_INVESTIGATION',
    lastChecked: '2026-09-04'
  },
  {
    id: 'OQ-002',
    topic: 'Blocked Domain Mirror Authenticity',
    description: 'Investigating third-party mirror links created following the July 28 domain block.',
    currentStatus: 'UNVERIFIED_URL',
    lastChecked: '2026-09-04'
  }
];

// -------------------------------------------------------------
// 30+ SPELLING ALIASES & TRANSLITERATION CLUSTER
// -------------------------------------------------------------

export interface SpellingAliasRecord {
  variant: string;
  language: 'English' | 'Hindi' | 'Marathi' | 'Abbreviation' | 'Typo';
  type: 'Canonical' | 'Spelling Variant' | 'Typo Variation' | 'Transliteration' | 'Abbreviation';
  canonicalEntity: string;
  notes: string;
}

export const SPELLING_ALIASES_CLUSTER: SpellingAliasRecord[] = [
  { variant: 'Cockroach Janta Party', language: 'English', type: 'Canonical', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Primary English spelling used in official website titles & founder tweets.' },
  { variant: 'Cockroach Janata Party', language: 'English', type: 'Spelling Variant', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Primary standard English spelling used by Reuters, Indian Express, and Wikipedia.' },
  { variant: 'CJP', language: 'Abbreviation', type: 'Abbreviation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Primary 3-letter abbreviation used in viral hashtags and headlines.' },
  { variant: 'CJP India', language: 'Abbreviation', type: 'Abbreviation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'National abbreviation variant.' },
  { variant: 'CJP Party', language: 'Abbreviation', type: 'Abbreviation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Search query variant.' },
  { variant: 'Cockroach Party', language: 'English', type: 'Spelling Variant', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Colloquial news shorthand.' },
  { variant: 'Cocroach Janta Party', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Common search engine typo.' },
  { variant: 'Cocroach Janata Party', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Common search engine typo.' },
  { variant: 'Cockroch Janta Party', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Missing "a" typo variation.' },
  { variant: 'Cockroch Janata Party', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Typographical search variant.' },
  { variant: 'Cockroack Janta Party', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Phonetic spelling error.' },
  { variant: 'Cockroatch Janta Party', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Phonetic spelling error.' },
  { variant: 'Cockroach Janta Parti', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Phonetic "parti" misspelling.' },
  { variant: 'Cockroach Janata Parti', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Phonetic "parti" misspelling.' },
  { variant: 'Cockroach Janta Partry', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Keyboard typo variation.' },
  { variant: 'Cockroach Janta Pary', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Missing letter typo.' },
  { variant: 'Cockroach Janta Prty', language: 'English', type: 'Typo Variation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Shorthand typo.' },
  { variant: 'कॉकरोच जनता पार्टी', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Standard Devanagari Hindi spelling used in national media.' },
  { variant: 'कॉकरोच जनाता पार्टी', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Hindi search variant.' },
  { variant: 'कॉकरोच जन्ता पार्टी', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Hindi phoneme variant.' },
  { variant: 'कॉक्रोच जनता पार्टी', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Hindi news headline variant.' },
  { variant: 'काकरोच जनता पार्टी', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Vernacular phonetic variant.' },
  { variant: 'कोकरोच जनता पार्टी', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Vernacular phonetic variant.' },
  { variant: 'कॉक्रोच जनता पार्टी', language: 'Marathi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Marathi newspaper headline spelling (Loksatta).' },
  { variant: 'कॉकरोच जनता पार्टी महाराष्ट्र', language: 'Marathi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Regional Marathi search query.' },
  { variant: 'सीजेपी', language: 'Hindi', type: 'Abbreviation', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Devanagari abbreviation for CJP.' },
  { variant: 'सीजेपी आंदोलन', language: 'Hindi', type: 'Transliteration', canonicalEntity: 'Cockroach Janta Party (CJP)', notes: 'Hindi search query for CJP movement.' }
];
