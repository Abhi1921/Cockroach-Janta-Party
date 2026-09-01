import React, { useState } from 'react';
import { Crown, Star, CheckCircle2, Coffee, ShieldCheck, Zap, Sparkles, ArrowUpRight, Flame, Heart, Search, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Patron {
  rank: string;
  name: string;
  avatar: string;
  location: string;
  badge: 'SUPREME PATRON' | 'DIAMOND PATRON' | 'GOLD PATRON' | 'SILVER PATRON';
  tier1: string;
  tier2: string;
  since: string;
  patronId: string;
  isFounding: boolean;
  highlight?: boolean;
}

interface RecentSupporter {
  name: string;
  location: string;
  time: string;
  type: string;
  verified: boolean;
  avatar: string;
}

export const TopPatronsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'founding' | 'recent'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const topPatrons: Patron[] = [
    {
      rank: '01',
      name: 'Vikramaditya Sharma & Swarm',
      avatar: 'V',
      location: 'Bengaluru, KA',
      badge: 'SUPREME PATRON',
      tier1: 'FOUNDING PATRON',
      tier2: 'SERVER HOSTING',
      since: 'AUG 2026',
      patronId: 'CJP-PATRON-001',
      isFounding: true,
      highlight: true
    },
    {
      rank: '02',
      name: 'Rajeshwari Deshmukh',
      avatar: 'R',
      location: 'Mumbai, MH',
      badge: 'DIAMOND PATRON',
      tier1: 'LEGAL AID CHAMPION',
      tier2: 'COLD COFFEE',
      since: 'AUG 2026',
      patronId: 'CJP-PATRON-002',
      isFounding: true,
      highlight: false
    },
    {
      rank: '03',
      name: 'Aarav Kulkarni & Team',
      avatar: 'A',
      location: 'Pune, MH',
      badge: 'GOLD PATRON',
      tier1: 'CIVIC AUDIT ADVOCATE',
      tier2: 'DEVELOPER THALI',
      since: 'JUL 2026',
      patronId: 'CJP-PATRON-003',
      isFounding: true,
      highlight: false
    },
    {
      rank: '04',
      name: 'Meera Nair',
      avatar: 'M',
      location: 'Kochi, KL',
      badge: 'GOLD PATRON',
      tier1: 'SCHOOL REFORM SPONSOR',
      tier2: 'FULL DINNER',
      since: 'JUL 2026',
      patronId: 'CJP-PATRON-004',
      isFounding: false,
      highlight: false
    },
    {
      rank: '05',
      name: 'Siddharth Hegde',
      avatar: 'S',
      location: 'Hyderabad, TS',
      badge: 'SILVER PATRON',
      tier1: 'DEV INFRASTRUCTURE',
      tier2: 'CUTTING CHAI',
      since: 'JUL 2026',
      patronId: 'CJP-PATRON-005',
      isFounding: false,
      highlight: false
    },
    {
      rank: '06',
      name: 'Kavita Krishnan',
      avatar: 'K',
      location: 'New Delhi, DL',
      badge: 'SILVER PATRON',
      tier1: 'RIGHT TO INFORMATION',
      tier2: 'COLD COFFEE',
      since: 'JUN 2026',
      patronId: 'CJP-PATRON-006',
      isFounding: true,
      highlight: false
    }
  ];

  const recentSupporters: RecentSupporter[] = [
    { name: 'Deepa Joshi', location: 'Bengaluru', time: '25 MINS AGO', type: 'COLD COFFEE ☕', verified: true, avatar: 'D' },
    { name: 'Amit Banerjee', location: 'Kolkata', time: '2 HOURS AGO', type: 'DEVELOPER THALI 🍱', verified: true, avatar: 'A' },
    { name: 'Gurpreet Singh', location: 'Chandigarh', time: '5 HOURS AGO', type: 'SERVER BANDWIDTH 💻', verified: true, avatar: 'G' },
    { name: 'Sneha Patel', location: 'Ahmedabad', time: '8 HOURS AGO', type: 'CUTTING CHAI ☕', verified: true, avatar: 'S' },
    { name: 'Rohan Sen', location: 'New Delhi', time: '12 HOURS AGO', type: 'COLD COFFEE ☕', verified: true, avatar: 'R' },
    { name: 'Tariq Mansoor', location: 'Lucknow', time: '1 DAY AGO', type: 'FULL DINNER 🍽️', verified: true, avatar: 'T' },
    { name: 'Pooja Verma', location: 'Jaipur', time: '1 DAY AGO', type: 'CUTTING CHAI ☕', verified: true, avatar: 'P' },
    { name: 'Alok Tripathi', location: 'Varanasi', time: '2 DAYS AGO', type: 'DEVELOPER THALI 🍱', verified: true, avatar: 'A' }
  ];

  const filteredTopPatrons = topPatrons.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'founding') return matchesSearch && p.isFounding;
    return matchesSearch;
  });

  const filteredRecentSupporters = recentSupporters.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="top-patrons-section py-20 bg-[#120F0C] text-[#F5EFE6] relative overflow-hidden font-sans selection:bg-[#D9572B] selection:text-white border-t-4 border-[#D9572B]">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(#D9572B_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D9572B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D9A02B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 border-b-2 border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#D9572B] text-white text-[11px] font-black px-3.5 py-1 uppercase tracking-widest border border-white/20 shadow-md">
              <Sparkles size={13} className="animate-spin" />
              <span>LIVE CIVIC PATRON &amp; DEV REGISTRY</span>
            </div>
            <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#F5EFE6] leading-none uppercase tracking-tight">
              THE SWARM&apos;S <span className="text-[#D9A02B] italic underline decoration-[#D9572B] underline-offset-8">PATRON LEADERBOARD</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#EADBCE]/85 font-medium leading-relaxed">
              Honoring verified Indian community leaders keeping server infrastructure online, civic defense active, and open-source code running. Contribution amounts remain strictly confidential.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <Link
              to="/support-dev"
              className="flex-1 lg:flex-none bg-[#D9572B] text-white font-black text-xs uppercase px-6 py-4 border-2 border-white hover:bg-white hover:text-[#120F0C] transition-all flex items-center justify-center gap-2 shadow-2xl tracking-wider hover:scale-[1.02] active:scale-[0.98]"
            >
              <Coffee size={16} />
              <span>BUY A CHAI ☕</span>
            </Link>

            <Link
              to="/donate-to-abdul"
              className="flex-1 lg:flex-none bg-[#231F1A] text-[#EADBCE] font-black text-xs uppercase px-6 py-4 border-2 border-white/20 hover:border-[#D9572B] hover:text-white transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Heart size={15} className="text-[#D9572B]" />
              <span>DONATE TO ABDUL</span>
            </Link>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#1C1814] border-2 border-white/10 p-4 rounded-none relative overflow-hidden group hover:border-[#D9572B] transition-colors">
            <div className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Zap size={13} /> BANDWIDTH STATUS
            </div>
            <div className="font-serif font-black text-2xl sm:text-3xl text-white">100% ONLINE</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">SERVERS &amp; APIS LIVE</div>
          </div>

          <div className="bg-[#1C1814] border-2 border-white/10 p-4 rounded-none relative overflow-hidden group hover:border-[#D9A02B] transition-colors">
            <div className="text-[10px] font-black text-[#D9A02B] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Crown size={13} /> VERIFIED PATRONS
            </div>
            <div className="font-serif font-black text-2xl sm:text-3xl text-[#D9A02B]">50+ CHAMPIONS</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">FOUNDING &amp; GOLD TIERS</div>
          </div>

          <div className="bg-[#1C1814] border-2 border-white/10 p-4 rounded-none relative overflow-hidden group hover:border-emerald-400 transition-colors">
            <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 size={13} /> AMOUNT PRIVACY
            </div>
            <div className="font-serif font-black text-2xl sm:text-3xl text-emerald-400">100% PRIVATE</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">CONFIDENTIAL ESCROW</div>
          </div>

          <div className="bg-[#1C1814] border-2 border-white/10 p-4 rounded-none relative overflow-hidden group hover:border-[#D9572B] transition-colors">
            <div className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Flame size={13} /> CHAI COUNTER
            </div>
            <div className="font-serif font-black text-2xl sm:text-3xl text-white">840+ CUPS</div>
            <div className="text-[9px] text-[#EADBCE]/60 uppercase font-mono mt-1">MEALS &amp; CHAI SPONSORED</div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#1C1814] border-2 border-white/15 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 md:flex-none text-[10px] font-black px-4 py-2 uppercase border-2 transition-all ${
                activeTab === 'all'
                  ? 'bg-[#D9572B] text-white border-white'
                  : 'bg-[#28221B] text-[#EADBCE] border-white/10 hover:border-white/40'
              }`}
            >
              ALL CHAMPIONS
            </button>
            <button
              onClick={() => setActiveTab('founding')}
              className={`flex-1 md:flex-none text-[10px] font-black px-4 py-2 uppercase border-2 transition-all ${
                activeTab === 'founding'
                  ? 'bg-[#D9572B] text-white border-white'
                  : 'bg-[#28221B] text-[#EADBCE] border-white/10 hover:border-white/40'
              }`}
            >
              FOUNDING PATRONS
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex-1 md:flex-none text-[10px] font-black px-4 py-2 uppercase border-2 transition-all ${
                activeTab === 'recent'
                  ? 'bg-[#D9572B] text-white border-white'
                  : 'bg-[#28221B] text-[#EADBCE] border-white/10 hover:border-white/40'
              }`}
            >
              RECENT SUPPORTERS
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="Search Indian patron or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#28221B] border-2 border-white/15 text-xs text-white placeholder-white/40 pl-9 pr-3 py-2 focus:outline-none focus:border-[#D9572B] transition-colors uppercase font-mono"
            />
          </div>

        </div>

        {/* Leaderboard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Top Patrons Hall of Fame */}
          {(activeTab === 'all' || activeTab === 'founding') && (
            <div className={`${activeTab === 'all' || activeTab === 'founding' ? (activeTab === 'founding' ? 'lg:col-span-12' : 'lg:col-span-7') : 'hidden'} space-y-5`}>
              
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#D9572B] flex items-center gap-2">
                  <Award size={16} /> TOP PATRON HALL OF FAME
                </span>
                <span className="text-[10px] font-mono text-[#EADBCE]/60">SHOWING {filteredTopPatrons.length} PATRONS</span>
              </div>

              {filteredTopPatrons.length === 0 ? (
                <div className="bg-[#1C1814] p-8 text-center text-xs text-white/60 font-mono">
                  NO MATCHING PATRONS FOUND FOR &quot;{searchQuery}&quot;
                </div>
              ) : (
                <>
                  {/* Top #01 Champion Hero Card */}
                  {filteredTopPatrons[0] && (
                    <div className="bg-gradient-to-r from-[#241F18] via-[#2D261E] to-[#1C1814] border-2 border-[#D9A02B] p-6 shadow-[0px_0px_30px_rgba(217,160,43,0.25)] relative overflow-hidden group transition-transform hover:-translate-y-0.5">
                      <div className="absolute top-0 right-0 bg-[#D9A02B] text-[#120F0C] text-[9px] font-black px-4 py-1 uppercase tracking-widest font-mono flex items-center gap-1 shadow-md">
                        <Crown size={11} /> TOP PATRON #001
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                        <div className="w-16 h-16 rounded-full bg-[#120F0C] border-4 border-[#D9A02B] flex items-center justify-center font-serif text-2xl font-black text-[#D9A02B] shadow-2xl flex-shrink-0">
                          {filteredTopPatrons[0].avatar}
                        </div>

                        <div className="space-y-2.5 flex-grow">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-serif font-black text-2xl uppercase text-white tracking-wide">
                              {filteredTopPatrons[0].name}
                            </h3>
                            <span className="bg-[#D9A02B] text-[#120F0C] text-[9px] font-black px-2.5 py-0.5 uppercase tracking-widest">
                              {filteredTopPatrons[0].badge}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-[10px] text-[#EADBCE]/70 font-mono">
                            <MapPin size={12} className="text-[#D9572B]" />
                            <span>{filteredTopPatrons[0].location}</span>
                            <span>•</span>
                            <span>MEMBER SINCE {filteredTopPatrons[0].since}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase">
                            <span className="bg-[#120F0C] text-[#EADBCE] px-3 py-1 border border-white/15 flex items-center gap-1">
                              <Star size={11} className="text-[#D9A02B]" /> {filteredTopPatrons[0].tier1}
                            </span>
                            <span className="bg-[#120F0C] text-[#EADBCE] px-3 py-1 border border-white/15 flex items-center gap-1">
                              <Coffee size={11} className="text-[#D9572B]" /> {filteredTopPatrons[0].tier2}
                            </span>
                          </div>

                          <div className="bg-[#120F0C] border border-white/10 p-2.5 flex justify-between items-center text-[10px] font-mono mt-1">
                            <span className="text-[#EADBCE]">AMOUNT: <strong className="text-white">₹ **** PRIVATE</strong></span>
                            <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={12} /> VERIFIED PATRON</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Ranks 02+ Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredTopPatrons.slice(1).map((p) => (
                      <div key={p.rank} className="bg-[#1C1814] border-2 border-white/15 p-4 space-y-3 hover:border-[#D9572B] transition-all group relative">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-[#120F0C] border-2 border-white/20 flex items-center justify-center font-serif text-lg font-bold text-white group-hover:border-[#D9572B] transition-colors flex-shrink-0">
                              {p.avatar}
                            </div>
                            <div className="overflow-hidden">
                              <h4 className="font-serif font-black text-sm uppercase text-white truncate max-w-[150px]">
                                {p.name}
                              </h4>
                              <div className="flex items-center gap-1 text-[8px] text-[#EADBCE]/70 font-mono">
                                <MapPin size={9} className="text-[#D9572B]" />
                                <span className="truncate">{p.location}</span>
                              </div>
                            </div>
                          </div>
                          <span className="font-serif font-black text-lg text-white/40 group-hover:text-[#D9572B] transition-colors">
                            #{p.rank}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <span className="bg-[#D9A02B]/20 text-[#D9A02B] text-[8px] font-black px-2 py-0.5 uppercase border border-[#D9A02B]/30">
                            {p.badge}
                          </span>
                        </div>

                        <div className="bg-[#120F0C] border border-white/10 p-2 text-[9px] font-mono flex justify-between items-center">
                          <span className="text-[#EADBCE]/80">₹ **** PRIVATE</span>
                          <span className="text-emerald-400 font-bold text-[8px] flex items-center gap-0.5"><CheckCircle2 size={9} /> VERIFIED</span>
                        </div>

                        <div className="text-[8px] font-black text-[#EADBCE]/60 uppercase tracking-wider flex justify-between">
                          <span>{p.tier1}</span>
                          <span>{p.since}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          )}

          {/* Right Column: Recent Verified Supporters Stream */}
          {(activeTab === 'all' || activeTab === 'recent') && (
            <div className={`${activeTab === 'recent' ? 'lg:col-span-12' : 'lg:col-span-5'} bg-[#1C1814] border-2 border-white/15 p-6 space-y-5`}>
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-black uppercase tracking-widest text-[#F5EFE6] flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400" /> RECENT VERIFIED SUPPORTERS
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {filteredRecentSupporters.length === 0 ? (
                <div className="p-6 text-center text-xs text-white/60 font-mono">
                  NO RECENT SUPPORTERS MATCH &quot;{searchQuery}&quot;
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredRecentSupporters.map((s, idx) => (
                    <div key={idx} className="bg-[#120F0C] border border-white/10 p-3.5 flex items-center justify-between gap-3 hover:border-white/30 transition-all group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-9 h-9 rounded-full bg-[#241F18] border border-white/20 flex items-center justify-center font-bold text-xs text-[#F5EFE6] flex-shrink-0 group-hover:border-[#D9572B] transition-colors">
                          {s.avatar}
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="font-serif font-black text-xs uppercase text-white truncate">
                            {s.name}
                          </h5>
                          <div className="flex items-center gap-1 text-[9px] font-mono text-[#EADBCE]/60">
                            <MapPin size={9} className="text-[#D9572B]" />
                            <span>{s.location}</span>
                            <span>•</span>
                            <span>{s.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <span className="bg-[#241F18] text-[#D9572B] text-[8px] font-black px-2.5 py-0.5 border border-[#D9572B]/30 uppercase block mb-1">
                          {s.type}
                        </span>
                        <span className="text-[8px] font-mono text-emerald-400 font-bold flex items-center justify-end gap-0.5">
                          <CheckCircle2 size={9} /> VERIFIED
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Action Link */}
              <div className="pt-2">
                <Link
                  to="/support-dev"
                  className="w-full bg-[#120F0C] text-[#F5EFE6] text-xs font-black uppercase py-3.5 border-2 border-white/20 hover:bg-[#D9572B] hover:border-[#D9572B] hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg tracking-wider"
                >
                  <span>SUPPORT DEV &amp; BECOME A PATRON</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
