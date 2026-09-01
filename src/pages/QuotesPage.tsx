import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Quote, Download } from 'lucide-react';

export const QuotesPage: React.FC = () => {
  const { lang } = useLanguage();

  const quoteCards = [
    {
      quote: "We don't need political speeches. We need a 5-year contractor warranty on every paved road in India.",
      author: "Abhijeet Dipke",
      role: "Founder & Convenor, CJP",
      tag: "INFRASTRUCTURE"
    },
    {
      quote: "Democracy is not a silent VIP convoy passing through waterlogged streets while citizens drown in apathy.",
      author: "Ashutosh Ranka",
      role: "Policy Strategist",
      tag: "CIVIC DUTY"
    },
    {
      quote: "Primary schools should be built like fortresses for young minds, not leaking sheds where children sit on cold floors.",
      author: "Ananya Sen",
      role: "Head of Student Swarm Networks",
      tag: "EDUCATION"
    },
    {
      quote: "When exam papers leak, it isn't just paper that is destroyed — it is the honest sweat of millions of meritocratic youth.",
      author: "Saurav Das",
      role: "Legal & Press Delegate",
      tag: "MERITOCRACY"
    },
    {
      quote: "The cockroach survives everything. So will the ordinary tax-paying Indian citizen.",
      author: "CJP Manifesto Emblem",
      role: "Official Movement Motto",
      tag: "MOTTO"
    }
  ];

  return (
    <div className="quotes-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'ऐतिहासिक वक्तव्य व उद्धरण | कॉकरोच जनता पार्टी' : 'Historic Movement Quotes & Speeches | Cockroach Janta Party'}
        description="Historic quotes, speech transcripts, and downloadable poster graphics by CJP founder Abhijeet Dipke and student delegates."
        canonicalUrl="https://cockroachjantapartywale.com/quotes"
      />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            DECLARATIONS &amp; SPEECHES · EST. 2026
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            HISTORIC MOVEMENT QUOTES
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'अभिजीत दीपके और कॉकरोच जनता पार्टी के प्रमुख नेताओं के प्रेरणादायक और व्यंग्यात्मक वक्तव्य।'
              : 'Verbatim quotes, speech extracts, and shareable graphic posters defining the CJP youth movement.'}
          </p>
        </div>

        {/* Featured Graphic Quote Poster Display */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="border-4 border-[#16120D] bg-[#16120D] overflow-hidden shadow-xl">
            <img
              src="/cjp_system_change_quote.jpg"
              alt="System Change Quote Graphic Poster"
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest inline-block">
              FEATURED QUOTE POSTER
            </span>
            <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase leading-tight">
              &ldquo;LESS CEREMONY. MORE ACCOUNTABILITY.&rdquo;
            </h2>
            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              Official downloadable graphic quote card published during the 20 July Black Monday Assembly. Share on Twitter (X), Instagram, and WhatsApp.
            </p>
            <div className="pt-2">
              <a
                href="/cjp_system_change_quote.jpg"
                download="cjp_system_change_quote.jpg"
                className="bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold px-5 py-3 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all inline-flex items-center gap-2 uppercase tracking-wider"
              >
                <Download size={15} />
                <span>DOWNLOAD HIGH-RES GRAPHIC</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quotes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {quoteCards.map((q, idx) => (
            <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-lg space-y-4 flex flex-col justify-between relative">
              <Quote className="text-[#D9572B]/30 absolute top-4 right-4" size={48} />
              <div className="space-y-3 relative z-10">
                <span className="bg-[#16120D] text-[#F5EFE6] text-[9px] font-black px-2.5 py-0.5 uppercase tracking-wider inline-block">
                  {q.tag}
                </span>
                <p className="font-serif font-bold text-base md:text-lg text-[#16120D] leading-snug italic">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[#16120D]/20">
                <h4 className="font-serif font-bold text-sm text-[#16120D] uppercase">{q.author}</h4>
                <p className="text-[11px] font-extrabold text-[#D9572B] uppercase">{q.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
