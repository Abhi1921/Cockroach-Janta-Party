import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { PosterCard } from '../components/PosterCard';
import { postersData } from '../data/postersData';
import { Image, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PostersPage: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'ALL', labelEn: 'ALL POSTERS', labelHi: 'सभी पोस्टर' },
    { id: 'campaign', labelEn: 'CAMPAIGN BANNERS', labelHi: 'अभियान बैनर' },
    { id: 'protest', labelEn: 'PROTEST PLACARDS', labelHi: 'विरोध पोस्टर' },
    { id: 'satire', labelEn: 'SATIRE & CARTOONS', labelHi: 'व्यंग्य व कार्टून' },
    { id: 'editorial', labelEn: 'EDITORIAL DISPATCHES', labelHi: 'संपादकीय पोस्टर' },
    { id: 'meme', labelEn: 'MEME GRAPHICS', labelHi: 'मीम ग्राफिक्स' },
  ];

  const filteredPosters = useMemo(() => {
    return postersData.filter(post => {
      const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
      const matchesSearch = !searchTerm || post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.slogan.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="posters-page bg-[#EADBCE] text-[#16120D] font-sans min-h-screen selection:bg-[#D9572B] selection:text-white pb-24">
      <SEOHead
        title={lang === 'hi' ? 'सीजेपी पोस्टर व ग्राफिक्स डायरेक्टरी | कॉकरोच जनता पार्टी' : 'Original CJP Graphic Posters & Editorial Artwork | Cockroach Janta Party'}
        description="Browse, filter, and download 36+ original Cockroach Janata Party (CJP) graphic posters, street placards, satire banners, and civic advocacy graphics."
        canonicalUrl="https://cockroachjantapartywale.com/posters"
      />

      {/* ==========================================
          1. HERO SECTION
      ========================================== */}
      <section className="relative bg-[#16120D] text-[#F5EFE6] pt-24 pb-20 overflow-hidden border-b-4 border-[#D9572B]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D9572B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-[#D9572B] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                <Sparkles size={14} className="animate-pulse" />
                <span>{lang === 'hi' ? 'आधिकारिक पोस्टर आर्काइव' : 'OFFICIAL CJP POSTER ARCHIVE'}</span>
              </div>

              <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase text-white">
                {lang === 'hi' ? (
                  <>
                    विचार जो दीवारों पर <br />
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      दिखाई दें
                    </span>
                    ।
                  </>
                ) : (
                  <>
                    IDEAS THAT SPEAK <br />
                    FROM THE{' '}
                    <span className="text-[#D9572B] italic underline decoration-[#E6A100] underline-offset-8">
                      WALLS
                    </span>
                    .
                  </>
                )}
              </h1>

              <p className="text-[#EADBCE]/90 text-base md:text-xl leading-relaxed max-w-2xl font-normal">
                {lang === 'hi'
                  ? "36+ मूल पोस्टर ग्राफिक्स, सड़क प्लेकार्ड, समाचार पत्र व्यंग्य और अभियान बैनर ब्राउज़ करें और डाउनलोड करें।"
                  : "Browse, filter, and download 36+ original vector poster graphics spanning campaign banners, street placards, newspaper satire, and editorial dispatches."}
              </p>

              {/* Stats Ticker */}
              <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#F5EFE6]/15 max-w-xl">
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#E6A100]">{postersData.length}</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">{lang === 'hi' ? 'ग्राफिक पोस्टर' : 'GRAPHIC POSTERS'}</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#D9572B]">45K+</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">{lang === 'hi' ? 'डाउनलोड्स' : 'TOTAL DOWNLOADS'}</div>
                </div>
                <div>
                  <div className="font-serif font-black text-2xl md:text-3xl text-[#27AE60]">100%</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#EADBCE]/70">{lang === 'hi' ? 'मुफ्त सार्वजनिक कला' : 'FREE PUBLIC ART'}</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#231F1A] border-4 border-[#F5EFE6]/20 p-3 rounded-xl shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src="/cjp_black_monday_poster.png"
                    alt="CJP Black Monday Poster Artwork"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16120D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-[#D9572B] text-white text-[10px] font-black px-2.5 py-0.5 uppercase tracking-widest rounded">
                      FEATURED ARTWORK #01
                    </span>
                    <h3 className="font-serif font-black text-xl uppercase mt-1">BLACK MONDAY MOVEMENT</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          2. STICKY CATEGORY & SEARCH BAR
      ========================================== */}
      <section className="sticky top-0 z-40 bg-[#16120D] border-y-2 border-[#D9572B] shadow-2xl backdrop-blur-md my-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search poster title or slogan..."
                className="w-full bg-[#231F1A] border-2 border-[#F5EFE6]/20 px-4 py-2.5 pl-10 text-xs font-extrabold text-white outline-none focus:border-[#D9572B] rounded-lg transition-colors"
              />
              <Search size={16} className="absolute left-3 top-3 text-[#D9572B]" />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full sm:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 rounded-md ${
                      isActive
                        ? 'bg-[#D9572B] text-white shadow-lg font-black'
                        : 'bg-[#231F1A] text-[#EADBCE] hover:bg-[#3A332B] hover:text-white border border-[#F5EFE6]/10'
                    }`}
                  >
                    {lang === 'hi' ? cat.labelHi : cat.labelEn}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          3. POSTERS MASONRY GRID SHOWCASE
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-black uppercase text-[#D9572B] tracking-widest">
            SHOWING {filteredPosters.length} POSTER DESIGNS
          </span>
          <span className="text-xs font-bold text-[#3A332B]">
            HIGH-RESOLUTION GRAPHIC ARTWORK
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosters.map((poster) => (
            <PosterCard key={poster.id} poster={poster} />
          ))}
        </div>
      </section>


      {/* ==========================================
          4. CLOSING CTA BANNER
      ========================================== */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-8">
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#D9572B] p-10 md:p-14 rounded-2xl text-center shadow-2xl relative overflow-hidden">
          <Image size={40} className="text-[#D9572B] mx-auto mb-3" />
          <h2 className="font-serif font-black text-3xl md:text-5xl text-white uppercase mb-3">USE THESE POSTERS IN YOUR WARD</h2>
          <p className="text-xs md:text-sm text-[#EADBCE] font-normal max-w-xl mx-auto leading-relaxed mb-6">
            All posters are open-license fictional parody artwork created for citizen advocacy. Print them, share them, and demand transparency.
          </p>
          <Link to="/campaigns" className="inline-block bg-[#D9572B] hover:bg-white hover:text-[#16120D] text-white font-black text-xs uppercase tracking-wider px-8 py-4 border-2 border-[#D9572B] rounded-lg transition-all shadow-xl">
            EXPLORE CAMPAIGNS →
          </Link>
        </div>
      </section>

    </div>
  );
};
