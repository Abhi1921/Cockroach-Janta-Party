import React from 'react';
import { INTERNAL_DISPUTES_DATABASE, type InternalDisputeRecord } from '../data/masterArchiveData';
import { ExternalLink, ShieldAlert, FileText, Scale } from 'lucide-react';

export const InternalDisputesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-[#1D1712] border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" /> Neutral Research Archive • CJP Internal Disputes
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif tracking-tight">
            CJP vs CJP-Democratic (CJP-D) — Factional Split & Claims Archive
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl leading-relaxed">
            Objective, source-backed public log of internal leadership disputes, breakaway faction declarations, and unresolved organizational claims as reported by mainstream Indian media (Loksatta, Indian Express, Times of India).
          </p>

          <div className="bg-[#2A1E17] border border-amber-500/30 rounded-xl p-4 text-xs text-amber-200/90 space-y-1">
            <strong className="block font-bold text-amber-400">Archival Neutrality Policy:</strong>
            This archive does not endorse political claims or take sides in internal disputes. All allegations are attributed strictly to published primary media reports and verified public statements.
          </div>
        </div>

        {/* Disputes Matrix */}
        <div className="space-y-6">
          {INTERNAL_DISPUTES_DATABASE.map((dispute: InternalDisputeRecord) => (
            <div key={dispute.id} className="bg-[#1D1712] border border-[#D9572B]/30 rounded-xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EADBCE]/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#D9572B] font-bold bg-[#D9572B]/10 px-2.5 py-1 rounded">
                    {dispute.id} • {dispute.date}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2">{dispute.disputeTitle}</h2>
                </div>
                <div className="text-xs text-[#EADBCE]/60">
                  Parties: <strong className="text-white">{dispute.partiesInvolved.join(', ')}</strong>
                </div>
              </div>

              {/* Claims Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#2A1E17] border border-rose-500/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase">
                    <ShieldAlert className="w-4 h-4" /> Reported Allegations (CJP-D Faction)
                  </div>
                  <p className="text-xs text-[#EADBCE]/90 leading-relaxed">
                    {dispute.reportedAllegation}
                  </p>
                </div>

                <div className="bg-[#2A1E17] border border-blue-500/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase">
                    <FileText className="w-4 h-4" /> Leadership Response (CJP Founders)
                  </div>
                  <p className="text-xs text-[#EADBCE]/90 leading-relaxed">
                    {dispute.response}
                  </p>
                </div>
              </div>

              {/* Confirmed Facts vs Unresolved Disputes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 space-y-1">
                  <strong className="text-emerald-400 block font-bold">Independently Confirmed Fact:</strong>
                  <p className="text-[#EADBCE]/90">{dispute.confirmedFact}</p>
                </div>
                <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 space-y-1">
                  <strong className="text-amber-400 block font-bold">Unresolved Dispute Status:</strong>
                  <p className="text-[#EADBCE]/90">{dispute.unresolvedDispute}</p>
                </div>
              </div>

              {/* Source Verification Links */}
              <div className="pt-4 border-t border-[#EADBCE]/10">
                <span className="text-xs font-bold text-[#EADBCE]/60 block mb-2">Verified Media Citations:</span>
                <div className="flex flex-wrap gap-3">
                  {dispute.sourceUrls.map((url, idx) => (
                    <a
                      key={idx}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#D9572B] hover:underline font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Source {idx + 1} ({new URL(url).hostname})
                    </a>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
