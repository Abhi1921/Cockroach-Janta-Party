import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Download, Share2, Check, Sparkles } from 'lucide-react';

export const PostersPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const posters = [
    {
      id: 'p1',
      badge: 'CJP BRAND POSTER #001',
      headlineEn: 'FOR THE PEOPLE WHO REFUSE TO BLEND IN.',
      headlineHi: 'उन लोगों के लिए जो व्यवस्था में घुलने से इंकार करते हैं।',
      subEn: 'Stand up for subterranean drain desilting, 3-year contractor road warranties, and open RTI governance.',
      subHi: 'नालों की सफाई, 3-वर्षीय सड़क वारंटी और पारदर्शी आरटीआई शासन के लिए आवाज उठाएं।',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'p2',
      badge: 'CJP BRAND POSTER #002',
      headlineEn: 'SUBTERRANEAN VIGILANCE. ZERO CORRUPTION.',
      headlineHi: 'भूमिगत सतर्कता। शून्य भ्रष्टाचार।',
      subEn: 'Geotagging subterranean sewer depths and auditing municipal contractor bill-of-quantities.',
      subHi: 'भूमिगत सीवर सफाई की गहराई मापना और नगर निगम निविदाओं की जांच करना।',
      imgSrc: '/cjp_poster_sanitation.png'
    }
  ];

  const handleDownload = (_id: string, name: string, url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.toLowerCase().replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (id: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="posters-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'सीजेपी पोस्टर' : 'Original Brand Posters'}
        description="Download and share original visual posters of Cockroach Janta Party: High resolution civic graphics for youth empowerment and public awareness."
        canonicalUrl="http://localhost:3000/posters"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4 flex items-center gap-1.5 justify-center w-fit mx-auto">
            <Sparkles size={14} className="text-[#D9572B]" /> {lang === 'hi' ? 'मूल विजुअल पोस्टर' : 'ORIGINAL BRAND GRAPHICS'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'नागरिक जागृति पोस्टर' : 'CIVIC AWARENESS POSTERS'}
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? "डाउनलोड करें और साझा करें कॉकरोच जनता पार्टी के मूल पोस्टर - पारदर्शी शासन और युवा आवाज के लिए।"
              : "Explore, download, and print original brand artwork for Cockroach Janta Party. Designed for youth empowerment and civic transparency."}
          </p>
        </div>

        {/* Poster Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {posters.map((p) => (
            <div key={p.id} className="border-2 border-[#16120D] p-6 shadow-xl flex flex-col justify-between bg-[#F5EFE6] relative group min-h-[500px]">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center border-b border-[#16120D] pb-3 mb-6 text-[10px] font-extrabold">
                <span className="text-[#D9572B]">{p.badge}</span>
                <span className="text-[#3A332B]">DIGITAL PRINT READY</span>
              </div>

              {/* Poster Center Image Artwork */}
              <div className="overflow-hidden border border-[#16120D] bg-[#16120D] mb-4 aspect-square flex items-center justify-center">
                <img src={p.imgSrc} alt={p.headlineEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              <div className="text-center mb-4">
                <h2 className="font-serif font-black text-xl text-[#16120D] uppercase tracking-wide leading-tight mb-2">
                  {lang === 'hi' ? p.headlineHi : p.headlineEn}
                </h2>
                <p className="text-xs text-[#3A332B] max-w-sm mx-auto font-medium">
                  {lang === 'hi' ? p.subHi : p.subEn}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-2 border-t border-[rgba(22,18,13,0.18)] flex justify-between items-center flex-wrap gap-3">
                <span className="text-[10px] font-bold text-[#3A332B]">CJP OFFICIAL BRAND ARTWORK</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(p.id)}
                    className="p-2 bg-[#EADBCE] border border-[#16120D] text-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all text-xs flex items-center gap-1"
                    title="Share Poster"
                  >
                    {copiedId === p.id ? <Check size={14} className="text-[#D9572B]" /> : <Share2 size={14} />}
                  </button>
                  <button
                    onClick={() => handleDownload(p.id, p.badge, p.imgSrc)}
                    className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase px-4 py-2 border border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center gap-1.5"
                  >
                    <Download size={14} /> {t('btnDownloadPoster') || 'DOWNLOAD'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
