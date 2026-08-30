import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import { Search } from 'lucide-react';

export const ArticlesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'CIVIC SANITATION', 'PUBLIC ACCOUNTABILITY', 'PUBLIC HEALTH'];

  const filteredArticles = newsData.filter(art => {
    const matchesQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'ALL' || art.category === activeCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="articles-page py-12 bg-[#0d0a07] text-[#f1e8d2] font-sans">
      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="mb-10">
          <span className="inline-block bg-[#c09a25]/10 text-[#c09a25] border border-[#c09a25] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            INDEPENDENT JOURNAL
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#f1e8d2] mb-4">
            THE CJP JOURNAL
          </h1>
          <p className="text-[#9e917c] text-sm max-w-xl font-medium">
            Empirical ward audit notes, contractor warranty disclosures, and field investigation reports.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-[#140f0a] border border-[rgba(241,232,210,0.15)] p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9e917c]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, RTI notes..."
              className="w-full bg-[#0d0a07] border border-[rgba(241,232,210,0.2)] pl-9 pr-4 py-2 text-xs text-[#f1e8d2] focus:border-[#d9572b] outline-none"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-extrabold px-3.5 py-1.5 border ${
                  activeCategory === cat
                    ? 'bg-[#d9572b] text-white border-[#d9572b]'
                    : 'bg-[#0d0a07] text-[#9e917c] border-[rgba(241,232,210,0.2)] hover:border-[#c09a25]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div key={art.slug} className="bg-[#140f0a] border border-[rgba(241,232,210,0.15)] p-6 flex flex-col justify-between hover:border-[#c09a25] transition-all">
              <div>
                <span className="text-[10px] font-extrabold text-[#d9572b] uppercase tracking-widest block mb-2">{art.category}</span>
                <h2 className="font-serif font-black text-xl text-[#f1e8d2] mb-3 leading-snug">{art.title}</h2>
                <p className="text-[#9e917c] text-xs leading-relaxed mb-6 font-medium">{art.summary}</p>
              </div>

              <div className="pt-4 border-t border-[rgba(241,232,210,0.1)] flex justify-between items-center text-[10px] text-[#9e917c]">
                <span>By {art.author.name}</span>
                <Link to={`/articles/${art.slug}`} className="font-extrabold text-[#c09a25] hover:underline">
                  READ STORY →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
