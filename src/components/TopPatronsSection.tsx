import React from 'react';
import { Crown, Star, CheckCircle, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopPatronsSection: React.FC = () => {
  const topPatrons = [
    {
      rank: '01',
      name: 'VP1119',
      avatar: 'V',
      tag1: 'FOUNDING PATRON',
      tag2: 'CHAI',
      badge: 'HIGHEST SUPPORT!',
      patronNo: 'PATRON #001',
      since: 'SINCE AUG 2026'
    },
    {
      rank: '02',
      name: 'TheRebel',
      avatar: 'T',
      tag1: 'FOUNDING PATRON',
      tag2: 'CHAI',
      patronNo: 'PATRON #002',
      since: 'SINCE JUL 2026'
    },
    {
      rank: '03',
      name: 'Yunus Ahmed',
      avatar: 'Y',
      tag1: 'FOUNDING PATRON',
      tag2: 'CHAI',
      patronNo: 'PATRON #003',
      since: 'SINCE JUL 2026'
    },
    {
      rank: '04',
      name: 'No name',
      avatar: 'N',
      tag1: 'FOUNDING PATRON',
      tag2: 'CHAI',
      patronNo: 'PATRON #004',
      since: 'SINCE JUL 2026'
    },
    {
      rank: '05',
      name: 'Vandana Nadig Nair',
      avatar: 'V',
      tag1: 'DIAMOND PATRON',
      tag2: 'CHAI',
      patronNo: 'PATRON #005',
      since: 'SINCE JUL 2026'
    }
  ];

  const verifiedPatrons = [
    { name: 'Nikhil Aglave', time: '22 HOURS AGO', avatar: 'N' },
    { name: 'NLSIU 2026?convocation', time: '5 DAYS AGO', avatar: 'N' },
    { name: 'Nirmalkumar', time: '6 DAYS AGO', avatar: 'N' },
    { name: 'Maurice Benny', time: '9 DAYS AGO', avatar: 'M' },
    { name: 'Alpesh', time: '10 DAYS AGO', avatar: 'A' }
  ];

  return (
    <section className="top-patrons-section py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto space-y-2">
          <h2 className="font-serif font-black text-4xl md:text-6xl text-[#16120D]">
            The swarm&apos;s <span className="italic font-normal font-serif text-[#D9A02B]">top patrons.</span>
          </h2>
          <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
            Verified supporters keeping the servers on and the dev in chai. Amounts stay private — recognition is a thank-you, never an ad.{' '}
            <Link to="/support-dev" className="font-extrabold text-[#16120D] underline underline-offset-2 hover:text-[#D9572B]">
              Buy a chai.
            </Link>
          </p>
        </div>

        {/* Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: TOP 5 PATRONS (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#16120D] border-b border-[#16120D]/20 pb-2">
              <Crown size={14} className="text-[#D9A02B]" />
              <span>TOP 5 PATRONS</span>
            </div>

            {/* Rank 01 Featured Card */}
            <div className="bg-[#F6F0E4] border-2 border-[#16120D] shadow-[6px_6px_0px_0px_#D9A02B] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#16120D] text-[#F5EFE6] text-[9px] font-black px-3 py-1 uppercase tracking-widest border-b border-l border-[#16120D] transform rotate-3 shadow-sm">
                HIGHEST SUPPORT!
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D9A02B] text-[#16120D] p-3 border border-[#16120D] text-center font-extrabold flex-shrink-0">
                  <Crown size={18} className="mx-auto mb-0.5" />
                  <div className="font-serif text-2xl font-black leading-none">01</div>
                  <div className="text-[7px] tracking-widest block uppercase mt-0.5">TOP PATRON</div>
                </div>

                <div className="space-y-2 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center font-serif text-xl font-bold">
                      {topPatrons[0].avatar}
                    </div>
                    <div>
                      <h3 className="font-serif font-black text-2xl uppercase text-[#16120D] leading-none">
                        {topPatrons[0].name}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        <span className="bg-[#EADBCE] text-[#16120D] text-[9px] font-extrabold px-2 py-0.5 border border-[#16120D] uppercase">
                          ⭐ {topPatrons[0].tag1}
                        </span>
                        <span className="bg-[#EADBCE] text-[#16120D] text-[9px] font-extrabold px-2 py-0.5 border border-[#16120D] uppercase flex items-center gap-1">
                          <Coffee size={10} /> {topPatrons[0].tag2}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#EADBCE] border border-[#16120D] p-2 text-[10px] font-mono font-bold text-[#3A332B] flex justify-between items-center">
                    <span>₹ **** AMOUNT PRIVATE</span>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-extrabold text-[#3A332B] uppercase tracking-wider pt-1">
                    <span>{topPatrons[0].patronNo}</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-black"><CheckCircle size={11} /> VERIFIED</span>
                    <span>{topPatrons[0].since}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ranks 02 to 05 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topPatrons.slice(1).map((p) => (
                <div key={p.rank} className="bg-[#F6F0E4] border-2 border-[#16120D] shadow-[4px_4px_0px_0px_#16120D] p-4 flex flex-col justify-between space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#16120D] text-[#F5EFE6] p-2 border border-[#16120D] text-center font-extrabold flex-shrink-0">
                      <Star size={12} className="mx-auto mb-0.5 text-[#D9A02B]" />
                      <div className="font-serif text-lg font-black leading-none">{p.rank}</div>
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-[#EADBCE] border border-[#16120D] flex items-center justify-center font-bold text-xs">
                        {p.avatar}
                      </div>
                      <h4 className="font-serif font-bold text-sm uppercase text-[#16120D] truncate">
                        {p.name}
                      </h4>
                      <span className="bg-[#EADBCE] text-[#16120D] text-[8px] font-extrabold px-1.5 py-0.5 border border-[#16120D] uppercase inline-block">
                        {p.tag1}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#EADBCE] border border-[#16120D] p-1.5 text-[9px] font-mono font-bold text-[#3A332B] text-center">
                    ₹ **** AMOUNT PRIVATE
                  </div>

                  <div className="flex justify-between items-center text-[8px] font-bold text-[#3A332B] uppercase">
                    <span>{p.patronNo}</span>
                    <span className="flex items-center gap-0.5 text-emerald-700 font-extrabold"><CheckCircle size={9} /> VERIFIED</span>
                    <span>{p.since}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: ALL VERIFIED PATRONS (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F6F0E4] border-2 border-[#16120D] shadow-[6px_6px_0px_0px_#16120D] overflow-hidden">
            {/* Window Header */}
            <div className="bg-[#EADBCE] border-b-2 border-[#16120D] px-4 py-2.5 flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#16120D]">
                ALL VERIFIED PATRONS
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-[#16120D]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-[#16120D]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#16120D]" />
              </div>
            </div>

            {/* List */}
            <div className="p-4 space-y-3">
              {verifiedPatrons.map((vp, idx) => (
                <div key={idx} className="bg-[#EADBCE] border border-[#16120D] p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-[#F6F0E4] border border-[#16120D] flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {vp.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="font-serif font-bold text-xs uppercase text-[#16120D] truncate">
                        {vp.name}
                      </h5>
                      <span className="text-[8px] font-extrabold text-[#3A332B] uppercase block">{vp.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className="bg-[#F6F0E4] text-[#16120D] text-[8px] font-mono px-2 py-0.5 border border-[#16120D]">
                      ₹ ****
                    </span>
                    <div className="flex items-center gap-1 text-[8px] font-extrabold text-[#3A332B]">
                      <span>☕ CHAI</span>
                      <CheckCircle size={9} className="text-emerald-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer link */}
            <div className="p-3 bg-[#EADBCE] border-t border-[#16120D] text-center">
              <Link
                to="/support-dev"
                className="text-[10px] font-extrabold text-[#16120D] uppercase hover:text-[#D9572B] transition-colors inline-flex items-center gap-1"
              >
                <span>VIEW ALL SUPPORTERS →</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
