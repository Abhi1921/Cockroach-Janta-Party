import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, Heart, Copy, ExternalLink } from 'lucide-react';

export const DonateAbdulPage: React.FC = () => {
  const { lang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('500');

  const campaignStats = {
    target: 50000,
    raised: 38500,
    percent: 77,
    donors: 142
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('cjpindia@upi');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="donate-abdul-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title={lang === 'hi' ? 'अब्दुल को डोनेट करें | कॉकरोच जनता पार्टी' : 'Donate To Abdul — CJP Civic & Legal Defense Campaign'}
        description="Official Cockroach Janta Party support campaign for Abdul: Emergency legal defense fund, family assistance, and civic assistance."
        canonicalUrl="https://cockroachjantapartywale.com/campaign/donate-to-abdul"
      />

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Campaign Header Badge */}
        <div className="mb-10 text-center">
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4 border border-[#16120D]">
            OFFICIAL CJP CIVIC CAMPAIGN · EMERGENCY LEGAL &amp; CIVIC AID
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            DONATE TO ABDUL
          </h1>
          <p className="text-xs md:text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            STAND WITH ABDUL — EMERGENCY DEFENSE &amp; FAMILY CIVIC SUPPORT FUND
          </p>
        </div>

        {/* Progress Bar & Campaign Metrics Box */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 md:p-8 shadow-2xl mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b-2 border-[#16120D] pb-4">
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                CAMPAIGN FUNDRAISING STATUS
              </span>
              <div className="font-serif font-black text-3xl md:text-4xl text-[#16120D]">
                ₹{campaignStats.raised.toLocaleString()} <span className="text-xs text-[#3A332B] font-mono font-normal">RAISED OF ₹{campaignStats.target.toLocaleString()} GOAL</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-[#16120D] text-[#F5EFE6] text-xs font-black px-3 py-1.5 uppercase font-mono">
                {campaignStats.percent}% COMPLETED
              </span>
              <span className="bg-[#D9A02B] text-[#16120D] text-xs font-black px-3 py-1.5 uppercase font-mono">
                {campaignStats.donors} SUPPORTERS
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#EADBCE] border-2 border-[#16120D] h-6 relative overflow-hidden">
            <div
              className="bg-[#D9572B] h-full transition-all duration-1000 border-r-2 border-[#16120D]"
              style={{ width: `${campaignStats.percent}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#3A332B] uppercase font-mono">
            <span>₹0 STARTED</span>
            <span>TARGET: ₹50,000</span>
          </div>
        </div>

        {/* Campaign Background Story */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl mb-12 space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          <div className="flex items-center gap-3 border-b-2 border-[#16120D] pb-4">
            <Heart size={28} className="text-[#D9572B]" />
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                WHY ABDUL NEEDS OUR SUPPORT
              </span>
              <h2 className="font-serif font-black text-xl text-[#16120D] uppercase">
                CIVIC RESIGNATION &amp; LEGAL PRESERVATION FUND
              </h2>
            </div>
          </div>

          <p>
            Abdul is a dedicated youth advocate and CJP community volunteer who stood up for municipal accountability, questioning unauthorized sewer construction and student rights in his locality. Following his vocal stance, he faced legal intimidation, court filing expenses, and financial strain.
          </p>

          <p>
            Cockroach Janta Party has set up this 100% transparent crowd-support campaign to cover Abdul&apos;s legal advocate retainers, court documentation stamps, and immediate family sustenance while the case is reviewed.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#EADBCE] border border-[#16120D] p-4 text-center">
              <span className="font-serif font-black text-lg text-[#16120D] block">40%</span>
              <span className="text-[9px] font-extrabold text-[#D9572B] uppercase block">LEGAL ADVOCATE FEES</span>
            </div>
            <div className="bg-[#EADBCE] border border-[#16120D] p-4 text-center">
              <span className="font-serif font-black text-lg text-[#16120D] block">35%</span>
              <span className="text-[9px] font-extrabold text-[#D9572B] uppercase block">FAMILY SUSTENANCE</span>
            </div>
            <div className="bg-[#EADBCE] border border-[#16120D] p-4 text-center">
              <span className="font-serif font-black text-lg text-[#16120D] block">25%</span>
              <span className="text-[9px] font-extrabold text-[#D9572B] uppercase block">RTI &amp; COURT PAPERS</span>
            </div>
          </div>
        </div>

        {/* Contribution & UPI Scanner Box */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Quick Amounts */}
          <div className="md:col-span-7 space-y-5">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
              CHOOSE CONTRIBUTION AMOUNT:
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['100', '250', '500', '1000'].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelectedAmount(amt)}
                  className={`p-3.5 border-2 text-center transition-all font-mono font-black text-sm ${
                    selectedAmount === amt
                      ? 'bg-[#D9572B] text-white border-white shadow-lg'
                      : 'bg-[#231F1A] text-[#EADBCE] border-white/20 hover:border-[#D9572B]'
                  }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <div className="bg-[#231F1A] border border-white/10 p-4 space-y-2">
              <div className="flex justify-between items-center text-xs text-[#EADBCE]">
                <span>UPI ID: <strong className="text-white font-mono">cjpindia@upi</strong></span>
                <button
                  onClick={handleCopyUPI}
                  className="bg-[#D9572B] text-white text-[10px] font-extrabold px-2.5 py-1 uppercase hover:bg-white hover:text-[#16120D] transition-colors inline-flex items-center gap-1"
                >
                  <Copy size={11} />
                  <span>{copied ? 'COPIED!' : 'COPY UPI'}</span>
                </button>
              </div>
              <p className="text-[10px] text-[#EADBCE]/70">
                Direct UPI transfers go 100% to the verified defense escrow account.
              </p>
            </div>
          </div>

          {/* Scanner Box */}
          <div className="md:col-span-5 text-center bg-[#231F1A] p-6 border-2 border-white/20">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-3">
              SCAN WITH ANY UPI APP
            </span>

            <div className="bg-white p-4 border-4 border-[#EADBCE] max-w-[220px] mx-auto mb-4 shadow-2xl">
              <img
                src="/gpay_scanner.png"
                alt="UPI Scanner QR Code"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            <div className="bg-[#D9572B] text-white text-xs font-black py-1.5 px-3 uppercase tracking-wider inline-block mb-2">
              SELECTED: ₹{selectedAmount}
            </div>

            <p className="text-[10px] text-[#EADBCE] font-mono">
              GPay, PhonePe, Paytm, BHIM, or Cred
            </p>
          </div>

        </div>

        {/* Legal Aid Link Disclaimer */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-[#D9572B] flex-shrink-0" />
            <div className="text-xs text-[#3A332B]">
              <h4 className="font-serif font-black text-sm text-[#16120D] uppercase">
                NEED LEGAL HELP YOURSELF?
              </h4>
              <p className="font-medium">
                CJP provides 24/7 Free Legal Aid for students &amp; citizens facing legal harassment.
              </p>
            </div>
          </div>

          <a
            href="https://www.cjplegalaid.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase px-4 py-2.5 border-2 border-[#16120D] hover:bg-[#D9572B] transition-all flex-shrink-0 flex items-center gap-1.5"
          >
            <span>CJP LEGAL AID</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </div>
  );
};
