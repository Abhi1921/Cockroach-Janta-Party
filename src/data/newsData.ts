export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
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
  sources: { title: string; url?: string; publisher: string; date: string }[];
  tags: string[];
  featured?: boolean;
}

export const newsData: NewsArticle[] = [
  {
    slug: "public-audit-urban-drainage-sanitation-2026",
    title: "Public Audit Demands Standardized Inspection of Urban Sanitation Systems",
    summary: "An independent analysis of municipal sanitation budgets highlights key areas where open data and quarterly public reporting can improve drainage maintenance across urban zones.",
    category: "Civic Sanitation",
    publishDate: "2026-08-15",
    updatedDate: "2026-08-20",
    author: {
      name: "CJP Editorial Research Wing",
      role: "Civic Policy Analysts"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Urban drainage inspection site with engineers reviewing municipal blueprints",
    featured: true,
    tags: ["Sanitation", "Urban Audit", "Public Health", "Governance"],
    content: [
      {
        heading: "Overview of Municipal Sanitation Auditing",
        text: "The Cockroach Janta Party Wale research team published its quarterly recommendations on urban civic hygiene. The report advocates for mandatory public disclosure of drain cleaning schedules, pest management protocols, and contractor service level agreements (SLAs)."
      },
      {
        heading: "Key Recommendations",
        text: "Municipal authorities must establish transparent digital dashboards tracking daily maintenance operations to ensure public money directly yields cleaner neighborhoods.",
        list: [
          "Mandatory publication of zone-wise sanitation schedules 48 hours prior to execution.",
          "Installation of verified water sample testing points in high-density residential sectors.",
          "Establishment of non-punitive grievance reporting tools for local resident welfare associations (RWAs)."
        ]
      },
      {
        heading: "Policy Impact & Next Steps",
        text: "Civic stakeholders and local RWA representatives have called for a public forum next month to discuss standardizing these metrics across municipal wards."
      }
    ],
    sources: [
      {
        title: "Urban Civic Infrastructure Standard Guidelines 2025",
        publisher: "Ministry of Housing & Urban Affairs Reference Archive",
        date: "2025-11-10"
      },
      {
        title: "CJP Civic Hygiene Monitoring Charter",
        publisher: "Cockroach Janta Party Policy Repository",
        date: "2026-01-15"
      }
    ]
  },
  {
    slug: "transparency-in-local-ward-budget-allocations",
    title: "Understanding Ward Level Discretionary Funds: A Citizen Explainer",
    summary: "Breakdown of how municipal ward funds are allocated annually, and how local resident involvement improves fiscal accountability.",
    category: "Governance Transparency",
    publishDate: "2026-07-28",
    author: {
      name: "Arun Kumar Sharma",
      role: "Senior Civic Governance Researcher"
    },
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Public budget documents and analytical charts on civic expenditure",
    featured: false,
    tags: ["Ward Funds", "Budgeting", "Transparency", "RTI"],
    content: [
      {
        heading: "How Municipal Ward Budgets Function",
        text: "Every year, civic corporations allocate discretionary capital for local repairs, road patching, street lighting, and sanitation. Without citizen tracking, these funds frequently suffer from underutilization or delays."
      },
      {
        heading: "Citizen Rights & Inspection",
        text: "Under Right to Information (RTI) provisions, citizens have full legal entitlement to review municipal work orders, material specifications, and project completion certificates."
      }
    ],
    sources: [
      {
        title: "State Municipal Corporation Act Handbook",
        publisher: "State Legal Information Portal",
        date: "2024-04-12"
      }
    ]
  },
  {
    slug: "vector-borne-disease-prevention-charter",
    title: "Monsoon Preparedness: Scientific Vector Control Strategies for Dense Hubs",
    summary: "Policy paper outlining effective, environmentally safe pest and vector management methodologies for seasonal flood-prone sectors.",
    category: "Public Health",
    publishDate: "2026-06-12",
    author: {
      name: "Dr. Sunita Deshmukh",
      role: "Public Health Consultant"
    },
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Municipal public health worker inspecting vector prevention equipment",
    featured: false,
    tags: ["Pest Control", "Monsoon", "Public Health", "Vector Control"],
    content: [
      {
        heading: "Scientific Vector Management",
        text: "Unchecked stagnant water bodies create systemic public health hazards during monsoon months. Systematic chemical larviciding combined with biological controls guarantees sustainable vector suppression."
      },
      {
        heading: "Action Plan for Local Councils",
        text: "Routine anti-larval fogging must be coupled with structural repairs of subterranean sewer lines to eliminate breeding reservoirs at the source."
      }
    ],
    sources: [
      {
        title: "National Vector Borne Disease Control Programme Guidelines",
        publisher: "Public Health Document Portal",
        date: "2025-05-01"
      }
    ]
  },
  {
    slug: "civic-amenities-and-public-space-upgrades",
    title: "Upgrading Public Amenities: Community Restrooms & Waste Segregation Units",
    summary: "Evaluating model public convenience hubs designed for high footfall urban markets with dedicated maintenance staffing.",
    category: "Infrastructure",
    publishDate: "2026-05-04",
    author: {
      name: "CJP Infrastructure Working Group",
      role: "Urban Planning Division"
    },
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern clean public facility design mockup with greenery and accessibility ramps",
    featured: false,
    tags: ["Public Amenities", "Waste Management", "Urban Planning"],
    content: [
      {
        heading: "Modernizing Public Conveniences",
        text: "Clean, accessible, solar-powered public facilities are foundational to urban dignity. Public-private accountability contracts must replace legacy automated coin toilets that suffer frequent technical breakdowns."
      }
    ],
    sources: [
      {
        title: "Model Urban Sanitation Bye-Laws 2024",
        publisher: "Urban Research Association",
        date: "2024-09-18"
      }
    ]
  }
];
