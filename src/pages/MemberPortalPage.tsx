import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const MemberPortalPage: React.FC = () => {
  const { lang } = useLanguage();
  const [memberName, setMemberName] = useState('Abhijeet Volunteer');
  const [stateName, setStateName] = useState('Delhi National Capital Region');
  const [wardNo, setWardNo] = useState('Ward 42-A');
  const [idNumber] = useState(() => `CJP-2026-${Math.floor(100000 + Math.random() * 900000)}`);

  return (
    <div className="member-portal-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'सदस्य पोर्टल व डिजिटल आईडी | कॉकरोच जनता पार्टी' : 'CJP Member Portal & Digital ID Card | Cockroach Janta Party'}
        description="Official CJP Member Portal. Verify digital membership ID cards, preview customized swarm badges, and access delegate registry."
        canonicalUrl="https://cockroachjantapartywale.com/portal"
      />

      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            DIGITAL SWARM REGISTRY &amp; VERIFICATION
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            CJP MEMBER PORTAL
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'अपनी कॉकरोच जनता पार्टी डिजिटल सदस्यता आईडी कार्ड देखें और जन प्रतिनिधि रजिस्टर खोजें।'
              : 'Generate, preview, and verify your official CJP Digital Membership ID Badge.'}
          </p>
        </div>

        {/* Interactive Digital ID Card Preview Generator */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-2xl mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls Form */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
              CUSTOMIZE YOUR DIGITAL ID BADGE
            </span>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#16120D] mb-1">
                  Full Name / Swarm Delegate Name:
                </label>
                <input
                  type="text"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  className="w-full bg-[#EADBCE] border-2 border-[#16120D] p-2.5 text-xs font-bold text-[#16120D] focus:outline-none focus:border-[#D9572B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#16120D] mb-1">
                  State / Assembly Jurisdiction:
                </label>
                <input
                  type="text"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  className="w-full bg-[#EADBCE] border-2 border-[#16120D] p-2.5 text-xs font-bold text-[#16120D] focus:outline-none focus:border-[#D9572B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#16120D] mb-1">
                  Ward / Sector Audit Number:
                </label>
                <input
                  type="text"
                  value={wardNo}
                  onChange={(e) => setWardNo(e.target.value)}
                  className="w-full bg-[#EADBCE] border-2 border-[#16120D] p-2.5 text-xs font-bold text-[#16120D] focus:outline-none focus:border-[#D9572B]"
                />
              </div>
            </div>
          </div>

          {/* Rendered Badge Card */}
          <div className="md:col-span-6">
            <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-6 shadow-2xl relative space-y-4">
              <div className="flex justify-between items-start border-b border-white/20 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#16120D] border border-[#D9572B] p-0.5">
                    <img src="/cjp_logo_emblem.svg" alt="CJP Emblem" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-serif font-black text-sm uppercase text-[#F5EFE6] block leading-none">
                      COCKROACH JANTA PARTY
                    </span>
                    <span className="text-[8px] font-extrabold text-[#D9572B] uppercase tracking-widest block mt-0.5">
                      OFFICIAL DIGITAL SWARM BADGE
                    </span>
                  </div>
                </div>
                <span className="bg-[#D9572B] text-white text-[8px] font-black px-2 py-0.5 uppercase tracking-wider">
                  VERIFIED DELEGATE
                </span>
              </div>

              <div className="space-y-2 py-2">
                <div>
                  <span className="text-[9px] font-extrabold text-[#D9572B] uppercase block">MEMBER NAME:</span>
                  <div className="font-serif font-black text-lg text-[#F5EFE6] uppercase">{memberName || 'DELEGATE NAME'}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[8px] font-extrabold text-[#EADBCE] uppercase block">STATE:</span>
                    <div className="font-bold text-[#F5EFE6] truncate">{stateName || 'STATE'}</div>
                  </div>
                  <div>
                    <span className="text-[8px] font-extrabold text-[#EADBCE] uppercase block">WARD/SECTOR:</span>
                    <div className="font-bold text-[#F5EFE6] truncate">{wardNo || 'WARD'}</div>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-[10px] font-mono border-t border-white/10 text-[#EADBCE]">
                  <span>ID: {idNumber}</span>
                  <span className="text-emerald-400 font-bold">STATUS: ACTIVE</span>
                </div>
              </div>

              <div className="text-[8px] text-[#EADBCE] opacity-70 text-center font-mono">
                NON-ECI CIVIC COMMENTARY DELEGATE · COCKROACHJANTAPARTYWALE.COM
              </div>
            </div>
          </div>

        </div>

        {/* Quick Links Banner */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-8 border-4 border-[#16120D] shadow-xl text-center space-y-4">
          <h3 className="font-serif font-black text-2xl uppercase text-[#F5EFE6]">
            EXPLORE STATE DELEGATES REGISTRY
          </h3>
          <p className="text-xs text-[#EADBCE] max-w-lg mx-auto">
            View active CJP state chapters, registered member numbers, and regional coordinators across India.
          </p>
          <div className="pt-2">
            <Link
              to="/members"
              className="inline-flex items-center gap-2 bg-[#D9572B] text-white text-xs font-extrabold px-6 py-3 border border-white hover:bg-white hover:text-[#16120D] transition-all uppercase tracking-wider"
            >
              <span>VIEW MEMBER REGISTRY</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
