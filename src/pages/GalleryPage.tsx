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
      num: 'POSTER #01',
      headline: 'QUESTION THE SYSTEM. CHECK THE RECEIPT.',
      sub: 'Demand transparent itemized public work orders and contractor bill-of-quantities.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'p2',
      num: 'POSTER #02',
      headline: 'A PUBLIC QUESTION DESERVES A PUBLIC ANSWER.',
      sub: 'Open digital publishing of Section 4 RTI filings across municipal ward sectors.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_poster_sanitation.png'
    },
    {
      id: 'p3',
      num: 'POSTER #03',
      headline: 'YOUR SILENCE IS NOT A SUBMISSION FORM.',
      sub: 'Speak up against unaddressed sewer blockages and unmaintained road paving.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'p4',
      num: 'POSTER #04',
      headline: 'DEMOCRACY NEEDS USERS.',
      sub: 'Active resident participation transforms public apathy into municipal accountability.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_poster_sanitation.png'
    },
    {
      id: 'p5',
      num: 'POSTER #05',
      headline: 'LOW BATTERY. HIGH EXPECTATIONS.',
      sub: 'Young minds demanding functional community study rooms and ward Wi-Fi hubs.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'p6',
      num: 'POSTER #06',
      headline: 'PLEASE HOLD. ACCOUNTABILITY IS CURRENTLY UNAVAILABLE.',
      sub: 'Satirical commentary on transferred municipal phone calls and endless bureaucratic delays.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_poster_sanitation.png'
    },
    {
      id: 'p7',
      num: 'POSTER #07',
      headline: 'WARANTI BOARD KAHAN HAI?',
      sub: 'Enforcing mandatory physical 3-year paving repair warranty notice boards on construction sites.',
      tag: 'DOCUMENTARY / FIELD DISPATCH',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'p8',
      num: 'POSTER #08',
      headline: 'SUBTERRANEAN SEWER CLEANING DEPTH AUDIT.',
      sub: 'Geotagging desilting clearance depths before pre-monsoon rains inundate low-lying wards.',
      tag: 'DOCUMENTARY / FIELD DISPATCH',
      imgSrc: '/cjp_poster_sanitation.png'
    },
    {
      id: 'p9',
      num: 'POSTER #09',
      headline: 'NO PAYWALL ON PUBLIC LEDGERS.',
      sub: 'Zero cost digital access to ward budgets and municipal tender expenditure documents.',
      tag: 'EDITORIAL CONCEPT',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'p10',
      num: 'POSTER #10',
      headline: 'THE SWARM IS ONLINE.',
      sub: 'Organizing youth volunteer observer networks across 45 metro sectors.',
      tag: 'DOCUMENTARY / FIELD DISPATCH',
      imgSrc: '/cjp_poster_sanitation.png'
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
        title="CJP Gallery | Posters & Visual Archive"
        description="Explore 10+ original editorial poster designs and visual graphic dispatches of Cockroach Janta Party."
        canonicalUrl="http://localhost:3000/gallery"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'विजुअल आर्काइव' : 'VISUAL GALLERY & POSTERS'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'द विजुअल स्वार्म (गैलरी)' : 'THE VISUAL SWARM'}
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? "10+ मूल विजुअल पोस्टर और नागरिक अभियान ग्राफिक्स।"
              : "Posters, campaign concepts, satire, typography, and visual complaints collected in one place."}
          </p>
        </div>

        {/* 10+ Poster Component System */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
