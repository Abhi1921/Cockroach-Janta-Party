export interface Member {
  id: string;
  memberId: string;
  name: string;
  city: string;
  state: string;
  joinDate: string;
  role: string;
  avatarBg: string;
  avatarImg?: string;
  badge: 'Founding Swarm' | 'RTI Advocate' | 'Road Inspector' | 'Poster Artist' | 'Active Swarm';
  contributions: number;
  bio: string;
  isLeader?: boolean;
  wardNo?: string;
}

export const membersData: Member[] = [
  {
    id: 'mem-1',
    memberId: 'CJP-2026-0001',
    name: 'Abhijeet Dipke',
    city: 'Pune',
    state: 'Maharashtra',
    joinDate: '2026-01-01',
    role: 'Fictional Founder & Chief Satirist',
    avatarBg: '#D9572B',
    avatarImg: '/cjp_leader_abhijeet_dipke.png',
    badge: 'Founding Swarm',
    contributions: 420,
    isLeader: true,
    wardNo: 'Ward 14 (Deccan Swarm)',
    bio: 'Investigative researcher specializing in municipal RTI audits, NTA exam integrity, and subterranean drain depth verification.'
  },
  {
    id: 'mem-2',
    memberId: 'CJP-2026-0104',
    name: 'Ananya Sen',
    city: 'Kolkata',
    state: 'West Bengal',
    joinDate: '2026-02-15',
    role: 'RTI Transparency Lead & Legal Observer',
    avatarBg: '#27AE60',
    avatarImg: '/cjp_leader_ananya_sen.png',
    badge: 'RTI Advocate',
    contributions: 189,
    isLeader: true,
    wardNo: 'Ward 08 (Salt Lake)',
    bio: 'Lead advocate for Section 4 online disclosure of municipal paving work orders and zero-paywall public ledgers.'
  },
  {
    id: 'mem-3',
    memberId: 'CJP-2026-0219',
    name: 'Ashutosh Ranka',
    city: 'Bengaluru',
    state: 'Karnataka',
    joinDate: '2026-03-02',
    role: 'Pothole Quality & Asphalt Auditor',
    avatarBg: '#E6A100',
    avatarImg: '/cjp_leader_ashutosh_ranka.png',
    badge: 'Road Inspector',
    contributions: 142,
    isLeader: true,
    wardNo: 'Ward 22 (Indiranagar)',
    bio: 'Cataloging arterial road coordinates to demand 3-year mandatory contractor repair warranties across metro sectors.'
  },
  {
    id: 'mem-4',
    memberId: 'CJP-2026-0350',
    name: 'Saurav Das',
    city: 'New Delhi',
    state: 'Delhi',
    joinDate: '2026-03-20',
    role: 'Subterranean Drain Audit Captain',
    avatarBg: '#8E44AD',
    avatarImg: '/cjp_leader_saurav_das.png',
    badge: 'Poster Artist',
    contributions: 167,
    isLeader: true,
    wardNo: 'Ward 03 (Connaught Place)',
    bio: 'Monsoon sewer desilting depth verification expert ensuring public contractor compliance before annual rains.'
  },
  {
    id: 'mem-5',
    memberId: 'CJP-2026-0412',
    name: 'Priya Sharma',
    city: 'New Delhi',
    state: 'Delhi',
    joinDate: '2026-04-05',
    role: 'School Infrastructure Inspector',
    avatarBg: '#2980B9',
    badge: 'RTI Advocate',
    contributions: 89,
    wardNo: 'Ward 12 (Central Delhi)',
    bio: 'Inspecting public school roofs, classroom desks, and sanitation facilities using citizen scorecards.'
  },
  {
    id: 'mem-6',
    memberId: 'CJP-2026-0520',
    name: 'Rohan Verma',
    city: 'Bengaluru',
    state: 'Karnataka',
    joinDate: '2026-04-18',
    role: 'Tap Water Purity Diagnostics Lead',
    avatarBg: '#D9572B',
    badge: 'Road Inspector',
    contributions: 78,
    wardNo: 'Ward 45 (Koramangala)',
    bio: 'Organizing mobile volunteer water testing kiosks offering free TDS and chlorine diagnostics to ward residents.'
  },
  {
    id: 'mem-7',
    memberId: 'CJP-2026-0688',
    name: 'Karan Patel',
    city: 'Ahmedabad',
    state: 'Gujarat',
    joinDate: '2026-05-01',
    role: 'Clean Corner Swarm Captain',
    avatarBg: '#E6A100',
    badge: 'Active Swarm',
    contributions: 53,
    wardNo: 'Ward 19 (Navrangpura)',
    bio: 'Mobilizing residents to photograph illegal garbage dumps and petition municipal councilors for daily waste pickup.'
  },
  {
    id: 'mem-8',
    memberId: 'CJP-2026-0744',
    name: 'Meera Iyer',
    city: 'Chennai',
    state: 'Tamil Nadu',
    joinDate: '2026-05-14',
    role: 'Street Light Safety Observer',
    avatarBg: '#27AE60',
    badge: 'RTI Advocate',
    contributions: 64,
    wardNo: 'Ward 33 (Adyar)',
    bio: 'Mapping dark alleyways and malfunctioning sodium bulbs to improve nocturnal safety across suburban wards.'
  },
  {
    id: 'mem-9',
    memberId: 'CJP-2026-0890',
    name: 'Aditya Kulkarni',
    city: 'Mumbai',
    state: 'Maharashtra',
    joinDate: '2026-06-02',
    role: 'Pothole Measurement Guild',
    avatarBg: '#C0392B',
    badge: 'Road Inspector',
    contributions: 110,
    wardNo: 'Ward 02 (Andheri West)',
    bio: 'Logging asphalt deterioration coordinates to hold paving contractors accountable for early road failure.'
  },
  {
    id: 'mem-10',
    memberId: 'CJP-2026-0915',
    name: 'Farhan Akhtar',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    joinDate: '2026-06-21',
    role: 'BitChat Network Moderator',
    avatarBg: '#8E44AD',
    badge: 'Active Swarm',
    contributions: 95,
    wardNo: 'Ward 15 (Hazratganj)',
    bio: 'Facilitating secure, decentralized local swarm communications for neighborhood RTI auditors.'
  },
  {
    id: 'mem-11',
    memberId: 'CJP-2026-1042',
    name: 'Divya Nair',
    city: 'Kochi',
    state: 'Kerala',
    joinDate: '2026-07-04',
    role: 'Environmental Drainage Lead',
    avatarBg: '#2980B9',
    badge: 'RTI Advocate',
    contributions: 48,
    wardNo: 'Ward 06 (Marine Drive)',
    bio: 'Advocating for participatory budgeting in local park upkeep and coastal canal preservation.'
  },
  {
    id: 'mem-12',
    memberId: 'CJP-2026-1180',
    name: 'Siddharth Rao',
    city: 'Hyderabad',
    state: 'Telangana',
    joinDate: '2026-07-19',
    role: 'Meme & Editorial Poster Artist',
    avatarBg: '#D9572B',
    badge: 'Poster Artist',
    contributions: 134,
    wardNo: 'Ward 21 (Banjara Hills)',
    bio: 'Designing high-impact civic satire posters and visual campaigns for municipal transparency drives.'
  }
];
