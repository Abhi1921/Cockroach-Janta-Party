import React, { useState } from 'react';
import { Scale, MessageSquare } from 'lucide-react';
import { LegalAidModal } from './LegalAidModal';

export const FloatingWidgets: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <>
      <LegalAidModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} />

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end font-sans">
        
        {/* FREE LEGAL AID 24/7 BUTTON */}
        <button
          onClick={() => setLegalModalOpen(true)}
          type="button"
          className="bg-[#D9A02B] text-[#16120D] text-xs font-black px-4 py-2.5 border-2 border-[#16120D] shadow-[4px_4px_0px_0px_#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all flex items-center gap-2 uppercase tracking-wider group"
          aria-label="Open Free Legal Aid Modal"
        >
          <Scale size={15} className="text-[#16120D] group-hover:text-[#D9A02B] transition-colors" />
          <span>FREE LEGAL AID 24/7</span>
        </button>

        {/* SWARM CHAT BUTTON matching Image 3 */}
        <a
          href="https://t.me/cjpindia"
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
