import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Users } from 'lucide-react';

export const CommunityGuidelinesPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="community-guidelines-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'कम्युनिटी दिशानिर्देश | कॉकरोच जनता पार्टी' : 'Community Guidelines | Cockroach Janta Party'}
        description="Official CJP Swarm community code of conduct, non-violent assembly principles, and online communication ethics."
        canonicalUrl="https://cockroachjantapartywale.com/community-guidelines"
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            CIVIC PARTICIPATION CODE
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            COMMUNITY GUIDELINES
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            MUTUAL RESPECT · NON-VIOLENT RESISTANCE · EVIDENCE-BASED ACTIVISM
          </p>
        </div>

        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <Users size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                CIVIC CIVILITY IN THE SWARM
              </h3>
              <p className="text-xs text-[#3A332B]">
                CJP brings together thousands of youth delegates. Our strength lies in strict adherence to non-violence, factual RTI data, and mutual respect.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Zero Tolerance for Violence or Vandalism</h3>
            <p>
              CJP ground assemblies and online forums strictly prohibit property damage, physical aggression, or incendiary hate speech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
