export interface ManifestoPoint {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  details: string[];
}

export const manifestoData: ManifestoPoint[] = [
  {
    id: "subterranean-hygiene",
    number: "01",
    title: "SUBTERRANEAN HYGIENE RIGHTS",
    subtitle: "MECHANIZED DRAIN & SEWER AUDIT GUARANTEE",
    summary: "Guaranteed bi-weekly mechanized desilting of subterranean drainage networks to eliminate pre-monsoon waterlogging.",
    category: "Sanitation",
    details: [
      "GIS geotagged desilting depth verification across all municipal wards.",
      "Emergency 24-hour response hotline for subterranean drain blockages.",
      "Biological non-toxic vector control in standing water reservoirs."
    ]
  },
  {
    id: "contractor-accountability",
    number: "02",
    title: "CONTRACTOR WARRANTY DISCLOSURE",
    subtitle: "MANDATORY ON-SITE WARRANTY BOARDS & RTI BILL-OF-QUANTITIES",
    summary: "Public site notice boards listing 3-year repair warranties for all paved public roads and infrastructure tenders.",
    category: "Accountability",
    details: [
      "Section 4 RTI compliance for all municipal contracts exceeding ₹5 Lakhs.",
      "Proactive publishing of itemized contractor bill-of-quantities online.",
      "Public audit hearings before final contractor invoice disbursements."
    ]
  },
  {
    id: "piped-water-safety",
    number: "03",
    title: "SAFE DRINKING WATER GUARANTEE",
    subtitle: "FREE HOUSEHOLD WATER TDS & CHLORINE TESTING KIOSKS",
    summary: "Free rapid drinking water testing for piped municipal household connections across high-footfall transit zones.",
    category: "Public Health",
    details: [
      "Mobile volunteer water testing units deployed to Resident Welfare Associations.",
      "Instant public warnings when contamination levels exceed WHO safety limits.",
      "Free filtration system subsidies for low-income residential sectors."
    ]
  },
  {
    id: "labor-dignity",
    number: "04",
    title: "LABOR DIGNITY & YOUTH APPRENTICESHIPS",
    subtitle: "PROTECTIVE GEAR & TRANSPARENT MUNICIPAL RECRUITMENT",
    summary: "Dignified working conditions for municipal sanitation workers and ward apprentice programs for local youth.",
    category: "Employment",
    details: [
      "Mandatory ergonomic safety gear and mechanized cleaning tools.",
      "Direct municipal wage disbursement without contractor middleman deductions.",
      "Local ward youth quotas in municipal maintenance projects."
    ]
  },
  {
    id: "digital-freedom",
    number: "05",
    title: "OPEN DATA & DIGITAL FREEDOM",
    subtitle: "ZERO PAYWALL PUBLIC DOMAIN CIVIC AUDIT DATABASE",
    summary: "Ensuring all civic documents, ward spending ledgers, and RTI queries are accessible online under open public domain.",
    category: "Digital Rights",
    details: [
      "Free online RTI request generator for ward residents.",
      "Open API access to municipal expenditure ledgers.",
      "Zero paywall or registration fee for downloading civic audit reports."
    ]
  }
];
