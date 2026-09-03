import React from 'react';
import { List, ChevronRight } from 'lucide-react';

export interface TOCHeading {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  headings: TOCHeading[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (!headings || headings.length === 0) return null;

  return (
    <div className="bg-[#F5EFE6] border-3 border-[#16120D] p-5 shadow-[4px_4px_0px_0px_#16120D] mb-8">
      <div className="flex items-center gap-2 border-b-2 border-[#16120D] pb-2.5 mb-3 text-xs font-black text-[#16120D] uppercase tracking-wider">
        <List size={16} className="text-[#D9572B]" />
        <span>TABLE OF CONTENTS</span>
      </div>
      <ul className="space-y-2 text-xs font-bold text-[#16120D]">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="flex items-center gap-1.5 hover:text-[#D9572B] transition-colors py-0.5"
            >
              <ChevronRight size={12} className="text-[#D9572B] flex-shrink-0" />
              <span>{h.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
