import React, { useState } from 'react';
import { DOMAIN_DISCOVERY_MAP, type DomainRecord } from '../data/masterArchiveData';
import { Globe, ShieldCheck, ShieldAlert, ExternalLink, Filter, HelpCircle } from 'lucide-react';

export const DomainsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredDomains = DOMAIN_DISCOVERY_MAP.filter(d => {
    return filter === 'ALL' || d.classification === filter;
  });

  const getDomainBadge = (classification: DomainRecord['classification']) => {
    switch (classification) {
      case 'OFFICIAL':
        return <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-400 border border-green-500/30 text-xs px-3 py-1 rounded-full font-bold"><ShieldCheck className="w-3.5 h-3.5" /> Official Claimed</span>;
      case 'SATIRICAL_FAN':
        return <span className="inline-flex items-center gap-1 bg-purple-500/10 text-purple-400 border border-purple-500/30 text-xs px-3 py-1 rounded-full font-bold"><ShieldAlert className="w-3.5 h-3.5" /> Satirical / Fan-Built</span>;
      case 'ASSOCIATED':
        return <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs px-3 py-1 rounded-full font-bold"><Globe className="w-3.5 h-3.5" /> Community / Associated</span>;
      case 'UNVERIFIED':
      default:
        return <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-bold"><HelpCircle className="w-3.5 h-3.5" /> Unverified / Typosquatting</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-[#1D1712] border-2 border-[#D9572B]/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9572B]/20 text-[#D9572B] border border-[#D9572B]/40 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-4 h-4" /> Domain Intelligence Map
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
            13 Discovered CJP Web Domains & Official Status Directory
          </h1>
          <p className="text-sm sm:text-base text-[#EADBCE]/80 max-w-3xl">
            Because multiple domains use CJP branding, this archive independently tracks and verifies every domain to distinguish official outlets from fan projects, satirical blogs, mirrors, and typosquatting sites.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Filter className="w-4 h-4 text-[#D9572B]" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 bg-[#2A1E17] border border-[#D9572B]/30 rounded-lg text-xs text-white focus:outline-none"
            >
              <option value="ALL">Show All 13 Domains</option>
              <option value="OFFICIAL">Official Outlets</option>
              <option value="SATIRICAL_FAN">Satirical & Fan-Built</option>
              <option value="ASSOCIATED">Community Associated</option>
              <option value="UNVERIFIED">Unverified & Typosquatting</option>
            </select>
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDomains.map((d: DomainRecord) => (
            <div key={d.domain} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[#EADBCE]/10 pb-3">
                  <span className="font-mono text-base font-bold text-white">{d.domain}</span>
                  {getDomainBadge(d.classification)}
                </div>

                <p className="text-xs text-[#EADBCE]/90">{d.notes}</p>

                {d.disclaimerText && (
                  <div className="bg-purple-950/40 border border-purple-500/30 rounded-lg p-3 text-xs text-purple-200">
                    <strong className="block text-purple-400 font-bold mb-0.5">Disclaimer Notice:</strong>
                    "{d.disclaimerText}"
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 text-xs text-[#EADBCE]/60 bg-[#2A1E17] p-3 rounded-lg">
                  <div><strong>Discovered:</strong> {d.firstDiscovered}</div>
                  <div><strong>Claims Official:</strong> {d.claimsOfficial ? 'Yes' : 'No'}</div>
                  <div className="col-span-2"><strong>Available Pages:</strong> {d.pagesAvailable.join(', ')}</div>
                </div>
              </div>

              <a
                href={d.url}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2A1E17] hover:bg-[#38281E] text-[#D9572B] hover:text-white border border-[#D9572B]/30 text-xs font-bold py-2.5 rounded-lg transition"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Inspect Domain Source URL
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
