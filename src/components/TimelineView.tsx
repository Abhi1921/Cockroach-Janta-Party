import React, { useState } from 'react';
import type { TimelineEvent } from '../data/timelineData';
import { Calendar } from 'lucide-react';

interface TimelineViewProps {
  events: TimelineEvent[];
}

export const TimelineView: React.FC<TimelineViewProps> = ({ events }) => {
  const years = ['ALL', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  const [selectedYear, setSelectedYear] = useState('ALL');

  const filteredEvents = selectedYear === 'ALL'
    ? events
    : events.filter(e => e.year === selectedYear);

  return (
    <div className="space-y-8">
      {/* Year Filter Buttons */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-xs font-black text-[#16120D] uppercase tracking-wider mr-2">FILTER YEAR:</span>
        {years.map((yr) => (
          <button
            key={yr}
            onClick={() => setSelectedYear(yr)}
            className={`btn-brutal h-8 px-3.5 text-xs font-black uppercase cursor-pointer ${
              selectedYear === yr
                ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]'
                : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white shadow-[2px_2px_0px_0px_#16120D]'
            }`}
          >
            {yr}
          </button>
        ))}
      </div>

      {/* Vertical Timeline Nodes */}
      <div className="relative border-l-4 border-[#16120D] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 my-8">
        {filteredEvents.map((evt, idx) => (
          <div key={idx} className="relative group">
            {/* Dot Node */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#D9572B] border-3 border-[#16120D] group-hover:scale-125 transition-transform flex items-center justify-center text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Event Box */}
            <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-5 sm:p-6 shadow-[6px_6px_0px_0px_#16120D] hover:border-[#D9572B] transition-all">
              <div className="flex items-center justify-between border-b-2 border-[#16120D] pb-2.5 mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#D9572B]" />
                  <span className="font-mono text-xs font-black text-[#D9572B] uppercase tracking-wider">{evt.date}</span>
                </div>
                <span className="bg-[#16120D] text-[#F5EFE6] text-[9.5px] font-black uppercase tracking-widest px-2.5 py-0.5 border border-[#16120D]">
                  #{evt.tag}
                </span>
              </div>

              <h3 className="font-display text-2xl uppercase tracking-wide text-[#16120D] mb-2 font-black leading-tight">
                {evt.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#3A332B] font-medium leading-relaxed">
                {evt.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
