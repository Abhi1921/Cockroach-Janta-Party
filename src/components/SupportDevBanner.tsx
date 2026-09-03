import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Copy, Check, Lock } from 'lucide-react';

export const SupportDevBanner: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [copied, setCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const upiId = 'abhishekrajput62394-1@oksbi';

  const tiers = [
    { label: 'Chai ☕', amount: '20' },
    { label: 'Coffee ☕', amount: '50' },
    { label: 'Lunch 🍱', amount: '150' },
    { label: 'Server 💻', amount: '500' },
  ];

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="support-dev-banner my-12 max-w-[1440px] mx-auto px-4 sm:px-6">
      {/* Glassmorphic Container with Subtle Blur & Accent Glow */}
      <div className="relative bg-[#16120D]/95 backdrop-blur-xl text-[#F5EFE6] border-2 border-[#D9572B]/70 p-6 sm:p-10 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(22,18,13,0.4)] overflow-hidden">
        
        {/* Decorative Glowing Radial Gradient Backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9572B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E6A100]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: Glass Tag & Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#D9572B] text-white px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_4px_12px_rgba(217,87,43,0.4)]">
              <Heart size={14} className="fill-current text-white animate-pulse" />
              <span>SUPPORT WEBSITE DEVELOPER &amp; HOSTING</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-5xl text-white uppercase leading-[1.1] tracking-tight">
              KEEP CJP ONLINE &amp; <br />
              <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                SUPPORT THE DEV
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#EADBCE]/90 font-normal leading-relaxed max-w-xl">
              This website is single-handedly coded, hosted, and maintained by an independent open-source software developer. Voluntary tips go directly toward cloud server bandwidth, domain renewals, and open-source maintenance.
            </p>

            {/* Glassmorphic Interactive Tier Pills */}
            <div className="pt-2">
              <span className="text-[10px] font-black text-[#E6A100] uppercase tracking-widest block mb-2.5">
                SELECT TIP AMOUNT:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {tiers.map((t) => {
                  const isSelected = selectedAmount === t.amount;
                  return (
                    <button
                      key={t.amount}
                      onClick={() => setSelectedAmount(t.amount)}
                      className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all duration-300 border cursor-pointer backdrop-blur-md ${
                        isSelected
                          ? 'bg-[#D9572B] text-white border-white shadow-[0_0_20px_rgba(217,87,43,0.6)] scale-105'
                          : 'bg-[#231F1A]/80 text-[#EADBCE] border-white/20 hover:border-[#D9572B] hover:bg-[#3A332B]'
                      }`}
                    >
                      {t.label} (₹{t.amount})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="pt-4 flex flex-wrap gap-3 items-center">
              <Link
                to="/support-dev"
                className="bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white px-7 py-3.5 rounded-xl font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2 border-2 border-[#D9572B]"
              >
                <span>OPEN DEV SUPPORT PAGE</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Column: QR Scanner Box (Blurred with TAP & PAY Overlay) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-[#231F1A]/90 backdrop-blur-md border-2 border-white/20 p-6 rounded-2xl text-center shadow-2xl max-w-sm w-full relative overflow-hidden group">
              
              <div className="text-[10px] font-black uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isRevealed ? 'bg-[#27AE60] animate-pulse' : 'bg-[#D9572B] animate-ping'}`} />
                <span className={isRevealed ? 'text-[#27AE60]' : 'text-[#E6A100]'}>
                  {isRevealed ? '✅ QR UNBLURRED · SCAN TO PAY' : 'TAP &amp; PAY TO UNBLUR'}
                </span>
              </div>

              {/* QR Image Frame - Blurred by default, Tap to Unblur */}
              <div
                onClick={() => setIsRevealed(!isRevealed)}
                className="relative bg-white p-3 rounded-xl border-2 border-[#EADBCE] mb-4 shadow-inner overflow-hidden select-none cursor-pointer group"
                title="Tap to unblur QR code"
              >
                {/* The QR Image */}
                <img
                  src="/gpay_scanner.png"
                  alt="Google Pay Scanner QR Code"
                  className={`w-full h-auto object-contain mx-auto max-h-[190px] rounded transition-all duration-500 ${
                    isRevealed
                      ? 'filter blur-0 opacity-100 scale-100'
                      : 'filter blur-md opacity-40 scale-95'
                  }`}
                />

                {/* TAP & PAY Overlay on top of the blurred QR */}
                {!isRevealed && (
                  <div className="absolute inset-0 bg-[#16120D]/65 backdrop-blur-xs flex flex-col items-center justify-center text-white p-4 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#D9572B] text-white flex items-center justify-center mb-2 shadow-xl animate-bounce">
                      <Lock size={20} />
                    </div>
                    <span className="text-sm font-black uppercase tracking-wider text-center text-white bg-[#D9572B] px-3 py-1 rounded shadow-md border border-white/20">
                      TAP &amp; PAY
                    </span>
                    <span className="text-[10px] text-[#E6A100] font-extrabold mt-2">
                      Click to unblur scanner (₹{selectedAmount})
                    </span>
                  </div>
                )}
              </div>

              {/* Copy UPI ID Bar */}
              <div className="flex items-center justify-between bg-[#16120D] border border-white/20 rounded-lg p-2 text-xs">
                <span className="font-mono text-[11px] font-bold text-[#EADBCE] pl-2">{upiId}</span>
                <button
                  onClick={handleCopyUpi}
                  className="bg-[#231F1A] hover:bg-[#D9572B] text-white text-[10px] font-black px-2.5 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check size={12} className="text-[#27AE60]" /> : <Copy size={12} />}
                  <span>{copied ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
