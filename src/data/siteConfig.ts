export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: { title: string; href: string; description?: string }[];
}

export const siteConfig = {
  name: "Cockroach Janta Party Wale",
  shortName: "CJP Wale",
  domain: "https://cockroachjantapartywale.com",
  description: "Official public information, civic manifesto, verified news, transparent campaign archives, and public resource center for Cockroach Janta Party Wale.",
  tagline: "Uncompromising Civic Hygiene, Transparency & Public Governance Accountability",
  establishedYear: 2024,
  contactEmail: "info@cockroachjantapartywale.com",
  pressEmail: "press@cockroachjantapartywale.com",
  
  socialLinks: {
    x: "https://x.com/cjpwale_official",
    facebook: "https://facebook.com/cjpwale",
    youtube: "https://youtube.com/@cjpwale",
    instagram: "https://instagram.com/cjpwale",
    telegram: "https://t.me/cjpwale",
    linkedin: "https://linkedin.com/company/cjpwale"
  },

  navItems: [
    { title: "Home", href: "/" },
    { 
      title: "About", 
      href: "/about",
      children: [
        { title: "Organization Overview", href: "/about", description: "Learn about our civic mission and background." },
        { title: "Leadership & Founder", href: "/founder", description: "Factual biography and public commitments." },
        { title: "Press & Media", href: "/press", description: "Official press kit and media announcements." }
      ]
    },
    { title: "Manifesto", href: "/manifesto", badge: "2026 Charter" },
    { title: "News", href: "/news" },
    { title: "Campaigns", href: "/campaigns" },
    { title: "Gallery", href: "/gallery" },
    { title: "Resources", href: "/resources" },
    { title: "FAQ", href: "/faq" },
    { title: "Contact", href: "/contact" }
  ] as NavItem[],

  quickLinks: [
    { title: "Civic Manifesto", href: "/manifesto" },
    { title: "Latest News", href: "/news" },
    { title: "Active Campaigns", href: "/campaigns" },
    { title: "Verified Updates", href: "/updates" },
    { title: "Downloadable Resources", href: "/resources" },
    { title: "Join Movement", href: "/join" }
  ],

  legalLinks: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Use", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
    { title: "Accessibility", href: "/accessibility" },
    { title: "HTML Sitemap", href: "/sitemap" }
  ]
};
