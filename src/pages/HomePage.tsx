import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { TopPatronsSection } from '../components/TopPatronsSection';
import { NewsletterSection } from '../components/NewsletterSection';
import {
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Send,
  ExternalLink,
  Play,
  RefreshCw,
  Megaphone,
  MapPin,
  GraduationCap,
  Activity,
  UserCheck
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const [issueCategory, setIssueCategory] = useState('Education');
  const [issueText, setIssueText] = useState('');
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [videoPage, setVideoPage] = useState(1);
  const videosPerPage = 6;
  const [activePoster, setActivePoster] = useState<'sc_verdict' | 'sep5' | 'ward_centers' | 'school' | 'black_monday'>('sc_verdict');
  const [featuredTab, setFeaturedTab] = useState<'sc_verdict' | 'sep5' | 'ward_centers' | 'school' | 'black_monday'>('sc_verdict');

  const alternateTitles = [
    {
      line1: 'FOR THOSE',
      line2: 'WHO REFUSE TO',
      line3: 'STAY SILENT.'
    },
    {
      line1: 'FOR THE PEOPLE',
      line2: 'WHO REFUSE TO',
      line3: 'BLEND IN.'
    },
    {
      line1: 'WE DON\'T NEED SPEECHES.',
      line2: 'WE NEED BETTER',
      line3: 'QUESTIONS.'
    },
    {
      line1: 'TOO STUBBORN TO CRAWL AWAY,',
      line2: 'TOO AWAKE TO',
      line3: 'OBEY.'
    },
    {
      line1: 'SPONSORED BY NO ONE.',
      line2: 'FUNDED BY',
      line3: 'THE SWARM.'
    }
  ];

  const currentTitle = alternateTitles[titleIndex];

  const handleNextTitle = () => {
    setTitleIndex((prev) => (prev + 1) % alternateTitles.length);
  };

  const pulseCounters = [
    { val: '43,247', labelKey: 'pulse01Label', num: '01', sub: 'VERIFIED WARD OBSERVERS' },
    { val: '05', labelKey: 'pulse02Label', num: '02', sub: 'RATIFIED DEMANDS' },
    { val: '1,894', labelKey: 'pulse03Label', num: '03', sub: 'DISPATCHED TO WARDS' },
    { val: '11', labelKey: 'pulse04Label', num: '04', sub: 'PENDING SYSTEM RESPONSES' }
  ];

  const communityMembers = [
    {
      name: 'Abhijeet Dipke',
      role: 'Research Coordinator & Founder',
      city: 'Delhi',
      badge: 'FOUNDING SECRETARIAT',
      imgSrc: '/cjp_leader_abhijeet_dipke.png'
    },
    {
      name: 'Ashutosh Ranka',
      role: 'Ward Audit Convenor',
      city: 'Rajasthan',
      badge: 'NATIONAL WORKING COMMITTEE',
      imgSrc: '/cjp_leader_ashutosh_ranka.png'
    },
    {
      name: 'Saurav Das',
      role: 'Policy & Media Spokesperson',
      city: 'Mumbai',
      badge: 'NATIONAL WORKING COMMITTEE',
      imgSrc: '/cjp_leader_saurav_das.png'
    },
    {
      name: 'Ananya Sen',
      role: 'Legal Advocacy Desk',
      city: 'Kolkata',
      badge: 'LEGAL CELL',
      imgSrc: '/cjp_leader_ananya_sen.png'
    }
  ];

  const videosList = [
    {
      id: 'fb-cjp-watch-911189544963956',
      title: 'NDTV Report: CJP Calls Off Sept 5 Delhi Protest After SC Orders FIRs Quashed',
      category: 'FACEBOOK WATCH',
      url: 'https://www.facebook.com/watch/?v=911189544963956',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D911189544963956',
      badge: 'BREAKING NEWS'
    },
    {
      id: 'wjpWvd6vLrs',
      title: 'CJP Youth Broadcast: Student Protesters Demand NEET Case Withdrawals',
      category: 'YOUTH VOICE',
      url: 'https://youtu.be/wjpWvd6vLrs?si=NPogL-EaWDds50zh',
      embedUrl: 'https://www.youtube.com/embed/wjpWvd6vLrs',
      badge: 'TRENDING'
    },
    {
      id: 'Y8ZsDEn3JOM',
      title: 'Supreme Court Article 142 Order Analysis: CJP Legal Cell Presser',
      category: 'LEGAL DISPATCH',
      url: 'https://youtu.be/Y8ZsDEn3JOM?si=rDfvbzF5I2EQhAjh',
      embedUrl: 'https://www.youtube.com/embed/Y8ZsDEn3JOM',
      badge: 'SC VERDICT'
    },
    {
      id: 'C9MRKiKs06o',
      title: 'CJP Ground Dispatch: Youth Press Conference on Exam Reforms',
      category: 'LIVE PRESSER',
      url: 'https://youtu.be/C9MRKiKs06o?si=Lz5zwyAQhWPv_iYi',
      embedUrl: 'https://www.youtube.com/embed/C9MRKiKs06o',
      badge: 'GROUND REPORT'
    },
    {
      id: 'x4gxwhRQdMI',
      title: 'CJP Live Stream: Supreme Court Proceedings & September 5 Update',
      category: 'LIVE STREAM',
      url: 'https://www.youtube.com/live/x4gxwhRQdMI?si=KhKNyyZePkpXcE-_',
      embedUrl: 'https://www.youtube.com/embed/x4gxwhRQdMI',
      badge: 'LIVE BROADCAST'
    },
    {
      id: 'G9VZrhJkQkQ',
      title: 'Kya Bolti Public: CJP Special Coverage on Student Rights & FIR Quashing',
      category: 'CIVIC COVERAGE',
      url: 'https://youtu.be/G9VZrhJkQkQ?si=Kt0f7DKE31g-uiOS',
      embedUrl: 'https://www.youtube.com/embed/G9VZrhJkQkQ',
      badge: 'FEATURED'
    },
    {
      id: '5yDi6qd16SE',
      title: 'School Thik Karo: Physical Inspection of Municipal School Classrooms',
      category: 'WARD AUDIT',
      url: 'https://youtu.be/5yDi6qd16SE?si=zXeGUf4fjkTIOhi0',
      embedUrl: 'https://www.youtube.com/embed/5yDi6qd16SE',
      badge: 'EDUCATION'
    },
    {
      id: 'u1Gu5kl8IIA',
      title: 'Subterranean Drain Audit & Public RTI Transparency Report',
      category: 'SANITATION REPORT',
      url: 'https://youtu.be/u1Gu5kl8IIA?si=X6uYjHRsAwiRy8Ji',
      embedUrl: 'https://www.youtube.com/embed/u1Gu5kl8IIA',
      badge: 'CIVIC AUDIT'
    },
    {
      id: 'TfoNzZEXy0c',
      title: 'CJP Youth Swarm Assembly: Voices from University Campuses',
      category: 'STREET INTERVIEW',
      url: 'https://youtu.be/TfoNzZEXy0c?si=Nl4u2V4bu-ZbJMo3',
      embedUrl: 'https://www.youtube.com/embed/TfoNzZEXy0c',
      badge: 'YOUTH VOICE'
    },
    {
      id: 'ixONTJgLuS4',
      title: 'Road Paving Warranty Notice Board Audit: On-Site Video Verification',
      category: 'PUBLIC AUDIT',
      url: 'https://youtu.be/ixONTJgLuS4?si=CTb1diTx0yaH0Dn0',
      embedUrl: 'https://www.youtube.com/embed/ixONTJgLuS4',
      badge: 'RTI AUDIT'
    },
    {
      id: 'Tcqkuk60hLI',
      title: 'CJP Youth Street Rally: Demanding Municipal Transparency & Education Reform',
      category: 'PROTEST DISPATCH',
      url: 'https://youtu.be/Tcqkuk60hLI?si=2-B2gMAfw0DazA4e',
      embedUrl: 'https://www.youtube.com/embed/Tcqkuk60hLI',
      badge: 'TRENDING'
    },
    {
      id: '4MKIOz8SqnQ',
      title: 'Cockroach Janta Party Official Anthem & Movement Documentary',
      category: 'OFFICIAL MEDIA',
      url: 'https://youtu.be/4MKIOz8SqnQ?si=LoEd_0EqkeeJCSXr',
      embedUrl: 'https://www.youtube.com/embed/4MKIOz8SqnQ',
      badge: 'MOVEMENT ANTHEM'
    },
    {
      id: 'fb-noida-fir',
      title: 'Report: 15-Year-Old Noida Student FIR Case — PM Modi Jantar Mantar Rally',
      category: 'FACEBOOK WATCH',
      url: 'https://www.facebook.com/watch/?v=2054290928526389',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D2054290928526389',
      badge: 'SPECIAL REPORT'
    },
    {
      id: 'MDWT0Tjq85U',
      title: 'Kya Bolti Public: CJP Street Interview on Exam Reforms & Unemployment',
      category: 'STREET INTERVIEW',
      url: 'https://youtu.be/MDWT0Tjq85U?si=3TY6wX80Hp6aiPom',
      embedUrl: 'https://www.youtube.com/embed/MDWT0Tjq85U',
      badge: 'TRENDING'
    },
    {
      id: 'boCtjl7XxHc',
      title: 'CJP Live Stream: Jantar Mantar Youth Press Conference',
      category: 'LIVE PRESSER',
      url: 'https://www.youtube.com/live/boCtjl7XxHc?si=KIR6i-VVMJryXWjO',
      embedUrl: 'https://www.youtube.com/embed/boCtjl7XxHc',
      badge: 'LIVE DISPATCH'
    },
    {
      id: '0Vo0Y2041Ew',
      title: 'School Thik Karo: Ward Audit Short Report',
      category: 'WARD AUDIT',
      url: 'https://youtube.com/shorts/0Vo0Y2041Ew?si=2r2c0UwUSkeahGpo',
      embedUrl: 'https://www.youtube.com/embed/0Vo0Y2041Ew',
      badge: 'SHORTS'
    },
    {
      id: 'O749QR5KxD8',
      title: 'Subterranean Sewer Audit & Public Question Short',
      category: 'CIVIC SHORT',
      url: 'https://youtube.com/shorts/O749QR5KxD8?si=P9-2fBCI71iSJPiR',
      embedUrl: 'https://www.youtube.com/embed/O749QR5KxD8',
      badge: 'SHORTS'
    },
    {
      id: 'nlDLIt_Fr9g',
      title: 'Kya Bolti Public: CJP Youth Commentary & Analysis',
      category: 'TRENDING NEWS',
      url: 'https://youtu.be/nlDLIt_Fr9g?si=Th-e4XGlSAKRHMzs',
      embedUrl: 'https://www.youtube.com/embed/nlDLIt_Fr9g',
      badge: 'VERIFIED VIDEO'
    },
    {
      id: 'zeHWLyUw4XU',
      title: 'School Thik Karo & Public Library Demand Short',
      category: 'EDUCATION SHORT',
      url: 'https://youtube.com/shorts/zeHWLyUw4XU?si=U8hFaxmn6C-PH9UY',
      embedUrl: 'https://www.youtube.com/embed/zeHWLyUw4XU',
      badge: 'SHORTS'
    }
  ];

  const totalVideoPages = Math.ceil(videosList.length / videosPerPage);
  const paginatedVideos = videosList.slice((videoPage - 1) * videosPerPage, videoPage * videosPerPage);

  const qualificationCards = [
    { num: '01', titleKey: 'qual1Title', descKey: 'qual1Desc' },
    { num: '02', titleKey: 'qual2Title', descKey: 'qual2Desc' },
    { num: '03', titleKey: 'qual3Title', descKey: 'qual3Desc' },
    { num: '04', titleKey: 'qual4Title', descKey: 'qual4Desc' }
  ];

  const faqs = [
    { q: 'What exactly is this website?', a: 'This is an independent satire and civic-commentary portal. We explore public issues, youth concerns, municipal accountability, and democratic participation.' },
    { q: 'Is this an official political party website?', a: 'No. CJP is an independent, non-partisan youth movement and satirical commentary platform. We do not contest political elections or hold government affiliation.' },
    { q: 'Why is the name “Cockroach Janta Party”?', a: 'The cockroach symbolizes ultimate resilience, subterranean survival, and persistence against all odds.' },
    { q: 'What does the manifesto represent?', a: 'The manifesto is a satirical and civic charter exploring public accountability, youth concerns, and the absurdities of daily bureaucratic life.' },
    { q: 'Can I participate?', a: 'Yes! Anyone curious or civically awake can register as a community observer or contribute to public discussions.' },
    { q: 'Can I submit an issue?', a: 'Yes. Use the Complaint Desk on the homepage or the Contact page to log local ward issues.' },
    { q: 'Is membership official?', a: 'No. Membership is symbolic community participation for residents demanding transparency.' },
    { q: 'Can I support the project?', a: 'Yes, through community volunteer initiatives and sharing public disclosures.' },
    { q: 'How is satire different from news?', a: 'Satire uses humor, irony, and exaggeration to critique real-world systemic issues without presenting fictional stories as unverified news.' },
    { q: 'How can I contact the website?', a: 'Reach out through our Secretariat contact form or email info@cockroachjantaparty.org.in.' }
  ];

  const handleIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (issueText) {
      setIssueSubmitted(true);
      setIssueText('');
    }
  };

  return (
    <div className="homepage-content bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-[#F5EFE6]">
      <SEOHead
        title="Cockroach Janta Party (CJP) — Official Website & Civic Commentary"
        description="Official website of Cockroach Janta Party (CJP) & Cockroach Janta Partywale: An independent youth-focused civic movement advocating for transparent municipal governance, drain desilting audits, contractor road warranties, School Thik Karo campaign, and open RTI disclosures."
        canonicalUrl="https://cockroachjantapartywale.com/"
      />

      <div id="main-content"></div>

      {/* 1. HERO SECTION (BEBAS NEUE DISPLAY TYPOGRAPHY) */}
      <section className="relative min-h-[760px] pt-12 pb-16 flex items-center bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="inline-flex items-center gap-2 bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
                <span>{t('heroVolume')}</span>
              </div>
              
              {/* Interactive Title Switcher Pill */}
              <button
                onClick={handleNextTitle}
                className="inline-flex items-center gap-1.5 bg-[#D9572B] text-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider hover:bg-[#16120D] transition-colors border border-[#16120D]"
                title="Click to preview alternate hero headline"
              >
                <RefreshCw size={11} />
                <span>TRY ALTERNATE TITLE ({titleIndex + 1}/5)</span>
              </button>
            </div>

            <h1 className={`font-display text-[64px] sm:text-[100px] lg:text-[132px] leading-[0.83] tracking-wider text-[#16120D] uppercase mb-6 min-h-[220px] transition-all ${lang === 'hi' ? 'font-hindi font-black text-5xl leading-tight' : ''}`}>
              {currentTitle.line1}<br />
              <span className="text-[#D9572B]">{currentTitle.line2}</span><br />
              {currentTitle.line3}
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#3A332B] max-w-xl mb-8 leading-relaxed font-medium">
              {t('heroSupporting')}
            </p>

            <div className="flex items-center gap-4 flex-wrap mb-8">
              <Link
                to="/manifesto"
                className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-[13px] uppercase tracking-wider px-7 py-4 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all shadow-lg"
              >
                {t('btnEnterManifesto')}
              </Link>
              <Link
                to="/contact"
                className="bg-[#F5EFE6] text-[#16120D] font-extrabold text-[13px] uppercase tracking-wider px-7 py-4 border-2 border-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all shadow-sm"
              >
                {t('btnRaiseIssue')}
              </Link>
            </div>

            <div className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-wider">
              {t('heroMeta')}
            </div>
          </div>

          {/* Right Hero Poster Artwork - TRENDING POSTERS SHOWCASE */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-5 max-w-[420px] w-full shadow-2xl relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Poster Header Meta */}
              <div className="flex justify-between items-center text-[10px] font-extrabold text-[#16120D] border-b border-[#16120D] pb-2.5 mb-3 uppercase tracking-wider">
                <span className="flex items-center gap-1 text-[#D9572B]">
                  <span className="w-2 h-2 rounded-full bg-[#D9572B] animate-ping" />
                  <span>
                    {activePoster === 'sc_verdict' && '🔥 #1 TRENDING: SC VERDICT'}
                    {activePoster === 'sep5' && '5 SEP DELHI MARCH'}
                    {activePoster === 'ward_centers' && '84 WARD COMMAND HUBS'}
                    {activePoster === 'school' && 'SCHOOL THIK KARO'}
                    {activePoster === 'black_monday' && '10M BLACK MONDAY'}
                  </span>
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      if (activePoster === 'sc_verdict') setActivePoster('sep5');
                      else if (activePoster === 'sep5') setActivePoster('ward_centers');
                      else if (activePoster === 'ward_centers') setActivePoster('school');
                      else if (activePoster === 'school') setActivePoster('black_monday');
                      else setActivePoster('sc_verdict');
                    }}
                    className="text-[9px] bg-[#16120D] text-[#F5EFE6] px-2 py-1 uppercase font-black hover:bg-[#D9572B] transition-colors rounded cursor-pointer"
                  >
                    NEXT POSTER →
                  </button>
                </div>
              </div>

              {/* Poster Main Artwork Image */}
              <div className="overflow-hidden border-2 border-[#16120D] bg-[#16120D] mb-4 flex items-center justify-center relative group p-1 min-h-[300px]">
                <img
                  src={
                    activePoster === 'sc_verdict'
                      ? "/cjp_sep3_sc_verdict_poster.svg"
                      : activePoster === 'sep5'
                      ? "/cjp_sep5_protest_poster.png"
                      : activePoster === 'ward_centers'
                      ? "/cjp_sep3_ward_centers_poster.svg"
                      : activePoster === 'school'
                      ? "/cjp_sep3_school_phase2_poster.svg"
                      : "/cjp_sep3_black_monday_accord.svg"
                  }
                  alt="Trending Campaign Poster - Cockroach Janta Party"
                  className="w-full h-auto object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Poster Text & Subcaption */}
              <div className="text-center">
                <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest inline-block mb-1.5 rounded">
                  {activePoster === 'sc_verdict' && '🔥 TRENDING POSTER · 3 SEP 2026'}
                  {activePoster === 'sep5' && '5 SEPTEMBER 2026 · DELHI MARCH'}
                  {activePoster === 'ward_centers' && 'CIVIC WATCHDOG NETWORK · 84 CITIES'}
                  {activePoster === 'school' && 'EDUCATION REFORM · PHASE 2'}
                  {activePoster === 'black_monday' && 'BLACK MONDAY MOVEMENT ACCORD'}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-[#16120D] uppercase tracking-wide leading-tight mb-1">
                  {activePoster === 'sc_verdict' && 'SUPREME COURT ARTICLE 142 DECREE'}
                  {activePoster === 'sep5' && '5 SEP DELHI POLICE HQ MARCH'}
                  {activePoster === 'ward_centers' && '84 METRO WARD COMMAND CENTERS'}
                  {activePoster === 'school' && 'SCHOOL THIK KARO PHASE 2'}
                  {activePoster === 'black_monday' && 'BLACK MONDAY MOVEMENT ACCORD'}
                </h3>

                <p className="text-[11px] text-[#D9572B] font-extrabold uppercase tracking-widest leading-snug">
                  {activePoster === 'sc_verdict' && '2,700 STUDENT FIRS EXPUNGED NATIONWIDE!'}
                  {activePoster === 'sep5' && 'BE READY FOR COCKROACHES! CHALO POLICE HQ'}
                  {activePoster === 'ward_centers' && 'FROM STREET MARCHES TO 24/7 MUNICIPAL AUDITS'}
                  {activePoster === 'school' && 'DESKS BEFORE SPEECHES, SCIENCE LABS BEFORE RIBBON CUTTINGS'}
                  {activePoster === 'black_monday' && 'WEAR BLACK EVERY MONDAY · DEMAND ASPHALT WARRANTIES'}
                </p>

                <div className="mt-3 pt-2.5 border-t border-[#16120D]/20">
                  <Link
                    to="/posters"
                    className="text-[11px] font-extrabold text-[#16120D] hover:text-[#D9572B] uppercase tracking-wider flex items-center justify-center gap-1"
                  >
                    <span>VIEW ALL TRENDING POSTERS</span> →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. REALITY CHECK DISCLAIMER CARD */}
      <section className="bg-[#E2D2BF] border-b-2 border-[#16120D] py-6 px-4">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-lg text-[#16120D] uppercase tracking-wider">
                {t('realityCheckTitle')}
              </h4>
              <p className="text-xs text-[#3A332B] font-medium max-w-3xl">
                {t('realityCheckText')}
              </p>
            </div>
          </div>
          <Link to="/terms" className="text-xs font-extrabold text-[#D9572B] hover:underline whitespace-nowrap">
            {t('readLegalLink')}
          </Link>
        </div>
      </section>

      {/* 2.5 FEATURED CAMPAIGN POSTER BANNER (WITH TABS FOR SCHOOL THIK KARO & 5 SEP) */}
      <section className="py-14 bg-[#F5EFE6] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          
          {/* Campaign Selector Tabs */}
          <div className="flex justify-center items-center gap-2.5 mb-6 flex-wrap">
            <button
              onClick={() => setFeaturedTab('sc_verdict')}
              className={`px-4 py-2.5 text-xs font-black uppercase border-2 border-[#16120D] transition-all flex items-center gap-2 rounded ${
                featuredTab === 'sc_verdict'
                  ? 'bg-[#D9572B] text-white border-[#D9572B] shadow-md'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <span>⚖️</span> <span>1. SC 142 VERDICT</span>
            </button>
            <button
              onClick={() => setFeaturedTab('sep5')}
              className={`px-4 py-2.5 text-xs font-black uppercase border-2 border-[#16120D] transition-all flex items-center gap-2 rounded ${
                featuredTab === 'sep5'
                  ? 'bg-[#D9572B] text-white border-[#D9572B] shadow-md'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <Megaphone size={16} /> <span>2. 5 SEP DELHI MARCH</span>
            </button>
            <button
              onClick={() => setFeaturedTab('ward_centers')}
              className={`px-4 py-2.5 text-xs font-black uppercase border-2 border-[#16120D] transition-all flex items-center gap-2 rounded ${
                featuredTab === 'ward_centers'
                  ? 'bg-[#D9572B] text-white border-[#D9572B] shadow-md'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <span>🏢</span> <span>3. 84 WARD CENTERS</span>
            </button>
            <button
              onClick={() => setFeaturedTab('school')}
              className={`px-4 py-2.5 text-xs font-black uppercase border-2 border-[#16120D] transition-all flex items-center gap-2 rounded ${
                featuredTab === 'school'
                  ? 'bg-[#D9572B] text-white border-[#D9572B] shadow-md'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <GraduationCap size={16} /> <span>4. SCHOOL THIK KARO</span>
            </button>
            <button
              onClick={() => setFeaturedTab('black_monday')}
              className={`px-4 py-2.5 text-xs font-black uppercase border-2 border-[#16120D] transition-all flex items-center gap-2 rounded ${
                featuredTab === 'black_monday'
                  ? 'bg-[#D9572B] text-white border-[#D9572B] shadow-md'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <span>🖤</span> <span>5. BLACK MONDAY</span>
            </button>
          </div>

          <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Poster Artwork Container - OBJECT CONTAIN FOR ZERO CROPPING */}
              <div className="md:col-span-5 flex justify-center">
                <div className="border-2 border-[#EADBCE] bg-[#16120D] p-2 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform w-full max-w-[420px] min-h-[320px]">
                  <img
                    src={
                      featuredTab === 'sc_verdict'
                        ? "/cjp_sep3_sc_verdict_poster.svg"
                        : featuredTab === 'sep5'
                        ? "/cjp_sep5_protest_poster.png"
                        : featuredTab === 'ward_centers'
                        ? "/cjp_sep3_ward_centers_poster.svg"
                        : featuredTab === 'school'
                        ? "/cjp_sep3_school_phase2_poster.svg"
                        : "/cjp_sep3_black_monday_accord.svg"
                    }
                    alt="Featured Campaign Poster - Cockroach Janta Party"
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#D9572B] uppercase tracking-widest">
                  <span>
                    {featuredTab === 'sc_verdict' && '🔥 #1 TRENDING STORY · SUPREME COURT ARTICLE 142 DECREE'}
                    {featuredTab === 'sep5' && 'FEATURED PROTEST MARCH · 5 SEPTEMBER 2026'}
                    {featuredTab === 'ward_centers' && 'FEATURED CIVIC INITIATIVE · 84 METRO WARD AUDIT HUBS'}
                    {featuredTab === 'school' && 'FEATURED CAMPAIGN · EDUCATION & SCHOOL REFORM'}
                    {featuredTab === 'black_monday' && 'FEATURED MOVEMENT · 10 MILLION BLACK MONDAY ACCORD'}
                  </span>
                </div>

                <h2 className="font-display text-4xl sm:text-6xl text-[#F5EFE6] uppercase leading-none">
                  {featuredTab === 'sc_verdict' && 'SC ARTICLE 142 VERDICT!'}
                  {featuredTab === 'sep5' && '5 SEPTEMBER DELHI MARCH'}
                  {featuredTab === 'ward_centers' && '84 WARD COMMAND CENTERS'}
                  {featuredTab === 'school' && 'SCHOOL THIK KARO PHASE 2'}
                  {featuredTab === 'black_monday' && '10M BLACK MONDAY ACCORD'}
                </h2>

                <div className="flex items-center gap-4 text-xs font-bold text-[#EADBCE] bg-[#16120D]/60 p-3 border border-[#EADBCE]/30">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#D9572B]" />
                    {featuredTab === 'sc_verdict' && 'SUPREME COURT OF INDIA · ALL STATE HIGH COURTS'}
                    {featuredTab === 'sep5' && 'INDIA GATE → DELHI POLICE HQ'}
                    {featuredTab === 'ward_centers' && '84 METROPOLITAN CITIES NATIONWIDE'}
                    {featuredTab === 'school' && '500 MUNICIPAL PRIMARY SCHOOLS NATIONWIDE'}
                    {featuredTab === 'black_monday' && '45 METRO SECTORS & MUNICIPAL WARDS'}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-[#EADBCE] leading-relaxed font-medium">
                  {featuredTab === 'sc_verdict' &&
                    'The Supreme Court invoked Article 142 to expunge all 2,700 student protest FIRs nationwide, ordering state DGP offices to issue clean criminal record certificates.'}
                  {featuredTab === 'sep5' &&
                    'CJP doubles down on its nationwide youth protest march to Delhi Police HQ over pending assurances on student FIR quashings, contractor road warranty notice boards, and NEET exam fairness.'}
                  {featuredTab === 'ward_centers' &&
                    'CJP launched 84 permanent municipal ward audit command centers to inspect public works, water purity, and drain desilting schedules 24 hours a day.'}
                  {featuredTab === 'school' &&
                    'CJP launched Phase 2 of its school improvement initiative, adopting 500 municipal primary schools for library and science laboratory upgrades.'}
                  {featuredTab === 'black_monday' &&
                    'Over 10 million citizens across 45 metro sectors wore black armbands every Monday to demand mandatory 3-year paving warranties and transparent municipal ledgers.'}
                </p>

                <div className="bg-[#D9572B] text-[#F5EFE6] p-3.5 text-xs font-extrabold uppercase tracking-wider">
                  {featuredTab === 'sc_verdict' && '"NO STUDENT SHALL CARRY A CRIMINAL RECORD FOR ASKING CIVIC QUESTIONS!" — CJP LEGAL CELL'}
                  {featuredTab === 'sep5' && '"BE READY FOR COCKROACHES ON SEPTEMBER 5!" — CJP SECRETARIAT'}
                  {featuredTab === 'ward_centers' && '"FROM STREET MARCHES TO 24/7 MUNICIPAL WARD AUDITS." — CJP TASK FORCE'}
                  {featuredTab === 'school' && '"DESKS BEFORE SPEECHES, SCIENCE LABS BEFORE RIBBON CUTTINGS." — CJP EDUCATION DESK'}
                  {featuredTab === 'black_monday' && '"WEAR BLACK, DEMAND ASPHALT WARRANTIES, STOP REPAYING FOR RE-PAVING." — CJP COUNCIL'}
                </div>

                <div className="pt-2 flex items-center gap-4 flex-wrap">
                  <Link
                    to="/posters"
                    className="bg-[#D9572B] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 border border-[#16120D] hover:bg-white hover:text-[#16120D] transition-all shadow-md"
                  >
                    VIEW ALL 5 CAMPAIGN POSTERS →
                  </Link>
                  <Link
                    to="/gallery"
                    className="bg-[#EADBCE] text-[#16120D] text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 border border-[#16120D] hover:bg-white transition-all shadow-sm"
                  >
                    OPEN VISUAL GALLERY →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SWARM PULSE (LIVE ANIMATED METRICS & COUNTERS) */}
      <section className="py-14 bg-[#EADBCE] border-b-2 border-[#16120D] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9572B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D9572B]"></span>
                </span>
                <span className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-widest flex items-center gap-1">
                  <Activity size={14} /> LIVE COMMUNITY ACTIVITY STREAM
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-[#16120D] leading-none uppercase">
                {t('swarmPulseTitle')}
              </h2>
            </div>
            <div className="bg-[#16120D] text-[#EADBCE] text-[10px] font-extrabold px-3 py-1.5 border border-[#16120D] uppercase tracking-wider shadow-sm">
              ⚡ UPDATED REAL-TIME FROM CIVIC QUEUE
            </div>
          </div>

          {/* Animated Interactive Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pulseCounters.map((c) => (
              <div
                key={c.num}
                className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg hover:border-[#D9572B] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#D9572B]/10 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">{c.num} · REALTIME</span>
                  <span className="w-2 h-2 rounded-full bg-[#D9572B] animate-pulse"></span>
                </div>

                <span className="font-display text-5xl md:text-6xl text-[#16120D] block mb-1 group-hover:text-[#D9572B] transition-colors">
                  {c.val}
                </span>

                <span className="text-[11px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                  {t(c.labelKey)}
                </span>

                <span className="text-[9px] font-extrabold text-[#3A332B] uppercase tracking-widest block border-t border-[#16120D]/15 pt-2 mt-2">
                  {c.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY REPRESENTATIVES & OBSERVERS STRIP (REAL LEADER PORTRAIT CARDS & MOJO STORY TEAM PHOTO) */}
      <section className="py-14 bg-[#F5EFE6] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1 flex items-center gap-1">
                <UserCheck size={14} /> PUBLIC OBSERVERS &amp; COMMUNITY LEADS
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#16120D] uppercase">{t('communityTitle')}</h2>
            </div>
            <span className="text-[10px] font-extrabold bg-[#EADBCE] text-[#16120D] px-3 py-1.5 border border-[#16120D] uppercase tracking-wider">
              FOUNDING SECRETARIAT &amp; WORKING COMMITTEE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {communityMembers.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#EADBCE] border-2 border-[#16120D] p-5 shadow-lg hover:border-[#D9572B] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Leader Real Portrait Graphic Image */}
                  <div className="w-24 h-24 rounded-full border-2 border-[#16120D] bg-[#16120D] overflow-hidden mb-4 mx-auto group-hover:scale-105 group-hover:border-[#D9572B] transition-all duration-300 shadow-md flex items-center justify-center">
                    <img src={m.imgSrc} alt={m.name} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="font-display text-2xl text-[#16120D] uppercase mb-1 text-center group-hover:text-[#D9572B] transition-colors">
                    {m.name}
                  </h3>

                  <span className="text-xs font-extrabold text-[#D9572B] block text-center mb-1">{m.role}</span>
                  <span className="text-[10px] font-extrabold text-[#3A332B] uppercase tracking-wider block text-center mb-4">{m.city}</span>
                </div>

                <div className="text-center pt-2">
                  <span className="inline-block bg-[#16120D] text-[#F5EFE6] text-[9px] font-extrabold px-3 py-1 uppercase tracking-widest group-hover:bg-[#D9572B] transition-colors border border-[#16120D]">
                    {m.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* REAL MOJO STORY TEAM PHOTO FEATURE CARD */}
          <div className="bg-[#16120D] text-[#F5EFE6] p-6 md:p-8 border-4 border-[#16120D] shadow-2xl grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 overflow-hidden border-2 border-[#EADBCE] bg-[#16120D]">
              <img src="/cjp_mo_team_photo.jpg" alt="Mojo Story CJP Team Feature" className="w-full h-auto object-contain mx-auto" />
            </div>
            <div className="md:col-span-7 space-y-3">
              <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest inline-block">
                MOJO STORY SPECIAL FEATURE
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-[#F5EFE6] uppercase leading-tight">
                IF THE CJP CONTESTED ELECTIONS, WOULD GEN Z VOTE FOR IT?
              </h3>
              <p className="text-xs text-[#EADBCE] font-medium leading-relaxed">
                National media spotlight on Cockroach Janta Party's growing resonance among Gen Z youth, students, and ward observers demanding municipal accountability.
              </p>
              <div className="pt-2 text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider flex items-center gap-2">
                <span>FOUNDING SECRETARIAT</span> · <span>NATIONAL WORKING COMMITTEE</span> · <span>ZONAL OBSERVERS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FEATURED DISPATCH STORY (UNCROPPED FULL POSTER DISPLAY) */}
      <section className="py-16 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
                  {t('featuredLabel')}
                </span>
                <span className="text-xs font-bold text-[#3A332B]">{t('featuredDate')}</span>
              </div>

              <h2 className="font-serif font-black text-3xl md:text-5xl text-[#16120D] leading-tight">
                WHEN THE SYSTEM DISCOVERS THE PEOPLE ARE PAYING ATTENTION
              </h2>

              <p className="text-xs sm:text-sm text-[#3A332B] leading-relaxed font-medium">
                An empirical investigation into what happens when citizens start reading Section 4 RTI filings, auditing subterranean sewer clearance depths, and checking contractor road warranty notice boards.
              </p>

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <Link
                  to="/updates"
                  className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] transition-all"
                >
                  {t('btnReadDispatch')}
                </Link>
                <Link
                  to="/updates"
                  className="text-xs font-extrabold text-[#16120D] hover:text-[#D9572B] uppercase tracking-wider"
                >
                  {t('btnViewAllStories')} →
                </Link>
              </div>
            </div>

            {/* Poster Card Container with ZERO Cropping */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#16120D] border-2 border-[#16120D] p-3 shadow-xl transform rotate-1 hover:rotate-0 transition-transform w-full max-w-[440px]">
                <img
                  src="/cjp_dispatch_paying_attention_poster.png"
                  alt="When The System Discovers The People Are Paying Attention Poster"
                  className="w-full h-auto object-contain mx-auto rounded-sm"
                />
                <div className="text-[10px] font-extrabold text-[#EADBCE] text-center mt-2.5 uppercase tracking-widest">
                  FEATURED DISPATCH POSTER · PUBLIC DISCLOSURE &amp; RTI AUDIT
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BIG STATEMENT TYPOGRAPHY */}
      <section className="py-20 bg-[#16120D] text-[#F5EFE6] border-b-2 border-[#16120D] text-center">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-wider uppercase leading-none mb-4">
            {t('bigStatementLine1')}
          </h2>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl tracking-wider text-[#D9572B] uppercase leading-none">
            {t('bigStatementLine2')}
          </h2>
        </div>
      </section>

      {/* 7. THE FIVE CIVIC PILLARS (5 IDEAS) */}
      <section className="py-16 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">POLICY CORE</span>
            <h2 className="font-display text-4xl md:text-6xl text-[#16120D] mb-3">{t('fiveIdeasTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
              <span className="font-display text-4xl text-[#D9572B] block mb-2">01</span>
              <h3 className="font-display text-2xl text-[#16120D] uppercase mb-2">{t('idea1Title')}</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{t('idea1Desc')}</p>
            </div>

            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
              <span className="font-display text-4xl text-[#D9572B] block mb-2">02</span>
              <h3 className="font-display text-2xl text-[#16120D] uppercase mb-2">{t('idea2Title')}</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{t('idea2Desc')}</p>
            </div>

            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
              <span className="font-display text-4xl text-[#D9572B] block mb-2">03</span>
              <h3 className="font-display text-2xl text-[#16120D] uppercase mb-2">{t('idea3Title')}</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{t('idea3Desc')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
              <span className="font-display text-4xl text-[#D9572B] block mb-2">04</span>
              <h3 className="font-display text-2xl text-[#16120D] uppercase mb-2">{t('idea4Title')}</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{t('idea4Desc')}</p>
            </div>

            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
              <span className="font-display text-4xl text-[#D9572B] block mb-2">05</span>
              <h3 className="font-display text-2xl text-[#16120D] uppercase mb-2">{t('idea5Title')}</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{t('idea5Desc')}</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/manifesto"
              className="inline-block bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider px-8 py-4 border-2 border-[#16120D] hover:bg-[#D9572B] transition-all shadow-lg"
            >
              {t('btnReadFullManifesto')}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. VIDEOS SECTION: THE SWARM ON CAMERA (PAGINATED 6 PER PAGE) */}
      <section className="py-16 bg-[#F5EFE6] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          
          {/* Header */}
          <div className="flex justify-between items-end flex-wrap gap-4 mb-10 border-b-2 border-[#16120D] pb-6">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">
                MEDIA &amp; VIDEO DISPATCHES
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-[#16120D] uppercase">
                THE SWARM ON CAMERA
              </h2>
              <p className="text-xs text-[#3A332B] font-medium mt-1">
                {videosList.length} verified video dispatches, street interviews, and press broadcasts. (6 videos per page)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-[#16120D] text-[#EADBCE] text-[10px] font-extrabold px-3.5 py-2 border border-[#16120D] uppercase tracking-wider">
                PAGE {videoPage} OF {totalVideoPages} · {videosList.length} TOTAL VIDEOS
              </span>
            </div>
          </div>

          {/* 3x2 Grid for Paginated Videos (6 Per Page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {paginatedVideos.map((v) => (
              <div key={v.id} className="bg-[#EADBCE] border-2 border-[#16120D] p-5 shadow-xl flex flex-col justify-between hover:border-[#D9572B] transition-all duration-300 group">
                <div>
                  <div className="relative aspect-video bg-[#16120D] mb-4 border-2 border-[#16120D] overflow-hidden">
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">{v.category}</span>
                    <span className="bg-[#16120D] text-[#F5EFE6] text-[9px] font-extrabold px-2 py-0.5 uppercase tracking-widest">{v.badge}</span>
                  </div>
                  <h3 className="font-display text-xl text-[#16120D] uppercase leading-tight mb-4 group-hover:text-[#D9572B] transition-colors">
                    {v.title}
                  </h3>
                </div>

                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#16120D] text-[#F5EFE6] text-[11px] font-extrabold uppercase py-3 px-4 text-center border border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Play size={13} className="fill-current text-[#D9572B]" />
                  <span>WATCH VIDEO DISPATCH</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>

          {/* Pagination Controls (6 Per Page) */}
          <div className="flex justify-between items-center border-t-2 border-[#16120D] pt-6 flex-wrap gap-4">
            <div className="text-xs font-bold text-[#16120D] uppercase tracking-wider">
              SHOWING VIDEOS {(videoPage - 1) * videosPerPage + 1}–{Math.min(videoPage * videosPerPage, videosList.length)} OF {videosList.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={videoPage === 1}
                onClick={() => setVideoPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase border border-[#16120D] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#D9572B] transition-colors"
              >
                ← PREVIOUS
              </button>

              {Array.from({ length: totalVideoPages }, (_, idx) => idx + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setVideoPage(p)}
                  className={`w-9 h-9 text-xs font-extrabold border transition-all ${
                    videoPage === p
                      ? 'bg-[#D9572B] text-white border-[#D9572B]'
                      : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#16120D] hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                disabled={videoPage === totalVideoPages}
                onClick={() => setVideoPage((prev) => Math.min(prev + 1, totalVideoPages))}
                className="px-4 py-2 bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase border border-[#16120D] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#D9572B] transition-colors"
              >
                NEXT →
              </button>
            </div>
          </div>

          {/* Twitter / X Video Dispatches Strip */}
          <div className="mt-12 bg-[#16120D] text-[#F5EFE6] p-6 md:p-8 border-2 border-[#16120D] shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-[#EADBCE]/20 pb-3">
              <div>
                <span className="text-xs font-extrabold text-[#D9572B] uppercase tracking-wider block mb-1">
                  🐦 TWITTER / X OFFICIAL VIDEO DISPATCHES
                </span>
                <h3 className="font-display text-2xl text-[#F5EFE6] uppercase">
                  DIRECT VIDEO DISPATCHES BY CJP LEADERS
                </h3>
              </div>
              <a
                href="https://x.com/cjpindia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1.5 uppercase hover:bg-white hover:text-[#16120D] transition-colors"
              >
                FOLLOW @CJPINDIA ON X ↗
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://x.com/cjpindia/status/1814592039402914820"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EADBCE] text-[#16120D] p-5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:text-white transition-all block group"
              >
                <div className="flex justify-between items-center text-[10px] font-extrabold text-[#D9572B] group-hover:text-white mb-2">
                  <span>TWITTER VIDEO · 20 JULY 2026</span>
                  <span>↗</span>
                </div>
                <h4 className="font-display text-xl uppercase leading-tight mb-2">
                  Abhijeet Dipke: Black Monday Video Dispatch
                </h4>
                <p className="text-xs font-medium opacity-80 leading-relaxed">
                  Video dispatch recorded during student march to Parliament.
                </p>
              </a>

              <a
                href="https://x.com/cjpindia/status/1827401928409210948"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EADBCE] text-[#16120D] p-5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:text-white transition-all block group"
              >
                <div className="flex justify-between items-center text-[10px] font-extrabold text-[#D9572B] group-hover:text-white mb-2">
                  <span>TWITTER VIDEO · 27 AUG 2026</span>
                  <span>↗</span>
                </div>
                <h4 className="font-display text-xl uppercase leading-tight mb-2">
                  Abhijeet Dipke: #BeReadyForCockroaches Call
                </h4>
                <p className="text-xs font-medium opacity-80 leading-relaxed">
                  Video statement announcing 5 September Delhi Police HQ march.
                </p>
              </a>

              <a
                href="https://x.com/cjpindia/status/1828193028301928402"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EADBCE] text-[#16120D] p-5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:text-white transition-all block group"
              >
                <div className="flex justify-between items-center text-[10px] font-extrabold text-[#D9572B] group-hover:text-white mb-2">
                  <span>TWITTER VIDEO · 26 AUG 2026</span>
                  <span>↗</span>
                </div>
                <h4 className="font-display text-xl uppercase leading-tight mb-2">
                  Saurav Das &amp; Ashutosh Ranka: Ward Audit Video
                </h4>
                <p className="text-xs font-medium opacity-80 leading-relaxed">
                  Field video recording of school roof and ward facility inspection.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. QUALIFICATION CARDS */}
      <section className="py-16 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">PARTICIPATION</span>
            <h2 className="font-display text-4xl md:text-6xl text-[#16120D] mb-3">{t('qualifyTitle')}</h2>
            <p className="text-xs text-[#3A332B] font-medium">{t('qualifyIntro')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {qualificationCards.map((c) => (
              <div key={c.num} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
                <span className="font-display text-4xl text-[#D9572B] block mb-2">{c.num}</span>
                <h3 className="font-display text-xl text-[#16120D] uppercase mb-2">{t(c.titleKey)}</h3>
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{t(c.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/join"
              className="inline-block bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider px-8 py-4 border-2 border-[#16120D] hover:bg-[#D9572B] transition-all shadow-lg"
            >
              {t('btnJoinCommunity')}
            </Link>
          </div>
        </div>
      </section>

      {/* 10. COMPLAINT DESK FORM */}
      <section className="py-16 bg-[#F5EFE6] border-b-2 border-[#16120D]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-[#EADBCE] border-2 border-[#16120D] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">WARD INTAKE</span>
              <h2 className="font-display text-4xl text-[#16120D] uppercase mb-2">{t('complaintDeskTitle')}</h2>
              <p className="text-xs text-[#3A332B] font-medium">{t('complaintDeskSubtitle')}</p>
            </div>

            {issueSubmitted ? (
              <div className="bg-[#F5EFE6] border border-[#16120D] p-6 text-center">
                <CheckCircle2 size={36} className="text-[#D9572B] mx-auto mb-2" />
                <h4 className="font-display text-2xl text-[#16120D] uppercase mb-1">ISSUE LOGGED IN QUEUE</h4>
                <p className="text-xs text-[#3A332B] font-medium">
                  Thank you. Your ward report has been recorded in the public community intake database.
                </p>
              </div>
            ) : (
              <form onSubmit={handleIssueSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-1">ISSUE CATEGORY:</label>
                  <select
                    value={issueCategory}
                    onChange={(e) => setIssueCategory(e.target.value)}
                    className="w-full bg-[#F5EFE6] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  >
                    <option value="Education">Public School Infrastructure (School Thik Karo)</option>
                    <option value="Sewer">Subterranean Sewer Clearance &amp; Desilting</option>
                    <option value="Road">Road Paving Warranty Notice Board</option>
                    <option value="Water">Drinking Water Quality &amp; TDS Testing</option>
                    <option value="RTI">Section 4 RTI Paywall Violation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-1">DESCRIBE WARD ISSUE:</label>
                  <textarea
                    required
                    rows={4}
                    value={issueText}
                    onChange={(e) => setIssueText(e.target.value)}
                    placeholder="Provide ward location, contractor name, or specific public complaint details..."
                    className="w-full bg-[#F5EFE6] border border-[#16120D] p-3.5 text-xs text-[#16120D] font-medium outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider py-4 border border-[#16120D] hover:bg-[#D9572B] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>LOG ISSUE IN PUBLIC QUEUE →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* TOP PATRONS SECTION matching Image 2 */}
      <TopPatronsSection />

      {/* NEWSLETTER CAPTCHA SECTION matching Image 3 */}
      <NewsletterSection />

      {/* 11. FAQ ACCORDION */}
      <section className="py-16 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">HELP &amp; INFORMATION</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('faqTitle')}</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 font-display text-xl text-[#16120D] uppercase flex justify-between items-center gap-4 hover:text-[#D9572B] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="text-[#D9572B]" /> : <ChevronDown size={20} />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs text-[#3A332B] font-medium leading-relaxed border-t border-[#16120D]/10 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className="py-20 bg-[#16120D] text-[#F5EFE6] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-wider mb-4">
            {t('finalCtaHeadline')}
          </h2>
          <p className="text-xs sm:text-sm text-[#EADBCE] font-medium leading-relaxed max-w-xl mx-auto mb-8">
            {t('finalCtaSupporting')}
          </p>
          <Link
            to="/join"
            className="inline-block bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-widest px-10 py-5 border-2 border-white hover:bg-white hover:text-[#16120D] transition-all shadow-2xl"
          >
            {t('navJoinSwarm')}
          </Link>
        </div>
      </section>

    </div>
  );
};
