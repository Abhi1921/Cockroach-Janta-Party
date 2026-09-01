import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle, ShieldAlert, Megaphone } from 'lucide-react';

export const IssuesPage: React.FC = () => {
  const { lang } = useLanguage();

  const verifiedIssues = [
    {
      num: '01',
      category: 'SUBTERRANEAN DRAINAGE',
      title: 'Monsoon Sewer Waterlogging & Silt Clearance',
      whatIsIssue: 'Urban drainage networks often experience severe blockages during heavy rains when subterranean desilting is delayed or insufficiently executed.',
      whatCjpSays: "CJP demands bi-weekly mechanized desilting schedules and public geotagged clearance depth verification logs published prior to monsoon seasons.",
      whyMatters: 'Waterlogging damages local public infrastructure, creates sanitation hazards, and interrupts neighborhood transportation.',
      source: 'CJP Civic Audit Series 2026 / Municipal Sanitation Manual'
    },
    {
      num: '02',
      category: 'PUBLIC INFRASTRUCTURE',
      title: 'Contractor 3-Year Paving Warranty Compliance',
      whatIsIssue: 'Public road paving contracts frequently suffer early deterioration without clear public contractor liability notice boards.',
      whatCjpSays: "CJP advocates for mandatory physical on-site notice boards displaying contractor liability contact numbers on every road worksite over ₹5 Lakhs.",
      whyMatters: 'Physical notice boards allow citizens to hold paving contractors accountable for re-emerging potholes within warranty periods.',
      source: 'Section 4 RTI Mandate / PWD Paving Contract Guidelines'
    },
    {
      num: '03',
      category: 'PUBLIC HEALTH',
      title: 'Piped Drinking Water Purity & TDS Diagnostics',
      whatIsIssue: 'Household tap water supply lines in densely populated wards occasionally suffer from pipeline contamination.',
      whatCjpSays: "CJP organizes mobile volunteer water quality testing kiosks offering free TDS and chlorine diagnostics to household residents.",
      whyMatters: 'Clean drinking water is a fundamental civic right essential for preventing waterborne illnesses in urban wards.',
      source: 'BIS IS 10500 Drinking Water Guidelines'
    },
    {
      num: '04',
      category: 'YOUTH EMPLOYMENT',
      title: 'Direct Wages & Municipal Maintenance Apprenticeships',
      whatIsIssue: 'Sanitation and maintenance workers face contractor middleman wage retention and lack of direct bank transfers.',
      whatCjpSays: "CJP demands direct municipal bank wage disbursements and transparent ward-level apprentice positions for local youth.",
      whyMatters: 'Eliminating contractor middleman deductions ensures fair compensation and dignified local employment opportunities.',
      source: 'CJP Youth Employment Position Paper 2026'
    },
    {
      num: '05',
      category: 'DIGITAL RIGHTS',
      title: 'Section 4 Open RTI Publishing & Zero Paywalls',
      whatIsIssue: 'Public tender documents, expenditure ledgers, and municipal audit records are often inaccessible behind administrative hurdles.',
      whatCjpSays: "CJP advocates for zero paywall online publishing of all ward maintenance budgets and contractor bill-of-quantities.",
      whyMatters: 'Transparent digital access enables ordinary citizens to monitor municipal spending without bureaucratic barriers.',
      source: 'Right to Information Act 2005'
    },
    {
      num: '06',
      category: 'EDUCATION',
      title: 'Public Study Libraries & Community Learning Rooms',
      whatIsIssue: 'Student youth in overcrowded ward sectors lack quiet, well-equipped public study spaces and digital infrastructure.',
      whatCjpSays: "CJP calls for establishing free ward community reading libraries with high-speed Wi-Fi and updated reference books.",
      whyMatters: 'Accessible learning environments empower young students to prepare for academic and vocational opportunities.',
      source: 'CJP Education Access Charter'
    },
    {
      num: '07',
      category: 'ENVIRONMENT',
      title: 'Urban Park Preservation & Native Tree Canopy',
      whatIsIssue: 'Neighborhood green spaces are frequently neglected or encroached upon, reducing urban biodiversity.',
      whatCjpSays: "CJP demands participatory budgeting for local park upkeep and native tree planting drives across all ward sectors.",
      whyMatters: 'Preserving urban greenery improves air quality and provides healthy recreational areas for local communities.',
      source: 'CJP Environmental Initiative 2026'
    },
    {
      num: '08',
      category: 'ACCOUNTABILITY',
      title: 'Participatory Ward Budgeting & Pre-Payment Audits',
      whatIsIssue: 'Municipal contractor invoices are often approved without public review from Resident Welfare Associations.',
      whatCjpSays: "CJP proposes mandatory open-door ward review sessions before final contractor payment approvals.",
      whyMatters: 'Direct community audit input prevents substandard public works and promotes municipal transparency.',
      source: 'CJP Municipal Reform Paper'
    }
  ];

  return (
    <div className="issues-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP Issues | Public Issues & Civic Commentary"
        description="Explore 8+ verified public civic issues championed by Cockroach Janta Party: Drainage, contractor warranties, water purity, RTI, and youth employment."
        canonicalUrl="https://cockroachjantapartywale.com/issues"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'मुद्दा खोजकर्ता' : 'CIVIC ISSUE EXPLORER'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4 uppercase">
            ISSUES THAT MATTER
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            Clear distinction between factual background, CJP's stated civic positions, and neutral context.
          </p>
        </div>

        {/* DEDICATED ISSUES CAMPAIGN POSTER CARD */}
        <div className="my-10 max-w-xl mx-auto bg-[#16120D] border-4 border-[#16120D] p-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#EADBCE] border-b border-white/20 pb-2 mb-3 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#D9572B]">
              <Megaphone size={14} /> OFFICIAL ISSUES CAMPAIGN POSTER
            </span>
            <span>POSTER #01 · 5 SEP MARCH</span>
          </div>

          <div className="bg-[#16120D] border border-white/10 p-2 overflow-hidden flex items-center justify-center">
            <img
              src="/cjp_sep5_protest_poster.png"
              alt="CJP Public Issues Official Campaign Poster"
              className="w-full h-auto object-contain mx-auto rounded"
            />
          </div>

          <div className="text-center pt-3">
            <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest inline-block mb-1">
              RAISE YOUR VOICE FOR PUBLIC ISSUES
            </span>
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              SUBTERRANEAN DRAIN &amp; SCHOOL INFRASTRUCTURE AUDIT
            </h3>
            <p className="text-[11px] text-[#EADBCE] font-bold uppercase tracking-wider mt-1">
              "CHALO POLICE HQ &amp; INDIA GATE · DEMAND ACCOUNTABILITY!"
            </p>
          </div>
        </div>

        {/* Editorial Disclaimer */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 max-w-4xl mx-auto mb-16 shadow-md flex items-start gap-4">
          <ShieldAlert size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] font-medium leading-relaxed">
            <span className="font-extrabold text-[#16120D] block uppercase mb-1">EDITORIAL DISTINCTION NOTICE</span>
            Each issue card below clearly separates factual background, Cockroach Janta Party's stated civic position, and neutral public context.
          </div>
        </div>

        {/* 8 Issue Explorer Cards */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {verifiedIssues.map((iss) => (
            <div key={iss.num} className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl hover:border-[#D9572B] transition-all">
              
              <div className="flex justify-between items-center border-b border-[#16120D]/20 pb-3 mb-4">
                <span className="font-serif font-black text-3xl text-[#D9572B]">{iss.num}</span>
                <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
                  {iss.category}
                </span>
              </div>

              <h2 className="font-serif font-black text-2xl text-[#16120D] uppercase mb-4 leading-tight">
                {iss.title}
              </h2>

              <div className="space-y-4 text-xs text-[#3A332B] font-medium leading-relaxed mb-6">
                <div className="bg-[#EADBCE] border border-[#16120D] p-4">
                  <span className="font-extrabold text-[#16120D] uppercase block mb-1">WHAT IS THE ISSUE?</span>
                  <p>{iss.whatIsIssue}</p>
                </div>

                <div className="bg-[#16120D] text-[#F5EFE6] p-4">
                  <span className="font-extrabold text-[#D9572B] uppercase block mb-1">WHAT DOES CJP SAY? (STATED POSITION)</span>
                  <p className="text-[#EADBCE] font-bold">{iss.whatCjpSays}</p>
                </div>

                <div className="bg-[#EADBCE] border border-[#16120D] p-4">
                  <span className="font-extrabold text-[#16120D] uppercase block mb-1">WHY DOES IT MATTER? (NEUTRAL CONTEXT)</span>
                  <p>{iss.whyMatters}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[rgba(22,18,13,0.18)] text-[10px] font-bold text-[#3A332B] flex items-center gap-1">
                <CheckCircle size={13} className="text-[#D9572B]" /> SOURCE: {iss.source}
              </div>

            </div>
          ))}
        </div>

        {/* Sources & References */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 max-w-4xl mx-auto shadow-md">
          <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-3 border-b border-[#16120D]/20 pb-2">
            ISSUES SOURCES &amp; REFERENCES
          </h3>
          <ul className="text-xs text-[#3A332B] font-medium space-y-2">
            <li>• <strong>RTI Act Section 4:</strong> Proactive Information Disclosure Mandates.</li>
            <li>• <strong>BIS IS 10500 Norms:</strong> Public Drinking Water Standards.</li>
            <li>• <strong>CJP Civic Audit Series:</strong> Empirical Ward Inspection Data 2026.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
