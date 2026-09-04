import React from 'react';
import { DOCUMENTS_DATABASE, type DocumentRecord } from '../data/masterArchiveData';
import { FileText, ExternalLink } from 'lucide-react';

export const DocumentArchivePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-[#1D1712] border-2 border-[#D9572B]/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9572B]/20 text-[#D9572B] border border-[#D9572B]/40 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4" /> Public Document Repository
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            CJP Public Documents, Court Records & Manifesto PDFs
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl">
            Metadata repository documenting publicly issued charters, court hearing transcripts, press releases, and audit templates. All items link to original external source providers under fair-use information guidelines.
          </p>
        </div>

        {/* Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCUMENTS_DATABASE.map((doc: DocumentRecord) => (
            <div key={doc.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[#EADBCE]/10 pb-3">
                  <span className="text-xs font-mono font-bold text-[#D9572B] bg-[#D9572B]/10 px-2.5 py-1 rounded">
                    {doc.documentType}
                  </span>
                  <span className="text-xs text-[#EADBCE]/50">{doc.date}</span>
                </div>

                <h2 className="text-lg font-bold text-white">{doc.title}</h2>
                <p className="text-xs text-[#EADBCE]/80">{doc.summary}</p>

                <div className="bg-[#2A1E17] p-3 rounded-lg text-xs text-[#EADBCE]/60">
                  <strong>License / Status:</strong> {doc.licenseStatus}
                </div>
              </div>

              <a
                href={doc.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D9572B] hover:bg-[#b8451f] text-white text-xs font-bold py-2.5 rounded-lg transition"
              >
                <ExternalLink className="w-4 h-4" /> View Original Document Source
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
