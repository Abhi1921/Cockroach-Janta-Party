import React, { useState } from 'react';
import { SOCIAL_MEDIA_DATABASE, type SocialMediaPostRecord } from '../data/masterArchiveData';
import { Share2, ExternalLink, Filter } from 'lucide-react';

export const SocialDirectoryPage: React.FC = () => {
  const [platformFilter, setPlatformFilter] = useState<string>('ALL');

  const filteredPosts = SOCIAL_MEDIA_DATABASE.filter(post => {
    return platformFilter === 'ALL' || post.platform === platformFilter;
  });

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-[#1D1712] border-2 border-blue-500/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs font-semibold uppercase tracking-wider">
            <Share2 className="w-4 h-4" /> Multi-Platform Social Directory
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            CJP Social Media Accounts & Viral Posts Archive
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl">
            Directory tracking official handles, founder profiles, discovered accounts (such as @CJP_2029), and viral posts across X/Twitter, Instagram, Facebook, and Telegram with verified status logging.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Filter className="w-4 h-4 text-blue-400" />
            <select
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
              className="px-4 py-2 bg-[#2A1E17] border border-blue-500/30 rounded-lg text-xs text-white focus:outline-none"
            >
              <option value="ALL">Show All Platforms</option>
              <option value="X/Twitter">X / Twitter</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Telegram">Telegram</option>
            </select>
          </div>
        </div>

        {/* Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post: SocialMediaPostRecord) => (
            <div key={post.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#EADBCE]/10 pb-3">
                  <div>
                    <span className="text-xs font-bold text-blue-400 block">{post.platform}</span>
                    <span className="text-base font-bold text-white">{post.account}</span>
                  </div>
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/30 px-2.5 py-1 rounded-full">
                    {post.status}
                  </span>
                </div>

                <div className="bg-[#2A1E17] border border-[#EADBCE]/10 p-4 rounded-lg italic text-xs text-white">
                  "{post.caption}"
                </div>

                <div className="text-xs text-[#EADBCE]/70 space-y-1">
                  <div><strong className="text-white">Significance:</strong> {post.significance}</div>
                  <div><strong className="text-white">Hashtags:</strong> {post.hashtags.join(', ')}</div>
                  <div><strong className="text-white">Date Reported:</strong> {post.date}</div>
                </div>
              </div>

              <a
                href={post.postUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2A1E17] hover:bg-[#38281E] text-[#D9572B] hover:text-white border border-[#D9572B]/30 text-xs font-bold py-2.5 rounded-lg transition"
              >
                <ExternalLink className="w-3.5 h-3.5" /> View Post on {post.platform}
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
