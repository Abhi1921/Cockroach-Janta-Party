import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Eye } from 'lucide-react';

export const AccessibilityPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="accessibility-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'एक्सेसिबिलिटी नीति | कॉकरोच जनता पार्टी' : 'Accessibility Statement | Cockroach Janta Party'}
        description="Official WCAG 2.2 AA accessibility policy and screen-reader standards for Cockroach Janta Party portal."
        canonicalUrl="https://cockroachjantapartywale.com/accessibility"
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            INCLUSIVE WEB DESIGN STANDARDS
          </span>
          <h1 className="font-serif font-black text-4xl md:text-5xl text-[#16120D] mb-3 uppercase tracking-tight">
            ACCESSIBILITY STATEMENT
          </h1>
          <p className="text-xs text-[#3A332B] font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            WCAG 2.2 LEVEL AA COMPLIANCE COMMITMENT
          </p>
        </div>

        <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl space-y-6 text-xs text-[#3A332B] leading-relaxed font-medium">
          <div className="flex items-start gap-3 p-4 bg-[#EADBCE] border border-[#16120D]">
            <Eye size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif font-black text-sm text-[#16120D] uppercase mb-1">
                ACCESSIBILITY FOR ALL CITIZENS
              </h3>
              <p className="text-xs text-[#3A332B]">
                We ensure that CJP web tools, digital ID cards, and public audit reports are accessible to individuals of all abilities across screen-readers and mobile viewports.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-[#16120D] uppercase mb-2">1. Keyboard &amp; Screen Reader Support</h3>
            <p>
              Includes skip navigation links, high contrast ratio text (7:1+), visible keyboard focus indicators, and semantic HTML5 structural tags.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
