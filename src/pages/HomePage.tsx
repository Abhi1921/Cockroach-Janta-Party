import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import {
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Send,
  ExternalLink,
  Play,
  RefreshCw
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const [issueCategory, setIssueCategory] = useState('Education');
  const [issueText, setIssueText] = useState('');
  
  // Interactive Alternate Title Switcher State
  const [titleIndex, setTitleIndex] = useState(0);

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
    { num: '01', labelKey: 'pulse01Label', val: '01' },
    { num: '02', labelKey: 'pulse02Label', val: '05' },
    { num: '03', labelKey: 'pulse03Label', val: '24/7' },
    { num: '04', labelKey: 'pulse04Label', val: '∞' }
  ];

  const communityMembers = [
    { name: 'Prabhat Yadav', city: 'Delhi', state: 'DL' },
    { name: 'Biplab Ranjan Mallik', city: 'Kanpur', state: 'UP' },
    { name: 'Nishant Kirtikumar Patel', city: 'Mumbai', state: 'MH' },
    { name: 'Lokesh Sharma', city: 'Delhi', state: 'DL' },
    { name: 'Jegam Khan', city: 'Jaipur', state: 'RJ' },
    { name: 'Janardhan Mhaske', city: 'Chhatrapati Sambhajinagar', state: 'MH' },
    { name: 'Satendra Kumar Sonkar', city: 'Ghaziabad', state: 'UP' },
    { name: 'Shahid Naqvedi', city: 'Kanpur', state: 'UP' }
  ];

  const radarItems = [
    'TRENDING · Why does every form need one more form?',
    'FIELD NOTE · The internship that required five years\' experience',
    'PUBLIC NOTICE · Your complaint has been successfully ignored',
    'EXPLAINER · Where does accountability go after office hours?',
    'OPINION · Democracy should survive the comment section'
  ];

  const coreIdeas = [
    { num: '01', titleKey: 'idea1Title', descKey: 'idea1Desc' },
    { num: '02', titleKey: 'idea2Title', descKey: 'idea2Desc' },
    { num: '03', titleKey: 'idea3Title', descKey: 'idea3Desc' },
    { num: '04', titleKey: 'idea4Title', descKey: 'idea4Desc' },
    { num: '05', titleKey: 'idea5Title', descKey: 'idea5Desc' }
  ];

  // User-provided 6 real YouTube links
  const trendingNewsVideos = [
    {
      id: 'MDWT0Tjq85U',
      title: 'Cockroach Janta Party Field Media Coverage & Public Discussion',
      category: 'TRENDING NEWS',
      url: 'https://youtu.be/MDWT0Tjq85U?si=3TY6wX80Hp6aiPom',
      embedUrl: 'https://www.youtube.com/embed/MDWT0Tjq85U',
      badge: 'VERIFIED VIDEO'
    },
    {
      id: 'boCtjl7XxHc',
      title: 'CJP Live Public Broadcast & Ward Civic Assembly',
      category: 'LIVE BROADCAST',
      url: 'https://www.youtube.com/live/boCtjl7XxHc?si=KIR6i-VVMJryXWjO',
      embedUrl: 'https://www.youtube.com/embed/boCtjl7XxHc',
      badge: 'LIVE REPORT'
    },
    {
      id: '0Vo0Y2041Ew',
      title: 'CJP Youth Civic Action & Street Interview Short',
      category: 'YOUTH SHORT',
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

  const journalCards = [
    { cat: 'EDUCATION', title: 'Exam Pressure and the Elimination Contest Culture', time: '6 min read' },
    { cat: 'EMPLOYMENT', title: 'Why Entry-Level Jobs Ask for Senior-Level Experience', time: '5 min read' },
    { cat: 'DIGITAL RIGHTS', title: 'The Hidden Paywalls on Municipal Data', time: '7 min read' },
    { cat: 'URBAN INFRASTRUCTURE', title: 'Where Road Budgets Go After Monsoon Rains', time: '8 min read' },
    { cat: 'PUBLIC SERVICES', title: 'The Art of Being Transferred to Another Department', time: '4 min read' },
    { cat: 'ELECTORAL REFORM', title: 'Why Civic Participation Needs Better User Interfaces', time: '9 min read' }
  ];

  const visualSwarmPosters = [
    { text: 'YOUR SILENCE IS NOT A SUBMISSION FORM.', tag: 'POSTER #01' },
    { text: 'DEMOCRACY NEEDS USERS.', tag: 'POSTER #02' },
    { text: 'LOW BATTERY. HIGH EXPECTATIONS.', tag: 'POSTER #03' },
    { text: 'PLEASE HOLD. ACCOUNTABILITY IS CURRENTLY UNAVAILABLE.', tag: 'POSTER #04' }
  ];

  const supportTiers = [
    { name: 'Chai', price: '₹50 / mo', desc: 'Keeps one volunteer awake during ward meetings.' },
    { name: 'Supporter', price: '₹250 / mo', desc: 'Covers water test kit reagents for neighborhood kiosks.' },
    { name: 'Founding Supporter', price: '₹1,000 / mo', desc: 'Funds RTI printing costs and public notice boards.' },
    { name: 'Community Patron', price: '₹2,500 / mo', desc: 'Keeps server infrastructure and digital tools running.' }
  ];

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
        title="Cockroach Janta Party | Satire, Civic Commentary & Public Issues"
        description="An independent satire and civic-commentary project exploring public issues, youth concerns, accountability, education, opportunity and democratic participation."
        canonicalUrl="http://localhost:3000/"
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
                className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 border border-[#16120D] uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#16120D] transition-colors shadow-sm"
                title="Click to try alternate title options"
              >
                <RefreshCw size={11} className="animate-spin-slow" />
                <span>TRY ALTERNATE TITLE ({titleIndex + 1}/{alternateTitles.length})</span>
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

          {/* Right Hero Poster Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-5 max-w-[390px] w-full shadow-2xl relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center text-[10px] font-extrabold text-[#16120D] border-b border-[#16120D] pb-2.5 mb-4 uppercase tracking-wider">
                <span>{t('subLabel')}</span>
                <span className="text-[#D9572B]">ORIGINAL</span>
              </div>

              <div className="overflow-hidden border border-[#16120D] bg-[#16120D] mb-4 aspect-square flex items-center justify-center">
                <img src="/cjp_banner.png" alt="Cockroach Janta Party Graphic Emblem" className="w-full h-full object-cover" />
              </div>

              <div className="text-center">
                <h3 className="font-display text-3xl text-[#16120D] uppercase tracking-wider mb-1">
                  {t('brandName')}
                </h3>
                <p className="text-[11px] text-[#D9572B] font-extrabold uppercase tracking-widest">
                  {currentTitle.line1} {currentTitle.line2} {currentTitle.line3}
                </p>
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

      {/* 3. THE SWARM PULSE (LIVE COUNTERS) */}
      <section className="py-12 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">LIVE DATA</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('swarmPulseTitle')}</h2>
            </div>
            <span className="text-[10px] font-bold text-[#3A332B] uppercase tracking-wider">{t('pulseDemoNote')}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {pulseCounters.map((c) => (
              <div key={c.num} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
                <span className="font-display text-5xl md:text-6xl text-[#16120D] block mb-1">{c.val}</span>
                <span className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-wider">{t(c.labelKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY / MEMBERS STRIP */}
      <section className="py-12 bg-[#E2D2BF] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
            <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
              {t('communityBadge')}
            </span>
            <h3 className="font-display text-2xl text-[#16120D] uppercase">
              {t('communityTitle')}
            </h3>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
            {communityMembers.map((m, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] px-4 py-2 flex items-center gap-3 flex-shrink-0">
                <div className="w-7 h-7 rounded-full bg-[#16120D] text-[#F5EFE6] font-extrabold flex items-center justify-center text-xs">
                  {m.name.charAt(0)}
                </div>
                <div>
                  <span className="font-bold text-xs text-[#16120D] block">{m.name}</span>
                  <span className="text-[9px] text-[#D9572B] font-extrabold">{m.city}, {m.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED STORY / LATEST DISPATCH */}
      <section className="py-16 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-3 text-[11px] font-extrabold">
                <span className="bg-[#D9572B] text-white px-2.5 py-0.5 uppercase tracking-widest">{t('featuredLabel')}</span>
                <span className="text-[#16120D]">{t('featuredDate')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-[#16120D] mb-4 leading-tight">
                {t('featuredTitle')}
              </h2>
              <p className="text-[#3A332B] text-sm leading-relaxed mb-6 font-medium">
                {t('featuredSummary')}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/updates" className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all">
                  {t('btnReadDispatch')}
                </Link>
                <Link to="/updates" className="bg-transparent text-[#16120D] font-extrabold text-xs uppercase px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all">
                  {t('btnViewAllStories')}
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 overflow-hidden border-2 border-[#16120D]">
              <img src="/cjp_poster_sanitation.png" alt="Featured Story Artwork" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ON THE RADAR TICKER */}
      <div className="bg-[#16120D] text-[#F5EFE6] py-2 overflow-hidden text-[11px] font-extrabold uppercase tracking-wider border-b-2 border-[#16120D]">
        <div className="animate-ticker flex items-center gap-8">
          {radarItems.concat(radarItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-[#D9572B]">★</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* 7. BIG TYPOGRAPHY STATEMENT (BEBAS NEUE) */}
      <section className="py-24 bg-[#EADBCE] text-center border-b-2 border-[#16120D]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl text-[#16120D] leading-none uppercase mb-4">
            {t('bigStatementLine1')}
          </h2>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl text-[#D9572B] leading-none uppercase">
            {t('bigStatementLine2')}
          </h2>
        </div>
      </section>

      {/* 8. THE FIVE THINGS WE KEEP ASKING (CORE IDEAS) */}
      <section className="py-20 bg-[#E2D2BF] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3">
              CIVIC PILLARS
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('fiveIdeasTitle')}</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto mb-10">
            {coreIdeas.map((idea) => (
              <div key={idea.num} className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-md hover:border-[#D9572B] transition-all">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                  <span className="font-display text-5xl text-[#D9572B]">{idea.num}</span>
                  <h3 className="font-display text-3xl text-[#16120D] uppercase">{t(idea.titleKey)}</h3>
                </div>
                <p className="text-[#3A332B] text-xs leading-relaxed font-medium">{t(idea.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/manifesto" className="inline-block bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all">
              {t('btnReadFullManifesto')}
            </Link>
          </div>
        </div>
      </section>

      {/* 9. MANIFESTO PREVIEW (SPLIT SCREEN) */}
      <section className="py-20 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 bg-[#16120D] text-[#F5EFE6] p-10">
            <span className="text-xs font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">CIVIC CHARTER</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase">{t('manifestoSplitLeft')}</h2>
          </div>

          <div className="md:col-span-7 bg-[#F5EFE6] border-2 border-[#16120D] p-10 shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl text-[#D9572B] mb-4 font-bold">
              {t('manifestoStatement')}
            </h3>
            <p className="text-[#3A332B] text-xs leading-relaxed font-medium mb-6">
              {t('manifestoPara')}
            </p>
            <Link to="/manifesto" className="inline-block bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all">
              {t('btnOpenManifesto')}
            </Link>
          </div>
        </div>
      </section>

      {/* 10. TRENDING MEDIA & VIDEO DISPATCHES (6 REAL YOUTUBE EMBEDS/LINKS) */}
      <section className="py-20 bg-[#E2D2BF] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">TRENDING COVERAGE</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">TRENDING MEDIA &amp; VIDEO DISPATCHES</h2>
            <p className="text-[#3A332B] text-xs font-medium mt-2">Real video broadcasts, street interviews, and civic dispatches collected live.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingNewsVideos.map((v) => (
              <div key={v.id} className="bg-[#F5EFE6] border-2 border-[#16120D] p-5 shadow-md flex flex-col justify-between hover:border-[#D9572B] transition-all">
                <div>
                  {/* Embedded Working YouTube iFrame */}
                  <div className="aspect-video bg-[#16120D] border-2 border-[#16120D] mb-4 overflow-hidden shadow-inner">
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-extrabold mb-2">
                    <span className="text-[#D9572B]">{v.category}</span>
                    <span className="bg-[#16120D] text-[#F5EFE6] px-2 py-0.5 uppercase tracking-wider">{v.badge}</span>
                  </div>

                  <h3 className="font-bold text-sm text-[#16120D] uppercase mb-3 leading-snug">{v.title}</h3>
                </div>

                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold uppercase py-2.5 border border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center justify-center gap-1.5"
                >
                  <Play size={12} className="text-[#D9572B]" /> WATCH ON YOUTUBE <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. THE JOURNAL SECTION */}
      <section className="py-20 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">PUBLICATIONS</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('journalTitle')}</h2>
            <p className="text-[#3A332B] text-xs font-medium mt-2">{t('journalSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {journalCards.map((j, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md flex flex-col justify-between hover:border-[#D9572B] transition-all">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-extrabold text-[#D9572B] uppercase mb-2">
                    <span>{j.cat}</span>
                    <span>{j.time}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#16120D] leading-snug mb-4">{j.title}</h3>
                </div>
                <Link to="/updates" className="font-extrabold text-xs text-[#16120D] hover:text-[#D9572B] flex items-center gap-1 pt-4 border-t border-[rgba(22,18,13,0.1)]">
                  READ ARTICLE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. THE SWARM SPIRIT (DM SERIF DISPLAY) */}
      <section className="py-20 bg-[#16120D] text-[#F5EFE6] text-center border-b-2 border-[#16120D]">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest mb-6">
            {t('quoteLabel')}
          </span>
          <blockquote className="font-serif italic text-3xl md:text-5xl leading-tight mb-8">
            {t('quoteText')}
          </blockquote>
          <Link to="/vision" className="inline-block bg-[#EADBCE] text-[#16120D] font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#EADBCE] hover:bg-[#D9572B] hover:border-[#D9572B] hover:text-white transition-all">
            {t('btnExploreSpirit')}
          </Link>
        </div>
      </section>

      {/* 13. KEEP THE SERVER ALIVE (SUPPORT SECTION) */}
      <section id="support-section" className="py-20 bg-[#E2D2BF] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">{t('demoTiersLabel')}</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('serverAliveTitle')}</h2>
            <p className="text-[#3A332B] text-xs font-medium mt-2">{t('serverAliveCopy')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {supportTiers.map((t, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md text-center flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#16120D] mb-1">{t.name}</h3>
                  <span className="font-display text-3xl text-[#D9572B] block mb-3">{t.price}</span>
                  <p className="text-[11px] text-[#3A332B] font-medium leading-relaxed mb-4">{t.desc}</p>
                </div>
                <button
                  onClick={() => alert(`Demo supporter tier: ${t.name}. Payment integration can be added later.`)}
                  className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold uppercase py-2.5 border border-[#16120D] hover:bg-[#D9572B] transition-all"
                >
                  SELECT TIER
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. WHY THIS EXISTS (VISION SECTION) */}
      <section className="py-20 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-4xl mx-auto px-4 bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl">
          <h2 className="font-display text-4xl text-[#16120D] mb-6 border-b border-[rgba(22,18,13,0.18)] pb-4">
            {t('whyExistsTitle')}
          </h2>

          <div className="space-y-6 text-xs md:text-sm text-[#3A332B] leading-relaxed font-medium">
            <p>
              Navigating urban administration often feels like being lost in a maze of endless forms, rubber stamps, and transferred phone calls. Cockroach Janta Party was created as a humorous yet sharp civic project to give voice to frustrated citizens who refuse to normalize broken systems.
            </p>
            <p>
              We use satire not as an escape from reality, but as a lens to examine public issues — from subterranean sewer desilting to 3-year contractor road warranties and open RTI disclosures.
            </p>
            <p>
              Our goal is simple: encourage ordinary citizens to ask better questions, inspect public works ledgers, and actively participate in neighborhood governance.
            </p>
          </div>
        </div>
      </section>

      {/* 15. DO YOU QUALIFY FOR THE SWARM? (MEMBERSHIP SECTION) */}
      <section className="py-20 bg-[#E2D2BF] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">COMMUNITY ELIGIBILITY</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('qualifyTitle')}</h2>
            <p className="text-[#3A332B] text-xs font-medium mt-2">{t('qualifyIntro')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {qualificationCards.map((q) => (
              <div key={q.num} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md text-center">
                <span className="font-display text-4xl text-[#D9572B] block mb-2">{q.num}</span>
                <h3 className="font-display text-2xl text-[#16120D] uppercase mb-2">{t(q.titleKey)}</h3>
                <p className="text-xs text-[#3A332B] font-medium">{t(q.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/join" className="inline-block bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all">
              {t('btnJoinCommunity')}
            </Link>
          </div>
        </div>
      </section>

      {/* 16. THE VISUAL SWARM (GALLERY & POSTERS) */}
      <section className="py-20 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">GRAPHIC ARTWORK</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#16120D]">{t('visualSwarmTitle')}</h2>
            <p className="text-[#3A332B] text-xs font-medium mt-2">{t('visualSwarmSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {visualSwarmPosters.map((p, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md flex flex-col justify-between min-h-[260px]">
                <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-4">{p.tag}</span>
                <h3 className="font-display text-3xl text-[#16120D] uppercase leading-tight my-auto">{p.text}</h3>
                <div className="pt-4 border-t border-[rgba(22,18,13,0.18)] text-[9px] font-bold text-[#3A332B] uppercase tracking-wider">
                  CJP POSTER ARTWORK
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/posters" className="inline-block bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all">
              EXPLORE ALL POSTERS →
            </Link>
          </div>
        </div>
      </section>

      {/* 17. THE COMPLAINT DESK (ISSUE TRACKER & FORM) */}
      <section className="py-20 bg-[#E2D2BF] border-b-2 border-[#16120D]">
        <div className="max-w-3xl mx-auto px-4 bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">CIVIC INTAKE</span>
            <h2 className="font-display text-4xl text-[#16120D]">{t('complaintDeskTitle')}</h2>
            <p className="text-[#3A332B] text-xs font-medium mt-2">{t('complaintDeskSubtitle')}</p>
          </div>

          {issueSubmitted ? (
            <div className="bg-[#EADBCE] border-2 border-[#16120D] p-8 text-center text-[#16120D]">
              <CheckCircle2 size={40} className="mx-auto mb-3 text-[#D9572B]" />
              <h3 className="font-display text-3xl mb-2">ISSUE LOGGED!</h3>
              <p className="text-xs font-medium">Your complaint has been submitted to the community intake queue.</p>
            </div>
          ) : (
            <form onSubmit={handleIssueSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">CATEGORY</label>
                <select
                  value={issueCategory}
                  onChange={(e) => setIssueCategory(e.target.value)}
                  className="w-full bg-[#EADBCE] border border-[#16120D] px-3 py-2 text-xs text-[#16120D] font-bold outline-none"
                >
                  <option>Education</option>
                  <option>Jobs &amp; Skills</option>
                  <option>Public Services</option>
                  <option>Infrastructure &amp; Roads</option>
                  <option>Digital Rights &amp; RTI</option>
                  <option>Environment &amp; Drains</option>
                  <option>Other Civic Issue</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">DETAILS OF ISSUE</label>
                <textarea
                  rows={4}
                  required
                  value={issueText}
                  onChange={(e) => setIssueText(e.target.value)}
                  placeholder="Describe what is broken or confusing..."
                  className="w-full bg-[#EADBCE] border border-[#16120D] px-3 py-2 text-xs text-[#16120D] outline-none resize-none font-medium"
                />
              </div>

              <button type="submit" className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center justify-center gap-2">
                <Send size={14} /> LOG ISSUE WITH THE SWARM →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 18. QUESTIONS PEOPLE KEEP ASKING (FAQ ACCORDION) */}
      <section className="py-20 bg-[#EADBCE] border-b-2 border-[#16120D]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-[#16120D] mb-10">
            {t('faqTitle')}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-[#E2D2BF] transition-colors"
                >
                  <span className="font-bold text-base text-[#16120D] flex items-center gap-2">
                    <HelpCircle size={18} className="text-[#D9572B]" />
                    {faq.q}
                  </span>
                  {openFaq === idx ? <ChevronUp size={18} className="text-[#D9572B]" /> : <ChevronDown size={18} className="text-[#16120D]" />}
                </button>

                {openFaq === idx && (
                  <div className="p-5 pt-0 border-t border-[rgba(22,18,13,0.18)] text-xs text-[#3A332B] leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. ENORMOUS CLOSING CTA (BEBAS NEUE) */}
      <section className="py-24 bg-[#16120D] text-[#F5EFE6] text-center border-b-2 border-[#16120D]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl leading-none uppercase mb-6">
            {t('finalCtaHeadline')}
          </h2>
          <p className="text-base sm:text-lg text-[#EADBCE] max-w-lg mx-auto mb-10 font-medium">
            {t('finalCtaSupporting')}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/manifesto" className="bg-[#D9572B] text-white font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#D9572B] hover:bg-[#EADBCE] hover:border-[#EADBCE] hover:text-[#16120D] transition-all shadow-lg">
              {t('btnEnterManifesto')}
            </Link>
            <Link to="/contact" className="bg-transparent text-[#F5EFE6] font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#F5EFE6] hover:bg-[#F5EFE6] hover:text-[#16120D] transition-all">
              {t('btnRaiseIssue')}
            </Link>
            <Link to="/join" className="bg-[#EADBCE] text-[#16120D] font-extrabold text-xs uppercase px-8 py-4 border-2 border-[#EADBCE] hover:bg-[#D9572B] hover:border-[#D9572B] hover:text-white transition-all">
              {t('navJoinSwarm')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
