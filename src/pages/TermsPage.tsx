import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldAlert } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="terms-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'शर्तें व कानूनी अस्वीकरण' : 'Terms of Use & Legal Disclaimer'}
        description="Read the official legal disclaimers, satirical commentary terms, and privacy disclosures for Cockroach Janta Party portal."
        canonicalUrl="https://cockroachjantapartywale.com/terms"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'कानूनी व पारदर्शिता' : 'LEGAL & TRANSPARENCY'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase">
            {lang === 'hi' ? 'उपयोग की शर्तें और अस्वीकरण' : 'TERMS OF USE & DISCLAIMER'}
          </h1>
          <p className="text-xs text-[#3A332B] font-bold uppercase tracking-wider">
            LAST UPDATED: AUGUST 2026
          </p>
        </div>

        {/* Disclaimer Box */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-10 shadow-xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <ShieldAlert size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                IMPORTANT SATIRE &amp; NON-PARTISAN NOTICE
              </h3>
              <p className="text-xs text-[#3A332B]">
                This is an independent satire and civic-commentary website. It is not the official website of any registered political party and should not be interpreted as an electoral claim, government affiliation or official political communication.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Nature of Movement</h3>
            <p>
              Cockroach Janta Party operates as an informal, non-partisan youth movement and satirical publication exploring municipal accountability, subterranean drainage, and contractor warranty compliance. We do not contest political elections.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">2. Static Content &amp; Demo Data</h3>
            <p>
              All member statistics, complaint logs, dispatches, and campaign counters displayed on this portal represent static demo data unless explicitly linked to verified public domain records or official government datasets.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">3. Intellectual Property &amp; Graphics</h3>
            <p>
              All logo marks, visual graphic posters, slogans, and editorial artwork presented on this site are original brand concepts designed specifically for Cockroach Janta Party. They do not copy or imitate existing political logos.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">4. Privacy Disclosures</h3>
            <p>
              Voluntarily submitted volunteer form data is handled confidentially for community communication and is never sold to third-party commercial vendors.
            </p>
          </div>

          <div className="pt-6 border-t border-[rgba(22,18,13,0.18)] text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
            {t('footerCopyright')}
          </div>

        </div>

      </div>
    </div>
  );
};
