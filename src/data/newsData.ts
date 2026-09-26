export interface NewsArticle {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
  };
  readingTime: string;
  featuredImage: string;
  imageAlt: string;
  content: {
    heading?: string;
    text: string;
    list?: string[];
  }[];
  tags: string[];
}

export const newsData: NewsArticle[] = [
  // BREAKING NEWS 1: CEC Gyanesh Kumar Resignation Ultimatum (Sep 26, 2026)
  {
    slug: "cec-gyanesh-kumar-resignation-cjp-ultimatum-jantar-mantar-2-2026",
    title: "Resign In 48 Hours Or Face Jantar Mantar 2.0: CJP's Ultimatum To Chief Election Commissioner Gyanesh Kumar",
    summary: "NDTV, The Hindu, Telegraph India, and Times of India report CJP founder Abhijeet Dipke issuing a 48-hour ultimatum to CEC Gyanesh Kumar amid the SIR row, backed by author Amitav Ghosh, warning of nationwide October 2 protests and asking opposition parties to stop participating in rigged polls.",
    category: "BREAKING & POLITICS",
    publishDate: "SEP 26, 2026",
    author: {
      name: "NDTV, The Hindu & TOI",
      role: "National Political Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_cec_gyanesh_resignation.png",
    imageAlt: "CJP CEC Gyanesh Kumar Resignation Ultimatum Graphic Poster",
    tags: ["NDTV", "The Hindu", "Telegraph India", "Times of India", "CEC Gyanesh Kumar", "Jantar Mantar 2.0", "Abhijeet Dipke", "Amitav Ghosh", "SIR Row"],
    content: [
      {
        heading: "48-Hour Ultimatum to Poll Body Chief",
        text: "In a fiery national press briefing, Cockroach Janta Party (CJP) founder Abhijeet Dipke issued an explicit 48-hour deadline demanding the immediate resignation of Chief Election Commissioner Gyanesh Kumar. Dipke warned that if the CEC fails to step down by Saturday, CJP will launch nationwide 'Jantar Mantar 2.0' agitations starting October 2."
      },
      {
        heading: "Prominent Support & Advice to Opposition",
        text: "Renowned author Amitav Ghosh publicly backed CJP's call for Gyanesh Kumar's resignation. Meanwhile, addressing opposition parties amid the SIR controversy, Dipke urged them to stop participating in elections if they are merely handed token wins, declaring that citizens have lost faith in contaminated electoral processes."
      }
    ]
  },
  // BREAKING NEWS 2: Delhi High Court Meta Deepfake Order (Sep 25, 2026)
  {
    slug: "delhi-hc-orders-meta-remove-morphed-pm-photo-cjp-notice-2026",
    title: "Delhi High Court Orders Meta to Remove Morphed Photo With PM Within 24 Hours; Issues Notice to CJP Leaders",
    summary: "The Indian Express, LiveLaw, NDTV, Times of India, and Pudhari report Delhi High Court ordering Meta to remove deepfake images involving Prime Minister Narendra Modi within 24 hours, while directing police protection for the complainant and issuing notices to CJP spokespersons.",
    category: "LEGAL & COURT",
    publishDate: "SEP 25, 2026",
    author: {
      name: "The Indian Express & LiveLaw",
      role: "High Court Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_delhi_hc_meta_notice.png",
    imageAlt: "Delhi High Court Meta Deepfake Order CJP Poster Graphic",
    tags: ["The Indian Express", "LiveLaw", "NDTV", "Times of India", "Pudhari", "Delhi High Court", "Meta Takedown", "Deepfake PM", "Saurav Das", "Abhijeet Dipke", "Ashutosh Ranka"],
    content: [
      {
        heading: "High Court Issues 24-Hour Mandate to Meta",
        text: "Observing that the matter concerns the Prime Minister of India, a bench of the Delhi High Court gave Meta 24 hours to take down all online instances of a morphed deepfake photograph. The court also ordered Delhi Police to provide adequate security cover to the complainant."
      },
      {
        heading: "Notice Issued to CJP Leadership",
        text: "The High Court issued formal notices to CJP leaders Saurav Das, Abhijeet Dipke, and Ashutosh Ranka regarding allegations surrounding the viral dissemination of the image. CJP legal counsel stated that the party respects the judiciary and will present full evidentiary compliance during the urgent hearing."
      }
    ]
  },
  // BREAKING NEWS 3: Abhijeet Dipke Rejects Union Minister NDA Offer
  {
    slug: "abhijeet-dipke-rejects-union-minister-nda-offer-2026",
    title: "CJP Leader Abhijeet Dipke Rejects Union Minister's Offer to Join NDA; Reaffirms Non-Electoral Independence",
    summary: "Hindustan Times reports CJP convenor Abhijeet Dipke turning down an official offer from a Union Minister to join the BJP-led NDA coalition, reiterating that CJP will never contest elections or compromise its independent student movement.",
    category: "POLITICS",
    publishDate: "SEP 24, 2026",
    author: {
      name: "Hindustan Times",
      role: "Special Political Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "Abhijeet Dipke rejects NDA offer poster graphic",
    tags: ["Hindustan Times", "Abhijeet Dipke", "NDA Offer", "Non-Electoral Independence", "Union Minister"],
    content: [
      {
        heading: "Union Minister Offer Turned Down",
        text: "Hindustan Times confirmed that a senior Union Minister extended an informal offer inviting CJP to join the BJP-led National Democratic Alliance (NDA). Dipke firmly declined the invitation, stating that the public has lost faith in party politics."
      },
      {
        heading: "Commitment to Non-Partisan Pressure Group",
        text: "Dipke reaffirmed CJP's core charter: 'We are a grassroots civic pressure group championing school quality, road warranties, and RTI transparency. We will not become a conventional political party or enter electoral seat-sharing.'"
      }
    ]
  },
  // BREAKING NEWS 4: Jaipur School Inspection Attack
  {
    slug: "jaipur-rampura-kanwarpura-school-inspection-attack-cjp-2026",
    title: "Abhijeet Dipke Warns of Protests After CJP Team Attacked During Jaipur School Audit in Rampura Kanwarpura",
    summary: "The Indian Express reports CJP founder Abhijeet Dipke alleging a violent attack on CJP student inspectors during a 'School Thik Karo' inspection at a government school in Rampura Kanwarpura village, Bagru (Jaipur).",
    category: "CIVIC AUDIT",
    publishDate: "SEP 23, 2026",
    author: {
      name: "The Indian Express",
      role: "Rajasthan Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_adivasi_revolution.png",
    imageAlt: "Jaipur school inspection attack CJP protest poster graphic",
    tags: ["The Indian Express", "School Thik Karo", "Jaipur Attack", "Rampura Kanwarpura", "Bagru", "Abhijeet Dipke"],
    content: [
      {
        heading: "'All Levels of Disgust Crossed': Dipke",
        text: "Following an unprovoked assault on CJP volunteers inspecting leaking ceilings and missing desks in Rampura Kanwarpura village of Jaipur's Bagru, Abhijeet Dipke condemned local hooliganism, warning of state-wide school strikes."
      }
    ]
  },
  // BREAKING NEWS 5: National Working Committee Expansion
  {
    slug: "cjp-announces-national-working-committee-expansion-2026",
    title: "CJP Announces Nationwide Expansion Plan & National Working Committee Led by Baliyan, Mallangi, Bharadwaj, and Ingale",
    summary: "The Hindu reports CJP establishing its National Working Committee led by Deepak Baliyan, Vijay Reddy Mallangi, Ankit Bharadwaj, and Yogesh Ingale to oversee public dialogues and member enrollment across 6 new states.",
    category: "MILESTONE",
    publishDate: "SEP 22, 2026",
    author: {
      name: "The Hindu",
      role: "National Affairs Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_news_hero_poster.png",
    imageAlt: "CJP National Working Committee expansion graphic",
    tags: ["The Hindu", "CJP Expansion", "National Working Committee", "Deepak Baliyan", "Vijay Reddy Mallangi", "Ankit Bharadwaj", "Yogesh Ingale"],
    content: [
      {
        heading: "State Zonal Leads Appointed",
        text: "The Hindu reported CJP formalizing a 6-month national rollout plan. Deepak Baliyan, Vijay Reddy Mallangi, Ankit Bharadwaj, and Yogesh Ingale will head Northern, Southern, Central, and Western zonal wings respectively."
      }
    ]
  },
  // LATEST UP-TO-DATE NEWS (SEP 26, 2026)
  {
    slug: "cjp-launches-5-state-adivasi-school-thik-karo-yatra-2026",
    title: "CJP Launches 5-State 'Adivasi School Thik Karo' Yatra From Gadchiroli to Bastar & Mayurbhanj",
    summary: "The Hindu & India Today report CJP founder Abhijeet Dipke and CJP youth delegates embarking on a 5-state tribal education yatra across Maharashtra, Chhattisgarh, Odisha, Jharkhand, and Rajasthan to audit residential hostels.",
    category: "BREAKING & CIVIC",
    publishDate: "SEP 26, 2026",
    author: {
      name: "The Hindu & India Today",
      role: "National Education & Tribal Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_adivasi_revolution.png",
    imageAlt: "CJP Adivasi School Thik Karo Revolution Poster Artwork",
    tags: ["The Hindu", "India Today", "Adivasi School Thik Karo", "Gadchiroli", "Bastar", "Mayurbhanj", "Abhijeet Dipke"],
    content: [
      {
        heading: "5-State Tribal School Inspection Yatra Launched",
        text: "Building upon the Gadchiroli declaration, CJP founder Abhijeet Dipke led a delegation of 50 student auditors on a 5-state 'Adivasi School Thik Karo' yatra. The team will inspect over 100 residential tribal hostels in Maharashtra, Chhattisgarh, Odisha, Jharkhand, and Rajasthan."
      },
      {
        heading: "Demanding Emergency Sanitation & Roof Repair Vouchers",
        text: "Dipke stated that tribal students in interior belts deserve state-of-the-art STEM laboratories, clean drinking water, and structurally sound residential quarters. CJP plans to release bi-weekly video evidence logs directly to the Union Tribal Affairs Ministry."
      }
    ]
  },
  {
    slug: "delhi-hc-directs-mcd-pwd-asphalt-drainage-audit-reports-2026",
    title: "Delhi High Court Orders PWD & MCD to File Bi-Monthly Asphalt Thickness & Subterranean Drain Vouchers",
    summary: "LiveLaw and Times of India report Delhi High Court issuing fresh enforcement directions ordering municipal authorities to publish core sample asphalt tests and drain desilting logs on CJP's open transparency dashboard.",
    category: "CIVIC & COURT",
    publishDate: "SEP 25, 2026",
    author: {
      name: "LiveLaw / Times of India",
      role: "Judicial Reporting Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_road_warranty_2026.png",
    imageAlt: "Contractor Road Warranty 3-Year Guarantee Graphic Poster",
    tags: ["LiveLaw", "Times of India", "Delhi High Court", "Asphalt Audit", "Contractor Warranty", "Subterranean Drains"],
    content: [
      {
        heading: "High Court Enforces Paving Accountability",
        text: "In continuation of its contractor road warranty directives, the Delhi High Court ordered PWD and MCD engineers to upload core asphalt thickness lab reports and contractor bank guarantee receipts prior to disbursing public funds."
      },
      {
        heading: "Citizen Audit Panels Authorized",
        text: "The High Court bench explicitly permitted CJP ward delegates to inspect municipal paving sites alongside division engineers, cementing student-led civic monitoring in municipal law."
      }
    ]
  },
  {
    slug: "un-geneva-youth-forum-finalizes-cjp-keynote-schedule-2026",
    title: "UN Geneva Secretariat Finalizes Keynote Plenary Slot for CJP Digital Decentralization Address",
    summary: "BBC World reports the United Nations Office at Geneva officially placing CJP's BitChat governance framework and student-led municipal audits as the opening keynote of the Global Youth Civic Summit.",
    category: "GLOBAL & UN",
    publishDate: "SEP 24, 2026",
    author: {
      name: "BBC World Service",
      role: "International Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_geneva_summit_2026.png",
    imageAlt: "UN Geneva Youth Civic Forum 2026 Official CJP Poster",
    tags: ["BBC World", "UN Geneva", "Global Youth Summit", "BitChat", "Abhijeet Dipke", "International Civic Reform"],
    content: [
      {
        heading: "Keynote Address at Palais des Nations",
        text: "The UN Youth Secretariat confirmed that CJP delegates will deliver the inaugural address at the Palais des Nations in October 2026. The plenary session will focus on how decentralized mobile tech can empower youth in emerging economies to enforce local government transparency."
      }
    ]
  },
  {
    slug: "swatantra-bhardwaj-bail-compliance-report-patiala-house-2026",
    title: "Police & Legal Observers File Bail Compliance Report in Patiala House Court Ahead of Oct 6 Hearing",
    summary: "Bar & Bench reports Delhi Police and CJP legal observers submitting verification reports confirming Swatantra Bhardwaj's compliance with interim bail conditions and social media gag orders.",
    category: "LEGAL & COURT",
    publishDate: "SEP 26, 2026",
    author: {
      name: "Bar & Bench",
      role: "Patiala House Legal Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_bhardwaj_bail.png",
    imageAlt: "Swatantra Bhardwaj Bail Compliance Patiala House Graphic",
    tags: ["Bar & Bench", "Patiala House Court", "Interim Bail", "Oct 6 Hearing", "Social Media Gag"],
    content: [
      {
        heading: "Court Prepares for Oct 6 Final Arguments",
        text: "Ahead of the upcoming October 6 hearing, Patiala House Metropolitan Magistrate received compliance affidavits confirming the accused has refrained from online publishing regarding the Jantar Mantar assault case."
      }
    ]
  },
  {
    slug: "cjp-swarm-reaches-150000-verified-student-observers-2026",
    title: "CJP Swarm Network Crosses 150,000 Verified Student Auditors Across 85 Indian Cities",
    summary: "Official CJP Secretariat announcement confirms the citizen swarm network has flagged over 19,000 potholes, filed 3,240 RTI transparency applications, and established 84 ward command centers.",
    category: "MILESTONE",
    publishDate: "SEP 24, 2026",
    author: {
      name: "CJP Movement Secretariat",
      role: "Data & Audit Bureau"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_news_hero_poster.png",
    imageAlt: "CJP 150k Swarm Members Milestone Poster",
    tags: ["CJP Swarm", "Milestone", "150k Members", "RTI Audits", "Ward Centers", "Youth Civic Movement"],
    content: [
      {
        heading: "Rapid Expansion Across Tier 2 & Tier 3 Cities",
        text: "The Cockroach Janta Party swarm network logged a 250% surge in active memberships across Tier 2 and Tier 3 municipal hubs, driven by popular demand for school infrastructure audits and transparent paving warranties."
      }
    ]
  },
  // NEW TRENDING 1: UN Geneva Youth Forum Invitation (Sep 22, 2026)
  {
    slug: "un-geneva-youth-civic-forum-invites-cjp-founder-dipke-2026",
    title: "UN General Assembly Youth Civic Forum Invites CJP Founder Abhijeet Dipke to Geneva Summit",
    summary: "BBC World and Reuters report UN Geneva Youth Civic Forum extending an official delegation invite to Cockroach Janta Party founder Abhijeet Dipke to address global youth leaders on digital decentralization and grassroot municipal accountability.",
    category: "GLOBAL & UN",
    publishDate: "SEP 22, 2026",
    author: {
      name: "BBC World & Reuters",
      role: "Global Affairs Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_un_geneva.png",
    imageAlt: "UN Geneva Youth Civic Forum 2026 CJP Poster Graphic",
    tags: ["BBC World", "Reuters", "UN Geneva", "Abhijeet Dipke", "Global Youth Summit", "CJP International"],
    content: [
      {
        heading: "Global Invitation to Geneva Youth Summit",
        text: "The United Nations General Assembly Youth Civic Forum has officially invited CJP founder Abhijeet Dipke to deliver a keynote address at the Palais des Nations in Geneva, Switzerland. The invitation highlights CJP's innovative use of satirical political mascotry, open RTI audit ledgers, and peer-to-peer BitChat technology."
      },
      {
        heading: "International Recognition of Youth Civic Movement",
        text: "Delegates from over 70 nations will convene in October 2026 to analyze CJP's 'School Thik Karo' campaign and subterranean municipal ward audits as a benchmark case study for youth-driven public accountability in developing democracies."
      }
    ]
  },
  // NEW TRENDING 2: Delhi HC Contractor Road Warranty Mandate (Sep 21, 2026)
  {
    slug: "delhi-hc-mandates-contractor-road-warranty-notice-boards-2026",
    title: "Delhi High Court Mandates Contractor Warranty Notice Boards on All Capital Municipal Roads",
    summary: "LiveLaw and Times of India report Delhi High Court issuing landmark directions ordering MCD and PWD to install permanent warranty notice boards displaying contractor names, toll-free complaint numbers, and guarantee durations on all newly paved roads.",
    category: "CIVIC & COURT",
    publishDate: "SEP 21, 2026",
    author: {
      name: "LiveLaw / Times of India",
      role: "Judicial Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_mcd_road_warranty.png",
    imageAlt: "Delhi High Court Contractor Road Warranty Board CJP Victory Poster Graphic",
    tags: ["LiveLaw", "Times of India", "Delhi High Court", "Road Audit", "Contractor Warranty", "Civic Accountability"],
    content: [
      {
        heading: "High Court Accepts CJP PIL Recommendations",
        text: "In a landmark verdict, a division bench of the Delhi High Court directed municipal authorities (MCD, PWD, NDMC) to mandate physical contractor warranty notice boards across all capital municipal roads within 30 days."
      },
      {
        heading: "Public Inspection & Asphalt Thickness Transparency",
        text: "The court agreed with CJP's submission that citizens have a fundamental right under Article 21 to inspect road warranty periods, contractor phone numbers, and asphalt thickness metrics directly on street corners."
      }
    ]
  },
  // NEW-1: Adivasi School Thik Karo Campaign Launch (Sep 17)
  {
    slug: "cjp-launches-adivasi-school-thik-karo-gadchiroli-2026",
    title: "CJP Launches 'Adivasi School Thik Karo' Campaign From Gadchiroli; Dipke Tears Up MoU at Press Conference",
    summary: "The Hindu and India Today report CJP founder Abhijeet Dipke launching a nationwide tribal school audit campaign from Gadchiroli, Maharashtra, documenting damaged roofs, broken walls, and lack of basic amenities in residential schools.",
    category: "CIVIC AUDIT",
    publishDate: "SEP 17, 2026",
    author: {
      name: "The Hindu & India Today",
      role: "National Education Desk"
    },
    readingTime: "6 min read",
    featuredImage: "/cjp_poster_adivasi_school.png",
    imageAlt: "CJP Adivasi School Thik Karo campaign Gadchiroli poster graphic",
    tags: ["The Hindu", "India Today", "Adivasi School Thik Karo", "Gadchiroli", "Tribal Schools", "Abhijeet Dipke"],
    content: [
      {
        heading: "Tribal School Audit Campaign Launched",
        text: "CJP founder Abhijeet Dipke launched the 'Adivasi School Thik Karo' campaign from Gadchiroli, Maharashtra on September 17. Ground inspections revealed severely damaged infrastructure — broken roofs, missing doors, no boundary walls, and absent bathrooms in tribal residential schools."
      },
      {
        heading: "590 Tribal Students Dead in 2 Years",
        text: "Dipke alleged that over 590 tribal students in Maharashtra have died in the last two years from snakebites, malaria, and malnutrition. He dramatically tore up a copy of a government MoU with a trust regarding tribal hostels to protest unmet commitments, demanding accountability from Chief Minister Devendra Fadnavis."
      }
    ]
  },
  // NEW-2: Bhardwaj Interim Bail (Sep 15)
  {
    slug: "delhi-court-grants-swatantra-bhardwaj-interim-bail-2026",
    title: "Delhi Court Grants Swatantra Bhardwaj 3-Week Interim Bail With Strict Social Media Gag Order",
    summary: "Bar & Bench and The Hindu report Delhi court granting 3-week interim bail to Swatantra Bhardwaj on September 15 with strict conditions including a complete ban on discussing the case, defense, or complainant's family on social media.",
    category: "LEGAL & COURT",
    publishDate: "SEP 15, 2026",
    author: {
      name: "Bar & Bench / The Hindu",
      role: "Legal Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_bhardwaj_bail.png",
    imageAlt: "Swatantra Bhardwaj interim bail Delhi court poster graphic",
    tags: ["Bar & Bench", "The Hindu", "Interim Bail", "Social Media Gag", "Swatantra Bhardwaj", "Oct 6 Hearing"],
    content: [
      {
        heading: "Strict Bail Conditions Imposed",
        text: "The Delhi court granted interim bail to Swatantra Bhardwaj with stringent conditions: a complete bar on discussing the case on social media, prohibition on contacting the complainant or witnesses, and no evidence tampering. The next hearing is scheduled for October 6, 2026."
      }
    ]
  },
  // NEW-3: Bhardwaj Released From Tihar (Sep 17)
  {
    slug: "swatantra-bhardwaj-released-tihar-jail-social-media-gag-2026",
    title: "Swatantra Bhardwaj Released From Tihar Jail; Barred From Discussing CJP Assault Case Online",
    summary: "ANI and LiveLaw confirm Swatantra Bhardwaj walked out of Tihar Jail on September 17 after Delhi court's interim bail order, with strict conditions barring any online commentary about the assault case.",
    category: "BREAKING",
    publishDate: "SEP 17, 2026",
    author: {
      name: "ANI & LiveLaw",
      role: "Crime & Legal Bureau"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_bhardwaj_bail.png",
    imageAlt: "Swatantra Bhardwaj Tihar release breaking news poster",
    tags: ["ANI", "LiveLaw", "Tihar Jail", "Bhardwaj Release", "Social Media Gag"],
    content: [
      {
        heading: "Tihar Release After 12 Days",
        text: "Swatantra Bhardwaj was released from Tihar Jail on September 17, 2026, after spending 12 days in judicial custody. The court noted that bail is an expression of trust and imposed strict conditions including no social media commentary about the case or the complainant's family."
      }
    ]
  },
  // NEW-4: Dipke Mock MP CM Resignation (Sep 13)
  {
    slug: "abhijeet-dipke-mock-resignation-mp-cm-balaghat-tribal-2026",
    title: "Abhijeet Dipke Posts Satirical 'Resignation' as MP CM Over Balaghat Tribal Children Deaths; Sparks Debate",
    summary: "Times of India and YouTube channels report CJP founder Abhijeet Dipke posting a mock resignation letter as Madhya Pradesh Chief Minister addressed to Governor Mangubhai Patel, after visiting Balaghat district where 30+ tribal children died of infectious diseases.",
    category: "POLITICS & SATIRE",
    publishDate: "SEP 13, 2026",
    author: {
      name: "Times of India",
      role: "National Political Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_dipke_mp_resign.png",
    imageAlt: "Abhijeet Dipke mock resignation MP CM Balaghat poster graphic",
    tags: ["Times of India", "Abhijeet Dipke", "Balaghat", "Tribal Children", "Mock Resignation", "Madhya Pradesh"],
    content: [
      {
        heading: "Satirical Resignation Over 30+ Tribal Deaths",
        text: "After visiting Balaghat district to meet families of tribal children who died due to suspected measles, malaria, and malnutrition, Abhijeet Dipke shared a mock resignation letter addressed to MP Governor Mangubhai Patel. The letter sarcastically 'resigned' as CM, criticizing the Mohan Yadav government's handling of the healthcare tragedy."
      },
      {
        heading: "Heckled By Influencers During Visit",
        text: "During his Balaghat visit, Dipke was reportedly heckled by social media influencers who accused him of 'doing politics on corpses'. The incident went viral, with supporters defending his criticism and opponents demanding legal action for impersonating a government office."
      }
    ]
  },
  // NEW-5: Gaurav Bhatia Defamation Suit (Sep 8)
  {
    slug: "bjp-gaurav-bhatia-defamation-suit-saurav-das-ashutosh-ranka-2026",
    title: "BJP's Gaurav Bhatia Files ₹2 Crore Defamation Suit Against CJP's Saurav Das & Ashutosh Ranka in Delhi HC",
    summary: "OpIndia reports BJP national spokesperson Gaurav Bhatia filing a ₹2 crore defamation case against CJP leaders Saurav Das and Ashutosh Ranka in Delhi High Court over an AI-generated image allegedly showing Bhatia making derogatory remarks.",
    category: "LEGAL & COURT",
    publishDate: "SEP 08, 2026",
    author: {
      name: "OpIndia / Delhi HC Registry",
      role: "Legal & Political Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_sc_judge_slams_police.png",
    imageAlt: "BJP Gaurav Bhatia defamation suit CJP leaders poster",
    tags: ["OpIndia", "Gaurav Bhatia", "Defamation", "₹2 Crore", "Delhi HC", "Saurav Das", "Ashutosh Ranka"],
    content: [
      {
        heading: "₹2 Crore Defamation in Delhi High Court",
        text: "BJP advocate and national spokesperson Gaurav Bhatia filed a ₹2 crore defamation case against CJP spokespersons Saurav Das and Ashutosh Ranka. The case stems from an AI-generated image shared on September 5 that appeared to show Bhatia making derogatory remarks toward Swatantra Bhardwaj."
      }
    ]
  },
  // NEW-6: Ashutosh Ranka Meets Akhilesh Yadav (Sep 3)
  {
    slug: "ashutosh-ranka-akhilesh-yadav-lucknow-meeting-2026",
    title: "CJP's Ashutosh Ranka Holds 90-Minute Closed-Door Meeting With Akhilesh Yadav in Lucknow",
    summary: "Organiser reports CJP leader Ashutosh Ranka held a 90-minute closed-door meeting with Samajwadi Party president Akhilesh Yadav at Janeshwar Mishra Trust office in Lucknow, sparking political speculation about CJP's UP strategy.",
    category: "POLITICS",
    publishDate: "SEP 03, 2026",
    author: {
      name: "Organiser",
      role: "Political Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "Ashutosh Ranka Akhilesh Yadav Lucknow meeting poster",
    tags: ["Organiser", "Ashutosh Ranka", "Akhilesh Yadav", "Lucknow", "Samajwadi Party"],
    content: [
      {
        heading: "Closed-Door Lucknow Meeting",
        text: "CJP leader Ashutosh Ranka held a 90-minute meeting with SP president Akhilesh Yadav at the Janeshwar Mishra Trust office in Lucknow on September 3. Neither party disclosed details, but the meeting sparked speculation about CJP's expanding political outreach in UP."
      }
    ]
  },
  // NEW-7: Multi-State Expansion of Adivasi Campaign (Sep 19)
  {
    slug: "cjp-adivasi-school-thik-karo-multi-state-expansion-2026",
    title: "CJP Plans Multi-State Expansion of 'Adivasi School Thik Karo' — Rajasthan, Jharkhand, Odisha, Gujarat Next",
    summary: "Deccan Chronicle and The New Indian Express report CJP planning to extend the tribal school audit campaign to Rajasthan, Jharkhand, Odisha, and Gujarat following the Gadchiroli launch.",
    category: "CIVIC AUDIT",
    publishDate: "SEP 19, 2026",
    author: {
      name: "Deccan Chronicle & TNIE",
      role: "National Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_adivasi_school.png",
    imageAlt: "CJP Adivasi School Thik Karo multi-state expansion poster",
    tags: ["Deccan Chronicle", "TNIE", "Rajasthan", "Jharkhand", "Odisha", "Gujarat", "Tribal Schools"],
    content: [
      {
        heading: "Nationwide Tribal School Audit Expansion",
        text: "Building on the momentum of the Gadchiroli launch, CJP announced plans to take the 'Adivasi School Thik Karo' campaign to Rajasthan, Jharkhand, Odisha, Gujarat, and Chhattisgarh. The campaign aims to document and publicize conditions in Eklavya Model Residential Schools (EMRS), with Dipke alleging only 477 of 720 sanctioned schools are functional."
      }
    ]
  },
  // NEW-8: MP HC Admits PIL on Tribal Deaths (Sep 13)
  {
    slug: "madhya-pradesh-hc-pil-balaghat-tribal-children-deaths-2026",
    title: "Madhya Pradesh High Court Admits PIL on Balaghat Tribal Children Deaths; Seeks State Government Response",
    summary: "Free Press Journal reports MP High Court admitting a Public Interest Litigation seeking accountability for 30+ tribal children deaths in Balaghat from infectious diseases and malnutrition.",
    category: "LEGAL & COURT",
    publishDate: "SEP 13, 2026",
    author: {
      name: "Free Press Journal",
      role: "Legal Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_dipke_mp_resign.png",
    imageAlt: "MP High Court PIL Balaghat tribal deaths poster",
    tags: ["Free Press Journal", "MP High Court", "PIL", "Balaghat", "Tribal Deaths", "State Response"],
    content: [
      {
        heading: "HC Seeks State Government Response",
        text: "The Madhya Pradesh High Court admitted a PIL on the Balaghat tribal healthcare crisis, directing the state government to respond on healthcare and living conditions in affected tribal areas. Over 30 children from the Baiga and Gond tribes had died since mid-2026, drawing criticism from political figures including Rahul Gandhi."
      }
    ]
  },
  // NEW-9: Dharmendra Pradhan Resignation Impact (Jul 25 - context update)
  {
    slug: "dharmendra-pradhan-resignation-education-minister-cjp-impact-2026",
    title: "Pralhad Joshi Takes Charge as Education Minister After Dharmendra Pradhan Resigns Under CJP Protest Pressure",
    summary: "The Hindu and Business Standard confirm Pralhad Joshi appointed as new Education Minister following Dharmendra Pradhan's resignation on July 25, driven by CJP-led nationwide student protests over NEET-UG irregularities.",
    category: "POLITICS",
    publishDate: "SEP 10, 2026",
    author: {
      name: "The Hindu & Business Standard",
      role: "National Political Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "Dharmendra Pradhan resignation Pralhad Joshi education minister poster",
    tags: ["The Hindu", "Dharmendra Pradhan", "Pralhad Joshi", "Education Minister", "NEET Protest"],
    content: [
      {
        heading: "CJP's Key Demand Fulfilled",
        text: "The resignation of Education Minister Dharmendra Pradhan on July 25 was a direct outcome of sustained CJP-led student agitations. Pralhad Joshi took charge of the Education Ministry alongside his existing portfolios. CJP declared this a 'historic victory for youth accountability'."
      }
    ]
  },
  // NEW-10: HC Rejects Bhardwaj Plea + Oct 6 date
  {
    slug: "delhi-hc-rejects-swatantra-bhardwaj-arrest-plea-2026",
    title: "Delhi High Court Rejects Swatantra Bhardwaj's Plea Against Arrest In CJP Protester Assault Case",
    summary: "Live Law reports Delhi High Court dismissing Swatantra Bhardwaj's petition challenging police detention after violent assault on student activist Nishu Azad's father.",
    category: "LEGAL & COURT",
    publishDate: "SEP 08, 2026",
    author: {
      name: "Live Law Desk",
      role: "High Court Reporting Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "Delhi High Court rejects Bhardwaj plea poster graphic",
    tags: ["Live Law", "Delhi High Court", "Swatantra Bhardwaj", "Nishu Azad", "Patiala House"],
    content: [
      {
        heading: "High Court Refuses Relief to Assault Accused",
        text: "The High Court of Delhi dismissed the writ petition filed by influencer Swatantra Bhardwaj seeking quashing of the police FIR registered following the physical assault on Sanjay Kumar at Jantar Mantar."
      }
    ]
  },
  // 2. TOI: CJP Activist Alleges Stone Pelting
  {
    slug: "cjp-activist-alleges-stone-pelting-at-home-2026",
    title: "CJP Activist Alleges Stone Pelting at Home Hours After 'Influencer' Swatantra Bhardwaj's Arrest",
    summary: "The Times of India reports student activist Nishu Azad reporting stone-pelting attacks on her family home following Bhardwaj's arrest in Bulandshahr.",
    category: "POLICE & CRIME",
    publishDate: "SEP 06, 2026",
    author: {
      name: "The Times of India",
      role: "City Crime Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "CJP activist home stone pelting TOI graphic poster",
    tags: ["Times of India", "Nishu Azad", "Stone Pelting", "Bulandshahr Arrest", "Delhi Police"],
    content: [
      {
        heading: "Intimidation Hours After Police Detention",
        text: "Hours after Delhi Police arrested Swatantra Bhardwaj in Bulandshahr, student leader Nishu Azad reported that unidentified miscreants pelted stones at her residence, demanding immediate police protection."
      }
    ]
  },
  // 3. India.com: Judicial Custody Till Sept 21
  {
    slug: "swatantra-bhardwaj-judicial-custody-sept-21-2026",
    title: "Swatantra Bhardwaj Sent to Judicial Custody Till Sept 21 in CJP Assault Case",
    summary: "India.com confirms Patiala House Metropolitan Magistrate remanding Bhardwaj to Tihar Judicial Custody until September 21 under non-bailable assault sections.",
    category: "LEGAL & COURT",
    publishDate: "SEP 08, 2026",
    author: {
      name: "India.com Bureau",
      role: "Crime & Legal Desk"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "Judicial custody till Sept 21 India.com graphic",
    tags: ["India.com", "Judicial Custody", "Patiala House Court", "Sept 21", "Tihar Jail"],
    content: [
      {
        heading: "Patiala House Court Order",
        text: "The Metropolitan Magistrate court at Patiala House remanded Swatantra Bhardwaj to 14 days of judicial custody until September 21 after Delhi Police completed initial custodial interrogation."
      }
    ]
  },
  // 4. HT: Minor CJP Activist Seeks Security
  {
    slug: "jantar-mantar-assault-minor-cjp-activist-police-security-2026",
    title: "Jantar Mantar Assault Case: Minor CJP Activist Alleges Stone Pelting Outside Home, Seeks Security",
    summary: "Hindustan Times details formal petition submitted to Delhi Police Commissioner seeking immediate armed security cover for the victim's family.",
    category: "POLICE & CRIME",
    publishDate: "SEP 06, 2026",
    author: {
      name: "Hindustan Times",
      role: "Special Correspondent"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "Minor CJP activist seeks police security HT graphic",
    tags: ["Hindustan Times", "Nishu Azad", "Police Protection", "Jantar Mantar", "Delhi Police HQ"],
    content: [
      {
        heading: "Security Petition to Police Commissioner",
        text: "CJP legal cell filed an urgent petition with the Delhi Police Commissioner seeking round-the-clock security protection for minor activist Nishu Azad and her father Sanjay Kumar following repeated threats."
      }
    ]
  },
  // 5. TOI: Don't Stoop So Low
  {
    slug: "dont-stoop-so-low-cjp-activist-reacts-to-deities-complaint-2026",
    title: "'Don't Stoop So Low': CJP Activist Reacts to Advocates' Complaint Over 'Objectionable' Remarks",
    summary: "The Times of India reports CJP activist hitting back at two advocates who filed police complaints against her and her father over alleged objectionable remarks.",
    category: "LEGAL ADVOCACY",
    publishDate: "SEP 06, 2026",
    author: {
      name: "The Times of India",
      role: "Legal & City Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_scst_pocso.png",
    imageAlt: "CJP activist reacts to advocates complaint poster graphic",
    tags: ["Times of India", "CJP Activist", "Legal Complaint", "Counter Statement"],
    content: [
      {
        heading: "Countering Distraction Tactics",
        text: "The CJP activist condemned frivolous police complaints filed by opposing counsel, stating: 'Do not stoop so low to distract public attention from camera-documented physical assault.'"
      }
    ]
  },
  // 6. TNIE: Sonam Wangchuk Interview
  {
    slug: "sonam-wangchuk-interview-cjp-neutral-pressure-group-2026",
    title: "INTERVIEW | 'CJP Must Remain Neutral Pressure Group, Not Political Party': Sonam Wangchuk",
    summary: "The New Indian Express interview with climate activist Sonam Wangchuk after his 26-day fast, emphasizing that CJP should avoid political party affiliation and remain a neutral pressure group.",
    category: "POLITICS",
    publishDate: "SEP 08, 2026",
    author: {
      name: "The New Indian Express",
      role: "Special Interview Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "Sonam Wangchuk interview CJP pressure group poster graphic",
    tags: ["Sonam Wangchuk", "The New Indian Express", "Paper Leak", "Neutral Pressure Group"],
    content: [
      {
        heading: "Advice for Civic Movement Independence",
        text: "In an exclusive interview with TNIE, climate activist Sonam Wangchuk commended CJP's anti-paper-leak campaign, urging the youth movement to maintain 100% non-partisan independence."
      }
    ]
  },
  // 7. NDTV: Ram Temple Trust CEO Fake Video Row
  {
    slug: "ram-temple-trust-ceo-fake-video-shared-by-cjp-row-2026",
    title: "Video | Ram Temple Trust CEO's Fake Video Shared By Political Handles Sparks Row",
    summary: "NDTV reports on misleading video controversy claiming to show Ram Temple Trust CEO Jitendra Mishra, triggering fact-checks by Alt News and CJP verification teams.",
    category: "FACT CHECK & MEDIA",
    publishDate: "SEP 07, 2026",
    author: {
      name: "NDTV Verification Unit",
      role: "Fact-Check Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_sc_judge_slams_police.png",
    imageAlt: "NDTV Ram Temple CEO fake video row graphic",
    tags: ["NDTV", "Fact Check", "Ram Temple CEO", "Misleading Video", "Alt News"],
    content: [
      {
        heading: "AI Deepfake & Misleading Footage Debunked",
        text: "NDTV and Alt News forensic analysis revealed that viral clips attributed to Ram Temple Trust CEO Jitendra Mishra were digitally altered, highlighting the need for strict fact-checking."
      }
    ]
  },
  // 8. TOI: Satya Niketan Youth Left to Live Like Cockroaches
  {
    slug: "satya-niketan-tragedy-youth-left-to-live-like-cockroaches-2026",
    title: "'Youth Left To Live Like Cockroaches': After Satya Niketan Tragedy, CJP’s Saurav Das Flags 'PG Mafia'",
    summary: "The Times of India reports CJP spokesperson Saurav Das exposing South Delhi's illegal PG mafia after building collapse killed students.",
    category: "PUBLIC ISSUES",
    publishDate: "SEP 07, 2026",
    author: {
      name: "The Times of India",
      role: "City Special Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_satya_niketan.png",
    imageAlt: "Satya Niketan collapse Saurav Das PG mafia TOI poster graphic",
    tags: ["Times of India", "Satya Niketan", "PG Mafia", "Saurav Das", "Hostel Safety"],
    content: [
      {
        heading: "Exposing Unregulated PG Hostels",
        text: "Following the fatal Satya Niketan building collapse in South Delhi, CJP leader Saurav Das slammed municipal authorities for allowing PG mafias to rent unsafe subterranean accommodations to outstation students."
      }
    ]
  },
  // 9. The Hindu: CJP Demands Accountability Over South Delhi Collapse
  {
    slug: "cjp-demands-accountability-south-delhi-hostel-collapse-dipke-questions-pm-2026",
    title: "CJP Demands Accountability Over South Delhi Hostel Collapse; Abhijeet Dipke Questions PM",
    summary: "The Hindu reports CJP Chief Abhijeet Dipke questioning PM and Municipal Corporation of Delhi on overdue safety certifications for student hostels.",
    category: "CIVIC AUDIT",
    publishDate: "SEP 07, 2026",
    author: {
      name: "The Hindu",
      role: "Delhi Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_satya_niketan.png",
    imageAlt: "CJP demands accountability South Delhi hostel collapse graphic",
    tags: ["The Hindu", "Abhijeet Dipke", "Satya Niketan", "MCD", "Student Hostels"],
    content: [
      {
        heading: "Audit Demand to Prime Minister & MCD",
        text: "CJP Chief Abhijeet Dipke issued an open letter to the PM and MCD Commissioner, demanding immediate structural safety audits for all student PG buildings across Delhi University hubs."
      }
    ]
  },
  // 10. HT: CJP's 7 Demands After Satya Niketan Tragedy
  {
    slug: "cjps-7-demands-satya-niketan-tragedy-pg-mafia-2026",
    title: "CJP's 7 Demands After Satya Niketan Tragedy: 'Probe PG Mafia, Build Government Hostels'",
    summary: "Hindustan Times details CJP's 7-point charter demanding government-built student housing, rent caps, and criminal prosecution of negligent building owners.",
    category: "PUBLIC ISSUES",
    publishDate: "SEP 07, 2026",
    author: {
      name: "Hindustan Times",
      role: "National Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_satya_niketan.png",
    imageAlt: "CJP 7 demands Satya Niketan HT graphic poster",
    tags: ["Hindustan Times", "7 Demands", "PG Mafia", "Government Hostels", "Satya Niketan"],
    content: [
      {
        heading: "7-Point Charter for Student Housing Rights",
        text: "Hindustan Times published CJP's 7 demands following the Satya Niketan tragedy, including mandatory fire & structural safety certificates, rent regulation, and municipal hostel construction."
      }
    ]
  },
  // 11. The Week: Satya Niketan What Are CJP's 7 Demands
  {
    slug: "satya-niketan-building-collapse-what-are-cjps-7-demands-2026",
    title: "Satya Niketan Building Collapse: What Are CJP's 7 Demands? Crackdown on 'PG Mafia', Ministerial Accountability",
    summary: "The Week analyzes CJP's nationwide campaign against unchecked urban student housing exploitation following the South Delhi tragedy.",
    category: "PUBLIC ISSUES",
    publishDate: "SEP 07, 2026",
    author: {
      name: "The Week",
      role: "Special Feature Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_satya_niketan.png",
    imageAlt: "The Week Satya Niketan building collapse CJP 7 demands graphic",
    tags: ["The Week", "Satya Niketan", "PG Mafia", "Ministerial Accountability"],
    content: [
      {
        heading: "National Media Analysis of CJP Housing Campaign",
        text: "The Week provided an in-depth feature analyzing CJP's 7-point charter and why urban student housing reform has become a central civic priority."
      }
    ]
  },
  // 12. Loksatta (लोकसत्ता): CJP Instagram Post Takedown Allegation
  {
    slug: "loksatta-marathi-cjp-meta-instagram-allegation-2026",
    title: "“सरकारला प्रश्न विचारणे इन्स्टाचे उल्लंघन आहे का?”; CJP आणि सौरव दास यांच्या पोस्ट हटवल्याचा ‘मेटा’वर आरोप",
    summary: "Loksatta Marathi daily covers CJP accusing Meta Instagram of removing civic audit reels and restricting official handles.",
    category: "FACT CHECK & MEDIA",
    publishDate: "SEP 08, 2026",
    author: {
      name: "Loksatta Bureau (लोकसत्ता)",
      role: "Maharashtra & Tech Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "Loksatta Marathi CJP Meta Instagram takedown graphic",
    tags: ["Loksatta", "लोकसत्ता", "Meta", "Instagram", "Saurav Das", "Marathi News"],
    content: [
      {
        heading: "इन्स्टाग्राम पोस्ट हटवल्याने सीजेपी आक्रमक",
        text: "सीजेपीच्या अधिकृत हँडल व सौरव दास यांच्या नागरी ऑडिट पोस्ट्स इंस्टाग्रामने हटवल्यानंतर 'मेटा' कंपनीकडे तात्काळ डिजिटल स्पष्टीकरण मागण्यात आले आहे."
      }
    ]
  },
  // 13. HT: CJP Slams PM Modi Dimagi Naxal Remark at SRCC
  {
    slug: "cjp-slams-pm-modi-dimagi-naxal-remark-srcc-2026",
    title: "CJP Slams PM Modi for Reviving ‘Dimagi Naxal’ Remark at SRCC: ‘Give Hope, Not Stupid Labels’",
    summary: "Hindustan Times reports Saurav Das declaring that labelling questioning youth as Dimagi Naxals is among the most shameful things a Prime Minister can do.",
    category: "POLITICS",
    publishDate: "SEP 06, 2026",
    author: {
      name: "Hindustan Times",
      role: "Political Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "CJP slams PM Modi Dimagi Naxal SRCC HT graphic",
    tags: ["Hindustan Times", "PM Modi", "Dimagi Naxal", "SRCC", "Saurav Das"],
    content: [
      {
        heading: "Rebuttal to SRCC Address",
        text: "CJP spokesperson Saurav Das issued a formal statement rejecting political labels used against active student auditors, asserting that demanding fair exams and road warranties is genuine nation-building."
      }
    ]
  },
  // 14. BBC News: Women Protesters Doxxed & Abused
  {
    slug: "bbc-news-women-protesters-doxxed-sluts-shamed-2026",
    title: "'I Was Slut-Shamed': BBC News Special Report on Women CJP Protesters Doxxed & Abused",
    summary: "BBC News dispatches by Zoya Mateen and Nikita Yadav expose online harassment, doctored photos, and lathi charge targeting female CJP student activists following July 20 Parliament march.",
    category: "SPECIAL REPORT",
    publishDate: "AUG 04, 2026",
    author: {
      name: "Zoya Mateen & Nikita Yadav",
      role: "BBC News, Delhi"
    },
    readingTime: "6 min read",
    featuredImage: "/cjp_poster_bbc_women.png",
    imageAlt: "BBC News special report graphic on female CJP student activists",
    tags: ["BBC News", "Zoya Mateen", "Women Activists", "Online Abuse", "Doxxing", "20 July March"],
    content: [
      {
        heading: "Viral Reels and Cyber Harassment Exposed",
        text: "While thousands of young people filled social media with memes mocking bureaucratic apathy, women creators behind CJP's viral Instagram reels faced coordinated online harassment, doctored photos, and doxxing following the 20 July march to Parliament."
      },
      {
        heading: "Resilience of Female Youth Activists",
        text: "Despite threats and account take-downs, student activists reaffirmed their determination to continue asking questions regarding exam integrity, municipal sanitation, and civil rights."
      }
    ]
  },
  // 15. ABP Majha: CJP Split & CJP-D Announcement
  {
    slug: "abp-majha-cjp-split-manish-brahmbhatt-cjp-d-2026",
    title: "CJP Controversy: सीजेपींमध्ये मोठी फूट, विरोधात आता CJP D पक्षाची घोषणा; म्हणाले, अभिजीत दिपकेने टीममध्ये मैत्रिणी भरल्या",
    summary: "ABP Majha dispatches on Manish Brahmbhatt forming Cockroach Janata Party Democratic (CJP-D), accusing Abhijeet Dipke of Team Kejriwal ties.",
    category: "POLITICS & SATIRE",
    publishDate: "SEP 03, 2026",
    author: {
      name: "ABP Majha Bureau (एबीपी माझा)",
      role: "Maharashtra & National Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha CJP split CJP-D poster graphic",
    tags: ["ABP Majha", "एबीपी माझा", "CJP-D", "Manish Brahmbhatt", "Abhijeet Dipke", "Marathi News"],
    content: [
      {
        heading: "सीजेपी आंदोलनात फूट व नवीन पक्षाची घोषणा",
        text: "अहमदाबादचे रहिवासी मनीष ब्रह्मभट्ट यांनी 'कॉकरोच जनता पार्टी डेमोक्रेटिक' (CJP Democratic) ची घोषणा करत मूळ सीजेपी नेतृत्व अरविंद केजरीवाल यांची टीम बनल्याचा आरोप केला."
      }
    ]
  },
  // 16. ABP Majha: Uddhav Thackeray Maratha Reservation
  {
    slug: "abp-majha-uddhav-thackeray-maratha-reservation-2026",
    title: "Uddhav Thackeray: तेव्हा गुलालाने दाढी लाल करुन घेणारे आता कुठे गेले? उद्धवांचा मराठा आरक्षणावरुन टोला",
    summary: "ABP Majha reports Shiv Sena (UBT) chief Uddhav Thackeray attacking Eknath Shinde over Maratha reservation and student agitations.",
    category: "POLITICS",
    publishDate: "SEP 08, 2026",
    author: {
      name: "ABP Majha Bureau (एबीपी माझा)",
      role: "State Politics Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha Uddhav Thackeray graphic",
    tags: ["ABP Majha", "Uddhav Thackeray", "Maratha Reservation", "Eknath Shinde", "Marathi News"],
    content: [
      {
        heading: "मराठा आरक्षण व राजकीय टोलेबाजी",
        text: "उद्धव ठाकरेंनी मराठा आरक्षणावरुन सत्ताधाऱ्यांवर कडाडून हल्ला चढवला आणि तरुणांच्या आंदोलनांवर भाष्य केले."
      }
    ]
  },
  // 17. ABP Majha: Gautami Patil Flying Kiss Complaint
  {
    slug: "abp-majha-gautami-patil-flying-kiss-bjp-complaint-2026",
    title: "Gautami Patil Crime: गौतमी पाटीलला 'तो' फ्लाईंग किस महागात पडणार, ठाण्यातील भाजप नगरसेविकेची तक्रार",
    summary: "ABP Majha report on BJP municipal councillor filing police complaint against dancer Gautami Patil.",
    category: "REGIONAL DISPATCH",
    publishDate: "SEP 08, 2026",
    author: {
      name: "ABP Majha Bureau (एबीपी माझा)",
      role: "Crime & Culture Desk"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha Gautami Patil complaint graphic",
    tags: ["ABP Majha", "Gautami Patil", "Thane BJP", "Police Complaint", "Marathi News"],
    content: [
      {
        heading: "ठाण्यात पोलिसांत तक्रार दाखल",
        text: "ठाण्यातील भाजप नगरसेविकेने गौतमी पाटीलच्या नृत्यावर आक्षेप घेत पोलिसांत तक्रार दाखल केली."
      }
    ]
  },
  // 18. ABP Majha: Rohit Pawar MPSC Irregularities Leak
  {
    slug: "abp-majha-rohit-pawar-mpsc-chairman-resignation-2026",
    title: "Rohit Pawar MPSC: तक्रारी अन् पुरावे बघा.. रोहित पवारांनी शेअर केली कागदपत्रे; म्हणाले, हा फक्त ट्रेलर",
    summary: "ABP Majha covers NCP MLA Rohit Pawar leaking documents on MPSC exam irregularities, demanding chairman's resignation.",
    category: "EDUCATION",
    publishDate: "SEP 08, 2026",
    author: {
      name: "ABP Majha Bureau (एबीपी माझा)",
      role: "Education & Politics Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha Rohit Pawar MPSC documents graphic",
    tags: ["ABP Majha", "Rohit Pawar", "MPSC Exam", "Paper Leak", "Resignation Demand"],
    content: [
      {
        heading: "MPSC अध्यक्षांच्या राजीनाम्याची मागणी",
        text: "आमदार रोहित पवार यांनी MPSC परीक्षेतील कथित अनियमिततेची कागदपत्रे शेअर करत अध्यक्षांच्या राजीनाम्याची जोरदार मागणी केली."
      }
    ]
  },
  // 19. ABP Majha: Manoj Jarange vs Vikhe Patil
  {
    slug: "abp-majha-manoj-jarange-vs-vikhe-patil-2026",
    title: "Manoj Jarange Patil vs Radhakrishna Vikhe Patil: तुझ्या सात पिढ्या राजकारणात असल्या तरी मी जरांगे आहे!",
    summary: "ABP Majha reports Maratha quota leader Manoj Jarange Patil's fiery response on Day 11 of his hunger strike.",
    category: "POLITICS",
    publishDate: "SEP 08, 2026",
    author: {
      name: "ABP Majha Bureau (एबीपी माझा)",
      role: "Protest Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha Manoj Jarange Patil hunger strike graphic",
    tags: ["ABP Majha", "Manoj Jarange Patil", "Radhakrishna Vikhe Patil", "Hunger Strike", "Day 11"],
    content: [
      {
        heading: "आंदोलनाचा ११ वा दिवस व राजकीय वाद",
        text: "मनोज जरांगे पाटील यांनी उपोषणाच्या ११ व्या दिवशी विखे-पाटलांवर जोरदार पलटवार केला."
      }
    ]
  },
  // 20. ABP Majha: Fadnavis Western Freight Corridor
  {
    slug: "abp-majha-fadnavis-western-freight-corridor-2026",
    title: "Devendra Fadnavis on Western Dedicated Freight Corridor: चीनला टक्कर देण्याच्यादृष्टीने महत्त्वाचं पाऊल",
    summary: "ABP Majha coverage of Dy CM Devendra Fadnavis explaining the economic importance of the Western Freight Corridor.",
    category: "PUBLIC ISSUES",
    publishDate: "SEP 08, 2026",
    author: {
      name: "ABP Majha Bureau (एबीपी माझा)",
      role: "Economy Desk"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha Devendra Fadnavis freight corridor graphic",
    tags: ["ABP Majha", "Devendra Fadnavis", "Western Freight Corridor", "Economy", "China Competition"],
    content: [
      {
        heading: "आर्थिक व पायाभूत सुविधांवर वक्तव्य",
        text: "उपमुख्यमंत्री देवेंद्र फडणवीस यांनी वेस्टर्न डेडिकेटेड फ्रेट कॉरिडोअरच्या महत्त्वाबाबत भाष्य केले."
      }
    ]
  },
  // 21. ABP Majha: Share Market & Gold Price Surge
  {
    slug: "abp-majha-share-market-ipo-gold-price-2026",
    title: "Share Market & Gold Price: आयपीओ लिस्ट होताच शेअर 3 दिवसात 200% वाढला; सोन्याच्या दरात पुन्हा वाढ",
    summary: "ABP Majha market report on Sensex 400 point dip, gold/silver MCX surge, and IPO 200% rally.",
    category: "PUBLIC ISSUES",
    publishDate: "SEP 08, 2026",
    author: {
      name: "ABP Majha Business Bureau",
      role: "Finance Desk"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_abp_majha.png",
    imageAlt: "ABP Majha share market gold rates graphic",
    tags: ["ABP Majha", "Share Market", "IPO Rally", "Gold Price", "Sensex Dip"],
    content: [
      {
        heading: "शेअर बाजार व सोन्या-चांदीचे दर",
        text: "आयपीओच्या तुफान लिस्टिंगनंतर शेअर्समध्ये २००% वाढ झाली तर सोन्याच्या दरातही मोठी वाढ नोंदवली गेली."
      }
    ]
  },
  // Additional Historical News Items
  {
    slug: "scst-pocso-sections-invoked-swatantra-bhardwaj-2026",
    title: "NDTV & The Hindu: SC/ST Act, POCSO & Attempt-to-Murder Sections Invoked Against Swatantra Bhardwaj",
    summary: "Following day-long protests by CJP, Congress and Aazad Samaj Party outside Parliament Street Police Station, Delhi Police expanded FIR against Bhardwaj adding SC/ST Act, POCSO Act, and Section 307.",
    category: "BREAKING",
    publishDate: "SEP 05, 2026",
    author: {
      name: "NDTV & The Hindu",
      role: "Crime & Legal Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_scst_pocso.png",
    imageAlt: "SC ST POCSO sections invoked against Bhardwaj graphic poster",
    tags: ["SC ST Act", "POCSO Act", "Section 307", "NDTV", "The Hindu", "Delhi Police"],
    content: [
      {
        heading: "Severe Penal Provisions Added to FIR",
        text: "Under mounting public pressure and representations by CJP leaders Saurav Das and Ashutosh Ranka, Delhi Police formally added provisions under the SC/ST (Prevention of Atrocities) Act, POCSO Act, and IPC Section 307 (Attempt to Murder) against Swatantra Bhardwaj."
      }
    ]
  },
  {
    slug: "chirag-paswan-ljp-complaint-bullet-escape-swatantra-bhardwaj-2026",
    title: "Chirag Paswan's LJP Files Complaint Against Bhardwaj; Accused Flees Bulandshahr on Bullet Motorcycle",
    summary: "Moneycontrol & Times of India report Chirag Paswan's LJP filed a police complaint denying political claims by Bhardwaj, as police tracked him fleeing Bulandshahr on a Royal Enfield Bullet.",
    category: "POLICE & POLITICS",
    publishDate: "SEP 05, 2026",
    author: {
      name: "Moneycontrol & TOI",
      role: "Political Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_ljp_bullet.png",
    imageAlt: "LJP complaint and Bullet motorcycle flight poster graphic",
    tags: ["Chirag Paswan", "LJP", "Bulandshahr", "Times of India", "Moneycontrol"],
    content: [
      {
        heading: "Political Protective Cover Denied",
        text: "Lok Janshakti Party (Ram Vilas) filed a formal complaint against Swatantra Bhardwaj for falsely claiming political backing. Meanwhile, Delhi Police tracked Bhardwaj after he attempted to flee Bulandshahr on a Bullet motorcycle prior to his detention."
      }
    ]
  },
  {
    slug: "swatantra-bhardwaj-arrested-cjp-protest-patiala-house-custody-2026",
    title: "Swatantra Bhardwaj Arrested After CJP Protest; Remanded to 1-Day Police Custody by Patiala House Court",
    summary: "The Hindu reports Delhi Police tracked and arrested influencer Swatantra Bhardwaj in Bulandshahr following CJP's Parliament Street sit-in. Patiala House Court remanded him to 1-day police custody.",
    category: "BREAKING",
    publishDate: "SEP 05, 2026",
    author: {
      name: "The Hindu Bureau",
      role: "Crime & Legal Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "Swatantra Bhardwaj arrested graphic poster Patiala House Court",
    tags: ["Swatantra Bhardwaj", "Patiala House Court", "Delhi Police", "Sanjay Kumar", "The Hindu"],
    content: [
      {
        heading: "Police Tracking & Bulandshahr Arrest",
        text: "Following an intense 24-hour sit-in outside Parliament Street Police Station led by CJP's Saurav Das and Nishu Azad, a special team of Delhi Police tracked and arrested influencer Swatantra Bhardwaj from Bulandshahr, UP."
      }
    ]
  },
  {
    slug: "sc-judge-ujjal-bhuyan-slams-police-crackdown-cjp-protest-2026",
    title: "'Very Distressing To See...': Supreme Court Judge Slams Police Crackdown At CJP Jantar Mantar Protest",
    summary: "NDTV and Asianet News report Supreme Court Justice Ujjal Bhuyan expressing deep concern over high-handed police tactics against peaceful student demonstrators at Jantar Mantar.",
    category: "LEGAL & COURT",
    publishDate: "SEP 05, 2026",
    author: {
      name: "NDTV & Asianet News",
      role: "Legal & Court Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_sc_judge_slams_police.png",
    imageAlt: "Supreme Court judge slams police crackdown poster graphic",
    tags: ["Supreme Court", "Justice Ujjal Bhuyan", "NDTV", "Jantar Mantar", "Police Crackdown"],
    content: [
      {
        heading: "Apex Court Bench Expresses Distress",
        text: "During hearings on student protest rights, Supreme Court Justice Ujjal Bhuyan described video footage of police cracking down on CJP student demonstrators at Jantar Mantar as 'very distressing to see'."
      }
    ]
  }
];
