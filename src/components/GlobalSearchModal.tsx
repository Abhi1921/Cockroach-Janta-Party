import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, Megaphone, AlertCircle, Image, Laugh, BookOpen, Video, ArrowRight } from 'lucide-react';
import { newsData } from '../data/newsData';
import { campaignsData } from '../data/campaignsData';
import { issuesData } from '../data/issuesData';
import { postersData } from '../data/postersData';
import { memesData } from '../data/memesData';
import { glossaryData } from '../data/glossaryData';
import { videosData } from '../data/videosData';
import { membersData } from '../data/membersData';
import { faqsData } from '../data/faqsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search Results across datasets
  const matchingArticles = q ? newsData.filter(a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)) : [];
  const matchingCampaigns = q ? campaignsData.filter(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q)) : [];
  const matchingIssues = q ? issuesData.filter(i => i.title.toLowerCase().includes(q) || (i.problem || i.whatIsIssue || '').toLowerCase().includes(q)) : [];
  const matchingPosters = q ? postersData.filter(p => p.title.toLowerCase().includes(q) || p.slogan.toLowerCase().includes(q)) : [];
  const matchingMemes = q ? memesData.filter(m => m.title.toLowerCase().includes(q) || m.caption.toLowerCase().includes(q)) : [];
  const matchingGlossary = q ? glossaryData.filter(g => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)) : [];
  const matchingVideos = q ? videosData.filter(v => v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q)) : [];
  const matchingMembers = q ? membersData.filter(m => m.name.toLowerCase().includes(q) || m.city.toLowerCase().includes(q)) : [];
  const matchingFaqs = q ? faqsData.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) : [];

  const totalResults = matchingArticles.length + matchingCampaigns.length + matchingIssues.length + matchingPosters.length + matchingMemes.length + matchingGlossary.length + matchingVideos.length + matchingMembers.length + matchingFaqs.length;

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-16 px-4 pb-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F5EFE6] border-4 border-[#16120D] p-5 sm:p-7 max-w-3xl w-full shadow-[10px_10px_0px_0px_#16120D] relative animate-dropdown text-[#16120D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-4 mb-5">
          <div className="flex items-center gap-2 font-display text-2xl uppercase tracking-wide text-[#16120D] font-black">
            <Search size={22} className="text-[#D9572B]" />
            <span>GLOBAL CJP SEARCH ENGINE</span>
          </div>
          <button
            onClick={onClose}
            className="btn-brutal p-1.5 bg-[#EADBCE] text-[#16120D] hover:bg-[#D9572B] hover:text-white"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, campaigns, issues, posters, memes, glossary, videos..."
            autoFocus
            className="w-full bg-[#EADBCE] border-3 border-[#16120D] px-4 py-3.5 pl-11 text-sm font-extrabold text-[#16120D] outline-none focus:border-[#D9572B] transition-colors shadow-inner"
          />
          <Search size={18} className="absolute left-4 top-4 text-[#D9572B]" />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-3.5 text-xs font-black text-[#16120D] hover:text-[#D9572B]"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Results Container */}
        {!q ? (
          <div className="text-center py-10 text-xs font-bold text-[#3A332B] space-y-2">
            <p className="uppercase text-[#D9572B] font-black">TYPE TO SEARCH ACROSS 10 CJP DATASETS</p>
            <p>Try searching for: <span className="underline">Pothole</span>, <span className="underline">Black Monday</span>, <span className="underline">School Thik Karo</span>, <span className="underline">RTI</span>, <span className="underline">Dimagi Naxal</span></p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-10 text-xs font-bold text-[#3A332B] space-y-2">
            <AlertCircle size={28} className="mx-auto text-[#D9572B]" />
            <p className="uppercase font-black text-sm text-[#16120D]">NO MATCHES FOUND FOR "{query}"</p>
            <p>Try broadening your search term or check spelling.</p>
          </div>
        ) : (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 no-scrollbar">
            
            {/* Articles */}
            {matchingArticles.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block flex items-center gap-1">
                  <FileText size={12} /> NEWS &amp; ARTICLES ({matchingArticles.length})
                </span>
                {matchingArticles.slice(0, 3).map((a) => (
                  <div
                    key={a.slug}
                    onClick={() => handleSelect(`/news/${a.slug}`)}
                    className="p-3 bg-[#EADBCE] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-white transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-black uppercase">{a.title}</div>
                      <div className="text-[10px] opacity-80">{a.category} • {a.readingTime}</div>
                    </div>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            )}

            {/* Campaigns */}
            {matchingCampaigns.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block flex items-center gap-1">
                  <Megaphone size={12} /> CAMPAIGNS ({matchingCampaigns.length})
                </span>
                {matchingCampaigns.slice(0, 3).map((c) => (
                  <div
                    key={c.slug}
                    onClick={() => handleSelect('/campaigns')}
                    className="p-3 bg-[#EADBCE] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-white transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-black uppercase">{c.title}</div>
                      <div className="text-[10px] opacity-80">{c.summary}</div>
                    </div>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            )}

            {/* Glossary */}
            {matchingGlossary.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block flex items-center gap-1">
                  <BookOpen size={12} /> ENCYCLOPEDIA GLOSSARY ({matchingGlossary.length})
                </span>
                {matchingGlossary.slice(0, 3).map((g) => (
                  <div
                    key={g.term}
                    onClick={() => handleSelect('/resources')}
                    className="p-3 bg-[#EADBCE] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-white transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-black uppercase">[{g.letter}] {g.term}</div>
                      <div className="text-[10px] opacity-80">{g.definition}</div>
                    </div>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            )}

            {/* Posters */}
            {matchingPosters.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block flex items-center gap-1">
                  <Image size={12} /> POSTERS ({matchingPosters.length})
                </span>
                {matchingPosters.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelect('/posters')}
                    className="p-3 bg-[#EADBCE] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-white transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-black uppercase">{p.title}</div>
                      <div className="text-[10px] opacity-80">"{p.slogan}"</div>
                    </div>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            )}

            {/* Memes */}
            {matchingMemes.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block flex items-center gap-1">
                  <Laugh size={12} /> MEMES ({matchingMemes.length})
                </span>
                {matchingMemes.slice(0, 3).map((m) => (
                  <div
                    key={m.id}
                    onClick={() => handleSelect('/memes')}
                    className="p-3 bg-[#EADBCE] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-white transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-black uppercase">{m.title}</div>
                      <div className="text-[10px] opacity-80">"{m.caption}"</div>
                    </div>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            )}

            {/* Videos */}
            {matchingVideos.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block flex items-center gap-1">
                  <Video size={12} /> VIDEOS ({matchingVideos.length})
                </span>
                {matchingVideos.slice(0, 3).map((v) => (
                  <div
                    key={v.id}
                    onClick={() => handleSelect('/gallery')}
                    className="p-3 bg-[#EADBCE] border-2 border-[#16120D] hover:bg-[#16120D] hover:text-white transition-colors cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-xs font-black uppercase">{v.title}</div>
                      <div className="text-[10px] opacity-80">{v.duration} • {v.category}</div>
                    </div>
                    <ArrowRight size={14} />
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
