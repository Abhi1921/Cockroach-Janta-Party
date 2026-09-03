import React, { useState } from 'react';
import type { Poster } from '../data/postersData';
import { Download, Eye, Sparkles, X, ShieldAlert } from 'lucide-react';

interface PosterCardProps {
  poster: Poster;
  onSelect?: (poster: Poster) => void;
}

export const PosterCard: React.FC<PosterCardProps> = ({ poster, onSelect }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    if (onSelect) {
      onSelect(poster);
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div 
        onClick={handleOpen}
        className="group relative bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] shadow-[5px_5px_0px_0px_#16120D] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#D9572B] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden p-4 sm:p-5 select-none"
        style={{ minHeight: '340px' }}
      >
        {/* Poster Top Badge Header */}
        <div className="flex items-center justify-between border-b-2 border-white/20 pb-3 mb-4">
          <div className="flex items-center gap-1.5 bg-[#D9572B] text-white text-[9.5px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-white/20">
            <Sparkles size={10} />
            <span>CJP {poster.style.toUpperCase()}</span>
          </div>
          <span className="text-[10px] font-mono font-bold opacity-75">{poster.date}</span>
        </div>

        {/* Poster Graphic Art Box / Real Image */}
        {poster.image ? (
          <div className="relative my-auto aspect-[4/5] rounded overflow-hidden border-2 border-white/20 bg-black group-hover:scale-[1.02] transition-transform duration-300">
            <img src={poster.image} alt={poster.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <h3 className="font-serif font-black text-lg uppercase leading-tight">{poster.title}</h3>
              <p className="text-[10px] font-bold text-[#E6A100] uppercase truncate">"{poster.slogan}"</p>
            </div>
          </div>
        ) : (
          <div 
            className="my-auto p-4 border-2 border-white/10 rounded-sm text-center flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-200"
            style={{ backgroundColor: poster.bgColor, color: poster.textColor }}
          >
            {/* Subtle Parody Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 font-display text-7xl font-black uppercase select-none">
              CJP
            </div>

            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-black mb-3 border-2 border-current shadow-md"
              style={{ backgroundColor: poster.accentColor, color: '#FFFFFF' }}
            >
              🪳
            </div>

            <h3 className="font-display text-2xl sm:text-3xl uppercase leading-tight tracking-wide mb-2 font-black">
              {poster.title}
            </h3>

            <p 
              className="text-xs sm:text-sm font-extrabold uppercase tracking-wider max-w-xs leading-snug"
              style={{ color: poster.accentColor }}
            >
              "{poster.slogan}"
            </p>

            <div className="mt-4 pt-2 border-t border-current/20 text-[9px] uppercase tracking-widest opacity-80 font-mono font-bold">
              COCKROACH JANTA PARTY • OFFICIAL SATIRE
            </div>
          </div>
        )}

        {/* Poster Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-white/20 mt-4 text-xs font-black">
          <span className="text-[10px] text-[#EADBCE] uppercase tracking-wider flex items-center gap-1">
            <Download size={12} className="text-[#D9572B]" /> {poster.downloads} DOWNLOADS
          </span>

          <button className="btn-brutal h-8 px-3 text-[10px] bg-[#D9572B] text-white group-hover:bg-[#EADBCE] group-hover:text-[#16120D] flex items-center gap-1">
            <Eye size={12} /> VIEW POSTER
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 sm:p-8 max-w-lg w-full shadow-[10px_10px_0px_0px_#16120D] relative animate-dropdown text-[#16120D]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 btn-brutal p-2 bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white"
              aria-label="Close poster modal"
            >
              <X size={18} />
            </button>

            {/* Poster Large Art View */}
            <div 
              className="p-6 border-4 border-[#16120D] text-center shadow-[6px_6px_0px_0px_#16120D] mb-6 flex flex-col items-center justify-center min-h-[300px]"
              style={{ backgroundColor: poster.bgColor, color: poster.textColor }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black mb-4 border-2 border-current shadow-lg"
                style={{ backgroundColor: poster.accentColor, color: '#FFFFFF' }}
              >
                🪳
              </div>
              <h2 className="font-display text-4xl sm:text-5xl uppercase leading-none mb-3 font-black">
                {poster.title}
              </h2>
              <p 
                className="text-base sm:text-lg font-extrabold uppercase tracking-wide max-w-md mb-4"
                style={{ color: poster.accentColor }}
              >
                "{poster.slogan}"
              </p>
              <div className="text-[10px] uppercase font-mono tracking-widest border-t-2 border-current/30 pt-3">
                COCKROACH JANTA PARTY • HAR GHAR KI SARKAR • EST. 2026
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="text-xs text-[#3A332B] font-bold">
                <p>Style: <span className="uppercase text-[#D9572B] font-black">{poster.style}</span></p>
                <p>Category: <span className="uppercase font-black">{poster.category}</span></p>
              </div>

              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(`CJP SATIRE POSTER\nTitle: ${poster.title}\nSlogan: ${poster.slogan}\nCategory: ${poster.category}\nOfficial Fictional Parody Artwork - Cockroach Janata Party`)}`}
                download={`cjp_poster_${poster.id}.txt`}
                className="w-full sm:w-auto btn-brutal py-2.5 px-5 bg-[#D9572B] text-white hover:bg-[#16120D] text-xs font-black uppercase flex items-center justify-center gap-2"
              >
                <Download size={14} /> DOWNLOAD ARTWORK ASSETS
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-[#16120D]/20 text-[10px] text-[#3A332B] font-extrabold flex items-center gap-1.5">
              <ShieldAlert size={14} className="text-[#D9572B] flex-shrink-0" />
              <span>Official Fictional Satire Poster. Free for public civic advocacy sharing.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
