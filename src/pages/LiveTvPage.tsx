import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Tv,
  Users,
  Volume2,
  VolumeX,
  Send,
  PlayCircle,
  Share2,
  Flame,
  MessageSquare
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { newsData } from '../data/newsData';

export const LiveTvPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'stream' | 'schedule'>('stream');
  
  // Live Chat State
  const [chatMessages, setChatMessages] = useState<{ id: number; user: string; text: string; time: string; badge?: string }[]>([
    { id: 1, user: 'DelhiSwarm_RTI', text: 'Supreme Court Article 142 decision was historic! Zero FIRs left.', time: '15:34', badge: 'Verified' },
    { id: 2, user: 'PotholeAuditor_99', text: 'What about Sector 62 road warranty board? Still missing!', time: '15:35' },
    { id: 3, user: 'NishuAzad_Fan', text: 'Full support to Sanjay Kumar Ji! Section 307 added finally.', time: '15:35', badge: 'Mod' },
    { id: 4, user: 'DeshKaNagarik', text: 'Abhijeet Sir is live on Desh Ki Baat debate tonight at 8 PM?', time: '15:36' },
    { id: 5, user: 'CivicWatchman', text: 'CJP 24x7 reporting truth when main media was silent!', time: '15:36', badge: 'Verified' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        user: 'You (Citizen Viewer)',
        text: inputMsg.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputMsg('');
  };

  const scheduleLineup = [
    { time: '08:00 AM', title: 'Subterranean Morning Dispatch', host: 'Rajnath Roach', desc: 'Daily civic infrastructure audit & pothole morning report.' },
    { time: '12:00 PM', title: 'Fact Check Express Live', host: 'Alt News Desk & Ananya Sen', desc: 'Exposing AI deepfakes and fake news targeting student protesters.' },
    { time: '04:00 PM', title: 'Crime & Police Station Siege Tracker', host: 'Saurav Das', desc: 'Live updates from Parliament Street court hearings & FIR filings.' },
    { time: '08:00 PM', title: 'PRIME TIME: DESH KI BAAT', host: 'Abhijeet Dipke', desc: 'National debate on municipal transparency, NEET exam integrity, and road warranties.' },
    { time: '10:30 PM', title: 'Black Monday & Special Documentaries', host: 'CJP Media Bureau', desc: 'Investigative timeline of July 20 student protest and legal proceedings.' }
  ];

  const featuredStories = newsData.slice(0, 4);

  return (
    <>
      <SEOHead
        title="CJP 24x7 LIVE TV — Cockroach Janta Party News Channel"
        description="Watch Cockroach Janta Party 24x7 Live News Stream, Breaking Satire Bulletins, Desh Ki Baat Prime Time Debates, and Citizen Civic Audits Live."
        canonicalUrl="/live-tv"
      />

      <div className="bg-[#EADBCE] text-[#16120D] min-h-screen py-6 px-3 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Live TV 24x7' }]} />

          {/* PAGE BANNER HEADER */}
          <div className="bg-[#16120D] text-[#F5EFE6] p-5 sm:p-7 border-4 border-[#16120D] shadow-[8px_8px_0px_0px_#16120D] rounded-2xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="bg-[#D9572B] text-white px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  🔴 LIVE 24X7 BROADCAST
                </span>
                <span className="bg-[#E6A100] text-[#16120D] px-2.5 py-0.5 rounded text-[11px] font-black uppercase">
                  SATELLITE FEED #1
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
                CJP 24x7 LIVE TV STUDIO
              </h1>
              <p className="text-xs sm:text-sm text-[#EADBCE] font-bold mt-1">
                India's Independent Subterranean News Channel · No Corporate Sponsorship · 100% Public Truth
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#2A231D] border border-white/20 px-4 py-2 rounded-xl text-center">
                <div className="text-xs text-gray-400 font-bold uppercase">LIVE VIEWERS</div>
                <div className="text-xl font-black text-[#E6A100] flex items-center gap-1 justify-center">
                  <Users size={16} /> 148,290
                </div>
              </div>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'CJP 24x7 Live TV', url: window.location.href });
                  }
                }}
                className="btn-brutal px-4 py-3 bg-[#D9572B] text-white font-black text-xs uppercase flex items-center gap-2 hover:bg-white hover:text-[#16120D] rounded-xl cursor-pointer"
              >
                <Share2 size={16} /> SHARE STREAM
              </button>
            </div>
          </div>

          {/* MAIN TWO-COLUMN STUDIO LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* LEFT 8 COLS: LIVE PLAYER & PROGRAM DETAILS */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* VIDEO PLAYER FRAME */}
              <div className="relative bg-[#0D0B08] border-4 border-[#16120D] shadow-[10px_10px_0px_0px_#16120D] rounded-2xl overflow-hidden aspect-video group">
                
                {/* VIDEO DISPLAY CONTAINER */}
                <div className="absolute inset-0 bg-[#16120D] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 text-center p-6 space-y-4 max-w-xl">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#D9572B]/20 border-2 border-[#D9572B] flex items-center justify-center animate-pulse">
                      <Tv size={40} className="text-[#D9572B]" />
                    </div>
                    <div className="inline-block bg-[#D9572B] text-white px-3 py-1 text-xs font-black uppercase tracking-widest rounded-md">
                      STUDIO BROADCAST TRANSMITTING
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl text-white uppercase leading-tight">
                      "DESH KI BAAT: CJP 24x7 SPECIAL COVERAGE"
                    </h2>
                    <p className="text-xs sm:text-sm text-[#EADBCE] font-bold">
                      Live Reporting on Supreme Court Article 142 Verdict &amp; Parliament Street Sit-in
                    </p>
                    
                    <div className="flex items-center justify-center gap-3 pt-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="btn-brutal px-5 py-2.5 bg-white text-[#16120D] font-black text-xs uppercase flex items-center gap-2 hover:bg-[#D9572B] hover:text-white rounded-lg cursor-pointer"
                      >
                        <PlayCircle size={16} /> {isPlaying ? 'PAUSE LIVE' : 'PLAY LIVE'}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="btn-brutal px-4 py-2.5 bg-[#2A231D] text-white border border-white/30 font-black text-xs uppercase flex items-center gap-2 hover:bg-white hover:text-[#16120D] rounded-lg cursor-pointer"
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        {isMuted ? 'UNMUTE AUDIO' : 'AUDIO ON'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* OVERLAY WATERMARK & LIVE TAGS */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <div className="bg-[#D9572B] text-white px-3 py-1 rounded text-xs font-black tracking-widest flex items-center gap-1.5 shadow-lg border border-black/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    CJP 24x7 LIVE
                  </div>
                  <div className="bg-[#16120D]/90 backdrop-blur-md text-white px-2.5 py-1 rounded text-[11px] font-bold border border-white/20">
                    1080p HD STUDIO
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="w-10 h-10 rounded-full bg-[#16120D]/80 border border-white/30 p-1 flex items-center justify-center">
                    <img src="/cjp_logo_emblem.svg" alt="CJP Logo Watermark" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* BOTTOM SCROLLING OVERLAY TICKER ON VIDEO */}
                <div className="absolute bottom-0 inset-x-0 bg-[#16120D]/95 text-white py-2 px-4 border-t-2 border-[#D9572B] flex items-center gap-3 z-20 text-xs font-extrabold">
                  <span className="bg-[#D9572B] text-white px-2 py-0.5 text-[10px] font-black uppercase flex-shrink-0">
                    BREAKING BULLETIN
                  </span>
                  <div className="truncate">
                    NDTV &amp; The Hindu: Supreme Court Bench Slams Police Tactics · SC/ST Act &amp; POCSO Sections Added to Swatantra Bhardwaj FIR
                  </div>
                </div>
              </div>

              {/* TAB SELECTION BAR */}
              <div className="flex border-b-2 border-[#16120D] gap-2">
                <button
                  onClick={() => setActiveTab('stream')}
                  className={`py-2.5 px-5 font-black text-xs uppercase border-t-2 border-x-2 border-[#16120D] rounded-t-xl transition-all ${
                    activeTab === 'stream'
                      ? 'bg-[#16120D] text-[#F5EFE6] shadow-[2px_-2px_0px_0px_#D9572B]'
                      : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#D9572B] hover:text-white'
                  }`}
                >
                  📺 Stream Info &amp; Anchor Desk
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`py-2.5 px-5 font-black text-xs uppercase border-t-2 border-x-2 border-[#16120D] rounded-t-xl transition-all ${
                    activeTab === 'schedule'
                      ? 'bg-[#16120D] text-[#F5EFE6] shadow-[2px_-2px_0px_0px_#D9572B]'
                      : 'bg-[#F5EFE6] text-[#16120D] hover:bg-[#D9572B] hover:text-white'
                  }`}
                >
                  📅 Full Program Schedule
                </button>
              </div>

              {/* TAB CONTENT */}
              {activeTab === 'stream' ? (
                <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-[4px_4px_0px_0px_#16120D] rounded-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-[#16120D] pb-3">
                    <div>
                      <span className="text-xs font-black text-[#D9572B] uppercase">CURRENT PROGRAM</span>
                      <h3 className="font-display text-2xl text-[#16120D]">DESH KI BAAT: CJP 24x7 SPECIAL BULLETIN</h3>
                    </div>
                    <span className="text-xs font-mono font-bold bg-[#16120D] text-white px-2.5 py-1 rounded">
                      AIRING NOW
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3A332B] font-extrabold leading-relaxed">
                    Live from CJP National News Studio. Today's bulletin features an exclusive analysis of the Supreme Court's landmark Article 142 decision quashing all protest FIRs, legal petitions filed by CJP legal spokesperson Saurav Das, and ground dispatches on Maharashtra Ashramshala audits.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-[#EADBCE] border border-[#16120D] p-3 rounded-lg">
                      <div className="text-[10px] font-black text-gray-600 uppercase">ANCHOR IN CHARGE</div>
                      <div className="text-xs font-black text-[#16120D]">Abhijeet Dipke &amp; Saurav Das</div>
                    </div>
                    <div className="bg-[#EADBCE] border border-[#16120D] p-3 rounded-lg">
                      <div className="text-[10px] font-black text-gray-600 uppercase">STUDIO LOCATION</div>
                      <div className="text-xs font-black text-[#16120D]">Central News Desk, New Delhi</div>
                    </div>
                    <div className="bg-[#EADBCE] border border-[#16120D] p-3 rounded-lg">
                      <div className="text-[10px] font-black text-gray-600 uppercase">BROADCAST QUALITY</div>
                      <div className="text-xs font-black text-[#D9572B]">1080p Ultra Clear HD</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-[4px_4px_0px_0px_#16120D] rounded-xl space-y-3">
                  <div className="font-display text-xl uppercase mb-2 border-b border-[#16120D] pb-2 text-[#16120D]">
                    TODAY'S CJP 24x7 BROADCAST LINEUP
                  </div>
                  {scheduleLineup.map((prog, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-[#16120D] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-[#D9572B] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-black bg-[#16120D] text-white px-2 py-1 rounded whitespace-nowrap">
                          {prog.time}
                        </span>
                        <div>
                          <div className="font-extrabold text-xs text-[#16120D]">{prog.title}</div>
                          <div className="text-[11px] text-[#3A332B] font-semibold">{prog.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-[#D9572B] uppercase bg-[#EADBCE] px-2 py-0.5 rounded">
                        Host: {prog.host}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* RIGHT 4 COLS: INTERACTIVE LIVE CHAT */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#F5EFE6] border-4 border-[#16120D] shadow-[8px_8px_0px_0px_#16120D] rounded-2xl p-4 flex flex-col h-[520px]">
                
                {/* CHAT HEADER */}
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#16120D] mb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-[#D9572B]" />
                    <h3 className="font-display text-lg uppercase text-[#16120D]">LIVE SWARM CHAT</h3>
                  </div>
                  <span className="bg-[#16120D] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                    REAL-TIME
                  </span>
                </div>

                {/* MESSAGES LIST */}
                <div className="flex-grow overflow-y-auto space-y-2.5 pr-1 mb-3">
                  {chatMessages.map(msg => (
                    <div key={msg.id} className="p-2.5 bg-white border border-[#16120D] rounded-lg text-xs">
                      <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 mb-0.5">
                        <span className="flex items-center gap-1 font-black text-[#16120D]">
                          {msg.user}
                          {msg.badge && (
                            <span className="bg-[#D9572B] text-white px-1 py-0.2 rounded text-[8px] uppercase">
                              {msg.badge}
                            </span>
                          )}
                        </span>
                        <span>{msg.time}</span>
                      </div>
                      <p className="text-[#16120D] font-extrabold leading-snug">{msg.text}</p>
                    </div>
                  ))}
                </div>

                {/* INPUT FORM */}
                <form onSubmit={handleSendMessage} className="flex gap-2 pt-2 border-t border-[#16120D]">
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Comment on live broadcast..."
                    className="flex-grow px-3 py-2 text-xs border-2 border-[#16120D] rounded-lg font-bold bg-white text-[#16120D] focus:outline-none focus:border-[#D9572B]"
                  />
                  <button
                    type="submit"
                    className="btn-brutal px-3 py-2 bg-[#D9572B] text-white font-black text-xs hover:bg-[#16120D] rounded-lg flex items-center justify-center cursor-pointer"
                  >
                    <Send size={14} />
                  </button>
                </form>

              </div>

              {/* QUICK HIGHLIGHTS CARD */}
              <div className="bg-[#16120D] text-[#F5EFE6] p-5 border-2 border-[#16120D] shadow-[6px_6px_0px_0px_#16120D] rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#E6A100] font-black text-xs uppercase tracking-wider">
                  <Flame size={14} /> TOP STORIES TODAY
                </div>
                {featuredStories.map((story) => (
                  <Link
                    key={story.slug}
                    to={`/news#${story.slug}`}
                    className="block p-2 bg-[#2A231D] border border-white/10 rounded-lg hover:border-[#D9572B] transition-colors"
                  >
                    <div className="text-[10px] font-black text-[#D9572B] uppercase">{story.category}</div>
                    <div className="text-xs font-black text-white line-clamp-2">{story.title}</div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};
