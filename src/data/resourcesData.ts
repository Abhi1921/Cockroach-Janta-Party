export interface ResourceItem {
  id: string;
  title: string;
  category: "Policy Brief" | "Civic Guide" | "RTI Template" | "Audit Report";
  description: string;
  fileSize: string;
  format: "PDF" | "DOCX" | "ZIP";
  date: string;
  downloadUrl: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "res-1",
    title: "Urban Drainage & Sanitation Audit Handbook 2026",
    category: "Audit Report",
    description: "Comprehensive step-by-step guide for RWAs and citizen groups to conduct structured desilting and sewer maintenance audits.",
    fileSize: "2.4 MB",
    format: "PDF",
    date: "2026-06-01",
    downloadUrl: "#"
  },
  {
    id: "res-2",
    title: "Standard Municipal Works RTI Draft Template",
    category: "RTI Template",
    description: "Ready-to-use legal application template for requesting tender work orders, asphalt thickness specs, and payment vouchers under RTI laws.",
    fileSize: "450 KB",
    format: "DOCX",
    date: "2026-04-15",
    downloadUrl: "#"
  },
  {
    id: "res-3",
    title: "Scientific Vector Management & Anti-Larval Policy Brief",
    category: "Policy Brief",
    description: "Detailed policy analysis on eco-friendly larviciding methods for municipal vector control units.",
    fileSize: "1.8 MB",
    format: "PDF",
    date: "2026-03-10",
    downloadUrl: "#"
  },
  {
    id: "res-4",
    title: "Citizen Guide to Drinking Water Quality Testing",
    category: "Civic Guide",
    description: "Explainer document detailing permissible drinking water parameters (TDS, pH, residual chlorine) and testing procedures.",
    fileSize: "1.2 MB",
    format: "PDF",
    date: "2026-01-20",
    downloadUrl: "#"
  }
];
