import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MemeCard } from '../components/MemeCard';
import { memesData } from '../data/memesData';
import { Laugh, Search, Sparkles } from 'lucide-react';

export const MemesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['ALL', 'bureaucracy', 'roads', 'kitchen', 'elections', 'education', 'tech', 'general'];

  const filteredMemes = memesData.filter(meme => {
    const matchesCategory = selectedCategory === 'ALL' || meme.category === selectedCategory;
    const matchesSearch = !searchTerm || meme.title.toLowerCase().includes(searchTerm.toLowerCase()) || meme.caption.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="memes-page py-14 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="Official CJP Satirical Memes & Dark Humor Archive"
        description="Explore, upvote, and share 30+ original Cockroach Janata Party (CJP) satirical memes on municipal potholes, RTI bureaucracy, and student rights."
        canonicalUrl="https://cockroachjantapartywale.com/memes"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        <Breadcrumbs items={[{ label: 'CIVIC SATIRE & MEMES' }]} />

        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
            <Laugh size={14} className="text-[#D9572B]" /> OFFICIAL CJP MEME GUILD
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#16120D] uppercase leading-none font-black">
            CJP MEME ARCHIVE ({memesData.length} MEMES)
          </h1>
          <p className="text-sm sm:text-base text-[#3A332B] font-medium leading-relaxed">
            Upvote, download, and share 30+ original satirical memes exposing municipal apathy, road contractor warranties, and kitchen cockroach survival.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-5 shadow-[6px_6px_0px_0px_#16120D] mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[#16120D] pb-4">
            <span className="text-xs font-black text-[#16120D] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#D9572B]" /> FILTER BY CATEGORY ({filteredMemes.length} SHOWING)
            </span>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search meme titles or captions..."
                className="w-full bg-[#EADBCE] border-2 border-[#16120D] px-3 py-1.5 text-xs font-extrabold text-[#16120D] outline-none focus:border-[#D9572B]"
              />
              <Search size={14} className="absolute right-3 top-2.5 text-[#D9572B]" />
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn-brutal h-8 px-4 text-xs font-black uppercase cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D9572B] text-white shadow-[2px_2px_0px_0px_#16120D]'
                    : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[1.5px_1.5px_0px_0px_#16120D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 30 Meme Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredMemes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>

      </div>
    </div>
  );
};
