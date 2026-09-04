import React from 'react';
import { CJP_MASTER_DATABASE_STATS, DUPLICATE_CANONICAL_MAP, OPEN_RESEARCH_QUESTIONS } from '../data/masterArchiveData';
import { Database, FileCheck, AlertTriangle } from 'lucide-react';

export const ResearchDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Banner Header */}
        <div className="bg-[#1D1712] border-2 border-[#D9572B]/40 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9572B]/20 text-[#D9572B] border border-[#D9572B]/40 text-xs font-semibold uppercase tracking-wider mb-2">
                <Database className="w-4 h-4" /> Internal Research & Quality Dashboard
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-serif">
                CJP Master Database Health & Quality Control Panel
              </h1>
              <p className="text-xs sm:text-sm text-[#EADBCE]/80 mt-1">
                Real-time research statistics, verified vs unverified source ratios, duplicate mapping, and open investigation logs.
              </p>
            </div>

            <div className="bg-[#2A1E17] p-4 rounded-xl border border-[#D9572B]/30 text-xs text-right shrink-0">
              <span className="text-[#EADBCE]/60 block">Research Last Updated:</span>
              <strong className="text-emerald-400 text-sm">{CJP_MASTER_DATABASE_STATS.lastUpdated}</strong>
            </div>
          </div>
        </div>

        {/* Database Metric Counters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
          {[
            { label: 'Total People', count: CJP_MASTER_DATABASE_STATS.totalPeople },
            { label: 'Domains Map', count: CJP_MASTER_DATABASE_STATS.totalDomains },
            { label: 'Social Accounts', count: CJP_MASTER_DATABASE_STATS.totalSocialAccounts },
            { label: 'YouTube Videos', count: CJP_MASTER_DATABASE_STATS.totalVideos },
            { label: 'News Articles', count: CJP_MASTER_DATABASE_STATS.totalNewsArticles },
            { label: 'Protests Logged', count: CJP_MASTER_DATABASE_STATS.totalProtests },
            { label: 'Verified Sources', count: CJP_MASTER_DATABASE_STATS.totalVerifiedSources }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-4 space-y-1">
              <span className="text-2xl font-black text-[#D9572B]">{stat.count}</span>
              <span className="text-[11px] text-[#EADBCE]/70 block font-semibold leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Audit Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Canonical Duplicate Detector */}
          <div className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-400" /> Canonical Duplicate Mapping Log
            </h2>
            <p className="text-xs text-[#EADBCE]/70">
              Prevents treating reposts of the same founding statement as independent evidence.
            </p>

            <div className="space-y-3">
              {DUPLICATE_CANONICAL_MAP.map((item, idx) => (
                <div key={idx} className="bg-[#2A1E17] p-4 rounded-lg text-xs space-y-2">
                  <div className="font-bold text-white">{item.canonicalSource}</div>
                  <div className="text-[#EADBCE]/80">{item.notes}</div>
                  <div className="text-emerald-400 font-mono text-[11px]">First Published: {item.firstPublicationDate}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Research Questions */}
          <div className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> Open Investigation Queries
            </h2>
            <p className="text-xs text-[#EADBCE]/70">
              Active verification queries currently under review by researchers.
            </p>

            <div className="space-y-3">
              {OPEN_RESEARCH_QUESTIONS.map((q) => (
                <div key={q.id} className="bg-[#2A1E17] p-4 rounded-lg text-xs space-y-2">
                  <div className="flex justify-between font-bold text-white">
                    <span>{q.topic}</span>
                    <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-mono text-[10px]">{q.currentStatus}</span>
                  </div>
                  <div className="text-[#EADBCE]/80">{q.description}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
