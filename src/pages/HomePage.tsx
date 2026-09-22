import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { TopPatronsSection } from '../components/TopPatronsSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { PosterCard } from '../components/PosterCard';
import { newsData } from '../data/newsData';
import { mediaOutletsData } from '../data/mediaOutletsData';
import { postersData } from '../data/postersData';
import type { Poster } from '../data/postersData';
import {
  Tv,
  Radio,
  Users,
  Flame,
  CheckCircle2,
  MessageSquare,
  Send,
  PlayCircle,
  ExternalLink,
  Volume2,
  VolumeX,
  TrendingUp,
  Vote,
  Newspaper,
  AlertTriangle,
  ArrowRight,
  Image,
  Sparkles,
  Download
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // Home Page Trending Posters Filter State
  const [homePosterCategory, setHomePosterCategory] = useState<string>('ALL');

  const homepagePosters = useMemo(() => {
    return postersData
      .filter((p: Poster) => homePosterCategory === 'ALL' || p.category === homePosterCategory)
      .slice(0, 8); // Top 8 trending posters on homepage
  }, [homePosterCategory]);

  // Live TV Broadcast & Audio Control State
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  // Interactive Live Chat Feed
  const [chatMessages, setChatMessages] = useState<{ id: number; user: string; text: string; time: string; badge?: string }[]>([
    { id: 1, user: 'DelhiSwarm_RTI', text: 'Adivasi School Thik Karo campaign launched from Gadchiroli! 590 deaths in 2 years is shocking!', time: '14:10', badge: 'Verified' },
    { id: 2, user: 'TribalAudit_CJP', text: 'Dipke tore up the government MoU at press conference! Historic moment!', time: '14:11' },
    { id: 3, user: 'NishuAzad_Fan', text: 'Bhardwaj got bail but social media gag! Oct 6 hearing crucial.', time: '14:12', badge: 'Mod' },
    { id: 4, user: 'DeshKaNagarik', text: 'MP High Court admitted PIL on Balaghat tribal deaths! Justice incoming!', time: '14:13' },
    { id: 5, user: 'CivicWatchman', text: 'Multi-state expansion to Rajasthan, Jharkhand, Odisha next! CJP unstoppable! 🪳', time: '14:14', badge: 'Verified' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        user: 'You (Citizen Observer)',
        text: chatInput.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setChatInput('');
  };

  // Interactive Live Swarm Poll State
  const [pollVoted, setPollVoted] = useState<number | null>(null);
  const [pollOptionCounts, setPollOptionCounts] = useState([8420, 310, 185]);
  const totalPollVotes = pollOptionCounts.reduce((a, b) => a + b, 0);

  const handleVote = (optionIndex: number) => {
    if (pollVoted !== null) return;
    setPollVoted(optionIndex);
    setPollOptionCounts(prev => {
      const copy = [...prev];
      copy[optionIndex] += 1;
      return copy;
    });
  };

  // Citizen Breaking News Tip Reporting State
  const [tipCategory, setTipCategory] = useState('Pothole / Road Corruption');
  const [tipDescription, setTipDescription] = useState('');
  const [tipSubmitted, setTipSubmitted] = useState(false);

  const handleTipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tipDescription.trim()) {
      setTipSubmitted(true);
      setTipDescription('');
    }
  };

  // Featured Videos for Prime Time Section
  const primeTimeVideos = [
    {
      id: 'LcQsEWUHOjM',
      title: 'CJP Live Broadcast: Special Prime Time Coverage & Youth Movement Update',
      category: 'LIVE STREAM',
      url: 'https://www.youtube.com/live/LcQsEWUHOjM?si=ZzSuUzAw8xCLtuMO',
      embedUrl: 'https://www.youtube.com/embed/LcQsEWUHOjM',
      badge: '🔴 LIVE'
    },
    {
      id: 'fb-cjp-watch-911189544963956',
      title: 'NDTV Special Report: CJP Calls Off Sept 5 Delhi Protest After SC Orders FIRs Quashed',
      category: 'NDTV DISPATCH',
      url: 'https://www.facebook.com/watch/?v=911189544963956',
      embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D911189544963956',
      badge: 'SPECIAL REPORT'
    },
    {
      id: 'wjpWvd6vLrs',
      title: 'CJP Youth Broadcast: Student Protesters Demand NEET Case Withdrawals',
      category: 'YOUTH VOICE',
      url: 'https://youtu.be/wjpWvd6vLrs?si=NPogL-EaWDds50zh',
      embedUrl: 'https://www.youtube.com/embed/wjpWvd6vLrs',
      badge: 'HOT DEBATE'
    },
    {
      id: 'Y8ZsDEn3JOM',
      title: 'Supreme Court Article 142 Order Analysis: CJP Legal Cell Presser',
      category: 'LEGAL DESK',
      url: 'https://youtu.be/Y8ZsDEn3JOM?si=rDfvbzF5I2EQhAjh',
      embedUrl: 'https://www.youtube.com/embed/Y8ZsDEn3JOM',
      badge: 'SC VERDICT'
    }
  ];

  // News Items Data
  const leadNews = newsData[0];
  const breakingNewsList = newsData.slice(1, 7);

  return (
    <div className="cjp-news-portal bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-[#F5EFE6]">
      <SEOHead
        title="CJP 24x7 NEWS — Cockroach Janta Party News Channel Portal"
        description="Official News Channel of Cockroach Janta Party (CJP 24x7 News Network). Live satellite video stream, breaking satire dispatches, Desh Ki Baat prime-time debates, 42 press media partners, and citizen civic audits."
        canonicalUrl="https://cockroachjantapartywale.com/"
      />

      <div id="main-content"></div>

      {/* 1. SATIRICAL MARKET & CIVIC MARQUEE BAR */}
      <div className="bg-[#16120D] text-[#F5EFE6] py-1.5 px-3 border-b-2 border-[#16120D] text-xs font-mono font-bold select-none overflow-hidden flex items-center">
        <div className="bg-[#E6A100] text-[#16120D] px-2 py-0.5 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 flex-shrink-0 z-10 rounded">
          <TrendingUp size={12} /> ROACH-SENSEX &amp; CIVIC INDEX
        </div>
        <div className="animate-ticker flex items-center gap-8 pl-4 whitespace-nowrap text-[#EADBCE]">
          <span className="flex items-center gap-1"><strong className="text-white">ROACH-SENSEX:</strong> 82,150 <span className="text-green-400">▲ +680.2 (Tribal Audit Rally)</span></span>
          <span className="flex items-center gap-1"><strong className="text-white">ADIVASI SCHOOL AUDIT:</strong> <span className="text-red-400">590 Deaths in 2 Years — Gadchiroli Launch</span></span>
          <span className="flex items-center gap-1"><strong className="text-white">BHARDWAJ BAIL:</strong> <span className="text-[#E6A100]">Released From Tihar · Social Media Gag · Oct 6 Hearing</span></span>
          <span className="flex items-center gap-1"><strong className="text-white">SWARM WEATHER:</strong> NEW DELHI 32°C <span className="text-[#E6A100]">(MONSOON &amp; TRIBAL SCHOOL AUDITS)</span></span>
          <span className="flex items-center gap-1"><strong className="text-white">NEET FIRs EXPUNGED:</strong> 2,700 <span className="text-green-400">▲ 100% CLEAN</span></span>
        </div>
      </div>

      {/* 2. HERO CJP 24X7 LIVE TV STUDIO & PRIME TIME SECTION */}
      <section className="pt-6 pb-10 px-3 sm:px-6 lg:px-8 border-b-4 border-[#16120D] bg-[#E4D5C4]/60">
        <div className="max-w-[1480px] mx-auto">
          
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 mb-6 border-b-2 border-[#16120D] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#16120D] text-white flex items-center justify-center border-2 border-[#D9572B] shadow-md">
                <Tv size={20} className="text-[#D9572B] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-3xl sm:text-4xl text-[#16120D] uppercase leading-none">
                    CJP 24x7 LIVE TV STUDIO
                  </h1>
                  <span className="bg-[#D9572B] text-white px-2.5 py-0.5 rounded text-[10px] font-black uppercase animate-pulse">
                    🔴 ON AIR
                  </span>
                </div>
                <p className="text-xs text-[#3A332B] font-extrabold mt-0.5">
                  India's Independent Subterranean Satire &amp; Civic News Network · 100% Unfiltered Truth
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-[#16120D] text-white px-3 py-1.5 rounded-lg border border-[#16120D] flex items-center gap-2 text-xs font-mono font-bold">
                <Users size={14} className="text-[#E6A100]" />
                <span>148,290 WATCHING LIVE</span>
              </div>
              <Link
                to="/live-tv"
                className="btn-brutal px-4 py-2 bg-[#D9572B] text-white font-black text-xs uppercase flex items-center gap-1.5 hover:bg-[#16120D] rounded-lg"
              >
                <span>OPEN FULL TV STUDIO</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* TWO COLUMN LIVE STUDIO GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* LEFT 8 COLS: LIVE VIDEO BROADCAST PLAYER */}
            <div className="lg:col-span-8 bg-[#0D0B08] border-4 border-[#16120D] shadow-[10px_10px_0px_0px_#16120D] rounded-2xl overflow-hidden flex flex-col justify-between relative group min-h-[440px]">
              
              {/* LIVE PLAYER CONTAINER */}
              <div className="relative flex-grow flex items-center justify-center p-6 bg-[#16120D] overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* OVERLAY CHANNEL WATERMARK */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="bg-[#D9572B] text-white px-3 py-1 rounded text-xs font-black tracking-widest flex items-center gap-1.5 shadow-lg border border-black/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    CJP 24x7 LIVE
                  </span>
                  <span className="bg-[#16120D]/90 text-white px-2.5 py-1 rounded text-[11px] font-bold border border-white/20">
                    DESH KI BAAT DEBATE
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="w-10 h-10 rounded-full bg-[#16120D]/80 border border-white/30 p-1 flex items-center justify-center">
                    <img src="/cjp_logo_emblem.svg" alt="CJP Watermark" className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* CENTER LIVE DISPLAY CONTENT */}
                <div className="relative z-10 text-center p-4 max-w-xl space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#D9572B]/20 border-2 border-[#D9572B] flex items-center justify-center animate-pulse">
                    <Radio size={32} className="text-[#D9572B]" />
                  </div>
                  <div className="inline-block bg-[#E6A100] text-[#16120D] px-3 py-0.5 text-[10px] font-black uppercase tracking-widest rounded">
                    SPECIAL LIVE SATELLITE DISPATCH
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl text-white uppercase leading-tight">
                    "DESH KI BAAT: ADIVASI SCHOOL THIK KARO &amp; BHARDWAJ BAIL UPDATE"
                  </h2>
                  <p className="text-xs text-[#EADBCE] font-bold">
                    Anchor Abhijeet Dipke analyzing Gadchiroli Tribal School Crisis, Balaghat Deaths &amp; Swatantra Bhardwaj Bail Conditions
                  </p>

                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="btn-brutal px-4 py-2 bg-white text-[#16120D] font-black text-xs uppercase flex items-center gap-2 hover:bg-[#D9572B] hover:text-white rounded-lg cursor-pointer"
                    >
                      <PlayCircle size={15} /> {isPlaying ? 'PAUSE LIVE STREAM' : 'PLAY STREAM'}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="btn-brutal px-3.5 py-2 bg-[#2A231D] text-white border border-white/30 font-black text-xs uppercase flex items-center gap-2 hover:bg-white hover:text-[#16120D] rounded-lg cursor-pointer"
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      {isMuted ? 'UNMUTE' : 'AUDIO ON'}
                    </button>
                  </div>
                </div>

              </div>

              {/* BOTTOM SCROLLING OVERLAY NEWS TICKER */}
              <div className="bg-[#16120D] text-white py-2.5 px-4 border-t-2 border-[#D9572B] flex items-center gap-3 z-20 text-xs font-extrabold">
                <span className="bg-[#D9572B] text-white px-2.5 py-0.5 text-[10px] font-black uppercase flex-shrink-0 rounded">
                  BREAKING NEWS
                </span>
                <div className="truncate text-white">
                  CJP LAUNCHES 'ADIVASI SCHOOL THIK KARO' FROM GADCHIROLI · 590 Tribal Student Deaths in 2 Years · Bhardwaj Released From Tihar With Social Media Gag · Dipke's Mock MP CM Resignation Goes Viral · Gaurav Bhatia Files ₹2Cr Defamation Suit
                </div>
              </div>

            </div>

            {/* RIGHT 4 COLS: INTERACTIVE LIVE CHAT FEED */}
            <div className="lg:col-span-4 bg-[#F5EFE6] border-4 border-[#16120D] shadow-[8px_8px_0px_0px_#16120D] rounded-2xl p-4 flex flex-col justify-between min-h-[440px]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#16120D] mb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-[#D9572B]" />
                    <h3 className="font-display text-xl uppercase text-[#16120D]">LIVE SWARM CHAT</h3>
                  </div>
                  <span className="bg-[#16120D] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                    148.2K ONLINE
                  </span>
                </div>

                {/* MESSAGES LIST */}
                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {chatMessages.map(msg => (
                    <div key={msg.id} className="p-2 bg-white border border-[#16120D] rounded-lg text-xs">
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
                      <p className="text-[#16120D] font-extrabold leading-tight">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* INPUT FORM */}
              <form onSubmit={handleSendChat} className="flex gap-2 pt-3 border-t-2 border-[#16120D] mt-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Post comment to live TV stream..."
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

          </div>
        </div>
      </section>

      {/* 3. PRIME TIME NEWS DEBATES & VIDEO DESK */}
      <section className="py-12 px-3 sm:px-6 lg:px-8 border-b-4 border-[#16120D] bg-[#F5EFE6]">
        <div className="max-w-[1480px] mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-6 border-b-2 border-[#16120D] pb-3">
            <div>
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block mb-1">
                PRIME TIME DEBATES &amp; VIDEO ARCHIVE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase text-[#16120D]">
                DESH KI BAAT: FEATURED DEBATES &amp; RALLIES
              </h2>
            </div>
            <Link
              to="/videos"
              className="btn-brutal px-4 py-2 bg-[#16120D] text-white font-extrabold text-xs uppercase hover:bg-[#D9572B] rounded-lg flex items-center gap-1.5"
            >
              <span>VIEW ALL 20+ VIDEOS</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primeTimeVideos.map((vid) => (
              <div
                key={vid.id}
                className="bg-[#EADBCE] border-2 border-[#16120D] rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#16120D] hover:border-[#D9572B] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video bg-[#16120D] overflow-hidden">
                    <iframe
                      src={vid.embedUrl}
                      title={vid.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <span className="absolute top-2 left-2 bg-[#D9572B] text-white px-2 py-0.5 rounded text-[9px] font-black uppercase shadow">
                      {vid.badge}
                    </span>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] font-mono font-black text-[#D9572B] uppercase block mb-1">
                      {vid.category}
                    </span>
                    <h4 className="font-extrabold text-xs text-[#16120D] line-clamp-2 leading-snug group-hover:text-[#D9572B]">
                      {vid.title}
                    </h4>
                  </div>
                </div>

                <div className="p-3 pt-0 border-t border-[#16120D]/20 mt-2 flex justify-between items-center">
                  <a
                    href={vid.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black text-[#16120D] hover:text-[#D9572B] uppercase flex items-center gap-1"
                  >
                    <span>OPEN VIDEO</span>
                    <ExternalLink size={10} />
                  </a>
                  <span className="text-[9px] bg-[#16120D] text-white px-1.5 py-0.5 rounded font-mono font-bold">
                    CJP TV
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BREAKING DISPATCHES & HOT HEADLINES (MAIN NEWS GRID) */}
      <section className="py-12 px-3 sm:px-6 lg:px-8 border-b-4 border-[#16120D] bg-[#EADBCE]">
        <div className="max-w-[1480px] mx-auto">
          
          <div className="flex justify-between items-end flex-wrap gap-4 mb-6 border-b-2 border-[#16120D] pb-3">
            <div>
              <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block mb-1">
                TOP DISPATCHES &amp; INVESTIGATIONS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl uppercase text-[#16120D]">
                HOT HEADLINES &amp; VERIFIED NEWS
              </h2>
            </div>
            <Link
              to="/news"
              className="btn-brutal px-4 py-2 bg-[#D9572B] text-white font-extrabold text-xs uppercase hover:bg-[#16120D] rounded-lg flex items-center gap-1.5"
            >
              <span>BROWSE COMPLETE ARCHIVE</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT 7 COLS: HERO LEAD NEWS STORY */}
            <div className="lg:col-span-7 bg-[#F5EFE6] border-4 border-[#16120D] shadow-[10px_10px_0px_0px_#16120D] rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="bg-[#D9572B] text-white px-3 py-1 rounded text-xs font-black uppercase tracking-wider">
                    {leadNews.category}
                  </span>
                  <span className="bg-[#16120D] text-white px-2.5 py-1 rounded text-xs font-mono font-bold">
                    {leadNews.publishDate}
                  </span>
                  <span className="text-xs font-extrabold text-[#D9572B] flex items-center gap-1">
                    <Newspaper size={13} /> {leadNews.author.name}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-[#16120D] uppercase leading-tight mb-3">
                  {leadNews.title}
                </h3>

                <div className="border-2 border-[#16120D] bg-[#16120D] rounded-xl overflow-hidden mb-4 p-1">
                  <img
                    src={leadNews.featuredImage}
                    alt={leadNews.imageAlt}
                    className="w-full h-auto max-h-[380px] object-cover rounded-lg"
                  />
                </div>

                <p className="text-xs sm:text-sm text-[#3A332B] font-extrabold leading-relaxed mb-4">
                  {leadNews.summary}
                </p>

                <div className="bg-[#EADBCE] border-2 border-[#16120D] p-4 rounded-xl space-y-2 mb-4">
                  {leadNews.content.map((sec, sIdx) => (
                    <div key={sIdx}>
                      {sec.heading && <h5 className="font-extrabold text-xs text-[#D9572B] uppercase">{sec.heading}</h5>}
                      <p className="text-xs text-[#16120D] font-bold">{sec.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t-2 border-[#16120D]">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {leadNews.tags.map(tg => (
                    <span key={tg} className="bg-[#16120D] text-white text-[9.5px] font-mono px-2 py-0.5 rounded font-bold">
                      #{tg}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/news#${leadNews.slug}`}
                  className="btn-brutal px-4 py-2 bg-[#16120D] text-white font-black text-xs uppercase hover:bg-[#D9572B] rounded-lg"
                >
                  FULL STORY →
                </Link>
              </div>
            </div>

            {/* RIGHT 5 COLS: SIDE RAIL TRENDING NEWS LIST */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#16120D] text-white p-3 rounded-t-xl font-display text-xl uppercase tracking-wider flex items-center justify-between">
                <span>🔥 TRENDING BREAKING BULLETINS</span>
                <Flame size={18} className="text-[#D9572B]" />
              </div>

              <div className="space-y-3">
                {breakingNewsList.map((story) => (
                  <Link
                    key={story.slug}
                    to={`/news#${story.slug}`}
                    className="block bg-[#F5EFE6] border-2 border-[#16120D] p-4 rounded-xl shadow-[4px_4px_0px_0px_#16120D] hover:border-[#D9572B] transition-all group"
                  >
                    <div className="flex items-center justify-between text-[10px] font-black text-gray-500 mb-1">
                      <span className="bg-[#D9572B] text-white px-2 py-0.2 rounded uppercase">
                        {story.category}
                      </span>
                      <span>{story.publishDate}</span>
                    </div>

                    <h4 className="font-extrabold text-xs sm:text-sm text-[#16120D] group-hover:text-[#D9572B] leading-snug mb-1">
                      {story.title}
                    </h4>

                    <p className="text-[11px] text-[#3A332B] font-semibold line-clamp-2">
                      {story.summary}
                    </p>

                    <div className="mt-2 text-[9.5px] font-black text-gray-600 flex items-center gap-1">
                      <span>Source: {story.author.name}</span> · <span>{story.readingTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4.5. 🔥 CJP TRENDING VIRAL POSTERS & STREET ART SHOWCASE (INDEX HUB) */}
      <section className="py-14 px-3 sm:px-6 lg:px-8 border-b-4 border-[#16120D] bg-[#16120D] text-[#F5EFE6]">
        <div className="max-w-[1480px] mx-auto">
          
          {/* SECTION HEADER */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 mb-8 border-b-2 border-white/20 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#D9572B] text-white px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Flame size={12} className="animate-bounce" /> MOST TRENDING ON INDEX
                </span>
                <span className="bg-[#E6A100] text-[#16120D] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase flex items-center gap-1">
                  <Sparkles size={11} /> 45,000+ DOWNLOADS
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl uppercase text-white tracking-wide">
                🔥 TRENDING STREET POSTERS &amp; CAMPAIGN PLACARDS
              </h2>
              <p className="text-xs sm:text-sm text-[#EADBCE] font-semibold mt-1 max-w-2xl">
                Official fictional satire vector posters, street protest placards, and editorial campaign banners created by the CJP Swarm. Free for public civic advocacy &amp; ward audits.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/posters"
                className="btn-brutal px-5 py-3 bg-[#D9572B] text-white font-black text-xs uppercase flex items-center gap-2 hover:bg-white hover:text-[#16120D] rounded-xl shadow-lg transition-all"
              >
                <Image size={16} />
                <span>EXPLORE ALL 36+ POSTERS</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* INTERACTIVE CATEGORY FILTER TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {[
              { id: 'ALL', label: '🔥 ALL TRENDING' },
              { id: 'protest', label: '📢 PROTEST PLACARDS' },
              { id: 'campaign', label: '🚀 CAMPAIGN BANNERS' },
              { id: 'editorial', label: '📰 EDITORIAL SATIRE' },
              { id: 'satire', label: '🎭 CARTOONS & SATIRE' },
              { id: 'meme', label: '🪳 MEME GRAPHICS' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setHomePosterCategory(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  homePosterCategory === tab.id
                    ? 'bg-[#D9572B] text-white shadow-md border-2 border-white'
                    : 'bg-[#2A231D] text-[#EADBCE] border border-white/20 hover:bg-white hover:text-[#16120D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* POSTERS MASONRY GRID (TOP 8 TRENDING) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homepagePosters.map((poster: Poster) => (
              <PosterCard key={poster.id} poster={poster} />
            ))}
          </div>

          {/* BOTTOM QUICK STATS & ARCHIVE LINK BANNER */}
          <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#2A231D] p-5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D9572B] text-white flex items-center justify-center font-mono font-black text-xl border-2 border-white/30">
                🪳
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white uppercase">NEED HIGH-RESOLUTION PRINT READY POSTERS?</h4>
                <p className="text-xs text-[#EADBCE] font-medium">Download vector formats for A3 street printouts, RTI rally placards &amp; Instagram stories.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/posters"
                className="btn-brutal px-4 py-2.5 bg-white text-[#16120D] font-black text-xs uppercase hover:bg-[#D9572B] hover:text-white rounded-lg flex items-center gap-2"
              >
                <Download size={14} />
                <span>OPEN FULL POSTER GALLERY</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CJP SWARM POLL OF THE DAY & REPORT BREAKING TIP HOTLINE */}
      <section className="py-12 px-3 sm:px-6 lg:px-8 border-b-4 border-[#16120D] bg-[#F5EFE6]">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT 6 COLS: CJP SWARM POLL OF THE DAY */}
          <div className="lg:col-span-6 bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] shadow-[8px_8px_0px_0px_#16120D] p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <div className="flex items-center gap-2">
                <Vote size={22} className="text-[#E6A100]" />
                <h3 className="font-display text-2xl uppercase text-white">CJP SWARM POLL OF THE DAY</h3>
              </div>
              <span className="bg-[#D9572B] text-white text-[10px] font-black px-2.5 py-1 rounded uppercase">
                LIVE VOTING
              </span>
            </div>

            <div>
              <span className="text-xs font-black text-[#E6A100] uppercase tracking-wider">QUESTION #482</span>
              <h4 className="font-display text-2xl text-white uppercase leading-snug mt-1">
                Should municipal road paving contractors be legally mandated to display a 3-Year Public Warranty Board on site?
              </h4>
            </div>

            {/* OPTIONS */}
            <div className="space-y-3 pt-1">
              {[
                'YES — Absolutely mandatory for public fund accountability',
                'NO — Existing tender documents are sufficient',
                'NEUTRAL — Depends on contract value threshold'
              ].map((opt, idx) => {
                const count = pollOptionCounts[idx];
                const pct = Math.round((count / totalPollVotes) * 100);
                const isSelected = pollVoted === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleVote(idx)}
                    disabled={pollVoted !== null}
                    className={`w-full text-left p-3 border-2 rounded-xl transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#D9572B] text-white border-white'
                        : 'bg-[#2A231D] text-white border-white/20 hover:border-[#D9572B]'
                    }`}
                  >
                    {/* Background Progress Fill */}
                    {pollVoted !== null && (
                      <div
                        className="absolute left-0 top-0 bottom-0 bg-[#D9572B]/40 transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    )}
                    <div className="relative z-10 flex items-center justify-between text-xs font-extrabold">
                      <span>{opt}</span>
                      {pollVoted !== null && (
                        <span className="font-mono font-black text-[#E6A100] bg-black/60 px-2 py-0.5 rounded">
                          {pct}% ({count.toLocaleString()})
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center text-[10.5px] font-mono font-bold text-gray-400 pt-2 border-t border-white/10">
              <span>Total Swarm Votes: {totalPollVotes.toLocaleString()}</span>
              <span>{pollVoted !== null ? '✅ Vote Recorded Live' : 'Select an option to cast live vote'}</span>
            </div>
          </div>

          {/* RIGHT 6 COLS: REPORT BREAKING NEWS TIP / POTHOLE HOTLINE */}
          <div className="lg:col-span-6 bg-[#EADBCE] border-4 border-[#16120D] shadow-[8px_8px_0px_0px_#16120D] p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={22} className="text-[#D9572B]" />
                  <h3 className="font-display text-2xl uppercase text-[#16120D]">SUBMIT NEWS TIP &amp; CIVIC HOTLINE</h3>
                </div>
                <span className="bg-[#16120D] text-white text-[10px] font-black px-2.5 py-1 rounded uppercase">
                  CITIZEN DESK
                </span>
              </div>

              <p className="text-xs text-[#3A332B] font-extrabold mb-4 leading-relaxed">
                Spotted a missing contractor road warranty board, broken municipal school roof, or illegal drain dumping in your ward? Dispatch your report directly to the CJP Newsroom.
              </p>

              {tipSubmitted ? (
                <div className="bg-[#16120D] text-white p-5 rounded-xl text-center space-y-2 border-2 border-[#16120D]">
                  <CheckCircle2 size={32} className="text-green-400 mx-auto" />
                  <h4 className="font-display text-2xl uppercase text-white">CITIZEN TIP DISPATCHED!</h4>
                  <p className="text-xs text-[#EADBCE] font-bold">
                    Thank you! Your civic report has been queued for CJP Ward Observer verification.
                  </p>
                  <button
                    onClick={() => setTipSubmitted(false)}
                    className="btn-brutal px-4 py-2 bg-[#D9572B] text-white font-black text-xs uppercase rounded-lg mt-2 cursor-pointer"
                  >
                    SUBMIT ANOTHER TIP
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTipSubmit} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-black text-[#16120D] uppercase tracking-wider block mb-1">
                      ISSUE CATEGORY:
                    </label>
                    <select
                      value={tipCategory}
                      onChange={(e) => setTipCategory(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold border-2 border-[#16120D] bg-white text-[#16120D] rounded-lg focus:outline-none focus:border-[#D9572B]"
                    >
                      <option value="Pothole / Road Corruption">Pothole / Road Paving Warranty</option>
                      <option value="School Infrastructure">School Thik Karo Audit</option>
                      <option value="Subterranean Sewer">Subterranean Sewer &amp; Drainage</option>
                      <option value="Police Station FIR">Police Station / Legal Support</option>
                      <option value="RTI Disclosure">RTI Public Disclosure Tip</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-black text-[#16120D] uppercase tracking-wider block mb-1">
                      DISPATCH DETAILS (LOCATION, WARD #, EVIDENCE):
                    </label>
                    <textarea
                      rows={3}
                      value={tipDescription}
                      onChange={(e) => setTipDescription(e.target.value)}
                      placeholder="Describe the civic issue or news tip in detail..."
                      className="w-full px-3 py-2 text-xs font-bold border-2 border-[#16120D] bg-white text-[#16120D] rounded-lg focus:outline-none focus:border-[#D9572B]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-brutal py-3 bg-[#D9572B] text-white font-black text-xs uppercase hover:bg-[#16120D] rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={15} /> DISPATCH TO CJP NEWSROOM
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 6. VERIFIED PRESS OUTLETS BAR (42 MEDIA PARTNERS) */}
      <section className="py-10 px-3 sm:px-6 lg:px-8 border-b-4 border-[#16120D] bg-[#16120D] text-[#F5EFE6]">
        <div className="max-w-[1480px] mx-auto">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/20 flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Newspaper size={22} className="text-[#D9572B]" />
              <div>
                <h3 className="font-display text-2xl text-white uppercase">CJP VERIFIED MEDIA PRESS NETWORK</h3>
                <p className="text-[11px] text-[#EADBCE] font-bold">
                  Syndicated stories &amp; direct press coverage across 42 global &amp; Indian newsrooms
                </p>
              </div>
            </div>
            <Link
              to="/news"
              className="btn-brutal px-3 py-1.5 bg-[#D9572B] text-white font-black text-xs uppercase hover:bg-white hover:text-[#16120D] rounded-lg"
            >
              VIEW ALL 42 OUTLETS →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {mediaOutletsData.slice(0, 14).map((outlet) => (
              <a
                key={outlet.id}
                href={outlet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#2A231D] border border-white/20 rounded-lg hover:border-[#D9572B] hover:bg-[#D9572B] transition-all text-center block group"
              >
                <span className="font-extrabold text-xs text-white group-hover:text-white block truncate">
                  {outlet.name}
                </span>
                <span className="text-[9px] font-mono text-gray-400 group-hover:text-white block truncate">
                  {outlet.domain}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TOP PATRONS & SUPPORT DEV SECTIONS */}
      <TopPatronsSection />
      <NewsletterSection />
    </div>
  );
};
