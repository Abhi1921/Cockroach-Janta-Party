import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, Eye, School, ArrowRight, ShieldCheck } from 'lucide-react';

export const SchoolThikKaroPage: React.FC = () => {
  const { lang } = useLanguage();

  const charterPoints = [
    "Clean Tap Water in 100% Primary Government Schools within 90 days.",
    "Dual-desk Wooden Benches for every student — zero floor sitting in cold winters.",
    "Functional gender-segregated sanitation facilities with running water and monthly maintenance logs.",
    "Mandatory PM CARES fund audit and 15% reallocation towards rural primary school repair.",
    "Free mid-day nutritional meal audit by local parent-teacher student committees.",
    "Immediate filling of 2,50,000 vacant primary teacher posts across tier-2 and tier-3 districts.",
    "Electricity and solar backup in all rural classrooms for computer and fan operation.",
    "Annual civil structural safety certificate for all school buildings before monsoon.",
    "Free textbook and digital library access for every student from Class 1 to 8.",
    "Direct ward municipal desk for instant school infrastructure complaint resolution."
  ];

  return (
    <div className="school-thik-karo-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'स्कूल ठीक करो अभियान | कॉकरोच जनता पार्टी' : 'School Thik Karo Campaign & Rural Education Charter | CJP'}
        description="Dossier on CJP's nationwide youth volunteer drive cleaning primary government schools, building wooden desks, and demanding PM CARES fund reallocation for public education."
        canonicalUrl="https://cockroachjantapartywale.com/school-thik-karo"
      />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Hero Header */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            FLAGSHIP CIVIC CAMPAIGN · EST. 2026
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            SCHOOL THIK KARO CAMPAIGN
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'सरकारी प्राथमिक स्कूलों की मरम्मत, फर्नीचर और स्वच्छ पेयजल के लिए युवाओं का राष्ट्रव्यापी जन अभियान।'
              : 'Nationwide youth volunteer drive renovating government primary schools, building wooden desks, and demanding public education funds.'}
          </p>
        </div>

        {/* Featured Campaign Poster Spotlight */}
        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-6 md:p-10 shadow-2xl mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-6">
            <div className="border-4 border-[#16120D] bg-[#16120D] overflow-hidden shadow-2xl group relative">
              <img
                src="/cjp_school_thik_karo_poster.png"
                alt="School Thik Karo Official Campaign Poster"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <a
                  href="/cjp_school_thik_karo_poster.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D9572B] text-white text-xs font-extrabold px-4 py-2 border border-white flex items-center gap-1.5 uppercase"
                >
                  <Eye size={14} /> View High-Res
                </a>
                <a
                  href="/cjp_school_thik_karo_poster.png"
                  download="cjp_school_thik_karo_poster.png"
                  className="bg-white text-[#16120D] text-xs font-extrabold px-4 py-2 border border-[#16120D] flex items-center gap-1.5 uppercase"
                >
                  <Download size={14} /> Download Poster
                </a>
              </div>
            </div>
            <div className="text-center mt-2 text-[11px] font-extrabold text-[#D9572B] uppercase tracking-wider">
              OFFICIAL CJP CAMPAIGN ARTWORK V1
            </div>
          </div>

          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <School className="text-[#D9572B]" size={20} />
              <span className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1 uppercase">
                RURAL &amp; URBAN SCHOOL DRIVE
              </span>
            </div>

            <h2 className="font-serif font-black text-3xl text-[#16120D] uppercase leading-none">
              FIX THE SCHOOLS. BUILD THE FUTURE.
            </h2>

            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              While high-profile state inaugurations focus on mega-projects, millions of young children in primary government schools sit on cold damp floors, without running water, working toilets, or basic blackboards.
            </p>

            <p className="text-xs text-[#3A332B] font-medium leading-relaxed">
              Under the <strong className="text-[#16120D]">School Thik Karo</strong> campaign, CJP student volunteers physically visit local primary schools on weekends to repair broken wooden desks, paint walls, install tap water filters, and file RTI applications demanding municipal education fund accountability.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/cjp_school_thik_karo_poster.png"
                download="cjp_school_thik_karo_poster.png"
                className="bg-[#D9572B] text-white text-xs font-extrabold px-5 py-3 border-2 border-[#16120D] hover:bg-[#16120D] transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <Download size={15} />
                <span>DOWNLOAD CAMPAIGN POSTER</span>
              </a>

              <Link
                to="/join"
                className="bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold px-5 py-3 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <span>VOLUNTEER FOR SCHOOL DRIVE</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>

        {/* 10-Point Education Charter */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-10 shadow-xl space-y-6 mb-16">
          <div className="flex items-center gap-3 border-b-4 border-[#16120D] pb-3">
            <ShieldCheck size={32} className="text-[#D9572B]" />
            <div>
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block">
                CJP DEMAND CHARTER
              </span>
              <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase">
                10-POINT PRIMARY EDUCATION DEMAND CHARTER
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {charterPoints.map((point, index) => (
              <div key={index} className="bg-[#EADBCE] border border-[#16120D] p-4 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-extrabold text-[#D9572B] uppercase block">
                    DEMAND #{index + 1}
                  </span>
                  <p className="text-xs text-[#16120D] font-bold leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
