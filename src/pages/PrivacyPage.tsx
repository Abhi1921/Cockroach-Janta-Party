import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Lock } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="privacy-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'गोपनीयता नीति व DPDP अनुपालन | कॉकरोच जनता पार्टी' : 'Privacy Policy & DPDP Act 2023 Compliance | Cockroach Janta Party'}
        description="Official CJP privacy policy. Zero-tracking data architecture, LocalStorage encryption, AdSense disclosures, and DPDP Act 2023 compliance."
        canonicalUrl="https://cockroachjantapartywale.com/privacy"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            DATA PROTECTION &amp; PRIVACY
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            PRIVACY POLICY &amp; DPDP ACT
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            ZERO-TRACKING DATA ARCHITECTURE &amp; STATUTORY PRIVACY COMPLIANCE
          </p>
        </div>

        {/* Privacy Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <Lock size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                DPDP ACT 2023 COMPLIANCE GUARANTEE
              </h3>
              <p className="text-xs text-[#3A332B]">
                Cockroach Janta Party portal operates on a zero-surveillance data model compliant with the Digital Personal Data Protection (DPDP) Act, 2023. We do not harvest, track, or sell user personal data.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Local Device Storage</h3>
            <p>
              Your language preference (English / Hindi) and customized member badge inputs are stored locally inside your web browser&apos;s LocalStorage. This data never leaves your device and is not transmitted to external database servers.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">2. Volunteer Form Confidentiality</h3>
            <p>
              Information submitted via the Join Swarm or Ward Issue contact forms is used exclusively for internal community coordination and regional rally notices. We never share email addresses or phone numbers with commercial third parties.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">3. AdSense &amp; Analytics Disclosures</h3>
            <p>
              Standard server log files (IP addresses, browser types, timestamp logs) are maintained solely for DDoS security prevention and cloud performance monitoring via Vercel edge networks.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">4. Data Deletion Rights</h3>
            <p>
              Users have the right to request deletion of any voluntarily submitted contact records by emailing <strong className="text-[#16120D]">info@cockroachjantaparty.org.in</strong>.
            </p>
          </div>

          <div className="pt-6 border-t border-[rgba(22,18,13,0.18)] text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
            {t('footerCopyright')}
          </div>

        </div>

      </div>
    </div>
  );
};
