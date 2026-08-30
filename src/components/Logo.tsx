import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = true }) => {
  const { t } = useLanguage();

  const iconSizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-14 h-14 text-2xl'
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl'
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Original Stylized Mascot Mark */}
      <div className={`${iconSizes[size]} rounded-full bg-[#120D09] border-2 border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.3)] flex items-center justify-center relative overflow-hidden transition-transform hover:scale-105`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E65100]/20 to-transparent"></div>
        <span role="img" aria-label="CJP Resilient Mascot Symbol" className="relative z-10 filter drop-shadow">
          🪳
        </span>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-serif font-black tracking-tight text-[#F7F4EB] ${titleSizes[size]}`}>
          {t('brandName')}
        </span>
        {showTagline && (
          <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider mt-1">
            {t('estYear')}
          </span>
        )}
      </div>
    </div>
  );
};
