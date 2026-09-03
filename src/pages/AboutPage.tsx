import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PosterCard } from '../components/PosterCard';
import { postersData } from '../data/postersData';
import { BookOpen, Search, ExternalLink, ShieldCheck, Users, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'overview' | 'wikipedia'>('overview');

  const spokespersonsList = [
    { name: 'Saurav Das', role: 'Chief Legal & Media Spokesperson', city: 'New Delhi', badge: 'Legal Lead' },
    { name: 'Ashutosh Ranka', role: 'National Policy Strategist', city: 'Pune', badge: 'Policy Desk' },
    { name: 'Aafreen Nawaz', role: 'Youth & Student Rights Delegate', city: 'Lucknow', badge: 'Student Lead' },
    { name: 'Deepak Baliyan', role: 'Ward Audit Coordinator', city: 'Chandigarh', badge: 'Civic Audit' },
    { name: 'Ratna Singh', role: 'RTI Section 4 Lead Advocate', city: 'Kolkata', badge: 'RTI Desk' },
    { name: 'Vaishnavi Gaur', role: 'Digital Media & Campaign Convenor', city: 'Bengaluru', badge: 'Media Lead' }
  ];

  const manifestoPoints = [
    { num: '01', title: 'Judicial Rajya Sabha Bar', desc: 'No Chief Justice of India or senior judge shall be granted a Rajya Sabha seat or post-retirement government office as a reward.' },
    { num: '02', title: 'UAPA for Voter Deletion', desc: 'If legitimate citizen votes are deleted from electoral rolls, Chief Election Commissioners shall face UAPA inquiry.' },
    { num: '03', title: '50% Cabinet Reservation for Women', desc: 'Mandatory 50% reservation for women candidates in Parliament and 50% seats reserved in Union & State Cabinets.' },
    { num: '04', title: 'Oligarch Media License Cancellation', desc: 'Cancelling licences of corporate oligarch media houses (Adani/Ambani) and investigating bank accounts of paid news anchors.' },
    { num: '05', title: '20-Year Anti-Defection Election Bar', desc: 'Any elected MLA or MP who defects across party lines shall be barred from contesting elections or holding public office for 20 years.' }
  ];

  const referencesList = [
    { id: '1', title: 'India\'s youth-led Cockroach movement vows to keep demanding reforms after police crackdown', source: 'Associated Press', date: '21 July 2026', url: 'https://apnews.com' },
    { id: '2', title: 'What Is the Youth-Led \'Cockroach Movement\' Staging Mass Protests in India?', source: 'TIME', date: '23 July 2026', url: 'https://time.com' },
    { id: '3', title: '\'Cockroach Comment For Those With Fake Degrees,\' Clarifies CJI Surya Kant', source: 'The Quint', date: '17 May 2026', url: 'https://thequint.com' },
    { id: '4', title: '\'Cockroach Janta Party\': Top Indian judge\'s comment sparks satire, protest', source: 'Al Jazeera', date: '20 May 2026', url: 'https://aljazeera.com' },
    { id: '5', title: 'Indian politics has acquired an unusual mascot: the cockroach', source: 'BBC News', date: '21 May 2026', url: 'https://bbc.com' },
    { id: '6', title: '\'Asli kaam ka waqt aagya\': Cockroach Janta Party launches new campaign, hits 20 million', source: 'The Economic Times', date: '22 May 2026', url: 'https://economictimes.indiatimes.com' },
    { id: '7', title: 'India\'s \'Cockroach\' youth call off protests after education minister quits', source: 'Al Jazeera', date: '25 July 2026', url: 'https://aljazeera.com' },
    { id: '8', title: 'The Accidental Hero Who Faced Down India\'s Government', source: 'The New York Times', date: '26 July 2026', url: 'https://nytimes.com' },
    { id: '9', title: 'India\'s Gen Z have flipped the lowly cockroach into a symbol of defiance', source: 'CNN', date: '22 May 2026', url: 'https://cnn.com' },
    { id: '10', title: 'Big win for Cockroach Janta Party as Delhi HC orders unblocking of X account', source: 'Hindustan Times', date: '7 July 2026', url: 'https://hindustantimes.com' }
  ];

  return (
    <div className="about-page py-12 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="Cockroach Janta Party (CJP) — Official Wikipedia Encyclopedia & Mission"
        description="Explore the complete Wikipedia Encyclopedia entry for Cockroach Janta Party (CJP), founded by Abhijeet Dipke: CJI remarks, manifesto, Jantar Mantar protests, posters, spokespeople, and references."
        canonicalUrl="https://cockroachjantapartywale.com/about"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        <Breadcrumbs items={[{ label: 'ABOUT CJP & WIKIPEDIA DOSSIER' }]} />

        {/* Display Layout Switcher */}
        <div className="flex items-center justify-between mb-8 bg-[#F5EFE6] border-4 border-[#16120D] p-4 shadow-[5px_5px_0px_0px_#16120D] flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <BookOpen size={20} className="text-[#D9572B]" />
            <span className="font-display text-xl uppercase font-black text-[#16120D]">DISPLAY LAYOUT:</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('overview')}
              className={`btn-brutal h-9 px-4 text-xs font-black uppercase flex items-center gap-2 cursor-pointer ${
                viewMode === 'overview'
                  ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <span>🏛️ CJP MISSION HUB</span>
            </button>
            <button
              onClick={() => setViewMode('wikipedia')}
              className={`btn-brutal h-9 px-4 text-xs font-black uppercase flex items-center gap-2 cursor-pointer ${
                viewMode === 'wikipedia'
                  ? 'bg-[#D9572B] text-white shadow-[3px_3px_0px_0px_#16120D]'
                  : 'bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white'
              }`}
            >
              <span>🌐 CJP WIKIPEDIA</span>
            </button>
          </div>
        </div>

        {/* ==================== AUTHENTIC WIKIPEDIA UI CONTAINER ==================== */}
        {viewMode === 'wikipedia' ? (
          <div className="bg-[#F5EFE6] text-[#16120D] border-4 border-[#16120D] shadow-[10px_10px_0px_0px_#16120D] font-serif overflow-hidden">
            
            {/* Wikipedia Top Header Bar */}
            <header className="bg-[#EADBCE] border-b border-[#16120D] p-3 sm:px-6 flex items-center justify-between font-sans text-xs flex-wrap gap-3 select-none">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#16120D] text-white flex items-center justify-center font-serif text-lg font-bold border border-[#16120D]">
                    W
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-[#16120D] block leading-none">WIKIPEDIA</span>
                    <span className="text-[9.5px] text-[#3A332B] block leading-none">The Free Encyclopedia</span>
                  </div>
                </div>

                <div className="relative hidden md:block w-64">
                  <input
                    type="text"
                    placeholder="Search Wikipedia..."
                    readOnly
                    value="Cockroach Janta Party"
                    className="w-full bg-[#F5EFE6] border border-[#16120D] px-3 py-1 text-xs text-[#16120D] rounded-sm pl-8 font-sans outline-none"
                  />
                  <Search size={12} className="absolute left-2.5 top-2 text-[#3A332B]" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-[#D9572B]">
                <a href="https://en.wikipedia.org/wiki/Donate" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-[#16120D]">
                  Donate
                </a>
                <span>•</span>
                <span className="hover:underline cursor-pointer">Create account</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer font-bold">Log in</span>
              </div>
            </header>

            {/* Wikipedia Notice Banner */}
            <div className="bg-[#EADBCE] border-b border-[#16120D] px-4 py-2 text-xs font-sans text-[#16120D] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-bold">Wiki Loves Monuments:</span>
                <span>Photograph a monument, help Wikipedia and win!</span>
                <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer" className="text-[#D9572B] underline font-bold">
                  Learn more
                </a>
              </div>
              <span className="text-[10px] text-[#3A332B] font-mono">[Dismiss]</span>
            </div>

            {/* Page Title & Action Bar */}
            <div className="px-6 sm:px-10 pt-6 pb-2 border-b border-[#16120D] flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-sans">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#3A332B] mb-1">
                  <span className="font-bold">From Wikipedia, the free encyclopedia</span>
                  <span>•</span>
                  <span className="bg-[#EADBCE] border border-[#16120D] px-2 py-0.5 rounded text-[10px]">Page semi-protected</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#16120D] font-normal leading-tight">
                  Cockroach Janta Party
                </h1>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#D9572B]">
                <span className="font-bold text-[#16120D]">Article</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer">Talk</span>
                <span>•</span>
                <span className="font-bold text-[#16120D]">Read</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer">View source</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer">View history</span>
              </div>
            </div>

            {/* Main Article Body & Infobox Grid */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Navigation Contents Index + Article Body */}
              <div className="lg:col-span-8 space-y-6 text-sm text-[#16120D] leading-relaxed">
                
                {/* Lead Text */}
                <p>
                  The <strong>Cockroach Janta Party</strong> (<strong>CJP</strong>; lit. 'Cockroach People's Party'), also known as the <em>Cockroach movement</em>,<sup><a href="#ref-1" className="text-[#D9572B]">[1]</a></sup><sup><a href="#ref-2" className="text-[#D9572B]">[2]</a></sup> is an Indian youth-based satirical political movement founded on 16 May 2026 by <strong>Abhijeet Dipke</strong>, a political communications strategist and activist. The CJP harnessed widespread political and economic discontent among Generation Z in India, leading to protests in Delhi and other cities in the following months.
                </p>

                <p>
                  The "party" was created in response to remarks made on 15 May 2026 by <strong>Surya Kant</strong>, the Chief Justice of India, in which he referred to certain activists and unemployed youth as "cockroaches" and "parasites of society".<sup><a href="#ref-3" className="text-[#D9572B]">[3]</a></sup> Kant later said he was referring specifically to people who obtain fraudulent degrees, but his remarks triggered broad criticism that India's economic and political landscape had become hostile to young people.<sup><a href="#ref-4" className="text-[#D9572B]">[4]</a></sup> The movement's name is a wordplay parodying the ruling Bharatiya Janata Party.<sup><a href="#ref-5" className="text-[#D9572B]">[5]</a></sup>
                </p>

                {/* Inline Wikipedia Media Illustration Figure */}
                <figure className="float-right sm:ml-6 mb-4 border border-[#16120D] bg-[#EADBCE] p-2 max-w-xs font-sans text-xs shadow-sm">
                  <img src="/cjp_sep5_protest_poster.png" alt="5 September Delhi March Protest Poster" className="w-full h-auto border border-[#16120D]" />
                  <figcaption className="p-1.5 text-[#3A332B] text-[11px] leading-tight border-t border-[#16120D] mt-1.5">
                    Official protest march poster released by Cockroach Janta Party demanding NEET exam reforms and contractor road warranties.
                  </figcaption>
                </figure>

                <p>
                  The party achieved significant popularity online, rapidly gaining over 15 million followers on Instagram shortly after its formation.<sup><a href="#ref-6" className="text-[#D9572B]">[6]</a></sup> It issued a five-point manifesto relating to parliamentary conduct, reservation of seats for women in politics, and media licensing. Beginning in June, the party led protests in Delhi over competitive entrance examination irregularities, culminating in talks with the central government and the resignation of <strong>Dharmendra Pradhan</strong>, the Indian Minister of Education, on 25 July 2026.<sup><a href="#ref-7" className="text-[#D9572B]">[7]</a></sup> The education minister's resignation was considered a major victory for the cockroach movement.<sup><a href="#ref-8" className="text-[#D9572B]">[8]</a></sup>
                </p>

                {/* Contents Index Box */}
                <div className="bg-[#EADBCE] border border-[#16120D] p-4 max-w-md my-6 font-sans text-xs">
                  <div className="font-bold text-sm border-b border-[#16120D] pb-1 mb-2 flex items-center justify-between">
                    <span>Contents</span>
                    <span className="text-[10px] text-[#D9572B] cursor-pointer">[hide]</span>
                  </div>
                  <ol className="space-y-1 text-[#D9572B]">
                    <li>1. <a href="#background" className="hover:underline">Background</a></li>
                    <li>2. <a href="#formation" className="hover:underline">Formation and structure</a></li>
                    <li>3. <a href="#social-media" className="hover:underline">Social media</a></li>
                    <li>4. <a href="#leadership" className="hover:underline">Leadership and spokespeople</a></li>
                    <li>5. <a href="#trademark" className="hover:underline">Trademark and ownership</a></li>
                    <li>6. <a href="#ideology" className="hover:underline">Ideology</a></li>
                    <li>7. <a href="#membership" className="hover:underline">Membership</a></li>
                    <li>8. <a href="#reception" className="hover:underline">Reception</a>
                      <ul className="pl-4 space-y-0.5">
                        <li>8.1 <a href="#support" className="hover:underline">Support</a></li>
                        <li>8.2 <a href="#criticism" className="hover:underline">Criticism and scepticism</a></li>
                      </ul>
                    </li>
                    <li>9. <a href="#disputes" className="hover:underline">Disputes and legal challenges</a></li>
                    <li>10. <a href="#government" className="hover:underline">Government</a></li>
                    <li>11. <a href="#activities" className="hover:underline">Activities &amp; 2026 Jantar Mantar Protests</a></li>
                    <li>12. <a href="#references" className="hover:underline">References</a></li>
                    <li>13. <a href="#external-links" className="hover:underline">External links</a></li>
                  </ol>
                </div>

                {/* Section 1: Background */}
                <section id="background" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Background</h2>
                  <p>
                    The origins of the movement are tied to a contempt plea filed in the Supreme Court of India concerning a delay by the Delhi High Court in conferring a senior advocate designation. A two-judge bench led by Chief Justice Surya Kant and Justice Joymalya Bagchi refused to hear the case, remarking that the court was waiting for an appropriate case to direct a CBI inquiry into lawyers practising under fake degrees.<sup><a href="#ref-3" className="text-[#D9572B]">[3]</a></sup>
                  </p>
                  <p>
                    While reprimanding the petitioner's lawyer, the CJI drew parallels to unemployed individuals who turn to social and mass media along with public activism:
                  </p>

                  <blockquote className="bg-[#EADBCE] border-l-4 border-[#3366cc] p-4 italic text-xs font-serif my-3 text-[#16120D]">
                    "There are already parasites of society who attack the system, and you want to join hands with them? There are youngsters like cockroaches; they don't get any employment, and they don't have any place in a profession... and they start attacking everyone..."
                  </blockquote>

                  <p>
                    The CJI later issued a clarification stating that his remarks had been misquoted and specifically targeted individuals who entered professions using fake degrees. Despite the clarification, the "cockroach" label stuck with youth commentators.<sup><a href="#ref-4" className="text-[#D9572B]">[4]</a></sup>
                  </p>
                </section>

                {/* Section 2: Formation and structure */}
                <section id="formation" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Formation and structure</h2>
                  <p>
                    Abhijeet Dipke launched the "Cockroach Janta Party" (CJP) online on 16 May 2026 as a satire of the political establishment. The website went live under the tagline <em>"Voice of the Lazy &amp; Unemployed"</em>, describing itself as a "platform for all the cockroaches out there".<sup><a href="#ref-5" className="text-[#D9572B]">[5]</a></sup>
                  </p>
                </section>

                {/* Second Inline Wikipedia Media Illustration Figure */}
                <figure className="float-left sm:mr-6 mb-4 border border-[#16120D] bg-[#EADBCE] p-2 max-w-xs font-sans text-xs shadow-sm">
                  <img src="/cjp_school_thik_karo_poster.png" alt="School Thik Karo Campaign Poster" className="w-full h-auto border border-[#16120D]" />
                  <figcaption className="p-1.5 text-[#3A332B] text-[11px] leading-tight border-t border-[#16120D] mt-1.5">
                    "School Thik Karo" campaign graphic advocating for government primary school infrastructure and student study libraries.
                  </figcaption>
                </figure>

                {/* Section 3: Social Media */}
                <section id="social-media" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Social media</h2>
                  <p>
                    Within days of its launch, the movement gained a massive social media following, crossing 15 million followers on Instagram. On 21 May 2026, the Ministry of Electronics and Information Technology ordered the withholding of CJP's official account on X under Section 69(A) of the Information Technology Act, 2000. CJP returned under the handle <code>@Cockroachisback</code> and filed a petition in the Delhi High Court, which ordered the unblocking of the account on 7 July 2026.<sup><a href="#ref-10" className="text-[#D9572B]">[10]</a></sup>
                  </p>
                </section>

                {/* Section 4: Leadership and spokespeople */}
                <section id="leadership" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Leadership and spokespeople</h2>
                  <p>
                    Abhijeet Dipke comes from a Mahar Dalit family in Aurangabad, Maharashtra, and earned a master's degree from Boston University. Dipke cites B. R. Ambedkar as a major influence.
                  </p>
                  <p>
                    The CJP official media panel consists of spokespersons: <strong>Saurav Das</strong>, <strong>Ashutosh Ranka</strong>, <strong>Vaishnavi Gaur</strong>, <strong>Aafreen Nawaz</strong>, <strong>Deepak Baliyan</strong>, and <strong>Ratna Singh</strong>. Former spokesperson Vijeta Dahiya was dismissed following a viral fast-food video during the Parliament march.
                  </p>
                </section>

                {/* Section 6: Ideology */}
                <section id="ideology" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Ideology &amp; 5-Point Manifesto</h2>
                  <p>
                    The party describes itself as: <em>"a political front of the youth, by the youth, for the youth: secular, socialist, democratic, and lazy."</em> In May 2026, CJP released a formal five-point manifesto:
                  </p>

                  <ol className="list-decimal pl-6 space-y-1.5 text-xs font-sans">
                    <li>No Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward.</li>
                    <li>If any legitimate vote is deleted, the Chief Election Commissioner shall be arrested under the Unlawful Activities (Prevention) Act.</li>
                    <li>Women shall receive 50% reservation (instead of 33%) without increasing parliamentary strength; 50% of Cabinet positions shall be reserved for women.</li>
                    <li>All media houses owned by corporate oligarchs (Adani/Ambani) shall have their licences cancelled to make way for independent media.</li>
                    <li>Any MLA or MP who defects from one party to another shall be barred from contesting elections and holding public office for 20 years.</li>
                  </ol>
                </section>

                {/* Section 8: Support & Reception */}
                <section id="support" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Support &amp; Public Endorsements</h2>
                  <p>
                    The movement drew backing from civil society figures including anti-corruption veteran <strong>Anna Hazare</strong>, activist <strong>Sonam Wangchuk</strong> (who described himself as an "honorary cockroach"), lawyer <strong>Prashant Bhushan</strong>, activist <strong>Anjali Bhardwaj</strong>, Congress MP <strong>Shashi Tharoor</strong>, TMC leaders <strong>Mamata Banerjee</strong> and <strong>Abhishek Banerjee</strong>, as well as celebrities <strong>Anurag Kashyap</strong> and <strong>Konkona Sen Sharma</strong> under the hashtag <code>#MainBhiCockroach</code>.
                  </p>
                </section>

                {/* Section 11: Activities & Protests */}
                <section id="activities" className="space-y-3 pt-4 border-t border-[#16120D]">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">Activities &amp; 2026 Jantar Mantar Protests</h2>
                  <p>
                    Following exam paper leak controversies, CJP began an indefinite protest at Jantar Mantar in Delhi starting on 20 June 2026. Following extensive demonstrations and negotiations, Union Education Minister Dharmendra Pradhan resigned on 25 July 2026. Prime Minister Narendra Modi announced a public examination task force headed by Nandan Nilekani, and the government introduced the Public Examinations Amendment Bill 2026 in Parliament.
                  </p>
                </section>

                {/* Section 12: References */}
                <section id="references" className="space-y-3 pt-6 border-t border-[#16120D] font-sans text-xs">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">References</h2>
                  <ol className="list-decimal pl-6 space-y-1.5 text-[#D9572B]">
                    {referencesList.map((ref) => (
                      <li key={ref.id} id={`ref-${ref.id}`}>
                        <span className="text-[#16120D]">"{ref.title}" — </span>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                          {ref.source}
                        </a>
                        <span className="text-[#3A332B]"> ({ref.date})</span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Section 13: External links */}
                <section id="external-links" className="space-y-2 pt-4 border-t border-[#16120D] font-sans text-xs">
                  <h2 className="font-serif text-2xl text-[#16120D] border-b border-[#16120D] pb-1 font-normal">External links</h2>
                  <ul className="list-disc pl-6 space-y-1 text-[#D9572B]">
                    <li>
                      <a href="https://cockroachjantapartywale.com" target="_blank" rel="noopener noreferrer" className="underline font-bold flex items-center gap-1">
                        Official Cockroach Janta Party Web Portal <ExternalLink size={11} />
                      </a>
                    </li>
                    <li>
                      <a href="https://en.wikipedia.org/wiki/Cockroach_Janta_Party" target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-1">
                        Wikipedia Article on Cockroach Janta Party <ExternalLink size={11} />
                      </a>
                    </li>
                  </ul>
                </section>

                {/* Wikipedia Categories Footer Box */}
                <div className="bg-[#EADBCE] border border-[#16120D] p-3 font-sans text-[11px] text-[#D9572B] mt-8">
                  <span className="font-bold text-[#16120D] mr-2">Categories:</span>
                  <span>2026 in Indian politics</span> • <span>Bharatiya Janata Party controversies</span> • <span>Cockroaches</span> • <span>Indian political satire</span> • <span>Indian youth culture</span> • <span>Internet memes introduced in 2026</span> • <span>Joke political parties</span> • <span>Political movements in India</span> • <span>2026 Delhi Jantar Mantar protests</span>
                </div>

              </div>

              {/* Right Wikipedia Infobox Sidebar */}
              <div className="lg:col-span-4">
                <div className="bg-[#EADBCE] border border-[#16120D] p-4 text-xs font-sans space-y-4 shadow-sm">
                  
                  {/* Infobox Header */}
                  <div className="text-center border-b border-[#16120D] pb-3 bg-[#EADBCE] -mx-4 -mt-4 p-3">
                    <h3 className="font-serif font-bold text-xl text-[#16120D]">Cockroach Janta Party</h3>
                    <span className="text-[#3A332B] italic text-[11px]">Aapki Apni Swarm Sarkar</span>
                  </div>

                  {/* Emblem Logo */}
                  <div className="bg-[#16120D] p-3 text-center border border-[#16120D]">
                    <img src="/cjp_logo_emblem.svg" alt="CJP Official Mascot Emblem" className="w-20 h-20 mx-auto object-contain mb-1" />
                    <span className="text-[10px] text-[#F5EFE6] font-bold block">Official Mascot Emblem</span>
                  </div>

                  {/* Fact Sheet Table */}
                  <table className="w-full text-left border-collapse text-xs">
                    <tbody>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B] w-1/3">Abbreviation</th>
                        <td className="py-2 font-black text-[#16120D]">CJP</td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Founder</th>
                        <td className="py-2 text-[#D9572B] font-bold">Abhijeet Dipke</td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Founded</th>
                        <td className="py-2">16 May 2026 (New Delhi)</td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Headquarters</th>
                        <td className="py-2">New Delhi, India</td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Spokespeople</th>
                        <td className="py-2 text-[#D9572B] leading-tight">
                          Saurav Das, Ashutosh Ranka, Aafreen Nawaz, Deepak Baliyan, Ratna Singh, Vaishnavi Gaur
                        </td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Ideology</th>
                        <td className="py-2 text-[11px] leading-snug">
                          Political satire, Youth politics, Youth empowerment, Secularism, Populism, Reformism, Socialism
                        </td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Colours</th>
                        <td className="py-2">Brown / Parchment</td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Slogan</th>
                        <td className="py-2 italic text-[#D9572B] font-bold">"Voice of the Lazy &amp; Unemployed"</td>
                      </tr>
                      <tr className="border-b border-[#16120D]">
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">ECI Status</th>
                        <td className="py-2 font-bold text-[#c0392b]">Not registered</td>
                      </tr>
                      <tr>
                        <th className="py-2 pr-2 font-bold text-[#3A332B]">Website</th>
                        <td className="py-2 text-[#D9572B] font-bold underline">cockroachjantaparty.org</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>

            </div>

            {/* Wikipedia Copyright Footer */}
            <footer className="bg-[#EADBCE] border-t border-[#16120D] p-4 sm:px-10 text-[11px] font-sans text-[#3A332B] space-y-1">
              <p>This page was last edited on 1 September 2026, at 07:04 (UTC).</p>
              <p>Text is available under the Creative Commons Attribution-ShareAlike 4.0 License; additional terms may apply. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc.</p>
            </footer>

          </div>
        ) : (
          /* ==================== EXPANDED VISUAL CJP CIVIC MISSION HUB ==================== */
          <div className="space-y-12">
            
            {/* Mission Hero Banner */}
            <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-12 shadow-[8px_8px_0px_0px_#16120D] space-y-4">
              <div className="flex items-center gap-2 text-[#D9572B] font-black text-xs uppercase tracking-widest">
                <ShieldCheck size={16} /> CIVIC TRANSPARENCY &amp; SATIRE MOVEMENT
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#16120D] font-black uppercase leading-none">
                CJP CIVIC MISSION OVERVIEW
              </h2>
              <p className="text-sm md:text-base text-[#3A332B] font-medium leading-relaxed">
                Cockroach Janata Party (CJP) is an independent youth civic movement and political satire publication in India. Founded in 2026 by student researcher Abhijeet Dipke, CJP examines daily municipal issues—from subterranean sewer clearance depths to 3-year contractor road warranties—using creative humor, digital posters, and public RTI ledgers.
              </p>
            </div>

            {/* 4 Stat Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-6 text-center shadow-[4px_4px_0px_0px_#D9572B]">
                <div className="font-display text-4xl text-[#D9572B] font-black">148,920+</div>
                <div className="text-xs font-extrabold uppercase mt-1">Swarm Members</div>
              </div>
              <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-6 text-center shadow-[4px_4px_0px_0px_#D9572B]">
                <div className="font-display text-4xl text-[#E6A100] font-black">2,450+</div>
                <div className="text-xs font-extrabold uppercase mt-1">Graphics Created</div>
              </div>
              <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-6 text-center shadow-[4px_4px_0px_0px_#D9572B]">
                <div className="font-display text-4xl text-[#27AE60] font-black">18,400+</div>
                <div className="text-xs font-extrabold uppercase mt-1">Potholes Logged</div>
              </div>
              <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-6 text-center shadow-[4px_4px_0px_0px_#D9572B]">
                <div className="font-display text-4xl text-[#2980B9] font-black">84</div>
                <div className="text-xs font-extrabold uppercase mt-1">Active Cities</div>
              </div>
            </div>

            {/* Spokespersons Panel */}
            <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 shadow-[8px_8px_0px_0px_#16120D] space-y-6">
              <div className="border-b-4 border-[#16120D] pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">MEDIA RELATIONS &amp; POLICY</span>
                  <h3 className="font-display text-3xl text-[#16120D] font-black uppercase">OFFICIAL CJP SPOKESPERSONS</h3>
                </div>
                <Users size={24} className="text-[#D9572B]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {spokespersonsList.map((sp, idx) => (
                  <div key={idx} className="bg-[#EADBCE] border-2 border-[#16120D] p-5 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-[#16120D] text-[#F5EFE6] text-[9.5px] font-black px-2 py-0.5 uppercase tracking-wider">{sp.badge}</span>
                        <span className="text-[10px] font-extrabold text-[#D9572B] uppercase">{sp.city}</span>
                      </div>
                      <h4 className="font-display text-2xl text-[#16120D] font-black uppercase leading-tight">{sp.name}</h4>
                      <p className="text-xs text-[#3A332B] font-bold mt-1">{sp.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Point Manifesto Cards */}
            <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-[8px_8px_0px_0px_#16120D] space-y-6">
              <div className="border-b-2 border-white/20 pb-4">
                <span className="bg-[#D9572B] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest inline-block mb-2">
                  POLICY MANIFESTO
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-white font-black uppercase">THE 5-POINT CIVIC MANIFESTO</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {manifestoPoints.map((mp, idx) => (
                  <div key={idx} className="bg-[#231F1A] border-2 border-white/10 p-6 flex flex-col justify-between hover:border-[#D9572B] transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-full bg-[#D9572B] text-white font-display text-lg flex items-center justify-center font-black">
                          {mp.num}
                        </span>
                        <Award size={16} className="text-[#E6A100]" />
                      </div>
                      <h4 className="font-display text-xl text-white font-black uppercase mb-2 leading-tight">{mp.title}</h4>
                      <p className="text-xs text-[#EADBCE] font-medium leading-relaxed">{mp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Poster Gallery Showcase */}
            <div className="space-y-6">
              <div className="border-b-4 border-[#16120D] pb-3">
                <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block">FEATURED ARTWORK</span>
                <h3 className="font-display text-3xl text-[#16120D] font-black uppercase">FEATURED CAMPAIGN POSTERS</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {postersData.slice(0, 4).map((post) => (
                  <PosterCard key={post.id} poster={post} />
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
