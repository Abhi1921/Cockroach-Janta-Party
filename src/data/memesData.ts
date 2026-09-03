export interface Meme {
  id: string;
  title: string;
  caption: string;
  category: 'bureaucracy' | 'roads' | 'kitchen' | 'elections' | 'general' | 'education' | 'tech';
  upvotes: number;
  author: string;
  date: string;
  tag: string;
}

export const memesData: Meme[] = [
  {
    id: 'meme-1',
    title: 'Pothole Warranty vs Monsoon',
    caption: 'Road contractor inspecting his 3-day old road after 10mm of rainfall: "It is a water feature, not a hole."',
    category: 'roads',
    upvotes: 4320,
    author: 'SwarmCitizen_42',
    date: '2026-08-28',
    tag: 'RoadSatire'
  },
  {
    id: 'meme-2',
    title: 'RTI Officer Processing File',
    caption: 'When you ask for road tender copies: "The file is currently migrating to another dimension for review."',
    category: 'bureaucracy',
    upvotes: 3890,
    author: 'RTIGuy99',
    date: '2026-08-25',
    tag: 'RTISatire'
  },
  {
    id: 'meme-3',
    title: 'Midnight Fridge Raid',
    caption: 'Cockroach caucus at 3 AM voting unanimously to approve leftover paneer distribution.',
    category: 'kitchen',
    upvotes: 5120,
    author: 'KitchenCommander',
    date: '2026-08-30',
    tag: 'SwarmLife'
  },
  {
    id: 'meme-4',
    title: 'VIP Convoy Traffic',
    caption: 'When 2,000 citizens wait 45 minutes so 3 empty luxury cars can pass: "Democracy in peak motion."',
    category: 'elections',
    upvotes: 6210,
    author: 'DelhiCommuter',
    date: '2026-08-22',
    tag: 'TrafficChronicles'
  },
  {
    id: 'meme-5',
    title: 'Dimagi Naxal Qualification',
    caption: 'Asking why the street light has been dead for 6 months automatically qualifies you as a Dimagi Naxal.',
    category: 'general',
    upvotes: 4780,
    author: 'CJP_Founder_Fan',
    date: '2026-08-19',
    tag: 'DimagiNaxal'
  },
  {
    id: 'meme-6',
    title: 'Government School Roof Leak',
    caption: 'Principal: "We don\'t need a swimming pool, rain God has granted us indoor rainwater harvesting."',
    category: 'education',
    upvotes: 3450,
    author: 'SchoolThikKaroArmy',
    date: '2026-08-15',
    tag: 'SchoolThikKaro'
  },
  {
    id: 'meme-7',
    title: 'Hit Spray Immunity',
    caption: 'Insecticide spray company: "Kills 99.9% bugs." Cockroach Janata Party member: "We are the 0.1% of truth."',
    category: 'kitchen',
    upvotes: 7890,
    author: 'UnstoppableRoach',
    date: '2026-08-10',
    tag: 'SurvivingBugs'
  },
  {
    id: 'meme-8',
    title: 'Election Promise Timeline',
    caption: 'Election year: "World-class Smart City." Post-election: "Please do not fall into the open drain."',
    category: 'elections',
    upvotes: 5670,
    author: 'VoterZero',
    date: '2026-08-05',
    tag: 'SmartCityParody'
  },
  {
    id: 'meme-9',
    title: 'Black Monday Dress Code',
    caption: 'Wearing all black to work on Monday to protest bad roads, boss thinks it\'s high fashion.',
    category: 'roads',
    upvotes: 2980,
    author: 'BlackMondayRebel',
    date: '2026-07-25',
    tag: 'BlackMonday'
  },
  {
    id: 'meme-10',
    title: 'Tap Water Tasting Notes',
    caption: 'Today\'s tap water has heavy earthy undertones with a subtle muddy finish. Vintage 2026 municipal blend.',
    category: 'general',
    upvotes: 4120,
    author: 'HydrationHero',
    date: '2026-08-29',
    tag: 'TapWater'
  },
  {
    id: 'meme-11',
    title: 'Open Sewer Diving',
    caption: 'Olympic diving committee evaluating civic open sewers for the next high-jump event.',
    category: 'roads',
    upvotes: 3810,
    author: 'CivicJumper',
    date: '2026-09-01',
    tag: 'CivicOlympics'
  },
  {
    id: 'meme-12',
    title: 'CJP Membership Card Flex',
    caption: 'Flashing my CJP Member ID card at the local municipality office to demand road repair updates.',
    category: 'general',
    upvotes: 6540,
    author: 'SwarmLeader_99',
    date: '2026-09-02',
    tag: 'CJPCard'
  },
  {
    id: 'meme-13',
    title: 'Subterranean Drain Desilting',
    caption: 'Municipal report: "Drain fully cleared." Actual drain: "Holds 3 generations of plastic bottles."',
    category: 'bureaucracy',
    upvotes: 4190,
    author: 'DrainInspector',
    date: '2026-09-02',
    tag: 'DesiltingAudit'
  },
  {
    id: 'meme-14',
    title: 'Public WiFi Gateway Page',
    caption: 'Connecting to free smart city WiFi: Enter OTP, blood group, grandmother\'s maiden name, and 3 security questions.',
    category: 'tech',
    upvotes: 3650,
    author: 'WiFiSeeker',
    date: '2026-09-01',
    tag: 'PublicWiFi'
  },
  {
    id: 'meme-15',
    title: 'Street Light Bulb Lifespan',
    caption: 'Municipal bulb after installation: Works 2 hours on inauguration night, burns out for the next 6 months.',
    category: 'bureaucracy',
    upvotes: 4890,
    author: 'DarkAlleyWarrior',
    date: '2026-08-31',
    tag: 'StreetLight'
  },
  {
    id: 'meme-16',
    title: 'OMR Sheet Exam Leaks',
    caption: 'Studying 14 hours a day vs the guy who bought the answer key for ₹5,000 behind the tea stall.',
    category: 'education',
    upvotes: 7210,
    author: 'NEETVictim',
    date: '2026-08-30',
    tag: 'ExamIntegrity'
  },
  {
    id: 'meme-17',
    title: 'Tender Cost Escalation',
    caption: 'Original tender estimate: ₹10 Lakhs. Completion cost 8 years later: ₹4.2 Crores. "Accounting logic."',
    category: 'bureaucracy',
    upvotes: 5430,
    author: 'BudgetWatcher',
    date: '2026-08-29',
    tag: 'TenderLogic'
  },
  {
    id: 'meme-18',
    title: 'Nocturnal Kitchen Caucus',
    caption: 'Cockroach representative presenting quarterly leftover cheese statistics to the kitchen floor.',
    category: 'kitchen',
    upvotes: 6890,
    author: 'CheeseLover',
    date: '2026-08-28',
    tag: 'KitchenSwarm'
  },
  {
    id: 'meme-19',
    title: 'Monsoon Pothole Swimming Pool',
    caption: 'Neighborhood kids inflating rubber tubes inside the new pothole on Main Street.',
    category: 'roads',
    upvotes: 5910,
    author: 'MonsoonKid',
    date: '2026-08-27',
    tag: 'PotholePool'
  },
  {
    id: 'meme-20',
    title: 'RTI Application Status',
    caption: 'Status after 90 days: "The concerned officer is currently attending a seminar on filing systems."',
    category: 'bureaucracy',
    upvotes: 4340,
    author: 'RTISeeker',
    date: '2026-08-26',
    tag: 'RTIStatus'
  },
  {
    id: 'meme-21',
    title: 'Public Bus vs VIP Siren',
    caption: '100 commuters in a overcrowded bus watching 1 VIP sedan with 4 police escorts cut the signal.',
    category: 'general',
    upvotes: 6120,
    author: 'BusCommuter',
    date: '2026-08-24',
    tag: 'VIPSiren'
  },
  {
    id: 'meme-22',
    title: 'Library Book Supply',
    caption: 'Public library inauguration photo: 50 brand new computers. Actual library: 1 broken fan and a 1994 encyclopedia.',
    category: 'education',
    upvotes: 3870,
    author: 'LibraryGoer',
    date: '2026-08-23',
    tag: 'PublicLibrary'
  },
  {
    id: 'meme-23',
    title: 'Dengue Mosquito vs Sewer Drain',
    caption: 'Mosquito thanking municipal corporation for keeping open sewers untouched for 3 consecutive summers.',
    category: 'general',
    upvotes: 5230,
    author: 'MosquitoWatcher',
    date: '2026-08-21',
    tag: 'DengueAwareness'
  },
  {
    id: 'meme-24',
    title: 'BitChat Bluetooth Mesh',
    caption: 'Sending RTI pothole coordinates via Bluetooth mesh because mobile data died in the subway.',
    category: 'tech',
    upvotes: 4980,
    author: 'BitChatUser',
    date: '2026-08-20',
    tag: 'BitChatMesh'
  },
  {
    id: 'meme-25',
    title: 'Contractor Warranty Board',
    caption: 'Contractor painting his contact phone number on the warranty board in size 4 font behind a tree.',
    category: 'roads',
    upvotes: 6410,
    author: 'WarrantyInspector',
    date: '2026-08-18',
    tag: 'ContractorBoard'
  },
  {
    id: 'meme-26',
    title: 'Switching On Kitchen Light',
    caption: 'Cockroaches when the light turns on at 2 AM: "Scatter, but remember the paneer location!"',
    category: 'kitchen',
    upvotes: 8120,
    author: 'RoachMaster',
    date: '2026-08-16',
    tag: 'KitchenRaid'
  },
  {
    id: 'meme-27',
    title: 'Municipal Water Pump Schedule',
    caption: 'Water arrives at 4:15 AM for 12 minutes. "Set your alarm clock or stay thirsty till Thursday."',
    category: 'general',
    upvotes: 5640,
    author: 'EarlyRiser',
    date: '2026-08-14',
    tag: 'WaterSchedule'
  },
  {
    id: 'meme-28',
    title: 'Printable Membership Card Printout',
    caption: 'Printing my CJP ID card on glossy photo paper and framing it next to my graduation degree.',
    category: 'general',
    upvotes: 7450,
    author: 'CardCollector',
    date: '2026-08-12',
    tag: 'PrintCard'
  },
  {
    id: 'meme-29',
    title: 'School Thik Karo Scorecard',
    caption: 'Government school desk audit team discovering benches held together with packaging tape.',
    category: 'education',
    upvotes: 4910,
    author: 'BenchAuditor',
    date: '2026-08-10',
    tag: 'DeskAudit'
  },
  {
    id: 'meme-30',
    title: 'Swarm Anthem Listening Party',
    caption: 'Playing Cockroach Janata Party anthem on full speaker during Monday morning traffic jam.',
    category: 'general',
    upvotes: 9120,
    author: 'AnthemFanatic',
    date: '2026-09-03',
    tag: 'CJPAnthem'
  }
];
