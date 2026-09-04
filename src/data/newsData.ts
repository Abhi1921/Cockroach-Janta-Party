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
    featuredImage: "/cjp_poster_parliament_street_dharna.svg",
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
    featuredImage: "/cjp_poster_influencer_assault_fir.svg",
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
    featuredImage: "/cjp_poster_influencer_assault_fir.svg",
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
    featuredImage: "/cjp_poster_facial_recognition_jail.svg",
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
    featuredImage: "/cjp_poster_sept5_withdrawn.svg",
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
    featuredImage: "/cjp_poster_sc_quash_firs.svg",
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
    featuredImage: "/cjp_poster_sept5_withdrawn.svg",
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
    featuredImage: "/cjp_poster_sc_quash_firs.svg",
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
    featuredImage: "/cjp_poster_parliament_street_dharna.svg",
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
    featuredImage: "/cjp_poster_facial_recognition_jail.svg",
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
    featuredImage: "/cjp_poster_parliament_street_dharna.svg",
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
    featuredImage: "/cjp_poster_influencer_assault_fir.svg",
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
    featuredImage: "/cjp_poster_parliament_street_dharna.svg",
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
    featuredImage: "/cjp_poster_sc_quash_firs.svg",
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
    featuredImage: "/cjp_poster_pradhan_resignation.svg",
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
