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
          
          {/* Brand & Logo */}
          <Link to="/" className="flex items-center gap-3 select-none flex-shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center font-display text-2xl shadow-sm group-hover:scale-105 transition-transform">
              🪳
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
              className="hidden xl:inline-flex text-[11px] font-extrabold bg-[#16120D] text-[#F5EFE6] px-4 py-2 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all shadow-md"
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

      {/* SUPPORT THE DEVELOPER GOOGLE PAY SCANNER & LEGAL DONATION TIERS MODAL */}
      {supportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4" onClick={() => setSupportModalOpen(false)}>
          <div className="bg-[#F5EFE6] text-[#16120D] border-2 border-[#16120D] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={() => setSupportModalOpen(false)}
              className="absolute top-4 right-4 text-[#16120D] hover:text-[#D9572B] p-1 bg-[#EADBCE] border border-[#16120D]"
              aria-label="Close support modal"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-4">
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-1">
                VOLUNTARY DEVELOPER SUPPORT · CHAI / COFFEE / LUNCH / DINNER TIERS
              </span>

              <h2 className="font-display text-3xl text-[#16120D] uppercase mb-1">
                SUPPORT THE DEVELOPER
              </h2>

              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
                Choose a voluntary support tier or scan with Google Pay, PhonePe, Paytm or any UPI App to keep server hosting and civic software tools active.
              </p>
            </div>

            {/* Selectable Support Tiers (Chai, Coffee, Lunch, Dinner, Server) */}
            <div className="mb-6">
              <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-2">
                CHOOSE VOLUNTARY CONTRIBUTION TIER:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {supportTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier as any)}
                    className={`p-2.5 text-left border-2 transition-all ${
                      selectedTier.id === tier.id
                        ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]'
                        : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#D9572B] hover:text-white'
                    }`}
                  >
                    <span className="font-extrabold text-xs block uppercase">{tier.label}</span>
                    <span className="text-[10px] font-extrabold text-[#D9572B] block">₹{tier.amount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Authentic Google Pay Standee Poster Image */}
            <div className="bg-[#16120D] border-2 border-[#16120D] p-3 mb-4 shadow-xl overflow-hidden rounded text-center">
              <img
                src="/gpay_scanner.png"
                alt="Google Pay Scan to Pay Cockroach Janta Party"
                className="w-full max-h-[360px] object-contain mx-auto"
              />
              <div className="text-[11px] font-extrabold text-[#EADBCE] mt-2">
                SELECTED TIER: <span className="text-[#D9572B] uppercase">{selectedTier.label} (₹{selectedTier.amount})</span>
              </div>
            </div>

            {/* LEGAL DISCLAIMER & VOLUNTARY DEVELOPER POLICY BOX */}
            <div className="bg-[#EADBCE] border border-[#16120D] p-3 text-left mb-6 flex items-start gap-2">
              <ShieldAlert size={20} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
              <div className="text-[10px] text-[#3A332B] font-medium leading-relaxed">
                <strong className="text-[#16120D] block uppercase mb-0.5">LEGAL &amp; VOLUNTARY CONTRIBUTION POLICY</strong>
                This payment is a 100% voluntary personal software tip to support independent web server hosting, domain fees, and open-source civic tools. It is <strong>NOT a political donation</strong>, not affiliated with any registered political party or election candidate, and not eligible for Section 80G tax deductions.
              </div>
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
