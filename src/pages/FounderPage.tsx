import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const FounderPage: React.FC = () => {
  const { lang } = useLanguage();

  const leaders = [
    {
      name: 'Abhijeet Dipke',
      role: 'Founder & National Convenor',
      bio: '20-year-old student, political communications researcher, and founder of Cockroach Janta Party Wale (CJP). Dipke pioneered the subterranean accountability movement using dark humor, civic RTI activism, and viral digital commentary.',
      image: '/cjp_leader_abhijeet_dipke.png',
      tag: 'FOUNDER'
    },
    {
      name: 'Ashutosh Ranka',
      role: 'Co-Founder & Policy Strategist',
      bio: 'RTI advocate and youth organizer focusing on contractor road warranty laws, municipal expenditure transparency, and student rights.',
      image: '/cjp_leader_ashutosh_ranka.png',
      tag: 'POLICY LEAD'
    },
    {
      name: 'Saurav Das',
      role: 'Chief Press & Legal Delegate',
      bio: 'Investigative researcher specializing in public procurement audits, NTA exam integrity campaigns, and peaceful assembly legal protections.',
      image: '/cjp_leader_saurav_das.png',
      tag: 'LEGAL DESK'
    },
    {
      name: 'Ananya Sen',
      role: 'Head of Student Swarm Networks',
      bio: 'Grassroots organizer leading the School Thik Karo primary school renovation drive and campus chapter coordination across 14 states.',
      image: '/cjp_leader_ananya_sen.png',
      tag: 'YOUTH WING'
    }
  ];

  const quotes = [
    {
      quote: "We chose the cockroach not because we love pests, but because like a cockroach, the ordinary citizen survives every monsoon, every broken road, every unfulfilled promise, and every election cycle — refusing to perish.",
      context: "Press Conference, New Delhi (August 2026)"
    },
    {
      quote: "Democracy is not a 5-year VIP ceremony. It is an everyday inspection of drains, drinking water, school desks, and government tender warranties.",
      context: "Black Monday Assembly Address"
    },
    {
      quote: "If asking for audited exam papers and uncorrupted roads makes us 'Dimagi Naxal', then every citizen demanding a functioning sewer is a rebel.",
      context: "Youth Forum Keynote"
    }
  ];

  return (
    <div className="founder-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'संस्थापक अभिजीत दीपके | कॉकरोच जनता पार्टी' : 'Abhijeet Dipke - Founder of Cockroach Janta Party Wale (CJP)'}
        description="Official biography, interview transcripts, vision, and movement history of Abhijeet Dipke, founder & convenor of Cockroach Janta Party Wale (CJP)."
        canonicalUrl="https://cockroachjantapartywale.com/founder"
      />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Hero Banner */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            MOVEMENT LEADERSHIP · EST. 2026
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            ABHIJEET DIPKE &amp; CJP LEADERSHIP
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'कॉकरोच जनता पार्टी के संस्थापक अभिजीत दीपके और छात्र युवा नेताओं की दृष्टि।'
              : 'Meet the 20-year-old student convenor and youth delegates redefining political satire and civic accountability in India.'}
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 md:p-10 shadow-2xl mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="border-4 border-[#16120D] bg-[#16120D] overflow-hidden shadow-xl">
              <img
                src="/cjp_leader_abhijeet_dipke.png"
                alt="Abhijeet Dipke - Founder of Cockroach Janta Party"
                className="w-full h-auto object-cover filter contrast-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 bg-[#D9572B] text-white px-4 py-1.5 font-display text-xs uppercase tracking-wider border-2 border-[#16120D] shadow-md">
              FOUNDER &amp; CONVENOR
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1 uppercase">
                CIVIC COMMENTATOR &amp; RESEARCHER
              </span>
              <span className="text-xs font-bold text-[#D9572B] uppercase">AGE 20 · NEW DELHI</span>
            </div>

            <h2 className="font-serif font-black text-3xl md:text-4xl text-[#16120D] uppercase leading-none">
              ABHIJEET DIPKE
            </h2>

            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              Abhijeet Dipke is an Indian student, political communications researcher, and founder of 
              <strong className="text-[#16120D]"> Cockroach Janta Party Wale (CJP)</strong>. Frustrated by recurring municipal infrastructure failures, unfulfilled youth promises, and bureaucratic apathy, Dipke launched CJP as a satirical satire-first civic commentary platform in 2026.
            </p>

            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              Under his convenorship, CJP transformed from an online parody campaign into a nationwide student movement with over 20,000 registered delegates, conducting ward-level road warranty audits, primary school cleanups, and non-violent peaceful protest rallies.
            </p>

            <div className="pt-4 border-t border-[#16120D]/20 flex flex-wrap gap-4 items-center">
              <a
                href="https://x.com/cjpindia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold px-5 py-2.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <span>Follow @cjpindia</span>
                <ExternalLink size={14} />
              </a>

              <Link
                to="/join"
                className="bg-[#D9572B] text-white text-xs font-extrabold px-5 py-2.5 border-2 border-[#16120D] hover:bg-[#16120D] transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <span>Join Dipke&apos;s Swarm</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="mb-16">
          <div className="border-b-4 border-[#16120D] pb-3 mb-8 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                NATIONAL SECRETARIAT
              </span>
              <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase">
                CO-FOUNDERS &amp; KEY DELEGATES
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leaders.slice(1).map((leader, i) => (
              <div key={i} className="bg-[#F5EFE6] border-2 border-[#16120D] p-5 shadow-lg space-y-4 flex flex-col justify-between">
                <div>
                  <div className="border-2 border-[#16120D] overflow-hidden mb-4 h-48 bg-[#16120D]">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="bg-[#D9572B] text-white text-[9px] font-black px-2.5 py-0.5 uppercase tracking-widest inline-block mb-1">
                    {leader.tag}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#16120D] uppercase">{leader.name}</h3>
                  <p className="text-[11px] font-extrabold text-[#D9572B] uppercase mb-2">{leader.role}</p>
                  <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Speeches & Quotes */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-8 md:p-12 border-4 border-[#16120D] shadow-2xl mb-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
              HISTORIC DECLARATIONS
            </span>
            <h2 className="font-serif font-black text-3xl md:text-4xl text-[#F5EFE6] uppercase">
              FOUNDER SPEECHES &amp; QUOTES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q, idx) => (
              <div key={idx} className="bg-[#231F1A] border border-white/20 p-6 space-y-4 flex flex-col justify-between">
                <p className="text-xs text-[#EADBCE] italic leading-relaxed font-serif">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="pt-3 border-t border-white/10 text-[10px] font-extrabold text-[#D9572B] uppercase">
                  — {q.context}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/quotes"
              className="inline-flex items-center gap-2 bg-[#D9572B] text-white text-xs font-extrabold px-6 py-3 border-2 border-white hover:bg-white hover:text-[#16120D] transition-all uppercase tracking-wider"
            >
              <span>EXPLORE ALL SPEECHES &amp; QUOTE POSTERS</span> →
            </Link>
          </div>
        </div>

        {/* Movement Milestones */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl mb-12">
          <h3 className="font-serif font-black text-2xl text-[#16120D] uppercase mb-6 text-center">
            CJP FOUNDING TIMELINE &amp; ACHIEVEMENTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-[#EADBCE] border border-[#16120D]">
              <div className="font-display text-3xl text-[#D9572B] font-black">20,000+</div>
              <div className="text-[11px] font-extrabold text-[#16120D] uppercase mt-1">Swarm Members</div>
            </div>
            <div className="p-4 bg-[#EADBCE] border border-[#16120D]">
              <div className="font-display text-3xl text-[#D9572B] font-black">14</div>
              <div className="text-[11px] font-extrabold text-[#16120D] uppercase mt-1">State Chapters</div>
            </div>
            <div className="p-4 bg-[#EADBCE] border border-[#16120D]">
              <div className="font-display text-3xl text-[#D9572B] font-black">450+</div>
              <div className="text-[11px] font-extrabold text-[#16120D] uppercase mt-1">RTI Audits Filed</div>
            </div>
            <div className="p-4 bg-[#EADBCE] border border-[#16120D]">
              <div className="font-display text-3xl text-[#D9572B] font-black">100%</div>
              <div className="text-[11px] font-extrabold text-[#16120D] uppercase mt-1">Non-ECI Civic Movement</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
