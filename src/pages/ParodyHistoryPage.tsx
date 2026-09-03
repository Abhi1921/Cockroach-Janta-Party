import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TimelineView } from '../components/TimelineView';
import { timelineData } from '../data/timelineData';
import { Calendar, Sparkles } from 'lucide-react';

export const ParodyHistoryPage: React.FC = () => {

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
    <div className="parody-history-page py-14 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="Master Timeline & History of Political Satire | CJP"
        description="Explore the master CJP timeline (2020-2026) and global political satire history comparing CJP with Rhinoceros Party, Monster Raving Loony Party, Vermin Supreme, and Die PARTEI."
        canonicalUrl="https://cockroachjantapartywale.com/parody-history"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        <Breadcrumbs items={[{ label: 'MASTER TIMELINE & SATIRE HISTORY' }]} />

        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
            <Calendar size={14} className="text-[#D9572B]" /> CJP MASTER CHRONOLOGY 2020-2026
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#16120D] uppercase leading-none font-black">
            CJP MASTER TIMELINE &amp; HISTORY
          </h1>
          <p className="text-sm sm:text-base text-[#3A332B] font-medium leading-relaxed">
            Chronological milestone archive of CJP civic audits, manifesto releases, court decisions, and global political satire movements.
          </p>
        </div>

        {/* CJP Master Interactive Timeline */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 sm:p-10 shadow-[8px_8px_0px_0px_#16120D] mb-16 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-4">
            <span className="text-xs font-black text-[#16120D] uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={16} className="text-[#D9572B]" /> COCKROACH JANTA PARTY MILESTONES (2020 - 2026)
            </span>
            <span className="text-[10px] font-mono font-bold bg-[#D9572B] text-white px-2.5 py-1 uppercase">VERIFIED TIMELINE</span>
          </div>

          <TimelineView events={timelineData} />
        </div>

        {/* Global Movements Comparison */}
        <div className="space-y-6 mb-16 max-w-5xl mx-auto">
          <div className="border-b-4 border-[#16120D] pb-3 mb-6">
            <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">GLOBAL COMPARATIVE DOSSIER</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#16120D] uppercase font-black">
              GLOBAL SATIRE MOVEMENTS IN HISTORY
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {globalMovements.map((m, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 shadow-[5px_5px_0px_0px_#16120D] space-y-3">
                <div className="flex flex-wrap justify-between items-start gap-2 border-b-2 border-[#16120D] pb-2">
                  <div>
                    <h3 className="font-display text-2xl text-[#16120D] uppercase font-black">{m.name}</h3>
                    <span className="text-xs font-black text-[#D9572B] uppercase">{m.country}</span>
                  </div>
                  <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-black px-2.5 py-1 uppercase">
                    CHAPTER #{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#3A332B] font-medium leading-relaxed">{m.desc}</p>
                <div className="pt-2 text-[10px] font-black text-[#D9572B] uppercase tracking-wider">
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
