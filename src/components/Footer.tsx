import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
  Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: '𝕏',
      url: 'https://x.com/cjpindia',
      handle: '@cjpindia'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/cjpindia',
      handle: '@cjpindia'
    },
    {
      name: 'YouTube',
      icon: '▶️',
      url: 'https://youtube.com/@cjpindia',
      handle: '@cjpindia'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: 'https://t.me/cjpindia',
      handle: 'cjpindia'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://whatsapp.com/channel/cjpindia',
      handle: 'CJP Swarm'
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Abhi1921/Cockroach-Janta-Party',
      handle: 'Cockroach-Janta-Party'
    }
  ];

  return (
    <footer className="bg-[#16120D] text-[#F5EFE6] border-t-4 border-[#D9572B] pt-16 pb-12 font-sans selection:bg-[#D9572B] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Top CTA Banner in Footer */}
        <div className="bg-[#231F1A] border-2 border-white/10 p-8 md:p-10 mb-16 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest inline-block">
              CIVIC ACTION MOVEMENT · EST. 2026
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-[#F5EFE6] uppercase leading-tight">
              TURN APATHY INTO CIVIC ACTION
            </h3>
            <p className="text-xs text-[#EADBCE] font-medium max-w-xl">
              Join thousands of student observers, RTI advocates, and neighborhood residents demanding transparent road warranties, clean tap water, and open public records.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/join"
              className="bg-[#D9572B] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-4 border border-white hover:bg-white hover:text-[#16120D] transition-all shadow-lg flex items-center gap-2"
            >
              <span>JOIN THE SWARM NOW</span> →
            </Link>
          </div>
        </div>

        {/* Master Navigation & Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Column (3 Cols) */}
          <div className="md:col-span-3 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#D9572B] flex items-center justify-center font-display text-2xl shadow-md overflow-hidden p-0.5">
                <img src="/cjp_logo_emblem.svg" alt="Cockroach Janta Party Logo Emblem" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-[#F5EFE6] block leading-none tracking-wider">
                  {lang === 'hi' ? 'कॉकरोच जनता पार्टी' : 'COCKROACH JANTA PARTY'}
                </span>
                <span className="font-extrabold text-[10px] text-[#D9572B] uppercase tracking-widest block mt-1">
                  {t('subLabel')}
                </span>
              </div>
            </div>

            <p className="text-[#EADBCE] text-xs font-medium leading-relaxed">
              {t('footerDesc')}
            </p>

            {/* Secretariat Intake Desk Details */}
            <div className="bg-[#231F1A] border border-white/10 p-4 space-y-2 text-xs">
              <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider block">
                OFFICIAL CIVIC SECRETARIAT:
              </span>
              <div className="flex items-center gap-2 text-[#EADBCE] font-bold">
                <Mail size={14} className="text-[#D9572B] flex-shrink-0" />
                <span>info@cockroachjantaparty.org.in</span>
              </div>
              <div className="flex items-center gap-2 text-[#EADBCE] font-bold">
                <MapPin size={14} className="text-[#D9572B] flex-shrink-0" />
                <span>Secretariat: New Delhi, India</span>
              </div>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#F5EFE6] pt-2">
              <Globe size={15} className="text-[#D9572B]" />
              <span className="uppercase">{lang === 'hi' ? 'भाषा चुनें:' : 'SELECT LANGUAGE:'}</span>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 border transition-all ${
                  lang === 'en' ? 'bg-[#D9572B] text-white border-[#D9572B]' : 'bg-[#231F1A] border-white/20 text-[#EADBCE] hover:text-white'
                }`}
              >
                ENGLISH
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 border transition-all ${
                  lang === 'hi' ? 'bg-[#D9572B] text-white border-[#D9572B]' : 'bg-[#231F1A] border-white/20 text-[#EADBCE] hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Column 2: CORE MOVEMENT (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-lg text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-2">
              CORE MOVEMENT
            </h4>
            <ul className="space-y-2 text-[11px] text-[#EADBCE] font-extrabold uppercase tracking-wider">
              <li><Link to="/vision" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• VISION &amp; CORE GOALS</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/manifesto" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• 5-POINT MANIFESTO</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/founder" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• FOUNDER ABHIJEET DIPKE</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/dimagi-naxal" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• DIMAGI NAXAL EXPLAINER</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/school-thik-karo" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• SCHOOL THIK KARO DRIVE</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/parody-history" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• SATIRE HISTORY</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/about" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• ABOUT MOVEMENT</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/issues" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• PUBLIC ISSUES DESK</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
            </ul>
          </div>

          {/* Column 3: GROUND & TECH (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-lg text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-2">
              GROUND &amp; TECH
            </h4>
            <ul className="space-y-2 text-[11px] text-[#EADBCE] font-extrabold uppercase tracking-wider">
              <li><Link to="/protests" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• PROTESTS TIMELINE</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/black-monday" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• 20 JULY BLACK MONDAY</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/bitchat" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• BITCHAT P2P MESH</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/protest-guidelines" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• PROTEST GUIDELINES</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/tracker" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• MILESTONE TRACKER</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/members" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• MEMBER REGISTRY</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/portal" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• DIGITAL MEMBER PORTAL</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
              <li><Link to="/join" className="hover:text-[#D9572B] transition-colors flex items-center justify-between"><span>• JOIN THE SWARM</span> <span className="text-[10px] text-[#D9572B]">→</span></Link></li>
            </ul>
          </div>

          {/* Column 4: MEDIA & LEGAL (3 Cols) */}
          <div className="md:col-span-3 space-y-5">
            <div>
              <h4 className="font-display text-lg text-[#F5EFE6] uppercase tracking-wider border-b border-[#D9572B] pb-2 mb-3">
                MEDIA &amp; RESOURCES
              </h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[10px] font-extrabold text-[#EADBCE] uppercase">
                <Link to="/news" className="hover:text-[#D9572B] transition-colors">• NEWS</Link>
                <Link to="/articles" className="hover:text-[#D9572B] transition-colors">• JOURNAL</Link>
                <Link to="/posters" className="hover:text-[#D9572B] transition-colors">• POSTERS</Link>
                <Link to="/gallery" className="hover:text-[#D9572B] transition-colors">• GALLERY</Link>
                <Link to="/press-kit" className="hover:text-[#D9572B] transition-colors">• PRESS KIT</Link>
                <Link to="/quotes" className="hover:text-[#D9572B] transition-colors">• QUOTES</Link>
                <Link to="/resources" className="hover:text-[#D9572B] transition-colors">• RESOURCES</Link>
                <Link to="/faq" className="hover:text-[#D9572B] transition-colors">• FAQ DESK</Link>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#F5EFE6] uppercase tracking-wider border-b border-white/10 pb-1 mb-2">
                GOVERNANCE &amp; LEGAL
              </h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-[10px] font-extrabold text-[#EADBCE] uppercase">
                <Link to="/support-dev" className="hover:text-[#D9572B] transition-colors flex items-center gap-1 text-[#D9572B]"><Heart size={10} /> SUPPORT DEV</Link>
                <Link to="/transparency" className="hover:text-[#D9572B] transition-colors">• AUDIT LOGS</Link>
                <Link to="/disclaimer" className="hover:text-[#D9572B] transition-colors">• DISCLAIMER</Link>
                <Link to="/privacy" className="hover:text-[#D9572B] transition-colors">• PRIVACY</Link>
                <Link to="/terms" className="hover:text-[#D9572B] transition-colors">• TERMS</Link>
                <Link to="/refund-policy" className="hover:text-[#D9572B] transition-colors">• REFUNDS</Link>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <h5 className="text-[10px] font-extrabold text-[#F5EFE6] uppercase tracking-wider mb-2">OFFICIAL SOCIAL CHANNELS</h5>
              <div className="grid grid-cols-3 gap-1.5">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#231F1A] border border-white/10 p-1.5 text-[10px] font-extrabold text-[#EADBCE] hover:text-white hover:border-[#D9572B] transition-all flex items-center gap-1"
                  >
                    <span>{s.icon}</span>
                    <span className="truncate">{s.name.split(' ')[0]}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#EADBCE] font-extrabold uppercase tracking-wider pt-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#D9572B]" />
            <span>{t('footerCopyright')}</span>
          </div>
          <div className="text-[#D9572B] font-black tracking-widest bg-[#231F1A] px-4 py-1.5 border border-[#D9572B]/40">
            LESS CEREMONY. MORE ACCOUNTABILITY. ★
          </div>
        </div>

      </div>
    </footer>
  );
};
