import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is Cockroach Janta Party an officially registered political party?',
      a: 'No. CJP is an independent satirical civic commentary movement and non-partisan community watchdog portal. We do not contest elections or accept government funding.'
    },
    {
      q: 'Why the cockroach symbol?',
      a: 'The cockroach represents ultimate resilience, subterranean survival, and persistence. It serves as a political satire symbol for everyday citizens demanding public accountability.'
    },
    {
      q: 'How do subterranean drain desilting audits work?',
      a: 'CJP resident observers inspect municipal storm drains ahead of heavy rainfalls, measure desilting depths, and file Section 4 RTI applications to verify contractor service level agreements.'
    },
    {
      q: 'Can I get free legal aid for ward grievances?',
      a: 'Yes. Verified CJP legal advocates provide free, confidential guidance on filing RTI queries and municipal contractor warranty complaints.'
    }
  ];

  return (
    <div className="faq-page py-12 bg-[#0d0a07] text-[#f1e8d2] font-sans">
      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#c09a25]/10 text-[#c09a25] border border-[#c09a25] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            PUBLIC INFORMATION
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#f1e8d2] mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-[#9e917c] text-base leading-relaxed font-medium">
            Clear answers regarding CJP non-partisan status, subterranean drain audits, and RTI legal advocacy.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#140f0a] border border-[rgba(241,232,210,0.18)]">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-[#1b140c] transition-colors"
              >
                <span className="font-serif font-bold text-lg text-[#f1e8d2] flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#c09a25] flex-shrink-0" />
                  {faq.q}
                </span>
                {openIdx === idx ? <ChevronUp size={20} className="text-[#d9572b]" /> : <ChevronDown size={20} className="text-[#9e917c]" />}
              </button>

              {openIdx === idx && (
                <div className="p-6 pt-0 border-t border-[rgba(241,232,210,0.1)] text-xs text-[#9e917c] leading-relaxed font-medium">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
