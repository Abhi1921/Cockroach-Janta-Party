import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export const DonateAbdulPage: React.FC = () => {
  const { lang } = useLanguage();

  const campaignStats = {
    target: 50000,
    raised: 38500,
    percent: 77,
    donors: 142
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

        {/* Official Non-Monetary Campaign & Legal Defense Notice Box */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl mb-12 space-y-4">
          <div className="flex items-center gap-2 text-[#D9572B] font-extrabold uppercase text-sm">
            <ShieldCheck size={20} /> OFFICIAL NON-MONETARY MOVEMENT NOTICE
          </div>
          <h3 className="font-serif font-black text-2xl uppercase text-white">
            100% NON-PARTISAN &amp; FREE LEGAL ADVOCACY
          </h3>
          <p className="text-xs text-[#EADBCE] leading-relaxed">
            Cockroach Janta Party (CJP) is a non-partisan youth civic movement. We do not collect online payments, Razorpay subscriptions, or commercial political donations. All legal support, RTI filing guidance, and student defense for Abdul and civic volunteers are provided 100% free of cost through our pro-bono legal panel.
          </p>
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
