export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  caption: string;
  category: "Sanitation" | "Public Audits" | "Community Forum" | "Policy Poster" | "Field Inspection";
  date: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  photographer: string;
  resolution: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    slug: "urban-drainage-inspection-delhi-sector-14",
    title: "Pre-Monsoon Subterranean Drain Inspection",
    caption: "Civic research team inspecting municipal desilting work along major urban drainage channels in Sector 14.",
    category: "Field Inspection",
    date: "2026-06-14",
    location: "New Delhi Urban Sector 14",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Cockroach Janta Party public event in New Delhi inspecting municipal drainage desilting",
    photographer: "CJP Media Desk",
    resolution: "3840 x 2160 WebP",
    tags: ["Drainage", "Sanitation", "Inspection"]
  },
  {
    id: "gal-2",
    slug: "public-forum-civic-transparency-meeting",
    title: "Public Forum on Ward Budget Transparency",
    caption: "Local residents, RWA delegates, and civic policy analysts discussing open data tender disclosures.",
    category: "Community Forum",
    date: "2026-05-22",
    location: "Civic Community Center, Ward 28",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Civic transparency public assembly with citizens seated in seminar hall",
    photographer: "Rajesh V. Verma",
    resolution: "3000 x 2000 WebP",
    tags: ["Budget", "RTI", "Public Forum"]
  },
  {
    id: "gal-3",
    slug: "civic-hygiene-charter-infographic-poster",
    title: "Official 2026 Civic Hygiene Policy Poster",
    caption: "Educational graphic outlining citizen rights to clean public spaces, vector control timelines, and RTI grievance procedures.",
    category: "Policy Poster",
    date: "2026-04-10",
    location: "CJP Policy Repository Archive",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Clean graphic poster design displaying civic sanitation principles",
    photographer: "CJP Design Unit",
    resolution: "2400 x 3600 WebP",
    tags: ["Poster", "Policy", "Infographic"]
  },
  {
    id: "gal-4",
    slug: "clean-water-testing-booth-demonstration",
    title: "Community Water Sample Verification Demonstration",
    caption: "Volunteer testing chemist demonstrating TDS and pH measurement techniques for piped residential water samples.",
    category: "Public Audits",
    date: "2026-03-18",
    location: "Model Sector Market Square",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Chemist inspecting water purity samples in outdoor community booth",
    photographer: "Anita Sharma",
    resolution: "3200 x 2133 WebP",
    tags: ["Water Quality", "Testing", "Public Health"]
  },
  {
    id: "gal-5",
    slug: "waste-segregation-hub-field-visit",
    title: "Model Solid Waste Transfer Station Inspection",
    caption: "Field audit team verifying dry and wet municipal waste segregation protocols at ward transfer facilities.",
    category: "Sanitation",
    date: "2026-02-05",
    location: "Ward 12 Solid Waste Transfer Station",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Municipal solid waste recycling and segregation site review",
    photographer: "CJP Media Desk",
    resolution: "3600 x 2400 WebP",
    tags: ["Waste Management", "Recycling", "Environment"]
  },
  {
    id: "gal-6",
    slug: "street-paving-quality-check-audit",
    title: "Paving Bitumen Thickness Measurement Audit",
    caption: "Engineering committee taking core samples to measure newly laid municipal road asphalt thickness.",
    category: "Public Audits",
    date: "2025-11-12",
    location: "Ring Road Sector 4",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Civic auditor verifying road asphalt construction quality",
    photographer: "K. S. Sundaram",
    resolution: "3000 x 2000 WebP",
    tags: ["Infrastructure", "Audit", "Roads"]
  }
];
