import React, { useState } from 'react';
import { FACT_CHECK_DATABASE, type FactCheckRecord } from '../data/masterArchiveData';
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle, ExternalLink, Search } from 'lucide-react';

export const FactCheckPage: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFactChecks = FACT_CHECK_DATABASE.filter(item => {
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    const matchesSearch = 
      item.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.evidence.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.madeBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: FactCheckRecord['status']) => {
    switch (status) {
      case 'VERIFIED':
        return <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-bold"><CheckCircle2 className="w-4 h-4" /> VERIFIED FACT</span>;
      case 'PARTIALLY_VERIFIED':
        return <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs px-3 py-1 rounded-full font-bold"><AlertTriangle className="w-4 h-4" /> PARTIALLY VERIFIED</span>;
      case 'DISPUTED':
        return <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-bold"><HelpCircle className="w-4 h-4" /> DISPUTED CLAIM</span>;
      case 'FALSE':
        return <span className="inline-flex items-center gap-1 bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs px-3 py-1 rounded-full font-bold"><XCircle className="w-4 h-4" /> FALSE / UNSUBSTANTIATED</span>;
      case 'UNVERIFIED':
      default:
        return <span className="inline-flex items-center gap-1 bg-gray-500/20 text-gray-400 border border-gray-500/30 text-xs px-3 py-1 rounded-full font-bold"><HelpCircle className="w-4 h-4" /> UNVERIFIED</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-[#1D1712] border-2 border-[#D9572B]/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            CJP Public Fact-Check & Verification Matrix
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl">
            Independent evaluation of viral claims, political statements, and media reports surrounding the Cockroach Janta Party. Every verdict is backed by primary documents, court records, and official electoral databases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EADBCE]/40" />
              <input
                type="text"
                placeholder="Search claims, topics, or sources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#2A1E17] border border-[#D9572B]/30 rounded-lg text-sm text-white focus:outline-none focus:border-[#D9572B]"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 bg-[#2A1E17] border border-[#D9572B]/30 rounded-lg text-sm text-white focus:outline-none"
            >
              <option value="ALL">All Verdict Statuses</option>
              <option value="VERIFIED">Verified Facts</option>
              <option value="PARTIALLY_VERIFIED">Partially Verified</option>
              <option value="DISPUTED">Disputed Claims</option>
              <option value="FALSE">False Claims</option>
            </select>
          </div>
        </div>

        {/* Fact-Check List */}
        <div className="space-y-6">
          {filteredFactChecks.map((item: FactCheckRecord) => (
            <div key={item.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EADBCE]/10 pb-3">
                <div>
                  <span className="text-xs font-mono text-[#D9572B] font-bold bg-[#D9572B]/10 px-2 py-0.5 rounded">
                    {item.id} • Reported on {item.date}
                  </span>
                  <div className="text-xs text-[#EADBCE]/60 mt-1">Claim Made By: <strong className="text-[#EADBCE]">{item.madeBy}</strong></div>
                </div>
                <div>{getStatusBadge(item.status)}</div>
              </div>

              <h2 className="text-lg font-bold text-white">"{item.claim}"</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#2A1E17] border border-emerald-500/20 rounded-lg p-4 space-y-1">
                  <strong className="text-emerald-400 block font-bold">Primary Evidence & Verified Facts:</strong>
                  <p className="text-[#EADBCE]/90">{item.evidence}</p>
                </div>
                <div className="bg-[#2A1E17] border border-amber-500/20 rounded-lg p-4 space-y-1">
                  <strong className="text-amber-400 block font-bold">Counter-Evidence / Context:</strong>
                  <p className="text-[#EADBCE]/90">{item.counterEvidence}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                {item.sourceUrls.map((url, idx) => (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D9572B] hover:underline font-semibold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Source Citation {idx + 1}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
