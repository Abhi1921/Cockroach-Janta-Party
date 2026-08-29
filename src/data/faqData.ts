export interface FAQItem {
  id: string;
  category: "General" | "Manifesto" | "Verification & Audits" | "Media & Press" | "Get Involved";
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Cockroach Janta Party Wale?",
    answer: "Cockroach Janta Party Wale (CJP Wale) is an official civic movement and public information organization focused on urban sanitation rights, vector control, open municipal data, and public governance transparency."
  },
  {
    id: "faq-2",
    category: "General",
    question: "What is the primary objective of this website?",
    answer: "This website serves as a transparent digital repository for verified civic news, manifesto policy positions, campaign progress, municipal audit reports, downloadable resources, and public contact channels."
  },
  {
    id: "faq-3",
    category: "Manifesto",
    question: "Where can the complete CJP Civic Manifesto be read?",
    answer: "The full manifesto is published on the /manifesto page. It outlines five core pillars: subterranean drainage rights, open data tender transparency, scientific vector control, food/water adulteration testing, and green space protection."
  },
  {
    id: "faq-4",
    category: "Verification & Audits",
    question: "How is civic information verified before publication on this site?",
    answer: "All articles, audit statistics, and campaign updates are verified through official municipal filings, Right to Information (RTI) responses, physical field audits, and documented public records. We do not publish unverified claims or fake counter metrics."
  },
  {
    id: "faq-5",
    category: "Get Involved",
    question: "How can citizens participate or report local sanitation issues?",
    answer: "Citizens can join local ward monitoring teams via our /join page, or contact our research desk directly through our /contact form to submit verified photos and details of civic drainage hazards."
  },
  {
    id: "faq-6",
    category: "Media & Press",
    question: "Where can journalists and media outlets find press releases and official brand assets?",
    answer: "Official media kits, press releases, high-resolution logos, and press contact details are available on our dedicated /press page."
  },
  {
    id: "faq-7",
    category: "Verification & Audits",
    question: "How can users report incorrect or outdated information on the portal?",
    answer: "We maintain a dedicated editorial corrections mechanism. Users can email info@cockroachjantapartywale.com or use the contact form specifying the URL and verification source."
  }
];
