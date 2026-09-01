import React, { useState } from 'react';
import { Crown, Star, CheckCircle2, Coffee, ShieldCheck, Zap, Sparkles, ArrowUpRight, Flame, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TopPatronsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'founding' | 'recent'>('all');

  const topPatrons = [
    {
      rank: '01',
      name: 'Abhijeet D. & Swarm Army',
      avatar: 'A',
      badge: 'SUPREME PATRON',
      tier1: 'FOUNDING PATRON',
      tier2: 'SERVER HOSTING',
      since: 'AUG 2026',
      patronId: 'CJP-PATRON-001',
      highlight: true
    },
    {
      rank: '02',
      name: 'Ananya S. Legal Guild',
      avatar: 'A',
      badge: 'DIAMOND PATRON',
      tier1: 'LEGAL DEFENSE AID',
      tier2: 'CHAI & COFFEE',
      since: 'AUG 2026',
      patronId: 'CJP-PATRON-002',
      highlight: false
    },
    {
      rank: '03',
      name: 'Saurav D. Ward Observer',
      avatar: 'S',
      badge: 'GOLD PATRON',
      tier1: 'DESILTING AUDIT',
      tier2: 'COLD COFFEE',
      since: 'JUL 2026',
      patronId: 'CJP-PATRON-003',
      highlight: false
    },
    {
      rank: '04',
      name: 'Ashutosh R. Youth Cell',
      avatar: 'A',
      badge: 'GOLD PATRON',
      tier1: 'SCHOOL REFORM',
      tier2: 'THALI SPONSOR',
      since: 'JUL 2026',
      patronId: 'CJP-PATRON-004',
      highlight: false
    },
    {
      rank: '05',
      name: 'Nikhil Aglave & Devs',
      avatar: 'N',
      badge: 'SILVER PATRON',
      tier1: 'DEV INFRASTRUCTURE',
      tier2: 'CHAI',
      since: 'JUL 2026',
      patronId: 'CJP-PATRON-005',
      highlight: false
    }
  ];

  const recentSupporters = [
    { name: 'NLSIU Legal Desk', time: '2 HOURS AGO', type: 'COLD COFFEE ☕', verified: true, avatar: 'N' },
    { name: 'Vandana Nadig Nair', time: '5 HOURS AGO', type: 'DEVELOPER THALI 🍱', verified: true, avatar: 'V' },
    { name: 'Yunus Ahmed', time: '12 HOURS AGO', type: 'SERVER BANDWIDTH 💻', verified: true, avatar: 'Y' },
    { name: 'Ritu M. Pune Observer', time: '1 DAY AGO', type: 'CUTTING CHAI ☕', verified: true, avatar: 'R' },
    { name: 'Alpesh K. Ward Lead', time: '2 DAYS AGO', type: 'COLD COFFEE ☕', verified: true, avatar: 'A' },
    { name: 'Maurice Benny', time: '3 DAYS AGO', type: 'FULL DINNER 🍽️', verified: true, avatar: 'M' }
  ];

  return (
    <section className="top-patrons-section py-20 bg-[#16120D] text-[#F5EFE6] relative overflow-hidden font-sans selection:bg-[#D9572B] selection:text-white">
      
      {/* Background Stylized Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D9572B] text-white text-[10px] font-black px-3.5 py-1 uppercase tracking-widest mb-3 border border-white/20">
              <Sparkles size={12} />
              <span>CIVIC PATRONS &amp; DEV SUPPORTERS</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#F5EFE6] leading-none uppercase tracking-tight">
              THE SWARM&apos;S <span className="italic font-normal text-[#D9A02B]">PATRON LEADERBOARD</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#EADBCE]/80 font-medium max-w-xl mt-2 leading-relaxed">
              Verified community champions keeping server infrastructure live, legal aid free, and the dev in chai. Amounts remain private — appreciation is forever.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/support-dev"
              className="bg-[#D9572B] text-white font-extrabold text-xs uppercase px-6 py-3.5 border-2 border-white hover:bg-white hover:text-[#16120D] transition-all flex items-center gap-2 shadow-xl tracking-wider"
            >
              <Coffee size={15} />
              <span>BUY A CHAI ☕</span>
            </Link>

            <Link
              to="/donate-to-abdul"
              className="bg-[#231F1A] text-[#EADBCE] font-extrabold text-xs uppercase px-5 py-3.5 border border-white/20 hover:border-[#D9572B] hover:text-white transition-all flex items-center gap-1.5"
            >
              <Heart size={14} className="text-[#D9572B]" />
              <span>DONATE TO ABDUL</span>
            </Link>
          </div>
        </div>

        {/* Live Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#231F1A] border-2 border-white/10 p-4 relative overflow-hidden">
            <div className="text-[9px] font-extrabold text-[#D9572B] uppercase tracking-widest mb-1 flex items-center gap-1">
              <Zap size={11} /> TOTAL BANDWIDTH SPONSORED
            </div>
            <div className="font-serif font-black text-2xl md:text-3xl text-white">100% ONLINE</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">SERVERS &amp; DOMAIN LIVE</div>
          </div>

          <div className="bg-[#231F1A] border-2 border-white/10 p-4 relative overflow-hidden">
            <div className="text-[9px] font-extrabold text-[#D9A02B] uppercase tracking-widest mb-1 flex items-center gap-1">
              <Crown size={11} /> FEATURED PATRONS
            </div>
            <div className="font-serif font-black text-2xl md:text-3xl text-[#D9A02B]">50+ VERIFIED</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">FOUNDING &amp; GOLD TIERS</div>
          </div>

          <div className="bg-[#231F1A] border-2 border-white/10 p-4 relative overflow-hidden">
            <div className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest mb-1 flex items-center gap-1">
              <CheckCircle2 size={11} /> AMOUNT PRIVACY
            </div>
            <div className="font-serif font-black text-2xl md:text-3xl text-emerald-400">100% PRIVATE</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">EXPLICIT PRIVACY GUARANTEE</div>
          </div>

          <div className="bg-[#231F1A] border-2 border-white/10 p-4 relative overflow-hidden">
            <div className="text-[9px] font-extrabold text-[#D9572B] uppercase tracking-widest mb-1 flex items-center gap-1">
              <Flame size={11} /> COMMUNITY CHAI COUNTER
            </div>
            <div className="font-[#F5EFE6] font-serif font-black text-2xl md:text-3xl text-white">840+ CUPS</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">DEV CHAI &amp; MEALS SPONSORED</div>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: TOP 5 PATRONS CARDS (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Filter Tabs */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#D9572B] flex items-center gap-1.5">
                <Crown size={15} /> TOP 5 PATRON HALL OF FAME
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`text-[9px] font-extrabold px-3 py-1 uppercase border transition-all ${
                    activeTab === 'all' ? 'bg-[#D9572B] text-white border-[#D9572B]' : 'bg-[#231F1A] text-[#EADBCE] border-white/20'
                  }`}
                >
                  ALL TIERS
                </button>
                <button
                  onClick={() => setActiveTab('founding')}
                  className={`text-[9px] font-extrabold px-3 py-1 uppercase border transition-all ${
                    activeTab === 'founding' ? 'bg-[#D9572B] text-white border-[#D9572B]' : 'bg-[#231F1A] text-[#EADBCE] border-white/20'
                  }`}
                >
                  FOUNDING
                </button>
              </div>
            </div>

            {/* Champion #01 Card */}
            <div className="bg-gradient-to-r from-[#231F1A] to-[#2E2822] border-2 border-[#D9A02B] p-6 shadow-[0px_0px_25px_rgba(217,160,43,0.2)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#D9A02B] text-[#16120D] text-[9px] font-black px-4 py-1 uppercase tracking-widest font-mono">
                ⚡ TOP PATRON #001
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#16120D] border-4 border-[#D9A02B] flex items-center justify-center font-serif text-2xl font-black text-[#D9A02B] shadow-xl flex-shrink-0">
                  {topPatrons[0].avatar}
                </div>

                <div className="space-y-2 flex-grow">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif font-black text-2xl uppercase text-white tracking-wide">
                      {topPatrons[0].name}
                    </h3>
                    <span className="bg-[#D9A02B] text-[#16120D] text-[8px] font-black px-2 py-0.5 uppercase tracking-widest">
                      {topPatrons[0].badge}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[9px] font-extrabold uppercase">
                    <span className="bg-[#16120D] text-[#EADBCE] px-2.5 py-1 border border-white/10 flex items-center gap-1">
                      <Star size={10} className="text-[#D9A02B]" /> {topPatrons[0].tier1}
                    </span>
                    <span className="bg-[#16120D] text-[#EADBCE] px-2.5 py-1 border border-white/10 flex items-center gap-1">
                      <Coffee size={10} className="text-[#D9572B]" /> {topPatrons[0].tier2}
                    </span>
                  </div>

                  <div className="bg-[#16120D] border border-white/10 p-2.5 flex justify-between items-center text-[10px] font-mono">
                    <span className="text-[#EADBCE]">AMOUNT: <strong className="text-white">₹ **** PRIVATE</strong></span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={12} /> VERIFIED PATRON</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ranks 02 to 05 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topPatrons.slice(1).map((p) => (
                <div key={p.rank} className="bg-[#231F1A] border-2 border-white/15 p-4 space-y-3 hover:border-[#D9572B] transition-all group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#16120D] border-2 border-white/20 flex items-center justify-center font-serif text-lg font-bold text-white group-hover:border-[#D9572B] transition-colors">
                        {p.avatar}
                      </div>
                      <div>
                        <h4 className="font-serif font-extrabold text-sm uppercase text-white truncate max-w-[140px]">
                          {p.name}
                        </h4>
                        <span className="text-[8px] font-black text-[#D9A02B] uppercase tracking-wider block">
                          {p.badge}
                        </span>
                      </div>
                    </div>
                    <span className="font-serif font-black text-lg text-white/40 group-hover:text-[#D9572B] transition-colors">
                      #{p.rank}
                    </span>
                  </div>

                  <div className="bg-[#16120D] border border-white/10 p-2 text-[9px] font-mono flex justify-between items-center">
                    <span className="text-[#EADBCE]/80">₹ **** PRIVATE</span>
                    <span className="text-emerald-400 font-bold text-[8px] flex items-center gap-0.5"><CheckCircle2 size={9} /> VERIFIED</span>
                  </div>

                  <div className="text-[8px] font-extrabold text-[#EADBCE]/60 uppercase tracking-widest flex justify-between">
                    <span>{p.tier1}</span>
                    <span>{p.since}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: RECENT VERIFIED SUPPORTERS (5 Cols) */}
          <div className="lg:col-span-5 bg-[#231F1A] border-2 border-white/15 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5EFE6] flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-400" /> RECENT VERIFIED CHAI SUPPORTERS
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-3">
              {recentSupporters.map((s, idx) => (
                <div key={idx} className="bg-[#16120D] border border-white/10 p-3.5 flex items-center justify-between gap-3 hover:border-white/30 transition-all">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-[#231F1A] border border-white/20 flex items-center justify-center font-bold text-xs text-[#F5EFE6] flex-shrink-0">
                      {s.avatar}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="font-serif font-bold text-xs uppercase text-white truncate">
                        {s.name}
                      </h5>
                      <span className="text-[8px] font-mono text-[#EADBCE]/60 block">{s.time}</span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="bg-[#231F1A] text-[#D9572B] text-[8px] font-extrabold px-2 py-0.5 border border-[#D9572B]/30 uppercase block mb-0.5">
                      {s.type}
                    </span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold flex items-center justify-end gap-0.5">
                      <CheckCircle2 size={8} /> VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Redirect Link */}
            <div className="pt-2">
              <Link
                to="/support-dev"
                className="w-full bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase py-3 border border-white/20 hover:bg-[#D9572B] hover:border-[#D9572B] hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>SUPPORT DEV &amp; BECOME A PATRON</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
