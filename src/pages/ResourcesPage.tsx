import React from 'react';
import { Download } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const docs = [
    { title: 'Section 4 RTI Proactive Tender Disclosure Application Format', category: 'RTI TEMPLATE', format: 'PDF', size: '1.2 MB' },
    { title: 'Subterranean Drain Desilting Depth Verification Manual', category: 'FIELD GUIDE', format: 'PDF', size: '2.4 MB' },
    { title: 'Contractor 3-Year Repair Warranty Notice Board Legal Guide', category: 'LEGAL GUIDE', format: 'PDF', size: '850 KB' },
    { title: 'Household Water Quality TDS & Chlorine Field Testing Guide', category: 'HEALTH GUIDE', format: 'PDF', size: '1.8 MB' }
  ];

  return (
    <div className="resources-page py-12 bg-[#0d0a07] text-[#f1e8d2] font-sans">
      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#c09a25]/10 text-[#c09a25] border border-[#c09a25] px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-3">
            PUBLIC DOMAIN DOCUMENTS
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#f1e8d2] mb-4">
            PUBLIC RESOURCE ROOM
          </h1>
          <p className="text-[#9e917c] text-base leading-relaxed font-medium">
            Download free RTI query templates, subterranean drainage manuals, public notices, and civic audit guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {docs.map((doc, idx) => (
            <div key={idx} className="bg-[#140f0a] border border-[rgba(241,232,210,0.18)] p-6 hover:border-[#c09a25] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#c09a25] uppercase tracking-widest block mb-2">{doc.category}</span>
                <h3 className="font-serif font-black text-lg text-[#f1e8d2] mb-4 leading-snug">{doc.title}</h3>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[rgba(241,232,210,0.1)]">
                <span className="text-xs text-[#9e917c] font-bold">{doc.format} · {doc.size}</span>
                <button
                  onClick={() => alert(`Downloading ${doc.title}...`)}
                  className="bg-[#0d0a07] text-[#f1e8d2] font-extrabold text-xs uppercase tracking-wider px-4 py-2 border border-[rgba(241,232,210,0.2)] hover:border-[#d9572b] hover:text-[#d9572b] inline-flex items-center gap-1.5"
                >
                  <Download size={14} /> DOWNLOAD
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
