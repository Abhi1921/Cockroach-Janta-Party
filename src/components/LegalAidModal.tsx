import React from 'react';
import { X, Scale, ExternalLink } from 'lucide-react';

interface LegalAidModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalAidModal: React.FC<LegalAidModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleRedirect = () => {
    window.open('https://www.cjplegalaid.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 selection:bg-[#D9572B] selection:text-white animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Box matching Image 1 */}
      <div
        className="bg-[#F6F0E4] border-2 border-[#16120D] max-w-lg w-full shadow-[8px_8px_0px_0px_#D9A02B] relative text-[#16120D] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#EADBCE] border-b-2 border-[#16120D] px-5 py-3 flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#16120D]">
            FREE LEGAL AID, 24/7 (OFFICIAL CJP)
          </span>
          <button
            onClick={onClose}
            className="text-[#16120D] hover:text-[#D9572B] p-1 transition-colors"
            aria-label="Close modal"
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-5">
          <h2 className="font-serif font-black text-3xl md:text-4xl text-[#16120D] leading-tight">
            Justice Shouldn&apos;t Wait.
          </h2>

          <p className="text-xs md:text-sm text-[#3A332B] font-medium leading-relaxed">
            Free, confidential legal help from verified advocates. If you are arrested, you have rights. We are here to help you understand and protect those rights.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={handleRedirect}
              type="button"
              className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all shadow-sm flex items-center gap-2"
            >
              <span>GET LEGAL HELP</span>
              <ExternalLink size={14} />
            </button>

            <button
              onClick={handleRedirect}
              type="button"
              className="text-[#16120D] hover:text-[#D9572B] text-xs font-extrabold uppercase underline underline-offset-4 tracking-wider transition-colors flex items-center gap-1"
            >
              <span>I&apos;M AN ADVOCATE</span>
              <Scale size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
