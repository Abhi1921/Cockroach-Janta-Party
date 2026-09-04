import React, { useState } from 'react';
import { Scale, MessageSquare, Share2, TrendingUp } from 'lucide-react';
import { LegalAidModal } from './LegalAidModal';
import { SocialShareModal } from './SocialShareModal';
import { SEOAdsGuideModal } from './SEOAdsGuideModal';

export const FloatingWidgets: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [seoGuideOpen, setSeoGuideOpen] = useState(false);

  return (
    <>
      <LegalAidModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} />
      <SocialShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
      <SEOAdsGuideModal isOpen={seoGuideOpen} onClose={() => setSeoGuideOpen(false)} />

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end font-sans">
        
        {/* VIRAL SHARE BUTTON */}
        <button
          onClick={() => setShareModalOpen(true)}
          type="button"
          className="bg-[#F59E0B] text-black text-xs font-black px-3.5 py-2 border-2 border-[#16120D] shadow-[3px_3px_0px_0px_#16120D] hover:bg-[#D97706] hover:text-white transition-all flex items-center gap-2 uppercase tracking-wider rounded-lg"
          aria-label="Open Social Share Modal"
        >
          <Share2 size={15} />
          <span>📢 VIRAL SHARE</span>
        </button>

        {/* SEO & ADS GUIDE BUTTON */}
        <button
          onClick={() => setSeoGuideOpen(true)}
          type="button"
          className="bg-emerald-600 text-white text-xs font-black px-3.5 py-2 border-2 border-[#16120D] shadow-[3px_3px_0px_0px_#16120D] hover:bg-emerald-700 transition-all flex items-center gap-2 uppercase tracking-wider rounded-lg"
          aria-label="Open SEO & Ads Guide Modal"
        >
          <TrendingUp size={15} />
          <span>📈 SEO &amp; ADS GUIDE</span>
        </button>

        {/* FREE LEGAL AID 24/7 BUTTON */}
        <button
          onClick={() => setLegalModalOpen(true)}
          type="button"
          className="bg-[#D9A02B] text-[#16120D] text-xs font-black px-4 py-2.5 border-2 border-[#16120D] shadow-[4px_4px_0px_0px_#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all flex items-center gap-2 uppercase tracking-wider group rounded-lg"
          aria-label="Open Free Legal Aid Modal"
        >
          <Scale size={15} className="text-[#16120D] group-hover:text-[#D9A02B] transition-colors" />
          <span>FREE LEGAL AID 24/7</span>
        </button>

        {/* SWARM CHAT BUTTON */}
        <a
          href="https://t.me/thecockroachchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#16120D] text-[#F5EFE6] text-xs font-black px-4 py-2.5 border-2 border-[#16120D] shadow-[4px_4px_0px_0px_#D9572B] hover:bg-[#D9572B] hover:text-white transition-all flex items-center gap-2 uppercase tracking-wider rounded-full"
        >
          <MessageSquare size={15} className="text-[#D9572B] group-hover:text-white" />
          <span>SWARM CHAT</span>
        </a>

      </div>
    </>
  );
};
