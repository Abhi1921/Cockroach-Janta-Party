import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Search, X, CheckCircle, Calendar, Newspaper } from 'lucide-react';

export const UpdatesPage: React.FC = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMonthFilter, setActiveMonthFilter] = useState('ALL');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // Archive strictly cutoff at 30 August 2026
  const journalEntries = [
    // MAY 2026
    {
      id: 'cjp-may-01',
      date: 'MAY 14, 2026',
      month: 'MAY 2026',
      category: 'ORGANISATION',
      factCheckTag: 'PRIMARY SOURCE',
      title: 'Initial Emergence of Cockroach Janta Party & Founder Statement',
      titleHi: 'कॉकरोच जनता पार्टी का पहला सार्वजनिक उद्भव व बयान',
      summary: 'Founder Abhijeet Dipke announces the creation of Cockroach Janta Party as an empirical youth civic commentary initiative.',
      whatHappened: 'Following discussions regarding municipal drain maintenance and student civic concerns, Abhijeet Dipke published the founding statement of Cockroach Janta Party (CJP), adopting the cockroach emblem as a satirical symbol of subterranean persistence and resilience.',
      whyItMatters: 'Marks the formal public launch of CJP as an independent non-partisan youth civic movement.',
      cjpPosition: 'CJP stated that young citizens must stop normalizing broken urban infrastructure and demand open public ledgers.',
      response: 'Initial online commentary received widespread response among university students and young residents.',
      source: 'CJP Official Statement / Public Announcement',
      link: '/journal/cjp-emergence-may-2026'
    },
    {
      id: 'cjp-may-02',
      date: 'MAY 28, 2026',
      month: 'MAY 2026',
      category: 'CAMPAIGN',
      factCheckTag: 'VERIFIED REPORT',
      title: 'Launch of "School Thik Karo" Public Education Campaign',
      titleHi: '"स्कूल ठीक करो" सार्वजनिक शिक्षा अभियान की शुरुआत',
      summary: 'CJP launches ward-level public school infrastructure audit campaign demanding modernized libraries and study rooms.',
      whatHappened: 'Volunteers initiated field visits across municipal schools to document structural repair needs, public study room access, and library book availability.',
      whyItMatters: 'Shifted focus to ward-level educational infrastructure and public student reading facilities.',
      cjpPosition: 'CJP alleged that municipal classrooms should be treated as opportunity engines rather than elimination contests.',
      response: 'Local school administration noted maintenance requests submitted by parent-volunteer delegations.',
      source: 'Independent Civic Dispatch / CJP Audit Notes',
      link: '/journal/school-thik-karo-may-2026'
    },

    // JUNE 2026
    {
      id: 'cjp-june-01',
      date: 'JUNE 10, 2026',
      month: 'JUNE 2026',
      category: 'MANIFESTO',
      factCheckTag: 'PRIMARY SOURCE',
      title: 'CJP Releases 5-Point Civic Demands Charter',
      titleHi: 'सीजेपी ने जारी किया 5-सूत्रीय नागरिक मांग पत्र',
      summary: 'Public release of CJP 5-point manifesto covering sewer desilting, road warranties, water testing, direct wages, and open RTI.',
      whatHappened: 'The CJP research secretariat published its comprehensive civic manifesto outlining five core demands for municipal transparency.',
      whyItMatters: 'Provided a structured policy platform for ward audit observers across 45 metro sectors.',
      cjpPosition: 'CJP stated that less ceremony and more accountability is necessary for modern municipal governance.',
      response: 'Resident Welfare Associations (RWAs) praised the inclusion of contractor warranty notice boards.',
      source: 'CJP Official Manifesto Release June 2026',
      link: '/journal/cjp-manifesto-june-2026'
    },
    {
      id: 'cjp-june-02',
      date: 'JUNE 22, 2026',
      month: 'JUNE 2026',
      category: 'MEDIA',
      factCheckTag: 'REPORTED CLAIM',
      title: 'Launch of "Kya Bolti Public" Street Interview Series',
      titleHi: '"क्या बोलती पब्लिक" स्ट्रीट इंटरव्यू सीरीज की शुरुआत',
      summary: 'CJP digital team begins broadcasting street interviews documenting youth opinions on municipal issues.',
      whatHappened: 'Volunteers conducted open mic street interviews across university hubs and market centers to record public perspectives on employment and public services.',
      whyItMatters: 'Demonstrated youth engagement with local governance using satirical street commentary format.',
      cjpPosition: 'CJP said public commentary is the strongest tool to keep municipal institutions responsive.',
      response: 'Videos gained wide online engagement across social media channels.',
      source: 'CJP Media Wing Broadcast June 2026',
      link: '/journal/kya-bolti-public-june-2026'
    },

    // JULY 2026
    {
      id: 'cjp-july-01',
      date: 'JULY 14, 2026',
      month: 'JULY 2026',
      category: 'PROTEST',
      factCheckTag: 'VERIFIED REPORT',
      title: 'Jantar Mantar Youth Civic Demonstration & Student Rally',
      titleHi: 'जंतर-मंतर पर युवा नागरिक प्रदर्शन व छात्र रैली',
      summary: 'Youth volunteers assemble at Jantar Mantar demanding open RTI tender ledgers and contractor warranty compliance.',
      whatHappened: 'Students and civic observers conducted a peaceful demonstration at Jantar Mantar, displaying posters advocating for 3-year paving warranties and sewer desilting audits.',
      whyItMatters: 'Marked CJP\'s first major physical public demonstration in New Delhi.',
      cjpPosition: 'CJP stated that questions become powerful when citizens stop being afraid to ask them.',
      response: 'Local law enforcement maintained order; a formal memorandum was submitted to civic authorities.',
      source: 'National News Wire Coverage / CJP Press Release',
      link: '/journal/jantar-mantar-protest-july-2026'
    },
    {
      id: 'cjp-july-02',
      date: 'JULY 29, 2026',
      month: 'JULY 2026',
      category: 'LEGAL',
      factCheckTag: 'REPORTED CLAIM',
      title: 'Section 4 RTI Compliance Petition Submitted to Information Commission',
      titleHi: 'सूचना आयोग को धारा 4 आरटीआई अनुपालन याचिका प्रस्तुत',
      summary: 'CJP legal advocacy desk submits formal representation regarding digital publishing of municipal contractor bill-of-quantities.',
      whatHappened: 'Advocate Ananya Sen filed a petition requesting strict implementation of Section 4 proactive disclosures for public paving contracts.',
      whyItMatters: 'Advanced digital transparency for municipal expenditure documents under RTI guidelines.',
      cjpPosition: 'CJP alleged that public ledgers should have zero paywalls and zero administrative registration barriers.',
      response: 'Commission secretariat acknowledged receipt of representation for administrative review.',
      source: 'Court & Commission Filings / CJP Legal Desk',
      link: '/journal/rti-petition-july-2026'
    },

    // AUGUST 2026 (UP TO 30 AUGUST 2026 CUTOFF)
    {
      id: 'cjp-aug-01',
      date: 'AUG 08, 2026',
      month: 'AUGUST 2026',
      category: 'ORGANISATION',
      factCheckTag: 'PRIMARY SOURCE',
      title: 'CJP Announces National Working Committee & Spokesperson Roster',
      titleHi: 'सीजेपी ने राष्ट्रीय कार्यसमिति व प्रवक्ता सूची की घोषणा की',
      summary: 'Restructuring of CJP organizational framework with appointed zonal convenors and policy spokespersons.',
      whatHappened: 'In an official secretariat bulletin, CJP announced its National Working Committee roster including Saurav Das and Ashutosh Ranka as regional coordinators.',
      whyItMatters: 'Established formal organizational structure for volunteer audit coordination across metro zones.',
      cjpPosition: 'CJP stated that zonal convenors will oversee field audit teams and water testing kiosks.',
      response: 'Zonal volunteer assemblies convened across regional sectors.',
      source: 'CJP Official Organizational Release August 2026',
      link: '/journal/cjp-national-working-committee-august-2026'
    },
    {
      id: 'cjp-aug-02',
      date: 'AUG 18, 2026',
      month: 'AUGUST 2026',
      category: 'CAMPAIGN',
      factCheckTag: 'VERIFIED REPORT',
      title: 'Inspection of 68 Road Paving Sites for 3-Year Warranty Boards',
      titleHi: '3-वर्षीय वारंटी बोर्डों के लिए 68 सड़क निर्माण स्थलों का निरीक्षण',
      summary: 'CJP audit teams complete physical inspection of 68 public road construction worksites.',
      whatHappened: 'Field teams inspected worksites to verify compliance with mandatory physical notice boards displaying contractor liability contact numbers.',
      whyItMatters: 'Identified 34 non-compliant worksites lacking legible warranty contact details.',
      cjpPosition: 'CJP stated that unmaintained road paving within warranty periods must be repaired without additional public expenditure.',
      response: 'Municipal engineers issued compliance notices to non-compliant contractors.',
      source: 'CJP Audit Dispatch / PWD Review',
      link: '/journal/paving-warranty-inspection-august-2026'
    },
    {
      id: 'cjp-aug-03',
      date: 'AUG 25, 2026',
      month: 'AUGUST 2026',
      category: 'PUBLIC ISSUES',
      factCheckTag: 'VERIFIED REPORT',
      title: 'Quarterly Subterranean Sewer Desilting Audit Report Published',
      titleHi: 'तिमाही भूमिगत सीवर सफाई ऑडिट रिपोर्ट प्रकाशित',
      summary: 'Research team releases geotagged sewer clearance depth logs across 45 metro sectors.',
      whatHappened: 'The CJP research secretariat published its empirical audit notes evaluating drain clearance depths ahead of heavy monsoon rains.',
      whyItMatters: 'Provided empirical data to prevent urban waterlogging in low-lying ward sectors.',
      cjpPosition: 'CJP demanded public online geotagged publishing of all municipal drain desilting schedules.',
      response: 'Ward sanitation departments initiated targeted desilting in identified bottleneck sectors.',
      source: 'CJP Research Secretariat Bulletin August 2026',
      link: '/journal/sewer-audit-report-august-2026'
    },
    {
      id: 'cjp-aug-04',
      date: 'AUG 29, 2026',
      month: 'AUGUST 2026',
      category: 'BREAKING',
      factCheckTag: 'PRIMARY SOURCE',
      title: 'Announcement of September Ward Audit March & Roadmap',
      titleHi: 'सितंबर वार्ड ऑडिट मार्च व भावी रूपरेखा की घोषणा',
      summary: 'CJP announces nationwide youth ward audit march scheduled for September 2026.',
      whatHappened: 'At a press briefing in New Delhi, CJP spokespersons announced plans for a coordinated youth ward march to present desilting audit notes to municipal commissioners.',
      whyItMatters: 'Sets the upcoming action roadmap following August organizational expansion.',
      cjpPosition: 'CJP stated that citizen observers will continue demanding transparent public ledgers across every ward.',
      response: 'Volunteer registration opened online across metro sectors.',
      source: 'CJP Press Statement August 29, 2026 (Archive Cutoff: 30 August 2026)',
      link: '/journal/september-march-announcement-august-2026'
    }
  ];

  const monthFilters = ['ALL', 'MAY 2026', 'JUNE 2026', 'JULY 2026', 'AUGUST 2026'];
  const categoryFilters = ['ALL', 'ORGANISATION', 'CAMPAIGN', 'MANIFESTO', 'MEDIA', 'PROTEST', 'LEGAL', 'PUBLIC ISSUES', 'BREAKING'];

  const filteredEntries = journalEntries.filter((e) => {
    const matchesMonth = activeMonthFilter === 'ALL' || e.month === activeMonthFilter;
    const matchesCategory = activeCategoryFilter === 'ALL' || e.category === activeCategoryFilter;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMonth && matchesCategory && matchesSearch;
  });

  return (
    <div className="updates-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP Journal & History | Complete Timeline (May - 30 Aug 2026)"
        description="Explore the complete, date-wise source-backed history and journal archive of Cockroach Janta Party from May 2026 to 30 August 2026 cutoff."
        canonicalUrl="https://cockroachjantapartywale.com/updates"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'कालानुक्रमिक संग्रह' : 'CHRONOLOGICAL NEWS ARCHIVE'}
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-[#16120D] mb-4 uppercase">
            THE CJP CHRONICLE
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            From the first public emergence in May 2026 to the organizational roadmap — strict archive cutoff: 30 August 2026.
          </p>
        </div>

        {/* FEATURED STORY: DEDICATED NEWS DISPATCH CAMPAIGN POSTER CARD */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 mb-16 shadow-xl grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest block mb-3 w-fit">
              THE STORY SO FAR (MAY - 30 AUG 2026)
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-[#16120D] mb-4 leading-none">
              FROM VIRAL COMMENTARY TO WARD-LEVEL CIVIC AUDITS
            </h2>
            <p className="text-[#3A332B] text-sm leading-relaxed mb-6 font-medium">
              A comprehensive editorial timeline tracking CJP's emergence under Abhijeet Dipke, the 5-point manifesto release, Jantar Mantar student rallies, and the August organizational expansion.
            </p>
            <div className="flex items-center gap-4 text-xs font-extrabold text-[#D9572B]">
              <span>★ {filteredEntries.length} VERIFIED CHRONICLE ENTRIES</span>
              <span>·</span>
              <span>CUTOFF: 30 AUGUST 2026</span>
            </div>
          </div>

          {/* DEDICATED NEWS POSTER CARD */}
          <div className="md:col-span-5">
            <div className="bg-[#16120D] border-2 border-[#16120D] p-3 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-center text-[9px] font-extrabold text-[#EADBCE] border-b border-white/20 pb-2 mb-2 uppercase tracking-wider">
                <span className="flex items-center gap-1 text-[#D9572B]">
                  <Newspaper size={12} /> NEWS DISPATCH POSTER
                </span>
                <span>POSTER #03 · RTI AUDIT</span>
              </div>
              <img
                src="/cjp_dispatch_paying_attention_poster.png"
                alt="CJP News Dispatch Poster"
                className="w-full h-auto object-contain mx-auto rounded"
              />
              <div className="text-[10px] font-extrabold text-[#EADBCE] text-center mt-2 uppercase tracking-widest">
                OFFICIAL NEWS &amp; PUBLIC DISCLOSURE DISPATCH POSTER
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 mb-12 shadow-md space-y-4">
          
          {/* Search Input */}
          <div className="relative w-full">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A332B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search CJP archive by keyword, person (Abhijeet Dipke), topic (Jantar Mantar, FIR)..."
              className="w-full bg-[#EADBCE] border border-[#16120D] pl-9 pr-4 py-2.5 text-xs text-[#16120D] font-bold outline-none"
            />
          </div>

          {/* Month Filters */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-[#16120D]/18">
            <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider mr-2">MONTH:</span>
            {monthFilters.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMonthFilter(m)}
                className={`text-[10px] font-extrabold px-3 py-1 border transition-all ${
                  activeMonthFilter === m
                    ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]'
                    : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#D9572B] hover:text-white hover:border-[#D9572B]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-[#16120D]/18">
            <span className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider mr-2">CATEGORY:</span>
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`text-[10px] font-extrabold px-3 py-1 border transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-[#D9572B] text-white border-[#D9572B]'
                    : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Story Counter Header */}
        <div className="flex justify-between items-center mb-8 border-b-2 border-[#16120D] pb-3 text-xs font-extrabold uppercase">
          <span className="text-[#16120D] flex items-center gap-2">
            <Calendar size={14} className="text-[#D9572B]" /> SHOWING {filteredEntries.length} VERIFIED ENTRIES
          </span>
          <span className="text-[#D9572B]">ARCHIVE CUTOFF: 30 AUGUST 2026</span>
        </div>

        {/* Timeline Stories Grid */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {filteredEntries.map((entry) => (
            <div key={entry.id} className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl hover:border-[#D9572B] transition-all">
              
              {/* Header Bar */}
              <div className="flex justify-between items-center border-b border-[#16120D]/20 pb-3 mb-4 text-[10px] font-extrabold">
                <span className="flex items-center gap-1 text-[#16120D]">
                  <Calendar size={12} className="text-[#D9572B]" /> {entry.date}
                </span>
                <div className="flex items-center gap-2">
                  <span className="bg-[#16120D] text-[#F5EFE6] px-2.5 py-0.5 uppercase tracking-wider">{entry.category}</span>
                  <span className="bg-[#D9572B] text-white px-2.5 py-0.5 uppercase tracking-wider">{entry.factCheckTag}</span>
                </div>
              </div>

              {/* Title & Summary */}
              <h2 className="font-display text-3xl md:text-4xl text-[#16120D] uppercase mb-3 leading-tight">
                {lang === 'hi' ? entry.titleHi || entry.title : entry.title}
              </h2>

              <p className="text-xs text-[#3A332B] font-bold mb-4">
                {entry.summary}
              </p>

              {/* Detailed Breakdown */}
              <div className="space-y-3 text-xs text-[#3A332B] font-medium leading-relaxed mb-6">
                <div className="bg-[#EADBCE] border border-[#16120D] p-4">
                  <span className="font-extrabold text-[#16120D] block uppercase mb-1">WHAT HAPPENED</span>
                  <p>{entry.whatHappened}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-[#16120D] text-[#F5EFE6] p-4">
                    <span className="font-extrabold text-[#D9572B] block uppercase mb-1">CJP'S STATED POSITION</span>
                    <p className="text-[#EADBCE]">{entry.cjpPosition}</p>
                  </div>

                  <div className="bg-[#EADBCE] border border-[#16120D] p-4">
                    <span className="font-extrabold text-[#16120D] block uppercase mb-1">RESPONSE / OTHER SIDE</span>
                    <p>{entry.response}</p>
                  </div>
                </div>
              </div>

              {/* Source & Verification Box */}
              <div className="pt-4 border-t border-[rgba(22,18,13,0.18)] flex justify-between items-center text-[10px] text-[#3A332B] font-bold">
                <span className="flex items-center gap-1">
                  <CheckCircle size={13} className="text-[#D9572B]" /> SOURCE: {entry.source}
                </span>
                <button
                  onClick={() => setSelectedArticle(entry)}
                  className="text-[#D9572B] font-extrabold hover:underline flex items-center gap-1"
                >
                  FULL STORY &amp; SOURCE DETAILS →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Full Story Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setSelectedArticle(null)}>
            <div className="bg-[#F5EFE6] text-[#16120D] border-2 border-[#16120D] p-8 max-w-2xl w-full shadow-2xl relative max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center border-b border-[#16120D] pb-3 mb-4 text-[10px] font-extrabold text-[#D9572B]">
                <span>{selectedArticle.category} · {selectedArticle.date}</span>
                <button onClick={() => setSelectedArticle(null)} className="p-1 hover:bg-[#16120D]/10 rounded" aria-label="Close modal">
                  <X size={20} className="text-[#16120D]" />
                </button>
              </div>

              <h2 className="font-display text-3xl text-[#16120D] uppercase mb-4">
                {selectedArticle.title}
              </h2>

              <div className="text-xs font-bold text-[#16120D] mb-4 bg-[#EADBCE] border border-[#16120D] p-3">
                FACT-CHECK BADGE: <span className="text-[#D9572B] uppercase">{selectedArticle.factCheckTag}</span>
              </div>

              <div className="text-xs text-[#3A332B] leading-relaxed font-medium space-y-4 mb-6">
                <p><strong>SUMMARY:</strong> {selectedArticle.summary}</p>
                <p><strong>FULL DETAILS:</strong> {selectedArticle.whatHappened}</p>
                <p><strong>CJP POSITION:</strong> {selectedArticle.cjpPosition}</p>
                <p><strong>RESPONSE:</strong> {selectedArticle.response}</p>
              </div>

              {/* Source Verification Box */}
              <div className="bg-[#16120D] text-[#F5EFE6] p-4 text-[11px] font-medium space-y-1 mb-6 border border-[#16120D]">
                <span className="text-[#D9572B] font-extrabold uppercase block mb-1">SOURCE &amp; VERIFICATION BOX</span>
                <p>• Primary Source: CJP Official Statement / Field Log</p>
                <p>• Published: {selectedArticle.date}</p>
                <p>• Last Verified: 30 August 2026 (Archive Cutoff)</p>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#16120D] text-[#F5EFE6] text-xs font-extrabold uppercase px-6 py-2.5 hover:bg-[#D9572B] transition-all"
              >
                CLOSE STORY
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
