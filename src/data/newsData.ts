export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: string;
  featuredImage: string;
  imageAlt: string;
  content: {
    heading?: string;
    text: string;
    list?: string[];
  }[];
  tags: string[];
}

export const newsData: NewsArticle[] = [
  {
    slug: "sc-quashes-firs-against-cjp-protesters-2026",
    title: "Supreme Court Cancels All FIRs Against CJP Protesters Under Article 142",
    summary: "In a landmark order, the Supreme Court of India invoked Article 142 to quash all police cases registered against student protesters across Delhi and other states.",
    category: "LEGAL & COURT",
    publishDate: "SEP 01, 2026",
    author: {
      name: "Saurav Das",
      role: "Policy & Media Spokesperson"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_sc_fir_quash_poster.png",
    imageAlt: "Supreme Court quashes FIRs against student protesters poster graphic",
    tags: ["Supreme Court", "Article 142", "CJP Protests", "Student Immunity"],
    content: [
      {
        heading: "Landmark Verdict Protects Student Protesters",
        text: "The Supreme Court invoked its extraordinary powers under Article 142 of the Constitution to cancel all FIRs registered against NEET and youth protesters in New Delhi, Rajasthan, and UP."
      },
      {
        heading: "Withdrawal of September 5 Protest March",
        text: "Following government assurances and the apex court order, Cockroach Janta Party (CJP) formally called off its planned September 5 march to Delhi Police HQ."
      }
    ]
  },
  {
    slug: "public-audit-subterranean-drainage-2026",
    title: "Public Audit Demands Standardized Inspection of Urban Subterranean Sewer Systems",
    summary: "Independent audit of municipal sanitation budgets highlights key areas where open data and quarterly public reporting can improve drainage maintenance across urban zones.",
    category: "CIVIC SANITATION",
    publishDate: "AUG 25, 2026",
    author: {
      name: "Abhijeet Dipke",
      role: "Chief Secretariat Observer"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Urban drainage inspection site with engineers reviewing municipal blueprints",
    tags: ["Sanitation", "Urban Audit", "Public Health", "Governance"],
    content: [
      {
        heading: "Overview of Municipal Sanitation Auditing",
        text: "Cockroach Janta Party research wing published its quarterly recommendations on urban civic hygiene. The report advocates for mandatory public disclosure of drain cleaning schedules, subterranean sewer desilting depth measurements, and contractor service level agreements (SLAs)."
      },
      {
        heading: "Key Recommendations for Wards",
        text: "Municipal authorities must establish transparent digital dashboards tracking daily maintenance operations to ensure public funds directly yield cleaner neighborhoods.",
        list: [
          "Mandatory publication of zone-wise sanitation schedules 48 hours prior to execution.",
          "Installation of verified water sample testing points in high-density residential sectors.",
          "Establishment of non-punitive grievance reporting tools for local resident welfare associations."
        ]
      }
    ]
  },
  {
    slug: "contractor-warranty-notice-board-compliance",
    title: "On-Site Notice Board Audit: Verifying 3-Year Contractor Road Repair Warranties",
    summary: "CJP field observers inspected 45 public road paving sites in Commercial Sector 18, requesting mandatory notice boards listing contractor warranty liability periods.",
    category: "PUBLIC ACCOUNTABILITY",
    publishDate: "AUG 18, 2026",
    author: {
      name: "Ananya Sen",
      role: "Head of RTI Legal Advocacy"
    },
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Public tender documents and analytical charts on civic expenditure",
    tags: ["Contractor Warranty", "RTI", "Tenders", "Road Paving"],
    content: [
      {
        heading: "Audit Findings",
        text: "Under municipal guidelines, all public works over ₹5 Lakhs must display transparent warranty boards. Our physical field audit discovered only 12 out of 45 sites had legible contractor details."
      }
    ]
  },
  {
    slug: "community-water-quality-testing-charter",
    title: "Safe Piped Household Water: Deploying Rapid TDS and Chlorine Testing Kiosks",
    summary: "Evaluating mobile volunteer kiosks providing residents free water quality testing across high-footfall metro transit hubs.",
    category: "PUBLIC HEALTH",
    publishDate: "AUG 10, 2026",
    author: {
      name: "Priya Nambiar",
      role: "Water Quality Lead"
    },
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Public health worker testing household water sample",
    tags: ["Water Safety", "Public Health", "Community Testing"],
    content: [
      {
        heading: "Piped Water Safety Guarantee",
        text: "Access to uncontaminated piped drinking water is a non-negotiable fundamental civic right. CJP volunteer kiosks empower households with immediate water quality diagnostics."
      }
    ]
  },
  {
    slug: "school-thik-karo-pan-india-launch",
    title: "School Thik Karo Campaign Launches Across 12 States to Audit Classroom Infrastructure",
    summary: "CJP launches nation-wide citizen audit of government school desks, roofs, and sanitation blocks using standardized RTI scorecards.",
    category: "SOCIETY",
    publishDate: "AUG 05, 2026",
    author: {
      name: "Meera Iyer",
      role: "Education Reform Observer"
    },
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students sitting in a classroom during an educational audit",
    tags: ["Education", "School Thik Karo", "RTI", "Public Schools"],
    content: [
      {
        heading: "Audit Charter Launched",
        text: "The School Thik Karo initiative urges citizens to report leaking classroom roofs, missing desks, and broken water filters. Initial RTI findings indicate over 30% of audited schools operate with overdue maintenance tenders."
      }
    ]
  },
  {
    slug: "dimagi-naxal-satire-manifesto-release",
    title: "Why Asking Questions About Road Tenders Does Not Make You a 'Dimagi Naxal'",
    summary: "A satirical essay breaking down the political rhetoric surrounding civic activism, RTI inquiries, and urban citizen rights.",
    category: "POLITICS SATIRE",
    publishDate: "JUL 28, 2026",
    author: {
      name: "Abhijeet Dipke",
      role: "Chief Secretariat Observer"
    },
    readingTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Editorial writing setup with fountain pen and newsprint notebook",
    tags: ["Dimagi Naxal", "Satire", "RTI", "Civil Liberties"],
    content: [
      {
        heading: "The Satire Behind the Label",
        text: "When asking why a road melted in three days gets labeled as 'subversive thinking', humor becomes the sharpest tool for democracy. CJP breaks down why civic curiosity is the ultimate form of nation-building."
      }
    ]
  },
  {
    slug: "bitchat-decentralized-mesh-for-civic-alerts",
    title: "BitChat Mesh: Testing Offline Peer-to-Peer Civic Ticker Technology",
    summary: "Exploring CJP's experimental lightweight BitChat protocol designed for neighborhood civic updates and offline rally safety coordination.",
    category: "TECHNOLOGY",
    publishDate: "JUL 20, 2026",
    author: {
      name: "Tech Swarm Guild",
      role: "Open Source Tech Collective"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cyberpunk digital matrix code stream representing mesh technology",
    tags: ["BitChat", "Technology", "Mesh Network", "Privacy"],
    content: [
      {
        heading: "Decentralized Civic Communication",
        text: "BitChat allows citizens to relay emergency traffic blockages, pothole warnings, and RTI meeting locations over Bluetooth mesh without relying on centralized servers."
      }
    ]
  },
  {
    slug: "black-monday-20-july-recap-report",
    title: "Black Monday Recap: 45,000 Citizens Wear Black Attire Demanding 3-Year Asphalt Guarantees",
    summary: "Field report from Black Monday demonstrations across New Delhi, Bengaluru, and Pune documenting pothole maps and contractor liability petitions.",
    category: "CJP COMMENTARY",
    publishDate: "JUL 21, 2026",
    author: {
      name: "Rohan Verma",
      role: "Road Safety Inspector"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Citizens meeting in dark attire discussing civic priorities",
    tags: ["Black Monday", "Roads", "Protests", "Contractor Warranty"],
    content: [
      {
        heading: "Nationwide Civic Action",
        text: "Thousands of residents wore black clothing to work and posted photos cataloging pothole coordinates to demonstrate solidarity for durable public road standards."
      }
    ]
  }
];
