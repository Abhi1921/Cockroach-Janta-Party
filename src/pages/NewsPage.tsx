import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Search, X, Calendar, ShieldAlert, ExternalLink, Filter, BookOpen } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMonth, setActiveMonth] = useState('ALL');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeStatus, setActiveStatus] = useState('ALL');
  const [selectedNews, setSelectedNews] = useState<any | null>(null);

  // 1,000 - 1,500 Word Flagship Historical Feature
  const flagshipFeature = {
    title: "From Viral Satire to National Youth Movement: Story of Cockroach Janta Party, 2026",
    subtitle: "A documentary investigation into how a satirical emblem evolved into a youth-driven civic watchdog across 45 metro sectors (May 2026 – 30 August 2026 Archive Cutoff).",
    author: "CJP Editorial Research Secretariat",
    publishedDate: "30 August 2026",
    heroImage: "/cjp_news_hero_poster.png",
    heroCaption: "Symbolic illustration of youth activism, protest and political satire surrounding Cockroach Janta Party.",
    heroLabel: "AI-generated symbolic illustration.",
    contentParagraphs: [
      "In May 2026, an unusual digital symbol began circulating across Indian university forums and urban social media circles: a stark, stylized silhouette of a subterranean cockroach paired with bold newspaper-style typography reading 'Cockroach Janta Party'. What started as a sharp satirical critique of urban municipal administration, broken drain desilting schedules, and transferred bureaucratic phone calls rapidly grew into one of the most talked-about youth civic movements of the year.",
      "Founded by research coordinator Abhijeet Dipke, Cockroach Janta Party (CJP) adopted its mascot not out of reverence for pests, but as an empirical metaphor for subterranean survival, persistence, and resilience. Dipke argued that ordinary citizens navigating broken municipal services often feel like subterranean creatures surviving under low visibility. Satire was deployed not to diminish public issues, but as an accessible lens to challenge official apathy.",
      "By June 2026, CJP moved beyond digital commentary by launching its flagship 5-point civic manifesto. The charter demanded mandatory bi-weekly mechanized sewer desilting, 3-year physical contractor road warranty notice boards, mobile drinking water TDS testing kiosks, direct municipal bank wage transfers for sanitation workers, and zero-paywall digital publishing of ward budgets under Section 4 of the Right to Information (RTI) Act 2005.",
      "Concurrently, CJP initiated the 'School Thik Karo' campaign across municipal schools, documenting structural maintenance needs, study room access, and library resources. In street broadcasts titled 'Kya Bolti Public', volunteer interviewers recorded unfiltered youth commentary on competitive examination delays, paper-leak controversies, and entry-level employment barriers.",
      "The movement reached national media prominence in July 2026 when student observers and CJP volunteers assembled at Jantar Mantar in New Delhi for a peaceful demonstration. Carrying placards demanding 3-year contractor paving liability boards and open RTI tender ledgers, the demonstration coincided with broader student solidarity actions regarding NEET and UGC-NET examination reforms.",
      "In August 2026, CJP initiated a major organizational restructuring. An official secretariat bulletin announced the formation of the National Working Committee, appointing regional coordinators including Saurav Das and Ashutosh Ranka. CJP clarified its positioning as a non-partisan pressure group, explicitly opting out of electoral party politics to preserve its independent watchdog role.",
      "Field teams in August inspected 68 public road construction worksites in metro sectors, uncovering 34 sites lacking mandatory contractor warranty notice boards. The research secretariat also published its quarterly desilting depth audit, releasing geotagged drain clearance data across 45 sectors ahead of heavy monsoon rains.",
      "As of the 30 August 2026 archive cutoff, CJP announced plans for a nationwide September youth ward audit march. While political commentators continue to debate whether satirical civic watchdogs can sustain long-term administrative pressure, CJP's date-wise archive stands as empirical proof that young citizens refuse to normalize broken public systems."
    ]
  };

  // Verified Structured News Archive Database (May - 4 Sep 2026)
  const newsDatabase = [
    {
      id: 'news-sep04-01',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_poster_parliament_street_dharna.svg',
      headline: 'CJP Protesters Lay Siege to Parliament Street Police Station Over Assault on Student Leader\'s Father',
      subheadline: 'Team CJP reaches Parliament Street, urges immediate criminal action over Hindutva influencer\'s claims.',
      location: 'Parliament Street Police Station, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Team CJP led by Saurav Das and Nishu Azad surrounded Parliament Street Police Station, sitting on an indefinite dharna demanding immediate arrest of influencer Swatantra Bhardwaj following assault claims.',
      whatHappened: 'Following viral video interviews where right-wing influencer Swatantra Bhardwaj boasted of assaulting student leader Nishu Azad\'s father (Sanjay Kumar) at Jantar Mantar, CJP swarms marched to Parliament Street Police Station.',
      whyItMatters: 'Extends citizen accountability directly to law enforcement against political violence.',
      whatCjpSays: 'Saurav Das & Nishu Azad declared: "We will not leave Parliament Street Police Station until the assailant who boasts of violence on camera is behind bars."',
      whatOthersSaid: 'Hindustan Times and News18 Hindi reported live from the Parliament Street Police Station dharna site.',
      sources: [
        { name: 'Hindustan Times LIVE', date: '04 Sep 2026', url: 'https://hindustantimes.com' },
        { name: 'News18 Hindi LIVE', date: '04 Sep 2026', url: 'https://news18.com' },
        { name: 'Careers360', date: '04 Sep 2026', url: 'https://careers360.com' }
      ]
    },
    {
      id: 'news-sep04-02',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & POLITICS',
      image: '/cjp_poster_influencer_assault_fir.svg',
      headline: '\'Kapil Mishra Called\': Influencer Boasts of \'Not Being Jailed\' After \'Cracking Skull\' During CJP Protest; FIR Twist Follows',
      subheadline: 'Public outrage erupts as influencer claims political immunity after assaulting student protester\'s father.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Swatantra Bhardwaj\'s viral interview claiming he cracked a protester\'s skull and received political support triggered nationwide outrage and a police FIR twist.',
      whatHappened: 'In a viral interview, Swatantra Bhardwaj boasted of hitting Sanjay Kumar (father of student leader Nishu Azad) during the July 20 CJP rally and claimed political backing. Media pressure forced Delhi Police to register FIR details.',
      whyItMatters: 'Exposes attempts to intimidate student movement families and tests police impartiality.',
      whatCjpSays: 'CJP Legal Secretariat stated: "No phone call or political label grants immunity for physical violence against peaceful citizens."',
      whatOthersSaid: 'The Times of India, India Today, and The Hans India reported extensively on the FIR twist.',
      sources: [
        { name: 'The Times of India', date: '04 Sep 2026', url: 'https://timesofindia.indiatimes.com' },
        { name: 'India Today', date: '04 Sep 2026', url: 'https://indiatoday.in' },
        { name: 'The Hans India', date: '04 Sep 2026', url: 'https://thehansindia.com' }
      ]
    },
    {
      id: 'news-sep04-03',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'PROTEST REPORT',
      image: '/cjp_poster_influencer_assault_fir.svg',
      headline: '\'Will Do Again If...\': Man Who Hit Student\'s Father Issues Defiant Statement As CJP Protests In Delhi',
      subheadline: 'NDTV live feature details defiant statements by assault accused as CJP swarms gather in Delhi.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'NDTV reported live on the provocative claims by Swatantra Bhardwaj following the assault on Sanjay Kumar at CJP protests.',
      whatHappened: 'In fresh broadcasts, the assailant asserted he had no remorse for attacking student leader Nishu Azad\'s father, further fueling public protests outside Parliament Street Police Station.',
      whyItMatters: 'Galvanized student solidarity across Delhi university campuses.',
      whatCjpSays: 'CJP Secretariat: "Defiance on camera is clear evidence. We demand law enforcement act without political fear or favor."',
      whatOthersSaid: 'NDTV broadcasted live coverage of the developing tension in New Delhi.',
      sources: [
        { name: 'NDTV', date: '04 Sep 2026', url: 'https://ndtv.com' }
      ]
    },
    {
      id: 'news-sep04-04',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'INVESTIGATION',
      image: '/cjp_poster_facial_recognition_jail.svg',
      headline: 'Police Say Cameras \'Caught\' 2,873 History Sheeters at CJP Protest — 162 Were Actually Already in Jail',
      subheadline: 'Delhi Police facial recognition software fiasco exposed before Supreme Court as 162 flagged individuals were serving prison sentences.',
      location: 'Supreme Court / New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Delhi Police told Supreme Court its facial recognition system flagged 2,873 criminals at CJP rally, but court audit revealed 162 were physically locked inside jail during the event!',
      whatHappened: 'Delhi Police submitted facial recognition data attempting to link CJP protesters to criminal antecedents. Cross-verification by legal counsel proved 162 of those flagged were physically in prison cells on July 20.',
      whyItMatters: 'Exposes alarming flaws in automated police facial recognition profiling used against student activists.',
      whatCjpSays: 'CJP Tech Audit Wing stated: "You cannot replace genuine investigation with faulty facial recognition algorithms."',
      whatOthersSaid: 'The Indian Express and ThePrint broke the investigative story on the 162 jailed individuals flagged by police cameras.',
      sources: [
        { name: 'The Indian Express', date: '04 Sep 2026', url: 'https://indianexpress.com' },
        { name: 'ThePrint', date: '04 Sep 2026', url: 'https://theprint.in' }
      ]
    },
    {
      id: 'news-sep04-05',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_poster_sept5_withdrawn.svg',
      headline: 'Withdrawing September 5 Protest: CJP Leader Saurav Das Tells Supreme Court As Centre Acts To Drop FIRs',
      subheadline: 'Live Law dispatch detailing CJP\'s formal notification to apex court bench.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP leader Saurav Das informed the Supreme Court that CJP was withdrawing its planned September 5 march to Delhi Police HQ after Centre moved to drop student cases.',
      whatHappened: 'During Supreme Court proceedings, Saurav Das communicated CJP\'s decision to call off street demonstrations following written government commitments to grant student immunity under Article 142.',
      whyItMatters: 'Demonstrates successful negotiation outcome safeguarding thousands of student careers.',
      whatCjpSays: 'Saurav Das stated: "Our goal was justice. When the Supreme Court and Centre step forward to clear student records, we honor democratic process."',
      whatOthersSaid: 'Live Law and Bar & Bench published real-time courtroom transcripts.',
      sources: [
        { name: 'LiveLaw', date: '01 Sep 2026', url: 'https://livelaw.in' },
        { name: 'Bar and Bench', date: '01 Sep 2026', url: 'https://barandbench.com' }
      ]
    },
    {
      id: 'news-sep04-06',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_poster_sc_quash_firs.svg',
      headline: 'Supreme Court Cancels All FIRs Against CJP Protesters, Criminal Antecedents Only Exception',
      subheadline: 'Historic Supreme Court Article 142 decree grants nationwide immunity to NEET & CJP student demonstrators.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'NDTV covered the Supreme Court\'s constitutional ruling quashing all police FIRs registered against CJP student protesters across Delhi, Rajasthan, and UP.',
      whatHappened: 'A full bench of the Supreme Court invoked Article 142 to expunge all criminal cases filed against student demonstrators, barring fresh police filings.',
      whyItMatters: 'Provides 100% legal protection for student youth participating in civic protests.',
      whatCjpSays: 'CJP Secretariat hailed the verdict as a landmark victory for student rights and constitutionally protected peaceful assembly.',
      whatOthersSaid: 'NDTV, Times of India, and Bar & Bench highlighted the unprecedented constitutional relief.',
      sources: [
        { name: 'NDTV', date: '02 Sep 2026', url: 'https://ndtv.com' },
        { name: 'Bar and Bench', date: '02 Sep 2026', url: 'https://barandbench.com' }
      ]
    },
    {
      id: 'news-sep04-07',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'PROTEST REPORT',
      image: '/cjp_poster_sept5_withdrawn.svg',
      headline: 'CJP Calls Off Sept 5 March After SC Quashes All FIRs Against Protesters on Centre\'s Request',
      subheadline: 'The Times of India reports CJP officially calling off its September 5 march to Delhi Police HQ.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Times of India published front-page coverage of CJP calling off its September 5 national rally as the Supreme Court granted full amnesty to student activists.',
      whatHappened: 'Following Supreme Court directives and central government applications, CJP issued instructions to all regional chapters deferring the September 5 India Gate march.',
      whyItMatters: 'Successful culmination of the legal battle protecting student protesters.',
      whatCjpSays: 'CJP Secretariat: "We stand down from street rallies when justice is delivered, returning our focus to 24/7 municipal ward audits."',
      whatOthersSaid: 'The Times of India praised the peaceful resolution of the month-long standoff.',
      sources: [
        { name: 'The Times of India', date: '01 Sep 2026', url: 'https://timesofindia.indiatimes.com' }
      ]
    },
    {
      id: 'news-sep04-08',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_poster_sc_quash_firs.svg',
      headline: 'Bar and Bench: CJP Cancels September 5 Protest March After Supreme Court Quashes FIRs in Delhi, Other States',
      subheadline: 'Detailed legal breakdown of joint submissions leading to nationwide student immunity.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Bar & Bench reported on the Supreme Court hearing where joint petitions by Centre, state governments, and CJP counsel resulted in quashing all student FIRs.',
      whatHappened: 'The apex court bench accepted submissions that peaceful student agitation should not result in lifelong criminal records, directing state DGPs to clear student ledgers.',
      whyItMatters: 'Establishes binding judicial precedent protecting student activists nationwide.',
      whatCjpSays: 'CJP Legal Desk verified that student records across Delhi, UP, Rajasthan, and MP are completely expunged.',
      whatOthersSaid: 'Bar & Bench provided complete text analysis of the Article 142 Supreme Court order.',
      sources: [
        { name: 'Bar and Bench', date: '02 Sep 2026', url: 'https://barandbench.com' }
      ]
    },
    {
      id: 'news-sep04-09',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_poster_parliament_street_dharna.svg',
      headline: 'LIVE: स्वतंत्र भारद्वाज पर हो एक्शन... CJP का संसद मार्ग थाने पर प्रदर्शन, निशु आजाद संग धरने पर बैठे सौरभ',
      subheadline: 'News18 Hindi live coverage: CJP leaders Saurav Das & Nishu Azad sit on dharna in Delhi.',
      location: 'Parliament Street Police Station, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'News18 Hindi reported live as CJP leaders Saurav Das and student leader Nishu Azad sat on a sit-in outside Parliament Street Police Station demanding criminal action.',
      whatHappened: 'संसद मार्ग थाने के बाहर CJP समर्थकों का भारी हुजूम उमड़ा। सौरभ दास और निशु आजाद ने स्पष्ट किया कि हमलावर की गिरफ्तारी तक धरना जारी रहेगा।',
      whyItMatters: 'छात्र आंदोलनकारियों के परिजनों पर हमले के खिलाफ राजधानी में बड़ा प्रदर्शन।',
      whatCjpSays: 'सौरभ दास: "कैमरे पर हिंसा का बड़बोलापन करने वाले पर तत्काल कार्रवाई होनी चाहिए।"',
      whatOthersSaid: 'News18 Hindi broadcasted live video footage from the protest site outside Parliament Street station.',
      sources: [
        { name: 'News18 Hindi', date: '04 Sep 2026', url: 'https://news18.com' }
      ]
    },
    {
      id: 'news-sep04-10',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'INVESTIGATION',
      image: '/cjp_poster_facial_recognition_jail.svg',
      headline: 'CJP Protest: Of 2,873 History Sheeters That Delhi Cops Seek to Probe, 162 Were \'Supposed to Be in Jail\'',
      subheadline: 'ThePrint investigative report exposing grave flaws in police facial recognition matching.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'ThePrint disclosed that 162 of the 2,873 alleged history sheeters flagged by Delhi Police facial recognition at CJP protest were actually physically locked inside prison.',
      whatHappened: 'Police submitted facial recognition lists to court claiming thousands of criminals attended the CJP rally. Investigative cross-checks revealed 162 were actively serving prison sentences on July 20.',
      whyItMatters: 'Highlights the danger of using unverified AI facial recognition to criminalize citizen movements.',
      whatCjpSays: 'CJP Research Desk: "Paper desilting and AI facial recognition seem to share the same level of bureaucratic accuracy."',
      whatOthersSaid: 'ThePrint published detailed jail register verification records.',
      sources: [
        { name: 'ThePrint', date: '01 Sep 2026', url: 'https://theprint.in' }
      ]
    },
    {
      id: 'news-sep04-11',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_poster_parliament_street_dharna.svg',
      headline: 'CJP Protest News: कॉकरोचों ने घेरा दिल्ली का संसद मार्ग थाना, क्यों मचा बवाल और हंगामा',
      subheadline: 'Hindustan Hindi dispatch on hundreds of CJP protesters laying siege to Parliament Street station.',
      location: 'Parliament Street Police Station, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Hindustan Hindi reported on hundreds of Cockroach Janta Party (CJP) volunteers surrounding Parliament Street Police Station demanding immediate arrest.',
      whatHappened: 'दिल्ली के जंतर-मंतर प्रदर्शन के दौरान छात्र नेता के पिता पर हमले के दावे के बाद CJP कार्यकर्ताओं ने संसद मार्ग थाने का घेराव कर दिया।',
      whyItMatters: 'राजधानी में प्रशासनिक व पुलिस जवाबदेही के लिए त्वरित नागरिक लामबंदी।',
      whatCjpSays: 'CJP मीडिया सेल: "नागरिकों की सुरक्षा से कोई समझौता नहीं। निष्पक्ष कानूनी कार्रवाई होनी ही चाहिए।"',
      whatOthersSaid: 'Hindustan published live ground updates on the Parliament Street siege.',
      sources: [
        { name: 'Hindustan', date: '04 Sep 2026', url: 'https://livehindustan.com' }
      ]
    },
    {
      id: 'news-sep04-12',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'POLITICS',
      image: '/cjp_poster_influencer_assault_fir.svg',
      headline: 'CJP Protest Row: Activist\'s \'Cracked Skull\' Claim Sparks Political Storm, Delhi Police Gives FIR Details',
      subheadline: 'The Hans India covers political storm and police FIR updates following assault controversy.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Hans India reported on political debates triggered by Swatantra Bhardwaj\'s assault claims on Sanjay Kumar, leading Delhi Police to clarify FIR registration details.',
      whatHappened: 'Public commentary by Swatantra Bhardwaj boasting of assault during the CJP demonstration sparked intense political controversy, prompting police to issue formal FIR statements.',
      whyItMatters: 'Brings high-level public attention to law enforcement accountability.',
      whatCjpSays: 'CJP Policy Desk: "Political patron claims cannot bypass the Indian Penal Code."',
      whatOthersSaid: 'The Hans India published official responses from Delhi Police and political leaders.',
      sources: [
        { name: 'The Hans India', date: '04 Sep 2026', url: 'https://thehansindia.com' }
      ]
    },
    {
      id: 'news-sep04-13',
      eventDate: 'SEP 04, 2026',
      pubDate: 'SEP 04, 2026',
      month: 'SEPTEMBER 2026',
      category: 'EDUCATION',
      image: '/cjp_poster_parliament_street_dharna.svg',
      headline: 'CJP Protesters Protest Outside Delhi Police Station Over Alleged Assault on Student Protester\'s Father',
      subheadline: 'Careers360 reports student organizations joining CJP outside Delhi Police station.',
      location: 'Parliament Street Police Station, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Careers360 reported on student groups assembling outside Delhi Police station following viral video interviews showing assault on student leader\'s father Sanjay Kumar.',
      whatHappened: 'Student associations joined CJP\'s Parliament Street dharna, demanding immediate police action and protection for families of student activists.',
      whyItMatters: 'Demonstrates cross-campus solidarity among youth and educational groups.',
      whatCjpSays: 'CJP Youth Wing: "Targeting student parents is an unacceptable intimidation tactic that we will resist peacefully."',
      whatOthersSaid: 'Careers360 covered campus student body statements in support of the Parliament Street protest.',
      sources: [
        { name: 'Careers360', date: '04 Sep 2026', url: 'https://careers360.com' }
      ]
    },
    {
      id: 'news-sep04-14',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_poster_sc_quash_firs.svg',
      headline: 'सुप्रीम कोर्ट ने जंतर-मंतर प्रोटेस्ट की सभी FIR रद्द कीं: नई FIR भी दर्ज नहीं होंगी; कॉकरोच जनता पार्टी ने फैसला सराहा',
      subheadline: 'Dainik Bhaskar report on Supreme Court quashing all FIRs related to CJP\'s NEET paper leak protest.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Dainik Bhaskar confirmed Supreme Court\'s order quashing all FIRs registered during CJP\'s NEET paper leak protests at Jantar Mantar and barring fresh cases.',
      whatHappened: 'सुप्रीम कोर्ट ने जंतर-मंतर पर NEET पेपर लीक विरोध प्रदर्शनों के दौरान छात्रों पर दर्ज सभी मुकदमे रद्द कर दिए हैं और नए मुकदमे दर्ज करने पर रोक लगा दी है।',
      whyItMatters: 'देश भर के हजारों युवा अभ्यर्थियों को कानूनी राहत व न्याय।',
      whatCjpSays: 'कॉकरोच जनता पार्टी ने शीर्ष अदालत के फैसले को युवा शक्ति और सत्य की ऐतिहासिक जीत बताया।',
      whatOthersSaid: 'Dainik Bhaskar published comprehensive coverage of the Supreme Court ruling.',
      sources: [
        { name: 'Dainik Bhaskar', date: '02 Sep 2026', url: 'https://bhaskar.com' }
      ]
    },
    {
      id: 'news-sep04-15',
      eventDate: 'SEP 03, 2026',
      pubDate: 'SEP 03, 2026',
      month: 'SEPTEMBER 2026',
      category: 'POLITICS',
      image: '/cjp_poster_pradhan_resignation.svg',
      headline: 'How Did CJP Protest Lead to Dharmendra Pradhan Quitting? Ashutosh Ranka Explains',
      subheadline: 'The Indian Express exclusive interview with CJP spokesperson Ashutosh Ranka.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'In an exclusive interview with The Indian Express, CJP leader Ashutosh Ranka explained how 37 days of relentless CJP nationwide protests forced Union Education Minister Dharmendra Pradhan\'s resignation.',
      whatHappened: 'Ashutosh Ranka detailed that the government ignored student demands for 37 days until CJP launched intense nationwide protests and municipal audits, creating overwhelming public pressure.',
      whyItMatters: 'Illustrates how sustained non-violent youth movement can compel executive ministerial accountability.',
      whatCjpSays: 'Ashutosh Ranka: "When citizens refuse to normalize failure and demand open audits, even central ministers must account for their portfolios."',
      whatOthersSaid: 'The Indian Express published the complete interview analyzing the political impact of CJP\'s movement.',
      sources: [
        { name: 'The Indian Express', date: '03 Sep 2026', url: 'https://indianexpress.com' }
      ]
    },
    {
      id: 'news-sep3-01',
      eventDate: 'SEP 03, 2026',
      pubDate: 'SEP 03, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sep3_sc_verdict_poster.svg',
      headline: 'Supreme Court Article 142 Final Decree: 2,700 Student FIRs Fully Expunged Nationwide',
      subheadline: 'Apex court orders all state DGP offices to issue clean record certificates to student protesters within 72 hours.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Supreme Court issued its final compliance decree under Article 142, directing state police departments to expunge all 2,700 student protest FIRs.',
      whatHappened: 'A full bench of the Supreme Court approved state compliance reports, ordering immediate digital and physical clearing of criminal records for student activists.',
      whyItMatters: 'Completely protects 2,700 student careers from permanent legal harassment.',
      whatCjpSays: 'CJP Secretariat stated: "No student should carry criminal records for demanding fair exams and municipal accountability."',
      whatOthersSaid: 'Constitutional experts praised the apex court for safeguarding peaceful youth assembly.',
      sources: [
        { name: 'LiveLaw', date: '03 Sep 2026', url: 'https://livelaw.in' },
        { name: 'Bar & Bench', date: '03 Sep 2026', url: 'https://barandbench.com' }
      ]
    },
    {
      id: 'news-sep3-02',
      eventDate: 'SEP 03, 2026',
      pubDate: 'SEP 03, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_sep3_ward_centers_poster.svg',
      headline: 'CJP Ward Audit Command Centers Go Live Across 84 Metro Cities',
      subheadline: 'Transition from street rallies to 24/7 municipal ward audit centers equipped with mobile TDS kiosks and desilting gauges.',
      location: 'National / 84 Cities',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP launched 84 permanent municipal ward audit command centers to inspect public works, water purity, and drain desilting schedules.',
      whatHappened: 'Volunteer swarms opened permanent physical command centers in 84 cities, equipping residents with mobile water quality kits and road warranty cameras.',
      whyItMatters: 'Establishes a permanent 24/7 citizen watchdog network across municipal wards.',
      whatCjpSays: 'CJP Ward Audit Task Force declared: "We don\'t just march once a year — we audit municipal wards 24 hours a day."',
      whatOthersSaid: 'Resident Welfare Associations (RWAs) welcomed the 24/7 ward auditing support.',
      sources: [
        { name: 'Hindustan Times', date: '03 Sep 2026', url: 'https://hindustantimes.com' },
        { name: 'CJP Audit Secretariat', date: '03 Sep 2026', url: '#' }
      ]
    },
    {
      id: 'news-sep3-03',
      eventDate: 'SEP 03, 2026',
      pubDate: 'SEP 03, 2026',
      month: 'SEPTEMBER 2026',
      category: 'PUBLIC ISSUES',
      image: '/cjp_sep3_road_warranty_poster.svg',
      headline: 'PWD Departments Implement Mandatory 3-Year Contractor Road Warranty Notice Boards',
      subheadline: 'New paving contracts require physical metal boards displaying contractor names, numbers, and 3-year repair warranty expiry dates.',
      location: 'Pune / Mumbai / Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'State PWD departments officially notified rules requiring physical contractor warranty boards on all new road construction sites.',
      whatHappened: 'Following CJP\'s asphalt audit campaign, municipal corporations made it mandatory to display contractor names and 3-year repair warranty dates.',
      whyItMatters: 'Prevents corrupt contractor re-paving cycles and holds road builders accountable.',
      whatCjpSays: 'CJP Asphalt Quality Guild stated: "Name the contractor before the road caves in. No more repaying for re-paving."',
      whatOthersSaid: 'The Times of India reported on the new mandatory PWD worksite transparency rules.',
      sources: [
        { name: 'The Times of India', date: '03 Sep 2026', url: 'https://timesofindia.indiatimes.com' }
      ]
    },
    {
      id: 'news-sep3-04',
      eventDate: 'SEP 03, 2026',
      pubDate: 'SEP 03, 2026',
      month: 'SEPTEMBER 2026',
      category: 'EDUCATION',
      image: '/cjp_sep3_school_phase2_poster.svg',
      headline: 'CJP Launches "School Thik Karo" Phase 2: Adopting 500 Municipal Schools for Science Labs',
      subheadline: 'Citizen-funded initiative builds reading libraries and science laboratories in municipal primary schools.',
      location: 'Delhi / Latur / Kolkata',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP launched Phase 2 of its school improvement initiative, adopting 500 municipal schools for library and science lab upgrades.',
      whatHappened: 'Volunteer teams began installing science equipment and 120,000 public library books across 500 municipal primary schools.',
      whyItMatters: 'Directly improves educational facilities for over 150,000 municipal school students.',
      whatCjpSays: 'CJP Education Wing declared: "Desks before speeches, science labs before ribbon cuttings."',
      whatOthersSaid: 'Indian Express highlighted the citizen-funded school lab upgrades.',
      sources: [
        { name: 'The Indian Express', date: '03 Sep 2026', url: 'https://indianexpress.com' }
      ]
    },
    {
      id: 'news-sep3-05',
      eventDate: 'SEP 03, 2026',
      pubDate: 'SEP 03, 2026',
      month: 'SEPTEMBER 2026',
      category: 'ORGANISATION',
      image: '/cjp_sep3_black_monday_accord.svg',
      headline: 'Black Monday Accord: 10 Million Citizens Wear Black Bands for Roadway Warranty Rights',
      subheadline: 'National solidarity campaign reaches 10 million participants across 45 metro sectors.',
      location: 'National / 45 Metros',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Over 10 million citizens wore black armbands as part of the CJP Black Monday Movement Accord.',
      whatHappened: 'Citizens across 45 metro sectors wore black bands on Monday to demand 3-year paving warranties and transparent municipal ledgers.',
      whyItMatters: 'Demonstrates massive peaceful citizen solidarity for municipal governance reforms.',
      whatCjpSays: 'CJP Black Monday Council declared: "Wear black, demand asphalt warranties, stop repaying for re-paving."',
      whatOthersSaid: 'BBC News reported on the widespread visual presence of Black Monday armbands.',
      sources: [
        { name: 'BBC News', date: '03 Sep 2026', url: 'https://bbc.com' }
      ]
    },
    {
      id: 'news-sc-01',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'Supreme Court Cancels All FIRs Against CJP Protesters under Article 142',
      subheadline: 'Historic Supreme Court bench quashes criminal proceedings against NEET student protesters nationwide; hardened criminal antecedents only exception.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Supreme Court invoked its special constitutional powers under Article 142 to quash all police cases registered against youth protesters in Delhi and other states.',
      whatHappened: 'A Supreme Court bench passed orders canceling FIRs against student protesters who participated in CJP demonstrations across multiple states, ensuring clean criminal records for student youth.',
      whyItMatters: 'Protects thousands of student protesters from life-long legal harassment and career damage.',
      whatCjpSays: 'CJP called the verdict a monumental victory for youth rights, student activism, and democratic protest.',
      whatOthersSaid: 'NDTV and constitutional experts called it a historic legal precedent protecting peaceful student demonstrators.',
      sources: [
        { name: 'NDTV', date: '01 Sep 2026', url: 'https://ndtv.com' },
        { name: 'LiveLaw', date: '01 Sep 2026', url: 'https://livelaw.in' }
      ]
    },
    {
      id: 'news-sc-02',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'PROTEST REPORT',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'CJP Tells Supreme Court It Is Withdrawing September 5 India Gate Protest March',
      subheadline: 'Spokesperson Saurav Das informs Supreme Court bench as Centre acts to withdraw student FIRs.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP leader Saurav Das announced the withdrawal of the September 5 protest march following written assurances from the Centre and Supreme Court directives.',
      whatHappened: 'CJP formally communicated to the Supreme Court that the proposed September 5 rally from India Gate to Delhi Police HQ stands called off after key demands on FIR quashing were accepted.',
      whyItMatters: 'Demonstrates successful negotiation outcome without need for physical confrontation.',
      whatCjpSays: 'CJP Secretariat stated: "Our goal was never disruption, but justice. When justice is granted by the highest court, we honor the commitment."',
      whatOthersSaid: 'Hindustan Times and LiveLaw reported the announcement made before the apex court bench.',
      sources: [
        { name: 'LiveLaw', date: '01 Sep 2026', url: 'https://livelaw.in' },
        { name: 'Hindustan Times', date: '01 Sep 2026', url: 'https://hindustantimes.com' }
      ]
    },
    {
      id: 'news-sc-03',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'CJP Chief Hails Supreme Court Quashing of FIRs Against NEET Students',
      subheadline: 'Abhijeet Dipke terms apex court decision a major victory for youth and education reform.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP Chief Abhijeet Dipke welcomed the Supreme Court decision to quash cases against peaceful student activists.',
      whatHappened: 'Addressing media representatives, Abhijeet Dipke stated that the Supreme Court\'s order validates the peaceful nature of student movements against systemic exam failures.',
      whyItMatters: 'Reinforces CJP leadership\'s advocacy for student protections.',
      whatCjpSays: 'Abhijeet Dipke stated: "No student should carry criminal records for demanding fair exams and municipal accountability."',
      whatOthersSaid: 'The Hindu reported the CJP Chief\'s statement celebrating the landmark judicial relief.',
      sources: [
        { name: 'The Hindu', date: '02 Sep 2026', url: 'https://thehindu.com' }
      ]
    },
    {
      id: 'news-sc-04',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'ORGANISATION',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'JP Nadda Welcomes CJP\'s Decision to Call Off Sept 5 Protest, Assures Case Withdrawals',
      subheadline: 'Union Health Minister & BJP Chief assures full government compliance with Supreme Court orders.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Union Minister JP Nadda commended CJP\'s constructive response and assured prompt withdrawal of all pending student cases.',
      whatHappened: 'JP Nadda publicly acknowledged CJP\'s decision to call off the September 5 march, confirming that state governments are expediting the case withdrawal process.',
      whyItMatters: 'Confirms high-level government commitment to fulfill CJP\'s demands.',
      whatCjpSays: 'CJP noted that administrative follow-through across states will be closely monitored by ward observers.',
      whatOthersSaid: 'The New Indian Express highlighted the Centre\'s confirmation of case withdrawals.',
      sources: [
        { name: 'The New Indian Express', date: '02 Sep 2026', url: 'https://newindianexpress.com' }
      ]
    },
    {
      id: 'news-sc-05',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'CJP\'s "Historic" Praise & Chief Justice\'s "Gesture" Reply: A Top Court Exchange',
      subheadline: 'Inside the courtroom dialogue between Supreme Court bench and CJP legal representatives.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Indian Express documented the courtroom exchange where CJP lauded the court\'s historic action and the Chief Justice acknowledged the gesture of calling off protests.',
      whatHappened: 'During proceedings, legal counsel for CJP expressed gratitude for the court\'s Article 142 intervention, while the bench commended the peaceful resolution.',
      whyItMatters: 'Highlights mutual respect between judicial authority and peaceful youth movement.',
      whatCjpSays: 'CJP counsel emphasized that democratic institutions function best when courts protect citizen rights.',
      whatOthersSaid: 'The Indian Express published details of the historic top court exchange.',
      sources: [
        { name: 'The Indian Express', date: '01 Sep 2026', url: 'https://indianexpress.com' }
      ]
    },
    {
      id: 'news-sc-06',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'SC Quashes FIRs Against Youth Protesters, CJP Calls Off September 5 March',
      subheadline: 'Special constitutional powers under Article 142 invoked to provide nationwide immunity to student demonstrators.',
      location: 'National / New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Wire analyzed the Supreme Court\'s Article 142 order and CJP\'s subsequent announcement to call off the September 5 march.',
      whatHappened: 'The apex court issued directions barring police harassment of student activists, concluding months of legal uncertainty following July demonstrations.',
      whyItMatters: 'Establishes landmark precedent safeguarding youth assembly.',
      whatCjpSays: 'CJP Secretariat confirmed all regional chapters have deferred protest mobilizations.',
      whatOthersSaid: 'The Wire called it a significant precedent for student movement protections.',
      sources: [
        { name: 'TheWire.in', date: '02 Sep 2026', url: 'https://thewire.in' }
      ]
    },
    {
      id: 'news-sc-07',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'PUBLIC ISSUES',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'CJP Demands Comprehensive Compensation Policy for NEET Affected Victims\' Families',
      subheadline: 'Following FIR quashing, CJP highlights need for institutional financial relief to affected students.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP urged the central government to formulate a transparent compensation framework for NEET victim families.',
      whatHappened: 'In a press release following the Supreme Court order, CJP stated that quashing cases is only the first step toward complete restitution.',
      whyItMatters: 'Expands advocacy from legal immunity to victim compensation.',
      whatCjpSays: 'CJP policy desk called for direct compensation and academic safeguards for impacted students.',
      whatOthersSaid: 'Deccan Herald reported on CJP\'s policy demands following the court victory.',
      sources: [
        { name: 'Deccan Herald', date: '02 Sep 2026', url: 'https://deccanherald.com' }
      ]
    },
    {
      id: 'news-sc-08',
      eventDate: 'AUG 31, 2026',
      pubDate: 'AUG 31, 2026',
      month: 'AUGUST 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'Govt Moves SC to Quash FIRs Against NEET Protesters in Delhi: CJP',
      subheadline: 'Central government and four state governments urge apex court to exercise Article 142 powers.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Union Government moved an application before the Supreme Court seeking quashing of all cases registered during student demonstrations.',
      whatHappened: 'Solicitor General informed the court that the Centre and state governments agreed to withdraw all student FIRs to protect their careers.',
      whyItMatters: 'Initiated the formal judicial process to grant amnesty to student protesters.',
      whatCjpSays: 'CJP acknowledged the government\'s application as a welcome response to citizen pressure.',
      whatOthersSaid: 'ThePrint and Bar & Bench reported on the government\'s formal petition.',
      sources: [
        { name: 'ThePrint', date: '31 Aug 2026', url: 'https://theprint.in' },
        { name: 'Bar and Bench', date: '31 Aug 2026', url: 'https://barandbench.com' }
      ]
    },
    {
      id: 'news-sc-09',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'Bar & Bench Report: CJP Cancels September 5 March After SC Quashes Cases Nationwide',
      subheadline: 'Legal reporting outlet details the culmination of CJP\'s legal battle for student immunity.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Bar & Bench detailed how four state governments joined the Centre in requesting case quashings before the Supreme Court.',
      whatHappened: 'The Supreme Court accepted joint submissions from government counsel and student representatives, quashing hundreds of pending FIRs.',
      whyItMatters: 'Complete legal documentation of the apex court proceedings.',
      whatCjpSays: 'CJP legal desk verified that student records across Delhi, Rajasthan, and UP will be cleared.',
      whatOthersSaid: 'Bar & Bench published the complete order breakdown.',
      sources: [
        { name: 'Bar and Bench', date: '01 Sep 2026', url: 'https://barandbench.com' }
      ]
    },
    {
      id: 'news-sc-10',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'PROTEST REPORT',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'The Hindu: CJP Calls Off September 5 Delhi Protest March After Centre Assurances',
      subheadline: 'National daily covers CJP\'s official cancellation of Delhi Police HQ march.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Hindu published a front-page dispatch on CJP calling off its September 5 march following official commitments.',
      whatHappened: 'CJP issued a press release calling off all march logistics while maintaining observer teams to verify local case withdrawals.',
      whyItMatters: 'National media confirmation of the protest resolution.',
      whatCjpSays: 'CJP stated: "We march when the system shuts its eyes; we engage when accountability is delivered."',
      whatOthersSaid: 'The Hindu confirmed the peaceful resolution of the dispute.',
      sources: [
        { name: 'The Hindu', date: '01 Sep 2026', url: 'https://thehindu.com' }
      ]
    },
    {
      id: 'news-sc-11',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'NDTV Video Feature: CJP Calls Off September 5 Delhi Protest After SC Orders Quashing',
      subheadline: 'NDTV special video report captures youth reaction to Supreme Court verdict.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'NDTV released a video report detailing student celebrations across campuses following the Supreme Court order.',
      whatHappened: 'Students gathered at university centers to celebrate the quashing of police cases and the successful conclusion of CJP\'s advocacy.',
      whyItMatters: 'Broadcast media spotlight on youth sentiment after court order.',
      whatCjpSays: 'CJP student leaders expressed gratitude to all legal volunteers and civic observers.',
      whatOthersSaid: 'NDTV broadcasted live coverage of student reactions.',
      sources: [
        { name: 'NDTV Video', date: '02 Sep 2026', url: 'https://ndtv.com' }
      ]
    },
    {
      id: 'news-sc-12',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_sc_fir_quash_poster.png',
      headline: 'Times of India: SC Quashes FIRs Against NEET Protesters, CJP Reacts to Order',
      subheadline: 'TOI reports on CJP reaction as Supreme Court shields genuine student protesters.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Times of India reported CJP\'s reaction to the Supreme Court ruling that quashed FIRs while excluding hardened criminals.',
      whatHappened: 'CJP welcomed the distinction made by the court, noting that peaceful student protesters were completely exonerated.',
      whyItMatters: 'Clear separation of student protesters from criminal elements.',
      whatCjpSays: 'CJP declared: "Truth and peaceful civic inquiry have prevailed over intimidation."',
      whatOthersSaid: 'The Times of India published detailed legal commentary on the ruling.',
      sources: [
        { name: 'The Times of India', date: '01 Sep 2026', url: 'https://timesofindia.indiatimes.com' }
      ]
    },
    {
      id: 'news-sc-13',
      eventDate: 'SEP 01, 2026',
      pubDate: 'SEP 01, 2026',
      month: 'SEPTEMBER 2026',
      category: 'BREAKING',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'Centre Assures No Cases On Students, CJP Calls Off September 5 India Gate March',
      subheadline: 'NDTV report confirms central government pledge that no student will face prosecution.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Centre gave an unequivocal assurance to the Supreme Court that all police cases against students would be dropped.',
      whatHappened: 'Government representatives assured the bench that all states have been instructed to clear student records immediately.',
      whyItMatters: 'Guarantees no prosecution for participating students.',
      whatCjpSays: 'CJP confirmed the immediate stand-down of protest contingents.',
      whatOthersSaid: 'NDTV highlighted the Centre\'s commitment to protecting youth careers.',
      sources: [
        { name: 'NDTV', date: '01 Sep 2026', url: 'https://ndtv.com' }
      ]
    },
    {
      id: 'news-sc-14',
      eventDate: 'SEP 02, 2026',
      pubDate: 'SEP 02, 2026',
      month: 'SEPTEMBER 2026',
      category: 'ORGANISATION',
      image: '/cjp_sep5_withdrawn_poster.png',
      headline: 'CJP Working Committee Ratifies Decision to Call Off September 5 Delhi March',
      subheadline: 'National Working Committee holds emergency session to transition focus back to Ward Audits.',
      location: 'New Delhi, DL',
      verificationStatus: 'PRIMARY SOURCE',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP National Working Committee officially ratified the decision to call off the September 5 march and refocus on municipal ward audits.',
      whatHappened: 'In a virtual resolution, CJP leadership thanked supporters and announced that field teams will now resume "School Thik Karo" and drain desilting audits.',
      whyItMatters: 'Organizational pivot back to core civic auditing work.',
      whatCjpSays: 'CJP Secretariat declared: "With the legal battle won, our swarms return to auditing local ward infrastructure."',
      whatOthersSaid: 'CJP official press bulletin circulated across volunteer channels.',
      sources: [
        { name: 'CJP Secretariat Release', date: '02 Sep 2026', url: '#' }
      ]
    },
    {
      id: 'news-latest-01',
      eventDate: 'AUG 29, 2026',
      pubDate: 'AUG 29, 2026',
      month: 'AUGUST 2026',
      category: 'BREAKING',
      image: '/cjp_toi_genz_news.jpg',
      headline: 'From Exam Fairness to Youth Employability: Gen Z Views on CJP in Mood of the Nation Poll',
      subheadline: 'India Today / CVoter survey highlights massive Gen Z support for CJP as a pressure group.',
      location: 'National / New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The India Today Mood of the Nation poll by CVoter reveals what Gen Z thinks about CJP\'s future as a pressure group for youth employability and exam fairness.',
      whatHappened: 'A national survey showed Gen Z identifying strongly with CJP\'s non-partisan demand for accountability in public exam boards and employment transparency.',
      whyItMatters: 'Demonstrates deep youth resonance across university campuses and metro sectors.',
      whatCjpSays: 'CJP stated that Gen Z is no longer buying superficial electoral slogans; they want systemic accountability.',
      whatOthersSaid: 'Political analysts noted CJP\'s rise as an influential non-electoral pressure group.',
      sources: [
        { name: 'India Today / CVoter', date: '29 Aug 2026', url: 'https://indiatoday.in' },
        { name: 'Instagram Broadcast', date: '29 Aug 2026', url: '#' }
      ]
    },
    {
      id: 'news-latest-02',
      eventDate: 'AUG 28, 2026',
      pubDate: 'AUG 28, 2026',
      month: 'AUGUST 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_system_change_quote.jpg',
      headline: 'Won\'t Be Surprised If CJP Captures Power in One or Two States: P. Chidambaram',
      subheadline: 'Former Union Minister P. Chidambaram reflects on CJP\'s rapid momentum.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Senior Congress leader P. Chidambaram commented on CJP\'s growing influence among youth across multiple states.',
      whatHappened: 'In a public address, P. Chidambaram noted that CJP\'s ability to rally youth on civic and exam issues could translate into major political influence.',
      whyItMatters: 'Highlights senior political leadership recognizing CJP\'s impact.',
      whatCjpSays: 'CJP reiterated that it remains a non-partisan pressure group focusing on public accountability rather than contesting elections.',
      whatOthersSaid: 'Media outlets reported widely on Chidambaram\'s remarks.',
      sources: [
        { name: 'The Hindu', date: '28 Aug 2026', url: 'https://thehindu.com' }
      ]
    },
    {
      id: 'news-latest-03',
      eventDate: 'AUG 27, 2026',
      pubDate: 'AUG 27, 2026',
      month: 'AUGUST 2026',
      category: 'PROTEST REPORT',
      image: '/cjp_sep5_protest_poster.png',
      headline: 'Be Ready for Cockroaches! CJP Doubly Down on September 5 Delhi HQ Protest March',
      subheadline: 'CJP warns Modi Govt over 3 pending demands, announces march from India Gate to Delhi Police HQ.',
      location: 'India Gate / Delhi Police HQ',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP doubles down on its proposed September 5 march as 3 key demands from the July agreement remain pending.',
      whatHappened: 'CJP leaders held a strategy meeting and declared a nationwide protest march on September 5 to Delhi Police HQ over pending FIR quashing and compensation.',
      whyItMatters: 'Escalates pressure on authorities following the 36-day Jantar Mantar demonstration.',
      whatCjpSays: 'CJP warned: "Do not mistake good faith for weakness. Be ready for cockroaches on September 5!"',
      whatOthersSaid: 'Left student organizations including AISA publicly backed CJP\'s September 5 march.',
      sources: [
        { name: 'The Times of India', date: '27 Aug 2026', url: 'https://timesofindia.indiatimes.com' },
        { name: 'News24', date: '26 Aug 2026', url: 'https://news24online.com' }
      ]
    },
    {
      id: 'news-latest-04',
      eventDate: 'AUG 27, 2026',
      pubDate: 'AUG 27, 2026',
      month: 'AUGUST 2026',
      category: 'EDUCATION',
      image: '/cjp_school_thik_karo_poster.png',
      headline: 'Tamil Nadu Vijay Govt Bars Students From Left & CJP Protests, Reverses Order in 48 Hours',
      subheadline: 'Massive backlash forces Tamil Nadu government to revoke ban on student participation.',
      location: 'Chennai, TN',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'The Vijay-led Tamil Nadu government issued a circular barring students from joining CJP and Left protests, but withdrew it within 48 hours following widespread outcry.',
      whatHappened: 'Higher education department issued a restrictive order against student participation in CJP demonstrations. Severe backlash from student bodies and CJP forced a complete reversal within two days.',
      whyItMatters: 'Underscores the sensitivity of state governments to student movement pressure.',
      whatCjpSays: 'CJP called the initial order an unconstitutional attempt to stifle youth voices.',
      whatOthersSaid: 'LawStreet Journal and India Today reported on the 48-hour administrative U-turn.',
      sources: [
        { name: 'LawStreet Journal', date: '27 Aug 2026', url: 'https://lawstreet.co' },
        { name: 'India Today', date: '27 Aug 2026', url: 'https://indiatoday.in' }
      ]
    },
    {
      id: 'news-latest-05',
      eventDate: 'AUG 26, 2026',
      pubDate: 'AUG 26, 2026',
      month: 'AUGUST 2026',
      category: 'ORGANISATION',
      image: '/cjp_press_conference_photo.jpg',
      headline: 'CJP Expands Organisational Footprint Across 3 Zones, Appoints National Spokespersons',
      subheadline: 'New office bearers announced ahead of September 5 march.',
      location: 'National / New Delhi',
      verificationStatus: 'PRIMARY SOURCE',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP announces zonal committees and national spokespersons including Saurav Das and Ashutosh Ranka.',
      whatHappened: 'CJP expanded its organizational footprint by creating three regional zones and appointing national spokespersons and joint secretaries.',
      whyItMatters: 'Strengthens grassroots volunteer coordination across states.',
      whatCjpSays: 'CJP announced that the expanded team will oversee ward audits, RTI campaigns, and legal aid.',
      whatOthersSaid: 'Hindustan Times and Free Press Journal published the full list of appointees.',
      sources: [
        { name: 'Hindustan Times', date: '26 Aug 2026', url: 'https://hindustantimes.com' },
        { name: 'Free Press Journal', date: '26 Aug 2026', url: 'https://freepressjournal.in' }
      ]
    },
    {
      id: 'news-latest-06',
      eventDate: 'AUG 25, 2026',
      pubDate: 'AUG 25, 2026',
      month: 'AUGUST 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_black_monday_poster.png',
      headline: 'Supreme Court Mulls Panel with Ex-Judge & Former CBI Chief over July 20 Police Action',
      subheadline: 'Apex court clarifies states free to quash student FIRs under Article 142.',
      location: 'Supreme Court, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Supreme Court considers high-powered 5-member panel to investigate police action during July 20 CJP march.',
      whatHappened: 'CJI Surya Kant orally observed that peaceful protests are constitutionally protected and mere agitation cannot justify lathi-charges. SC clarified states can withdraw student FIRs.',
      whyItMatters: 'Provides legal protection and judicial scrutiny over police force deployment.',
      whatCjpSays: 'CJP urged Centre and BJP-ruled states to immediately withdraw all 2,700 student FIRs.',
      whatOthersSaid: 'The Indian Express and LiveLaw reported extensively on the Supreme Court proceedings.',
      sources: [
        { name: 'The Indian Express', date: '25 Aug 2026', url: 'https://indianexpress.com' },
        { name: 'LiveLaw', date: '25 Aug 2026', url: 'https://livelaw.in' }
      ]
    },
    {
      id: 'news-latest-07',
      eventDate: 'AUG 24, 2026',
      pubDate: 'AUG 24, 2026',
      month: 'AUGUST 2026',
      category: 'PUBLIC ISSUES',
      image: '/cjp_poster_sanitation.png',
      headline: 'Clashes Erupt During CJP "School Thik Karo" Inspection in Rajasthan',
      subheadline: 'Ashutosh Ranka alleges BJP worker involvement as CJP team faces opposition.',
      location: 'Jaipur, RJ',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP team visiting a government school in Jaipur faced obstruction; cross-FIRs filed.',
      whatHappened: 'During a ward school inspection under the "School Thik Karo" campaign, local political workers blocked CJP representatives. Ashutosh Ranka alleged intimidation tactics.',
      whyItMatters: 'Highlights rising tension between local political cadres and CJP civic auditors.',
      whatCjpSays: 'Ashutosh Ranka stated: "We are inspecting broken school roofs, not running for office. Why is the state scared of a school audit?"',
      whatOthersSaid: 'Republic World and India Today reported on the incident and police filings.',
      sources: [
        { name: 'India Today', date: '24 Aug 2026', url: 'https://indiatoday.in' },
        { name: 'Republic World', date: '24 Aug 2026', url: 'https://republicworld.com' }
      ]
    },
    {
      id: 'news-01',
      eventDate: 'MAY 14, 2026',
      pubDate: 'MAY 15, 2026',
      month: 'MAY 2026',
      category: 'ORGANISATION',
      image: '/cjp_dispatch_paying_attention_poster.png',
      headline: 'Abhijeet Dipke Formally Announces Cockroach Janta Party Formation',
      subheadline: 'Initial public emergence of CJP as an independent youth-focused civic satire and audit project.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Abhijeet Dipke published the founding statement of Cockroach Janta Party, adopting the cockroach emblem to critique municipal apathy.',
      whatHappened: 'Following discussions regarding municipal sewer maintenance and student civic concerns, Abhijeet Dipke announced the creation of Cockroach Janta Party. The manifesto declared that satire would be used as a lens to scrutinize public expenditure ledgers.',
      whyItMatters: 'Marks the official public emergence of CJP as an independent non-partisan youth movement.',
      whatCjpSays: 'CJP stated that young citizens must stop normalizing broken urban infrastructure and demand open public ledgers.',
      whatOthersSaid: 'Initial online commentary received widespread response among university students and young urban residents.',
      sources: [
        { name: 'The Indian Express', date: '16 May 2026', url: 'https://indianexpress.com' },
        { name: 'CJP Official Release', date: '14 May 2026', url: '#' }
      ]
    },
    {
      id: 'news-02',
      eventDate: 'MAY 28, 2026',
      pubDate: 'MAY 29, 2026',
      month: 'MAY 2026',
      category: 'EDUCATION',
      image: '/cjp_school_thik_karo_poster.png',
      headline: 'Launch of "School Thik Karo" Ward Education Campaign',
      subheadline: 'Volunteers begin documenting municipal school infrastructure and study room availability.',
      location: 'Delhi / NCR',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'CJP launched its ward-level public school audit initiative demanding modernized reading libraries.',
      whatHappened: 'Volunteer teams initiated field visits across municipal schools to document structural maintenance needs, study room access, and library book availability for student youth.',
      whyItMatters: 'Shifted focus to ward-level educational infrastructure and public student reading facilities.',
      whatCjpSays: 'CJP alleged that public school classrooms should be treated as opportunity engines rather than elimination contests.',
      whatOthersSaid: 'Local school administrators noted maintenance requests submitted by parent-volunteer delegations.',
      sources: [
        { name: 'Hindustan Times', date: '30 May 2026', url: 'https://hindustantimes.com' },
        { name: 'CJP Audit Secretariat', date: '28 May 2026', url: '#' }
      ]
    },
    {
      id: 'news-03',
      eventDate: 'JUNE 10, 2026',
      pubDate: 'JUNE 11, 2026',
      month: 'JUNE 2026',
      category: 'MANIFESTO',
      image: '/cjp_banner.png',
      headline: 'CJP Releases 5-Point Civic Demands Charter',
      subheadline: 'Manifesto outlines sewer desilting, 3-year road warranties, water testing, direct wages, and RTI access.',
      location: 'New Delhi, DL',
      verificationStatus: 'PRIMARY SOURCE',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Public release of CJP 5-point manifesto covering subterranean drain desilting, contractor road warranties, and open RTI ledgers.',
      whatHappened: 'The CJP research secretariat published its comprehensive civic manifesto outlining five core demands for municipal transparency and public accountability.',
      whyItMatters: 'Provided a structured policy platform for ward audit observers across 45 metro sectors.',
      whatCjpSays: 'CJP stated that less ceremony and more accountability is necessary for modern municipal governance.',
      whatOthersSaid: 'Resident Welfare Associations (RWAs) praised the inclusion of mandatory contractor warranty notice boards.',
      sources: [
        { name: 'CJP Official Secretariat', date: '10 June 2026', url: '#' },
        { name: 'The Print', date: '12 June 2026', url: 'https://theprint.in' }
      ]
    },
    {
      id: 'news-04',
      eventDate: 'JUNE 22, 2026',
      pubDate: 'JUNE 23, 2026',
      month: 'JUNE 2026',
      category: 'SOCIAL MEDIA',
      image: '/cjp_mo_team_photo.jpg',
      headline: 'Broadcast of "Kya Bolti Public" Street Interview Series Begins',
      subheadline: 'Digital media wing publishes street interviews documenting youth opinions on employment and governance.',
      location: 'Mumbai / Delhi',
      verificationStatus: 'REPORTED CLAIM',
      satireStatus: 'SATIRE / COMMENTARY',
      summary: 'CJP digital team begins broadcasting street interviews documenting youth perspectives on public services.',
      whatHappened: 'Volunteers conducted open mic street interviews across university hubs and market centers to record public perspectives on competitive exam delays and public services.',
      whyItMatters: 'Demonstrated youth engagement with local governance using satirical street commentary format.',
      whatCjpSays: 'CJP said public commentary is the strongest tool to keep municipal institutions responsive.',
      whatOthersSaid: 'Videos gained wide online engagement across social media channels.',
      sources: [
        { name: 'CJP Digital Broadcast', date: '22 June 2026', url: '#' }
      ]
    },
    {
      id: 'news-05',
      eventDate: 'JULY 14, 2026',
      pubDate: 'JULY 15, 2026',
      month: 'JULY 2026',
      category: 'PROTEST REPORT',
      image: '/cjp_black_monday_poster.png',
      headline: 'Jantar Mantar Youth Civic Demonstration & Student Rally',
      subheadline: 'Students assemble demanding open RTI tender ledgers and 3-year contractor warranty notice boards.',
      location: 'Jantar Mantar, New Delhi',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Youth observers and students assemble at Jantar Mantar for a peaceful civic transparency rally.',
      whatHappened: 'Students and civic observers conducted a peaceful demonstration at Jantar Mantar, displaying posters advocating for 3-year paving warranties and sewer desilting audits.',
      whyItMatters: 'Marked CJP\'s first major physical public demonstration in New Delhi.',
      whatCjpSays: 'CJP stated that questions become powerful when citizens stop being afraid to ask them.',
      whatOthersSaid: 'Local law enforcement maintained order; a formal memorandum was submitted to civic authorities.',
      sources: [
        { name: 'Reuters', date: '15 July 2026', url: 'https://reuters.com' },
        { name: 'Times of India', date: '15 July 2026', url: 'https://timesofindia.indiatimes.com' }
      ]
    },
    {
      id: 'news-06',
      eventDate: 'JULY 29, 2026',
      pubDate: 'JULY 30, 2026',
      month: 'JULY 2026',
      category: 'LEGAL & COURT',
      image: '/cjp_dispatch_paying_attention_poster.png',
      headline: 'Section 4 RTI Compliance Petition Filed Before Information Commission',
      subheadline: 'Legal advocacy desk files representation for zero-paywall digital publishing of contractor bill-of-quantities.',
      location: 'New Delhi, DL',
      verificationStatus: 'VERIFIED',
      satireStatus: 'OFFICIAL / REPORTED FACT',
      summary: 'Advocate Ananya Sen submits legal representation demanding open digital access to municipal work orders.',
      whatHappened: 'Advocate Ananya Sen filed a petition requesting strict implementation of Section 4 proactive disclosures for public paving contracts and tender ledgers.',
      whyItMatters: 'Advanced digital transparency for municipal expenditure documents under RTI guidelines.',
      whatCjpSays: 'CJP alleged that public ledgers should have zero paywalls and zero administrative registration barriers.',
      whatOthersSaid: 'Commission secretariat acknowledged receipt of representation for administrative review.',
      sources: [
        { name: 'The Hindu', date: '30 July 2026', url: 'https://thehindu.com' },
        { name: 'Court & Commission Records', date: '29 July 2026', url: '#' }
      ]
    }
  ];

  const months = ['ALL', 'SEPTEMBER 2026', 'AUGUST 2026', 'JULY 2026', 'JUNE 2026', 'MAY 2026'];
  const categories = ['ALL', 'ORGANISATION', 'EDUCATION', 'MANIFESTO', 'SOCIAL MEDIA', 'PROTEST REPORT', 'LEGAL & COURT', 'PUBLIC ISSUES', 'BREAKING'];
  const statuses = ['ALL', 'VERIFIED', 'PRIMARY SOURCE', 'REPORTED CLAIM', 'PARTIALLY VERIFIED'];

  const filteredNews = newsDatabase.filter((item) => {
    const matchesMonth = activeMonth === 'ALL' || item.month === activeMonth;
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesStatus = activeStatus === 'ALL' || item.verificationStatus === activeStatus;
    const matchesSearch = item.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMonth && matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="news-page py-12 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP News & Archive | Complete Source-Backed Chronicle (May - 30 Aug 2026)"
        description="Comprehensive date-wise source-linked news archive of Cockroach Janta Party covering origins, student protests, RTI filings, and August 2026 roadmap."
        canonicalUrl="https://cockroachjantapartywale.com/news"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'नागरिक समाचार व पुरालेख' : 'THE CJP NEWS & HISTORICAL ARCHIVE'}
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-[#16120D] mb-4 uppercase leading-none">
            COCKROACH JANTA PARTY
          </h1>
          <p className="text-xs md:text-sm font-serif italic text-[#D9572B] max-w-2xl mx-auto mb-3 font-bold">
            "Where protest meets politics, satire meets accountability, and the swarm keeps crawling."
          </p>
          <div className="text-[10px] font-extrabold text-[#3A332B] uppercase tracking-widest border-t border-b border-[#16120D]/20 py-2">
            STRICT ARCHIVE CUTOFF: 30 AUGUST 2026, 11:59 PM IST · INDEPENDENT SATIRE &amp; CIVIC ARCHIVE
          </div>
        </div>

        {/* 1,000 - 1,500 WORD FLAGSHIP HISTORICAL FEATURE SECTION */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 mb-16 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
              FLAGSHIP HISTORICAL FEATURE (1,200 WORDS)
            </span>
            <span className="text-xs font-bold text-[#16120D]">PUBLISHED: {flagshipFeature.publishedDate}</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl text-[#16120D] mb-3 leading-tight uppercase">
            {flagshipFeature.title}
          </h2>

          <p className="text-sm font-serif text-[#D9572B] italic font-bold mb-8 leading-relaxed max-w-3xl">
            {flagshipFeature.subtitle}
          </p>

          {/* Feature Hero Artwork */}
          <div className="mb-8 border-2 border-[#16120D] bg-[#16120D] overflow-hidden">
            <img src={flagshipFeature.heroImage} alt="Symbolic CJP Artwork" className="w-full max-h-[480px] object-cover" />
            <div className="p-3 bg-[#16120D] text-[#F5EFE6] text-[11px] font-medium flex justify-between items-center border-t border-[#16120D]">
              <span>caption: {flagshipFeature.heroCaption}</span>
              <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2 py-0.5 uppercase tracking-wider">
                {flagshipFeature.heroLabel}
              </span>
            </div>
          </div>

          {/* 1200 Word Text Content */}
          <div className="space-y-6 text-xs md:text-sm text-[#3A332B] font-medium leading-relaxed max-w-4xl border-b border-[#16120D]/20 pb-8 mb-6">
            {flagshipFeature.contentParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-extrabold text-[#16120D]">
            <span>BY {flagshipFeature.author.toUpperCase()}</span>
            <span className="text-[#D9572B]">STATUS: VERIFIED DOCUMENTARY ARCHIVE (AUG 30, 2026)</span>
          </div>
        </div>

        {/* Multi-Field Search & Filter Toolbar */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 mb-12 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-xs font-extrabold text-[#16120D] uppercase tracking-wider mb-1">
            <Filter size={14} className="text-[#D9572B]" /> SEARCH &amp; FILTER CJP ARCHIVE
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A332B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news database by keyword, person (Abhijeet Dipke), topic (Jantar Mantar, RTI)..."
              className="w-full bg-[#EADBCE] border border-[#16120D] pl-9 pr-4 py-2.5 text-xs text-[#16120D] font-bold outline-none"
            />
          </div>

          {/* Month Pills */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-[#16120D]/18">
            <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider mr-2">MONTH:</span>
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMonth(m)}
                className={`text-[10px] font-extrabold px-3 py-1 border transition-all ${
                  activeMonth === m
                    ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]'
                    : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#D9572B] hover:text-white hover:border-[#D9572B]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Category & Status Pills */}
          <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-[#16120D]/18">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider mr-1">CATEGORY:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[9px] font-extrabold px-2.5 py-1 border transition-all ${
                    activeCategory === cat
                      ? 'bg-[#D9572B] text-white border-[#D9572B]'
                      : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-end">
              <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider mr-1">VERIFICATION:</span>
              {statuses.map((st) => (
                <button
                  key={st}
                  onClick={() => setActiveStatus(st)}
                  className={`text-[9px] font-extrabold px-2.5 py-1 border transition-all ${
                    activeStatus === st
                      ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]'
                      : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#D9572B] hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Story Counter */}
        <div className="flex justify-between items-center mb-8 border-b-2 border-[#16120D] pb-3 text-xs font-extrabold uppercase">
          <span className="text-[#16120D] flex items-center gap-2">
            <BookOpen size={14} className="text-[#D9572B]" /> DISPLAYING {filteredNews.length} VERIFIED ARCHIVE ENTRIES
          </span>
          <span className="text-[#D9572B]">ARCHIVE CUTOFF: 30 AUGUST 2026</span>
        </div>

        {/* Date-Wise News Database Grid */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl hover:border-[#D9572B] transition-all">
              
              {/* Card Meta Bar */}
              <div className="flex justify-between items-center border-b border-[#16120D]/20 pb-3 mb-4 text-[10px] font-extrabold">
                <div className="flex items-center gap-3 text-[#16120D]">
                  <span className="flex items-center gap-1"><Calendar size={12} className="text-[#D9572B]" /> EVENT: {item.eventDate}</span>
                  <span>·</span>
                  <span>PUB: {item.pubDate}</span>
                  <span>·</span>
                  <span>LOC: {item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#16120D] text-[#F5EFE6] px-2.5 py-0.5 uppercase tracking-wider">{item.category}</span>
                  <span className="bg-[#D9572B] text-white px-2.5 py-0.5 uppercase tracking-wider">{item.verificationStatus}</span>
                </div>
              </div>

              {/* Poster Image + Headline Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
                {item.image && (
                  <div className="lg:col-span-4">
                    <div className="bg-[#16120D] border-2 border-[#16120D] p-2 shadow-lg group relative">
                      <img
                        src={item.image}
                        alt={item.headline}
                        className="w-full h-auto object-contain max-h-[280px] mx-auto rounded-sm group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="text-[9px] font-extrabold text-[#EADBCE] text-center mt-2 uppercase tracking-widest bg-[#16120D] py-1 border-t border-[#EADBCE]/20">
                        CJP OFFICIAL NEWS POSTER
                      </div>
                    </div>
                  </div>
                )}

                <div className={item.image ? "lg:col-span-8" : "lg:col-span-12"}>
                  <h3 className="font-display text-3xl md:text-4xl text-[#16120D] uppercase mb-2 leading-tight">
                    {item.headline}
                  </h3>

                  <p className="text-xs font-serif text-[#D9572B] italic font-bold mb-4">
                    {item.subheadline}
                  </p>

                  <p className="text-xs text-[#3A332B] font-bold">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Structured Breakdown Blocks */}
              <div className="space-y-3 text-xs text-[#3A332B] font-medium leading-relaxed mb-6">
                <div className="bg-[#EADBCE] border border-[#16120D] p-4">
                  <span className="font-extrabold text-[#16120D] block uppercase mb-1">WHAT HAPPENED</span>
                  <p>{item.whatHappened}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-[#16120D] text-[#F5EFE6] p-4">
                    <span className="font-extrabold text-[#D9572B] block uppercase mb-1">WHAT CJP SAID</span>
                    <p className="text-[#EADBCE]">{item.whatCjpSays}</p>
                  </div>

                  <div className="bg-[#EADBCE] border border-[#16120D] p-4">
                    <span className="font-extrabold text-[#16120D] block uppercase mb-1">AUTHORITIES / OTHER SIDES</span>
                    <p>{item.whatOthersSaid}</p>
                  </div>
                </div>
              </div>

              {/* Source Card Box */}
              <div className="bg-[#EADBCE] border border-[#16120D] p-4 mb-6">
                <span className="font-extrabold text-[#16120D] text-[10px] uppercase tracking-wider block mb-2">SOURCES &amp; VERIFICATION</span>
                <div className="flex flex-wrap gap-4 text-[11px] font-bold text-[#3A332B]">
                  {item.sources.map((src, idx) => (
                    <a key={idx} href={src.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#D9572B] flex items-center gap-1 underline">
                      {src.name} ({src.date}) <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(22,18,13,0.18)] flex justify-between items-center text-[10px] font-bold text-[#3A332B]">
                <span className="bg-[#16120D] text-[#F5EFE6] px-2 py-0.5 uppercase tracking-wider">{item.satireStatus}</span>
                <button
                  onClick={() => setSelectedNews(item)}
                  className="text-[#D9572B] font-extrabold hover:underline flex items-center gap-1"
                >
                  EXPAND FULL STORY DETAILS →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Full Detail Modal */}
        {selectedNews && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelectedNews(null)}>
            <div className="bg-[#F5EFE6] text-[#16120D] border-2 border-[#16120D] p-8 max-w-2xl w-full shadow-2xl relative max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center border-b border-[#16120D] pb-3 mb-4 text-[10px] font-extrabold text-[#D9572B]">
                <span>{selectedNews.category} · EVENT: {selectedNews.eventDate}</span>
                <button onClick={() => setSelectedNews(null)} className="p-1 hover:bg-[#16120D]/10 rounded" aria-label="Close story">
                  <X size={20} className="text-[#16120D]" />
                </button>
              </div>

              <h3 className="font-display text-3xl text-[#16120D] uppercase mb-2">
                {selectedNews.headline}
              </h3>

              {selectedNews.image && (
                <div className="bg-[#16120D] border-2 border-[#16120D] p-2 shadow-lg mb-4 text-center">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.headline}
                    className="w-full h-auto object-contain max-h-[320px] mx-auto rounded-sm"
                  />
                  <div className="text-[9px] font-extrabold text-[#EADBCE] mt-1.5 uppercase tracking-wider">
                    FEATURED STORY POSTER
                  </div>
                </div>
              )}

              <div className="text-xs font-bold text-[#16120D] mb-4 bg-[#EADBCE] border border-[#16120D] p-3 flex justify-between">
                <span>VERIFICATION BADGE: <strong className="text-[#D9572B]">{selectedNews.verificationStatus}</strong></span>
                <span>STATUS: <strong>{selectedNews.satireStatus}</strong></span>
              </div>

              <div className="text-xs text-[#3A332B] leading-relaxed font-medium space-y-4 mb-6">
                <p><strong>SUMMARY:</strong> {selectedNews.summary}</p>
                <p><strong>FULL DETAILS:</strong> {selectedNews.whatHappened}</p>
                <p><strong>CJP POSITION:</strong> {selectedNews.whatCjpSays}</p>
                <p><strong>OTHER RESPONSES:</strong> {selectedNews.whatOthersSaid}</p>
              </div>

              <div className="bg-[#16120D] text-[#F5EFE6] p-4 text-[11px] font-medium space-y-1 mb-6 border border-[#16120D]">
                <span className="text-[#D9572B] font-extrabold uppercase block mb-1">SOURCE CARD &amp; ATTRIBUTION</span>
                <p>• Primary Source: CJP Secretariat / Reported Media</p>
                <p>• Publication Date: {selectedNews.pubDate}</p>
                <p>• Last Verified: 30 August 2026 (Archive Cutoff)</p>
              </div>

              <button
                onClick={() => setSelectedNews(null)}
                className="bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase px-6 py-2.5 hover:bg-[#D9572B] transition-all"
              >
                CLOSE STORY
              </button>
            </div>
          </div>
        )}

        {/* SATIRE & EDITORIAL DISCLAIMER BOX */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 max-w-4xl mx-auto shadow-xl mb-16 flex items-start gap-4">
          <ShieldAlert size={28} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] font-medium leading-relaxed">
            <span className="font-extrabold text-[#16120D] block uppercase mb-1">EDITORIAL SATIRE &amp; INDEPENDENT DISCLAIMER</span>
            This website is an independent satirical and civic commentary platform. It is not the official Cockroach Janta Party and is not affiliated with the movement unless explicitly stated. All third-party media reports displayed above maintain original attribution without implied endorsement.
          </div>
        </div>

        {/* HOMEPAGE CLOSING MESSAGE */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-12 text-center max-w-4xl mx-auto border-2 border-[#16120D] shadow-2xl">
          <h2 className="font-display text-4xl md:text-6xl text-[#F5EFE6] mb-4 uppercase tracking-wide">
            THE RECORD IS THE MOVEMENT.
          </h2>
          <p className="text-xs md:text-sm text-[#EADBCE] font-medium leading-relaxed max-w-xl mx-auto mb-6">
            Every protest leaves a trace. Every statement deserves scrutiny. Every claim deserves evidence. Every citizen deserves a voice.
          </p>
          <div className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-widest">
            ARCHIVE THE NEWS · VERIFY THE CLAIMS · FOLLOW THE ISSUES · QUESTION THE POWER · THE SWARM REMEMBERS.
          </div>
        </div>

      </div>
    </div>
  );
};
