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
  ShieldCheck,
  Heart,
  Copy,
  Check
} from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    '✦ LATEST NEWS: CJP ANNOUNCES SEPT 5 DELHI POLICE HQ MARCH',
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

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('cjp.swarm@upi');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
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
        <div className="max-w-[1440px] mx-auto px-4 h-[76px] flex items-center justify-between gap-4">
          
          {/* Brand & Logo */}
          <Link to="/" className="flex items-center gap-3 select-none flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center font-display text-2xl shadow-sm">
              🪳
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display text-2xl tracking-wide text-[#16120D] ${lang === 'hi' ? 'font-hindi font-extrabold text-lg' : ''}`}>
                {lang === 'hi' ? 'कॉकरोच जनता पार्टी' : 'COCKROACH'}
              </span>
              {lang !== 'hi' && (
                <span className="font-display text-lg tracking-wider text-[#16120D] -mt-1">
                  JANTA PARTY
                </span>
              )}
              <span className="text-[9px] font-extrabold text-[#D9572B] uppercase tracking-widest">
                {t('subLabel')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 font-extrabold tracking-wider uppercase text-[12px] lg:text-[13px]" aria-label="Main Navigation">
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
              className="text-[11px] font-extrabold bg-[#D9572B] text-white px-3 py-1.5 border-2 border-[#16120D] hover:bg-[#16120D] transition-all shadow-md flex items-center gap-1.5"
            >
              <Heart size={12} className="fill-current text-white" />
              <span className="hidden sm:inline">SUPPORT THE DEV →</span>
              <span className="sm:hidden">SUPPORT</span>
            </button>

            {/* EN / हिंदी Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-[11px] font-extrabold border-2 border-[#16120D] px-2.5 py-1.5 bg-[#F5EFE6] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all"
                aria-label="Language Selector"
                aria-expanded={langDropdownOpen}
              >
                <Globe size={13} className="text-[#D9572B]" />
                <span>{lang === 'hi' ? 'हिंदी' : 'EN'}</span>
                <ChevronDown size={12} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-[#16120D] border-2 border-[#16120D] shadow-xl z-50 text-xs font-bold text-[#F5EFE6] py-1">
                  <button
                    onClick={() => handleLanguageSelect('en')}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#D9572B] ${lang === 'en' ? 'bg-[#D9572B]/30 text-[#EADBCE]' : ''}`}
                  >
                    <span>English</span>
                    {lang === 'en' && <ShieldCheck size={14} className="text-[#EADBCE]" />}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect('hi')}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#D9572B] ${lang === 'hi' ? 'bg-[#D9572B]/30 text-[#EADBCE]' : ''}`}
                  >
                    <span>हिंदी (Hindi)</span>
                    {lang === 'hi' && <ShieldCheck size={14} className="text-[#EADBCE]" />}
                  </button>
                </div>
              )}
            </div>

            {/* Primary CTA */}
            <Link
              to="/join"
              className="hidden xl:inline-flex text-[11px] font-extrabold bg-[#16120D] text-[#F5EFE6] px-3.5 py-1.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all shadow-md"
            >
              {t('navJoinSwarm')}
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#16120D] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all ml-1"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Slide Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-[115px] left-0 right-0 bottom-0 bg-[#EADBCE] text-[#16120D] z-50 p-6 overflow-y-auto">
            <div className="mb-4 pb-3 border-b border-[#16120D] flex justify-between items-center">
              <span className="text-xs font-bold text-[#16120D] uppercase tracking-widest">{t('brandName')}</span>
              <button
                onClick={() => setSupportModalOpen(true)}
                className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 border border-[#16120D] uppercase"
              >
                SUPPORT THE DEV →
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const linkText = link.titleCustom || t(link.titleKey);
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-3.5 border font-extrabold text-sm uppercase tracking-wider bg-[#F5EFE6] border-[#16120D] text-[#16120D] ${
                        location.pathname === link.href ? 'text-[#D9572B] border-[#D9572B]' : ''
                      }`}
                    >
                      <span>{linkText}</span>
                      <ArrowRight size={16} className="text-[#D9572B]" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#16120D] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSupportModalOpen(true);
                }}
                className="w-full text-center bg-[#D9572B] text-white font-extrabold text-sm uppercase tracking-wider py-3.5 border-2 border-[#16120D] flex items-center justify-center gap-2"
              >
                <Heart size={14} className="fill-current" /> SUPPORT THE DEVELOPER (GPAY SCANNER)
              </button>
              <Link
                to="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#16120D] text-[#F5EFE6] font-extrabold text-sm uppercase tracking-wider py-4 border-2 border-[#16120D]"
              >
                {t('navJoinSwarm')}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* SUPPORT THE DEVELOPER GOOGLE PAY SCANNER MODAL */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" onClick={() => setSupportModalOpen(false)}>
          <div className="bg-[#F5EFE6] text-[#16120D] border-2 border-[#16120D] p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-center max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={() => setSupportModalOpen(false)}
              className="absolute top-4 right-4 text-[#16120D] hover:text-[#D9572B] p-1 bg-[#EADBCE] border border-[#16120D]"
              aria-label="Close support modal"
            >
              <X size={20} />
            </button>

            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">
              GOOGLE PAY · VOLUNTARY CONTRIBUTION
            </span>

            <h2 className="font-display text-3xl text-[#16120D] uppercase mb-1">
              SUPPORT THE DEVELOPER
            </h2>

            <p className="text-xs text-[#3A332B] font-medium mb-4 leading-relaxed">
              Scan with Google Pay, PhonePe, Paytm or any UPI App to support website developer infrastructure.
            </p>

            {/* Authentic Google Pay Standee Poster Image */}
            <div className="bg-[#16120D] border-2 border-[#16120D] p-2 mb-4 shadow-xl overflow-hidden rounded">
              <img
                src="/gpay_scanner.png"
                alt="Google Pay Scan to Pay Cockroach Janta Party"
                className="w-full max-h-[380px] object-contain mx-auto"
              />
            </div>

            {/* UPI ID Copy Field */}
            <div className="bg-[#EADBCE] border border-[#16120D] p-3 flex justify-between items-center mb-4">
              <div className="text-left">
                <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">UPI ID:</span>
                <span className="text-xs font-extrabold text-[#16120D]">cjp.swarm@upi</span>
              </div>
              <button
                onClick={handleCopyUpi}
                className="bg-[#16120D] text-[#F5EFE6] px-3 py-1.5 text-[10px] font-extrabold uppercase flex items-center gap-1 hover:bg-[#D9572B] transition-colors"
              >
                {copiedUpi ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                <span>{copiedUpi ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>

            <button
              onClick={() => setSupportModalOpen(false)}
              className="w-full bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase py-3 border-2 border-[#16120D] hover:bg-[#D9572B] transition-all"
            >
              CLOSE WINDOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};
