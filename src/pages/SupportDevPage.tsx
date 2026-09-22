import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { TopPatronsSection } from '../components/TopPatronsSection';
import { ShieldAlert, Code, ShieldCheck, Info, CheckCircle } from 'lucide-react';

export const SupportDevPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="support-dev-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title={lang === 'hi' ? 'डेवलपर को सपोर्ट करें | कॉकरोच जनता पार्टी' : 'Support Website Developer | Voluntary Software Tips'}
        description="Support the independent software developer behind the Cockroach Janta Party portal. Scan UPI GPay QR code for voluntary hosting, server & software tips."
        canonicalUrl="https://cockroachjantapartywale.com/support-dev"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4 border border-[#16120D]">
            INDEPENDENT OPEN-SOURCE DEVELOPER SUPPORT
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            SUPPORT THE WEBSITE DEVELOPER
          </h1>
          <p className="text-xs md:text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto leading-relaxed">
            DIRECT VOLUNTARY PERSONAL TIPS FOR CLOUD SERVER BANDWIDTH, DOMAIN FEES, AND OPEN-SOURCE SOFTWARE MAINTENANCE.
          </p>
        </div>

        {/* Developer Personal Note Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 mb-12">
          <div className="flex items-center gap-3 border-b-2 border-[#16120D] pb-4">
            <Code size={28} className="text-[#D9572B]" />
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                DEVELOPER DISCLOSURE STATEMENT
              </span>
              <h2 className="font-serif font-black text-xl text-[#16120D] uppercase">
                &ldquo;INDEPENDENT OPEN-SOURCE SOFTWARE ENGINEERING &amp; MAINTENANCE&rdquo;
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-[#3A332B] font-medium leading-relaxed">
            <p>
              This page is maintained exclusively by an independent software developer who single-handedly codes, designs, hosts, and maintains this entire web platform.
            </p>
            <p>
              <strong>IMPORTANT LEGAL NOTICE:</strong> This page and all contributions submitted here are <strong>100% personal, voluntary software developer tips/gratuities</strong>. They have <strong>ZERO connection, ZERO affiliation, and NO association</strong> with any political party, political campaign, election trust, or electoral fund contribution pool.
            </p>
            <p>
              Running a high-traffic web platform involves recurring expenses such as cloud hosting servers, domain registration renewals, security certificates, and open-source code maintenance. If you appreciate the software engineering, UI design, and satirical civic media platform created here, you can voluntarily choose a tier below to scan and support the developer directly.
            </p>
          </div>
        </div>

        {/* Open-Source Platform Disclosure Box */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl mb-12 space-y-4">
          <div className="flex items-center gap-2 text-[#D9572B] font-extrabold uppercase text-sm">
            <ShieldCheck size={20} /> OPEN-SOURCE SOFTWARE STATEMENT
          </div>
          <h3 className="font-serif font-black text-2xl uppercase text-white">
            PUBLIC-INTEREST OPEN-SOURCE INITIATIVE
          </h3>
          <p className="text-xs text-[#EADBCE] leading-relaxed">
            The Cockroach Janta Party portal operates as an open-source public-interest civic platform. We do not process active online payments or commercial donations. All codebase enhancements, satellite dispatches, and RTI data visualizations are published under open-source software principles.
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 md:p-8 shadow-xl space-y-4 mb-12">
          <div className="flex items-center gap-3 border-b-2 border-[#16120D]/20 pb-3">
            <ShieldAlert size={26} className="text-[#D9572B] flex-shrink-0" />
            <h4 className="font-serif font-black text-base text-[#16120D] uppercase tracking-wide">
              COMPREHENSIVE DEVELOPER TIP LEGAL DISCLAIMER &amp; POLICY
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#3A332B] font-medium leading-relaxed">
            <div className="bg-[#EADBCE] p-4 border border-[#16120D] space-y-1.5">
              <span className="font-bold text-[#16120D] uppercase block flex items-center gap-1">
                <CheckCircle size={14} className="text-emerald-600" /> 1. NON-POLITICAL PERSONAL GRATUITY
              </span>
              <p className="text-[11px]">
                All transactions completed via this page are voluntary personal gifts/tips given to an individual web developer. They do not constitute political party donations, electoral trust funds, subscription fees, or political campaign funds under Indian electoral laws (including the Representation of the People Act, 1951).
              </p>
            </div>

            <div className="bg-[#EADBCE] p-4 border border-[#16120D] space-y-1.5">
              <span className="font-bold text-[#16120D] uppercase block flex items-center gap-1">
                <Info size={14} className="text-[#D9572B]" /> 2. NO COMMERCIAL OBLIGATION
              </span>
              <p className="text-[11px]">
                Submitting a voluntary tip does not entitle the donor to any commercial contract, equity, membership rights, organizational voting power, or paid service delivery. Tips are given out of personal goodwill to support server upkeep.
              </p>
            </div>

            <div className="bg-[#EADBCE] p-4 border border-[#16120D] space-y-1.5">
              <span className="font-bold text-[#16120D] uppercase block flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#D9A02B]" /> 3. 7-DAY REFUND WINDOW
              </span>
              <p className="text-[11px]">
                If a contribution was transferred by mistake or in error, we offer a 100% 7-day refund window. Please refer to our official Refund Policy page or contact our developer support desk for immediate processing.
              </p>
            </div>

            <div className="bg-[#EADBCE] p-4 border border-[#16120D] space-y-1.5">
              <span className="font-bold text-[#16120D] uppercase block flex items-center gap-1">
                <Code size={14} className="text-[#16120D]" /> 4. SATIRE &amp; FAIR USE COMPLIANCE
              </span>
              <p className="text-[11px]">
                This web platform functions as an independent satirical and public-interest civic media project under Article 19(1)(a) of the Constitution of India and Section 52 of the Indian Copyright Act, 1957 (Fair Dealing).
              </p>
            </div>
          </div>
        </div>

        {/* TOP PATRONS SECTION */}
        <TopPatronsSection />

      </div>
    </div>
  );
};
