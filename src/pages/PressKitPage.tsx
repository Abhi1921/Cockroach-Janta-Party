import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Download, Mail, Phone } from 'lucide-react';

export const PressKitPage: React.FC = () => {
  const { lang } = useLanguage();

  const brandAssets = [
    {
      title: "Official CJP Emblem Vector SVG",
      type: "Vector Graphic (SVG)",
      file: "/cjp_logo_emblem.svg",
      desc: "High-resolution scalable emblem of Cockroach Janta Party for print, broadcast, and digital publishing."
    },
    {
      title: "Official Banner Poster PNG",
      type: "Raster Image (PNG)",
      file: "/cjp_banner.png",
      desc: "Full header banner asset featuring official brand typography and emblem mark."
    },
    {
      title: "News Hero Dispatch Poster",
      type: "High-Res Graphic (PNG)",
      file: "/cjp_news_hero_poster.png",
      desc: "Official editorial poster artwork used for press statements and news releases."
    },
    {
      title: "Sanitation & Ward Audit Poster",
      type: "High-Res Graphic (PNG)",
      file: "/cjp_poster_sanitation.png",
      desc: "Campaign artwork detailing municipal sanitation, drainage, and gutter maintenance demands."
    }
  ];

  const pressReleases = [
    {
      date: "30 AUGUST 2026",
      title: "CJP Announces Nationwide 5 September Delhi Student March to Police HQ & India Gate",
      ref: "PR-2026-0830",
      summary: "Over 50 student delegations confirm participation in peaceful assembly demanding NTA audit reports and contractor road warranties."
    },
    {
      date: "20 JULY 2026",
      title: "Declaration of Black Monday Civic Assembly & 5-Point Manifesto Submission",
      ref: "PR-2026-0720",
      summary: "CJP Secretariat submits 1,200 ward road audit files to Union Ministry of Housing and Urban Affairs."
    }
  ];

  return (
    <div className="press-kit-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'प्रेस किट व मीडिया ब्यूरो | कॉकरोच जनता पार्टी' : 'Press Kit & Media Relations Bureau | Cockroach Janta Party'}
        description="Official Press Kit, downloadable vector emblem SVG/PNG logos, press releases, media assets, and spokesperson contact directory for CJP."
        canonicalUrl="https://cockroachjantapartywale.com/press-kit"
      />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            OFFICIAL MEDIA BUREAU · EST. 2026
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            PRESS KIT &amp; MEDIA RELATIONS
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'पत्रकारों, समाचार मीडिया और शोधकर्ताओं के लिए आधिकारिक प्रेस विज्ञप्ति और लोगो संपत्ति।'
              : 'Download high-resolution logos, brand guidelines, official press releases, and media contact info.'}
          </p>
        </div>

        {/* Media Contact Box */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-8 border-4 border-[#16120D] shadow-2xl mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest">
              PRESS INQUIRIES &amp; INTERVIEW REQUESTS
            </span>
            <h2 className="font-serif font-black text-3xl uppercase text-[#F5EFE6]">
              COCKROACH JANTA PARTY PRESS RELATIONS DESK
            </h2>
            <p className="text-xs text-[#EADBCE] font-medium leading-relaxed">
              For journalist inquiries, TV panel availability, founder interview requests, and official photo/video permissions, reach out directly to the Cockroach Janta Party Secretariat Press Desk.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#F5EFE6]">
              <div className="flex items-center gap-2 bg-[#231F1A] px-3 py-2 border border-white/20">
                <Mail size={14} className="text-[#D9572B]" />
                <span>info@cockroachjantaparty.org.in</span>
              </div>
              <div className="flex items-center gap-2 bg-[#231F1A] px-3 py-2 border border-white/20">
                <Phone size={14} className="text-[#D9572B]" />
                <span>Press Desk: +91 11-4029-XXXX</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 text-center">
            <div className="bg-[#231F1A] border-2 border-white/20 p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#16120D] border-2 border-[#D9572B] mx-auto p-1">
                <img src="/cjp_logo_emblem.svg" alt="CJP Emblem Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                OFFICIAL EMBLEM
              </span>
              <a
                href="/cjp_logo_emblem.svg"
                download="cjp_logo_emblem.svg"
                className="bg-[#D9572B] text-white text-[11px] font-extrabold px-4 py-2 border border-white hover:bg-white hover:text-[#16120D] transition-all inline-flex items-center gap-1.5 uppercase"
              >
                <Download size={13} />
                <span>DOWNLOAD SVG</span>
              </a>
            </div>
          </div>
        </div>

        {/* Brand Assets Grid */}
        <div className="mb-16">
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase border-b-4 border-[#16120D] pb-2 mb-6">
            OFFICIAL BRAND ASSETS &amp; HIGH-RES LOGOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandAssets.map((asset, idx) => (
              <div key={idx} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="bg-[#16120D] text-[#F5EFE6] text-[9px] font-extrabold px-2.5 py-0.5 uppercase">
                      {asset.type}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase">{asset.title}</h3>
                  <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{asset.desc}</p>
                </div>
                <div className="pt-3 border-t border-[#16120D]/20">
                  <a
                    href={asset.file}
                    download
                    className="bg-[#D9572B] text-white text-xs font-extrabold px-4 py-2 border border-[#16120D] hover:bg-[#16120D] transition-all inline-flex items-center gap-1.5 uppercase"
                  >
                    <Download size={14} />
                    <span>DOWNLOAD ASSET</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl space-y-6">
          <h2 className="font-serif font-black text-2xl text-[#16120D] uppercase border-b-2 border-[#16120D] pb-2">
            PRESS RELEASES ARCHIVE
          </h2>

          <div className="space-y-4">
            {pressReleases.map((pr, i) => (
              <div key={i} className="bg-[#EADBCE] border border-[#16120D] p-5 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-extrabold text-[#D9572B] uppercase">
                  <span>{pr.date}</span>
                  <span>REF: {pr.ref}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-[#16120D] uppercase">{pr.title}</h3>
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{pr.summary}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
