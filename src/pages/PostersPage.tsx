import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Download, Share2, Check, Sparkles } from 'lucide-react';

export const PostersPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const posters = [
    {
      id: 'p0',
      badge: 'URGENT PROTEST POSTER #001',
      headlineEn: '5 SEPTEMBER DELHI MARCH · CHALO POLICE HQ & INDIA GATE',
      headlineHi: '5 सितंबर दिल्ली मार्च · चलो पुलिस मुख्यालय व इंडिया GATE',
      subEn: 'Demanding quashing of 2,700 student FIRs, 3-year contractor road warranties, and exam fairness. Be ready for cockroaches!',
      subHi: 'छात्र प्राथमिकियों को रद्द करने, 3-वर्षीय ठेकेदार वारंटी और परीक्षा निष्पक्षता की मांग।',
      imgSrc: '/cjp_sep5_protest_poster.png'
    },
    {
      id: 'p1',
      badge: 'EDUCATION CAMPAIGN POSTER #002',
      headlineEn: 'SCHOOL THIK KARO · FIX GOVERNMENT SCHOOLS & LIBRARIES',
      headlineHi: 'स्कूल ठीक करो · सरकारी स्कूलों व पुस्तकालयों को दुरुस्त करें',
      subEn: 'Public audit of government school infrastructure, free student libraries, and teacher appointment transparency.',
      subHi: 'सरकारी स्कूल ढांचे का सार्वजनिक ऑडिट, मुफ्त छात्र पुस्तकालय और शिक्षक नियुक्ति में पारदर्शिता।',
      imgSrc: '/cjp_school_thik_karo_poster.png'
    },
    {
      id: 'p2',
      badge: 'FEATURED DISPATCH POSTER #003',
      headlineEn: 'WHEN THE SYSTEM DISCOVERS THE PEOPLE ARE PAYING ATTENTION',
      headlineHi: 'जब तंत्र को पता चलता है कि जनता ध्यान दे रही है',
      subEn: 'Empirical investigation into public Section 4 RTI filings, subterranean sewer audits, and contractor warranty boards.',
      subHi: 'पारदर्शी आरटीआई फाइलों और नगर निगम कार्यों की सार्वजनिक निगरानी।',
      imgSrc: '/cjp_dispatch_paying_attention_poster.png'
    },
    {
      id: 'p3',
      badge: 'BLACK MONDAY SPECIAL REPORT #004',
      headlineEn: '20 JULY BLACK MONDAY · NEVER FORGET',
      headlineHi: '20 जुलाई ब्लैक मंडे · सब याद रखा जाएगा',
      subEn: 'Official evidence documentation and 11 unanswered questions regarding the peaceful student march to Parliament.',
      subHi: 'संसद मार्च साक्ष्य दस्तावेज और 11 अनुत्तरित सवाल।',
      imgSrc: '/cjp_black_monday_poster.png'
    },
    {
      id: 'p4',
      badge: 'CJP BRAND EMBLEM #005',
      headlineEn: 'FOR THE PEOPLE WHO REFUSE TO BLEND IN.',
      headlineHi: 'उन लोगों के लिए जो व्यवस्था में घुलने से इंकार करते हैं।',
      subEn: 'Official emblem representing subterranean resilience, open RTI access, and independent youth commentary.',
      subHi: 'नालों की सफाई, 3-वर्षीय सड़क वारंटी और पारदर्शी आरटीआई शासन के लिए आवाज उठाएं।',
      imgSrc: '/cjp_banner.png'
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
        description="Download and share original visual posters of Cockroach Janta Party: 5 September Delhi March, School Thik Karo Campaign, Featured Dispatch, Black Monday, and CJP Emblem."
        canonicalUrl="https://cockroachjantapartywale.com/posters"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4 flex items-center gap-1.5 justify-center w-fit mx-auto">
            <Sparkles size={14} className="text-[#D9572B]" /> {lang === 'hi' ? 'मूल विजुअल पोस्टर' : 'OFFICIAL CAMPAIGN GRAPHICS'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'नागरिक जागृति पोस्टर' : 'CIVIC AWARENESS POSTERS'}
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? "डाउनलोड करें और साझा करें कॉकरोच जनता पार्टी के 5 मुख्य पोस्टर - 5 सितंबर मार्च, स्कूल ठीक करो, फ़ीचर्ड डिस्पैच, ब्लैक मंडे और सीजेपी लोगो।"
              : "Explore, download, and print official brand artwork for Cockroach Janta Party dispatches: 5 September Delhi March, School Thik Karo Campaign, Featured Dispatch, Black Monday, and CJP Logo."}
          </p>
        </div>

        {/* 5 Poster Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posters.map((p) => (
            <div key={p.id} className="border-2 border-[#16120D] p-6 shadow-xl flex flex-col justify-between bg-[#F5EFE6] relative group min-h-[500px]">
              
              {/* Top Bar */}
              <div className="flex justify-between items-center border-b border-[#16120D] pb-3 mb-6 text-[10px] font-extrabold">
                <span className="text-[#D9572B]">{p.badge}</span>
                <span className="text-[#3A332B]">PRINT READY</span>
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
