import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { RefreshCw } from 'lucide-react';

export const RefundPolicyPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="refund-policy-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'रिफंड व सहायता नीति | कॉकरोच जनता पार्टी' : 'Refund & Voluntary Support Policy | Cockroach Janta Party'}
        description="Official refund policy for voluntary developer support tips on Cockroach Janta Party website. 7-day refund window and support desk info."
        canonicalUrl="https://cockroachjantapartywale.com/refund-policy"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            DEVELOPER SUPPORT POLICY
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            REFUND &amp; SUPPORT POLICY
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            TERMS FOR VOLUNTARY DEVELOPER TIPS &amp; SERVER CONTRIBUTION
          </p>
        </div>

        {/* Policy Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <RefreshCw size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                7-DAY ACCIDENTAL TIP REFUND GUARANTEE
              </h3>
              <p className="text-xs text-[#3A332B]">
                If you made an accidental UPI contribution or entered an incorrect tier amount on the Support Developer page, we offer a 100% 7-day refund window upon email verification.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Nature of Voluntary Contributions</h3>
            <p>
              All contributions submitted through the UPI scanner are personal, voluntary tips intended solely to assist the independent developer with server bandwidth, domain hosting, and open-source website maintenance.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">2. How to Request a Refund</h3>
            <p>
              Send an email to <strong className="text-[#16120D]">info@cockroachjantaparty.org.in</strong> with the subject line <em>&ldquo;Developer Support Refund Request&rdquo;</em> including your UPI Transaction ID, date, and amount.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">3. Processing Time</h3>
            <p>
              Verified refund requests are processed back to the original UPI VPA within 3-5 business days.
            </p>
          </div>

          <div className="pt-6 border-t border-[rgba(22,18,13,0.18)] text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
            LAST UPDATED: AUGUST 2026 · CJP DEVELOPER DESK
          </div>

        </div>

      </div>
    </div>
  );
};
