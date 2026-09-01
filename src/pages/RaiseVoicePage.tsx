import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight } from 'lucide-react';

export const RaiseVoicePage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="raise-voice-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'अपनी आवाज उठाएं | कॉकरोच जनता पार्टी' : 'Raise Your Voice — Log Ward Issue | Cockroach Janta Party'}
        description="Log broken roads, dirty tap water, or government school infrastructure issues directly with CJP civic observers."
        canonicalUrl="https://cockroachjantapartywale.com/raise-voice"
      />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
          CIVIC INTAKE DESK
        </span>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4 uppercase">
          RAISE YOUR VOICE
        </h1>
        <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto mb-8">
          Report municipal contractor failures, subterranean drainage issues, or school repairs in your ward.
        </p>

        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl space-y-6 max-w-2xl mx-auto">
          <Megaphone size={48} className="text-[#D9572B] mx-auto" />
          <h2 className="font-serif font-bold text-2xl uppercase">DIRECT WARD ISSUE REPORTING</h2>
          <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
            Our volunteer network inspects reported sites, files Section 4 RTI queries, and publishes contractor warranty audit dispatches.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D9572B] text-white text-xs font-extrabold px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#16120D] transition-all uppercase tracking-wider"
            >
              <span>SUBMIT WARD ISSUE DISPATCH</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
