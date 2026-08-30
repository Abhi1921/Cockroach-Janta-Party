import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { X, ZoomIn, Download, Share2, Check } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { lang } = useLanguage();
  const [activePoster, setActivePoster] = useState<any | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const posters = [
    {
      id: 'p1',
      num: 'POSTER #01 · 5 SEP PROTEST',
      headline: '5 SEPTEMBER DELHI MARCH: CHALO POLICE HQ & INDIA GATE',
      sub: 'Nationwide youth protest march over 2,700 student FIR quashings, contractor road warranties, and exam fairness.',
      tag: 'FEATURED MARCH POSTER',
      imgSrc: '/cjp_sep5_protest_poster.png'
    },
    {
      id: 'p2',
      num: 'POSTER #02 · SCHOOL THIK KARO',
      headline: 'SCHOOL THIK KARO: FIX GOVERNMENT SCHOOLS & LIBRARIES',
      sub: 'Demanding state education infrastructure audit, public libraries, and student safety.',
      tag: 'FEATURED CAMPAIGN POSTER',
      imgSrc: '/cjp_school_thik_karo_poster.png'
    },
    {
      id: 'p3',
      num: 'POSTER #03 · FEATURED DISPATCH',
      headline: 'WHEN THE SYSTEM DISCOVERS THE PEOPLE ARE PAYING ATTENTION',
      sub: 'Empirical investigation into public Section 4 RTI filings, subterranean sewer audits, and contractor warranty boards.',
      tag: 'FEATURED DISPATCH POSTER',
      imgSrc: '/cjp_dispatch_paying_attention_poster.png'
    },
    {
      id: 'p4',
      num: 'POSTER #04 · BLACK MONDAY REPORT',
      headline: '20 JULY BLACK MONDAY · NEVER FORGET',
      sub: 'Official evidence documentation and 11 unanswered questions regarding the peaceful student march to Parliament.',
      tag: 'MEMORIAL TIMELINE POSTER',
      imgSrc: '/cjp_black_monday_poster.png'
    },
    {
      id: 'p5',
      num: 'POSTER #05 · BRAND EMBLEM',
      headline: 'COCKROACH JANTA PARTY (CJP) OFFICIAL EMBLEM',
      sub: 'For those who refuse to stay silent. Symbolizing subterranean resilience and public transparency.',
      tag: 'OFFICIAL LOGO EMBLEM',
      imgSrc: '/cjp_banner.png'
    }
  ];

  const handleShare = (id: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="gallery-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title="CJP Gallery | Official Campaign Posters Archive"
        description="Official graphic posters of Cockroach Janta Party: 5 September Delhi March, School Thik Karo Campaign, Featured Dispatch, Black Monday, and CJP Emblem."
        canonicalUrl="http://localhost:3000/gallery"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'विजुअल आर्काइव' : 'OFFICIAL CAMPAIGN GALLERY'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'द विजुअल स्वार्म (गैलरी)' : 'THE VISUAL GALLERY'}
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? "कॉकरोच जनता पार्टी के मुख्य 5 अभियान पोस्टर - 5 सितंबर दिल्ली मार्च, स्कूल ठीक करो, फ़ीचर्ड डिस्पैच, ब्लैक मंडे और सीजेपी लोगो।"
              : "Official graphic posters for Cockroach Janta Party dispatches: 5 September Delhi March, School Thik Karo Campaign, Featured Dispatch, Black Monday, and CJP Brand Emblem."}
          </p>
        </div>

        {/* 5 Poster System */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {posters.map((p) => (
            <div
              key={p.id}
              className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md hover:border-[#D9572B] transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setActivePoster(p)}
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-extrabold mb-3">
                  <span className="text-[#D9572B]">{p.num}</span>
                  <span className="bg-[#16120D] text-[#F5EFE6] px-2 py-0.5 uppercase tracking-wider">{p.tag}</span>
                </div>

                <div className="overflow-hidden border border-[#16120D] bg-[#16120D] mb-4 aspect-square relative">
                  <img src={p.imgSrc} alt={p.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn size={28} className="text-[#D9572B]" />
                  </div>
                </div>

                <h3 className="font-serif font-black text-lg text-[#16120D] uppercase leading-tight mb-2">
                  {p.headline}
                </h3>
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4">
                  {p.sub}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(22,18,13,0.18)] flex justify-between items-center text-[10px] font-bold text-[#3A332B]" onClick={(e) => e.stopPropagation()}>
                <span>CLICK TO PREVIEW</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleShare(p.id)} className="p-1 bg-[#EADBCE] border border-[#16120D]">
                    {copiedId === p.id ? <Check size={12} className="text-[#D9572B]" /> : <Share2 size={12} />}
                  </button>
                  <a href={p.imgSrc} download={`${p.id}.png`} className="bg-[#16120D] text-[#F5EFE6] px-2.5 py-1 flex items-center gap-1">
                    <Download size={10} /> SAVE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Preview Modal */}
        {activePoster && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setActivePoster(null)}>
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 max-w-2xl w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActivePoster(null)}
                className="absolute top-4 right-4 text-[#16120D] hover:text-[#D9572B] p-1 bg-[#EADBCE] border border-[#16120D]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="overflow-hidden border-2 border-[#16120D] bg-[#16120D] mb-4 aspect-square max-h-[50vh] flex items-center justify-center">
                <img src={activePoster.imgSrc} alt={activePoster.headline} className="max-w-full max-h-full object-contain" />
              </div>

              <div className="flex justify-between items-center text-xs font-extrabold text-[#D9572B] mb-2">
                <span>{activePoster.num}</span>
                <span className="bg-[#16120D] text-[#F5EFE6] px-2.5 py-0.5 text-[10px] uppercase">{activePoster.tag}</span>
              </div>

              <h2 className="font-serif font-black text-2xl text-[#16120D] uppercase mb-2 leading-tight">
                {activePoster.headline}
              </h2>

              <p className="text-xs text-[#3A332B] font-medium mb-6">
                {activePoster.sub}
              </p>

              <div className="flex justify-end gap-3">
                <a href={activePoster.imgSrc} download={`${activePoster.id}.png`} className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-5 py-2.5 flex items-center gap-1.5">
                  <Download size={14} /> DOWNLOAD POSTER
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
