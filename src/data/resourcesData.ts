export interface ResourceItem {
  id: string;
  title: string;
  category: 'Manifesto' | 'Posters' | 'Media Kit' | 'Brand Assets' | 'Campaign Materials' | 'Satire Guides';
  description: string;
  fileSize: string;
  format: string;
  date: string;
  icon: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'CJP Swarm Manifesto 2026 (Official Satire Edition)',
    category: 'Manifesto',
    description: 'Complete 12-point fictional political manifesto covering road warranties, RTI rights, and kitchen survival policies.',
    fileSize: '2.4 MB',
    format: 'PDF',
    date: '2026-08-15',
    icon: 'FileText'
  },
  {
    id: 'res-2',
    title: 'High-Res Poster Collection Pack (16 Vectors)',
    category: 'Posters',
    description: 'Print-ready vector PDF poster templates for Black Monday, School Thik Karo, and Har Ghar Ki Sarkar.',
    fileSize: '14.8 MB',
    format: 'ZIP',
    date: '2026-08-20',
    icon: 'Image'
  },
  {
    id: 'res-3',
    title: 'Official CJP Brand Kit & Press Assets',
    category: 'Brand Assets',
    description: 'Official cockroach emblem SVGs, color palette spec sheet, typography guidelines, and founder bio text.',
    fileSize: '8.1 MB',
    format: 'ZIP',
    date: '2026-07-30',
    icon: 'Package'
  },
  {
    id: 'res-4',
    title: 'Black Monday Campaign Organizing Kit',
    category: 'Campaign Materials',
    description: 'Printable placards, social media banners, hashtag strategies, and non-violent civic awareness guidelines.',
    fileSize: '4.2 MB',
    format: 'PDF',
    date: '2026-07-15',
    icon: 'Megaphone'
  },
  {
    id: 'res-5',
    title: 'RTI Filing Template Guide for Beginners',
    category: 'Satire Guides',
    description: 'Step-by-step guide to filing Right to Information queries regarding road tenders, drainage budgets, and street lights.',
    fileSize: '1.8 MB',
    format: 'PDF',
    date: '2026-08-01',
    icon: 'HelpCircle'
  },
  {
    id: 'res-6',
    title: 'Press Kit & Media Release (Aug 2026)',
    category: 'Media Kit',
    description: 'Fictional satire organization press release, boilerplate copy, photo gallery links, and media contact info.',
    fileSize: '3.1 MB',
    format: 'PDF',
    date: '2026-08-25',
    icon: 'Newspaper'
  }
];
