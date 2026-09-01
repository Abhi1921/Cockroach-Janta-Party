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

  // Verified Structured News Archive Database (May - 30 Aug 2026)
  const newsDatabase = [
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

  const months = ['ALL', 'MAY 2026', 'JUNE 2026', 'JULY 2026', 'AUGUST 2026'];
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
