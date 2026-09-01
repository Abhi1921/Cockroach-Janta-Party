import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { TopPatronsSection } from '../components/TopPatronsSection';
import { ShieldAlert, Code } from 'lucide-react';

export const SupportDevPage: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedTier, setSelectedTier] = useState({ id: 'coffee', label: 'Buy a Coffee ☕', amount: '50', desc: 'Sponsor a cold coffee for midnight coding sessions' });

  const tiers = [
    { id: 'chai', label: 'Cutting Chai ☕', amount: '20', desc: 'Buy a quick hot chai' },
    { id: 'coffee', label: 'Cold Coffee ☕', amount: '50', desc: 'Sponsor a coffee during coding' },
    { id: 'lunch', label: 'Developer Thali 🍱', amount: '150', desc: 'Sponsor a hearty lunch meal' },
    { id: 'dinner', label: 'Full Dinner 🍽️', amount: '300', desc: 'Sponsor a late night dinner' },
    { id: 'server', label: 'Server Hosting 💻', amount: '500', desc: 'Host 1 month of cloud server bandwidth' }
  ];

  return (
    <div className="support-dev-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'डेवलपर को सपोर्ट करें | कॉकरोच जनता पार्टी' : 'Support Website Developer | Cockroach Janta Party Wale'}
        description="Support the independent developer behind Cockroach Janta Party portal. Scan UPI GPay QR code for voluntary hosting & software tips."
        canonicalUrl="https://cockroachjantapartywale.com/support-dev"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            INDEPENDENT OPEN-SOURCE DEVELOPER SUPPORT
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            SUPPORT THE WEBSITE DEVELOPER
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            Direct voluntary tips for server bandwidth, domain registration, and open-source maintenance.
          </p>
        </div>

        {/* Developer Personal Note Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 mb-12">
          <div className="flex items-center gap-3 border-b-2 border-[#16120D] pb-4">
            <Code size={28} className="text-[#D9572B]" />
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                DEVELOPER NOTE
              </span>
              <h2 className="font-serif font-black text-xl text-[#16120D] uppercase">
                &ldquo;MAIN INDEPENDENTLY YE WEBSITE CODE PAR RAHON HOON&rdquo;
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#3A332B] font-medium leading-relaxed">
            <p>
              Ye page Cockroach Janta Party ka election ya political party fund nahi hai. Main independently is website ko code, design, host aur maintain kar raha hoon — din-raat.
            </p>
            <p>
              Website hosting, domain costs, image generation, aur server bandwidth maintenance ke liye voluntary software tip help karti hai. Agar aapko mera kaam pasand aaya, toh aap chai, coffee ya server tier choose karke scan support kar sakte hain.
            </p>
          </div>
        </div>

        {/* Scanner & Tier Selection Box */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Tiers Selector */}
          <div className="md:col-span-7 space-y-4">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
              1. SELECT CONTRIBUTION TIER:
            </span>
            <div className="space-y-2.5">
              {tiers.map((tier) => {
                const isSelected = selectedTier.id === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`w-full p-3.5 border-2 text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#D9572B] text-white border-white shadow-lg'
                        : 'bg-[#231F1A] text-[#EADBCE] border-white/20 hover:border-[#D9572B]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm uppercase">{tier.label}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{tier.desc}</div>
                    </div>
                    <div className="font-mono font-black text-base text-right">₹{tier.amount}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scanner Box */}
          <div className="md:col-span-5 text-center bg-[#231F1A] p-6 border-2 border-white/20">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-3">
              2. SCAN WITH GPAY / ANY UPI APP
            </span>

            <div className="bg-white p-4 border-4 border-[#EADBCE] max-w-[220px] mx-auto mb-4 shadow-2xl">
              <img
                src="/gpay_scanner.png"
                alt="Google Pay Scanner QR Code"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            <div className="bg-[#D9572B] text-white text-xs font-black py-1.5 px-3 uppercase tracking-wider inline-block mb-3">
              TIER: ₹{selectedTier.amount} ({selectedTier.label})
            </div>

            <p className="text-[10px] text-[#EADBCE] font-mono leading-tight">
              Scan with Google Pay, PhonePe, Paytm, BHIM, or any UPI App
            </p>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg flex items-start gap-3 mb-12">
          <ShieldAlert size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] space-y-1">
            <h4 className="font-serif font-black text-sm text-[#16120D] uppercase">
              NON-POLITICAL VOLUNTARY SOFTWARE TIP POLICY
            </h4>
            <p className="leading-relaxed font-medium">
              All payments made via this page are voluntary personal gifts/tips to the web developer to cover server and maintenance costs. They do not constitute political party donations, subscription fees, or electoral fund contributions.
            </p>
          </div>
        </div>

        {/* TOP PATRONS SECTION matching Image 2 */}
        <TopPatronsSection />

      </div>
    </div>
  );
};
