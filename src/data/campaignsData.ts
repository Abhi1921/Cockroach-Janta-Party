export interface Campaign {
  slug: string;
  title: string;
  summary: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  location: string;
  startDate: string;
  featuredImage: string;
  imageAlt: string;
  impactMetrics: { label: string; value: string }[];
  description: string;
}

export const campaignsData: Campaign[] = [
  {
    slug: "pre-monsoon-drain-desilting-audit-2026",
    title: "Pre-Monsoon Subterranean Drain Desilting Field Operation",
    summary: "Verifying 340+ subterranean sewer lines and logging contractor desilting depth measurements ahead of heavy monsoon rainfall.",
    status: "Ongoing",
    location: "Delhi Metro Wards 1 to 45",
    startDate: "JUN 2026",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Volunteers inspecting subterranean drainage desilting operations",
    impactMetrics: [
      { label: "Wards Monitored", value: "45" },
      { label: "Drains Audited", value: "340+" },
      { label: "RTI Filings", value: "112" }
    ],
    description: "CJP field audit captains conducted physical depth checks across subterranean storm drains to ensure contractors fulfilled mandatory desilting quotas prior to monsoon onset."
  },
  {
    slug: "contractor-warranty-notice-board-drive",
    title: "Contractor 3-Year Repair Warranty Notice Board Drive",
    summary: "Ensuring public road paving work orders carry visible 3-year warranty notice boards detailing contractor contact information and liability terms.",
    status: "Ongoing",
    location: "Commercial Sectors 14, 18, & 22",
    startDate: "JUL 2026",
    featuredImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Public tender warranty audit team reviewing site notice board",
    impactMetrics: [
      { label: "Sites Inspected", value: "68" },
      { label: "Notice Boards Fixed", value: "34" },
      { label: "Auditors Joined", value: "120+" }
    ],
    description: "A targeted campaign to enforce on-site transparency in municipal road paving contracts."
  }
];
