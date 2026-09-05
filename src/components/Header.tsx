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
  Heart,
  ShieldAlert,
  Radio,
  Check,
  Search,
  Newspaper,
  ExternalLink
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
  const [outletSearchFilter, setOutletSearchFilter] = useState('');
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [modalQrRevealed, setModalQrRevealed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTier, setSelectedTier] = useState({ id: 'coffee', label: 'Buy a Coffee', amount: '50' });

  const supportTiers = [
    { id: 'chai', label: 'Chai ☕', amount: '20', desc: 'Buy a hot cutting chai' },
    { id: 'coffee', label: 'Coffee ☕', amount: '50', desc: 'Buy a cold coffee' },
    { id: 'lunch', label: 'Lunch 🍱', amount: '150', desc: 'Sponsor a developer thali' },
    { id: 'dinner', label: 'Dinner 🍽️', amount: '300', desc: 'Sponsor a full meal' },
    { id: 'server', label: 'Server 💻', amount: '500', desc: 'Host 1 month server bandwidth' }
  ];

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
  }, [location.pathname]);

  const navLinks = [
    { titleCustom: 'HOME', href: '/' },
    { titleCustom: 'ABOUT', href: '/about' },
    { titleCustom: 'VISION', href: '/vision' },
    { titleCustom: 'MANIFESTO', href: '/manifesto' },
    { titleCustom: 'ARCHIVE', href: '/archive' },
    { titleCustom: 'CAMPAIGNS', href: '/campaigns' },
    { titleCustom: 'ISSUES', href: '/issues' },
    { titleCustom: 'NEWS', href: '/news' },
    { titleCustom: 'MEMBERS', href: '/members' }
  ];

  const tickerItems = [
    '✦ URGENT: 5 SEP DELHI MARCH · CHALO POLICE HQ & INDIA GATE',
    '✦ SPECIAL REPORT: 20 JULY BLACK MONDAY TIMELINE',
    '✦ #JAWAABDIJIYE · ELEVEN UNANSWERED QUESTIONS',
    '✦ INDEPENDENT SATIRE · CIVIC COMMENTARY',
    '✦ NO CORPORATE SPONSORSHIP',
    '✦ BUILT FOR QUESTIONS, NOT CEREMONIES',
    '✦ EST. 2026'
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

      {/* TOP EDITORIAL ANNOUNCEMENT TICKER */}
      <div className="bg-[#16120D] text-[#F5EFE6] py-2 overflow-hidden text-[11px] font-extrabold uppercase tracking-wider border-b-2 border-[#16120D] select-none flex items-center">
        <div className="flex items-center gap-2 bg-[#D9572B] text-white px-3 py-0.5 text-[10px] font-black tracking-widest flex-shrink-0 z-10 shadow-md ml-2 rounded-sm border border-[#16120D]">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse-dot inline-block" />
          <Radio size={12} className="inline animate-pulse" />
          <span>SATIRE DISPATCH</span>
        </div>

        <div className="animate-ticker flex items-center gap-8 pl-4">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-[#F5EFE6] font-semibold">{item.split('·')[0]}</span>
              {item.includes('·') && (
                <span className="text-[#D9572B] font-bold">· {item.split('·')[1]}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* MAIN STICKY PARCHMENT NAVBAR */}
      <header
        className={`bg-[#EADBCE] text-[#16120D] border-b-2 border-[#16120D] sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-[0_8px_20px_rgba(22,18,13,0.15)] bg-[#E4D5C4]/95 backdrop-blur-md py-1' : ''
        }`}
      >
        <div className="max-w-[1480px] mx-auto px-3 sm:px-5 lg:px-6 h-[74px] flex items-center justify-between gap-3 lg:gap-4">
          
          {/* Brand & Logo Emblem */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 select-none flex-shrink-0 group cursor-pointer"
            aria-label="Cockroach Janta Party Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center shadow-[2.5px_2.5px_0px_0px_#16120D] group-hover:scale-105 group-hover:rotate-3 transition-transform overflow-hidden p-0.5 flex-shrink-0">
              <img
                src="/cjp_logo_emblem.svg"
                alt="Cockroach Janta Party Official Logo Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className={`font-display text-2xl sm:text-3xl tracking-wide text-[#16120D] leading-none mb-0.5 group-hover:text-[#D9572B] transition-colors ${
                lang === 'hi' ? 'font-hindi font-extrabold text-lg sm:text-xl' : ''
              }`}>
                {lang === 'hi' ? 'कॉकरोच जनता पार्टी' : 'COCKROACH JANTA PARTY'}
              </span>
              <span className="text-[9px] sm:text-[9.5px] font-black text-[#D9572B] uppercase tracking-widest leading-none block">
                {t('subLabel')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3.5 font-extrabold tracking-wider uppercase text-[11px] xl:text-[11.5px] 2xl:text-[12.5px] flex-shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const linkText = link.titleCustom;

              if (link.titleCustom === 'NEWS') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setNewsDropdownOpen(true)}
                    onMouseLeave={() => setNewsDropdownOpen(false)}
                  >
                    <Link
                      to="/news"
                      onClick={() => setNewsDropdownOpen(false)}
                      className={`relative py-1 px-1 whitespace-nowrap transition-colors duration-150 flex items-center gap-1 ${
                        isActive ? 'text-[#D9572B] font-black' : 'text-[#16120D] hover:text-[#D9572B]'
                      }`}
                    >
                      <span>NEWS</span>
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          newsDropdownOpen ? 'rotate-180 text-[#D9572B]' : ''
                        }`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D9572B] transition-transform duration-200 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>

                    {/* MEGA DROPDOWN MENU */}
                    {newsDropdownOpen && (
                      <div
                        className="absolute right-0 lg:-right-36 mt-1 w-[920px] max-w-[95vw] bg-[#F5EFE6] border-4 border-[#16120D] shadow-[10px_10px_0px_0px_#16120D] p-5 z-50 animate-dropdown rounded-2xl text-[#16120D]"
                      >
                        {/* Dropdown Header */}
                        <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b-2 border-[#16120D] gap-3">
                          <div className="flex items-center gap-2">
                            <Newspaper size={22} className="text-[#D9572B] flex-shrink-0" />
                            <div>
                              <h4 className="font-display text-xl text-[#16120D] tracking-wide uppercase leading-none">
                                CJP VERIFIED MEDIA COVERAGE (42 OUTLETS)
                              </h4>
                              <p className="text-[10.5px] text-[#3A332B] font-extrabold mt-0.5">
                                Direct links &amp; syndicated stories across global, national &amp; regional newsrooms
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Search 42 outlets..."
                                value={outletSearchFilter}
                                onChange={(e) => setOutletSearchFilter(e.target.value)}
                                className="px-2.5 py-1 text-xs border-2 border-[#16120D] bg-white text-[#16120D] font-bold rounded-lg w-48 focus:outline-none focus:border-[#D9572B]"
                              />
                              {outletSearchFilter && (
                                <button
                                  onClick={() => setOutletSearchFilter('')}
                                  className="absolute right-2 top-1.5 text-xs text-gray-500 font-bold hover:text-black"
                                >
                                  ✕
                                </button>
                              )}
                            </div>

                            <Link
                              to="/news"
                              onClick={() => setNewsDropdownOpen(false)}
                              className="btn-brutal px-3 py-1 text-xs bg-[#D9572B] text-white font-extrabold hover:bg-[#16120D] rounded-md flex items-center gap-1 whitespace-nowrap"
                            >
                              <span>ALL NEWS ARCHIVES</span>
                              <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>

                        {/* 3 Outlet Category Columns */}
                        <div className="grid grid-cols-3 gap-4 max-h-[460px] overflow-y-auto pr-1">
                          {(['Global & Wires', 'National Dailies & Digital', 'TV Networks & Regional'] as const).map(
                            (cat) => {
                              const outlets = mediaOutletsData.filter(
                                (o) =>
                                  o.category === cat &&
                                  o.name.toLowerCase().includes(outletSearchFilter.toLowerCase())
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
                                    {outlets.map((outlet) => (
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
                                          title={`Visit Official Website: ${outlet.name} (${outlet.url})`}
                                        >
                                          <div className="flex items-center gap-1.5">
                                            <span className="truncate">{outlet.name}</span>
                                            <ExternalLink size={11} className="text-[#D9572B] flex-shrink-0" />
                                          </div>
                                          <span className="block text-[9px] font-bold text-gray-500 truncate">
                                            {outlet.domain} · {outlet.language}
                                          </span>
                                        </a>

                                        <Link
                                          to={`/news?source=${encodeURIComponent(outlet.name)}`}
                                          onClick={() => setNewsDropdownOpen(false)}
                                          className="text-[9px] font-black bg-[#16120D] text-white hover:bg-[#D9572B] px-1.5 py-0.5 rounded flex-shrink-0 ml-1"
                                          title={`Filter internal CJP archive for ${outlet.name}`}
                                        >
                                          CJP
                                        </Link>
                                      </div>
                                    ))}

                                    {outlets.length === 0 && (
                                      <p className="text-[10px] text-gray-500 font-bold italic p-2 text-center">
                                        No outlets match "{outletSearchFilter}"
                                      </p>
                                    )}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#16120D] flex justify-between items-center text-[10px] text-gray-600 font-bold">
                          <span>⚡ Verified press database automatically updated with live search syndications.</span>
                          <span>Showing all 42 verified news partners</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative py-1 px-1 whitespace-nowrap transition-colors duration-150 group flex items-center gap-1 ${
                    isActive ? 'text-[#D9572B] font-black' : 'text-[#16120D] hover:text-[#D9572B]'
                  }`}
                >
                  <span>{linkText}</span>
                  {/* Animated sliding underline on hover & active */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-[#D9572B] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            
            {/* GLOBAL SEARCH BUTTON */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="btn-brutal h-8 sm:h-9 px-2 sm:px-2.5 text-[10.5px] sm:text-[11px] bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
              title="Search entire CJP website (Press /)"
              aria-label="Global Search"
            >
              <Search size={13} className="text-[#D9572B]" />
              <span className="font-extrabold hidden sm:inline">SEARCH</span>
              <kbd className="hidden 2xl:inline-block text-[8.5px] bg-[#16120D] text-white px-1 py-0.5 rounded font-mono font-bold">/</kbd>
            </button>

            
            {/* SUPPORT THE DEV CTA BUTTON */}
            <button
              onClick={() => setSupportModalOpen(true)}
              className="btn-brutal h-8 sm:h-9 px-2 sm:px-2.5 text-[10.5px] sm:text-[11px] bg-[#D9572B] text-white hover:bg-[#16120D] hover:text-[#F5EFE6] group flex items-center justify-center whitespace-nowrap leading-none cursor-pointer"
              title="Support voluntary software developer costs"
              aria-label="Support the Developer"
            >
              <Heart size={13} className="fill-current text-white group-hover:text-[#D9572B] animate-heart-beat flex-shrink-0" />
              <span className="font-extrabold tracking-wider uppercase whitespace-nowrap hidden sm:inline">SUPPORT DEV</span>
            </button>

            {/* EN / हिंदी Language Switcher Dropdown */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="btn-brutal h-8 sm:h-9 px-2 sm:px-2.5 text-[10.5px] sm:text-[11px] bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
                aria-label="Language Selector"
                aria-expanded={langDropdownOpen}
              >
                <Globe size={13} className="text-[#D9572B] flex-shrink-0" />
                <span className="font-extrabold">{lang === 'hi' ? 'हिंदी' : lang === 'mr' ? 'मराठी' : 'EN'}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 flex-shrink-0 ${langDropdownOpen ? 'rotate-180 text-[#D9572B]' : ''}`} />
              </button>

              {/* Animated Language Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#F5EFE6] border-2 border-[#16120D] shadow-[4px_4px_0px_0px_#16120D] py-1.5 z-50 animate-dropdown">
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className={`w-full text-left px-3.5 py-2 text-xs font-extrabold flex items-center justify-between hover:bg-[#D9572B] hover:text-white transition-colors cursor-pointer ${
                      lang === 'en' ? 'bg-[#16120D] text-[#F5EFE6]' : 'text-[#16120D]'
                    }`}
                  >
                    <span>English</span>
                    {lang === 'en' && <Check size={14} className="text-[#D9572B]" />}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('hi')}
                    className={`w-full text-left px-3.5 py-2 text-xs font-extrabold font-hindi flex items-center justify-between hover:bg-[#D9572B] hover:text-white transition-colors cursor-pointer ${
                      lang === 'hi' ? 'bg-[#16120D] text-[#F5EFE6]' : 'text-[#16120D]'
                    }`}
                  >
                    <span>हिंदी (Hindi)</span>
                    {lang === 'hi' && <Check size={14} className="text-[#D9572B]" />}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('mr')}
                    className={`w-full text-left px-3.5 py-2 text-xs font-extrabold font-hindi flex items-center justify-between hover:bg-[#D9572B] hover:text-white transition-colors cursor-pointer ${
                      lang === 'mr' ? 'bg-[#16120D] text-[#F5EFE6]' : 'text-[#16120D]'
                    }`}
                  >
                    <span>मराठी (Marathi)</span>
                    {lang === 'mr' && <Check size={14} className="text-[#D9572B]" />}
                  </button>
                </div>
              )}
            </div>

            {/* JOIN THE SWARM DIRECT CTA (Primary CTA Button) */}
            <Link
              to="/join"
              className="btn-brutal h-8 sm:h-9 px-2.5 sm:px-3.5 text-[10.5px] sm:text-[11.5px] bg-[#16120D] text-[#F5EFE6] hover:bg-[#D9572B] hover:text-white group flex items-center justify-center whitespace-nowrap leading-none cursor-pointer flex-shrink-0"
            >
              <span className="font-extrabold tracking-wider uppercase whitespace-nowrap">{t('navJoinSwarm')}</span>
              <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform duration-150 flex-shrink-0" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:!hidden inline-flex btn-brutal h-8 sm:h-9 w-8 sm:w-9 p-0 bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] items-center justify-center cursor-pointer flex-shrink-0"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#EADBCE] border-t-2 border-[#16120D] px-4 py-5 shadow-2xl space-y-3 animate-dropdown max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-2 font-extrabold uppercase text-xs sm:text-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const linkText = link.titleCustom;

                if (link.titleCustom === 'NEWS') {
                  return (
                    <div key={link.href} className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between border-2 border-[#16120D] bg-[#F5EFE6] text-[#16120D] p-1.5 shadow-[2px_2px_0px_0px_#16120D]">
                        <Link
                          to="/news"
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1 px-2 font-black text-sm text-[#D9572B]"
                        >
                          NEWS ARCHIVES
                        </Link>
                        <button
                          onClick={() => setMobileNewsOpen(!mobileNewsOpen)}
                          className="btn-brutal px-2 py-1 bg-[#16120D] text-white text-xs font-black flex items-center gap-1"
                        >
                          <span>42 OUTLETS</span>
                          <ChevronDown size={14} className={mobileNewsOpen ? 'rotate-180' : ''} />
                        </button>
                      </div>

                      {mobileNewsOpen && (
                        <div className="p-3 bg-[#F5EFE6] border-2 border-[#16120D] rounded-lg space-y-2 max-h-80 overflow-y-auto">
                          <div className="text-[10px] font-black text-[#D9572B] uppercase">SELECT PRESS OUTLET:</div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {mediaOutletsData.map((outlet) => (
                              <a
                                key={outlet.id}
                                href={outlet.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-1.5 bg-white border border-[#16120D] text-[10px] font-extrabold text-[#16120D] hover:bg-[#D9572B] hover:text-white rounded truncate flex items-center justify-between"
                              >
                                <span className="truncate">{outlet.name}</span>
                                <ExternalLink size={10} className="flex-shrink-0 ml-1 text-[#D9572B]" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`py-2.5 px-3.5 border-2 border-[#16120D] transition-all flex items-center justify-between shadow-[2px_2px_0px_0px_#16120D] ${
                      isActive ? 'bg-[#16120D] text-[#F5EFE6]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#D9572B] hover:text-white'
                    }`}
                  >
                    <span>{linkText}</span>
                    <ArrowRight size={15} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t-2 border-[#16120D] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSupportModalOpen(true);
                }}
                className="w-full btn-brutal py-3 bg-[#D9572B] text-white font-extrabold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart size={16} className="fill-current text-white animate-heart-beat" />
                <span>SUPPORT THE DEVELOPER</span>
              </button>

              <Link
                to="/join"
                className="w-full btn-brutal py-3 bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t('navJoinSwarm')}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* SUPPORT THE DEV MODAL */}
      {supportModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSupportModalOpen(false)}
        >
          <div
            className="bg-[#F5EFE6]/95 backdrop-blur-2xl border-4 border-[#16120D] p-6 sm:p-8 max-w-md w-full shadow-[10px_10px_0px_0px_#16120D] relative text-[#16120D] animate-dropdown rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              onClick={() => setSupportModalOpen(false)}
              className="absolute top-4 right-4 btn-brutal p-1.5 bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white cursor-pointer rounded-lg"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#D9572B] text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3 border border-[#16120D] shadow-[2px_2px_0px_0px_#16120D] rounded-full">
                <Heart size={12} className="fill-current text-white animate-heart-beat" /> VOLUNTARY SOFTWARE SUPPORT
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-[#16120D] uppercase leading-none mb-1">
                SUPPORT THE DEV
              </h3>
              <p className="text-xs text-[#3A332B] font-extrabold">
                Sponsor server bandwidth &amp; open-source software maintenance.
              </p>
            </div>

            {/* Tier Options Selector */}
            <div className="space-y-2 mb-5">
              <span className="text-[10px] font-black text-[#16120D] uppercase tracking-wider block">SELECT CONTRIBUTION TIER:</span>
              <div className="grid grid-cols-2 gap-2">
                {supportTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`p-2.5 border-2 text-left transition-all cursor-pointer rounded-xl ${
                      selectedTier.id === tier.id
                        ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D] shadow-[3px_3px_0px_0px_#D9572B]'
                        : 'bg-[#EADBCE]/80 text-[#16120D] border-[#16120D] hover:bg-[#D9572B] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-black">
                      <span>{tier.label}</span>
                      <span className="font-extrabold text-[#D9572B]">₹{tier.amount}</span>
                    </div>
                    <div className="text-[9.5px] opacity-90 mt-0.5 font-bold">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive QR Box */}
            <div
              onClick={() => setModalQrRevealed(!modalQrRevealed)}
              className="bg-[#16120D] border-2 border-[#16120D] p-4 text-center text-[#F5EFE6] mb-5 shadow-[4px_4px_0px_0px_#16120D] rounded-xl cursor-pointer group select-none"
            >
              <span className="text-[10px] font-black uppercase tracking-widest block mb-2 text-[#E6A100]">
                {modalQrRevealed ? '✅ SCAN TO PAY VIA GPAY / UPI' : 'TAP & PAY TO UNBLUR'}
              </span>
              
              <div className="relative bg-white p-2.5 border-2 border-[#EADBCE] max-w-[190px] mx-auto shadow-inner rounded-lg overflow-hidden">
                <img
                  src="/gpay_scanner.png"
                  alt="Google Pay Scanner QR Code"
                  className={`w-full h-auto object-contain mx-auto rounded transition-all duration-500 ${
                    modalQrRevealed ? 'filter blur-0 opacity-100' : 'filter blur-md opacity-40'
                  }`}
                />
                {!modalQrRevealed && (
                  <div className="absolute inset-0 bg-[#16120D]/65 backdrop-blur-xs flex flex-col items-center justify-center text-white p-2">
                    <span className="text-xs font-black uppercase tracking-wider text-center text-white bg-[#D9572B] px-2.5 py-1 rounded shadow-md border border-white/20">
                      TAP &amp; PAY
                    </span>
                    <span className="text-[9px] text-[#E6A100] font-bold mt-1">
                      Unblur Scanner (₹{selectedTier.amount})
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Mandatory Non-Political Disclaimer Policy */}
            <div className="bg-[#EADBCE] border-2 border-[#16120D] p-3 text-[10px] text-[#3A332B] font-bold space-y-1 rounded-xl">
              <div className="flex items-center gap-1.5 text-[#D9572B] font-black uppercase">
                <ShieldAlert size={14} className="flex-shrink-0" /> NON-POLITICAL VOLUNTARY DONATION POLICY:
              </div>
              <p className="leading-tight">
                All contributions are strictly personal voluntary software tips for web hosting, domain maintenance, and independent developer server costs. This portal does NOT collect political party funds or contest elections.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />

      {/* Social Share Modal */}
      <SocialShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </>
  );
};
