import React, { useState, useMemo } from 'react';
import { 
  MASTER_TIMELINE, 
  PEOPLE_DATABASE, 
  DOMAIN_DISCOVERY_MAP, 
  YOUTUBE_MASTER_DATABASE, 
  SOCIAL_MEDIA_DATABASE, 
  NEWS_ARCHIVE, 
  POSTER_ARCHIVE, 
  MANIFESTO_VERSIONS, 
  DUPLICATE_CANONICAL_MAP, 
  OPEN_RESEARCH_QUESTIONS,
  type TimelineItem,
  type DomainRecord
} from '../data/masterArchiveData';
import { 
  Search, 
  ShieldCheck, 
  ShieldAlert, 
  ExternalLink, 
  Calendar, 
  Globe, 
  Users, 
  Video as Youtube, 
  Share2 as Twitter, 
  Newspaper, 
  FileText, 
  Image as ImageIcon, 
  HelpCircle, 
  Layers, 
  CheckCircle,
  Filter,
  ArrowUpDown
} from 'lucide-react';

export const MasterArchivePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('timeline');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [confidenceFilter, setConfidenceFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [sortOrder, setSortOrder] = useState<'OLDEST_FIRST' | 'NEWEST_FIRST'>('OLDEST_FIRST');

  // Filtered Master Timeline
  const filteredTimeline = useMemo(() => {
    return MASTER_TIMELINE.filter(item => {
      const matchesSearch = 
        item.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.people.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesConfidence = confidenceFilter === 'ALL' || item.confidence === confidenceFilter;
      const matchesCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
      return matchesSearch && matchesConfidence && matchesCategory;
    }).sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'OLDEST_FIRST' ? dateA - dateB : dateB - dateA;
    });
  }, [searchQuery, confidenceFilter, categoryFilter, sortOrder]);

  const getDomainBadge = (classification: DomainRecord['classification']) => {
    switch (classification) {
      case 'OFFICIAL':
        return <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/30 text-xs px-2.5 py-1 rounded-full font-bold"><ShieldCheck className="w-3.5 h-3.5" /> Official Claimed</span>;
      case 'SATIRICAL_FAN':
        return <span className="inline-flex items-center gap-1 bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/30 text-xs px-2.5 py-1 rounded-full font-bold"><ShieldAlert className="w-3.5 h-3.5" /> Satirical / Fan-Made</span>;
      case 'ASSOCIATED':
        return <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/30 text-xs px-2.5 py-1 rounded-full font-bold"><Globe className="w-3.5 h-3.5" /> Community / Associated</span>;
      case 'UNVERIFIED':
      default:
        return <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full font-bold"><HelpCircle className="w-3.5 h-3.5" /> Unverified / Splinter</span>;
    }
  };

  const getConfidenceBadge = (confidence: 'HIGH' | 'MEDIUM' | 'LOW') => {
    switch (confidence) {
      case 'HIGH':
        return <span className="bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs px-2 py-0.5 rounded font-mono font-semibold">HIGH CONFIDENCE</span>;
      case 'MEDIUM':
        return <span className="bg-amber-500/20 text-amber-800 dark:text-amber-300 text-xs px-2 py-0.5 rounded font-mono font-semibold">MEDIUM CONFIDENCE</span>;
      case 'LOW':
        return <span className="bg-rose-500/20 text-rose-800 dark:text-rose-300 text-xs px-2 py-0.5 rounded font-mono font-semibold">LOW CONFIDENCE</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#16120D] text-[#EADBCE] font-sans">
      {/* Header Banner */}
      <div className="border-b border-[#D9572B]/30 bg-gradient-to-b from-[#2A1E17] to-[#16120D] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9572B]/20 text-[#D9572B] border border-[#D9572B]/40 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-4 h-4" /> CJP Digital Archive Agent Report
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-serif">
                Cockroach Janta Party — Master Public Archive
              </h1>
              <p className="mt-3 text-base sm:text-lg text-[#EADBCE]/80 max-w-3xl">
                Comprehensive digital repository documenting CJP from earliest public origins (May 16, 2026 post-CJI remarks) to present. Contains verified public web records, domain classification, timeline, news coverage, and media archives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 bg-[#1D1712] p-4 rounded-xl border border-[#D9572B]/30 shrink-0">
              <div className="text-center sm:text-left">
                <div className="text-xs text-[#EADBCE]/60">Total Tracked Sources</div>
                <div className="text-2xl font-bold text-[#D9572B]">23 Tables</div>
              </div>
              <div className="hidden sm:block border-r border-[#EADBCE]/10 mx-2" />
              <div className="text-center sm:text-left">
                <div className="text-xs text-[#EADBCE]/60">Date Range</div>
                <div className="text-sm font-bold text-white">May 2026 – Present</div>
              </div>
            </div>
          </div>

          {/* Quick Search & Filters Bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative col-span-1 sm:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#EADBCE]/40" />
              <input
                type="text"
                placeholder="Search across timeline, people, events, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#1D1712] border border-[#D9572B]/30 rounded-lg text-sm text-white placeholder-[#EADBCE]/40 focus:outline-none focus:border-[#D9572B]"
              />
            </div>
            <div>
              <select
                value={confidenceFilter}
                onChange={(e) => setConfidenceFilter(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#1D1712] border border-[#D9572B]/30 rounded-lg text-sm text-white focus:outline-none focus:border-[#D9572B]"
              >
                <option value="ALL">All Confidence Levels</option>
                <option value="HIGH">High Confidence Only</option>
                <option value="MEDIUM">Medium Confidence</option>
                <option value="LOW">Low Confidence</option>
              </select>
            </div>
            <div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#1D1712] border border-[#D9572B]/30 rounded-lg text-sm text-white focus:outline-none focus:border-[#D9572B]"
              >
                <option value="ALL">All Event Categories</option>
                <option value="FOUNDING">Founding & Origins</option>
                <option value="PROTEST">Protests & Rallies</option>
                <option value="CAMPAIGN">Campaigns</option>
                <option value="SPLIT">Factional Splits</option>
                <option value="LEGAL">Legal & Censorship</option>
                <option value="STATEMENT">Statements & Manifestos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container & Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#D9572B]/20 pb-4 mb-8 overflow-x-auto">
          {[
            { id: 'timeline', label: '01. Master Timeline', icon: Calendar },
            { id: 'domains', label: '03 & 20. Domain Discovery Map', icon: Globe },
            { id: 'people', label: '02. People Network', icon: Users },
            { id: 'youtube', label: '04 & 05. YouTube Database', icon: Youtube },
            { id: 'social', label: '06-09. Social Media & Hashtags', icon: Twitter },
            { id: 'news', label: '10. News & Media Archive', icon: Newspaper },
            { id: 'manifesto', label: '14. Manifesto Evolution', icon: FileText },
            { id: 'posters', label: '15 & 16. Poster Archive', icon: ImageIcon },
            { id: 'questions', label: '21-23. Quality Control & QA', icon: HelpCircle }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive 
                    ? 'bg-[#D9572B] text-white shadow-lg shadow-[#D9572B]/20' 
                    : 'bg-[#1D1712] text-[#EADBCE]/70 hover:text-white hover:bg-[#2A1E17]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Master Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#1D1712] p-4 rounded-xl border border-[#D9572B]/20">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-[#D9572B]" />
                <span className="text-sm font-medium">Showing {filteredTimeline.length} Chronological Records</span>
              </div>
              <button
                onClick={() => setSortOrder(prev => prev === 'OLDEST_FIRST' ? 'NEWEST_FIRST' : 'OLDEST_FIRST')}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#2A1E17] hover:bg-[#38281E] border border-[#D9572B]/30 rounded-lg text-xs font-semibold transition"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-[#D9572B]" />
                Sort: {sortOrder === 'OLDEST_FIRST' ? 'Oldest → Newest' : 'Newest → Oldest'}
              </button>
            </div>

            <div className="space-y-4">
              {filteredTimeline.map((item: TimelineItem) => (
                <div 
                  key={item.id}
                  className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-5 hover:border-[#D9572B]/50 transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EADBCE]/10 pb-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#D9572B] bg-[#D9572B]/10 px-2.5 py-1 rounded">
                        {item.date}
                      </span>
                      <span className="text-xs bg-[#2A1E17] text-[#EADBCE]/80 px-2 py-1 rounded font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <div>{getConfidenceBadge(item.confidence)}</div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.event}</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-[#EADBCE]/70 my-3">
                    <div><strong className="text-white">Location:</strong> {item.location}</div>
                    <div><strong className="text-white">Key Figures:</strong> {item.people.join(', ')}</div>
                    <div><strong className="text-white">Primary Source:</strong> {item.source}</div>
                  </div>

                  {item.sourceUrl && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      <a 
                        href={item.sourceUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#D9572B] hover:underline font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Source Verification Link
                      </a>
                      {item.newsUrl && (
                        <a 
                          href={item.newsUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:underline"
                        >
                          <Newspaper className="w-3.5 h-3.5" /> News Coverage
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Domain Discovery Map */}
        {activeTab === 'domains' && (
          <div className="space-y-6">
            <div className="bg-[#1D1712] border border-[#D9572B]/30 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#D9572B]" /> Official vs Satirical vs Unverified Domain Classification
              </h2>
              <p className="text-sm text-[#EADBCE]/80 mb-6">
                To prevent merging independent fan-made satirical commentary projects with the official CJP movement, every discovered domain is strictly classified based on verified public disclosures and disclaimers.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {DOMAIN_DISCOVERY_MAP.map((domain: DomainRecord) => (
                  <div 
                    key={domain.domain}
                    className="bg-[#2A1E17] border border-[#D9572B]/20 rounded-xl p-5 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EADBCE]/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-base font-bold text-white">{domain.domain}</span>
                        <a href={domain.url} target="_blank" rel="noreferrer" className="text-[#D9572B] hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div>{getDomainBadge(domain.classification)}</div>
                    </div>

                    <p className="text-sm text-[#EADBCE]/90">{domain.notes}</p>

                    {domain.disclaimerText && (
                      <div className="bg-purple-950/40 border border-purple-500/30 rounded-lg p-3 text-xs text-purple-200">
                        <strong className="block text-purple-400 font-bold mb-1">Site Disclaimer Statement:</strong>
                        "{domain.disclaimerText}"
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 text-xs text-[#EADBCE]/60 pt-2">
                      <div><strong>Discovered:</strong> {domain.firstDiscovered}</div>
                      <div><strong>Claims Official:</strong> {domain.claimsOfficial ? 'Yes' : 'No'}</div>
                      <div><strong>Key Pages:</strong> {domain.pagesAvailable.join(', ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: People Network */}
        {activeTab === 'people' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PEOPLE_DATABASE.map(person => (
              <div key={person.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{person.fullName}</h3>
                      <div className="text-sm text-[#D9572B] font-semibold">{person.role}</div>
                    </div>
                    <span className="text-xs bg-[#2A1E17] text-[#EADBCE]/70 px-2.5 py-1 rounded font-mono">
                      {person.id}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-[#EADBCE]/80 my-4">
                    <div><strong className="text-white">First Appearance:</strong> {person.firstAppearance}</div>
                    <div><strong className="text-white">Latest Activity:</strong> {person.latestAppearance}</div>
                    <div>
                      <strong className="text-white">Associated Campaigns:</strong> {person.associatedCampaigns.join(', ')}
                    </div>
                  </div>

                  {person.quotes.length > 0 && (
                    <blockquote className="bg-[#2A1E17] border-l-2 border-[#D9572B] italic text-xs p-3 rounded text-white my-3">
                      {person.quotes[0]}
                    </blockquote>
                  )}
                </div>

                <div className="pt-4 border-t border-[#EADBCE]/10 flex flex-wrap gap-3">
                  {person.socialProfiles.map((soc, i) => (
                    <a
                      key={i}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#D9572B] hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" /> {soc.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: YouTube Database */}
        {activeTab === 'youtube' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {YOUTUBE_MASTER_DATABASE.map(video => (
              <div key={video.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#D9572B] bg-[#D9572B]/10 px-2 py-0.5 rounded">
                      {video.category}
                    </span>
                    {getConfidenceBadge(video.confidence)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-xs text-[#EADBCE]/70 mb-4">{video.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-[#EADBCE]/60 bg-[#2A1E17] p-3 rounded-lg mb-4">
                    <div><strong>Channel:</strong> {video.channelName}</div>
                    <div><strong>Upload Date:</strong> {video.uploadDate}</div>
                    <div><strong>Duration:</strong> {video.duration}</div>
                    <div><strong>Views:</strong> {video.views}</div>
                  </div>
                </div>

                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D9572B] hover:bg-[#b8451f] text-white text-xs font-bold py-2.5 rounded-lg transition"
                >
                  <Youtube className="w-4 h-4" /> Open Video URL on YouTube
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Social Media */}
        {activeTab === 'social' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SOCIAL_MEDIA_DATABASE.map(post => (
                <div key={post.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-blue-400 flex items-center gap-1">
                        <Twitter className="w-3.5 h-3.5" /> {post.platform}
                      </span>
                      <span className="text-xs text-[#EADBCE]/50">{post.date}</span>
                    </div>

                    <div className="text-xs font-semibold text-white mb-2">{post.account}</div>
                    <p className="text-xs text-[#EADBCE]/90 italic bg-[#2A1E17] p-3 rounded-lg border border-[#EADBCE]/5 mb-3">
                      "{post.caption}"
                    </p>
                    <p className="text-xs text-[#EADBCE]/70 mb-3">
                      <strong className="text-white">Significance:</strong> {post.significance}
                    </p>
                  </div>

                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D9572B] hover:underline font-semibold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View Original Post
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: News Archive */}
        {activeTab === 'news' && (
          <div className="space-y-4">
            {NEWS_ARCHIVE.map(news => (
              <div key={news.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">
                    Claim Status: {news.claimClassification}
                  </span>
                  <span className="text-xs text-[#EADBCE]/60">{news.publication} • {news.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{news.headline}</h3>
                <p className="text-sm text-[#EADBCE]/80 mb-3">{news.summary}</p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D9572B] font-semibold hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Full Article Reference
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Tab 7: Manifesto Evolution */}
        {activeTab === 'manifesto' && (
          <div className="space-y-6">
            {MANIFESTO_VERSIONS.map((ver, idx) => (
              <div key={idx} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{ver.title}</h3>
                  <span className="text-xs font-mono font-bold text-[#D9572B] bg-[#D9572B]/10 px-3 py-1 rounded-full">
                    {ver.version} ({ver.date})
                  </span>
                </div>
                <p className="text-xs text-[#EADBCE]/70 mb-4 font-mono">
                  <strong>Changes in this version:</strong> {ver.keyChanges}
                </p>
                <ul className="space-y-2 mb-4">
                  {ver.demandsList.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#EADBCE]/90">
                      <CheckCircle className="w-4 h-4 text-[#D9572B] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 8: Posters Archive */}
        {activeTab === 'posters' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POSTER_ARCHIVE.map(poster => (
              <div key={poster.id} className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl overflow-hidden">
                <img src={poster.imageUrl} alt={poster.title} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{poster.title}</h3>
                  <p className="text-xs text-[#EADBCE]/70 mb-3">{poster.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#EADBCE]/50">Source: {poster.sourcePlatform}</span>
                    <a href={poster.originalPageUrl} target="_blank" rel="noreferrer" className="text-[#D9572B] hover:underline font-semibold">
                      Source Webpage Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 9: Quality Control & QA */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            <div className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" /> Source Reliability & Duplicate Detection Matrix
              </h2>
              <div className="space-y-4">
                {DUPLICATE_CANONICAL_MAP.map((dup, i) => (
                  <div key={i} className="bg-[#2A1E17] p-4 rounded-lg text-xs space-y-2">
                    <div className="font-bold text-white text-sm">Canonical Source: {dup.canonicalSource}</div>
                    <div className="text-[#EADBCE]/70">{dup.notes}</div>
                    <div className="text-emerald-400 font-mono">First Known Publication: {dup.firstPublicationDate}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1D1712] border border-[#D9572B]/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" /> Open Questions & Unverified Log
              </h2>
              <div className="space-y-4">
                {OPEN_RESEARCH_QUESTIONS.map(q => (
                  <div key={q.id} className="bg-[#2A1E17] p-4 rounded-lg text-xs space-y-2">
                    <div className="flex justify-between font-bold text-white">
                      <span>{q.topic}</span>
                      <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-mono">{q.currentStatus}</span>
                    </div>
                    <div className="text-[#EADBCE]/80">{q.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
