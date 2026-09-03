import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface SourceBadgeProps {
  title: string;
  publisher?: string;
  date?: string;
  url?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  title,
  publisher = 'Official Public Record / RTI Filing',
  date,
  url
}) => {
  return (
    <div className="bg-[#EADBCE] border-2 border-[#16120D] p-3 text-[11px] font-bold text-[#16120D] flex items-center justify-between gap-3 shadow-sm my-4">
      <div className="flex items-center gap-2">
        <CheckCircle size={14} className="text-[#D9572B] flex-shrink-0" />
        <div>
          <span className="text-[#D9572B] font-black uppercase tracking-wider block leading-none">
            SOURCE ATTRIBUTION / CONTEXT
          </span>
          <span className="text-xs font-black text-[#16120D] block mt-0.5">{title}</span>
          <span className="text-[10px] text-[#3A332B] font-extrabold uppercase block mt-0.5">
            {publisher} {date ? `• ${date}` : ''}
          </span>
        </div>
      </div>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brutal h-7 px-2.5 text-[10px] bg-[#16120D] text-white hover:bg-[#D9572B] flex items-center gap-1 cursor-pointer flex-shrink-0"
        >
          <span>VIEW SOURCE</span>
          <ExternalLink size={10} />
        </a>
      )}
    </div>
  );
};
