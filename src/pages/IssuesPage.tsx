import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { issuesData } from '../data/issuesData';
import { campaignsData } from '../data/campaignsData';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Filter, 
  Sparkles, 
  ShieldAlert, 
  FileText, 
  ChevronDown, 
  BookOpen, 
  Users, 
  Target, 
  Award,
  Layers,
  Activity
} from 'lucide-react';

export const IssuesPage: React.FC = () => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  // Filter Categories & Counts
  const filterCategories = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: issuesData.length,
      'SUBTERRANEAN DRAINAGE': 0,
      'PUBLIC INFRASTRUCTURE': 0,
      EDUCATION: 0,
      'PUBLIC HEALTH': 0,
      'YOUTH EMPLOYMENT': 0,
      'DIGITAL RIGHTS': 0,
      ENVIRONMENT: 0,
      ACCOUNTABILITY: 0,
    };

    issuesData.forEach((iss) => {
      const catKey = iss.category.toUpperCase();
      if (counts[catKey] !== undefined) counts[catKey]++;
    });

    return [
      { id: 'ALL', labelEn: 'ALL ISSUES', labelHi: 'सभी नागरिक मुद्दे' },
      { id: 'SUBTERRANEAN DRAINAGE', labelEn: 'DRAINAGE & SEWERS', labelHi: 'सीवर व नाला सफाई' },
      { id: 'PUBLIC INFRASTRUCTURE', labelEn: 'INFRASTRUCTURE & ROADS', labelHi: 'सड़क व अवसंरचना' },
      { id: 'EDUCATION', labelEn: 'EDUCATION & SCHOOLS', labelHi: 'शिक्षा व स्कूल' },
      { id: 'PUBLIC HEALTH', labelEn: 'PUBLIC HEALTH & WATER', labelHi: 'जनस्वास्थ्य व पानी' },
      { id: 'YOUTH EMPLOYMENT', labelEn: 'YOUTH & WAGES', labelHi: 'युवा व रोजगार' },
      { id: 'DIGITAL RIGHTS', labelEn: 'DIGITAL RIGHTS & RTI', labelHi: 'डिजिटल व आरटीआई' },
      { id: 'ENVIRONMENT', labelEn: 'ENVIRONMENT & PARKS', labelHi: 'पर्यावरण व पार्क' },
      { id: 'ACCOUNTABILITY', labelEn: 'ACCOUNTABILITY', labelHi: 'पारदर्शिता' },
    ].map((f) => ({ ...f, count: counts[f.id] || 0 }));
  }, []);

  // Filtered Issues List
  const filteredIssues = useMemo(() => {
    if (activeFilter === 'ALL') return issuesData;
    return issuesData.filter(
      (iss) => iss.category.toUpperCase() === activeFilter
    );
  }, [activeFilter]);

  // Featured Issue (Issue #01 - Subterranean Drainage)
  const featuredIssue = useMemo(() => {
    return issuesData.find((iss) => iss.num === '01') || issuesData[0];
  }, []);

  // Related Campaigns Sample (Top 3 active campaigns)
  const relatedCampaigns = useMemo(() => {
    return campaignsData.slice(0, 3);
  }, []);

  return (
    <div className="issues-page bg-[#EADBCE] text-[#16120D] font-sans min-h-screen selection:bg-[#D9572B] selection:text-white pb-24">
      <SEOHead
        title={lang === 'hi' ? 'नागरिक मुद्दे व जनहित प्रश्न | कॉकरोच जनता पार्टी' : 'The Issues That Matter | Public Causes & Civic Analysis | Cockroach Janta Party'}
        description="Explore verified civic issues championed by Cockroach Janta Party: Subterranean sewer desilting, contractor road warranties, school infrastructure, RTI disclosures, and tap water diagnostics."
        canonicalUrl="https://cockroachjantapartywale.com/issues"
      />

      {/* ==========================================
          1. HERO SECTION — THE ISSUES THAT MATTER
      ========================================== */}
      <section className="relative bg-[#16120D] text-[#F5EFE6] pt-24 pb-20 overflow-hidden border-b-4 border-[#D9572B]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D9572B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E6A100]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-[#D9572B] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                <Sparkles size={14} className="animate-pulse" />
                <span>{lang === 'hi' ? 'नागरिक मुद्दे एवं जनहित प्रश्न' : 'THE ISSUES THAT MATTER'}</span>
              </div>

              <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase text-white">
                {lang === 'hi' ? (
                  <>
                    वे चुनौतियां जिन्हें हम <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      बदलने
                    </span>{' '}
                    का संकल्प लेते हैं।
                  </>
                ) : (
                  <>
                    THE CHALLENGES WE <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      CHOOSE TO CHANGE
                    </span>
                    .
                  </>
                )}
              </h1>

              <p className="text-[#EADBCE]/90 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
                {lang === 'hi'
                  ? "नागरिक आरटीआई ऑडिट से लेकर सड़कों की 3-वर्षीय ठेकेदार वारंटी तक - उन प्रमुख मुद्दों की पड़ताल करें जिन्हें सीजेपी प्राथमिकता देती है। तथ्य, आधिकारिक रुख और निष्पक्ष जनहित संदर्भ का स्पष्ट विभाजन।"
                  : "Empirical civic analysis of municipal priorities: Subterranean drainage verification, contractor 3-year repair warranties, classroom infrastructure gaps, and open RTI Section 4 publishing."}
              </p>

              {/* Quick Metrics Ticker */}
              <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#F5EFE6]/15 max-w-xl">
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#E6A100]">08</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">
                    {lang === 'hi' ? 'सत्यापित मुद्दे' : 'VERIFIED ISSUES'}
                  </div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#D9572B]">45K+</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">
                    {lang === 'hi' ? 'नागरिक ऑडिटर' : 'CIVIC AUDITORS'}
                  </div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#27AE60]">100%</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">
                    {lang === 'hi' ? 'आर.टी.आई. पारदर्शिता' : 'RTI DISCLOSURE'}
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#issues-showcase"
                  id="hero-explore-issues-btn"
                  className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white px-8 py-4 font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 group border-2 border-[#D9572B]"
                >
                  <span>{lang === 'hi' ? 'सभी मुद्दे देखें' : 'EXPLORE ALL ISSUES'}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/campaigns"
                  id="hero-view-campaigns-btn"
                  className="bg-transparent hover:bg-[#F5EFE6]/10 text-[#F5EFE6] border-2 border-[#F5EFE6]/40 hover:border-white px-7 py-4 font-black uppercase text-xs tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <Layers size={15} className="text-[#E6A100]" />
                  <span>{lang === 'hi' ? 'संबद्ध अभियान' : 'VIEW RELATED CAMPAIGNS'}</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D9572B] to-[#E6A100] rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000" />
                
                <div className="relative bg-[#231F1A] border-4 border-[#F5EFE6]/20 p-3 rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src="/cjp_sep5_protest_poster.png"
                      alt="CJP Civic Issues Official Campaign Poster"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-transparent to-transparent opacity-85" />
                    
                    <div className="absolute top-4 left-4 bg-[#16120D]/90 backdrop-blur-md text-[#E6A100] px-3 py-1 text-[11px] font-black uppercase tracking-widest border border-[#E6A100]/30 rounded">
                      OFFICIAL ISSUE POSTER #01
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-black uppercase text-[#D9572B] tracking-widest mb-1">
                        5 SEP MARCH • DRAINAGE &amp; SCHOOL AUDIT
                      </div>
                      <div className="font-serif font-black text-xl leading-tight">
                        "CHALO POLICE HQ &amp; INDIA GATE — DEMAND ACCOUNTABILITY!"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center flex justify-center">
          <a
            href="#issues-intro"
            className="text-[#EADBCE]/60 hover:text-white inline-flex flex-col items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest transition-colors animate-bounce"
            aria-label="Scroll down to introduction"
          >
            <span>{lang === 'hi' ? 'नीचे स्क्रॉल करें' : 'SCROLL TO EXPLORE'}</span>
            <ChevronDown size={16} />
          </a>
        </div>
      </section>


      {/* ==========================================
          2. EDITORIAL INTRODUCTION SECTION
      ========================================== */}
      <section id="issues-intro" className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] rounded-2xl p-8 md:p-14 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Oversized Statement */}
            <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r-4 border-[#16120D] pb-8 lg:pb-0 lg:pr-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#D9572B] block mb-2">
                {lang === 'hi' ? 'नागरिक दर्शन' : 'CIVIC PHILOSOPHY'}
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl uppercase leading-[1.1] text-[#16120D]">
                {lang === 'hi' ? (
                  <>
                    "समस्या को समझना ही <br />
                    उसे <span className="text-[#D9572B] underline decoration-[#E6A100]">बदलने की दिशा में</span> पहला कदम है।"
                  </>
                ) : (
                  <>
                    "UNDERSTANDING THE PROBLEM IS THE FIRST STEP TOWARD <span className="text-[#D9572B] underline decoration-[#E6A100]">CHANGING IT</span>."
                  </>
                )}
              </h2>
            </div>

            {/* Right Context Paragraphs */}
            <div className="lg:col-span-6 space-y-4 text-xs md:text-sm font-medium text-[#3A332B] leading-relaxed">
              <p>
                {lang === 'hi'
                  ? "कॉकरोच जनता पार्टी का मानना है कि नागरिक समस्याएं केवल राजनीतिक नारों का विषय नहीं हैं। हर सार्वजनिक मुद्दे - चाहे वह टूटी हुई सड़क हो, ओवरफ्लो होता सीवर हो, या स्कूल की टपकती छत हो - का समाधान तथ्यात्मक आधार पर होना चाहिए।"
                  : "Every civic issue documented below represents a concrete operational challenge faced by residents across municipal wards. We strictly distinguish between objective problem backgrounds, CJP's stated civic positions, and neutral context."}
              </p>
              <p>
                {lang === 'hi'
                  ? "हम आरटीआई अधिनियम की धारा 4 के तहत सभी रखरखाव बजटों के खुले प्रकाशन और सड़कों पर ठेकेदारों के अनिवार्य 3-वर्षीय मरम्मत वारंटी बोर्डों की वकालत करते हैं।"
                  : "Through citizen RTI scorecards, GPS-logged desilting depth audits, and on-site contractor notice board verifications, we turn everyday civic apathy into organized public accountability."}
              </p>

              {/* Editorial Notice Banner */}
              <div className="bg-[#EADBCE] border-l-4 border-[#D9572B] p-4 text-xs font-bold text-[#16120D] flex items-start gap-3 mt-4">
                <ShieldAlert size={20} className="text-[#D9572B] shrink-0 mt-0.5" />
                <div>
                  <span className="uppercase block font-extrabold text-[#D9572B] mb-0.5">EDITORIAL DISTINCTION GUARANTEE</span>
                  Every issue profile below cleanly demarcates: 1) Factual Background, 2) CJP Stated Position, and 3) Neutral Public Context.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          3. STICKY ISSUE CATEGORY NAVIGATION BAR
      ========================================== */}
      <section id="issues-filter-nav" className="sticky top-0 z-40 bg-[#16120D] border-b-2 border-[#D9572B] shadow-2xl backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            
            <div className="flex items-center gap-2 text-[#EADBCE] text-xs font-black uppercase tracking-widest shrink-0 pr-2 border-r border-[#F5EFE6]/20 hidden sm:flex">
              <Filter size={15} className="text-[#D9572B]" />
              <span>{lang === 'hi' ? 'मुद्दा फ़िल्टर:' : 'FILTER ISSUES:'}</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {filterCategories.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`issue-filter-btn-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 rounded-md flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#D9572B] text-white shadow-lg scale-105 font-black'
                        : 'bg-[#231F1A] text-[#EADBCE] hover:bg-[#3A332B] hover:text-white border border-[#F5EFE6]/10'
                    }`}
                  >
                    <span>{lang === 'hi' ? cat.labelHi : cat.labelEn}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white text-[#D9572B] font-black'
                          : 'bg-[#16120D] text-[#EADBCE]/70'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {activeFilter !== 'ALL' && (
              <button
                onClick={() => setActiveFilter('ALL')}
                className="text-[11px] font-extrabold text-[#D9572B] hover:underline uppercase tracking-wider shrink-0 underline-offset-4"
              >
                {lang === 'hi' ? 'रीसेट करें' : 'RESET'}
              </button>
            )}

          </div>
        </div>
      </section>


      {/* ==========================================
          4. FEATURED ISSUE SPOTLIGHT
      ========================================== */}
      {featuredIssue && activeFilter === 'ALL' && (
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 pb-8">
          <div className="bg-[#16120D] border-4 border-[#16120D] text-[#F5EFE6] rounded-2xl overflow-hidden shadow-2xl relative group">
            
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* Left Large Visual */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden bg-black">
                <img
                  src={featuredIssue.featuredImage}
                  alt={featuredIssue.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-black/40 to-transparent" />
                
                {/* Number & Category Overlay Badge */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-3 items-center">
                  <span className="bg-[#D9572B] text-white px-3.5 py-1 text-xs font-black uppercase tracking-widest shadow-lg rounded">
                    FEATURED CIVIC ISSUE
                  </span>
                  <span className="bg-[#16120D]/90 backdrop-blur-md text-[#E6A100] border border-[#E6A100]/40 px-3 py-1 text-xs font-black uppercase tracking-widest rounded">
                    #{featuredIssue.num} • {featuredIssue.category}
                  </span>
                </div>

                {/* Slogan / Statement Banner */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#16120D]/85 backdrop-blur-md p-4 border-l-4 border-[#C0392B]">
                  <p className="font-serif font-black text-lg md:text-xl text-[#E6A100] uppercase tracking-wide">
                    "{lang === 'hi' ? featuredIssue.titleHi || featuredIssue.title : featuredIssue.title}"
                  </p>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6 bg-[#16120D]">
                <div className="space-y-4">
                  
                  <div className="flex items-center gap-3 text-xs font-bold text-[#EADBCE]/70">
                    <span className="flex items-center gap-1 text-[#C0392B]">
                      <AlertTriangle size={14} />
                      SEVERITY: {featuredIssue.severity.toUpperCase()}
                    </span>
                    <span>•</span>
                    <span className="text-[#E6A100]">
                      {featuredIssue.source}
                    </span>
                  </div>

                  <h2 className="font-serif font-black text-3xl md:text-4xl leading-tight text-white uppercase">
                    {lang === 'hi' ? featuredIssue.titleHi || featuredIssue.title : featuredIssue.title}
                  </h2>

                  {/* 3-Part Structural Breakdown */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="bg-[#231F1A] p-3.5 rounded border-l-2 border-[#E6A100]">
                      <span className="text-[10px] font-black text-[#E6A100] uppercase block mb-0.5">1. WHAT IS THE ISSUE?</span>
                      <p className="text-[#EADBCE] font-normal">{lang === 'hi' ? featuredIssue.whatIsIssueHi || featuredIssue.whatIsIssue : featuredIssue.whatIsIssue}</p>
                    </div>

                    <div className="bg-[#D9572B]/20 p-3.5 rounded border-l-2 border-[#D9572B]">
                      <span className="text-[10px] font-black text-[#D9572B] uppercase block mb-0.5">2. WHAT DOES CJP SAY? (STATED POSITION)</span>
                      <p className="text-white font-bold">{lang === 'hi' ? featuredIssue.whatCjpSaysHi || featuredIssue.whatCjpSays : featuredIssue.whatCjpSays}</p>
                    </div>

                    <div className="bg-[#231F1A] p-3.5 rounded border-l-2 border-white/40">
                      <span className="text-[10px] font-black text-[#EADBCE]/70 uppercase block mb-0.5">3. WHY IT MATTERS (NEUTRAL CONTEXT)</span>
                      <p className="text-[#EADBCE]/90 font-normal">{lang === 'hi' ? featuredIssue.whyMattersHi || featuredIssue.whyMatters : featuredIssue.whyMatters}</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Action Area */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#27AE60]">
                    <CheckCircle2 size={16} />
                    <span>VERIFIED AUDIT ITEM</span>
                  </div>

                  <Link
                    to={featuredIssue.route}
                    id={`featured-issue-action-${featuredIssue.id}`}
                    className="bg-[#D9572B] hover:bg-[#E6A100] text-white hover:text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded transition-all duration-300 flex items-center gap-2 group/btn"
                  >
                    <span>{lang === 'hi' ? 'संबद्ध अभियान' : 'VIEW CAMPAIGN'}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* ==========================================
          5. EDITORIAL ISSUE MASONRY GRID SHOWCASE
      ========================================== */}
      <section id="issues-showcase" className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#16120D]/20 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-[#D9572B] uppercase">
              {lang === 'hi' ? 'नागरिक कारण गैलरी' : 'EDITORIAL CIVIC CAUSES'}
            </span>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-[#16120D] uppercase mt-1">
              {activeFilter === 'ALL'
                ? (lang === 'hi' ? 'सभी सत्यापित मुद्दे' : 'ALL VERIFIED CIVIC ISSUES')
                : `${activeFilter} ISSUES`}
            </h2>
          </div>

          <div className="text-xs font-bold text-[#3A332B]">
            {lang === 'hi'
              ? `कुल ${filteredIssues.length} मुद्दे प्रदर्शित`
              : `SHOWING ${filteredIssues.length} CURATED CIVIC ISSUES`}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {filteredIssues.map((iss, index) => {
            const styleVariant = index % 5;
            
            let colSpanClass = 'lg:col-span-6';
            if (index === 0) colSpanClass = 'lg:col-span-7';
            else if (index === 1) colSpanClass = 'lg:col-span-5';
            else if (index === 2) colSpanClass = 'lg:col-span-5';
            else if (index === 3) colSpanClass = 'lg:col-span-7';
            else if (index === 4) colSpanClass = 'lg:col-span-6';
            else if (index === 5) colSpanClass = 'lg:col-span-6';
            else if (index === 6) colSpanClass = 'lg:col-span-8';
            else if (index === 7) colSpanClass = 'lg:col-span-4';

            // VARIANT 0: DARK EDITORIAL POSTER
            if (styleVariant === 0) {
              return (
                <article
                  key={iss.id}
                  className={`${colSpanClass} bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={iss.featuredImage}
                      alt={iss.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-[#16120D]/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="font-serif font-black text-2xl text-[#E6A100] tracking-tighter">
                        #{iss.num}
                      </span>
                      <span className={`text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded ${iss.badgeColor || 'bg-[#D9572B] text-white'}`}>
                        {iss.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif font-black text-2xl md:text-3xl text-white uppercase leading-tight group-hover:text-[#E6A100] transition-colors">
                        {lang === 'hi' ? iss.titleHi || iss.title : iss.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 bg-[#16120D] flex-grow flex flex-col justify-between">
                    <div className="space-y-3 text-xs">
                      <div className="bg-[#231F1A] p-3 rounded border-l-2 border-[#E6A100]">
                        <span className="font-extrabold text-[#E6A100] uppercase block mb-0.5 text-[10px]">WHAT IS THE ISSUE?</span>
                        <p className="text-[#EADBCE]">{lang === 'hi' ? iss.whatIsIssueHi || iss.whatIsIssue : iss.whatIsIssue}</p>
                      </div>

                      <div className="bg-[#D9572B]/20 p-3 rounded border-l-2 border-[#D9572B]">
                        <span className="font-extrabold text-[#D9572B] uppercase block mb-0.5 text-[10px]">CJP POSITION</span>
                        <p className="text-white font-bold">{lang === 'hi' ? iss.whatCjpSaysHi || iss.whatCjpSays : iss.whatCjpSays}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#F5EFE6]/15 flex items-center justify-between">
                      <div className="text-[10px] font-extrabold text-[#EADBCE]/60 uppercase">
                        SOURCE: {iss.source}
                      </div>

                      <Link
                        to={iss.route}
                        id={`issue-poster-link-${iss.id}`}
                        className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white px-4 py-2 rounded font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1 group/btn"
                      >
                        <span>{lang === 'hi' ? 'देखें' : 'EXPLORE'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 1: SPLIT MAGAZINE ARTWORK POSTER
            if (styleVariant === 1) {
              return (
                <article
                  key={iss.id}
                  className={`${colSpanClass} bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                >
                  <div className="p-6 pb-4 border-b-2 border-[#16120D]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-black tracking-widest uppercase text-[#D9572B]">
                        CIVIC ISSUE #{iss.num}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-[#16120D] bg-[#16120D] text-[#F5EFE6]">
                        {iss.category}
                      </span>
                    </div>

                    <h3 className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight mb-2 text-[#16120D] group-hover:text-[#D9572B] transition-colors">
                      {lang === 'hi' ? iss.titleHi || iss.title : iss.title}
                    </h3>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={iss.featuredImage}
                      alt={iss.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                  </div>

                  <div className="p-6 bg-[#EADBCE] flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2 text-xs">
                      <div className="bg-[#F5EFE6] p-3 border border-[#16120D]/20">
                        <span className="font-extrabold text-[#16120D] block mb-0.5 uppercase text-[10px]">BACKGROUND</span>
                        <p className="text-[#3A332B] font-medium">{lang === 'hi' ? iss.whatIsIssueHi || iss.whatIsIssue : iss.whatIsIssue}</p>
                      </div>
                      <div className="bg-[#16120D] text-white p-3">
                        <span className="font-extrabold text-[#D9572B] block mb-0.5 uppercase text-[10px]">CJP POSITION</span>
                        <p className="text-[#EADBCE] font-bold">{lang === 'hi' ? iss.whatCjpSaysHi || iss.whatCjpSays : iss.whatCjpSays}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#16120D]/20 flex justify-between items-center">
                      <span className="text-[10px] font-extrabold uppercase text-[#3A332B]">
                        {iss.source}
                      </span>

                      <Link
                        to={iss.route}
                        id={`issue-poster-link-${iss.id}`}
                        className="bg-[#16120D] hover:bg-[#D9572B] text-[#F5EFE6] hover:text-white px-4 py-2 rounded font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 group/btn"
                      >
                        <span>{lang === 'hi' ? 'अभियान' : 'CAMPAIGN'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 2: PLACARD WARNING BANNER POSTER
            if (styleVariant === 2) {
              return (
                <article
                  key={iss.id}
                  className={`${colSpanClass} bg-[#231F1A] text-white border-4 border-[#E6A100] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={iss.featuredImage}
                      alt={iss.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#231F1A] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-[#E6A100] text-black px-3 py-1 font-black text-[11px] uppercase tracking-widest rounded shadow flex items-center gap-1">
                      <AlertTriangle size={13} />
                      <span>{iss.category}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-black text-[#E6A100] tracking-widest uppercase mb-1">
                        CAUSE #{iss.num}
                      </div>
                      <h3 className="font-serif font-black text-2xl uppercase leading-tight mb-3 text-white group-hover:text-[#E6A100] transition-colors">
                        {lang === 'hi' ? iss.titleHi || iss.title : iss.title}
                      </h3>
                      
                      <div className="bg-[#16120D] p-3 rounded border border-[#E6A100]/30 text-xs">
                        <span className="font-extrabold text-[#E6A100] uppercase block mb-1">WHAT DOES CJP SAY?</span>
                        <p className="text-[#EADBCE] font-semibold">{lang === 'hi' ? iss.whatCjpSaysHi || iss.whatCjpSays : iss.whatCjpSays}</p>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center border-t border-white/10">
                      <span className="text-[10px] font-bold text-[#EADBCE]/70">
                        {iss.source}
                      </span>

                      <Link
                        to={iss.route}
                        id={`issue-poster-link-${iss.id}`}
                        className="bg-[#E6A100] hover:bg-white text-black font-black px-4 py-2 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-1 group/btn"
                      >
                        <span>{lang === 'hi' ? 'जांचें' : 'READ ISSUE'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 3: MINIMALIST BRAND CANVAS POSTER
            if (styleVariant === 3) {
              return (
                <article
                  key={iss.id}
                  className={`${colSpanClass} bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group grid md:grid-cols-12 items-stretch`}
                >
                  <div className="md:col-span-5 relative aspect-square md:aspect-auto overflow-hidden bg-black">
                    <img
                      src={iss.featuredImage}
                      alt={iss.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#16120D] text-white text-[10px] font-black px-2.5 py-0.5 uppercase tracking-widest">
                      #{iss.num}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#D9572B] text-white rounded">
                          {iss.category}
                        </span>
                      </div>

                      <h3 className="font-serif font-black text-2xl uppercase leading-tight mb-2 text-[#16120D] group-hover:text-[#D9572B] transition-colors">
                        {lang === 'hi' ? iss.titleHi || iss.title : iss.title}
                      </h3>
                      
                      <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-3">
                        {lang === 'hi' ? iss.whatIsIssueHi || iss.whatIsIssue : iss.whatIsIssue}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#16120D]/20 flex justify-between items-center">
                      <span className="text-[10px] font-extrabold uppercase text-[#3A332B]">
                        {iss.source}
                      </span>

                      <Link
                        to={iss.route}
                        id={`issue-poster-link-${iss.id}`}
                        className="bg-[#16120D] hover:bg-[#D9572B] text-white px-4 py-2 rounded text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1 group/btn"
                      >
                        <span>{lang === 'hi' ? 'विवरण' : 'EXPLORE'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 4: FULL-BLEED MAGAZINE ARTWORK POSTER
            return (
              <article
                key={iss.id}
                className={`${colSpanClass} relative min-h-[420px] rounded-xl overflow-hidden shadow-xl border-4 border-[#16120D] group flex flex-col justify-end p-6 bg-black text-white`}
              >
                <img
                  src={iss.featuredImage}
                  alt={iss.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-[#16120D]/60 to-transparent" />
                
                <div className="relative z-10 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="bg-[#D9572B] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded shadow">
                      {iss.category}
                    </span>
                    <span className="text-serif font-black text-xl text-[#E6A100]">
                      #{iss.num}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight text-white group-hover:text-[#E6A100] transition-colors">
                    {lang === 'hi' ? iss.titleHi || iss.title : iss.title}
                  </h3>

                  <p className="text-xs text-[#EADBCE]/85 line-clamp-2 font-normal">
                    {lang === 'hi' ? iss.whatIsIssueHi || iss.whatIsIssue : iss.whatIsIssue}
                  </p>

                  <div className="pt-2 flex justify-between items-center border-t border-white/20">
                    <span className="text-[10px] font-bold text-[#E6A100] uppercase tracking-wider">
                      {iss.source}
                    </span>

                    <Link
                      to={iss.route}
                      id={`issue-poster-link-${iss.id}`}
                      className="bg-white text-[#16120D] hover:bg-[#D9572B] hover:text-white px-4 py-2 rounded font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1 group/btn"
                    >
                      <span>{lang === 'hi' ? 'देखें' : 'VIEW ISSUE'}</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

        </div>

      </section>


      {/* ==========================================
          6. FULL-WIDTH EDITORIAL VISUAL BREAK
      ========================================== */}
      <section className="my-16 bg-[#16120D] text-[#F5EFE6] py-20 px-6 relative overflow-hidden border-y-4 border-[#D9572B]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E6A100_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block bg-[#D9572B] text-white px-4 py-1 text-[11px] font-black uppercase tracking-widest rounded-full">
            {lang === 'hi' ? 'नागरिक जागरूकता' : 'THE IMPERATIVE FOR ACTION'}
          </span>

          <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase leading-tight">
            {lang === 'hi' ? (
              <>
                "हर मुद्दा बदलाव लाने का एक अवसर है। <br />
                इसे{' '}
                <span className="text-[#E6A100] italic underline decoration-[#D9572B]">
                  तथ्यों के साथ
                </span>{' '}
                उठाएं।"
              </>
            ) : (
              <>
                "EVERY ISSUE IS A CHANCE TO CREATE CHANGE. <br />
                AUDITED{' '}
                <span className="text-[#E6A100] italic underline decoration-[#D9572B]">
                  WARD BY WARD
                </span>
                ."
              </>
            )}
          </h2>

          <p className="text-[#EADBCE]/80 text-sm md:text-base max-w-2xl mx-auto font-normal">
            {lang === 'hi'
              ? "जब नागरिक जागरूक होते हैं और आरटीआई के माध्यम से सही सवाल पूछते हैं, तो नगर निगम और ठेकेदार जवाबदेह बनने पर मजबूर होते हैं।"
              : "Awareness without action remains mere commentary. By transforming ward issues into structured RTI audits and contractor warranty notices, CJP builds lasting civic compliance."}
          </p>
        </div>
      </section>


      {/* ==========================================
          7. ISSUE → ACTION VISUAL FLOW
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#D9572B] block mb-1">
            {lang === 'hi' ? 'जागरूकता से कार्रवाई तक' : 'AWARENESS TO ACTION FLOW'}
          </span>
          <h2 className="font-serif font-black text-3xl md:text-5xl uppercase text-[#16120D]">
            {lang === 'hi' ? 'हम नागरिक मुद्दों को कैसे हल करते हैं' : 'HOW WE TURN ISSUES INTO IMPACT'}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 rounded-xl shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif font-black text-3xl text-[#D9572B]">01</span>
                <BookOpen size={24} className="text-[#16120D]" />
              </div>
              <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-2">UNDERSTAND</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
                Read citizen RTI scorecards, inspect physical ward worksites, and document contractor work orders.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#16120D]/20 text-[10px] font-extrabold uppercase text-[#D9572B]">
              STEP 1 • EMPIRICAL AUDIT
            </div>
          </div>

          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 rounded-xl shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif font-black text-3xl text-[#E6A100]">02</span>
                <Users size={24} className="text-[#16120D]" />
              </div>
              <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-2">ENGAGE</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
                Join neighborhood ward swarms, catalog pothole coordinates, and participate in local night walks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#16120D]/20 text-[10px] font-extrabold uppercase text-[#E6A100]">
              STEP 2 • COMMUNITY SWARM
            </div>
          </div>

          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 rounded-xl shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif font-black text-3xl text-[#27AE60]">03</span>
                <Target size={24} className="text-[#16120D]" />
              </div>
              <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-2">ACT</h3>
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
                Demand contractor 3-year repair warranty notice boards and file Section 4 RTI disclosures.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#16120D]/20 text-[10px] font-extrabold uppercase text-[#27AE60]">
              STEP 3 • FIELD ADVOCACY
            </div>
          </div>

          <div className="bg-[#16120D] text-white border-2 border-[#16120D] p-6 rounded-xl shadow-lg relative flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif font-black text-3xl text-[#E6A100]">04</span>
                <Award size={24} className="text-[#E6A100]" />
              </div>
              <h3 className="font-serif font-black text-lg text-white uppercase mb-2">CREATE IMPACT</h3>
              <p className="text-xs text-[#EADBCE] font-normal leading-relaxed">
                Enforce mandatory contractor repair compliance, clear clogged sewers, and waterproof school classrooms.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 text-[10px] font-extrabold uppercase text-[#E6A100]">
              STEP 4 • CIVIC RESULTS
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          8. TURN AWARENESS INTO ACTION (RELATED CAMPAIGNS)
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-12 rounded-2xl shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/20 gap-4">
            <div>
              <span className="text-xs font-black text-[#E6A100] uppercase tracking-widest">
                {lang === 'hi' ? 'संबद्ध फील्ड पहल' : 'FIELD CAMPAIGN INTEGRATION'}
              </span>
              <h2 className="font-serif font-black text-3xl md:text-4xl text-white uppercase mt-1">
                {lang === 'hi' ? 'जागरूकता को कार्रवाई में बदलें' : 'TURN AWARENESS INTO ACTION'}
              </h2>
            </div>

            <Link
              to="/campaigns"
              id="view-all-campaigns-link"
              className="text-xs font-extrabold text-[#D9572B] hover:text-white uppercase tracking-wider flex items-center gap-1"
            >
              <span>{lang === 'hi' ? 'सभी 8 अभियान देखें' : 'VIEW ALL CAMPAIGNS'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedCampaigns.map((c) => (
              <div key={c.slug} className="bg-[#231F1A] border border-white/10 p-5 rounded-lg flex flex-col justify-between group hover:border-[#D9572B] transition-all">
                <div>
                  <div className="aspect-video overflow-hidden rounded mb-4 bg-black">
                    <img src={c.featuredImage} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-[9px] font-black px-2 py-0.5 bg-[#D9572B] text-white rounded uppercase tracking-wider">
                    {c.category}
                  </span>
                  <h3 className="font-serif font-black text-lg text-white uppercase mt-2 group-hover:text-[#E6A100] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#EADBCE]/80 font-normal line-clamp-2 mt-1">
                    {c.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-[#E6A100]">STATUS: {c.status}</span>
                  <Link to={c.route} className="text-xs font-black text-white hover:text-[#D9572B] flex items-center gap-1">
                    EXPLORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          9. EDITORIAL SOURCES & REFERENCES
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 rounded-xl shadow-md">
          <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-4 border-b border-[#16120D]/20 pb-2 flex items-center gap-2">
            <FileText size={18} className="text-[#D9572B]" />
            <span>ISSUES SOURCES, NORMS &amp; CITATIONS</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-xs text-[#3A332B] font-medium">
            <div className="bg-[#EADBCE] p-4 border border-[#16120D]/20 rounded">
              <span className="font-extrabold text-[#16120D] block mb-1 uppercase">RTI ACT SECTION 4 MANDATE</span>
              Proactive public disclosure requirement for municipal tender ledgers, contractor bill-of-quantities, and worksite logs.
            </div>

            <div className="bg-[#EADBCE] p-4 border border-[#16120D]/20 rounded">
              <span className="font-extrabold text-[#16120D] block mb-1 uppercase">BIS IS 10500 DRINKING WATER NORMS</span>
              National statutory standard governing permissible TDS, pH, and residual chlorine levels for urban household tap water.
            </div>

            <div className="bg-[#EADBCE] p-4 border border-[#16120D]/20 rounded">
              <span className="font-extrabold text-[#16120D] block mb-1 uppercase">CJP CIVIC AUDIT MANUAL 2026</span>
              Empirical inspection guidelines for subterranean drain depth measurements, school roof scorecards, and paving warranty notice boards.
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          10. FINAL HIGH-IMPACT CALL TO ACTION
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8">
        <div className="bg-gradient-to-br from-[#16120D] via-[#231F1A] to-[#16120D] text-white p-10 md:p-16 rounded-2xl border-4 border-[#D9572B] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9572B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6A100]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#E6A100] text-black px-3.5 py-1 text-xs font-black uppercase tracking-widest rounded-full">
              <Activity size={14} />
              <span>{lang === 'hi' ? 'नागरिक क्रांति' : 'TAKE CIVIC ACTION TODAY'}</span>
            </div>

            <h2 className="font-serif font-black text-3xl md:text-5xl text-white uppercase leading-tight">
              {lang === 'hi'
                ? 'दुनिया किनारे बैठकर देखने से नहीं बदलती।'
                : "THE WORLD DOESN'T CHANGE BY WATCHING FROM THE SIDELINES."}
            </h2>

            <p className="text-[#EADBCE]/85 text-sm md:text-base max-w-xl mx-auto font-medium">
              {lang === 'hi'
                ? "सीजेपी स्वार्म में शामिल हों। अपने वार्ड में आरटीआई फाइल करें, सड़कों पर वारंटी बोर्ड की जांच करें और वास्तविक बदलाव लाएं।"
                : "Join thousands of active student observers and neighborhood residents turning civic issues into empirical accountability."}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/campaigns"
                id="final-cta-explore-campaigns-btn"
                className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 shadow-xl flex items-center gap-2 border-2 border-[#D9572B] group"
              >
                <span>{lang === 'hi' ? 'अभियान देखें' : 'EXPLORE OUR CAMPAIGNS'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/join"
                id="final-cta-join-swarm-btn"
                className="bg-transparent hover:bg-white/10 text-[#F5EFE6] border-2 border-white/40 hover:border-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Users size={16} className="text-[#E6A100]" />
                <span>{lang === 'hi' ? 'स्वार्म में शामिल हों' : 'JOIN THE SWARM'}</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
