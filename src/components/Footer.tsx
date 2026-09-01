import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-[#16120D] text-[#F5EFE6] border-t-4 border-[#D9572B] pt-16 pb-12 font-sans selection:bg-[#D9572B] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Top CTA Banner in Footer */}
        <div className="bg-[#231F1A] border-2 border-white/10 p-8 md:p-10 mb-16 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest inline-block">
              CIVIC ACTION MOVEMENT · EST. 2026
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#F5EFE6] uppercase leading-tight">
              TURN APATHY INTO CIVIC ACTION
            </h3>
            <p className="text-xs text-[#EADBCE] font-medium max-w-xl">
              Join thousands of student observers, RTI advocates, and neighborhood residents demanding transparent road warranties, clean tap water, and open public records.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/join"
              className="bg-[#D9572B] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-4 border border-white hover:bg-white hover:text-[#16120D] transition-all shadow-lg flex items-center gap-2"
            >
              <span>JOIN THE SWARM NOW</span> →
            </Link>
          </div>
        </div>

        {/* Official Social Channels Strip */}
        <div className="bg-[#231F1A] border-2 border-white/10 p-4 mb-12 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-extrabold text-[#F5EFE6] uppercase tracking-wider">
            OFFICIAL SOCIAL CHANNELS &amp; MEDIA:
          </span>
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold">
            <a
              href="https://x.com/cjpindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              𝕏 TWITTER / X (@CJPINDIA)
            </a>
            <a
              href="https://instagram.com/cjpindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              📸 INSTAGRAM (@CJPINDIA)
            </a>
            <a
              href="https://youtube.com/@cjpindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              ▶️ YOUTUBE (@CJPINDIA)
            </a>
            <a
              href="https://t.me/cjpindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              ✈️ TELEGRAM (CJPINDIA)
            </a>
            <a
              href="https://www.facebook.com/watch/?v=2054290928526389"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              📘 FACEBOOK WATCH
            </a>
            <a
              href="https://whatsapp.com/channel/cjpindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              💬 WHATSAPP CHANNEL
            </a>
            <a
              href="https://github.com/Abhi1921/Cockroach-Janta-Party"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
            >
              💻 GITHUB REPO
            </a>
          </div>
        </div>

        {/* Master Navigation & Content Grid matching Image 3 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16 border-b border-white/10 pb-16 text-xs font-bold text-[#EADBCE]">
          
          {/* Column 1: THE PARTY */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-1.5">
              THE PARTY
            </h4>
            <ul className="space-y-2 uppercase text-[11px]">
              <li><Link to="/vision" className="hover:text-[#D9572B] transition-colors">Vision</Link></li>
              <li><Link to="/manifesto" className="hover:text-[#D9572B] transition-colors">The Manifesto</Link></li>
              <li><Link to="/articles" className="hover:text-[#D9572B] transition-colors">Articles</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D9572B] transition-colors">Gallery</Link></li>
              <li><Link to="/tracker" className="hover:text-[#D9572B] transition-colors">Tracker</Link></li>
              <li><Link to="/protests" className="hover:text-[#D9572B] transition-colors">Protests</Link></li>
            </ul>
          </div>

          {/* Column 2: TOPICS */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-1.5">
              TOPICS
            </h4>
            <ul className="space-y-2 uppercase text-[11px]">
              <li><Link to="/memes" className="hover:text-[#D9572B] transition-colors">Memes</Link></li>
              <li><Link to="/issues" className="hover:text-[#D9572B] transition-colors">Issues</Link></li>
              <li><Link to="/campaign/donate-to-abdul" className="hover:text-[#D9572B] transition-colors text-[#D9572B] flex items-center gap-1">Donate to Abdul</Link></li>
              <li><Link to="/manifesto" className="hover:text-[#D9572B] transition-colors">Manifesto</Link></li>
              <li><Link to="/news" className="hover:text-[#D9572B] transition-colors">News</Link></li>
              <li><Link to="/quotes" className="hover:text-[#D9572B] transition-colors">Quotes</Link></li>
            </ul>
          </div>

          {/* Column 3: PARTICIPATE */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-1.5">
              PARTICIPATE
            </h4>
            <ul className="space-y-2 uppercase text-[11px]">
              <li><Link to="/join" className="hover:text-[#D9572B] transition-colors">Join the swarm</Link></li>
              <li><Link to="/members" className="hover:text-[#D9572B] transition-colors">Members</Link></li>
              <li><Link to="/portal" className="hover:text-[#D9572B] transition-colors">Get your card</Link></li>
              <li><Link to="/raise-voice" className="hover:text-[#D9572B] transition-colors">Raise your voice</Link></li>
              <li><Link to="/leave-swarm" className="hover:text-[#D9572B] transition-colors">Leave the swarm</Link></li>
              <li><Link to="/support-dev" className="hover:text-[#D9572B] transition-colors flex items-center gap-1 text-[#D9572B]"><Heart size={11} /> Support Developer</Link></li>
            </ul>
          </div>

          {/* Column 4: COMMUNITY */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-1.5">
              COMMUNITY
            </h4>
            <ul className="space-y-2 uppercase text-[11px]">
              <li><Link to="/community-guidelines" className="hover:text-[#D9572B] transition-colors">Community Guidelines</Link></li>
              <li><Link to="/protest-guidelines" className="hover:text-[#D9572B] transition-colors">Protest Guidelines</Link></li>
              <li><Link to="/bitchat" className="hover:text-[#D9572B] transition-colors">Responsible BitChat use</Link></li>
              <li><Link to="/bitchat" className="hover:text-[#D9572B] transition-colors">Stay connected offline</Link></li>
            </ul>
          </div>

          {/* Column 5: LEGAL */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-white/10 pb-1.5">
              LEGAL
            </h4>
            <ul className="space-y-2 uppercase text-[11px]">
              <li><Link to="/transparency" className="hover:text-[#D9572B] transition-colors">Legal &amp; Transparency</Link></li>
              <li><Link to="/privacy" className="hover:text-[#D9572B] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#D9572B] transition-colors">Terms of Use</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#D9572B] transition-colors">Disclaimer</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#D9572B] transition-colors">Cookie Policy</Link></li>
              <li><Link to="/editorial-policy" className="hover:text-[#D9572B] transition-colors">Editorial Policy</Link></li>
            </ul>
          </div>

          {/* Column 6: POLICIES & SITE */}
          <div className="space-y-3">
            <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-white/10 pb-1.5">
              POLICIES &amp; SITE
            </h4>
            <ul className="space-y-2 uppercase text-[11px]">
              <li><Link to="/transparency" className="hover:text-[#D9572B] transition-colors">Transparency</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#D9572B] transition-colors">Refund Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-[#D9572B] transition-colors">Support Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-[#D9572B] transition-colors">Accessibility</Link></li>
              <li><Link to="/about" className="hover:text-[#D9572B] transition-colors">About</Link></li>
              <li><Link to="/press-kit" className="hover:text-[#D9572B] transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-[#D9572B] transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright matching Image 3 */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#EADBCE] font-extrabold uppercase tracking-wider pt-2">
          <div className="flex items-center gap-2">
            <span>© 2026 Cockroach Janta Party · All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[#D9572B]">
            <ShieldCheck size={14} />
            <span>⚠ A WORK OF SATIRE</span>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[#EADBCE]">
            <Link to="/transparency" className="hover:text-[#D9572B]">Legal</Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-[#D9572B]">Privacy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-[#D9572B]">Terms</Link>
            <span>·</span>
            <Link to="/about" className="hover:text-[#D9572B]">About</Link>
            <span>·</span>
            <Link to="/press-kit" className="hover:text-[#D9572B]">Press</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-[#D9572B]">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
