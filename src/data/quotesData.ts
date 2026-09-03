export interface SatireQuote {
  id: string;
  quote: string;
  speaker: string;
  role: string;
  context: string;
  category: 'manifesto' | 'roads' | 'philosophy' | 'protest' | 'kitchen';
  year: string;
}

export const quotesData: SatireQuote[] = [
  {
    id: 'quote-1',
    quote: "You can spray pesticides, paint over cracks, and close municipal portals, but you cannot pesticide public curiosity.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "Launch of CJP Swarm Manifesto, 2026",
    category: "philosophy",
    year: "2026"
  },
  {
    id: 'quote-2',
    quote: "If a road crumbles after three days of rain, it wasn't built by engineers; it was baked like a fragile biscuit.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "Press Address on Black Monday Pothole Campaign",
    category: "roads",
    year: "2026"
  },
  {
    id: 'quote-3',
    quote: "Democracy is not a luxury sedan that passes with sirens while everyone else waits in traffic. Democracy is clean tap water.",
    speaker: "Swarm Observer #042",
    role: "Civic Satirist",
    context: "RTI Campaign Rally, New Delhi",
    category: "manifesto",
    year: "2026"
  },
  {
    id: 'quote-4',
    quote: "Every house has a kitchen, every kitchen has a cockroach, and every cockroach has more resilience than a broken tender policy.",
    speaker: "CJP Satire Editorial",
    role: "Editorial Desk",
    context: "Why Cockroach Manifesto Article",
    category: "kitchen",
    year: "2026"
  },
  {
    id: 'quote-5',
    quote: "Calling a citizen a 'Dimagi Naxal' for asking why the government school roof leaks is like calling a fish radical for wanting water.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "School Thik Karo Launch Event",
    category: "protest",
    year: "2026"
  },
  {
    id: 'quote-6',
    quote: "A pothole without a warning sign is not an accident; it is an uninvited swimming pool provided by the contractor.",
    speaker: "Swarm Delegate, Pune",
    role: "Road Safety Volunteer",
    context: "Black Monday Protest Dispatch",
    category: "roads",
    year: "2026"
  },
  {
    id: 'quote-7',
    quote: "We don't want marble statues of cockroaches. We just want street lights that work when the sun goes down.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "Vision 2030 Address",
    category: "philosophy",
    year: "2026"
  },
  {
    id: 'quote-8',
    quote: "When bureaucracy files your complaint under 'Under Process', it means your grandchildren might receive an acknowledgment.",
    speaker: "RTIGuy_Official",
    role: "Transparency Analyst",
    context: "RTI Awareness Campaign",
    category: "manifesto",
    year: "2026"
  },
  {
    id: 'quote-9',
    quote: "In the dark, all cockroaches are equal. Under the street light, only broken roads get noticed.",
    speaker: "Chief Swarm Satirist",
    role: "Culture Wing",
    context: "Poetry of the Sewer Dispatch",
    category: "kitchen",
    year: "2026"
  },
  {
    id: 'quote-10',
    quote: "The best election campaign poster is a newly paved road that stays smooth through monsoon season.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "Poster Release Event",
    category: "protest",
    year: "2026"
  },
  {
    id: 'quote-11',
    quote: "Do not fear the swarm; fear the apathy that lets open sewers run past primary school gates.",
    speaker: "Delhi Swarm Council",
    role: "Civic Action Group",
    context: "Delhi March Protests",
    category: "protest",
    year: "2026"
  },
  {
    id: 'quote-12',
    quote: "A budget without public scrutiny is just a high-stakes guessing game played with taxpayer coins.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "Civic Budget Satire Analysis",
    category: "philosophy",
    year: "2026"
  },
  {
    id: 'quote-13',
    quote: "No corner left behind means no citizen left without a working RTI form and a sense of humor.",
    speaker: "Swarm Observer #108",
    role: "Digital Rights Lead",
    context: "BitChat Live Q&A",
    category: "manifesto",
    year: "2026"
  },
  {
    id: 'quote-14',
    quote: "If you survive municipal tap water in summer, you are already immune to corporate propaganda.",
    speaker: "Kitchen Swarm Veteran",
    role: "Memes & Satire Guild",
    context: "Swarm Survival Guide",
    category: "kitchen",
    year: "2026"
  },
  {
    id: 'quote-15',
    quote: "Humor is our shield, RTI is our spear, and civic awareness is our unstoppable swarm.",
    speaker: "Abhijeet Dipke",
    role: "Fictional Founder, CJP",
    context: "Closing Keynote, CJP Annual Convention",
    category: "philosophy",
    year: "2026"
  },
  {
    id: 'quote-16',
    quote: "A school without desks is just an auditorium for speech-makers.",
    speaker: "Ananya Sen",
    role: "Head of Student Swarm",
    context: "School Thik Karo Press Conference",
    category: "manifesto",
    year: "2026"
  },
  {
    id: 'quote-17',
    quote: "When asphalt melts faster than ice cream in June, it is time for a 3-year contractor warranty law.",
    speaker: "Ashutosh Ranka",
    role: "Co-Founder & Policy Strategist",
    context: "PWD Inspection Dispatch",
    category: "roads",
    year: "2026"
  },
  {
    id: 'quote-18',
    quote: "Public WiFi that asks for 5 security passwords is not a utility; it is a quiz show.",
    speaker: "Tech Swarm Guild",
    role: "Open Source Collective",
    context: "BitChat Mesh Launch",
    category: "manifesto",
    year: "2026"
  },
  {
    id: 'quote-19',
    quote: "Freedom of speech includes the right to laugh at broken municipal promises.",
    speaker: "Saurav Das",
    role: "Chief Press & Legal Delegate",
    context: "Supreme Court Article 142 Presser",
    category: "protest",
    year: "2026"
  },
  {
    id: 'quote-20',
    quote: "Leave the fridge unlocked—the swarm demands paneer, transparency, and un-flooded streets!",
    speaker: "CJP Satire Mascot",
    role: "Official Emblem",
    context: "Midnight Kitchen Declaration",
    category: "kitchen",
    year: "2026"
  }
];
