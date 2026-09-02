import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      setSubscribed(true);
    }
  };

  return (
    <section className="newsletter-section py-14 bg-[#16120D] text-[#F5EFE6] border-t-2 border-b-2 border-white/10 font-sans selection:bg-[#D9572B] selection:text-white">
      <div className="max-w-[1280px] mx-auto px-4">
        
        <div className="bg-[#231F1A] border-2 border-white/15 p-8 md:p-12 shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest inline-block">
              SWARM DISPATCHES &amp; ESSAYS
            </span>
            <h3 className="font-serif font-black text-3xl md:text-4xl text-[#F5EFE6] uppercase">
              STAY INFORMED WITH COCKROACH JANTA PARTY
            </h3>
            <p className="text-xs md:text-sm text-[#EADBCE] font-medium leading-relaxed">
              New essays, manifesto updates, and the occasional open letter. No spam, no corporate drip sequence.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-[#16120D] border border-emerald-500/50 p-6 text-center text-emerald-400 space-y-2">
              <CheckCircle2 size={36} className="mx-auto text-emerald-400" />
              <h4 className="font-serif font-bold text-xl uppercase text-white">SUBSCRIBED TO SWARM DISPATCHES</h4>
              <p className="text-xs text-[#EADBCE]">
                Thank you! You will receive dispatches directly in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-grow bg-[#16120D] border-2 border-white/20 px-4 py-3 text-xs text-[#F5EFE6] placeholder-[#EADBCE]/50 focus:outline-none focus:border-[#D9572B] font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#D9572B] text-white text-xs font-extrabold px-6 py-3 border-2 border-[#D9572B] hover:bg-white hover:text-[#16120D] transition-all flex items-center justify-center gap-2 uppercase tracking-wider flex-shrink-0"
                >
                  <span>SUBSCRIBE</span>
                  <Send size={14} />
                </button>
              </div>

              {/* Consent Checkbox matching Image 3 */}
              <div className="flex items-start gap-2.5 text-[11px] text-[#EADBCE]">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-[#D9572B]"
                  required
                />
                <label htmlFor="newsletter-consent" className="leading-snug">
                  I consent to data processing (hosting, database, email, analytics, captcha) as described in the{' '}
                  <Link to="/privacy" className="text-[#D9572B] underline">
                    Privacy Policy
                  </Link>
                  . *
                </label>
              </div>

              {/* Cloudflare Turnstile Captcha Widget Mock matching Image 3 */}
              <div className="bg-[#16120D] border border-white/20 p-3 rounded max-w-xs flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-[#16120D] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-xs font-extrabold text-white">Success!</span>
                </div>

                <div className="flex flex-col items-end text-[9px] text-[#EADBCE]/70">
                  <span className="font-bold tracking-widest text-[#EADBCE]">CLOUDFLARE</span>
                  <span>Privacy · Terms</span>
                </div>
              </div>

              <p className="text-[10px] text-center text-[#EADBCE]/70 font-mono">
                One email, when there&apos;s something to say. Unsubscribe anytime.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
