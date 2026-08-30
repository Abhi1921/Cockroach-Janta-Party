import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-[#EADBCE] text-[#16120D] border-t-2 border-[#16120D] pt-16 pb-8 font-sans">
      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 border-b border-[rgba(22,18,13,0.18)] pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center font-serif font-black text-xl">
                🪳
              </div>
              <div>
                <span className="font-serif font-black text-xl text-[#16120D] block">{t('brandName')}</span>
                <span className="font-extrabold text-xs text-[#D9572B] uppercase tracking-widest">{t('subLabel')}</span>
              </div>
            </div>

            <p className="text-[#3A332B] text-xs font-medium leading-relaxed max-w-sm mb-6">
              {t('footerDesc')}
            </p>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#16120D]">
              <Globe size={14} className="text-[#D9572B]" />
              <span>{lang === 'hi' ? 'भाषा चुनें:' : 'LANGUAGE:'}</span>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 border ${lang === 'en' ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]' : 'border-[rgba(22,18,13,0.2)] text-[#16120D]'}`}
              >
                ENGLISH
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2.5 py-1 border ${lang === 'hi' ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]' : 'border-[rgba(22,18,13,0.2)] text-[#16120D]'}`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="font-extrabold text-[#16120D] text-xs uppercase tracking-widest mb-4 border-b border-[rgba(22,18,13,0.18)] pb-2">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3A332B] font-extrabold uppercase tracking-wider">
              <li><Link to="/vision" className="hover:text-[#D9572B] transition-colors">{t('navVision')}</Link></li>
              <li><Link to="/manifesto" className="hover:text-[#D9572B] transition-colors">{t('navManifesto')}</Link></li>
              <li><Link to="/updates" className="hover:text-[#D9572B] transition-colors">{t('navJournal')}</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D9572B] transition-colors">{t('navGallery')}</Link></li>
              <li><Link to="/issues" className="hover:text-[#D9572B] transition-colors">{t('navIssues')}</Link></li>
              <li><Link to="/protests" className="hover:text-[#D9572B] transition-colors">{t('navProtests')}</Link></li>
            </ul>
          </div>

          {/* PARTICIPATE */}
          <div>
            <h4 className="font-extrabold text-[#16120D] text-xs uppercase tracking-widest mb-4 border-b border-[rgba(22,18,13,0.18)] pb-2">
              PARTICIPATE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3A332B] font-extrabold uppercase tracking-wider">
              <li><Link to="/join" className="hover:text-[#D9572B] transition-colors">Join</Link></li>
              <li><Link to="/members" className="hover:text-[#D9572B] transition-colors">Members</Link></li>
              <li><Link to="/contact" className="hover:text-[#D9572B] transition-colors">Raise an Issue</Link></li>
              <li><Link to="/contact" className="hover:text-[#D9572B] transition-colors">Submit a Story</Link></li>
              <li><a href="#support-section" className="hover:text-[#D9572B] transition-colors">Support</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-extrabold text-[#16120D] text-xs uppercase tracking-widest mb-4 border-b border-[rgba(22,18,13,0.18)] pb-2">
              LEGAL &amp; POLICIES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#3A332B] font-extrabold uppercase tracking-wider">
              <li><Link to="/terms" className="hover:text-[#D9572B] transition-colors">Disclaimer</Link></li>
              <li><Link to="/privacy" className="hover:text-[#D9572B] transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-[#D9572B] transition-colors">Terms</Link></li>
              <li><Link to="/terms" className="hover:text-[#D9572B] transition-colors">Accessibility</Link></li>
              <li><Link to="/terms" className="hover:text-[#D9572B] transition-colors">Editorial Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#3A332B] font-extrabold uppercase tracking-wider">
          <p>{t('footerCopyright')}</p>
          <p className="text-[#D9572B]">LESS CEREMONY. MORE ACCOUNTABILITY. ★</p>
        </div>
      </div>
    </footer>
  );
};
