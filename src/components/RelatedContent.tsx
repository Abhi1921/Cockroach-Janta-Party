import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Link2, Sparkles } from 'lucide-react';

export interface RelatedLink {
  title: string;
  category: 'Article' | 'Issue' | 'Campaign' | 'Poster' | 'Video';
  href: string;
  slogan?: string;
}

interface RelatedContentProps {
  links: RelatedLink[];
}

export const RelatedContent: React.FC<RelatedContentProps> = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-6 shadow-[6px_6px_0px_0px_#16120D] my-8">
      <div className="flex items-center justify-between border-b-2 border-white/20 pb-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-black text-[#D9572B] uppercase tracking-widest">
          <Link2 size={16} />
          <span>RELATED CJP ECOSYSTEM LINKS</span>
        </div>
        <span className="text-[10px] font-mono text-[#EADBCE]">CONNECTED KNOWLEDGE</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className="group bg-[#231F1A] border-2 border-white/10 p-4 hover:border-[#D9572B] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="bg-[#D9572B] text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-wider">
                  {item.category}
                </span>
                <Sparkles size={12} className="text-[#FFB703] group-hover:rotate-12 transition-transform" />
              </div>
              <h4 className="font-display text-lg text-white group-hover:text-[#D9572B] transition-colors leading-snug uppercase font-black">
                {item.title}
              </h4>
              {item.slogan && (
                <p className="text-[11px] text-[#EADBCE] font-bold italic mt-1 leading-tight">
                  "{item.slogan}"
                </p>
              )}
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-extrabold text-[#D9572B] uppercase tracking-wider">
              <span>EXPLORE {item.category.toUpperCase()}</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
