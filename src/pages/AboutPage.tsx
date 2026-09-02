import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Shield, Eye, Heart, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="about-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'कॉकरोच जनता पार्टी के बारे में | CJP' : 'About Cockroach Janta Party | CJP & Cockroach Janta Partywale'}
        description="Learn about Cockroach Janta Party (CJP) and Cockroach Janta Partywale — an independent youth civic movement dedicated to municipal transparency, subterranean drain audits, and public accountability."
        canonicalUrl="https://cockroachjantapartywale.com/about"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'नागरिक आंदोलन' : 'INDEPENDENT CIVIC INITIATIVE & PUBLICATION'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            ABOUT COCKROACH JANTA PARTY (CJP)
          </h1>
          <p className="text-[#3A332B] text-base md:text-lg leading-relaxed font-medium">
            {t('tagline')}
          </p>
        </div>

        {/* Story & Entity Definition Section */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-center">
          <div className="md:col-span-7 bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl">
            <h2 className="font-serif font-black text-3xl text-[#16120D] mb-4 uppercase">
              {lang === 'hi' ? 'हमारा उद्देश्य और दर्शन' : 'OUR PURPOSE & ENTITY POSITIONING'}
            </h2>
            <div className="space-y-4 text-xs md:text-sm text-[#3A332B] leading-relaxed font-medium">
              <p>
                <strong className="text-[#16120D]">Cockroach Janta Party (CJP)</strong> is an independent youth-driven civic movement and political satire initiative founded in 2026 by student researcher <strong className="text-[#16120D]">Abhijeet Dipke</strong> alongside co-founders <strong className="text-[#16120D]">Ashutosh Ranka</strong> and <strong className="text-[#16120D]">Saurav Das</strong>. We examine daily municipal concerns—from subterranean sewer clearance depths to 3-year contractor road warranties—using political satire, empirical RTI data, and open public records.
              </p>
              <p>
                <strong className="text-[#16120D]">Cockroach Janta Partywale (cockroachjantapartywale.com)</strong> serves as the official web publication, news dispatch center, and digital repository for the movement. It provides zero-paywall public access to ward audit files, manifesto declarations, student protest guidelines, and civic explainers.
              </p>
              <p>
                We do not contest political elections, seek government office, or hold political party registration with the Election Commission of India. Our objective is strictly non-partisan: empowering ordinary citizens to ask sharp questions and hold municipal authorities accountable.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#16120D] text-[#F5EFE6] p-8 md:p-12 border-2 border-[#16120D] flex flex-col justify-between min-h-[340px]">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">RESILIENCE PHILOSOPHY</span>
              <h3 className="font-serif font-black text-2xl mb-4 uppercase">WHY THE COCKROACH MESH?</h3>
              <p className="text-xs text-[#EADBCE] font-medium leading-relaxed">
                The cockroach represents subterranean persistence—surviving harsh conditions, remaining vigilant under darkness, and outlasting bureaucracy.
              </p>
            </div>
            <div className="pt-6 border-t border-[rgba(245,239,230,0.2)] text-[10px] font-bold text-[#D9572B] uppercase tracking-wider">
              CIVIC VIGILANCE · EST. 2026
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <Shield size={24} className="text-[#D9572B] mb-3" />
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">NON-PARTISAN</h3>
            <p className="text-xs text-[#3A332B] font-medium">We operate independently without political party affiliations or government funding.</p>
          </div>
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <Eye size={24} className="text-[#D9572B] mb-3" />
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">FULL TRANSPARENCY</h3>
            <p className="text-xs text-[#3A332B] font-medium">Publishing open RTI filings and geotagged sewer depth reports in the public domain.</p>
          </div>
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <Heart size={24} className="text-[#D9572B] mb-3" />
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">YOUTH DRIVEN</h3>
            <p className="text-xs text-[#3A332B] font-medium">Empowering young students, researchers, and volunteers to lead ward-level audits.</p>
          </div>
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <Compass size={24} className="text-[#D9572B] mb-3" />
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">CIVIC ACTION</h3>
            <p className="text-xs text-[#3A332B] font-medium">Organizing rapid water testing kiosks and physical notice board compliance checks.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-10 text-center max-w-3xl mx-auto border-2 border-[#16120D]">
          <h2 className="font-serif font-black text-3xl mb-4 uppercase">
            {lang === 'hi' ? 'आंदोलन का हिस्सा बनें' : 'BE PART OF THE MOVEMENT'}
          </h2>
          <p className="text-xs text-[#EADBCE] font-medium mb-6 max-w-md mx-auto">
            {t('heroSupporting')}
          </p>
          <Link to="/join" className="inline-block bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 border-2 border-[#D9572B] hover:bg-[#EADBCE] hover:text-[#16120D] transition-all">
            {t('navJoinSwarm')}
          </Link>
        </div>

      </div>
    </div>
  );
};
