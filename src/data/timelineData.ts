export interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  category: 'Founding' | 'Campaign' | 'RTI Audit' | 'Court Order' | 'Milestone';
  description: string;
  relatedCampaign?: string;
  posterId?: string;
  tag: string;
}

export const timelineData: TimelineEvent[] = [
  {
    year: '2020',
    date: 'OCT 2020',
    title: 'First Satire Blog Post & Mascot Emblem Drafted',
    category: 'Founding',
    description: 'Student researcher Abhijeet Dipke publishes the first satirical blog post using the cockroach as a symbol of taxpayer resilience.',
    tag: 'ORIGIN'
  },
  {
    year: '2021',
    date: 'MAR 2021',
    title: 'Subterranean Sewer Audit Concept Formulated',
    category: 'RTI Audit',
    description: 'First RTI queries filed requesting municipal drain desilting expenditure vouchers in ward 14.',
    tag: 'RTI INCEPTION'
  },
  {
    year: '2022',
    date: 'AUG 2022',
    title: 'Digital Swarm Network Expansion',
    category: 'Milestone',
    description: 'Over 5,000 students join the digital commentary network across Delhi, Maharashtra, and Karnataka.',
    tag: 'COMMUNITY'
  },
  {
    year: '2023',
    date: 'MAY 2023',
    title: 'Launch of Contractor Paving Warranty Campaign',
    category: 'Campaign',
    description: 'Demanding physical on-site signboards listing 3-year contractor warranties on all road construction projects.',
    relatedCampaign: 'contractor-warranty-notice-board-drive',
    tag: 'ROAD SAFETY'
  },
  {
    year: '2024',
    date: 'SEP 2024',
    title: 'First Black Monday Demonstration',
    category: 'Campaign',
    description: 'Citizens across 12 cities wear black attire to work to spotlight monsoon road erosion and potholes.',
    relatedCampaign: 'black-monday',
    posterId: 'poster-3',
    tag: 'BLACK MONDAY'
  },
  {
    year: '2025',
    date: 'NOV 2025',
    title: 'School Thik Karo Initiative Unveiled',
    category: 'Campaign',
    description: 'Primary school roof waterproofing and student desk audit campaign launched across government schools.',
    relatedCampaign: 'school-thik-karo',
    posterId: 'poster-2',
    tag: 'EDUCATION'
  },
  {
    year: '2026',
    date: 'JAN 2026',
    title: 'Official Launch of cockroachjantapartywale.com',
    category: 'Milestone',
    description: 'CJP digital publication and central newsroom portal goes live with zero-paywall public access.',
    tag: 'WEBSITE LAUNCH'
  },
  {
    year: '2026',
    date: 'JUL 2026',
    title: 'Black Monday 20 July Mobilization',
    category: 'Campaign',
    description: 'Over 45,000 participants catalog road coordinates and wear black clothing demanding road repair accountability.',
    relatedCampaign: 'black-monday',
    posterId: 'poster-3',
    tag: 'NATIONWIDE ACTION'
  },
  {
    year: '2026',
    date: 'SEP 2026',
    title: 'Supreme Court Article 142 Order Quashing Protester FIRs',
    category: 'Court Order',
    description: 'Supreme Court quashes police cases against student delegates, upholding peaceful assembly rights.',
    posterId: 'poster-1',
    tag: 'LANDMARK VERDICT'
  }
];
