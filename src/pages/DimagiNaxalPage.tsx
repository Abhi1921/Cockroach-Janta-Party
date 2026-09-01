import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { HelpCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export const DimagiNaxalPage: React.FC = () => {
  const { lang } = useLanguage();

  const faqs = [
    {
      q: "What does 'Dimagi Naxal' mean in current media commentary?",
      a: "'Dimagi Naxal' (or Urban Naxal) is a derogatory label frequently thrown by television commentators at students, RTI activists, and youth asking basic questions about government infrastructure, exam leaks, and municipal accountability."
    },
    {
      q: "Why does Cockroach Janta Party address this label?",
      a: "Because whenever students ask why a newly constructed bridge washed away after 2 days of rain, TV debates label them 'troublemakers' or 'Dimagi Naxal'. We use satirical commentary to highlight how asking for contractor warranties is basic citizenship, not radical subversion."
    },
    {
      q: "Does CJP have any partisan political affiliation?",
      a: "No. CJP is a non-partisan satire movement. We criticize municipal apathy across all political parties equally. Bad roads, overflowing drains, and leaking exam papers do not ask for your party affiliation before affecting your life."
    },
    {
      q: "How can citizens counter label politics?",
      a: "By focusing strictly on verifiable evidence: RTI filings, contractor warranty documents, water quality tests, and peaceful constitutional assembly under Article 19."
    }
  ];

  return (
    <div className="dimagi-naxal-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'दिमागी नक्सल व्याख्याता | कॉकरोच जनता पार्टी' : 'Dimagi Naxal & Cockroach Janta Party | CJP News Explainer'}
        description="Detailed satirical explainer on label politics, TV media commentary, student rights, and why demanding transparent municipal governance is basic civic duty."
        canonicalUrl="https://cockroachjantapartywale.com/dimagi-naxal"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            SATIRICAL EXPLAINER &amp; CIVIC DOSSIER
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            EXPLAINED: &lsquo;DIMAGI NAXAL&rsquo; &amp; CJP
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            Deconstructing television label politics, student activism, and the fight for uncorrupted public services in 2026.
          </p>
        </div>

        {/* Featured Editorial Card */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 mb-12">
          <div className="flex items-center gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <ShieldAlert size={28} className="text-[#D9572B] flex-shrink-0" />
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                EDITORIAL SYNOPSIS
              </span>
              <h3 className="font-serif font-black text-lg text-[#16120D] uppercase">
                WHEN ASKING FOR ROADS BECOMES A &lsquo;LABEL&rsquo;
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#3A332B] font-medium leading-relaxed">
            <p>
              In recent months, as Cockroach Janta Party (CJP) volunteer swarms marched through flooded ward streets holding wooden cockroach emblems and contractor RTI audit files, several primetime television commentators coined the phrase <strong className="text-[#16120D]">&lsquo;Dimagi Naxal&rsquo;</strong> to describe student delegates demanding 5-year road warranties.
            </p>

            <p>
              The satire lies in the absurdity: how did demanding clean drinking water, un-flooded subways, and leak-free national competitive exams get conflated with ideological extremism?
            </p>

            <div className="p-4 bg-[#16120D] text-[#F5EFE6] border-2 border-[#16120D] my-6 font-serif italic text-sm text-center">
              &ldquo;If holding a contractor accountable for a 50-crore road that melted in 10 minutes of rain makes a student &apos;Dimagi Naxal&apos;, then 1.4 billion citizens living with potholed roads are guilty of wanting basic governance.&rdquo;
            </div>

            <p>
              CJP embraces these labels with dark humor. We turn attempts at intimidation into satirical badges of honor, demonstrating that civic duty and constitutional questioning cannot be silenced by prime-time buzzwords.
            </p>
          </div>
        </div>

        {/* FAQ Breakdown */}
        <div className="space-y-6 mb-16">
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase border-b-4 border-[#16120D] pb-2">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md space-y-2">
                <div className="flex items-start gap-2">
                  <HelpCircle size={18} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
                  <h3 className="font-serif font-bold text-base text-[#16120D] uppercase">{faq.q}</h3>
                </div>
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Bottom Callout */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-8 border-4 border-[#16120D] shadow-xl text-center space-y-4">
          <h3 className="font-serif font-black text-2xl uppercase text-[#F5EFE6]">
            READ THE CJP 5-POINT MANIFESTO
          </h3>
          <p className="text-xs text-[#EADBCE] max-w-lg mx-auto">
            Discover our concrete demand charter for contractor warranties, public audit portals, and rural primary school funding.
          </p>
          <div className="pt-2">
            <Link
              to="/manifesto"
              className="inline-flex items-center gap-2 bg-[#D9572B] text-white text-xs font-extrabold px-6 py-3 border border-white hover:bg-white hover:text-[#16120D] transition-all uppercase tracking-wider"
            >
              <span>VIEW OFFICIAL MANIFESTO</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
