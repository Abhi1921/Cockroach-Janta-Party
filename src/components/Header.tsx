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
  ShieldAlert
} from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTier, setSelectedTier] = useState({ id: 'coffee', label: 'Buy a Coffee', amount: '50' });

  const supportTiers = [
    { id: 'chai', label: 'Chai ☕', amount: '20', desc: 'Buy a hot cutting chai' },
    { id: 'coffee', label: 'Coffee ☕', amount: '50', desc: 'Buy a cold coffee' },
    { id: 'lunch', label: 'Lunch 🍱', amount: '150', desc: 'Sponsor a developer thali' },
    { id: 'dinner', label: 'Dinner 🍽️', amount: '300', desc: 'Sponsor a full meal' },
    { id: 'server', label: 'Server 💻', amount: '500', desc: 'Host 1 month server bandwidth' }
  ];

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
    { titleKey: 'navVision', href: '/vision' },
    { titleKey: 'navManifesto', href: '/manifesto' },
    { titleKey: 'navNews', href: '/news', titleCustom: 'NEWS' },
    { titleKey: 'navGallery', href: '/gallery' },
    { titleKey: 'navIssues', href: '/issues' },
    { titleKey: 'navProtests', href: '/protests' },
    { titleKey: 'navBlackMonday', href: '/black-monday', titleCustom: 'BLACK MONDAY' },
    { titleKey: 'navMembers', href: '/members' },
    { titleKey: 'navContact', href: '/contact' }
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
      <div className="bg-[#16120D] text-[#F5EFE6] py-1.5 overflow-hidden text-[11px] font-extrabold uppercase tracking-wider border-b border-[rgba(22,18,13,0.3)]">
        <div className="animate-ticker flex items-center gap-8">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-[#D9572B]">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN STICKY PARCHMENT NAVBAR (#EADBCE) */}
      <header className={`bg-[#EADBCE] text-[#16120D] border-b-2 border-[#16120D] sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'shadow-lg bg-[#E2D2BF]' : ''}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between gap-4">
          
          {/* Brand & Logo Emblem */}
          <Link to="/" className="flex items-center gap-3 select-none flex-shrink-0 group">
            <div className="w-11 h-11 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center font-display text-2xl shadow-sm group-hover:scale-105 transition-transform overflow-hidden p-0.5">
              <img src="/cjp_logo_emblem.svg" alt="Cockroach Janta Party Official Logo Emblem" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className={`font-display text-2xl sm:text-3xl tracking-wider text-[#16120D] leading-none mb-1 ${lang === 'hi' ? 'font-hindi font-extrabold text-lg' : ''}`}>
                {lang === 'hi' ? 'कॉकरोच जनता पार्टी' : 'COCKROACH JANTA PARTY'}
              </span>
              <span className="text-[9.5px] font-extrabold text-[#D9572B] uppercase tracking-widest leading-none block">
                {t('subLabel')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 font-extrabold tracking-wider uppercase text-[12px] lg:text-[12.5px]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const linkText = link.titleCustom || t(link.titleKey);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`hover:text-[#D9572B] transition-colors relative py-1 ${
                    isActive ? 'text-[#D9572B] border-b-2 border-[#D9572B]' : 'text-[#16120D]'
                  }`}
                >
                  {linkText}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* SUPPORT THE DEV CTA BUTTON */}
            <button
              onClick={() => setSupportModalOpen(true)}
              className="text-[11px] font-extrabold bg-[#D9572B] text-white px-3 py-2 border-2 border-[#16120D] hover:bg-[#16120D] transition-all shadow-md flex items-center gap-1.5"
            >
              <Heart size={12} className="fill-current text-white" />
              <span className="hidden sm:inline">SUPPORT THE DEV →</span>
              <span className="sm:hidden">SUPPORT</span>
            </button>

            {/* EN / हिंदी Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-[11px] font-extrabold border-2 border-[#16120D] px-2.5 py-2 bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all"
                aria-label="Language Selector"
                aria-expanded={langDropdownOpen}
              >
                <Globe size={13} className="text-[#D9572B]" />
                <span>{lang === 'hi' ? 'हिंदी' : 'EN'}</span>
                <ChevronDown size={12} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-36 bg-[#F5EFE6] border-2 border-[#16120D] shadow-xl py-1 z-50">
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className={`w-full text-left px-3 py-1.5 text-xs font-bold flex items-center justify-between hover:bg-[#D9572B] hover:text-white transition-colors ${
                      lang === 'en' ? 'bg-[#16120D] text-[#F5EFE6]' : 'text-[#16120D]'
                    }`}
                  >
                    <span>English</span>
                    {lang === 'en' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('hi')}
                    className={`w-full text-left px-3 py-1.5 text-xs font-bold font-hindi flex items-center justify-between hover:bg-[#D9572B] hover:text-white transition-colors ${
                      lang === 'hi' ? 'bg-[#16120D] text-[#F5EFE6]' : 'text-[#16120D]'
                    }`}
                  >
                    <span>हिंदी (Hindi)</span>
                    {lang === 'hi' && <span>✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* JOIN THE SWARM DIRECT CTA */}
            <Link
              to="/join"
              className="hidden xl:inline-flex text-[11px] font-extrabold bg-[#16120D] text-[#F5EFE6] px-3.5 py-2 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all shadow-md items-center gap-1.5"
            >
              <span>{t('navJoinSwarm')}</span>
              <ArrowRight size={13} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#16120D] border-2 border-[#16120D] bg-[#F5EFE6] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-colors"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#EADBCE] border-t-2 border-[#16120D] px-4 py-6 shadow-2xl space-y-3">
            <nav className="flex flex-col space-y-2 font-extrabold uppercase text-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const linkText = link.titleCustom || t(link.titleKey);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`py-2.5 px-3 border border-[#16120D] transition-colors flex items-center justify-between ${
                      isActive ? 'bg-[#16120D] text-[#F5EFE6]' : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#D9572B] hover:text-white'
                    }`}
                  >
                    <span>{linkText}</span>
                    <ArrowRight size={14} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#16120D] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSupportModalOpen(true);
                }}
                className="w-full bg-[#D9572B] text-white font-extrabold text-xs uppercase py-3 border-2 border-[#16120D] flex items-center justify-center gap-2 shadow-sm"
              >
                <Heart size={14} className="fill-current text-white" />
                <span>SUPPORT THE DEVELOPER</span>
              </button>

              <Link
                to="/join"
                className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase py-3 border-2 border-[#16120D] flex items-center justify-center gap-2"
              >
                <span>{t('navJoinSwarm')}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* SUPPORT THE DEV MODAL */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSupportModalOpen(false)}>
          <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-[#16120D]" onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={() => setSupportModalOpen(false)}
              className="absolute top-4 right-4 text-[#16120D] hover:text-[#D9572B] p-1 bg-[#EADBCE] border border-[#16120D]"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#D9572B] text-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                <Heart size={12} className="fill-current text-white" /> VOLUNTARY SOFTWARE SUPPORT
              </div>
              <h3 className="font-display text-3xl text-[#16120D] uppercase leading-none mb-1">
                SUPPORT THE DEVELOPER
              </h3>
              <p className="text-xs text-[#3A332B] font-semibold">
                Sponsor server bandwidth &amp; open-source software maintenance.
              </p>
            </div>

            {/* Tier Options Selector */}
            <div className="space-y-2 mb-6">
              <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block">SELECT CONTRIBUTION TIER:</span>
              <div className="grid grid-cols-2 gap-2">
                {supportTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`p-2.5 border-2 text-left transition-all ${
                      selectedTier.id === tier.id
                        ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D] shadow-md'
                        : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#D9572B] hover:text-white'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-black">
                      <span>{tier.label}</span>
                      <span className="text-[#D9572B] font-extrabold">₹{tier.amount}</span>
                    </div>
                    <div className="text-[9px] opacity-80 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Google Pay Scanner Box */}
            <div className="bg-[#16120D] border-2 border-[#16120D] p-4 text-center text-[#F5EFE6] mb-6">
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">
                SCAN WITH GOOGLE PAY / ANY UPI APP
              </span>
              
              <div className="bg-white p-3 border-2 border-[#EADBCE] max-w-[200px] mx-auto mb-3 shadow-inner">
                <img
                  src="/gpay_scanner.png"
                  alt="Google Pay Scanner QR Code"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              <div className="text-xs font-black text-[#F5EFE6] bg-[#D9572B] py-1 px-3 inline-block uppercase tracking-wider mb-1">
                TIER AMOUNT: ₹{selectedTier.amount} ({selectedTier.label})
              </div>

              <div className="text-[10px] text-[#EADBCE] font-mono mt-1">
                Scan QR Code with GPay, PhonePe, Paytm, or BHIM
              </div>
            </div>

            {/* Mandatory Non-Political Disclaimer Policy */}
            <div className="bg-[#EADBCE] border border-[#16120D] p-3 text-[10px] text-[#3A332B] font-semibold space-y-1">
              <div className="flex items-center gap-1 text-[#D9572B] font-black uppercase">
                <ShieldAlert size={14} /> NON-POLITICAL VOLUNTARY DONATION POLICY:
              </div>
              <p className="leading-tight">
                All contributions are strictly personal voluntary software tips for web hosting, domain maintenance, and independent developer server costs. This portal does NOT collect political party funds or contest elections.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
