import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PEOPLE_DATABASE } from '../data/masterArchiveData';
import { User, ExternalLink, ArrowLeft, Quote } from 'lucide-react';

export const PersonDetailPage: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();

  const person = PEOPLE_DATABASE.find(p => p.id === personId) || PEOPLE_DATABASE[0];

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Link */}
        <Link 
          to="/archive" 
          className="inline-flex items-center gap-2 text-xs font-bold text-[#D9572B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Master Archive
        </Link>

        {/* Profile Card Header */}
        <div className="bg-[#1D1712] border-2 border-[#D9572B]/30 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADBCE]/10 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#2A1E17] border border-[#D9572B]/40 flex items-center justify-center text-[#D9572B]">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white font-serif">{person.fullName}</h1>
                <p className="text-sm text-[#D9572B] font-bold mt-0.5">{person.role}</p>
              </div>
            </div>
            <span className="text-xs font-mono bg-[#2A1E17] text-[#EADBCE]/70 px-3 py-1.5 rounded-lg border border-[#EADBCE]/10">
              ID: {person.id}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-bold text-white uppercase tracking-wider text-xs">Public Biography & Overview</h2>
            <p className="text-sm text-[#EADBCE]/90 leading-relaxed bg-[#2A1E17] p-4 rounded-xl border border-[#EADBCE]/5">
              {person.bio}
            </p>
          </div>

          {/* Timeline & Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#2A1E17] p-4 rounded-xl">
            <div>
              <strong className="text-white block mb-1">First CJP Public Appearance:</strong>
              <span className="text-[#EADBCE]/80">{person.firstAppearance}</span>
            </div>
            <div>
              <strong className="text-white block mb-1">Latest Tracked Activity:</strong>
              <span className="text-[#EADBCE]/80">{person.latestAppearance}</span>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <strong className="text-white block mb-1">Associated Campaigns & Movements:</strong>
              <span className="text-[#EADBCE]/80">{person.associatedCampaigns.join(', ')}</span>
            </div>
          </div>

          {/* Quotes */}
          {person.quotes.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D9572B] uppercase tracking-wider flex items-center gap-1">
                <Quote className="w-3.5 h-3.5" /> Key Verified Public Statement
              </span>
              <blockquote className="bg-[#2A1E17] border-l-4 border-[#D9572B] p-4 rounded-r-xl italic text-sm text-white">
                "{person.quotes[0]}"
              </blockquote>
            </div>
          )}

          {/* Public Appearances */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Documented Appearances & Briefings:</span>
            <ul className="space-y-1.5 text-xs text-[#EADBCE]/80">
              {person.appearances.map((app, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9572B]" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Source Citations */}
          <div className="pt-4 border-t border-[#EADBCE]/10 flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3">
              {person.socialProfiles.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9572B] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> {soc.platform} Profile
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-[#EADBCE]/60">
              <span>Source References:</span>
              {person.sourceUrls.map((url, i) => (
                <a key={i} href={url} target="_blank" rel="noreferrer" className="text-[#D9572B] hover:underline">
                  [{i + 1}]
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
