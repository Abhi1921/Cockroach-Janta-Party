export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'about' | 'membership' | 'satire' | 'legal' | 'tech';
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Cockroach Janata Party (CJP)?',
    answer: 'CJP is a fictional political satire and civic commentary website created to highlight urban infrastructure issues, municipal transparency, and public accountability through creative humor and parody.',
    category: 'about'
  },
  {
    id: 'faq-2',
    question: 'Is CJP an officially registered political party in India?',
    answer: 'No. CJP is strictly a parody/satire creative digital publication. It is not registered with the Election Commission of India, does not field candidates, and does not collect political campaign donations.',
    category: 'legal'
  },
  {
    id: 'faq-3',
    question: 'Can I join CJP as a member?',
    answer: 'Yes! Anyone can generate a free fictional CJP Swarm Membership Card on our /join page. It is a fun community digital badge that symbolizes your dedication to civic awareness and humor.',
    category: 'membership'
  },
  {
    id: 'faq-4',
    question: 'Is the CJP Membership Card official or legally recognized?',
    answer: 'No. The card is a digital novelty item generated purely for satire, social media sharing, and entertainment. It grants no legal privileges or official government standing.',
    category: 'membership'
  },
  {
    id: 'faq-5',
    question: 'Can I print my CJP Membership Card?',
    answer: 'Absolutely! Click the "PRINT CARD" button on the card generator page. Our stylesheet is specifically configured to isolate and print only the card on paper or PDF without website headers or menus.',
    category: 'tech'
  },
  {
    id: 'faq-6',
    question: 'Who created Cockroach Janata Party?',
    answer: 'CJP was conceptualized by creator Abhijeet Dipke as an independent civic satire initiative to give voice to everyday citizen grievances regarding bad roads, open sewers, and government school quality.',
    category: 'about'
  },
  {
    id: 'faq-7',
    question: 'Why choose a cockroach as the mascot?',
    answer: 'The cockroach is the ultimate symbol of survival, resilience, and adaptability. No matter how harsh the environment—or how broken the municipal pavement—the cockroach survives and demands attention.',
    category: 'satire'
  },
  {
    id: 'faq-8',
    question: 'What is the "School Thik Karo" campaign?',
    answer: 'School Thik Karo is a satirical civic awareness initiative encouraging citizens to report broken government school infrastructure, leaking roofs, and missing desks using RTI inquiries and constructive social posts.',
    category: 'satire'
  },
  {
    id: 'faq-9',
    question: 'What happens on Black Monday?',
    answer: 'Black Monday is a monthly symbolic awareness event where citizens wear black attire to work or school as a peaceful, silent commentary demanding 3-year contractor warranties on all newly laid municipal roads.',
    category: 'satire'
  },
  {
    id: 'faq-10',
    question: 'What does "Dimagi Naxal" mean in CJP satire?',
    answer: 'It is a satirical term poking fun at how politicians sometimes label ordinary citizens as "radicals" simply for asking basic questions about public spending, road tenders, or tap water purity.',
    category: 'satire'
  },
  {
    id: 'faq-11',
    question: 'How does CJP handle my personal data when I fill out forms?',
    answer: 'All interactive forms (Join Swarm, Contact, Raise Voice) operate entirely inside your local browser runtime. Submitted data is used to render your card dynamically and is not transmitted to external advertising servers.',
    category: 'legal'
  },
  {
    id: 'faq-12',
    question: 'Can I contribute satirical posters or memes to CJP?',
    answer: 'Yes! We encourage original artwork. You can download our media kit or share your posters on social media tagging @Cockroachisback or on our official Reddit community r/CockroachJantaParty09.',
    category: 'membership'
  },
  {
    id: 'faq-13',
    question: 'How is the CJP website funded?',
    answer: 'The website is maintained voluntarily by open-source developers. Small voluntary server contributions can be made via our /support-dev page to help cover domain and hosting bandwidth costs.',
    category: 'tech'
  },
  {
    id: 'faq-14',
    question: 'Does CJP accept real political donations?',
    answer: 'No. CJP does not accept political contributions or funds for electoral activities. Any financial support offered on /support-dev is strictly for software server hosting.',
    category: 'legal'
  },
  {
    id: 'faq-15',
    question: 'What is BitChat on the CJP portal?',
    answer: 'BitChat is a simulated community chat interface showcasing satirical discussion channels (#general, #posters, #black-monday) where members can preview community discussions.',
    category: 'tech'
  },
  {
    id: 'faq-16',
    question: 'How can I report a broken road or civic issue through CJP?',
    answer: 'Visit the /raise-voice page to log your civic complaint card, select your category (Roads, Water, Cleanliness), and view how the community votes on priority issues.',
    category: 'about'
  },
  {
    id: 'faq-17',
    question: 'Is CJP affiliated with any real political party in India or abroad?',
    answer: 'No. CJP maintains 100% neutrality and independence. We satire all political parties equally whenever public infrastructure and civic rights are ignored.',
    category: 'legal'
  },
  {
    id: 'faq-18',
    question: 'What should I do if I want to leave the Swarm?',
    answer: 'Visit our /leave-swarm page! We respect citizen choice, offer a simple one-click departure confirmation, and invite constructive feedback on how we can improve.',
    category: 'membership'
  }
];
