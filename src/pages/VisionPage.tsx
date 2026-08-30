import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle, Eye } from 'lucide-react';

export const VisionPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const conversationDrivers = [
    {
      issue: 'Subterranean Sewer Desilting',
      why: 'Pre-monsoon blockage causes urban waterlogging and structural damage to low-lying ward sectors.',
      position: 'Bi-weekly mechanized desilting with geotagged online depth logs.',
      source: 'CJP Civic Audit Series 2026'
    },
    {
      issue: 'Contractor 3-Year Paving Warranties',
      why: 'Potholes re-emerge quickly when contractors are not held to physical public liability notice boards.',
      position: 'Mandatory physical notice boards displaying contractor liability contact numbers on every site.',
      source: 'Section 4 RTI Disclosure Guidelines'
    },
    {
      issue: 'Piped Drinking Water Quality',
      why: 'Contaminated supply lines lead to waterborne illnesses in densely populated neighborhoods.',
      position: 'Free rapid volunteer TDS and chlorine water testing kiosks in local transit hubs.',
      source: 'BIS IS 10500 Drinking Water Guidelines'
    },
    {
      issue: 'Direct Sanitation Worker Wages',
      why: 'Contractor middleman wage retention unfairly diminishes monthly earnings for ward workers.',
      position: 'Direct municipal bank wage transfers and mandatory ergonomic safety gear.',
      source: 'Municipal Sanitation Safety Charter 2026'
    },
    {
      issue: 'Open RTI Digital Publishing',
      why: 'Complex administrative hurdles deter ordinary citizens from auditing public tender ledgers.',
      position: 'Zero paywall public access to ward budgets, tender documents, and RTI queries.',
      source: 'Right to Information Act 2005'
    },
    {
      issue: 'Youth Civic Apprenticeships',
      why: 'Young graduates face entry-level employment barriers despite possessing strong technical skills.',
      position: 'Transparent ward maintenance apprentice positions and direct skill certification.',
      source: 'CJP Youth Employment Position Paper'
    }
  ];

  return (
    <div className="vision-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP Vision | Cockroach Janta Party"
        description="Explore the vision, core philosophy, and conversation drivers of Cockroach Janta Party: A different kind of public voice."
        canonicalUrl="http://localhost:3000/vision"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'भविष्य का खाका' : 'CIVIC VISION'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4 uppercase">
            A DIFFERENT KIND OF PUBLIC VOICE.
          </h1>
          <p className="text-[#3A332B] text-base md:text-lg leading-relaxed font-medium">
            {t('tagline')}
          </p>
        </div>

        {/* DEDICATED VISION POSTER CARD */}
        <div className="my-10 max-w-xl mx-auto bg-[#16120D] border-4 border-[#16120D] p-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#EADBCE] border-b border-white/20 pb-2 mb-3 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#D9572B]">
              <Eye size={14} /> OFFICIAL VISION POSTER
            </span>
            <span>POSTER #05 · CIVIC VISION</span>
          </div>

          <div className="bg-[#16120D] border border-white/10 p-2 overflow-hidden flex items-center justify-center">
            <img
              src="/cjp_dispatch_paying_attention_poster.png"
              alt="CJP Civic Vision Official Poster"
              className="w-full h-auto object-contain mx-auto rounded"
            />
          </div>

          <div className="text-center pt-3">
            <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest inline-block mb-1">
              FOR THOSE WHO REFUSE TO STAY SILENT
            </span>
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              CIVIC VIGILANCE &amp; SUBTERRANEAN AUDIT
            </h3>
            <p className="text-[11px] text-[#EADBCE] font-bold uppercase tracking-wider mt-1">
              "WE DON'T NEED SPEECHES. WE NEED BETTER QUESTIONS."
            </p>
          </div>
        </div>

        {/* OUR IDEA Section (Substantial Paragraphs) */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 max-w-4xl mx-auto mb-20 shadow-xl">
          <h2 className="font-serif font-black text-3xl text-[#16120D] mb-6 uppercase border-b border-[#16120D]/20 pb-4">
            OUR IDEA
          </h2>

          <div className="space-y-6 text-xs md:text-sm text-[#3A332B] leading-relaxed font-medium">
            <p>
              Navigating municipal administration often feels like being lost in a maze of endless forms, rubber stamps, and transferred phone calls. Cockroach Janta Party was created as a humorous yet sharp civic project to give voice to frustrated citizens who refuse to normalize broken public systems.
            </p>
            <p>
              We view satire not as an escape from reality, but as an empirical lens to examine real-world public issues — from subterranean sewer desilting to 3-year contractor road warranties and open RTI disclosures.
            </p>
            <p>
              By combining citizen audit note-taking with lighthearted commentary, we aim to transform public apathy into active neighborhood engagement.
            </p>
            <p>
              Our ultimate vision is straightforward: a transparent, proactive civic ecosystem where public institutions operate with total openness and citizens feel empowered to ask uncomfortable questions.
            </p>
          </div>
        </div>

        {/* WHAT DRIVES THE CONVERSATION (6-8 Cards) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">CIVIC DRIVERS</span>
            <h2 className="font-serif font-black text-3xl md:text-4xl text-[#16120D]">
              WHAT DRIVES THE CONVERSATION
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conversationDrivers.map((cd, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md hover:border-[#D9572B] transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">DRIVER #{idx + 1}</span>
                  <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">{cd.issue}</h3>
                  <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-3"><strong>WHY IT MATTERS:</strong> {cd.why}</p>
                  <p className="text-xs text-[#16120D] font-bold leading-relaxed mb-4"><strong>CJP POSITION:</strong> {cd.position}</p>
                </div>
                <div className="pt-3 border-t border-[#16120D]/18 text-[9px] font-bold text-[#3A332B] flex items-center gap-1">
                  <CheckCircle size={12} className="text-[#D9572B]" /> SOURCE: {cd.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YOUTH & ACCOUNTABILITY SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl">
            <h3 className="font-serif font-black text-2xl text-[#16120D] mb-4 uppercase">THE YOUTH DIMENSION</h3>
            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              Young students, recent graduates, and aspiring professionals represent the core energy of Cockroach Janta Party. We believe young minds should not merely observe civic decay, but actively lead ward depth audits and open data discussions.
            </p>
          </div>

          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl">
            <h3 className="font-serif font-black text-2xl text-[#16120D] mb-4 uppercase">ACCOUNTABILITY IMPERATIVE</h3>
            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              Public funds belong to the people. True municipal accountability requires publishing contractor tender ledgers, warranty expiration dates, and sewer cleaning logs in the open digital domain under Section 4 RTI mandates.
            </p>
          </div>
        </div>

        {/* Sources & References */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 max-w-4xl mx-auto shadow-md mb-16">
          <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-3 border-b border-[#16120D]/20 pb-2">
            VISION SOURCES &amp; REFERENCES
          </h3>
          <ul className="text-xs text-[#3A332B] font-medium space-y-2">
            <li>• <strong>CJP Stated Position:</strong> Cockroach Janta Party Stated Civic Vision 2026.</li>
            <li>• <strong>RTI Act Mandates:</strong> Right to Information Act 2005 Section 4 Proactive Disclosures.</li>
            <li>• <strong>Public Works Guidelines:</strong> Standard Municipal PWD Contractor Terms.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-10 text-center max-w-3xl mx-auto border-2 border-[#16120D]">
          <h2 className="font-serif font-black text-3xl text-[#F5EFE6] mb-4 uppercase">
            {lang === 'hi' ? 'दृष्टिकोण को वास्तविकता में बदलें' : 'TURN VISION INTO CIVIC ACTION'}
          </h2>
          <Link to="/join" className="inline-block bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 border-2 border-[#D9572B] hover:bg-[#EADBCE] hover:text-[#16120D] transition-all">
            {t('navJoinSwarm')}
          </Link>
        </div>

      </div>
    </div>
  );
};
