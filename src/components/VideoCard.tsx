import React, { useState } from 'react';
import type { VideoItem } from '../data/videosData';
import { Play, X, ShieldCheck } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setPlayerOpen(true)}
        className="group relative bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] shadow-[5px_5px_0px_0px_#16120D] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#D9572B] transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden p-4 select-none"
      >
        {/* Top Badge Bar */}
        <div className="flex items-center justify-between border-b-2 border-white/20 pb-2.5 mb-3">
          <span className="bg-[#D9572B] text-white text-[9.5px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-white/20">
            {video.badge}
          </span>
          <span className="text-[10px] font-mono text-[#EADBCE] font-bold">{video.duration}</span>
        </div>

        {/* Video Thumbnail Box with Play Overlay */}
        <div className="relative aspect-video border-2 border-white/10 bg-[#231F1A] overflow-hidden my-1 flex items-center justify-center">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#D9572B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play size={20} className="fill-current ml-0.5" />
            </div>
          </div>
        </div>

        {/* Video Information */}
        <div className="mt-3">
          <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-wider block mb-1">
            {video.category} • {video.publishDate}
          </span>
          <h4 className="font-display text-xl uppercase tracking-wide text-white group-hover:text-[#D9572B] transition-colors leading-tight font-black">
            {video.title}
          </h4>
          <p className="text-[11px] text-[#EADBCE] font-medium leading-snug line-clamp-2 mt-1.5">
            {video.description}
          </p>
        </div>

        {/* Footer Credit */}
        <div className="mt-3 pt-2 border-t border-white/10 text-[9px] text-[#EADBCE] font-mono flex items-center justify-between">
          <span>{video.attribution}</span>
          <span className="text-[#D9572B] font-bold">WATCH VIDEO →</span>
        </div>
      </div>

      {/* Lightbox Video Player Modal */}
      {playerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPlayerOpen(false)}
        >
          <div
            className="bg-[#F5EFE6] border-4 border-[#16120D] p-5 sm:p-7 max-w-3xl w-full shadow-[12px_12px_0px_0px_#16120D] relative animate-dropdown text-[#16120D]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPlayerOpen(false)}
              className="absolute top-3 right-3 btn-brutal p-2 bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white"
              aria-label="Close video player modal"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <span className="bg-[#D9572B] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 inline-block mb-1 border border-[#16120D]">
                {video.category} • {video.badge}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[#16120D] uppercase leading-none font-black">
                {video.title}
              </h3>
            </div>

            {/* Video Iframe Embed Player */}
            <div className="aspect-video bg-black border-4 border-[#16120D] shadow-inner mb-4 overflow-hidden">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4">
              {video.description}
            </p>

            <div className="pt-3 border-t-2 border-[#16120D]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-bold text-[#3A332B]">
              <div className="flex items-center gap-1 text-[#D9572B]">
                <ShieldCheck size={14} />
                <span>ATTRIBUTION: {video.attribution}</span>
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal py-2 px-4 bg-[#16120D] text-white hover:bg-[#D9572B] text-xs font-black uppercase"
              >
                OPEN ON ORIGINAL PLATFORM →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
