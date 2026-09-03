import React from 'react';
import type { GlossaryEntry } from '../data/glossaryData';
import { ShieldCheck } from 'lucide-react';

interface GlossaryCardProps {
  entry: GlossaryEntry;
}

export const GlossaryCard: React.FC<GlossaryCardProps> = ({ entry }) => {
  return (
    <div className="bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] p-5 sm:p-6 shadow-[5px_5px_0px_0px_#16120D] hover:border-[#D9572B] transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-3 mb-3">
          <span className="w-9 h-9 rounded-full bg-[#16120D] text-[#F5EFE6] font-display text-xl flex items-center justify-center font-black border border-[#16120D]">
            {entry.letter}
          </span>
          <span className="bg-[#D9572B] text-white text-[9.5px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-[#16120D]">
            {entry.category}
          </span>
        </div>

        <h3 className="font-display text-2xl uppercase tracking-wide text-[#16120D] mb-2 font-black leading-tight">
          {entry.term}
        </h3>

        <div className="space-y-2.5 text-xs text-[#3A332B] font-medium leading-relaxed my-3">
          <div className="bg-[#EADBCE] p-3 border border-[#16120D]/20">
            <span className="text-[9.5px] font-black text-[#16120D] uppercase tracking-wider block mb-1">
              GENERAL DEFINITION
            </span>
            <p>{entry.definition}</p>
          </div>

          <div className="bg-[#16120D] text-[#F5EFE6] p-3 border border-[#16120D]">
            <span className="text-[9.5px] font-black text-[#D9572B] uppercase tracking-wider block mb-1">
              CJP SATIRE INTERPRETATION
            </span>
            <p className="text-[#EADBCE] font-bold">{entry.cjpInterpretation}</p>
          </div>
        </div>
      </div>

      {entry.sourceReference && (
        <div className="mt-3 pt-2 border-t border-[#16120D]/20 text-[9.5px] font-bold text-[#3A332B] flex items-center gap-1">
          <ShieldCheck size={12} className="text-[#D9572B] flex-shrink-0" />
          <span>REFERENCE: {entry.sourceReference}</span>
        </div>
      )}
    </div>
  );
};
