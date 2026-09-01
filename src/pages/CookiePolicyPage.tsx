import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Cookie } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="cookie-policy-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'कुकी नीति | कॉकरोच जनता पार्टी' : 'Cookie Policy | Cockroach Janta Party'}
        description="Official Cookie Policy for CJP portal. Zero tracking cookies, browser LocalStorage preference storage, and technical security logs."
        canonicalUrl="https://cockroachjantapartywale.com/cookie-policy"
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            TECHNICAL &amp; PRIVACY DISCLOSURE
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            COOKIE &amp; LOCALSTORAGE POLICY
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            ZERO THIRD-PARTY TRACKING COOKIES · LOCAL PREFERENCE STORAGE ONLY
          </p>
        </div>

        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <Cookie size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                ZERO SURVEILLANCE COOKIE GUARANTEE
              </h3>
              <p className="text-xs text-[#3A332B]">
                Cockroach Janta Party website does NOT set commercial advertising cookies or cross-site tracking cookies.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. LocalStorage Utilization</h3>
            <p>
              We store non-sensitive UI settings (language preference: English/Hindi and customized digital member card details) inside your web browser&apos;s LocalStorage. This data stays entirely on your local device.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">2. Cloudflare Security Tokens</h3>
            <p>
              Security bot protection tokens (Cloudflare Turnstile) may store transient encryption cookies solely to prevent automated DDoS attacks and spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
