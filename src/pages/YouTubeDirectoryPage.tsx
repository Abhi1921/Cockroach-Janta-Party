import React, { useState } from 'react';
import { YOUTUBE_MASTER_DATABASE, type YouTubeVideoRecord } from '../data/masterArchiveData';
import { Video, Filter, PlayCircle } from 'lucide-react';

export const YouTubeDirectoryPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');

  const filteredVideos = YOUTUBE_MASTER_DATABASE.filter(video => {
    return categoryFilter === 'ALL' || video.category === categoryFilter;
  });

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-[#1D1712] border-2 border-red-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-semibold uppercase tracking-wider">
            <Video className="w-4 h-4" /> YouTube Master Directory
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            CJP YouTube Video & Channel Archive
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl">
            Curated database of third-party news coverage (The Lallantop, Manish Kasyap), official speeches, student rally livestreams, and member interviews. Every video includes verified metadata without hotlinking copyrighted stream files.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Filter className="w-4 h-4 text-red-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-[#2A1E17] border border-red-500/30 rounded-lg text-xs text-white focus:outline-none"
            >
              <option value="ALL">Show All Categories</option>
              <option value="NEWS_COVERAGE">News Coverage (Lallantop, etc.)</option>
              <option value="OFFICIAL">Official CJP Videos</option>
              <option value="MEMBER_VIDEO">Member & Rally Footage</option>
              <option value="INTERVIEW">Interviews & Press Conferences</option>
            </select>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((v: YouTubeVideoRecord) => (
            <div key={v.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-red-500/50 transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[#EADBCE]/10 pb-2">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                    {v.category}
                  </span>
                  <span className="text-xs text-[#EADBCE]/50 font-mono">{v.duration}</span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug line-clamp-2">{v.title}</h3>
                <p className="text-xs text-[#EADBCE]/70 line-clamp-3">{v.description}</p>

                <div className="space-y-1 text-xs text-[#EADBCE]/60 bg-[#2A1E17] p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span>Channel:</span>
                    <strong className="text-white">{v.channelName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Uploaded:</span>
                    <span>{v.uploadDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Views:</span>
                    <span className="text-emerald-400 font-bold">{v.views}</span>
                  </div>
                </div>
              </div>

              <a
                href={v.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-lg transition"
              >
                <PlayCircle className="w-4 h-4" /> Open Video on YouTube
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
