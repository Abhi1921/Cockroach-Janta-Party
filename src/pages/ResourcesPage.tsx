import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlossaryCard } from '../components/GlossaryCard';
import { glossaryData } from '../data/glossaryData';
import { resourcesData } from '../data/resourcesData';
import { Download, BookOpen, Search, Sparkles } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredGlossary = glossaryData.filter(g => {
    const matchesLetter = selectedLetter === 'ALL' || g.letter.toUpperCase() === selectedLetter;
    const matchesSearch = !searchTerm || g.term.toLowerCase().includes(searchTerm.toLowerCase()) || g.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLetter && matchesSearch;
  });

  return (
    <div className="resources-page py-14 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP Encyclopedia & Public Resource Hub"
        description="Explore the Cockroach Janta Party (CJP) Encyclopedia, A-Z glossary of satire concepts, civic RTI templates, manifesto PDFs, and brand media kits."
        canonicalUrl="https://cockroachjantapartywale.com/resources"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        <Breadcrumbs items={[{ label: 'RESOURCES & ENCYCLOPEDIA' }]} />

        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
            <BookOpen size={14} className="text-[#D9572B]" /> CJP ENCYCLOPEDIA &amp; CIVIC ARCHIVE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#16120D] uppercase leading-none font-black">
            CJP SWARM ENCYCLOPEDIA
          </h1>
          <p className="text-[#3A332B] text-sm sm:text-base leading-relaxed font-medium">
            Explore our A-to-Z dictionary of CJP satire concepts, civic terms, RTI frameworks, and downloadable campaign resources.
          </p>
        </div>

        {/* A-Z Alphabetical Navigation Bar */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-5 shadow-[6px_6px_0px_0px_#16120D] mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[#16120D] pb-4">
            <span className="text-xs font-black text-[#16120D] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#D9572B]" /> A-TO-Z GLOSSARY INDEX ({filteredGlossary.length} ENTRIES)
            </span>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search glossary terms..."
                className="w-full bg-[#EADBCE] border-2 border-[#16120D] px-3 py-1.5 text-xs font-extrabold text-[#16120D] outline-none focus:border-[#D9572B]"
              />
              <Search size={14} className="absolute right-3 top-2.5 text-[#D9572B]" />
            </div>
          </div>

          {/* Letter Buttons Strip */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`btn-brutal h-8 w-8 text-xs font-black uppercase flex items-center justify-center cursor-pointer ${
                  selectedLetter === letter
                    ? 'bg-[#D9572B] text-white shadow-[2px_2px_0px_0px_#16120D]'
                    : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[1.5px_1.5px_0px_0px_#16120D]'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredGlossary.map((entry, idx) => (
            <GlossaryCard key={idx} entry={entry} />
          ))}
        </div>

        {/* Downloadable Public Resource Documents Section */}
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 sm:p-10 shadow-[8px_8px_0px_0px_#16120D] mb-16">
          <div className="mb-8 border-b-2 border-white/20 pb-4">
            <span className="bg-[#D9572B] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 inline-block mb-2">
              DOWNLOADABLE ASSET ROOM
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white uppercase leading-none font-black">
              CIVIC GUIDES &amp; RTI TEMPLATES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesData.map((res) => (
              <div key={res.id} className="bg-[#231F1A] border-2 border-white/10 p-6 flex flex-col justify-between hover:border-[#D9572B] transition-all">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-wider">{res.category}</span>
                    <span className="text-[10px] font-mono text-[#EADBCE]">{res.format} • {res.fileSize}</span>
                  </div>
                  <h3 className="font-display text-xl uppercase text-white mb-2 leading-tight font-black">{res.title}</h3>
                  <p className="text-xs text-[#EADBCE] font-medium leading-relaxed mb-4">{res.description}</p>
                </div>

                <a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(`CJP RESOURCE DOCUMENT\nTitle: ${res.title}\nCategory: ${res.category}\nOfficial Public Domain Asset - Cockroach Janata Party`)}`}
                  download={`${res.title.toLowerCase().replace(/\s+/g, '_')}.txt`}
                  className="btn-brutal py-2 px-4 bg-[#D9572B] text-white hover:bg-[#EADBCE] hover:text-[#16120D] text-xs font-black uppercase flex items-center justify-center gap-2"
                >
                  <Download size={14} /> DOWNLOAD ASSET
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
