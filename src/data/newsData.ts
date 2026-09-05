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
      },
      {
        heading: "72-Hour Police Assurance",
        text: "Senior police officials assured student activist Nishu Azad that rigorous legal steps and apprehension would be finalized within 72 hours."
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
      },
      {
        heading: "Patiala House Court Remand",
        text: "The Metropolitan Magistrate court at Patiala House remanded Bhardwaj to one day of police custody to facilitate ongoing investigations into the physical assault on Sanjay Kumar."
      }
    ]
  },
  {
    slug: "delhi-police-detains-swatantra-bhardwaj-bulandshahr-assault-2026",
    title: "Delhi Police Detains Swatantra Bhardwaj in Bulandshahr for Assaulting CJP Protester's Father",
    summary: "The Times of India reports special police team traced Bhardwaj across state borders after video boast of attacking Sanjay Kumar triggered nationwide student outrage.",
    category: "POLICE & CRIME",
    publishDate: "SEP 04, 2026",
    author: {
      name: "The Times of India",
      role: "Special City Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "Delhi Police detains Bhardwaj in Bulandshahr poster graphic",
    tags: ["Times of India", "Bulandshahr", "Delhi Police", "Assault FIR"],
    content: [
      {
        heading: "Inter-State Police Operation",
        text: "Delhi Police deployed satellite tracking and field teams to apprehend Swatantra Bhardwaj in Bulandshahr following intense media pressure and public siege at Parliament Street station."
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
      },
      {
        heading: "Reaffirming Right to Peaceful Demonstration",
        text: "The bench reminded law enforcement that peaceful assembly is a constitutionally protected fundamental right that cannot be met with police high-handedness."
      }
    ]
  },
  {
    slug: "cracked-open-skull-no-jail-cjp-demands-attempted-murder-charge-2026",
    title: "‘Cracked Open Skull, No Jail’—CJP Demands Attempted Murder Charge Against Hindutva Influencer",
    summary: "ThePrint reports CJP legal cell demanding Section 307 (Attempted Murder) charges after influencer bragged on camera about physically assaulting protester's father.",
    category: "LEGAL ADVOCACY",
    publishDate: "SEP 04, 2026",
    author: {
      name: "ThePrint Bureau",
      role: "Legal & Politics Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_scst_pocso.png",
    imageAlt: "CJP demands attempted murder charge poster graphic",
    tags: ["ThePrint", "Section 307", "Swatantra Bhardwaj", "Saurav Das"],
    content: [
      {
        heading: "Demand for Criminal Escalation",
        text: "CJP Legal Spokesperson Saurav Das submitted formal petitions demanding that police invoke Section 307 (Attempted Murder) rather than minor assault charges given the severe head injuries inflicted on Sanjay Kumar."
      }
    ]
  },
  {
    slug: "rahul-gandhi-cjp-teen-post-congress-delegation-delhi-police-2026",
    title: "How a Hindutva Influencer’s ‘Skull-Cracker’ Brag Brought CJP & Congress to the Same Table",
    summary: "Rahul Gandhi responded to CJP teen activist's post saying 'I'm with you'. Shortly after, a Congress delegation met Delhi Police demanding answers and immediate arrest.",
    category: "POLITICS & SOLIDARITY",
    publishDate: "SEP 05, 2026",
    author: {
      name: "ThePrint Bureau",
      role: "Political Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "Rahul Gandhi CJP teen post Congress delegation poster graphic",
    tags: ["Rahul Gandhi", "Congress", "CJP Teen Activist", "Delhi Police HQ", "ThePrint"],
    content: [
      {
        heading: "Cross-Party Solidarity for Youth Activists",
        text: "After a CJP teen activist posted video evidence of the assault on social media, Rahul Gandhi responded directly: 'I\\'m with you'. Within hours, a senior Congress delegation visited Delhi Police HQ demanding immediate enforcement."
      }
    ]
  },
  {
    slug: "cjp-nationwide-protest-call-abhijeet-dipke-cannot-be-wiped-out-2026",
    title: "CJP Calls for Nationwide Protests; Chief Abhijeet Dipke Asserts Movement Cannot Be Wiped Out",
    summary: "Manorama Online reports CJP founder Abhijeet Dipke issuing a call for nationwide student demonstrations demanding Union Education Minister's resignation, asserting CJP's subterranean roots cannot be erased.",
    category: "PROTEST DISPATCH",
    publishDate: "SEP 05, 2026",
    author: {
      name: "Manorama Online",
      role: "National Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "CJP nationwide protest call Abhijeet Dipke poster graphic",
    tags: ["Manorama Online", "Abhijeet Dipke", "Nationwide Protest", "Education Minister"],
    content: [
      {
        heading: "Subterranean Movement Cannot Be Erased",
        text: "Addressing regional swarms, CJP Chief Abhijeet Dipke declared that student demands for exam integrity and municipal accountability are deeply rooted across India and cannot be suppressed by police intimidation."
      }
    ]
  },
  {
    slug: "rebel-floats-cjp-democratic-cjp-d-team-kejriwal-claim-2026",
    title: "Rebel Faction Floats 'Cockroach Janta Party-Democratic' (CJP-D); Claims Dipke's CJP Is 'Team Kejriwal'",
    summary: "Hindustan Times, The Hindu, and India Today report internal split as rebel leader Brahmbhatt launches CJP-D, accusing Dipke of AAP alignment. Dipke dismisses the group as a political gimmick.",
    category: "POLITICS & SATIRE",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Hindustan Times & India Today",
      role: "Political Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "CJP-D splinter controversy poster graphic",
    tags: ["CJP-D", "Brahmbhatt", "Abhijeet Dipke", "Hindustan Times", "India Today", "The Hindu"],
    content: [
      {
        heading: "Rebel Splinter Group Announced",
        text: "Disgruntled activist Brahmbhatt announced the formation of 'Cockroach Janta Party-Democratic' (CJP-D), alleging that Abhijeet Dipke's platform had morphed into 'Team Kejriwal'."
      },
      {
        heading: "Dipke's Rebuttal",
        text: "CJP Chief Abhijeet Dipke rejected the claims, asserting: 'CJP remains 100% non-partisan and dedicated strictly to subterranean civic audits, RTI disclosures, and student rights.'"
      }
    ]
  },
  {
    slug: "akhilesh-yadav-cjp-meeting-raises-hackles-in-up-sbsp-attack-2026",
    title: "Akhilesh Yadav & CJP Delegation Meeting Raises Hackles In UP; NDA Ally SBSP Hits Out",
    summary: "Deccan Chronicle reports SP chief Akhilesh Yadav meeting CJP leaders in Lucknow, drawing sharp criticism from UP Cabinet Minister O.P. Rajbhar (SBSP/BJP ally).",
    category: "POLITICS",
    publishDate: "SEP 05, 2026",
    author: {
      name: "Deccan Chronicle",
      role: "UP State Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_cjp_congress_table.png",
    imageAlt: "Akhilesh Yadav CJP meeting poster graphic",
    tags: ["Akhilesh Yadav", "Deccan Chronicle", "UP Politics", "O.P. Rajbhar", "SBSP"],
    content: [
      {
        heading: "Lucknow Meeting Triggers Political Sparks",
        text: "Samajwadi Party president Akhilesh Yadav met a CJP delegation in Lucknow to discuss youth exam integrity and road warranties. The meeting prompted NDA ally O.P. Rajbhar to accuse SP of fueling student unrest."
      }
    ]
  },
  {
    slug: "cjp-targets-ips-sachin-sharma-ruined-girls-lives-2026",
    title: "CJP Targets IPS Sachin Sharma: 'Ruined Two Girls' Lives' — Saurav Das & Ashutosh Ranka Demand Probe",
    summary: "Pudhari reports CJP leaders Saurav Das and Ashutosh Ranka placing IPS officer Sachin Sharma under public radar over alleged inaction in a high-profile case.",
    category: "POLICE ACCOUNTABILITY",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Pudhari News Bureau",
      role: "Maharashtra & Crime Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "CJP targets IPS Sachin Sharma poster graphic",
    tags: ["IPS Sachin Sharma", "Pudhari", "Saurav Das", "Ashutosh Ranka", "Police Accountability"],
    content: [
      {
        heading: "CJP Turns Spotlight on Police Inaction",
        text: "CJP leaders Saurav Das and Ashutosh Ranka issued a public warning demanding a departmental inquiry into IPS Sachin Sharma, accusing police administration of failing two young female victims."
      }
    ]
  },
  {
    slug: "cjp-chief-abhijeet-dipke-urges-fadnavis-visit-ashramshalas-2026",
    title: "CJP Chief Abhijeet Dipke Urges CM Devendra Fadnavis to Visit Maharashtra Ashramshalas",
    summary: "Daily Pioneer reports CJP founder Abhijeet Dipke asking CM Devendra Fadnavis to inspect tribal school hostels following CJP audit on safety, food quality, and facility deficits.",
    category: "CIVIC AUDIT",
    publishDate: "SEP 05, 2026",
    author: {
      name: "Daily Pioneer",
      role: "Mumbai & Tribal Affairs Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_school_thik_karo_poster.png",
    imageAlt: "Abhijeet Dipke urges Devendra Fadnavis Ashramshala audit graphic",
    tags: ["Abhijeet Dipke", "Devendra Fadnavis", "Daily Pioneer", "Ashramshalas", "Tribal Schools"],
    content: [
      {
        heading: "Audit Exposes Hostel Infrastructure Deficits",
        text: "Following field inspections across Maharashtra tribal hostels, CJP Chief Abhijeet Dipke wrote to CM Devendra Fadnavis urging surprise visits to address substandard food, unsafe hygiene, and missing educational tools."
      }
    ]
  },
  {
    slug: "alt-news-impact-meta-removes-ai-fakes-cjp-female-protesters-2026",
    title: "Alt News Impact: Meta Takes Down AI Fake Photos & Harassing Videos Targeting Female CJP Protesters",
    summary: "Alt News fact-check investigation forces Meta to delete coordinated Instagram and Facebook accounts generating AI deepfakes targeting women activists at Jantar Mantar.",
    category: "FACT CHECK & MEDIA",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Alt News Desk",
      role: "Fact-Check Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_sc_judge_slams_police.png",
    imageAlt: "Alt News Meta AI takedown poster graphic",
    tags: ["Alt News", "Meta", "Instagram", "Facebook", "AI Deepfakes", "Jantar Mantar"],
    content: [
      {
        heading: "Exposing Coordinated Cyber Harassment",
        text: "An Alt News investigation revealed a network of malicious social media handles disseminating AI-altered videos and fake images aimed at intimidating women participating in CJP's Jantar Mantar protests."
      },
      {
        heading: "Meta Swift Action",
        text: "Following Alt News disclosures, Meta permanently suspended the offending accounts and removed violating media across Instagram and Facebook."
      }
    ]
  },
  {
    slug: "mathrubhumi-delhi-police-station-siege-cjp-protest-2026",
    title: "Action Demanded Against Skull Attacker: Mathrubhumi Reports CJP Parliament Street Siege",
    summary: "Mathrubhumi dispatches report on CJP's capital protest demanding criminal prosecution of Hindutva influencer following assault on protester's father.",
    category: "REGIONAL DISPATCH",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Mathrubhumi Bureau",
      role: "Delhi Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "Mathrubhumi CJP Parliament Street protest graphic",
    tags: ["Mathrubhumi", "Malayalam News", "Parliament Street", "CJP Protest"],
    content: [
      {
        heading: "Capital Siege Demanding Justice",
        text: "Mathrubhumi reported on CJP's intense sit-in outside Parliament Street Police Station, highlighting student solidarity against physical attacks on protesters' families."
      }
    ]
  },
  {
    slug: "team-cjp-parliament-street-police-station-protest-2026",
    title: "CJP Protesters Lay Siege to Parliament Street Police Station Over Assault on Student Leader's Father",
    summary: "Team CJP led by Saurav Das and Nishu Azad reached Parliament Street Police Station in New Delhi, sitting on a dharna demanding immediate arrest and action over the assault on Sanjay Kumar.",
    category: "BREAKING",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Saurav Das",
      role: "National Spokesperson & Legal Lead"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "CJP protesters sit on dharna outside Parliament Street Police Station graphic poster",
    tags: ["Parliament Street", "Saurav Das", "Nishu Azad", "Sanjay Kumar", "CJP Protest"],
    content: [
      {
        heading: "Hundreds of Protesters Surround Police Station",
        text: "Following viral video statements by right-wing influencer Swatantra Bhardwaj boasting of physically assaulting student protester Nishu Azad's father (Sanjay Kumar) during the July 20 demonstration, Team CJP assembled at Parliament Street Police Station."
      },
      {
        heading: "24-Hour Ultimatum for Arrest",
        text: "CJP leaders Saurav Das and Nishu Azad sat on an indefinite dharna on the road outside the station premises, urging immediate registration of criminal charges and arrest."
      }
    ]
  },
  {
    slug: "influencer-claims-cracked-skull-cjp-protest-fir-twist-2026",
    title: "'Kapil Mishra Called': Influencer Boasts of 'Not Being Jailed' After 'Cracking Skull' at CJP Protest; FIR Twist Follows",
    summary: "Influencer Swatantra Bhardwaj boasted on video about allegedly assaulting Sanjay Kumar during the CJP protest and claimed political patronage, sparking intense outrage and an FIR twist.",
    category: "LEGAL & POLITICS",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Ananya Sen",
      role: "Legal & Advocacy Secretariat"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "Influencer assault claim and FIR twist poster graphic",
    tags: ["Swatantra Bhardwaj", "Kapil Mishra", "Sanjay Kumar", "Times of India", "FIR Twist"],
    content: [
      {
        heading: "Boasting on Camera Triggers Public Backlash",
        text: "Swatantra Bhardwaj's video claims that he assaulted student activist Nishu Azad's father and remains unpunished due to high-level political connections drew nationwide condemnation across news channels and social media platforms."
      },
      {
        heading: "Delhi Police Registers FIR Twist",
        text: "Under mounting public pressure and media scrutiny from TOI and India Today, Delhi Police updated the case status, initiating investigative procedures into the assault."
      }
    ]
  },
  {
    slug: "ndtv-man-who-hit-students-father-defiant-cjp-protest-2026",
    title: "'Will Do Again If...': Man Who Hit Student's Father Issues Defiant Statement As CJP Protests In Delhi",
    summary: "NDTV report captures provocative statements by Swatantra Bhardwaj after hitting Sanjay Kumar during CJP Jantar Mantar protests, fueling widespread student indignation.",
    category: "PROTEST REPORT",
    publishDate: "SEP 04, 2026",
    author: {
      name: "NDTV Media Desk",
      role: "Broadcast News Partner"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "NDTV report poster graphic on assault at CJP protest",
    tags: ["NDTV", "Sanjay Kumar", "CJP Protest", "Delhi Police"],
    content: [
      {
        heading: "Defiant Statements Trigger Campaign Surge",
        text: "Despite widespread condemnation, Swatantra Bhardwaj asserted he had no regret for hitting student leader Nishu Azad's father, sparking calls from student bodies nationwide to join CJP's Parliament Street sit-in."
      }
    ]
  },
  {
    slug: "delhi-police-facial-recognition-jail-fiasco-cjp-protest-2026",
    title: "Police Say Cameras 'Caught' 2,873 History Sheeters at CJP Protest — 162 Were Actually Already in Jail",
    summary: "Delhi Police told Supreme Court its facial recognition system flagged 2,873 people with criminal records at CJP protest, but court audits revealed 162 were physically locked inside prison during the event.",
    category: "INVESTIGATION",
    publishDate: "SEP 04, 2026",
    author: {
      name: "The Indian Express & ThePrint",
      role: "Investigative Bureau"
    },
    readingTime: "6 min read",
    featuredImage: "/cjp_poster_facial_rec_jail.png",
    imageAlt: "Facial recognition AI fiasco poster graphic showing 162 in jail",
    tags: ["Facial Recognition", "Delhi Police", "Supreme Court", "ThePrint", "Indian Express"],
    content: [
      {
        heading: "Flawed AI Algorithmic Match Exposed",
        text: "Delhi Police attempted to justify heavy policing at CJP's July 20 demonstration by presenting facial recognition matches of 2,873 alleged history sheeters. Independent court verification proved 162 flagged individuals were actively incarcerated in jail on July 20."
      },
      {
        heading: "Supreme Court Reprimand",
        text: "The Supreme Court noted the alarming inaccuracies in automated criminal profiling used against peaceful student demonstrators."
      }
    ]
  },
  {
    slug: "livelaw-withdrawing-september-5-protest-cjp-tells-supreme-court-2026",
    title: "Withdrawing September 5 Protest: CJP Leader Saurav Das Tells Supreme Court As Centre Acts To Drop FIRs",
    summary: "Live Law report detailing how CJP leader Saurav Das informed Supreme Court of canceling the September 5 march following central government commitments.",
    category: "LEGAL & COURT",
    publishDate: "SEP 01, 2026",
    author: {
      name: "Live Law Bureau",
      role: "Legal Reporting Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_sc_quash_firs.png",
    imageAlt: "Live Law poster graphic on September 5 protest withdrawal",
    tags: ["Live Law", "Saurav Das", "Supreme Court", "Protest Withdrawn"],
    content: [
      {
        heading: "Courtroom Statement by CJP Counsel",
        text: "Saurav Das informed the bench that since the Centre and state governments initiated Article 142 proceedings to quash all student FIRs, CJP voluntarily called off its planned India Gate march."
      }
    ]
  },
  {
    slug: "ndtv-supreme-court-cancels-all-firs-against-cjp-protesters-2026",
    title: "Supreme Court Cancels All FIRs Against CJP Protesters, Criminal Antecedents Only Exception",
    summary: "NDTV coverage of Supreme Court's historic Article 142 ruling quashing all police FIRs registered against student protesters across Delhi and multiple states.",
    category: "LEGAL & COURT",
    publishDate: "SEP 02, 2026",
    author: {
      name: "NDTV Desk",
      role: "National News Bureau"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_sc_quash_firs.png",
    imageAlt: "Supreme Court quashes FIRs poster graphic NDTV",
    tags: ["NDTV", "Article 142", "FIR Quashed", "Supreme Court"],
    content: [
      {
        heading: "Complete Protection for Student Careers",
        text: "The apex court granted comprehensive legal relief to over 2,700 students who participated in CJP's NEET paper leak and road warranty demonstrations."
      }
    ]
  },
  {
    slug: "toi-cjp-calls-off-sept-5-march-after-sc-quashes-firs-2026",
    title: "CJP Calls Off Sept 5 March After SC Quashes All FIRs Against Protesters on Centre's Request",
    summary: "The Times of India reports CJP calling off its nationwide protest march following Supreme Court's order granting amnesty to student activists.",
    category: "PROTEST REPORT",
    publishDate: "SEP 01, 2026",
    author: {
      name: "The Times of India",
      role: "Special Correspondent"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_sc_quash_firs.png",
    imageAlt: "TOI CJP calls off Sept 5 march poster graphic",
    tags: ["Times of India", "Sept 5 March", "FIR Quash", "CJP"],
    content: [
      {
        heading: "Victory for Democratic Dialogue",
        text: "TOI highlighted CJP's strategic decision to transition from street rallies back to 24/7 municipal ward audits after securing full legal protection for student youth."
      }
    ]
  },
  {
    slug: "bar-and-bench-cjp-cancels-september-5-protest-march-2026",
    title: "Bar and Bench: CJP Cancels September 5 Protest March After Supreme Court Quashes FIRs in Delhi, Other States",
    summary: "Bar & Bench legal dispatch covering the Supreme Court hearing and CJP's formal cancellation of protest marches.",
    category: "LEGAL & COURT",
    publishDate: "SEP 02, 2026",
    author: {
      name: "Bar and Bench",
      role: "Legal Correspondents"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_sc_quash_firs.png",
    imageAlt: "Bar and Bench CJP SC FIR quash poster graphic",
    tags: ["Bar and Bench", "Supreme Court", "CJP Protest", "Article 142"],
    content: [
      {
        heading: "Judicial Precedent Established",
        text: "Bar & Bench documented how the apex court bench barred police from registering fresh FIRs against student demonstrators."
      }
    ]
  },
  {
    slug: "news18-hindi-cjp-parliament-street-police-station-protest-live-2026",
    title: "LIVE: स्वतंत्र भारद्वाज पर हो एक्शन... CJP का संसद मार्ग थाने पर प्रदर्शन, निशु आजाद संग धरने पर बैठे सौरभ",
    summary: "News18 Hindi coverage of CJP leaders Saurav Das and Nishu Azad sitting on dharna outside Parliament Street Police Station in Delhi.",
    category: "BREAKING",
    publishDate: "SEP 04, 2026",
    author: {
      name: "News18 Hindi Team",
      role: "Delhi Regional Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "News18 Hindi Parliament Street CJP protest poster graphic",
    tags: ["News18 Hindi", "Saurav Das", "Nishu Azad", "Parliament Street"],
    content: [
      {
        heading: "संसद मार्ग थाने पर भारी संख्या में पहुंचे कॉकरोच समर्थक",
        text: "दिल्ली के जंतर-मंतर पर CJP प्रदर्शन के दौरान निशु आजाद के पिता संजय कुमार पर हमले के विरोध में सौरभ दास और निशु आजाद संसद मार्ग थाने के बाहर धरने पर बैठ गए।"
      }
    ]
  },
  {
    slug: "theprint-cjp-protest-facial-recognition-162-in-jail-2026",
    title: "CJP Protest: Of 2,873 History Sheeters That Delhi Cops Seek to Probe, 162 Were 'Supposed to Be in Jail'",
    summary: "ThePrint investigation disclosing that 162 of the 2,873 history sheeters Delhi Police sought to probe were actually serving sentences in jail on July 20.",
    category: "INVESTIGATION",
    publishDate: "SEP 01, 2026",
    author: {
      name: "ThePrint Bureau",
      role: "Special Investigation Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_facial_rec_jail.png",
    imageAlt: "ThePrint facial recognition 162 in jail poster graphic",
    tags: ["ThePrint", "Facial Recognition", "Delhi Police", "History Sheeters"],
    content: [
      {
        heading: "Police Database Errors Exposed",
        text: "ThePrint analyzed police submissions and verified jail ledgers, revealing that 162 individuals flagged as active rally participants were physically locked inside prison cells on July 20."
      }
    ]
  },
  {
    slug: "hindustan-cjp-protest-parliament-street-police-station-2026",
    title: "CJP Protest News: कॉकरोचों ने घेरा दिल्ली का संसद मार्ग थाना, क्यों मचा बवाल और हंगामा",
    summary: "Hindustan Hindi dispatch on hundreds of CJP protesters surrounding Delhi's Parliament Street Police Station demanding immediate arrest.",
    category: "BREAKING",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Hindustan Live Bureau",
      role: "Crime & Politics Desk"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "Hindustan Hindi CJP Parliament Street police station siege graphic",
    tags: ["Hindustan", "Parliament Street", "CJP Protest", "Hindi News"],
    content: [
      {
        heading: "सड़क पर शुरू हुआ अनिश्चितकालीन धरना",
        text: "दिल्ली में सैकड़ों की तादाद में सड़क पर उतरे कॉकरोच कार्यकर्ता संसद मार्ग थाने का घेराव कर रहे हैं और हमलावर पर सख्त कार्रवाई की मांग कर रहे हैं।"
      }
    ]
  },
  {
    slug: "hans-india-cjp-protest-row-cracked-skull-claim-sparks-storm-2026",
    title: "CJP Protest Row: Activist's 'Cracked Skull' Claim Sparks Political Storm, Delhi Police Gives FIR Details",
    summary: "The Hans India reports on activist Swatantra Bhardwaj's remarks about allegedly assaulting a student protester's father and Delhi Police's FIR updates.",
    category: "POLITICS",
    publishDate: "SEP 04, 2026",
    author: {
      name: "The Hans India Desk",
      role: "National Bureau"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_poster_swatantra_arrest.png",
    imageAlt: "Hans India CJP protest cracked skull claim poster graphic",
    tags: ["The Hans India", "Swatantra Bhardwaj", "Sanjay Kumar", "FIR Details"],
    content: [
      {
        heading: "Political Storm Erupts",
        text: "Remarks by Swatantra Bhardwaj claiming physical assault on Sanjay Kumar triggered sharp political reactions across parties, prompting police to release FIR registration details."
      }
    ]
  },
  {
    slug: "careers360-cjp-protesters-protest-outside-delhi-police-station-2026",
    title: "CJP Protesters Protest Outside Delhi Police Station Over Alleged Assault on Student Protester's Father",
    summary: "Careers360 reports on student groups protesting outside Delhi Police station following viral video of assault on student leader's father Sanjay Kumar.",
    category: "EDUCATION",
    publishDate: "SEP 04, 2026",
    author: {
      name: "Careers360 News Bureau",
      role: "Student & Campus Desk"
    },
    readingTime: "3 min read",
    featuredImage: "/cjp_poster_parliament_dharna.png",
    imageAlt: "Careers360 CJP protest outside Delhi police station graphic",
    tags: ["Careers360", "Student Protest", "Sanjay Kumar", "Parliament Street"],
    content: [
      {
        heading: "Student Solidarity Outside Police HQ",
        text: "Youth organisations joined CJP's sit-in outside Parliament Street Police Station following viral video interviews showing physical attack on Sanjay Kumar during the July 20 NEET demonstration."
      }
    ]
  },
  {
    slug: "dainik-bhaskar-sc-quashes-jantar-mantar-cjp-firs-2026",
    title: "सुप्रीम कोर्ट ने जंतर-मंतर प्रोटेस्ट की सभी FIR रद्द कीं: नई FIR भी दर्ज नहीं होंगी; कॉकरोच जनता पार्टी ने फैसला सराहा",
    summary: "Dainik Bhaskar report on Supreme Court quashing all FIRs related to CJP's NEET paper leak protest at Jantar Mantar and barring fresh cases.",
    category: "LEGAL & COURT",
    publishDate: "SEP 02, 2026",
    author: {
      name: "Dainik Bhaskar National Bureau",
      role: "Legal & Politics Desk"
    },
    readingTime: "5 min read",
    featuredImage: "/cjp_poster_sc_quash_firs.png",
    imageAlt: "Dainik Bhaskar Supreme Court FIR quash poster graphic",
    tags: ["Dainik Bhaskar", "Supreme Court", "NEET Paper Leak", "CJP"],
    content: [
      {
        heading: "छात्रों को बड़ी राहत — सभी प्राथमिकियां रद्द",
        text: "नई दिल्ली में NEET पेपर लीक के विरोध में CJP के जंतर-मंतर प्रदर्शन के दौरान दर्ज सभी एफआईआर सुप्रीम कोर्ट ने रद्द कर दी हैं।"
      }
    ]
  },
  {
    slug: "indian-express-how-cjp-protest-led-to-dharmendra-pradhan-quitting-2026",
    title: "How Did CJP Protest Lead to Dharmendra Pradhan Quitting? Ashutosh Ranka Explains",
    summary: "The Indian Express interview with Ashutosh Ranka explaining how 37 days of CJP nationwide protests forced Education Minister Dharmendra Pradhan's resignation.",
    category: "POLITICS",
    publishDate: "SEP 03, 2026",
    author: {
      name: "The Indian Express",
      role: "Senior Political Editor"
    },
    readingTime: "6 min read",
    featuredImage: "/cjp_poster_scst_pocso.png",
    imageAlt: "Indian Express Ashutosh Ranka Dharmendra Pradhan quitting poster graphic",
    tags: ["Indian Express", "Ashutosh Ranka", "Dharmendra Pradhan", "NEET Protest"],
    content: [
      {
        heading: "37 Days of Non-Stop Pressure",
        text: "Ashutosh Ranka stated that the central government did not engage with protesters for 37 days until CJP launched intense nationwide ward audits and street demonstrations, leading to minister Dharmendra Pradhan's departure."
      }
    ]
  },
  {
    slug: "sc-quashes-firs-against-cjp-protesters-2026",
    title: "Supreme Court Cancels All FIRs Against CJP Protesters Under Article 142",
    summary: "In a landmark order, the Supreme Court of India invoked Article 142 to quash all police cases registered against student protesters across Delhi and other states.",
    category: "LEGAL & COURT",
    publishDate: "SEP 01, 2026",
    author: {
      name: "Saurav Das",
      role: "Policy & Media Spokesperson"
    },
    readingTime: "4 min read",
    featuredImage: "/cjp_sc_fir_quash_poster.png",
    imageAlt: "Supreme Court quashes FIRs against student protesters poster graphic",
    tags: ["Supreme Court", "Article 142", "CJP Protests", "Student Immunity"],
    content: [
      {
        heading: "Landmark Verdict Protects Student Protesters",
        text: "The Supreme Court invoked its extraordinary powers under Article 142 of the Constitution to cancel all FIRs registered against NEET and youth protesters in New Delhi, Rajasthan, and UP."
      },
      {
        heading: "Withdrawal of September 5 Protest March",
        text: "Following government assurances and the apex court order, Cockroach Janta Party (CJP) formally called off its planned September 5 march to Delhi Police HQ."
      }
    ]
  },
  {
    slug: "public-audit-subterranean-drainage-2026",
    title: "Public Audit Demands Standardized Inspection of Urban Subterranean Sewer Systems",
    summary: "Independent audit of municipal sanitation budgets highlights key areas where open data and quarterly public reporting can improve drainage maintenance across urban zones.",
    category: "CIVIC SANITATION",
    publishDate: "AUG 25, 2026",
    author: {
      name: "Abhijeet Dipke",
      role: "Chief Secretariat Observer"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Urban drainage inspection site with engineers reviewing municipal blueprints",
    tags: ["Sanitation", "Urban Audit", "Public Health", "Governance"],
    content: [
      {
        heading: "Overview of Municipal Sanitation Auditing",
        text: "Cockroach Janta Party research wing published its quarterly recommendations on urban civic hygiene. The report advocates for mandatory public disclosure of drain cleaning schedules, subterranean sewer desilting depth measurements, and contractor service level agreements (SLAs)."
      },
      {
        heading: "Key Recommendations for Wards",
        text: "Municipal authorities must establish transparent digital dashboards tracking daily maintenance operations to ensure public funds directly yield cleaner neighborhoods.",
        list: [
          "Mandatory publication of zone-wise sanitation schedules 48 hours prior to execution.",
          "Installation of verified water sample testing points in high-density residential sectors.",
          "Establishment of non-punitive grievance reporting tools for local resident welfare associations."
        ]
      }
    ]
  },
  {
    slug: "contractor-warranty-notice-board-compliance",
    title: "On-Site Notice Board Audit: Verifying 3-Year Contractor Road Repair Warranties",
    summary: "CJP field observers inspected 45 public road paving sites in Commercial Sector 18, requesting mandatory notice boards listing contractor warranty liability periods.",
    category: "PUBLIC ACCOUNTABILITY",
    publishDate: "AUG 18, 2026",
    author: {
      name: "Ananya Sen",
      role: "Head of RTI Legal Advocacy"
    },
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Public tender documents and analytical charts on civic expenditure",
    tags: ["Contractor Warranty", "RTI", "Tenders", "Road Paving"],
    content: [
      {
        heading: "Audit Findings",
        text: "Under municipal guidelines, all public works over ₹5 Lakhs must display transparent warranty boards. Our physical field audit discovered only 12 out of 45 sites had legible contractor details."
      }
    ]
  },
  {
    slug: "community-water-quality-testing-charter",
    title: "Safe Piped Household Water: Deploying Rapid TDS and Chlorine Testing Kiosks",
    summary: "Evaluating mobile volunteer kiosks providing residents free water quality testing across high-footfall metro transit hubs.",
    category: "PUBLIC HEALTH",
    publishDate: "AUG 10, 2026",
    author: {
      name: "Priya Nambiar",
      role: "Water Quality Lead"
    },
    readingTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Public health worker testing household water sample",
    tags: ["Water Safety", "Public Health", "Community Testing"],
    content: [
      {
        heading: "Piped Water Safety Guarantee",
        text: "Access to uncontaminated piped drinking water is a non-negotiable fundamental civic right. CJP volunteer kiosks empower households with immediate water quality diagnostics."
      }
    ]
  },
  {
    slug: "school-thik-karo-pan-india-launch",
    title: "School Thik Karo Campaign Launches Across 12 States to Audit Classroom Infrastructure",
    summary: "CJP launches nation-wide citizen audit of government school desks, roofs, and sanitation blocks using standardized RTI scorecards.",
    category: "SOCIETY",
    publishDate: "AUG 05, 2026",
    author: {
      name: "Meera Iyer",
      role: "Education Reform Observer"
    },
    readingTime: "4 min read",
    featuredImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students sitting in a classroom during an educational audit",
    tags: ["Education", "School Thik Karo", "RTI", "Public Schools"],
    content: [
      {
        heading: "Audit Charter Launched",
        text: "The School Thik Karo initiative urges citizens to report leaking classroom roofs, missing desks, and broken water filters. Initial RTI findings indicate over 30% of audited schools operate with overdue maintenance tenders."
      }
    ]
  },
  {
    slug: "dimagi-naxal-satire-manifesto-release",
    title: "Why Asking Questions About Road Tenders Does Not Make You a 'Dimagi Naxal'",
    summary: "A satirical essay breaking down the political rhetoric surrounding civic activism, RTI inquiries, and urban citizen rights.",
    category: "POLITICS SATIRE",
    publishDate: "JUL 28, 2026",
    author: {
      name: "Abhijeet Dipke",
      role: "Chief Secretariat Observer"
    },
    readingTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Editorial writing setup with fountain pen and newsprint notebook",
    tags: ["Dimagi Naxal", "Satire", "RTI", "Civil Liberties"],
    content: [
      {
        heading: "The Satire Behind the Label",
        text: "When asking why a road melted in three days gets labeled as 'subversive thinking', humor becomes the sharpest tool for democracy. CJP breaks down why civic curiosity is the ultimate form of nation-building."
      }
    ]
  },
  {
    slug: "bitchat-decentralized-mesh-for-civic-alerts",
    title: "BitChat Mesh: Testing Offline Peer-to-Peer Civic Ticker Technology",
    summary: "Exploring CJP's experimental lightweight BitChat protocol designed for neighborhood civic updates and offline rally safety coordination.",
    category: "TECHNOLOGY",
    publishDate: "JUL 20, 2026",
    author: {
      name: "Tech Swarm Guild",
      role: "Open Source Tech Collective"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cyberpunk digital matrix code stream representing mesh technology",
    tags: ["BitChat", "Technology", "Mesh Network", "Privacy"],
    content: [
      {
        heading: "Decentralized Civic Communication",
        text: "BitChat allows citizens to relay emergency traffic blockages, pothole warnings, and RTI meeting locations over Bluetooth mesh without relying on centralized servers."
      }
    ]
  },
  {
    slug: "black-monday-20-july-recap-report",
    title: "Black Monday Recap: 45,000 Citizens Wear Black Attire Demanding 3-Year Asphalt Guarantees",
    summary: "Field report from Black Monday demonstrations across New Delhi, Bengaluru, and Pune documenting pothole maps and contractor liability petitions.",
    category: "CJP COMMENTARY",
    publishDate: "JUL 21, 2026",
    author: {
      name: "Rohan Verma",
      role: "Road Safety Inspector"
    },
    readingTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Citizens meeting in dark attire discussing civic priorities",
    tags: ["Black Monday", "Roads", "Protests", "Contractor Warranty"],
    content: [
      {
        heading: "Nationwide Civic Action",
        text: "Thousands of residents wore black clothing to work and posted photos cataloging pothole coordinates to demonstrate solidarity for durable public road standards."
      }
    ]
  }
];
