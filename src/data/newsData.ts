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
  }
];
