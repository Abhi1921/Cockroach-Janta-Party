import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { membersData } from '../data/membersData';
import { 
  Users, 
  MapPin, 
  Search, 
  Sparkles, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

export const MembersPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [searchFilter, setSearchFilter] = useState('');
  const [activeBadge, setActiveBadge] = useState<string>('ALL');

  // Leaders vs General Members
  const leaders = useMemo(() => {
    return membersData.filter((m) => m.isLeader);
  }, []);

  // Filter Categories
  const badgeCategories = [
    { id: 'ALL', labelEn: 'ALL MEMBERS', labelHi: 'सभी सदस्य' },
    { id: 'Founding Swarm', labelEn: 'FOUNDING SWARM', labelHi: 'संस्थापक स्वार्म' },
    { id: 'RTI Advocate', labelEn: 'RTI ADVOCATES', labelHi: 'आरटीआई अधिवक्ता' },
    { id: 'Road Inspector', labelEn: 'ROAD INSPECTORS', labelHi: 'सड़क निरीक्षक' },
    { id: 'Poster Artist', labelEn: 'POSTER ARTISTS', labelHi: 'पोस्टर कलाकार' },
    { id: 'Active Swarm', labelEn: 'ACTIVE SWARM', labelHi: 'सक्रिय स्वार्म' },
  ];

  // Filtered Members
  const filteredMembers = useMemo(() => {
    return membersData.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        m.city.toLowerCase().includes(searchFilter.toLowerCase()) ||
        m.role.toLowerCase().includes(searchFilter.toLowerCase()) ||
        m.badge.toLowerCase().includes(searchFilter.toLowerCase());

      const matchesBadge =
        activeBadge === 'ALL' || m.badge.toUpperCase() === activeBadge.toUpperCase();

      return matchesSearch && matchesBadge;
    });
  }, [searchFilter, activeBadge]);

  // Top Hotspot Cities Data
  const hotspotCities = [
    { rank: '#01', state: 'Delhi', city: 'Delhi', count: 1550 },
    { rank: '#02', state: 'West Bengal', city: 'Kolkata', count: 1200 },
    { rank: '#03', state: 'Maharashtra', city: 'Mumbai', count: 1129 },
    { rank: '#04', state: 'Karnataka', city: 'Bengaluru', count: 788 },
    { rank: '#05', state: 'Maharashtra', city: 'Pune', count: 738 },
    { rank: '#06', state: 'Telangana', city: 'Hyderabad', count: 702 },
    { rank: '#07', state: 'Tamil Nadu', city: 'Chennai', count: 506 },
    { rank: '#08', state: 'Uttar Pradesh', city: 'Lucknow', count: 378 },
  ];

  return (
    <div className="members-page bg-[#EADBCE] text-[#16120D] font-sans min-h-screen selection:bg-[#D9572B] selection:text-white pb-24">
      <SEOHead
        title={lang === 'hi' ? 'स्वार्म सदस्य डायरेक्टरी | कॉकरोच जनता पार्टी' : 'The Swarm Members Directory | Cockroach Janta Party (43,247 Strong)'}
        description="Explore the official leadership directory and active volunteer swarm of Cockroach Janta Party across municipal wards. All member profile pictures aligned with role badges."
        canonicalUrl="https://cockroachjantapartywale.com/members"
      />

      {/* ==========================================
          1. HERO SECTION
      ========================================== */}
      <section className="relative bg-[#16120D] text-[#F5EFE6] pt-24 pb-20 overflow-hidden border-b-4 border-[#D9572B]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-[#D9572B] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                <Sparkles size={14} className="animate-pulse" />
                <span>{lang === 'hi' ? 'सदस्य डायरेक्टरी' : 'THE SWARM · 43,247 STRONG'}</span>
              </div>

              <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase text-white">
                {lang === 'hi' ? (
                  <>
                    हमारे स्वार्म <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      सदस्य
                    </span>{' '}
                    और नेतृत्व।
                  </>
                ) : (
                  <>
                    OUR SWARM <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      MEMBERS
                    </span>{' '}
                    &amp; LEADERSHIP.
                  </>
                )}
              </h1>

              <p className="text-[#EADBCE]/90 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
                {lang === 'hi'
                  ? "सीजेपी सदस्यता पूरी तरह से निःशुल्क, आजीवन और नागरिक अधिकार-केंद्रित है। नीचे हर वार्ड से हमारे क्रियाशील सदस्य और कोर लीडरशिप डायरेक्टरी प्रदर्शित है।"
                  : "Membership is free, lifelong, and revocable only by the member. Below: verified active swarm members, RTI auditors, and ward captains aligned across 36 states."}
              </p>

              {/* Live Stats Bar */}
              <div className="pt-2 grid grid-cols-4 gap-3 border-t border-[#F5EFE6]/15 max-w-xl text-center">
                <div className="bg-[#231F1A] p-3 rounded border border-white/10">
                  <div className="font-serif font-black text-2xl text-[#D9572B]">25</div>
                  <div className="text-[9px] font-bold uppercase text-[#EADBCE]/70">{lang === 'hi' ? 'आज के आवेदक' : 'TODAY'}</div>
                </div>
                <div className="bg-[#231F1A] p-3 rounded border border-white/10">
                  <div className="font-serif font-black text-2xl text-[#E6A100]">2,658</div>
                  <div className="text-[9px] font-bold uppercase text-[#EADBCE]/70">{lang === 'hi' ? 'इस सप्ताह' : 'THIS WEEK'}</div>
                </div>
                <div className="bg-[#231F1A] p-3 rounded border border-white/10">
                  <div className="font-serif font-black text-2xl text-[#27AE60]">27.7K</div>
                  <div className="text-[9px] font-bold uppercase text-[#EADBCE]/70">{lang === 'hi' ? 'मानचित्र पर' : 'MAPPED'}</div>
                </div>
                <div className="bg-[#231F1A] p-3 rounded border border-white/10">
                  <div className="font-serif font-black text-2xl text-[#2980B9]">43.2K</div>
                  <div className="text-[9px] font-bold uppercase text-[#EADBCE]/70">{lang === 'hi' ? 'कुल सदस्य' : 'TOTAL'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/join"
                  id="hero-join-members-btn"
                  className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white px-8 py-4 font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 group border-2 border-[#D9572B]"
                >
                  <span>{lang === 'hi' ? 'स्वार्म सदस्य बनें' : 'BECOME A MEMBER'}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#members-directory"
                  id="hero-view-directory-btn"
                  className="bg-transparent hover:bg-[#F5EFE6]/10 text-[#F5EFE6] border-2 border-[#F5EFE6]/40 hover:border-white px-7 py-4 font-black uppercase text-xs tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <Users size={15} className="text-[#E6A100]" />
                  <span>{lang === 'hi' ? 'डायरेक्टरी देखें' : 'EXPLORE DIRECTORY'}</span>
                </a>
              </div>
            </div>

            {/* Right Team Showcase Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-[#231F1A] border-4 border-[#F5EFE6]/20 p-3 rounded-xl shadow-2xl overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <img
                      src="/cjp_mo_team_photo.jpg"
                      alt="CJP Swarm Assembly Official Team Photo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-black uppercase tracking-widest bg-[#16120D]/90 p-2 rounded backdrop-blur">
                      🪳 CJP SWARM CORE AUDIT ASSEMBLY
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          2. CORE SWARM LEADERSHIP SPOTLIGHT
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#16120D]/20 gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-[#D9572B] uppercase">
              {lang === 'hi' ? 'संस्थापक एवं कोर लीडरशिप' : 'FOUNDING SWARM LEADERSHIP'}
            </span>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-[#16120D] uppercase mt-1">
              {lang === 'hi' ? 'सीजेपी कोर टीम' : 'CJP LEADERSHIP DIRECTORY'}
            </h2>
          </div>

          <div className="text-xs font-bold text-[#3A332B] flex items-center gap-1.5">
            <UserCheck size={16} className="text-[#D9572B]" />
            <span>ALIGNED PORTRAITS &amp; VERIFIED BADGES</span>
          </div>
        </div>

        {/* Leaders Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <article
              key={leader.id}
              className="bg-[#16120D] text-white border-4 border-[#16120D] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Aligned Leader Image Frame */}
                <div className="relative aspect-square overflow-hidden bg-[#231F1A] border-b-4 border-[#D9572B]">
                  {leader.avatarImg ? (
                    <img
                      src={leader.avatarImg}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center font-serif font-black text-5xl text-white"
                      style={{ backgroundColor: leader.avatarBg }}
                    >
                      {leader.name.charAt(0)}
                    </div>
                  )}
                  
                  <div className="absolute top-3 left-3 bg-[#D9572B] text-white text-[10px] font-black px-2.5 py-0.5 uppercase tracking-widest rounded shadow">
                    {leader.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-[10px] font-extrabold text-[#E6A100]">
                    <span>{leader.memberId}</span>
                    <span className="flex items-center gap-1 text-[#EADBCE]/80">
                      <MapPin size={11} /> {leader.city}, {leader.state}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-2xl uppercase leading-tight text-white group-hover:text-[#E6A100] transition-colors">
                    {leader.name}
                  </h3>

                  <div className="text-xs font-bold text-[#D9572B] uppercase">
                    {leader.role}
                  </div>

                  <p className="text-xs text-[#EADBCE]/80 font-normal leading-relaxed bg-[#231F1A] p-3 rounded border border-white/10">
                    "{leader.bio}"
                  </p>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="p-4 bg-[#231F1A] border-t border-white/10 flex justify-between items-center text-[10px] font-extrabold text-[#EADBCE]">
                <span>WARD: {leader.wardNo}</span>
                <span className="text-[#27AE60] font-black">{leader.contributions} AUDITS</span>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* ==========================================
          3. SEARCH & ROLE FILTER BAR
      ========================================== */}
      <section id="members-directory" className="sticky top-0 z-40 bg-[#16120D] border-y-2 border-[#D9572B] shadow-2xl backdrop-blur-md my-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Live Search Input */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search by member name, city, role, or ward..."
                className="w-full bg-[#231F1A] border-2 border-[#F5EFE6]/20 px-4 py-2.5 pl-10 text-xs font-extrabold text-white outline-none focus:border-[#D9572B] rounded-lg transition-colors"
              />
              <Search size={16} className="absolute left-3 top-3 text-[#D9572B]" />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="absolute right-3 top-2.5 text-xs font-black text-[#EADBCE] hover:text-[#D9572B]"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Role Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full md:w-auto">
              {badgeCategories.map((cat) => {
                const isActive = activeBadge === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`member-filter-btn-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveBadge(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 rounded-md ${
                      isActive
                        ? 'bg-[#D9572B] text-white shadow-lg font-black'
                        : 'bg-[#231F1A] text-[#EADBCE] hover:bg-[#3A332B] hover:text-white border border-[#F5EFE6]/10'
                    }`}
                  >
                    {lang === 'hi' ? cat.labelHi : cat.labelEn}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          4. ALIGNED MEMBER CARDS GRID (EVERY MEMBER WITH ICON/AVATAR)
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-10">
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-black uppercase text-[#D9572B] tracking-widest">
            SHOWING {filteredMembers.length} MEMBERS
          </span>
          <span className="text-xs font-bold text-[#3A332B]">
            SWARM MEMBER DIRECTORY 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((m) => (
            <article
              key={m.id}
              className="bg-[#F5EFE6] border-4 border-[#16120D] rounded-xl p-6 shadow-xl flex flex-col justify-between hover:border-[#D9572B] transition-all duration-300 group"
            >
              <div>
                {/* Header ID & Role Badge */}
                <div className="flex justify-between items-center text-[10px] font-black text-[#D9572B] mb-4 pb-2 border-b border-[#16120D]/20">
                  <span>{m.memberId}</span>
                  <span className="bg-[#16120D] text-[#F5EFE6] px-2.5 py-0.5 uppercase tracking-wider rounded">
                    {m.badge}
                  </span>
                </div>

                {/* Aligned Avatar & Name Block */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Aligned Profile Picture / Icon Frame */}
                  <div className="w-14 h-14 rounded-xl border-2 border-[#16120D] overflow-hidden flex-shrink-0 bg-black shadow-md">
                    {m.avatarImg ? (
                      <img
                        src={m.avatarImg}
                        alt={m.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center font-serif font-black text-xl text-white"
                        style={{ backgroundColor: m.avatarBg }}
                      >
                        {m.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif font-black text-lg text-[#16120D] uppercase leading-tight group-hover:text-[#D9572B] transition-colors">
                      {m.name}
                    </h3>
                    <div className="text-[11px] font-bold text-[#D9572B] uppercase">
                      {m.role}
                    </div>
                    <div className="text-[10px] font-bold text-[#3A332B] flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="text-[#D9572B]" />
                      {m.city}, {m.state}
                    </div>
                  </div>
                </div>

                {/* Bio Teaser */}
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed bg-[#EADBCE] border border-[#16120D]/30 p-3 rounded mb-4">
                  "{m.bio}"
                </p>
              </div>

              {/* Bottom Footer */}
              <div className="pt-3 border-t border-[#16120D]/20 flex justify-between items-center text-[10px] font-extrabold text-[#3A332B]">
                <span>JOINED: {m.joinDate}</span>
                <span className="text-[#27AE60] font-black">{m.contributions} AUDITS</span>
              </div>
            </article>
          ))}
        </div>

      </section>


      {/* ==========================================
          5. SWARM HOTSPOT CITIES GRID
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 rounded-2xl shadow-xl">
          
          <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-[#16120D] pb-4 mb-6 gap-2">
            <div>
              <span className="text-xs font-black uppercase text-[#D9572B] tracking-widest">REGIONAL SWARM DISTRIBUTION</span>
              <h2 className="font-serif font-black text-2xl md:text-4xl text-[#16120D] uppercase">SWARM HOTSPOTS (TOP CITIES)</h2>
            </div>
            <span className="bg-[#16120D] text-white px-3 py-1 text-xs font-black uppercase rounded">TOP 8 RANKED METRO SECTORS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hotspotCities.map((h) => (
              <div key={h.rank} className="bg-[#EADBCE] border-2 border-[#16120D] p-4 rounded-lg text-center hover:border-[#D9572B] transition-colors">
                <span className="text-[10px] font-black text-[#D9572B] block">{h.rank}</span>
                <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mt-0.5">{h.city}</h3>
                <span className="text-[10px] text-[#3A332B] font-bold block uppercase">{h.state}</span>
                <div className="font-serif font-black text-2xl text-[#D9572B] mt-2">{h.count}</div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          6. FINAL CTA
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8">
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#D9572B] p-10 md:p-14 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <Users size={40} className="text-[#D9572B] mx-auto mb-3" />
          <h2 className="font-serif font-black text-3xl md:text-5xl text-white uppercase mb-3">BECOME A MEMBER TODAY</h2>
          <p className="text-xs md:text-sm text-[#EADBCE] font-normal max-w-xl mx-auto leading-relaxed mb-6">
            Free. Lifelong. Revocable only by you. No fees. No selfies with the leader. Join thousands of active ward auditors today.
          </p>
          <Link to="/join" className="inline-block bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white font-black text-xs uppercase tracking-wider px-8 py-4 border-2 border-[#D9572B] rounded-lg transition-all shadow-xl">
            {t('navJoinSwarm')}
          </Link>
        </div>
      </section>

    </div>
  );
};
