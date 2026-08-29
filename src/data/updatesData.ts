export interface UpdateItem {
  id: string;
  date: string;
  title: string;
  category: "Announcement" | "Audit Release" | "Event Notice" | "Policy Update";
  summary: string;
  details?: string;
  link?: { text: string; href: string };
  verifiedSource: string;
}

export const updatesData: UpdateItem[] = [
  {
    id: "upd-1",
    date: "2026-08-25",
    title: "Monsoon Mid-Term Sanitation Audit Report Released",
    category: "Audit Release",
    summary: "Published findings of the mid-monsoon drainage flow audit covering 25 urban wards.",
    details: "The report confirms successful desilting along 18 major arterial channels, while highlighting 7 bottleneck locations requiring immediate municipal clearance.",
    link: { text: "Read full news article", href: "/news/public-audit-urban-drainage-sanitation-2026" },
    verifiedSource: "CJP Civic Audit Wing Log #2026-08-A"
  },
  {
    id: "upd-2",
    date: "2026-07-30",
    title: "Public Workshop on Ward Budgeting & Citizen RTI Rights",
    category: "Event Notice",
    summary: "Successfully concluded a 2-day civic transparency workshop for RWA representatives.",
    details: "Over 45 local community leads participated in training sessions covering tender inspection, bill-of-quantities verification, and proactive RTI filing.",
    link: { text: "View Event Photos", href: "/gallery" },
    verifiedSource: "CJP Event Registry Entry #2026-07-W"
  },
  {
    id: "upd-3",
    date: "2026-06-05",
    title: "Submission of Pre-Monsoon Vector Prevention Recommendations",
    category: "Policy Update",
    summary: "Formally submitted vector management guidelines to municipal public health officers.",
    details: "The 12-page recommendation brief advocates for eco-friendly biological anti-larval treatment in stagnant water bodies across residential zones.",
    link: { text: "Download Policy Brief", href: "/resources" },
    verifiedSource: "Municipal Desk Submission Filing #HEALTH-2026-06"
  }
];
