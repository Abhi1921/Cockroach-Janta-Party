export interface LeaderProfile {
  name: string;
  role: string;
  organization: string;
  biography: string[];
  publicCommitments: string[];
  timeline: { year: string; event: string }[];
  sources: { title: string; publisher: string; year: string }[];
}

export const founderData: LeaderProfile = {
  name: "Civic Collective Leadership & Founding Secretariat",
  role: "Founding Convener Council",
  organization: "Cockroach Janta Party Wale",
  biography: [
    "Cockroach Janta Party Wale was established in 2024 as a non-partisan civic movement dedicated to uncompromising urban hygiene, open public auditing, and vector control accountability.",
    "The initiative emerged from a grassroots coalition of municipal researchers, resident welfare representatives, and public health advocates seeking transparent governance in local ward spending.",
    "The organization operates through decentralized ward committees, ensuring every civic demand is rooted in empirical field audits, public data, and statutory citizen rights under RTI frameworks."
  ],
  publicCommitments: [
    "Strict adherence to zero financial opacity in all public advocacy campaigns.",
    "Publishing bi-annual independent audit reports on municipal sanitation performance.",
    "Refusing commercial corporate sponsorships that conflict with citizen environmental health.",
    "Providing free legal and RTI support to local resident groups fighting civic neglect."
  ],
  timeline: [
    { year: "2024", event: "Formation of the CJP Civic Research Wing and publication of the Initial Urban Hygiene Charter." },
    { year: "2025", event: "Execution of the 'Zero Dark Spots' Streetlight Audit across 120 km of suburban roadways." },
    { year: "2026", event: "Launch of the 'Clean Drains, Clean Wards' pre-monsoon monitoring initiative and public digital transparency portal." }
  ],
  sources: [
    {
      title: "Cockroach Janta Party Founding Declaration & Bylaws",
      publisher: "CJP Official Archive",
      year: "2024"
    },
    {
      title: "Public Governance & Civic Audit Annual Summary",
      publisher: "CJP Research Wing",
      year: "2025"
    }
  ]
};
