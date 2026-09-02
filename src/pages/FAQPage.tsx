import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const FAQPage: React.FC = () => {
  const { lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Cockroach Janta Party?',
      a: 'Cockroach Janta Party (CJP) is an independent youth-driven civic movement, political satire initiative, and public accountability watchdog platform founded in 2026 by student researcher Abhijeet Dipke alongside co-founders Ashutosh Ranka and Saurav Das. It focuses on municipal governance audits, contractor road warranties, drain desilting transparency, and youth employment issues.'
    },
    {
      q: 'What does CJP stand for?',
      a: 'CJP stands for Cockroach Janta Party. It is the widely recognized abbreviation used by student delegates, media publications, and public observers.'
    },
    {
      q: 'What is Cockroach Janta Partywale?',
      a: 'Cockroach Janta Partywale (cockroachjantapartywale.com) is the official web portal, news dispatch center, and digital archive for the Cockroach Janta Party movement. It publishes empirical audit reports, press releases, manifesto documents, satirical graphics, and student advocacy resources.'
    },
    {
      q: 'Is Cockroach Janta Party an officially registered political party?',
      a: 'No. Cockroach Janta Party is an independent non-partisan satire and civic commentary movement. It is not registered with the Election Commission of India (ECI), does not contest political elections, and accepts zero corporate political funding.'
    },
    {
      q: 'What does the Cockroach Janta Party website publish?',
      a: 'The website publishes Section 4 RTI ward audit ledgers, municipal contractor warranty notices, primary school infrastructure reports (School Thik Karo campaign), youth protest dispatches, political satire commentary, and P2P mesh technical specifications (BitChat protocol).'
    },
    {
      q: 'Why the cockroach symbol?',
      a: 'The cockroach represents subterranean resilience, survival, and persistence. It serves as a satirical mascot for ordinary citizens who navigate broken urban infrastructure, unpaved roads, and bureaucratic delay without losing their voice.'
    },
    {
      q: 'Where can people find official Cockroach Janta Party updates?',
      a: 'Official dispatches are published on cockroachjantapartywale.com and verified social channels: Twitter/X (@Cockroachisback), Instagram (@cockroachjantaparty), YouTube (channel/UCCdhqGkJVJb8Y2IesdnxKHQ), Reddit (r/CockroachJantaParty09), WhatsApp Channel, and Telegram (@thecockroachchannel).'
    },
    {
      q: 'How do subterranean drain desilting & road warranty audits work?',
      a: 'CJP resident observers inspect municipal storm drains ahead of monsoon onset, measure desilting clearance depths, verify physical contractor warranty notice boards, and publish open RTI records.'
    }
  ];

  useEffect(() => {
    // FAQPage JSON-LD Schema for Google Rich Snippets
    let faqScript = document.querySelector('#faq-schema-jsonld');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = 'faq-schema-jsonld';
      faqScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(faqScript);
    }
    const faqSchemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
    faqScript.textContent = JSON.stringify(faqSchemaData);
  }, []);

  return (
    <div className="faq-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title={lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न | कॉकरोच जनता पार्टी' : 'Frequently Asked Questions (FAQ) | Cockroach Janta Party (CJP)'}
        description="Official FAQ for Cockroach Janta Party (CJP) & Cockroach Janta Partywale — Clear answers on movement purpose, CJP abbreviation, satire status, founder info, and official social channels."
        canonicalUrl="https://cockroachjantapartywale.com/faq"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            PUBLIC INFORMATION &amp; ENTITY FAQ
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4 uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            Clear answers regarding Cockroach Janta Party (CJP), Cockroach Janta Partywale, non-partisan satire status, and movement resources.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] shadow-md">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-[#EADBCE] transition-colors"
                aria-expanded={openIdx === idx}
              >
                <span className="font-serif font-bold text-lg text-[#16120D] flex items-center gap-2">
                  <HelpCircle size={18} className="text-[#D9572B] flex-shrink-0" />
                  {faq.q}
                </span>
                {openIdx === idx ? <ChevronUp size={20} className="text-[#D9572B]" /> : <ChevronDown size={20} className="text-[#16120D]" />}
              </button>

              {openIdx === idx && (
                <div className="p-6 pt-0 border-t border-[#16120D]/10 text-xs text-[#3A332B] leading-relaxed font-medium">
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

