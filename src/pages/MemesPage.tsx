import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Download } from 'lucide-react';

export const MemesPage: React.FC = () => {
  const { lang } = useLanguage();

  const memes = [
    { title: 'Contractor 5-Day Pothole Warranty vs Monsoon Rain', image: '/cjp_poster_sanitation.png', tag: 'INFRASTRUCTURE' },
    { title: 'Dimagi Naxal Label vs Me Asking For Clean Tap Water', image: '/cjp_news_hero_poster.png', tag: 'LABELS' },
    { title: 'NTA Exam Integrity vs Student Sweat', image: '/cjp_sep5_protest_poster.png', tag: 'EXAM LEAKS' },
    { title: 'Subterranean Drain Desilting Audit Legend', image: '/cjp_dispatch_paying_attention_poster.png', tag: 'SANITATION' }
  ];

  return (
    <div className="memes-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'राजनीतिक मीम्स व व्यंग्य | कॉकरोच जनता पार्टी' : 'Cockroach Janta Party Political Memes & Satire Gallery'}
        description="Explore downloadable Cockroach Janta Party satirical memes, dark humor visual posters, and student commentary artwork."
        canonicalUrl="https://cockroachjantapartywale.com/memes"
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            CIVIC HUMOR &amp; SATIRE HUB
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            OFFICIAL COCKROACH JANTA PARTY MEMES &amp; SATIRE
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'नगरपालिका खामियों और छात्र अधिकारों पर व्यंग्यात्मक पोस्टर्स और मीम्स।'
              : 'Turning public apathy into viral civic commentary through dark humor and student art.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memes.map((m, idx) => (
            <div key={idx} className="bg-[#F5EFE6] border-4 border-[#16120D] p-5 shadow-2xl space-y-4">
              <div className="border-2 border-[#16120D] bg-[#16120D] overflow-hidden h-72">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-[#D9572B] text-white text-[9px] font-black px-2.5 py-0.5 uppercase tracking-widest">
                  {m.tag}
                </span>
                <a
                  href={m.image}
                  download
                  className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1.5 border border-[#16120D] hover:bg-[#D9572B] transition-colors inline-flex items-center gap-1 uppercase"
                >
                  <Download size={12} /> DOWNLOAD MEME
                </a>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase leading-tight">{m.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
