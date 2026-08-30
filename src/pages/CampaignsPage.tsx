import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Flag, ShieldCheck, ArrowRight } from 'lucide-react';

export const CampaignsPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const campaigns = [
    {
      id: 'c1',
      badge: 'ACTIVE CAMPAIGN',
      badgeColor: 'bg-[#D9572B] text-white',
      titleEn: 'Operation Subterranean Clearance',
      titleHi: 'ऑपरेशन भूमिगत सफाई',
      descEn: 'Empirical ward sewer desilting depth audits and GIS geotagging before pre-monsoon rains.',
      descHi: 'मानसून की बारिश से पहले वार्ड सीवर सफाई की गहराई जांच और जीआईएस-टैगिंग।',
      metricEn: '45 Metro Sectors Inspected',
      metricHi: '45 मेट्रो क्षेत्रों का निरीक्षण',
      imgSrc: '/cjp_poster_sanitation.png'
    },
    {
      id: 'c2',
      badge: 'ONGOING CAMPAIGN',
      badgeColor: 'bg-[#16120D] text-[#F5EFE6]',
      titleEn: 'Contractor Warranty Notice Board Audit',
      titleHi: 'ठेकेदार वारंटी नोटिस बोर्ड ऑडिट',
      descEn: 'Verifying on-site physical 3-year repair warranty notice board compliance on public paving sites.',
      descHi: 'सार्वजनिक सड़क निर्माण स्थलों पर 3 साल के मरम्मत वारंटी बोर्ड का भौतिक सत्यापन।',
      metricEn: '68 Worksites Audited',
      metricHi: '68 निर्माण स्थलों का ऑडिट',
      imgSrc: '/cjp_banner.png'
    },
    {
      id: 'c3',
      badge: 'PLANNED INITIATIVE',
      badgeColor: 'bg-[#D9572B]/20 text-[#D9572B] border border-[#D9572B]',
      titleEn: 'Piped Drinking Water Quality Kiosks',
      titleHi: 'पेयजल गुणवत्ता परीक्षण कियोस्क',
      descEn: 'Rapid volunteer TDS and chlorine water testing units across high-footfall transit centers.',
      descHi: 'व्यस्त बस टर्मिनलों और बाजारों में नि:शुल्क टीडीएस और क्लोरीन पानी परीक्षण।',
      metricEn: '15 Kiosks Target',
      metricHi: '15 कियोस्क का लक्ष्य',
      imgSrc: '/cjp_poster_sanitation.png'
    }
  ];

  return (
    <div className="campaigns-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'अभियान व पहल' : 'Civic Campaigns & Initiatives'}
        description="Explore active volunteer campaigns of Cockroach Janta Party: Subterranean sewer audits, contractor warranty board verifications, and rapid water testing kiosks."
        canonicalUrl="http://localhost:3000/campaigns"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'फील्ड पहल' : 'FIELD INITIATIVES'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'नागरिक अभियान' : 'CIVIC CAMPAIGNS'}
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? "हमारे वार्ड ऑडिट अभियानों में शामिल हों - सीवर गहराई जांच से लेकर ठेकेदार वारंटी बोर्डों तक।"
              : "Empirical volunteer operations across municipal wards: Subterranean drainage verification, contractor liability audits, and water quality testing."}
          </p>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {campaigns.map((c) => (
            <div key={c.id} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md flex flex-col justify-between hover:border-[#D9572B] transition-all group">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                  <Flag size={16} className="text-[#D9572B]" />
                </div>

                <div className="overflow-hidden border border-[#16120D] bg-[#16120D] mb-4 aspect-video">
                  <img src={c.imgSrc} alt={c.titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <h2 className="font-serif font-black text-xl text-[#16120D] mb-2 uppercase">
                  {lang === 'hi' ? c.titleHi : c.titleEn}
                </h2>

                <p className="text-[#3A332B] text-xs leading-relaxed font-medium mb-4">
                  {lang === 'hi' ? c.descHi : c.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(22,18,13,0.18)] flex justify-between items-center text-xs font-bold text-[#16120D]">
                <span className="flex items-center gap-1 text-[#D9572B]">
                  <ShieldCheck size={14} /> {lang === 'hi' ? c.metricHi : c.metricEn}
                </span>
                <Link to="/join" className="group-hover:text-[#D9572B] flex items-center gap-1">
                  JOIN <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-10 text-center max-w-3xl mx-auto border-2 border-[#16120D]">
          <h2 className="font-serif font-black text-3xl mb-4 uppercase">
            {lang === 'hi' ? 'अपना अभियान शुरू करें' : 'START AN AUDIT IN YOUR WARD'}
          </h2>
          <Link to="/join" className="inline-block bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 border-2 border-[#D9572B] hover:bg-[#EADBCE] hover:text-[#16120D] transition-all">
            {t('navJoinSwarm')}
          </Link>
        </div>

      </div>
    </div>
  );
};
