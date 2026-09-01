import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldAlert } from 'lucide-react';

export const DisclaimerPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="disclaimer-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'अस्वीकरण व पैरोडी लाइसेंस | कॉकरोच जनता पार्टी' : 'Satire, Parody & Non-ECI Disclaimer | Cockroach Janta Party'}
        description="Official legal disclaimer: Cockroach Janta Party (CJP) is an independent civic movement utilizing satire, dark humor, and parody under Indian Copyright Act & Art 19."
        canonicalUrl="https://cockroachjantapartywale.com/disclaimer"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            STATUTORY LEGAL DISCLAIMER
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            SATIRE &amp; PARODY LEGAL DISCLAIMER
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            OFFICIAL LEGAL NOTICE &amp; NON-PARTISAN DECLARATION
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <ShieldAlert size={28} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                NON-ECI REGISTERED MOVEMENT DECLARATION
              </h3>
              <p className="text-xs text-[#3A332B]">
                Cockroach Janta Party Wale (CJP) is an independent, non-partisan student movement utilizing political satire, dark humor, and civic research. It is <strong>NOT</strong> registered with the Election Commission of India (ECI) under Section 29A of the RP Act 1951.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Protection of Political Satire</h3>
            <p>
              Political satire, commentary, and parody are protected forms of speech under Article 19(1)(a) of the Constitution of India and Section 52(1)(a) of the Indian Copyright Act, 1957 (Fair Dealing doctrine). All satirical emblems, character names, dispatches, and campaign posters represent creative commentary.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">2. Non-Electoral Standing</h3>
            <p>
              CJP does not field candidates in parliamentary, legislative assembly, or municipal elections. We do not collect electoral political donations. All public drives focus on civic accountability, RTI transparency, and contractor warranties.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">3. Static Commentary &amp; Demo Counters</h3>
            <p>
              Data counters, protest timelines, and member statistics displayed on this portal serve educational and satirical commentary purposes unless explicitly linked to verified public RTI records.
            </p>
          </div>

          <div className="pt-6 border-t border-[rgba(22,18,13,0.18)] text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
            COCKROACH JANTA PARTY LEGAL SECRETARIAT · NEW DELHI, INDIA
          </div>

        </div>

      </div>
    </div>
  );
};
