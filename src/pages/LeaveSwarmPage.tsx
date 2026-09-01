import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { LogOut, CheckCircle2 } from 'lucide-react';

export const LeaveSwarmPage: React.FC = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [removed, setRemoved] = useState(false);

  const handleLeave = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.removeItem('cjp_current_member');
      setRemoved(true);
    }
  };

  return (
    <div className="leave-swarm-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'सदस्यता रद्द करें | कॉकरोच जनता पार्टी' : 'Leave The Swarm — Revoke Membership | Cockroach Janta Party'}
        description="Official CJP membership revocation desk. Revoke your member badge and purge personal records anytime."
        canonicalUrl="https://cockroachjantapartywale.com/leave-swarm"
      />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
          VOLUNTARY MEMBERSHIP REVOCATION
        </span>
        <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4 uppercase">
          LEAVE THE SWARM
        </h1>
        <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto mb-8">
          CJP membership is 100% voluntary and revocable at any time without fees or questions.
        </p>

        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl space-y-6 max-w-lg mx-auto">
          {removed ? (
            <div className="space-y-3 text-emerald-700">
              <CheckCircle2 size={40} className="mx-auto" />
              <h3 className="font-serif font-bold text-2xl uppercase text-[#16120D]">MEMBERSHIP REVOKED</h3>
              <p className="text-xs text-[#3A332B] font-medium">
                Your local member badge has been purged. We respect your choice!
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeave} className="space-y-4">
              <LogOut size={40} className="text-[#D9572B] mx-auto" />
              <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
                Enter your registered email below to clear local member credentials and revoke membership status.
              </p>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="registered@email.com"
                className="w-full bg-[#EADBCE] border border-[#16120D] p-3 text-xs font-bold outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase py-3 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all"
              >
                REVOKE MY MEMBERSHIP NOW →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
