import React, { useState } from 'react';
import type { Meme } from '../data/memesData';
import { ThumbsUp, Share2, X } from 'lucide-react';

interface MemeCardProps {
  meme: Meme;
}

export const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasUpvoted) {
      setUpvotes(prev => prev + 1);
      setHasUpvoted(true);
    } else {
      setUpvotes(prev => prev - 1);
      setHasUpvoted(false);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText?.(`${meme.title}: "${meme.caption}" - Cockroach Janata Party Satire`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div 
        onClick={() => setModalOpen(true)}
        className="group relative bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] shadow-[5px_5px_0px_0px_#16120D] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#16120D] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden p-4 sm:p-5 select-none"
      >
        {/* Top Tag & Category */}
        <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-3 mb-4">
          <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-[#16120D]">
            #{meme.tag}
          </span>
          <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
            {meme.category}
          </span>
        </div>

        {/* Meme Canvas Display */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-5 border-2 border-[#16120D] shadow-[3px_3px_0px_0px_#D9572B] my-2 text-center flex flex-col items-center justify-center min-h-[180px]">
          <div className="w-10 h-10 rounded-full bg-[#D9572B] text-white flex items-center justify-center text-lg font-black mb-3 border border-white">
            🪳
          </div>
          <h4 className="font-display text-xl sm:text-2xl uppercase tracking-wide mb-2 text-[#FFB703] font-black leading-tight">
            {meme.title}
          </h4>
          <p className="text-xs sm:text-sm font-sans font-bold leading-snug text-[#F5EFE6] italic">
            "{meme.caption}"
          </p>
        </div>

        {/* Footer Info & Actions */}
        <div className="flex items-center justify-between pt-3 border-t-2 border-[#16120D] mt-3">
          <div className="text-[10px] font-extrabold text-[#3A332B]">
            BY <span className="text-[#16120D]">{meme.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleUpvote}
              className={`btn-brutal h-8 px-2.5 text-[11px] flex items-center gap-1.5 cursor-pointer ${
                hasUpvoted ? 'bg-[#D9572B] text-white' : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
              title="Upvote meme"
            >
              <ThumbsUp size={12} className={hasUpvoted ? 'fill-current' : ''} />
              <span>{upvotes}</span>
            </button>

            <button
              onClick={handleShare}
              className="btn-brutal h-8 px-2.5 text-[11px] bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white flex items-center gap-1 cursor-pointer"
              title="Share meme caption"
            >
              <Share2 size={12} />
              <span>{copied ? 'COPIED!' : 'SHARE'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 sm:p-8 max-w-lg w-full shadow-[10px_10px_0px_0px_#16120D] relative animate-dropdown text-[#16120D]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 btn-brutal p-2 bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white"
              aria-label="Close meme modal"
            >
              <X size={18} />
            </button>

            <div className="bg-[#16120D] text-[#F5EFE6] p-8 border-4 border-[#16120D] shadow-[6px_6px_0px_0px_#D9572B] text-center my-4">
              <div className="w-14 h-14 rounded-full bg-[#D9572B] text-white flex items-center justify-center text-2xl font-black mb-4 mx-auto border-2 border-white">
                🪳
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#FFB703] uppercase leading-none mb-3 font-black">
                {meme.title}
              </h2>
              <p className="text-base sm:text-lg font-bold italic leading-relaxed text-[#F5EFE6]">
                "{meme.caption}"
              </p>
              <div className="text-[10px] text-[#D9572B] uppercase font-mono tracking-widest border-t border-white/20 pt-3 mt-4">
                COCKROACH JANTA PARTY MEME GUILD • #{meme.tag}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-[#3A332B]">
                AUTHOR: {meme.author} • {meme.date}
              </span>
              <button
                onClick={handleShare}
                className="btn-brutal py-2 px-4 bg-[#D9572B] text-white hover:bg-[#16120D] text-xs font-black uppercase flex items-center gap-2"
              >
                <Share2 size={14} />
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY MEME TEXT'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
