import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Mail, CheckCircle, Shield, Share2, TrendingUp } from 'lucide-react';
import { SupportDevBanner } from './SupportDevBanner';
import { SocialShareModal } from './SocialShareModal';
import { SEOAdsGuideModal } from './SEOAdsGuideModal';

export const Footer: React.FC = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [seoGuideOpen, setSeoGuideOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consentChecked) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SupportDevBanner />
      <SocialShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
      <SEOAdsGuideModal isOpen={seoGuideOpen} onClose={() => setSeoGuideOpen(false)} />

      <footer className="bg-[#16120D] text-[#F5EFE6] border-t-4 border-[#D9572B] pt-16 pb-12 font-sans selection:bg-[#D9572B] selection:text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          
          {/* The Dispatch Newsletter Section (Replacing old CTA banner) */}
          <div className="bg-[#1C1712] border border-white/10 p-8 md:p-10 mb-16 shadow-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 rounded-xl">
            <div className="space-y-3 max-w-xl">
              <span className="text-[#E5B82A] text-[11px] font-black uppercase tracking-widest block">
                THE DISPATCH
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5EFE6] font-extrabold leading-tight">
                One email. <span className="italic font-serif font-normal text-[#E5B82A]">When it matters.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#EADBCE]/80 font-medium leading-relaxed">
                New essays, manifesto updates, and the occasional open letter. No spam, no corporate drip sequence.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="w-full lg:max-w-md space-y-3">
              <div className="flex items-center bg-[#110D09] border border-white/20 rounded-lg overflow-hidden focus-within:border-[#E5B82A] transition">
                <Mail size={16} className="text-[#EADBCE]/50 ml-3.5 shrink-0" />
                <input
                  type="email"
                  placeholder="you@example.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent px-3 py-3 text-xs text-white placeholder-[#EADBCE]/40 focus:outline-none w-full font-mono"
                />
                <button
                  type="submit"
                  className="bg-[#E5B82A] hover:bg-amber-400 text-[#16120D] font-extrabold text-xs uppercase px-6 py-3 transition cursor-pointer shrink-0"
                >
                  {submitted ? 'JOINED!' : 'SUBSCRIBE'}
                </button>
              </div>

              <label className="flex items-start gap-2 text-[10.5px] text-[#EADBCE]/80 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  required
                  className="mt-0.5 rounded border-white/20 text-[#E5B82A] focus:ring-0 cursor-pointer shrink-0"
                />
                <span>
                  I understand my personal data may be processed by infrastructure providers outside India (hosting, database, email, analytics, captcha) as described in the <Link to="/privacy" className="underline hover:text-[#E5B82A]">Privacy Policy</Link>. *
                </span>
              </label>

              <div className="bg-[#110D09] border border-white/10 p-2.5 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                  <span>{submitted ? 'Subscription Confirmed!' : 'Success!'}</span>
                </div>
                <div className="text-[10px] text-white/50 flex items-center gap-1">
                  <Shield size={12} className="text-amber-500 shrink-0" />
                  <span>CLOUDFLARE Privacy • Help</span>
                </div>
              </div>

              <p className="text-[10px] text-[#EADBCE]/60">
                One email, when there's something to say. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Official Social Channels Strip */}
          <div className="bg-[#231F1A] border-2 border-white/10 p-4 mb-12 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-extrabold text-[#F5EFE6] uppercase tracking-wider">
              OFFICIAL SOCIAL CHANNELS &amp; MEDIA:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold">
              <a
                href="https://x.com/Cockroachisback"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                𝕏 TWITTER / X (@Cockroachisback)
              </a>
              <a
                href="https://www.instagram.com/cockroachjantaparty/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                📸 INSTAGRAM (@cockroachjantaparty)
              </a>
              <a
                href="https://www.youtube.com/channel/UCCdhqGkJVJb8Y2IesdnxKHQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                ▶️ YOUTUBE CHANNEL
              </a>
              <a
                href="https://www.reddit.com/r/CockroachJantaParty09/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                👽 REDDIT (r/CockroachJantaParty09)
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbBqF7S5fM5Rf1mRV540"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                💬 WHATSAPP CHANNEL
              </a>
              <a
                href="https://t.me/thecockroachchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                ✈️ TELEGRAM (@thecockroachchannel)
              </a>
              <a
                href="https://x.com/abhijeet_dipke"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                𝕏 ABHIJEET DIPKE
              </a>
              <a
                href="https://www.instagram.com/abhijeetdipke/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16120D] text-[#EADBCE] px-3 py-1.5 border border-white/20 hover:text-white hover:border-[#D9572B] transition-colors"
              >
                📸 ABHIJEET DIPKE (INSTAGRAM)
              </a>
            </div>
          </div>

          {/* Master Navigation & Content Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16 border-b border-white/10 pb-16 text-xs font-bold text-[#EADBCE]">
            
            {/* Column 1: THE PARTY */}
            <div className="space-y-3">
              <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-1.5">
                THE PARTY
              </h4>
              <ul className="space-y-2 uppercase text-[11px]">
                <li><Link to="/vision" className="hover:text-[#D9572B] transition-colors">Vision</Link></li>
                <li><Link to="/manifesto" className="hover:text-[#D9572B] transition-colors">The Manifesto</Link></li>
                <li><Link to="/archive" className="hover:text-[#D9572B] transition-colors font-bold text-[#D9572B]">Digital Archive</Link></li>
                <li><Link to="/fact-check" className="hover:text-emerald-400 transition-colors font-bold text-emerald-400">Fact Check Matrix</Link></li>
                <li><Link to="/internal-disputes" className="hover:text-amber-400 transition-colors font-bold text-amber-400">Internal Disputes</Link></li>
                <li><Link to="/domains" className="hover:text-[#D9572B] transition-colors">Domain Map</Link></li>
                <li><Link to="/youtube" className="hover:text-red-400 transition-colors">YouTube Archive</Link></li>
                <li><Link to="/documents" className="hover:text-[#D9572B] transition-colors">Documents & Court Orders</Link></li>
              </ul>
            </div>

            {/* Column 2: TOPICS */}
            <div className="space-y-3">
              <h4 className="font-display text-sm text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-1.5">
                TOPICS
              </h4>
              <ul className="space-y-2 uppercase text-[11px]">
                <li><Link to="/black-monday" className="hover:text-[#D9572B] transition-colors font-bold text-[#D9572B]">Black Monday</Link></li>
                <li><Link to="/school-thik-karo" className="hover:text-[#D9572B] transition-colors">School Thik Karo</Link></li>
                <li><Link to="/memes" className="hover:text-[#D9572B] transition-colors">Memes</Link></li>
                <li><Link to="/issues" className="hover:text-[#D9572B] transition-colors">Issues</Link></li>
                <li><Link to="/campaign/donate-to-abdul" className="hover:text-[#D9572B] transition-colors text-[#D9572B] flex items-center gap-1">Donate to Abdul</Link></li>
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
                <li><button onClick={() => setShareModalOpen(true)} className="hover:text-[#F59E0B] transition-colors text-left flex items-center gap-1 text-[#F59E0B] font-bold"><Share2 size={11} /> Viral Share Toolkit</button></li>
                <li><button onClick={() => setSeoGuideOpen(true)} className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1 text-emerald-400 font-bold"><TrendingUp size={11} /> SEO &amp; Ads Guide</button></li>
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
                <li><Link to="/press-kit" className="hover:text-[#D9572B] transition-colors font-bold text-[#E6A100]">Media & Press Kit</Link></li>
                <li><Link to="/contact" className="hover:text-[#D9572B] transition-colors">Contact</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#EADBCE] font-extrabold tracking-wider pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-center md:text-left">
              <span className="font-display text-lg text-[#F5EFE6] tracking-wide">
                Cockroach Janta Party (CJP) — Har Ghar Ki Sarkar! 🪳
              </span>
            </div>

            <div className="max-w-2xl text-center md:text-right text-[10px] text-white/70 font-semibold leading-snug">
              <div className="flex items-center justify-center md:justify-end gap-1.5 text-[#D9572B] font-bold uppercase mb-1">
                <ShieldCheck size={14} /> OFFICIAL FICTIONAL PARODY NOTICE
              </div>
              <p>
                CJP is a fictional parody organization created for entertainment purposes. This website is not affiliated with any real political party or government organization.
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
