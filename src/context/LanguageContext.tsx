import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

const translations: Translations = {
  // Navigation & Core Labels
  brandName: {
    en: 'Cockroach Janta Party',
    hi: 'कॉकरोच जनता पार्टी'
  },
  subLabel: {
    en: 'INDEPENDENT SATIRE · EST. 2026',
    hi: 'स्वतंत्र व्यंग्य · स्था. 2026'
  },
  tagline: {
    en: 'Young Minds. Real Issues. A Better Tomorrow.',
    hi: 'युवा सोच। असली मुद्दे। एक बेहतर कल।'
  },
  navVision: {
    en: 'Vision',
    hi: 'दृष्टिकोण'
  },
  navManifesto: {
    en: 'Manifesto',
    hi: 'घोषणापत्र'
  },
  navNews: {
    en: 'News & Archive',
    hi: 'समाचार व पुरालेख'
  },
  navJournal: {
    en: 'Journal',
    hi: 'पत्रिका'
  },
  navGallery: {
    en: 'Gallery',
    hi: 'गैलरी'
  },
  navIssues: {
    en: 'Issues',
    hi: 'मुद्दे'
  },
  navProtests: {
    en: 'Protests',
    hi: 'विरोध प्रदर्शन'
  },
  navMembers: {
    en: 'Members',
    hi: 'सदस्य'
  },
  navContact: {
    en: 'Contact',
    hi: 'संपर्क'
  },
  navJoinSwarm: {
    en: 'JOIN THE SWARM →',
    hi: 'दल में शामिल हों →'
  },
  skipLink: {
    en: 'Skip to main content',
    hi: 'मुख्य सामग्री पर जाएँ'
  },

  // Hero Section
  heroVolume: {
    en: 'VOLUME 01 · EDITION 01 | EST. 2026',
    hi: 'खंड 01 · संस्करण 01 | स्था. 2026'
  },
  heroHeadline1: {
    en: 'FOR THOSE',
    hi: 'उन लोगों के लिए'
  },
  heroHeadline2: {
    en: 'WHO REFUSE TO',
    hi: 'जो चुप रहने से'
  },
  heroHeadline3: {
    en: 'STAY SILENT.',
    hi: 'इन्कार करते हैं।'
  },
  heroSupporting: {
    en: 'Independent satire · civic commentary · public conversation. Exploring urban infrastructure, subterranean sewer desilting, contractor road warranties, and open RTI transparency.',
    hi: 'स्वतंत्र व्यंग्य · नागरिक टिप्पणी · सार्वजनिक चर्चा। भूमिगत सीवर सफाई, 3-वर्षीय ठेकेदार वारंटी और खुले आरटीआई पारदर्शिता का विश्लेषण।'
  },
  btnEnterManifesto: {
    en: 'ENTER THE MANIFESTO →',
    hi: 'घोषणापत्र देखें →'
  },
  btnRaiseIssue: {
    en: 'RAISE AN ISSUE →',
    hi: 'मुद्दा उठाएं →'
  },
  heroMeta: {
    en: '✦ NO CORPORATE SPONSORSHIP · FUNDED BY THE SWARM',
    hi: '✦ कोई कॉर्पोरेट प्रायोजन नहीं · जनता द्वारा संचालित'
  },

  // Reality Check Box
  realityCheckTitle: {
    en: 'INDEPENDENT SATIRICAL COMMENTARY WEBSITE',
    hi: 'स्वतंत्र व्यंग्यात्मक नागरिक टिप्पणी पोर्टल'
  },
  realityCheckText: {
    en: 'Satire and civic commentary only; not the official Cockroach Janta Party and not affiliated with any political election candidate. We explore real-world civic issues using satirical storytelling and open data analysis.',
    hi: 'केवल व्यंग्य और नागरिक टिप्पणी; आधिकारिक कॉकरोच जनता पार्टी या राजनीतिक चुनाव प्रत्याशी से संबद्ध नहीं।'
  },
  readLegalLink: {
    en: 'READ LEGAL & TRANSPARENCY NOTICE →',
    hi: 'कानूनी व पारदर्शिता सूचना पढ़ें →'
  },

  // Live Pulse Counters
  swarmPulseTitle: {
    en: 'THE SWARM PULSE',
    hi: 'द स्वार्म पल्स (लाइव डेटा)'
  },
  pulseDemoNote: {
    en: 'LIVE COMMUNITY ACTIVITY DATA',
    hi: 'लाइव समुदाय गतिविधि डेटा'
  },
  pulse01Label: {
    en: 'VOLUNTEER AUDIT CAMPAIGN',
    hi: 'स्वयंसेवक ऑडिट अभियान'
  },
  pulse02Label: {
    en: 'CORE CIVIC MANIFESTO DEMANDS',
    hi: 'मुख्य 5 नागरिक माँगे'
  },
  pulse03Label: {
    en: 'CITIZEN INTAKE QUEUE',
    hi: 'नागरिक शिकायत कतार'
  },
  pulse04Label: {
    en: 'UNANSWERED PUBLIC QUESTIONS',
    hi: 'उत्तरहीन सार्वजनिक प्रश्न'
  },

  // Community Members Strip
  communityBadge: {
    en: 'PUBLIC OBSERVERS & COMMUNITY LEADS',
    hi: 'सार्वजनिक पर्यवेक्षक व प्रतिनिधि'
  },
  communityTitle: {
    en: 'COMMUNITY REPRESENTATIVES',
    hi: 'सामुदायिक प्रतिनिधिमंडल'
  },

  // Featured Story
  featuredLabel: {
    en: 'FEATURED DISPATCH',
    hi: 'विशेष संपादकीय'
  },
  featuredDate: {
    en: 'AUG 25, 2026',
    hi: '25 अगस्त 2026'
  },
  featuredTitle: {
    en: 'WHEN THE SYSTEM DISCOVERS THE PEOPLE ARE PAYING ATTENTION',
    hi: 'जब व्यवस्था को पता चलता है कि जनता सवाल पूछ रही है'
  },
  featuredSummary: {
    en: 'An empirical investigation into what happens when citizens start reading Section 4 RTI filings, auditing subterranean sewer clearance depths, and checking contractor road warranty notice boards.',
    hi: 'एक गहन विश्लेषण कि जब नागरिक धारा 4 आरटीआई फाइलों को पढ़ना शुरू करते हैं और ठेकेदार वारंटी बोर्ड की जांच करते हैं तो क्या होता है।'
  },
  btnReadDispatch: {
    en: 'READ FEATURED DISPATCH →',
    hi: 'संपादकीय पढ़ें →'
  },
  btnViewAllStories: {
    en: 'VIEW ALL DISPATCHES',
    hi: 'सभी लेख देखें'
  },

  // Big Typography Statement
  bigStatementLine1: {
    en: "WE DON'T NEED LOUDER NOISE.",
    hi: 'हमें अधिक शोर की आवश्यकता नहीं है।'
  },
  bigStatementLine2: {
    en: 'WE NEED BETTER QUESTIONS.',
    hi: 'हमें बेहतर सवालों की आवश्यकता है।'
  },

  // Core Ideas / 5 Things
  fiveIdeasTitle: {
    en: 'THE FIVE CIVIC PILLARS WE STAND FOR',
    hi: 'हमारे 5 मुख्य नागरिक स्तंभ'
  },
  idea1Title: {
    en: 'SUBTERRANEAN SEWER DESILTING AUDITS',
    hi: 'भूमिगत सीवर सफाई ऑडिट'
  },
  idea1Desc: {
    en: 'Mandatory pre-monsoon mechanized drain desilting with geotagged online clearance depth logs published open to the public.',
    hi: 'बारिश से पहले मशीनीकृत सीवर सफाई और सार्वजनिक जीआईएस गहराई लॉग की अनिवार्य आवश्यकता।'
  },
  idea2Title: {
    en: '3-YEAR CONTRACTOR ROAD WARRANTY BOARDS',
    hi: '3-वर्षीय ठेकेदार वारंटी सूचना बोर्ड'
  },
  idea2Desc: {
    en: 'Physical notice boards on all public paving sites displaying contractor liability contact info, warranty expiration dates, and PWD engineer numbers.',
    hi: 'सभी सड़क निर्माण स्थलों पर ठेकेदार की जिम्मेदारी और संपर्क नंबर वाला भौतिक बोर्ड लगाना अनिवार्य।'
  },
  idea3Title: {
    en: 'DRINKING WATER PURITY & TDS KIOSKS',
    hi: 'घरेलू पेयजल टीडीएस जांच कियोस्क'
  },
  idea3Desc: {
    en: 'Free rapid volunteer TDS and chlorine testing hubs set up in transit centers to check household tap water safety.',
    hi: 'सार्वजनिक स्थानों पर घरेलू नल के पानी की टीडीएस व क्लोरीन शुद्धता जांचने वाले नि:शुल्क कियोस्क।'
  },
  idea4Title: {
    en: 'DIRECT SANITATION WORKER WAGES',
    hi: 'सफाई कर्मचारियों का सीधा बैंक भुगतान'
  },
  idea4Desc: {
    en: 'Direct municipal bank wage transfers to eliminate middleman contractor deductions and mandate safety equipment.',
    hi: 'ठेकेदार बिचौलियों को हटाकर सफाई कर्मियों को सीधे बैंक भुगतान और पूर्ण सुरक्षा उपकरण देना।'
  },
  idea5Title: {
    en: 'OPEN RTI DIGITIZATION & ZERO PAYWALLS',
    hi: 'खुला आरटीआई पोर्टल व मुफ्त बजट डेटा'
  },
  idea5Desc: {
    en: 'Zero paywall digital access to ward budgets, tender ledgers, and contractor bill-of-quantities under Section 4 RTI mandates.',
    hi: 'धारा 4 आरटीआई के तहत सभी वार्ड बजटों और निविदा दस्तावेजों को बिना शुल्क उपलब्ध कराना।'
  },
  btnReadFullManifesto: {
    en: 'READ FULL 5-POINT MANIFESTO →',
    hi: 'पूरा 5-सूत्रीय घोषणापत्र पढ़ें →'
  },

  // Split Manifesto
  manifestoSplitLeft: {
    en: 'THE CIVIC CHARTER',
    hi: 'नागरिक अधिकार पत्र'
  },
  manifestoStatement: {
    en: '“Questions become powerful when people stop being afraid to ask them.”',
    hi: '“सवाल तब शक्तिशाली बनते हैं जब लोग उन्हें पूछने से डरना बंद कर देते हैं।”'
  },
  manifestoPara: {
    en: 'Our manifesto is not a political promise written for elections. It is a sharp civic audit toolkit for citizens who want transparent road warranties, clean tap water, and open public records.',
    hi: 'हमारा घोषणापत्र चुनावों के लिए नहीं लिखा गया है। यह नागरिकों के लिए एक व्यावहारिक ऑडिट टूलकिट है।'
  },
  btnOpenManifesto: {
    en: 'OPEN MANIFESTO →',
    hi: 'घोषणापत्र खोलें →'
  },

  // Videos
  videoTitle: {
    en: 'THE SWARM ON CAMERA',
    hi: 'द स्वार्म ऑन कैमरा (मीडिया)'
  },
  videoSubtitle: {
    en: 'Commentary, street interviews, explainers, and internet dispatches.',
    hi: 'वीडियो टिप्पणियाँ, ग्राउंड इंटरव्यू और नागरिक रिपोर्ट।'
  },
  btnWatchVideo: {
    en: 'WATCH VIDEO →',
    hi: 'वीडियो देखें →'
  },

  // Journal
  journalTitle: {
    en: 'THE COCKROACH JANTA PARTY JOURNAL',
    hi: 'कॉकरोच जनता पार्टी जर्नल व पत्रिका'
  },
  journalSubtitle: {
    en: 'Long reads for people who still have questions after the headline disappears.',
    hi: 'गहन अध्ययन उनके लिए जो सुर्खियों के बाद भी सवाल पूछते हैं।'
  },

  // Quote / Spirit
  quoteLabel: {
    en: 'OUR CORE PHILOSOPHY',
    hi: 'हमारा मुख्य दर्शन'
  },
  quoteText: {
    en: '“We do not need more speeches. We need to measure the sewer desilting depth and check the contractor’s warranty date.”',
    hi: '“हमें और भाषणों की आवश्यकता नहीं है। हमें सीवर सफाई की गहराई मापने और ठेकेदार की वारंटी जांचने की आवश्यकता है।”'
  },
  btnExploreSpirit: {
    en: 'EXPLORE OUR VISION →',
    hi: 'हमारा दृष्टिकोण समझें →'
  },

  // Support Server
  serverAliveTitle: {
    en: 'KEEP THE SERVER & KIOSKS ALIVE',
    hi: 'सर्वर और कियोस्क को सक्रिय रखें'
  },
  serverAliveCopy: {
    en: 'Cockroach Janta Party runs on zero corporate backing. Volunteer initiatives are supported by micro-contributions from awake citizens.',
    hi: 'कॉकरोच जनता पार्टी बिना किसी कॉर्पोरेट बैकअप के चलती है। स्वयंसेवी पहल जागरूक नागरिकों द्वारा समर्थित हैं।'
  },
  demoTiersLabel: {
    en: 'VOLUNTEER SUPPORT TIERS',
    hi: 'स्वयंसेवक सहायता स्तर'
  },

  // Why Exists
  whyExistsTitle: {
    en: 'WHY THIS PROJECT EXISTS',
    hi: 'यह परियोजना क्यों अस्तित्व में है'
  },

  // Qualification / Eligibility
  qualifyTitle: {
    en: 'DO YOU QUALIFY FOR THE SWARM?',
    hi: 'क्या आप दल के लिए पात्र हैं?'
  },
  qualifyIntro: {
    en: 'You don’t need an official membership card. If you ask these questions, you are already part of the swarm.',
    hi: 'आपको किसी आधिकारिक कार्ड की आवश्यकता नहीं है। यदि आप ये सवाल पूछते हैं, तो आप पहले से ही दल का हिस्सा हैं।'
  },
  qual1Title: {
    en: 'YOU ASK QUESTIONS',
    hi: 'आप सवाल पूछते हैं'
  },
  qual1Desc: {
    en: 'You refuse to accept rubber-stamp answers from municipal offices.',
    hi: 'आप नगर निगम कार्यालयों से रटंत उत्तर स्वीकार नहीं करते।'
  },
  qual2Title: {
    en: 'YOU CHECK RECEIPTS',
    hi: 'आप रसीदें जांचते हैं'
  },
  qual2Desc: {
    en: 'You inspect road paving warranty boards before monsoon rains.',
    hi: 'आप बारिश से पहले सड़क निर्माण वारंटी बोर्ड का निरीक्षण करते हैं।'
  },
  qual3Title: {
    en: 'YOU SUPPORT YOUTH',
    hi: 'आप युवाओं का समर्थन करते हैं'
  },
  qual3Desc: {
    en: 'You believe public classrooms are opportunity engines, not elimination tests.',
    hi: 'आप मानते हैं कि कक्षाएं अवसर का जरिया हैं, न कि परीक्षा मात्र।'
  },
  qual4Title: {
    en: 'YOU DEMAND RTI ACCESS',
    hi: 'आप आरटीआई का उपयोग करते हैं'
  },
  qual4Desc: {
    en: 'You advocate for zero-paywall digital publishing of public tender ledgers.',
    hi: 'आप सार्वजनिक निविदा बजट को मुफ्त ऑनलाइन देखने की वकालत करते हैं।'
  },
  btnJoinCommunity: {
    en: 'REGISTER AS COMMUNITY OBSERVER →',
    hi: 'पर्यवेक्षक के रूप में जुड़ें →'
  },

  // Visual Swarm
  visualSwarmTitle: {
    en: 'THE VISUAL SWARM',
    hi: 'द विजुअल स्वार्म (ग्राफिक्स)'
  },
  visualSwarmSubtitle: {
    en: 'Editorial posters, satire graphics, and print-inspired civic visual art.',
    hi: 'संपादकीय पोस्टर, व्यंग्य ग्राफिक्स और पोस्टर कला।'
  },

  // Complaint Desk
  complaintDeskTitle: {
    en: 'THE CIVIC COMPLAINT DESK',
    hi: 'नागरिक शिकायत डेस्क'
  },
  complaintDeskSubtitle: {
    en: 'Log a broken road, blocked drain, or missing warranty notice board in your ward.',
    hi: 'अपने वार्ड में टूटी सड़क, अवरुद्ध सीवर या गायब वारंटी बोर्ड दर्ज करें।'
  },

  // FAQ
  faqTitle: {
    en: 'QUESTIONS PEOPLE KEEP ASKING',
    hi: 'अक्सर पूछे जाने वाले प्रश्न'
  },

  // Final CTA
  finalCtaHeadline: {
    en: 'TURN APATHY INTO CIVIC ACTION',
    hi: 'उदासीनता को नागरिक कार्य में बदलें'
  },
  finalCtaSupporting: {
    en: 'Join thousands of student observers, RTI advocates, and neighborhood residents across 45 metro sectors.',
    hi: '45 मेट्रो क्षेत्रों के हजारों छात्र पर्यवेक्षकों और आरटीआई कार्यकर्ताओं के साथ जुड़ें।'
  },

  // Footer & Miscellaneous
  footerDesc: {
    en: 'An independent youth-focused civic movement advocating for transparent municipal governance, drain desilting audits, contractor road warranties, and open RTI disclosures.',
    hi: 'पारदर्शी नगरपालिका शासन, सीवर सफाई ऑडिट, 3-वर्षीय ठेकेदार वारंटी और खुले आरटीआई खुलासे की वकालत करने वाला एक स्वतंत्र युवा नागरिक आंदोलन।'
  },
  footerCopyright: {
    en: '© 2026 COCKROACH JANTA PARTY (CJP) · ALL RIGHTS RESERVED · SATIRE & CIVIC COMMENTARY',
    hi: '© 2026 कॉकरोच जनता पार्टी (CJP) · सर्वाधिकार सुरक्षित · स्वतंत्र व्यंग्य व नागरिक टिप्पणी'
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      return key;
    }
    return translations[key][lang] || translations[key].en;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
