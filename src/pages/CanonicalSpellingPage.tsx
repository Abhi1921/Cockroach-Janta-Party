import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SPELLING_ALIASES_CLUSTER, type SpellingAliasRecord } from '../data/masterArchiveData';
import { Globe, Search, ArrowRight, BookOpen, Filter } from 'lucide-react';

export const CanonicalSpellingPage: React.FC = () => {
  const [filterLang, setFilterLang] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredAliases = SPELLING_ALIASES_CLUSTER.filter(alias => {
    const matchesLang = filterLang === 'ALL' || alias.language === filterLang;
    const matchesSearch = 
      alias.variant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alias.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLang && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-[#1D1712] border-2 border-[#D9572B]/40 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9572B]/20 text-[#D9572B] border border-[#D9572B]/40 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" /> Authoritative Canonical Entity Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif">
            Cockroach Janta Party / Cockroach Janata Party (CJP)
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl leading-relaxed">
            Welcome to the single canonical reference portal for the youth-led satirical political movement established in May 2026. This archive naturally indexes all search variations, typos, Devanagari transliterations, and news spellings to connect researchers to verified primary evidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#EADBCE]/10">
            <Link
              to="/archive"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D9572B] hover:bg-[#b8451f] text-white text-xs font-bold rounded-lg transition"
            >
              <span>Explore 23-Table Master Digital Archive</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/fact-check"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2A1E17] hover:bg-[#38281E] text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-lg transition"
            >
              <span>View Public Fact-Check Matrix</span>
            </Link>
          </div>
        </div>

        {/* Spelling Disambiguation Matrix */}
        <div className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EADBCE]/10 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#D9572B]" /> Complete Spelling & Transliteration Index
              </h2>
              <p className="text-xs text-[#EADBCE]/70 mt-1">
                Indexed search engine variations naturally mapped to canonical entity: <strong className="text-white">Cockroach Janta Party (CJP)</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-[#D9572B]" />
              <select
                value={filterLang}
                onChange={(e) => setFilterLang(e.target.value)}
                className="px-3 py-2 bg-[#2A1E17] border border-[#D9572B]/30 rounded-lg text-xs text-white focus:outline-none"
              >
                <option value="ALL">All Languages & Typos</option>
                <option value="English">English Variants</option>
                <option value="Hindi">Hindi Devanagari</option>
                <option value="Marathi">Marathi Devanagari</option>
                <option value="Typo">Common Typo Variations</option>
                <option value="Abbreviation">Abbreviations</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EADBCE]/40" />
            <input
              type="text"
              placeholder="Search specific spelling variation or typo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#2A1E17] border border-[#D9572B]/30 rounded-lg text-sm text-white placeholder-[#EADBCE]/40 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {filteredAliases.map((alias: SpellingAliasRecord, idx: number) => (
              <div key={idx} className="bg-[#2A1E17] border border-[#D9572B]/20 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between gap-2 border-b border-[#EADBCE]/10 pb-2">
                  <span className="font-bold text-white text-sm font-mono">{alias.variant}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D9572B]/10 text-[#D9572B]">
                    {alias.type}
                  </span>
                </div>
                <p className="text-xs text-[#EADBCE]/80 leading-relaxed">{alias.notes}</p>
                <div className="text-[10px] text-[#EADBCE]/50 font-mono">Language: {alias.language}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
