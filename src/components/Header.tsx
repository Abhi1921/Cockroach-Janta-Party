import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../context/LanguageContext';
import {
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Radio,
  Check,
  Search,
  Newspaper,
  ExternalLink,
  Layers,
  Folder,
  Tv,
  Calendar
} from 'lucide-react';
import { GlobalSearchModal } from './GlobalSearchModal';
import { SocialShareModal } from './SocialShareModal';
import { mediaOutletsData } from '../data/mediaOutletsData';

export const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [newsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [outletSearchFilter, setOutletSearchFilter] = useState('');
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
    setNewsDropdownOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  // News Channel Primary Category Links
  const newsCategoryLinks = [
    { title: '🔴 LIVE TV', href: '/live-tv', badge: '24X7' },
    { title: '🔥 SUPER EXCLUSIVE', href: '/news?category=BREAKING' },
    { title: '🏛️ POLITICS & SWARM', href: '/news?category=POLITICS' },
    { title: '⚖️ CRIME & POLICE', href: '/news?category=POLICE%20%26%20CRIME' },
    { title: '🔍 FACT CHECK TV', href: '/fact-check' },
    { title: '🎙️ DEBATES', href: '/videos' },
    { title: '📰 SATIRE & OPINION', href: '/news?category=POLITICS%20SATIRE' }
  ];

  // All 50+ Existing Pages Grouped for Mega Dropdown
  const allPageGroups = [
    {
      title: 'CORE & IDEOLOGY',
      pages: [
        { label: 'Home Portal', path: '/' },
        { label: 'About CJP', path: '/about' },
        { label: 'Vision 2026', path: '/vision' },
        { label: 'Party Manifesto', path: '/manifesto' },
        { label: 'Founder Abhijeet Dipke', path: '/founder' },
        { label: 'Canonical Spelling', path: '/cockroach-janta-party' },
        { label: 'Parody History', path: '/parody-history' },
        { label: 'Dimagi Naxal Essay', path: '/dimagi-naxal' }
      ]
    },
    {
      title: 'CAMPAIGNS & GROUND ACTION',
      pages: [
        { label: 'All Campaigns', path: '/campaigns' },
        { label: 'School Thik Karo', path: '/school-thik-karo' },
        { label: 'Black Monday July 20', path: '/black-monday' },
        { label: 'Protests & Dharnas', path: '/protests' },
        { label: 'Protest Guidelines', path: '/protest-guidelines' },
        { label: 'Raise Your Voice', path: '/raise-voice' },
        { label: 'Donate to Abdul', path: '/donate-to-abdul' },
        { label: 'Key Civic Issues', path: '/issues' }
      ]
    },
    {
      title: 'MEDIA, SATIRE & GALLERIES',
      pages: [
        { label: 'All News Archives', path: '/news' },
        { label: '24x7 Live TV Studio', path: '/live-tv' },
        { label: '42 Verified Press Outlets', path: '/news' },
        { label: 'BitChat Swarm Tech', path: '/bitchat' },
        { label: 'Video & Debate Directory', path: '/videos' },
        { label: 'Memes Gallery', path: '/memes' },
        { label: 'Poster Downloads', path: '/posters' },
        { label: 'Famous Satire Quotes', path: '/quotes' },
        { label: 'Official Press/Media Kit', path: '/press-kit' }
      ]
    },
    {
      title: 'SWARM PORTAL & GOVERNANCE',
      pages: [
        { label: 'Swarm Members List', path: '/members' },
        { label: 'Join The Swarm', path: '/join' },
        { label: 'Member Portal Login', path: '/portal' },
        { label: 'Financial Transparency', path: '/transparency' },
        { label: 'Action Tracker', path: '/tracker' },
        { label: 'Master Research Archive', path: '/archive' },
        { label: 'Document Vault', path: '/documents' },
        { label: 'Research Admin Dashboard', path: '/admin' },
        { label: 'Frequently Asked Questions', path: '/faq' },
        { label: 'Citizen Resources', path: '/resources' },
        { label: 'Internal Disputes Tribunal', path: '/internal-disputes' },
        { label: 'Support Open-Source Dev', path: '/support-dev' }
      ]
    }
  ];

  const tickerItems = [
    '🔴 CJP 24X7 LIVE SATELLITE DISPATCH: SUPREME COURT QUASHES ALL PROTEST FIRs UNDER ARTICLE 142',
    '🔥 NDTV & THE HINDU: SC/ST ACT & POCSO SECTIONS INVOKED AGAINST BHARDWAJ AFTER CJP SIEGE',
    '⚡ CHIRAG PASWAN LJP DENIES POLITICAL BACKING & FILES FORMAL POLICE COMPLAINT',
    '🏛️ CJP CHIEF ABHIJEET DIPKE URGES CM DEVENDRA FADNAVIS TO INSPECT MAHARASHTRA ASHRAMSHALAS',
    '🔍 ALT NEWS TAKEDOWN: META REMOVES AI DEEPFAKES TARGETING FEMALE JANTAR MANTAR PROTESTERS',
    '📊 ROACH-SENSEX: 74,820 ▲ +420 POINTS | POTHOLE WARRANTY COMPLIANCE: 14%'
  ];

  const handleLanguageSelect = (newLang: Language) => {
    setLang(newLang);
    setLangDropdownOpen(false);
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        {t('skipLink')}
      </a>

      {/* TIER 1: TOP BREAKING SATELLITE TICKER & UTILITIES BAR */}
      <div className="bg-[#16120D] text-[#F5EFE6] py-1 px-3 text-[11px] font-extrabold uppercase tracking-wider border-b border-[#D9572B] select-none flex items-center justify-between gap-4">
        
        {/* Left Satellite Ticker */}
        <div className="flex items-center gap-2 overflow-hidden flex-1">
          <div className="flex items-center gap-1.5 bg-[#D9572B] text-white px-2.5 py-0.5 text-[10px] font-black tracking-widest flex-shrink-0 z-10 rounded">
            <span className="w-2 h-2 rounded-full bg-white animate-ping inline-block" />
            <Radio size={12} className="inline animate-pulse" />
            <span>SATELLITE DISPATCH</span>
          </div>

          <div className="animate-ticker flex items-center gap-8 pl-2">
            {tickerItems.concat(tickerItems).map((item, idx) => (
              <span key={idx} className="flex items-center gap-3 whitespace-nowrap">
                <span className="text-[#F5EFE6] font-semibold">{item.split(':')[0]}</span>
                {item.includes(':') && (
                  <span className="text-[#E6A100] font-bold">: {item.split(':')[1]}</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right Quick Action Utilities */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="text-[10px] font-black bg-[#2A231D] text-white hover:bg-[#D9572B] px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer"
          >
            <Search size={11} className="text-[#D9572B]" />
            <span>SEARCH</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="text-[10px] font-black bg-[#2A231D] text-white hover:bg-[#D9572B] px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer"
            >
              <Globe size={11} className="text-[#D9572B]" />
              <span>{lang === 'hi' ? 'हिंदी' : lang === 'mr' ? 'मराठी' : 'EN'}</span>
              <ChevronDown size={10} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-[#F5EFE6] border-2 border-[#16120D] shadow-lg py-1 z-50 rounded">
                <button
                  onClick={() => handleLanguageSelect('en')}
                  className={`w-full text-left px-3 py-1.5 text-xs font-black flex items-center justify-between hover:bg-[#D9572B] hover:text-white ${
                    lang === 'en' ? 'bg-[#16120D] text-white' : 'text-[#16120D]'
                  }`}
                >
                  <span>English</span>
                  {lang === 'en' && <Check size={12} className="text-[#D9572B]" />}
                </button>
                <button
                  onClick={() => handleLanguageSelect('hi')}
                  className={`w-full text-left px-3 py-1.5 text-xs font-black font-hindi flex items-center justify-between hover:bg-[#D9572B] hover:text-white ${
                    lang === 'hi' ? 'bg-[#16120D] text-white' : 'text-[#16120D]'
                  }`}
                >
                  <span>हिंदी (Hindi)</span>
                  {lang === 'hi' && <Check size={12} className="text-[#D9572B]" />}
                </button>
                <button
                  onClick={() => handleLanguageSelect('mr')}
                  className={`w-full text-left px-3 py-1.5 text-xs font-black font-hindi flex items-center justify-between hover:bg-[#D9572B] hover:text-white ${
                    lang === 'mr' ? 'bg-[#16120D] text-white' : 'text-[#16120D]'
                  }`}
                >
                  <span>मराठी (Marathi)</span>
                  {lang === 'mr' && <Check size={12} className="text-[#D9572B]" />}
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* TIER 2: MAIN BRAND LOGO & DATE HEADER BAR */}
      <div className="bg-[#EADBCE] border-b-2 border-[#16120D] py-2 px-3 sm:px-6">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-4">
          
          {/* Brand & Logo Emblem */}
          <Link
            to="/"
            className="flex items-center gap-3 select-none flex-shrink-0 group cursor-pointer"
            aria-label="Cockroach Janta Party News Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center shadow-[3px_3px_0px_0px_#D9572B] group-hover:scale-105 group-hover:rotate-3 transition-transform overflow-hidden p-0.5 flex-shrink-0">
              <img
                src="/cjp_logo_emblem.svg"
                alt="CJP News Emblem"
                className="w-full h-full object-contain"
              />
              <span className="absolute -bottom-0.5 right-0 w-3 h-3 bg-red-600 border-2 border-white rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col justify-center leading-none">
              <div className="flex items-center gap-2">
                <span className={`font-display text-2xl sm:text-4xl tracking-tight text-[#16120D] leading-none group-hover:text-[#D9572B] transition-colors ${
                  lang === 'hi' ? 'font-hindi font-extrabold text-xl sm:text-2xl' : ''
                }`}>
                  {lang === 'hi' ? 'CJP 24x7 न्यूज़ नेटवर्क' : 'CJP 24x7 NEWS NETWORK'}
                </span>
                <span className="bg-[#D9572B] text-white text-[9px] font-black px-1.5 py-0.2 rounded uppercase animate-pulse">
                  LIVE
                </span>
              </div>
              <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest leading-none mt-1">
                <span>INDIA'S SUBTERRANEAN CIVIC WATCHDOG</span>
                <span className="hidden sm:inline">·</span>
                <span className="hidden sm:inline flex items-center gap-1 text-[#3A332B]">
                  <Calendar size={10} /> Tuesday, 08 September 2026
                </span>
              </div>
            </div>
          </Link>

          {/* Quick Header Actions (Watch Live TV & Mega Directory) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/live-tv"
              className="btn-brutal h-9 px-3 bg-[#D9572B] text-white text-xs font-black uppercase flex items-center gap-1.5 hover:bg-[#16120D] rounded-lg shadow"
            >
              <Tv size={14} className="animate-pulse" />
              <span className="hidden sm:inline">WATCH LIVE TV</span>
            </Link>

            {/* Mega Dropdown Button */}
            <div
              className="relative"
              onMouseEnter={() => setPagesDropdownOpen(true)}
              onMouseLeave={() => setPagesDropdownOpen(false)}
            >
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className={`btn-brutal h-9 px-3 bg-[#16120D] text-white text-xs font-black uppercase flex items-center gap-1.5 hover:bg-[#D9572B] rounded-lg shadow ${
                  pagesDropdownOpen ? 'bg-[#D9572B]' : ''
                }`}
              >
                <Layers size={14} className="text-[#E6A100]" />
                <span className="hidden md:inline">📂 ALL CJP PAGES (50+)</span>
                <span className="md:hidden">📂 PAGES</span>
                <ChevronDown size={12} className={pagesDropdownOpen ? 'rotate-180' : ''} />
              </button>

              {/* MEGA DROPDOWN MENU */}
              {pagesDropdownOpen && (
                <div className="absolute right-0 mt-1 w-[920px] max-w-[94vw] bg-[#F5EFE6] border-4 border-[#16120D] shadow-[12px_12px_0px_0px_#16120D] p-5 z-50 animate-dropdown rounded-2xl text-[#16120D]">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#16120D]">
                    <div className="flex items-center gap-2">
                      <Folder size={22} className="text-[#D9572B]" />
                      <div>
                        <h4 className="font-display text-2xl text-[#16120D] uppercase leading-none">
                          COMPLETE CJP PORTAL DIRECTORY (50+ PAGES)
                        </h4>
                        <p className="text-[11px] text-[#3A332B] font-extrabold mt-0.5">
                          Every campaign, policy, research archive, and member portal preserved.
                        </p>
                      </div>
                    </div>
                    <span className="bg-[#D9572B] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      ZERO PAGES DELETED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[440px] overflow-y-auto pr-1">
                    {allPageGroups.map((group, idx) => (
                      <div key={idx} className="bg-[#EADBCE] border-2 border-[#16120D] p-3 rounded-xl space-y-2">
                        <div className="font-black text-[11px] text-[#D9572B] uppercase tracking-wider border-b-2 border-[#16120D] pb-1">
                          {group.title}
                        </div>
                        <div className="space-y-1">
                          {group.pages.map((pg, pIdx) => (
                            <Link
                              key={pIdx}
                              to={pg.path}
                              onClick={() => setPagesDropdownOpen(false)}
                              className="block p-1.5 bg-white border border-[#16120D] rounded-lg text-xs font-extrabold text-[#16120D] hover:bg-[#D9572B] hover:text-white transition-colors truncate"
                            >
                              {pg.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:!hidden inline-flex btn-brutal h-9 w-9 p-0 bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] items-center justify-center cursor-pointer flex-shrink-0 rounded-lg"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>
        </div>
      </div>

      {/* TIER 3: STICKY NEWS CATEGORIES NAVBAR */}
      <header className={`bg-[#16120D] text-[#F5EFE6] border-b-2 border-[#16120D] sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-2xl bg-[#0D0B08]' : 'shadow-lg'
      }`}>
        <div className="max-w-[1480px] mx-auto px-3 sm:px-6 h-[46px] flex items-center justify-between overflow-x-auto">
          
          <nav
            className="flex items-center gap-1 sm:gap-2 font-extrabold tracking-wider uppercase text-[11px] sm:text-[11.5px] whitespace-nowrap min-w-max"
            aria-label="News Categories"
          >
            {newsCategoryLinks.map((link) => {
              const isActive = location.pathname + location.search === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-1.5 px-2.5 rounded transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#D9572B] text-white font-black shadow-[2px_2px_0px_0px_#FFFFFF]'
                      : 'text-[#F5EFE6] hover:bg-[#2A231D] hover:text-[#D9572B]'
                  }`}
                >
                  <span>{link.title}</span>
                  {link.badge && (
                    <span className="bg-[#D9572B] text-white text-[8px] px-1 py-0.2 rounded font-black animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* 42 MEDIA OUTLETS DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setNewsDropdownOpen(true)}
              onMouseLeave={() => setNewsDropdownOpen(false)}
            >
              <button
                onClick={() => setNewsDropdownOpen(!newsDropdownOpen)}
                className={`py-1.5 px-2.5 rounded transition-all flex items-center gap-1 text-[#F5EFE6] hover:bg-[#2A231D] hover:text-[#D9572B] ${
                  newsDropdownOpen ? 'bg-[#D9572B] text-white' : ''
                }`}
              >
                <span>🌐 GOOGLE NEWS &amp; 42 OUTLETS</span>
                <ChevronDown size={12} className={newsDropdownOpen ? 'rotate-180' : ''} />
              </button>

              {newsDropdownOpen && (
                <div className="absolute right-0 mt-1 w-[880px] max-w-[94vw] bg-[#F5EFE6] border-4 border-[#16120D] shadow-[10px_10px_0px_0px_#16120D] p-5 z-50 animate-dropdown rounded-2xl text-[#16120D]">
                  <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b-2 border-[#16120D] gap-3">
                    <div className="flex items-center gap-2">
                      <Newspaper size={22} className="text-[#D9572B] flex-shrink-0" />
                      <div>
                        <h4 className="font-display text-xl text-[#16120D] tracking-wide uppercase leading-none">
                          CJP VERIFIED MEDIA PARTNERS (42 OUTLETS &amp; GOOGLE NEWS)
                        </h4>
                        <p className="text-[10.5px] text-[#3A332B] font-extrabold mt-0.5">
                          Direct dispatches &amp; syndicated news coverage across global &amp; Indian media
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Search 42 outlets..."
                        value={outletSearchFilter}
                        onChange={(e) => setOutletSearchFilter(e.target.value)}
                        className="px-2.5 py-1 text-xs border-2 border-[#16120D] bg-white text-[#16120D] font-bold rounded-lg w-44 focus:outline-none focus:border-[#D9572B]"
                      />
                      <Link
                        to="/news"
                        onClick={() => setNewsDropdownOpen(false)}
                        className="btn-brutal px-3 py-1 text-xs bg-[#D9572B] text-white font-extrabold hover:bg-[#16120D] rounded-md flex items-center gap-1 whitespace-nowrap"
                      >
                        <span>ALL NEWS ARCHIVE</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-1">
                    {(['Global & Wires', 'National Dailies & Digital', 'TV Networks & Regional'] as const).map(cat => {
                      const outlets = mediaOutletsData.filter(
                        o => o.category === cat && o.name.toLowerCase().includes(outletSearchFilter.toLowerCase())
                      );

                      return (
                        <div key={cat} className="bg-[#EADBCE]/60 border-2 border-[#16120D] p-3 rounded-xl">
                          <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-1.5 mb-2">
                            <span className="font-extrabold text-[11px] uppercase tracking-wider text-[#D9572B]">
                              {cat}
                            </span>
                            <span className="text-[10px] bg-[#16120D] text-white px-1.5 py-0.5 rounded font-mono font-bold">
                              {outlets.length}
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            {outlets.map(outlet => (
                              <div
                                key={outlet.id}
                                className="p-1.5 bg-[#F5EFE6] border border-[#16120D] rounded-lg hover:border-[#D9572B] hover:bg-[#EADBCE]/80 transition-all flex items-center justify-between group/item"
                              >
                                <a
                                  href={outlet.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setNewsDropdownOpen(false)}
                                  className="flex-1 min-w-0 font-extrabold text-xs text-[#16120D] group-hover/item:text-[#D9572B] truncate block cursor-pointer"
                                >
                                  <div className="flex items-center gap-1">
                                    <span className="truncate">{outlet.name}</span>
                                    <ExternalLink size={10} className="text-[#D9572B] flex-shrink-0" />
                                  </div>
                                </a>
                                <Link
                                  to={`/news?source=${encodeURIComponent(outlet.name)}`}
                                  onClick={() => setNewsDropdownOpen(false)}
                                  className="text-[9px] font-black bg-[#16120D] text-white hover:bg-[#D9572B] px-1.5 py-0.5 rounded flex-shrink-0 ml-1"
                                >
                                  CJP
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </nav>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#EADBCE] border-t-2 border-[#16120D] px-4 py-5 shadow-2xl space-y-3 animate-dropdown max-h-[85vh] overflow-y-auto text-[#16120D]">
            <nav className="flex flex-col space-y-2 font-extrabold uppercase text-xs sm:text-sm">
              {newsCategoryLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 border-2 border-[#16120D] bg-[#F5EFE6] text-[#16120D] hover:bg-[#D9572B] hover:text-white flex items-center justify-between shadow-[2px_2px_0px_0px_#16120D]"
                >
                  <span>{link.title}</span>
                  <ArrowRight size={14} />
                </Link>
              ))}

              <div className="border-2 border-[#16120D] bg-[#16120D] text-white p-2.5 rounded shadow-[3px_3px_0px_0px_#D9572B]">
                <button
                  onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                  className="w-full flex items-center justify-between font-black text-xs uppercase text-[#E6A100]"
                >
                  <span>📂 ALL CJP PAGES &amp; DIRECTORY (50+)</span>
                  <ChevronDown size={16} className={mobilePagesOpen ? 'rotate-180' : ''} />
                </button>

                {mobilePagesOpen && (
                  <div className="mt-3 space-y-3 pt-2 border-t border-white/20">
                    {allPageGroups.map((group, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-[10px] font-black text-[#D9572B] uppercase">{group.title}</div>
                        <div className="grid grid-cols-1 gap-1">
                          {group.pages.map((pg, pIdx) => (
                            <Link
                              key={pIdx}
                              to={pg.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-1 px-2 bg-[#2A231D] text-white text-[11px] font-bold rounded hover:bg-[#D9572B] block"
                            >
                              {pg.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </nav>

          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Social Share Modal */}
      <SocialShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </>
  );
};
