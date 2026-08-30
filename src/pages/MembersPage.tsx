import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldAlert, Users, MapPin, Search } from 'lucide-react';

export const MembersPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchFilter, setSearchFilter] = useState('');

  const realMembers = [
    {
      reqNo: '45701',
      name: 'matadeen Prajapati (M D SIR)',
      roleTag: 'Lazy by principle',
      location: 'Banda, UP',
      date: '30 Aug 2026',
      bio: 'Refuses to hustle on principle and has the screenshots to prove it.',
      avatarBg: '#16120D'
    },
    {
      reqNo: '45700',
      name: 'Subodh Dubey',
      roleTag: 'Chronically online',
      location: 'Nagpur, MH',
      date: '30 Aug 2026',
      bio: 'Growing up around toxic air, broken roads, and crumbling schools exposed the harsh reality: a corrupt system with zero empathy.',
      avatarBg: '#D9572B'
    },
    {
      reqNo: '45699',
      name: 'vish bhokare',
      roleTag: 'Unemployed',
      location: 'Dombivli, MH',
      date: '30 Aug 2026',
      bio: 'Hum election ladna chahte hai',
      avatarBg: '#16120D'
    },
    {
      reqNo: '45698',
      name: 'RTR Dhilipan1',
      roleTag: 'Member',
      location: 'THANJAVUR, TN',
      date: '29 Aug 2026',
      bio: 'Logs eleven hours online a day and would like a word with the municipality.',
      avatarBg: '#D9572B'
    },
    {
      reqNo: '45697',
      name: 'Prabhat Yadav',
      roleTag: 'Unemployed',
      location: 'AURAIAY, UP',
      date: '29 Aug 2026',
      bio: 'I want to join because this party talks about education equality and unemployment, I also want to be a part of it.',
      avatarBg: '#16120D'
    },
    {
      reqNo: '45696',
      name: 'BIPLAB RANJAN MALLIK',
      roleTag: 'Unemployed',
      location: 'OD',
      date: '29 Aug 2026',
      bio: 'Refuses to hustle on principle because the rant must go on.',
      avatarBg: '#D9572B'
    },
    {
      reqNo: '45695',
      name: 'Nishant Kirtikumar Patel',
      roleTag: 'Chronically online',
      location: 'Mumbai, MH',
      date: '29 Aug 2026',
      bio: 'For support against unemployment, students rights, exploitation of students under law internship.',
      avatarBg: '#16120D'
    },
    {
      reqNo: '45694',
      name: 'Lokesh',
      roleTag: 'Unemployed',
      location: 'Delhi, DL',
      date: '29 Aug 2026',
      bio: 'I want to join to drive real, on-ground change. Focus: Education for all, accessible Healthcare, and Employment for youth.',
      avatarBg: '#D9572B'
    },
    {
      reqNo: '45693',
      name: 'Jegam Khan',
      roleTag: 'Member',
      location: 'Lucknow, UP',
      date: '29 Aug 2026',
      bio: 'Quote-tweets ministers before breakfast and filed a complaint about it too.',
      avatarBg: '#16120D'
    },
    {
      reqNo: '45692',
      name: 'Janardhan Mhaske',
      roleTag: 'Professional ranter',
      location: 'Chhatrapati Sambhajinagar, MH',
      date: '29 Aug 2026',
      bio: 'मूलभूत गरजा सर्वांना उच्च दर्जाचे मिळणे',
      avatarBg: '#D9572B'
    },
    {
      reqNo: '45691',
      name: 'Satendra Kumar Sonkar',
      roleTag: 'Unemployed',
      location: 'Naribari, UP',
      date: '29 Aug 2026',
      bio: 'Samaj ki sewa',
      avatarBg: '#16120D'
    },
    {
      reqNo: '45690',
      name: 'Shahid Naikwadi',
      roleTag: 'Professional ranter',
      location: 'Kolhapur, MH',
      date: '29 Aug 2026',
      bio: 'Wakes up at noon by appointment and considers this a full-time job.',
      avatarBg: '#D9572B'
    }
  ];

  const hotspotCities = [
    { rank: '#01', state: 'Delhi', city: 'Delhi', count: 1550 },
    { rank: '#02', state: 'West Bengal', city: 'Kolkata', count: 1200 },
    { rank: '#03', state: 'Maharashtra', city: 'Mumbai', count: 1129 },
    { rank: '#04', state: 'Karnataka', city: 'Bengaluru', count: 788 },
    { rank: '#05', state: 'Maharashtra', city: 'Pune', count: 738 },
    { rank: '#06', state: 'Telangana', city: 'Hyderabad', count: 702 },
    { rank: '#07', state: 'Tamil Nadu', city: 'Chennai', count: 506 },
    { rank: '#08', state: 'Uttar Pradesh', city: 'Lucknow', count: 378 },
    { rank: '#09', state: 'Bihar', city: 'Patna', count: 262 },
    { rank: '#10', state: 'Rajasthan', city: 'Jaipur', count: 249 },
    { rank: '#11', state: 'Maharashtra', city: 'Nagpur', count: 236 },
    { rank: '#12', state: 'Gujarat', city: 'Ahmedabad', count: 210 }
  ];

  const filtered = realMembers.filter((m) =>
    m.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    m.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
    m.roleTag.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="members-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title="The Swarm Members | Cockroach Janta Party (43,247 Strong)"
        description="Explore the live directory of members of Cockroach Janta Party across 36 states and 43,247 registered applicants."
        canonicalUrl="http://localhost:3000/members"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            THE SWARM · 43,247 STRONG
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-[#16120D] mb-4 uppercase">
            OUR MEMBERS
          </h1>
          <p className="text-[#3A332B] text-sm md:text-base leading-relaxed font-medium">
            Membership is free, lifelong, and revocable only by the member. Below: the swarm — newest applicants first.
          </p>
        </div>

        {/* Live Swarm Pulse Stats Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 text-center">
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-4">
            <span className="font-display text-3xl text-[#16120D] block">25</span>
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase">TODAY APPLICANTS</span>
          </div>
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-4">
            <span className="font-display text-3xl text-[#16120D] block">2,658</span>
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase">THIS WEEK</span>
          </div>
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-4">
            <span className="font-display text-3xl text-[#16120D] block">27,751</span>
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase">ON THE MAP (64%)</span>
          </div>
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-4">
            <span className="font-display text-3xl text-[#16120D] block">43,247</span>
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase">TOTAL SWARM</span>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 max-w-4xl mx-auto mb-12 shadow-md flex items-start gap-4">
          <ShieldAlert size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] font-medium leading-relaxed">
            <span className="font-extrabold text-[#16120D] block uppercase mb-1">MEMBERSHIP PRIVACY SAFEGUARD NOTICE</span>
            Only information intentionally submitted for public display is shown. Private email addresses, residential street numbers, and personal phone numbers stay strictly protected.
          </div>
        </div>

        {/* Member Search Bar */}
        <div className="max-w-4xl mx-auto bg-[#F5EFE6] border-2 border-[#16120D] p-4 mb-8 flex items-center gap-3">
          <Search size={16} className="text-[#3A332B]" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search members by name, city, state, or tag..."
            className="w-full bg-[#EADBCE] border border-[#16120D] px-3 py-2 text-xs font-bold text-[#16120D] outline-none"
          />
        </div>

        {/* Real Member Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {filtered.map((m) => (
            <div key={m.reqNo} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-xl flex flex-col justify-between hover:border-[#D9572B] transition-all">
              <div>
                <div className="flex justify-between items-center text-[10px] font-extrabold text-[#D9572B] mb-3">
                  <span>REQ / #{m.reqNo}</span>
                  <span className="bg-[#16120D] text-[#F5EFE6] px-2 py-0.5 uppercase tracking-wider">{m.roleTag}</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full text-white font-display text-lg flex items-center justify-center font-bold" style={{ backgroundColor: m.avatarBg }}>
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-[#16120D] uppercase leading-tight">{m.name}</h2>
                    <span className="text-[10px] font-extrabold text-[#D9572B] flex items-center gap-1">
                      <MapPin size={10} /> {m.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4 bg-[#EADBCE] border border-[#16120D] p-3">
                  "{m.bio}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#16120D]/18 text-[9px] font-bold text-[#3A332B] flex justify-between">
                <span>JOINED: {m.date}</span>
                <span className="text-[#D9572B] uppercase">SYMBOLIC MEMBER</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hotspot Cities Table */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 max-w-4xl mx-auto shadow-xl mb-16">
          <div className="flex justify-between items-center border-b border-[#16120D]/20 pb-3 mb-6">
            <h2 className="font-display text-3xl text-[#16120D] uppercase">SWARM HOTSPOTS (TOP CITIES)</h2>
            <span className="text-xs font-extrabold text-[#D9572B]">12 RANKED CITIES</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {hotspotCities.map((h) => (
              <div key={h.rank} className="bg-[#EADBCE] border border-[#16120D] p-3 text-center">
                <span className="text-[10px] font-extrabold text-[#D9572B] block">{h.rank}</span>
                <h3 className="font-bold text-sm text-[#16120D] uppercase">{h.city}</h3>
                <span className="text-[9px] text-[#3A332B] font-bold block">{h.state}</span>
                <span className="font-display text-xl text-[#16120D] block mt-1">{h.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-2 border-[#16120D] p-10 max-w-4xl mx-auto text-center shadow-xl">
          <Users size={36} className="text-[#D9572B] mx-auto mb-3" />
          <h2 className="font-display text-4xl mb-3 uppercase">BECOME A MEMBER</h2>
          <p className="text-xs text-[#EADBCE] font-medium max-w-xl mx-auto leading-relaxed mb-6">
            Free. Lifelong. Revocable only by you. No fees. No selfies with the leader.
          </p>
          <a href="/join" className="inline-block bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 border-2 border-[#D9572B] hover:bg-[#EADBCE] hover:text-[#16120D] transition-all">
            {t('navJoinSwarm')}
          </a>
        </div>

      </div>
    </div>
  );
};
