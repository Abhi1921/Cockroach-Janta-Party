import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Globe } from 'lucide-react';

export const ParodyHistoryPage: React.FC = () => {
  const { lang } = useLanguage();

  const globalMovements = [
    {
      name: "Rhinoceros Party",
      country: "Canada (Est. 1963)",
      desc: "Promised to repeal the law of gravity, pave the Province of Quebec with asphalt, and replace all navy ships with rubber ducks. Proved how absurd political campaign promises could be exposed through hyperbole.",
      impact: "Influenced electoral parody laws worldwide."
    },
    {
      name: "Official Monster Raving Loony Party",
      country: "United Kingdom (Est. 1983)",
      desc: "Founded by Screaming Lord Sutch. Passed satirical proposals like 24-hour pub opening hours and passports for pets — several of which were later adopted into actual British law!",
      impact: "Demonstrated satire driving real parliamentary reforms."
    },
    {
      name: "Vermin Supreme",
      country: "United States (Active 1987-Present)",
      desc: "Famous for wearing a boot on his head, promising free ponies for every American, and promoting mandatory toothbrushing laws to mock theatrical presidential debates.",
      impact: "Highlighted absurdities in major-party candidate platforms."
    },
    {
      name: "Die PARTEI",
      country: "Germany (Est. 2004)",
      desc: "Founded by editors of satire magazine Titanic. Won actual seats in the European Parliament with slogans like 'Build a wall around Liechtenstein'. Uses parliamentary speaking time to expose lobbying secrecy.",
      impact: "Currently holds elected European Parliament representation."
    },
    {
      name: "Cockroach Janta Party Wale (CJP)",
      country: "India (Est. 2026)",
      desc: "India's pioneer satire-first civic commentary movement. Demands 5-year contractor road warranties, subterranean drain audits, and primary school bench funding using dark humor and student swarms.",
      impact: "Mobilized over 20,000 youth RTI advocates across 14 states."
    }
  ];

  return (
    <div className="parody-history-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'राजनीतिक व्यंग्य का इतिहास | कॉकरोच जनता पार्टी' : 'History of Political Satire & Parody Movements | CJP'}
        description="Educational explainer comparing Cockroach Janta Party (CJP) with global satirical movements (Rhinoceros Party, Monster Raving Loony Party, Vermin Supreme, Die PARTEI)."
        canonicalUrl="https://cockroachjantapartywale.com/parody-history"
      />

      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            GLOBAL CIVIC DOSSIER &amp; HISTORY
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            HISTORY OF POLITICAL SATIRE
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'विश्व भर में राजनीतिक व्यंग्य और पैरोडी आंदोलनों का इतिहास और लोकतंत्र में उनकी भूमिका।'
              : 'How satirical movements across the globe use dark humor, hyperbole, and civic performance to hold power accountable.'}
          </p>
        </div>

        {/* Intro Manifesto Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <Globe size={28} className="text-[#D9572B]" />
            <h2 className="font-serif font-black text-2xl text-[#16120D] uppercase">
              SATIRE AS A DEMOCRATIC IMMUNE SYSTEM
            </h2>
          </div>
          <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
            Satire is not mere entertainment; historically, it acts as a democratic immune system. When formal institutions become rigid, pompous, or unresponsive, satire strips away official ceremony and forces uncomfortable truths into public view.
          </p>
        </div>

        {/* Movement Timeline Cards */}
        <div className="space-y-6 mb-16">
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase border-b-4 border-[#16120D] pb-2">
            GLOBAL SATIRE MOVEMENTS TIMELINE
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {globalMovements.map((m, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg space-y-3">
                <div className="flex flex-wrap justify-between items-start gap-2 border-b border-[#16120D]/20 pb-2">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#16120D] uppercase">{m.name}</h3>
                    <span className="text-[11px] font-extrabold text-[#D9572B] uppercase">{m.country}</span>
                  </div>
                  <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-2.5 py-1 uppercase">
                    CHAPTER #{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{m.desc}</p>
                <div className="pt-2 text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
                  HISTORIC IMPACT: {m.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
