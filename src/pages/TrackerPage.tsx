import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export const TrackerPage: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const events = [
    {
      id: 'TRK-001',
      date: 'AUG 2026',
      title: '2026 Pre-Monsoon Drainage & Sanitation Audit Report Published',
      category: 'AUDIT REPORT',
      status: 'COMPLETED',
      location: 'Delhi Metro Wards 1 to 45',
      summary: 'Verified 340+ subterranean sewer lines and logged contractor desilting depth measurements ahead of heavy rains.'
    },
    {
      id: 'TRK-002',
      date: 'SEP 2026',
      title: 'Municipal Contractor Warranty Notice Board Verification',
      category: 'FIELD ACTION',
      status: 'ACTIVE',
      location: 'Commercial & Residential Sectors 14, 18, 22',
      summary: 'Checking compliance of on-site notice boards listing 3-year contractor road paving repair warranties.'
    },
    {
      id: 'TRK-003',
      date: 'OCT 2026',
      title: 'Community Drinking Water Quality Testing Kiosks',
      category: 'PUBLIC HEALTH',
      status: 'UPCOMING',
      location: '15 High-Footfall Transit Hubs',
      summary: 'Setting up mobile volunteer kiosks providing residents free rapid TDS and chlorine water testing.'
    },
    {
      id: 'TRK-004',
      date: 'NOV 2026',
      title: 'Section 4 RTI Public Tender Disclosure Filing',
      category: 'RTI DISCLOSURE',
      status: 'UPCOMING',
      location: 'Municipal Headquarters',
      summary: 'Filing batch of 100 RTI queries requesting bill-of-quantities for municipal road paving work orders.'
    }
  ];

  const filtered = filter === 'ALL' ? events : events.filter(e => e.status === filter);

  return (
    <div className="tracker-page py-12 bg-[#0d0a07] text-[#f1e8d2] font-sans">
      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[rgba(241,232,210,0.15)] pb-8">
          <div>
            <span className="inline-block bg-[#c09a25]/10 text-[#c09a25] border border-[#c09a25] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3">
              NEWSROOM INTELLIGENCE
            </span>
            <h1 className="font-serif font-black text-4xl md:text-6xl text-[#f1e8d2]">
              THE MOVEMENT TRACKER
            </h1>
          </div>

          <div className="flex gap-2 flex-wrap">
            {['ALL', 'ACTIVE', 'COMPLETED', 'UPCOMING'].map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`text-[11px] font-extrabold px-3.5 py-1.5 border ${
                  filter === st
                    ? 'bg-[#d9572b] text-white border-[#d9572b]'
                    : 'bg-[#140f0a] text-[#9e917c] border-[rgba(241,232,210,0.2)] hover:border-[#c09a25]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {filtered.map((ev) => (
            <div key={ev.id} className="bg-[#140f0a] border border-[rgba(241,232,210,0.18)] p-6 hover:border-[#c09a25] transition-all">
              <div className="flex justify-between items-center flex-wrap gap-2 mb-3 pb-3 border-b border-[rgba(241,232,210,0.1)]">
                <div className="flex items-center gap-4">
                  <span className="font-serif font-black text-2xl text-[#d9572b]">{ev.date}</span>
                  <span className="text-[10px] font-extrabold text-[#9e917c]">{ev.id} · {ev.category}</span>
                </div>
                <span className="text-[10px] font-extrabold text-[#c09a25] bg-[#c09a25]/10 border border-[#c09a25] px-3 py-1 uppercase tracking-wider">
                  {ev.status}
                </span>
              </div>

              <h3 className="font-serif font-bold text-xl text-[#f1e8d2] mb-2">{ev.title}</h3>
              <p className="text-[#9e917c] text-xs leading-relaxed mb-4 font-medium">{ev.summary}</p>

              <div className="flex items-center gap-2 text-xs font-extrabold text-[#c09a25]">
                <MapPin size={14} className="text-[#d9572b]" /> {ev.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
