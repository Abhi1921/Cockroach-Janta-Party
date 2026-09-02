import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { FileText } from 'lucide-react';

export const EditorialPolicyPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="editorial-policy-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'संपादकीय नीति | कॉकरोच जनता पार्टी' : 'Editorial Policy & Satire Standards | Cockroach Janta Party'}
        description="Official editorial policy for CJP news dispatches, satirical commentaries, RTI verification standards, and humor ethics."
        canonicalUrl="https://cockroachjantapartywale.com/editorial-policy"
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            JOURNALISM &amp; SATIRE STANDARDS
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            EDITORIAL &amp; SATIRE POLICY
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            FACT-BASED CIVIC CRITIQUE · RESPONSIBLE POLITICAL SATIRE
          </p>
        </div>

        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <FileText size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                CIVIC SATIRE &amp; FACTUAL INTEGRITY AT COCKROACH JANTA PARTYWALE
              </h3>
              <p className="text-xs text-[#3A332B]">
                Cockroach Janta Partywale (cockroachjantapartywale.com) is the official publication and digital community portal for Cockroach Janta Party (CJP). It combines sharp political satire and dark humor with empirical Section 4 RTI ward audit data.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Publication Purpose &amp; Ownership</h3>
            <p>
              This website is published independently by the Cockroach Janta Party youth secretariat led by founder Abhijeet Dipke, Ashutosh Ranka, and Saurav Das. It serves as an open-access archive for public dispatches, contractor warranty ledgers, primary school audit reports, and student advocacy charters.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">2. Verification Standard</h3>
            <p>
              All published ward audit dispatches and contractor warranty claims must be grounded in verified Section 4 RTI applications, public procurement notices, or direct student observer inspections.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">3. Non-Defamatory Humorous Critique</h3>
            <p>
              Satirical artwork, meme dispatches, and caricature commentary target municipal office apathy, contractor warranty failures, and policy decisions — never private individuals or protected personal attributes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
