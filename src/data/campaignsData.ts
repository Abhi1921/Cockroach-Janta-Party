export interface CampaignItem {
  slug: string;
  title: string;
  status: "Ongoing" | "Upcoming" | "Completed" | "Archived";
  startDate: string;
  endDate?: string;
  location: string;
  summary: string;
  description: string[];
  goals: string[];
  timeline: { date: string; event: string }[];
  featuredImage: string;
  imageAlt: string;
  documentation: { title: string; type: string }[];
  relatedNewsSlug?: string;
}

export const campaignsData: CampaignItem[] = [
  {
    slug: "clean-drains-clean-wards-initiative",
    title: "Clean Drains, Clean Wards: Pre-Monsoon Sanitation Campaign",
    status: "Ongoing",
    startDate: "2026-05-01",
    endDate: "2026-09-30",
    location: "Metro Urban Wards & Residential Sectors",
    summary: "A citizen-assisted monitoring campaign tracking drain desilting progress across 40 urban sectors ahead of monsoon season.",
    description: [
      "The 'Clean Drains, Clean Wards' initiative mobilizes resident welfare associations (RWAs) and volunteer civic observers to verify whether municipal contractors are actively clearing subterranean drainage channels.",
      "Observers log daily photos, geo-tagged locations, and desilting depth measurements to ensure contractor compliance with civic service standards.",
      "All findings are published weekly on the public CJP updates portal for civic media and municipal review."
    ],
    goals: [
      "Map 100% of major stormwater drains in participating wards.",
      "Verify complete desilting prior to heavy monsoon rainfall.",
      "Ensure zero waterlogging near public schools and hospital zones."
    ],
    timeline: [
      { date: "2026-05-01", event: "Campaign launch & volunteer registration." },
      { date: "2026-06-15", event: "Phase 1 audit published covering 20 municipal wards." },
      { date: "2026-08-01", event: "Mid-monsoon verification and spot audit of drainage flow." }
    ],
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Civic volunteers observing drainage desilting operation in urban ward",
    documentation: [
      { title: "Pre-Monsoon Drainage Inspection Protocol PDF", type: "PDF Brief" },
      { title: "Civic Audit Checklist for RWAs", type: "Guide" }
    ],
    relatedNewsSlug: "public-audit-urban-drainage-sanitation-2026"
  },
  {
    slug: "open-tender-transparency-drive",
    title: "Open Tender Transparency Drive: Citizen RTI Campaign",
    status: "Ongoing",
    startDate: "2026-02-10",
    location: "Municipal Headquarters & District Offices",
    summary: "Filing systematic Right to Information (RTI) applications to publish detailed bill-of-quantities for local public works.",
    description: [
      "Public infrastructure projects frequently lack visible specification boards detailing road materials, depth, and warranty details.",
      "Through this campaign, civic volunteers submit RTI queries requesting original tender documents, paving material test certificates, and contractor payment vouchers.",
      "The objective is to establish mandatory public signage at every construction site listing contractor warranty terms and contact details."
    ],
    goals: [
      "Promote proactive Section 4 RTI compliance by local civic bodies.",
      "Encourage contractor accountability through visible project signage.",
      "Establish public verification of municipal road paving quality."
    ],
    timeline: [
      { date: "2026-02-10", event: "Submission of initial batch of 50 RTI civic queries." },
      { date: "2026-04-20", event: "Publication of tender disclosure analysis report." }
    ],
    featuredImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Legal research documents and public tender review papers",
    documentation: [
      { title: "Standard Civic RTI Template", type: "Document" },
      { title: "Public Works Verification Handbook", type: "Manual" }
    ],
    relatedNewsSlug: "transparency-in-local-ward-budget-allocations"
  },
  {
    slug: "safe-drinking-water-booths",
    title: "Clean Water Verification & Community Testing Drive",
    status: "Upcoming",
    startDate: "2026-10-01",
    endDate: "2026-12-15",
    location: "High Footfall Commercial & Residential Hubs",
    summary: "Deploying volunteer mobile testing kits to provide residents free water sample testing for chlorine levels and TDS.",
    description: [
      "Contaminated drinking water supply leads to widespread waterborne illnesses during autumn months.",
      "This upcoming campaign will set up 15 community testing kiosks where citizens can bring samples of municipal piped water for rapid quality testing."
    ],
    goals: [
      "Test over 1,000 household water supply connections across 15 wards.",
      "Identify sectors requiring urgent pipe maintenance or filtration upgrades.",
      "Submit consolidated water quality reports to the local water supply board."
    ],
    timeline: [
      { date: "2026-10-01", event: "Inauguration of community testing kiosks." },
      { date: "2026-11-15", event: "Mid-term water quality analysis release." }
    ],
    featuredImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean water sample flask in laboratory testing environment",
    documentation: [
      { title: "Water Quality Parameters Explanation Sheet", type: "PDF" }
    ]
  },
  {
    slug: "safe-neighborhood-streetlights-2025",
    title: "Zero Dark Spots: Ward Streetlight Audit Campaign",
    status: "Completed",
    startDate: "2025-09-01",
    endDate: "2025-12-20",
    location: "Suburban Neighborhoods & Public Transit Pathways",
    summary: "Audit campaign mapping non-functional public streetlights to enhance pedestrian safety and night navigation.",
    description: [
      "Between September and December 2025, volunteers surveyed 120 km of municipal road pathways, mapping non-operational streetlights.",
      "A consolidated GIS map was submitted to municipal electrical divisions, resulting in the restoration of 340 public light fixtures."
    ],
    goals: [
      "Identify non-functional streetlights on pedestrian pathways.",
      "Submit location coordinates to municipal maintenance divisions.",
      "Achieve 90%+ restoration rate across surveyed sectors."
    ],
    timeline: [
      { date: "2025-09-01", event: "Survey launch with night mobile mapping teams." },
      { date: "2025-11-10", event: "Submission of audit report to Municipal Electrical Department." },
      { date: "2025-12-20", event: "Final audit confirming restoration of 340 lighting points." }
    ],
    featuredImage: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Illuminated urban street at night with functional public lighting",
    documentation: [
      { title: "Streetlight Audit Summary Report 2025", type: "PDF Report" }
    ]
  }
];
