import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { campaignsData } from '../data/campaignsData';
import { 
  Flag, 
  ArrowRight, 
  Filter, 
  Sparkles, 
  MapPin, 
  ChevronDown, 
  ExternalLink, 
  Layers, 
  Activity,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const CampaignsPage: React.FC = () => {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  // Filter Categories & Counts
  const filterCategories = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: campaignsData.length,
      ONGOING: 0,
      UPCOMING: 0,
      COMPLETED: 0,
      EDUCATION: 0,
      INFRASTRUCTURE: 0,
      ENVIRONMENT: 0,
      'CIVIC RIGHTS': 0,
      SATIRE: 0,
    };

    campaignsData.forEach((c) => {
      const statusKey = c.status.toUpperCase();
      if (counts[statusKey] !== undefined) counts[statusKey]++;

      const catKey = c.category.toUpperCase();
      if (counts[catKey] !== undefined) counts[catKey]++;
    });

    return [
      { id: 'ALL', labelEn: 'ALL CAMPAIGNS', labelHi: 'सभी अभियान' },
      { id: 'ONGOING', labelEn: 'ACTIVE & ONGOING', labelHi: 'सक्रिय अभियान' },
      { id: 'UPCOMING', labelEn: 'UPCOMING', labelHi: 'आगामी अभियान' },
      { id: 'COMPLETED', labelEn: 'COMPLETED', labelHi: 'संपन्न अभियान' },
      { id: 'EDUCATION', labelEn: 'EDUCATION', labelHi: 'शिक्षा' },
      { id: 'INFRASTRUCTURE', labelEn: 'INFRASTRUCTURE', labelHi: 'अवसंरचना' },
      { id: 'ENVIRONMENT', labelEn: 'ENVIRONMENT', labelHi: 'पर्यावरण' },
      { id: 'CIVIC RIGHTS', labelEn: 'CIVIC RIGHTS', labelHi: 'नागरिक अधिकार' },
      { id: 'SATIRE', labelEn: 'SATIRE & DIGITAL', labelHi: 'व्यंग्य व डिजिटल' },
    ].map((f) => ({ ...f, count: counts[f.id] || 0 }));
  }, []);

  // Filtered Campaigns List
  const filteredCampaigns = useMemo(() => {
    if (activeFilter === 'ALL') return campaignsData;
    if (['ONGOING', 'UPCOMING', 'COMPLETED'].includes(activeFilter)) {
      return campaignsData.filter(
        (c) => c.status.toUpperCase() === activeFilter
      );
    }
    return campaignsData.filter(
      (c) => c.category.toUpperCase() === activeFilter
    );
  }, [activeFilter]);

  // Featured Campaign (First active item or school-thik-karo)
  const featuredCampaign = useMemo(() => {
    return campaignsData.find((c) => c.slug === 'school-thik-karo') || campaignsData[0];
  }, []);

  // Grid Campaigns (Excluding featured from main masonry grid if showing all, or showing filtered list)
  const gridCampaigns = filteredCampaigns;

  return (
    <div className="campaigns-page bg-[#EADBCE] text-[#16120D] font-sans min-h-screen selection:bg-[#D9572B] selection:text-white pb-24">
      <SEOHead
        title={lang === 'hi' ? 'नागरिक अभियान व पोस्टर | कॉकरोच जनता पार्टी' : 'Civic Campaigns & Editorial Posters | Cockroach Janta Party'}
        description="Explore high-impact civic campaigns, RTI audits, pothole warranties, and satirical public actions of Cockroach Janta Party. Ideas that move people, campaigns that create change."
        canonicalUrl="https://cockroachjantapartywale.com/campaigns"
      />

      {/* ==========================================
          1. CAMPAIGNS HERO SECTION
      ========================================== */}
      <section className="relative bg-[#16120D] text-[#F5EFE6] pt-24 pb-20 overflow-hidden border-b-4 border-[#D9572B]">
        {/* Visual Background Collage Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D9572B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E6A100]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-[#D9572B] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                <Sparkles size={14} className="animate-pulse" />
                <span>{lang === 'hi' ? 'नागरिक अभियान पोर्टल' : 'OUR CAMPAIGNS'}</span>
              </div>

              <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase text-white">
                {lang === 'hi' ? (
                  <>
                    विचार जो लोगों को प्रेरित करें। <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      अभियान
                    </span>{' '}
                    जो बदलाव लाएं।
                  </>
                ) : (
                  <>
                    IDEAS THAT MOVE PEOPLE. <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      CAMPAIGNS
                    </span>{' '}
                    THAT CREATE CHANGE.
                  </>
                )}
              </h1>

              <p className="text-[#EADBCE]/90 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
                {lang === 'hi'
                  ? "नागरिक आरटीआई ऑडिट से लेकर सड़कों की 3-वर्षीय ठेकेदार वारंटी तक - सीजेपी के ग्राउंड एक्शन अभियानों का अन्वेषण करें। हर अभियान एक स्वतंत्र पोस्टर कला कृति की तरह प्रस्तुत किया गया है।"
                  : "Empirical volunteer operations across municipal wards: Subterranean drainage depth audits, contractor liability notice boards, school roof inspections, and nocturnal public safety marches."}
              </p>

              {/* Quick Metrics Ticker */}
              <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#F5EFE6]/15 max-w-xl">
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#E6A100]">8</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">
                    {lang === 'hi' ? 'सक्रिय अभियान' : 'ACTIVE CAMPAIGNS'}
                  </div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#D9572B]">45K+</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">
                    {lang === 'hi' ? 'वार्ड स्वयंसेवक' : 'SWARM VOLUNTEERS'}
                  </div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#27AE60]">3.1K</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">
                    {lang === 'hi' ? 'ऑडिटेड प्रोजेक्ट्स' : 'AUDITED WORKSITES'}
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#campaigns-showcase"
                  id="hero-explore-btn"
                  className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white px-8 py-4 font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 group border-2 border-[#D9572B]"
                >
                  <span>{lang === 'hi' ? 'अभियान पोस्टर देखें' : 'EXPLORE CAMPAIGN POSTERS'}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  to="/join"
                  id="hero-join-swarm-btn"
                  className="bg-transparent hover:bg-[#F5EFE6]/10 text-[#F5EFE6] border-2 border-[#F5EFE6]/40 hover:border-white px-7 py-4 font-black uppercase text-xs tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <Flag size={15} className="text-[#E6A100]" />
                  <span>{lang === 'hi' ? 'वार्ड स्वार्म में शामिल हों' : 'START AN AUDIT IN YOUR WARD'}</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D9572B] to-[#E6A100] rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000" />
                
                <div className="relative bg-[#231F1A] border-4 border-[#F5EFE6]/20 p-3 rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src="/cjp_black_monday_poster.png"
                      alt="CJP Black Monday Campaign Poster"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 bg-[#16120D]/90 backdrop-blur-md text-[#E6A100] px-3 py-1 text-[11px] font-black uppercase tracking-widest border border-[#E6A100]/30 rounded">
                      FEATURED SHOWCASE
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-black uppercase text-[#D9572B] tracking-widest mb-1">
                        CAMPAIGN #02 • BLACK MONDAY
                      </div>
                      <div className="font-serif font-black text-xl leading-tight">
                        "NO SILENCE FOR CIVIC FAILURE."
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
            href="#campaigns-filter-nav"
            className="text-[#EADBCE]/60 hover:text-white inline-flex flex-col items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest transition-colors animate-bounce"
            aria-label="Scroll down to campaigns"
          >
            <span>{lang === 'hi' ? 'नीचे स्क्रॉल करें' : 'SCROLL TO EXPLORE'}</span>
            <ChevronDown size={16} />
          </a>
        </div>
      </section>


      {/* ==========================================
          2. STICKY CATEGORY & STATUS FILTER BAR
      ========================================== */}
      <section id="campaigns-filter-nav" className="sticky top-0 z-40 bg-[#16120D] border-b-2 border-[#D9572B] shadow-2xl backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
            
            <div className="flex items-center gap-2 text-[#EADBCE] text-xs font-black uppercase tracking-widest shrink-0 pr-2 border-r border-[#F5EFE6]/20 hidden sm:flex">
              <Filter size={15} className="text-[#D9572B]" />
              <span>{lang === 'hi' ? 'फ़िल्टर:' : 'FILTER:'}</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {filterCategories.map((cat) => {
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`filter-btn-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
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
          3. FEATURED CAMPAIGN SHOWCASE
      ========================================== */}
      {featuredCampaign && activeFilter === 'ALL' && (
        <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 pb-8">
          <div className="bg-[#16120D] border-4 border-[#16120D] text-[#F5EFE6] rounded-2xl overflow-hidden shadow-2xl relative group">
            
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* Left Large Visual */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden bg-black">
                <img
                  src={featuredCampaign.featuredImage}
                  alt={featuredCampaign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-black/40 to-transparent" />
                
                {/* Number & Category Overlay Badge */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-3 items-center">
                  <span className="bg-[#D9572B] text-white px-3.5 py-1 text-xs font-black uppercase tracking-widest shadow-lg rounded">
                    FEATURED CAMPAIGN
                  </span>
                  <span className="bg-[#16120D]/90 backdrop-blur-md text-[#E6A100] border border-[#E6A100]/40 px-3 py-1 text-xs font-black uppercase tracking-widest rounded">
                    {featuredCampaign.number || '01'} • {featuredCampaign.category}
                  </span>
                </div>

                {/* Slogan Banner */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#16120D]/80 backdrop-blur-md p-4 border-l-4 border-[#D9572B]">
                  <p className="font-serif font-black text-lg md:text-xl text-[#E6A100] uppercase tracking-wide">
                    "{lang === 'hi' ? featuredCampaign.sloganHi || featuredCampaign.slogan : featuredCampaign.slogan}"
                  </p>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6 bg-[#16120D]">
                <div className="space-y-4">
                  
                  <div className="flex items-center gap-3 text-xs font-bold text-[#EADBCE]/70">
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#D9572B]" />
                      {featuredCampaign.startDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-[#E6A100]" />
                      {featuredCampaign.location}
                    </span>
                  </div>

                  <h2 className="font-serif font-black text-3xl md:text-4xl leading-tight text-white uppercase">
                    {lang === 'hi' ? featuredCampaign.titleHi || featuredCampaign.title : featuredCampaign.title}
                  </h2>

                  <p className="text-[#EADBCE]/85 text-sm leading-relaxed font-normal">
                    {lang === 'hi' ? featuredCampaign.summaryHi || featuredCampaign.summary : featuredCampaign.summary}
                  </p>

                  {/* Impact Metrics Grid */}
                  <div className="py-4 border-y border-[#F5EFE6]/15 grid grid-cols-3 gap-3">
                    {featuredCampaign.impactMetrics.map((m, idx) => (
                      <div key={idx} className="bg-[#231F1A] p-3 rounded border border-[#F5EFE6]/10 text-center">
                        <div className="font-serif font-black text-xl text-[#D9572B]">{m.value}</div>
                        <div className="text-[10px] font-bold text-[#EADBCE]/70 uppercase tracking-wider mt-0.5">
                          {lang === 'hi' ? m.labelHi || m.label : m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#27AE60]">
                    <CheckCircle2 size={16} />
                    <span>STATUS: {featuredCampaign.status.toUpperCase()}</span>
                  </div>

                  <Link
                    to={featuredCampaign.route}
                    id={`featured-campaign-action-${featuredCampaign.slug}`}
                    className="bg-[#D9572B] hover:bg-[#E6A100] text-white hover:text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded transition-all duration-300 flex items-center gap-2 group/btn"
                  >
                    <span>{lang === 'hi' ? 'अभियान देखें' : 'EXPLORE CAMPAIGN'}</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* ==========================================
          4. EDITORIAL CAMPAIGN MASONRY SHOWCASE
      ========================================== */}
      <section id="campaigns-showcase" className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#16120D]/20 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-[#D9572B] uppercase">
              {lang === 'hi' ? 'डिजाइन आर्टवर्क गैलरी' : 'EDITORIAL CAMPAIGN POSTERS'}
            </span>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-[#16120D] uppercase mt-1">
              {activeFilter === 'ALL'
                ? (lang === 'hi' ? 'सभी सक्रिय पोस्टर' : 'ALL CAMPAIGN POSTERS')
                : `${activeFilter} CAMPAIGNS`}
            </h2>
          </div>

          <div className="text-xs font-bold text-[#3A332B]">
            {lang === 'hi'
              ? `कुल ${gridCampaigns.length} अभियान प्रदर्शित`
              : `SHOWING ${gridCampaigns.length} CURATED CAMPAIGN POSTERS`}
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {gridCampaigns.map((c, index) => {
            // Determine Poster Visual Style (5 Distinct Variations)
            const styleVariant = index % 5;
            
            // Assign CSS grid column span for masonry feel
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
                  key={c.slug}
                  className={`${colSpanClass} bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={c.featuredImage}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-[#16120D]/40 to-transparent" />
                    
                    {/* Top Poster Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="font-serif font-black text-2xl text-[#E6A100] tracking-tighter">
                        #{c.number || `0${index + 1}`}
                      </span>
                      <span className={`text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded ${c.badgeColor || 'bg-[#D9572B] text-white'}`}>
                        {c.category}
                      </span>
                    </div>

                    {/* Poster Overlay Headline */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-bold text-[#EADBCE]/80 uppercase tracking-widest mb-1">
                        {c.startDate} • {c.location}
                      </p>
                      <h3 className="font-serif font-black text-2xl md:text-3xl text-white uppercase leading-tight group-hover:text-[#E6A100] transition-colors">
                        {lang === 'hi' ? c.titleHi || c.title : c.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 bg-[#16120D] flex-grow flex flex-col justify-between">
                    <div>
                      <blockquote className="border-l-2 border-[#D9572B] pl-3 italic text-xs font-semibold text-[#E6A100] mb-3">
                        "{lang === 'hi' ? c.sloganHi || c.slogan : c.slogan}"
                      </blockquote>
                      <p className="text-[#EADBCE]/80 text-xs leading-relaxed line-clamp-3">
                        {lang === 'hi' ? c.summaryHi || c.summary : c.summary}
                      </p>
                    </div>

                    {/* Impact Metrics Row */}
                    <div className="pt-4 border-t border-[#F5EFE6]/15 flex items-center justify-between">
                      <div className="flex gap-4">
                        {c.impactMetrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="font-serif font-black text-base text-[#D9572B]">{m.value}</div>
                            <div className="text-[9px] font-bold text-[#EADBCE]/60 uppercase">{lang === 'hi' ? m.labelHi || m.label : m.label}</div>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={c.route}
                        id={`campaign-poster-link-${c.slug}`}
                        className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white p-3 rounded font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 group/btn"
                      >
                        <span>{lang === 'hi' ? 'देखें' : 'POSTER'}</span>
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
                  key={c.slug}
                  className={`${colSpanClass} bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                >
                  <div className="p-6 pb-4 border-b-2 border-[#16120D]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-black tracking-widest uppercase text-[#D9572B]">
                        CAMPAIGN #{c.number || `0${index + 1}`}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-[#16120D] bg-[#16120D] text-[#F5EFE6]">
                        {c.status}
                      </span>
                    </div>

                    <h3 className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight mb-2 text-[#16120D] group-hover:text-[#D9572B] transition-colors">
                      {lang === 'hi' ? c.titleHi || c.title : c.title}
                    </h3>
                    <p className="text-xs font-bold text-[#3A332B]">
                      "{lang === 'hi' ? c.sloganHi || c.slogan : c.slogan}"
                    </p>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={c.featuredImage}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90"
                    />
                  </div>

                  <div className="p-6 bg-[#EADBCE] flex-grow flex flex-col justify-between space-y-4">
                    <p className="text-xs font-medium text-[#3A332B] leading-relaxed">
                      {lang === 'hi' ? c.summaryHi || c.summary : c.summary}
                    </p>

                    <div className="pt-3 border-t border-[#16120D]/20 flex justify-between items-center">
                      <div className="text-[11px] font-extrabold text-[#16120D]">
                        {c.location}
                      </div>

                      <Link
                        to={c.route}
                        id={`campaign-poster-link-${c.slug}`}
                        className="bg-[#16120D] hover:bg-[#D9572B] text-[#F5EFE6] hover:text-white px-5 py-2.5 rounded font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 group/btn"
                      >
                        <span>{lang === 'hi' ? 'विवरण' : 'EXPLORE'}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }

            // VARIANT 2: PLACARD / ACTION BANNER POSTER
            if (styleVariant === 2) {
              return (
                <article
                  key={c.slug}
                  className={`${colSpanClass} bg-[#231F1A] text-white border-4 border-[#E6A100] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={c.featuredImage}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#231F1A] via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-[#E6A100] text-black px-3 py-1 font-black text-[11px] uppercase tracking-widest rounded shadow">
                      {c.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-black text-[#E6A100] tracking-widest uppercase mb-1">
                        CIVIC ACTION #{c.number || `0${index + 1}`}
                      </div>
                      <h3 className="font-serif font-black text-2xl uppercase leading-tight mb-2 text-white group-hover:text-[#E6A100] transition-colors">
                        {lang === 'hi' ? c.titleHi || c.title : c.title}
                      </h3>
                      <p className="text-xs text-[#EADBCE]/80 leading-relaxed font-normal">
                        {lang === 'hi' ? c.summaryHi || c.summary : c.summary}
                      </p>
                    </div>

                    <div className="bg-[#16120D] p-3 rounded border border-[#E6A100]/30 space-y-2">
                      <div className="text-[10px] font-black text-[#E6A100] uppercase tracking-wider">IMPACT AUDIT</div>
                      <div className="grid grid-cols-2 gap-2">
                        {c.impactMetrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="text-xs">
                            <span className="font-bold text-white">{m.value}</span>{' '}
                            <span className="text-[#EADBCE]/70 text-[10px] uppercase">{lang === 'hi' ? m.labelHi || m.label : m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <span className="text-[11px] font-bold text-[#EADBCE]/70">
                        {c.startDate}
                      </span>

                      <Link
                        to={c.route}
                        id={`campaign-poster-link-${c.slug}`}
                        className="bg-[#E6A100] hover:bg-white text-black font-black px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 group/btn"
                      >
                        <span>{lang === 'hi' ? 'जांचें' : 'READ AUDIT'}</span>
                        <ExternalLink size={14} />
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
                  key={c.slug}
                  className={`${colSpanClass} bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group grid md:grid-cols-12 items-stretch`}
                >
                  <div className="md:col-span-5 relative aspect-square md:aspect-auto overflow-hidden bg-black">
                    <img
                      src={c.featuredImage}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#16120D] text-white text-[10px] font-black px-2.5 py-0.5 uppercase tracking-widest">
                      #{c.number || `0${index + 1}`}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#D9572B] text-white rounded">
                          {c.category}
                        </span>
                        <span className="text-[10px] font-bold text-[#3A332B] uppercase">
                          {c.status}
                        </span>
                      </div>

                      <h3 className="font-serif font-black text-2xl uppercase leading-tight mb-2 text-[#16120D] group-hover:text-[#D9572B] transition-colors">
                        {lang === 'hi' ? c.titleHi || c.title : c.title}
                      </h3>
                      <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-3">
                        {lang === 'hi' ? c.summaryHi || c.summary : c.summary}
                      </p>
                      
                      <div className="text-[11px] font-bold text-[#D9572B] italic">
                        "{lang === 'hi' ? c.sloganHi || c.slogan : c.slogan}"
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#16120D]/20 flex justify-between items-center">
                      <span className="text-[10px] font-extrabold uppercase text-[#3A332B]">
                        {c.location}
                      </span>

                      <Link
                        to={c.route}
                        id={`campaign-poster-link-${c.slug}`}
                        className="bg-[#16120D] hover:bg-[#D9572B] text-white px-5 py-2 rounded text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1 group/btn"
                      >
                        <span>{lang === 'hi' ? 'अभियान' : 'CAMPAIGN'}</span>
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
                key={c.slug}
                className={`${colSpanClass} relative min-h-[420px] rounded-xl overflow-hidden shadow-xl border-4 border-[#16120D] group flex flex-col justify-end p-6 bg-black text-white`}
              >
                <img
                  src={c.featuredImage}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-[#16120D]/60 to-transparent" />
                
                <div className="relative z-10 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="bg-[#D9572B] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded shadow">
                      {c.category}
                    </span>
                    <span className="text-serif font-black text-xl text-[#E6A100]">
                      #{c.number || `0${index + 1}`}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-2xl md:text-3xl uppercase leading-tight text-white group-hover:text-[#E6A100] transition-colors">
                    {lang === 'hi' ? c.titleHi || c.title : c.title}
                  </h3>

                  <p className="text-xs text-[#EADBCE]/85 line-clamp-2 font-normal">
                    {lang === 'hi' ? c.summaryHi || c.summary : c.summary}
                  </p>

                  <div className="pt-2 flex justify-between items-center border-t border-white/20">
                    <span className="text-[10px] font-bold text-[#E6A100] uppercase tracking-wider">
                      {c.status} • {c.location}
                    </span>

                    <Link
                      to={c.route}
                      id={`campaign-poster-link-${c.slug}`}
                      className="bg-white text-[#16120D] hover:bg-[#D9572B] hover:text-white px-5 py-2.5 rounded font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1 group/btn"
                    >
                      <span>{lang === 'hi' ? 'पोस्टर देखें' : 'VIEW POSTER'}</span>
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
          5. FULL-WIDTH EDITORIAL VISUAL BREAK
      ========================================== */}
      <section className="my-16 bg-[#16120D] text-[#F5EFE6] py-20 px-6 relative overflow-hidden border-y-4 border-[#D9572B]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E6A100_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="inline-block bg-[#D9572B] text-white px-4 py-1 text-[11px] font-black uppercase tracking-widest rounded-full">
            {lang === 'hi' ? 'सीजेपी विचार दर्शन' : 'STATEMENT OF CIVIC INTENT'}
          </span>

          <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase leading-tight">
            {lang === 'hi' ? (
              <>
                "बदलाव अपने आप नहीं आता। <br />
                इसे{' '}
                <span className="text-[#E6A100] italic underline decoration-[#D9572B]">
                  वार्ड-दर-वार्ड ऑडिट
                </span>{' '}
                किया जाता है।"
              </>
            ) : (
              <>
                "CHANGE DOESN'T HAPPEN BY ITSELF. <br />
                IT IS{' '}
                <span className="text-[#E6A100] italic underline decoration-[#D9572B]">
                  AUDITED WARD BY WARD
                </span>
                ."
              </>
            )}
          </h2>

          <p className="text-[#EADBCE]/80 text-sm md:text-base max-w-2xl mx-auto font-normal">
            {lang === 'hi'
              ? "कॉकरोच जनता पार्टी का मानना है कि वास्तविक विकास भाषणों से नहीं, बल्कि ज़मीनी पारदर्शिता, आरटीआई स्कोरकार्ड और ठेकेदारों के भौतिक उत्तरदायित्व से संभव है।"
              : "Every campaign launched by CJP is rooted in empirical verification: physical inspection of drainage depth, public display of 3-year repair warranties, and school roof waterproofing."}
          </p>
        </div>
      </section>


      {/* ==========================================
          6. FINAL HIGH-IMPACT CALL TO ACTION
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8">
        <div className="bg-gradient-to-br from-[#16120D] via-[#231F1A] to-[#16120D] text-white p-10 md:p-16 rounded-2xl border-4 border-[#D9572B] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9572B]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6A100]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#E6A100] text-black px-3.5 py-1 text-xs font-black uppercase tracking-widest rounded-full">
              <Activity size={14} />
              <span>{lang === 'hi' ? 'कार्रवाई में शामिल हों' : 'GET INVOLVED TODAY'}</span>
            </div>

            <h2 className="font-serif font-black text-3xl md:text-5xl text-white uppercase leading-tight">
              {lang === 'hi'
                ? 'क्या आप अपने वार्ड में बदलाव लाने के लिए तैयार हैं?'
                : 'READY TO MAKE AN IMPACT IN YOUR WARD?'}
            </h2>

            <p className="text-[#EADBCE]/85 text-sm md:text-base max-w-xl mx-auto font-medium">
              {lang === 'hi'
                ? "सीजेपी स्वार्म में शामिल हों। अपने वार्ड में आरटीआई ऑडिट, गड्ढा निरीक्षण, या स्कूल सुधार अभियान शुरू करें।"
                : "Become an active campaign captain. Mobilize your local ward, inspect municipal work orders, and enforce contractor accountability."}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/join"
                id="final-cta-join-btn"
                className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 shadow-xl flex items-center gap-2 border-2 border-[#D9572B] group"
              >
                <span>{lang === 'hi' ? 'स्वार्म में शामिल हों' : 'JOIN THE SWARM'}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/protests"
                id="final-cta-protests-btn"
                className="bg-transparent hover:bg-white/10 text-[#F5EFE6] border-2 border-white/40 hover:border-white font-black text-xs uppercase tracking-wider px-7 py-4 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <Layers size={16} className="text-[#E6A100]" />
                <span>{lang === 'hi' ? 'आगामी मार्च देखें' : 'VIEW UPCOMING AUDITS'}</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
