import React from 'react';
import { SEOHead } from '../components/SEOHead';

export const BlackMondayPage: React.FC = () => {
  const questionsList = [
    {
      num: 'ONE',
      title: 'Question One: Why did the police not wear badges?',
      legalContext: 'Section 36 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
      desc: 'Uniformed officers moved through the crowd with no nameplate, no rank badge, and no force identification. Under Section 36 BNSS 2023, every police officer performing public duty must wear accurate, visible name tags.',
      evidence: 'Video recordings from Jantar Mantar (20 July 2026) showing unidentifiable personnel in official gear.',
      sourceName: 'BNSS 2023 Guidelines / Public Video Archive'
    },
    {
      num: 'TWO',
      title: 'Question Two: Why were officers not in uniform?',
      legalContext: 'BNSS Chapter XI (Public Order & Dispersal)',
      desc: 'A separate group wearing ordinary plainclothes carried wooden sticks and beat protesters. The law is clear that only a magistrate or a police officer in uniform is empowered under BNSS Chapter XI to order a crowd to disperse.',
      evidence: 'Multiple camera angles showing non-uniformed individuals wielding lathis within police cordons.',
      sourceName: 'BNSS Chapter XI Dispersal Protocol'
    },
    {
      num: 'THREE',
      title: 'Question Three: Why were water cannons never used?',
      legalContext: 'Standard Non-Lethal Crowd Control Hierarchy',
      desc: 'Water cannons are the primary non-lethal method for crowd dispersal before physical force escalation. On 20 July, that step was skipped entirely. Officers escalated directly to lathis and tear gas.',
      evidence: 'Newslaundry Investigation: July 20 Crackdown Documentation',
      sourceName: 'Newslaundry Investigative Report'
    },
    {
      num: 'FOUR',
      title: 'Question Four: Why were protestors lathi-charged above the waist?',
      legalContext: 'Police Manual Dispersal Directives',
      desc: 'Protestors sustained head injuries, fractures, and severe blood clots. Police manuals strictly mandate that a lathi charge, when lawfully authorized, must strike below the waist to avoid fatal injuries.',
      evidence: 'Medical intake records from RML & Safdarjung Hospitals',
      sourceName: 'Medical Emergency Room Intake Records'
    },
    {
      num: 'FIVE',
      title: 'Question Five: Why did police officers have nails on their lathis?',
      legalContext: 'Alt News & Independent Fact-Check Verification',
      desc: 'Many protestors noticed officers holding lathis with metal nails affixed. Although PIB Fact Check initially called the claims misleading, independent fact-checkers confirmed baton-with-nails footage was authentic.',
      evidence: 'Alt News Verification: Baton-with-nails videos from 20 July march',
      sourceName: 'Alt News Verification Report'
    },
    {
      num: 'SIX',
      title: 'Question Six: Why was tear gas fired at close range?',
      legalContext: 'Tear Gas Operational Protocols',
      desc: 'Tear gas shells were fired at short range across Shastri Bhawan, Raisina Road, Rail Bhawan, and Janpath. Shells reached Central Secretariat metro station, affecting uninvolved commuters.',
      evidence: 'Commuter video footage at Central Secretariat Metro Station',
      sourceName: 'Public Video Archives / Transit Logs'
    },
    {
      num: 'SEVEN',
      title: 'Question Seven: Why did male officers assault female protestors?',
      legalContext: 'Section 43 of the BNSS, 2023 (Arrest of Women)',
      desc: 'Under Section 43 BNSS 2023, physical contact by a male officer on a woman is strictly barred unless she resists violently or unless the arresting officer is a female officer.',
      evidence: 'ThePrint Reporting: Women and minor student detentions',
      sourceName: 'ThePrint Court & Field Reports'
    },
    {
      num: 'EIGHT',
      title: 'Question Eight: Why were pellet guns fired at protestors?',
      legalContext: 'CRPF Enquiry & Hospital Documentation',
      desc: 'At least four people were treated for serious pellet injuries, including 19-year-old DU student Sahil Lochab (who suffered severe eye trauma). A CRPF enquiry confirmed 7 pellet rounds were fired by the RAF.',
      evidence: 'CRPF Official Enquiry Report & Article-14 Investigation',
      sourceName: 'Article-14 & The Wire Medical Investigations'
    },
    {
      num: 'NINE',
      title: 'Question Nine: Why did the police lie? Who are they protecting?',
      legalContext: 'Public Information Disclosures & Social Media Blocking',
      desc: 'Official accounts claimed no violence or detentions occurred, contradicted later by CRPF reports. Over 400 social media handles posting footage were subsequently blocked.',
      evidence: 'Social Media Suspension Notices & Official Discrepancy Logs',
      sourceName: 'Digital Rights & Freedom of Expression Archive'
    },
    {
      num: 'TEN',
      title: 'Question Ten: Why was there an illegal internet blackout?',
      legalContext: 'Telecommunications (Temporary Suspension of Services) Rules 2024',
      desc: 'Mobile internet went dark across Central Delhi and signal jammers were deployed without publishing mandatory written suspension orders under 2024 rules.',
      evidence: 'Network Outage Logs & Telecommunications Audit',
      sourceName: 'Digital Rights Foundation Network Log'
    },
    {
      num: 'ELEVEN',
      title: 'Question Eleven: Why are India’s citizens being surveilled like terrorists?',
      legalContext: 'Delhi High Court Public Interest Litigation (PIL)',
      desc: 'A permanent AI facial recognition surveillance tower filmed Jantar Mantar since June 20, processing student faces against criminal databases.',
      evidence: 'The News Minute Explainer: Delhi Police AI Surveillance PIL',
      sourceName: 'The News Minute Legal Coverage'
    }
  ];

  return (
    <div className="black-monday-page py-16 bg-[#16120D] text-[#F5EFE6] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="Black Monday · 20 July Timeline | Cockroach Janta Party"
        description="Official documentation and 11 unanswered questions regarding the 20 July 2026 Black Monday peaceful student march to Parliament."
        canonicalUrl="http://localhost:3000/black-monday"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Banner Alert Top */}
        <div className="bg-[#D9572B] text-white p-4 text-center font-extrabold text-xs uppercase tracking-widest mb-12 border-2 border-white/20 shadow-xl">
          ✊ IN THE FIGHT FOR RIGHTS, INVITATIONS ARE NEVER SENT. THOSE WITH A STRONG SENSE OF JUSTICE STEP FORWARD ON THEIR OWN.
        </div>

        {/* Header Hero */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-[#D9572B] text-white px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            SPECIAL EVIDENCE REPORT · 20 JULY 2026
          </span>

          <h1 className="font-display text-6xl md:text-9xl text-white mb-2 uppercase leading-none">
            BLACK MONDAY
          </h1>

          <h2 className="font-hindi text-3xl md:text-5xl text-[#D9572B] font-black mb-6">
            सब याद रखा जाएगा
          </h2>

          <p className="text-base md:text-lg text-[#EADBCE] leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            A stubborn swarm of cockroaches walked toward Parliament. The Government decided that lathis were the answer.
          </p>

          <div className="inline-flex items-center gap-2 bg-[#EADBCE] text-[#16120D] px-6 py-2.5 font-extrabold text-xs uppercase tracking-widest border border-white">
            <span>HASHTAGS: #JawaabDo · #BlackMonday</span>
          </div>
        </div>

        {/* Timeline Key Events (Jul 18 -> Jul 20) */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          
          {/* Jul 18 */}
          <div className="bg-[#231F1A] border-2 border-[#D9572B] p-8 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[#D9572B]/30 pb-3 mb-4">
              <span className="font-display text-3xl text-[#D9572B]">JUL 18 · 7:40 AM</span>
              <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase">EVENT #01</span>
            </div>
            <h3 className="font-display text-3xl text-white uppercase mb-3">FIRST THEY CAME FOR SONAM WANGCHUK</h3>
            <p className="text-xs md:text-sm text-[#EADBCE] leading-relaxed mb-4">
              On 18th July 2026, Sonam Wangchuk was on the 21st day of his climate fast, having named 20 July as the day students would march to Parliament. At 7:40 AM, Delhi Police forcefully removed him from Jantar Mantar and admitted him to Safdarjung Hospital without consent.
            </p>
            <div className="bg-[#16120D] border border-[#D9572B]/40 p-3 text-[11px] text-[#D9572B] font-bold">
              EVIDENCE STATUS: Safdarjung Hospital Forced Admission Record
            </div>
          </div>

          {/* Jul 20 Morning */}
          <div className="bg-[#231F1A] border-2 border-[#D9572B] p-8 shadow-2xl">
            <div className="flex justify-between items-center border-b border-[#D9572B]/30 pb-3 mb-4">
              <span className="font-display text-3xl text-[#D9572B]">JUL 20 · 08:00 AM</span>
              <span className="bg-[#D9572B] text-white text-[10px] font-extrabold px-3 py-1 uppercase">EVENT #02</span>
            </div>
            <h3 className="font-display text-3xl text-white uppercase mb-3">PROPS PLACED BEFORE THE MARCH</h3>
            <p className="text-xs md:text-sm text-[#EADBCE] leading-relaxed mb-4">
              At 8 AM on 20th July, a truck loaded with stones appeared near the protest site. Investigations revealed Delhi Police had seized the truck four days earlier after a road accident. It was sitting in the malkhana at Parliament Street station as crime scene evidence.
            </p>
            <div className="bg-[#16120D] border border-[#D9572B]/40 p-4 text-[11px] text-[#EADBCE]">
              <span className="font-bold text-[#D9572B] block uppercase mb-1">NEWSLAUNDRY INVESTIGATION SOURCE:</span>
              "Newslaundry traced the vehicle with its registration number. It was in the custody of Parliament Street station malkhana."
            </div>
          </div>

          {/* Jul 20 The Walk */}
          <div className="bg-[#231F1A] border-2 border-white/20 p-8 shadow-2xl">
            <div className="flex justify-between items-center border-b border-white/20 pb-3 mb-4">
              <span className="font-display text-3xl text-white">JUL 20 · SANSAD BHAWAN MARCH</span>
              <span className="bg-white text-[#16120D] text-[10px] font-extrabold px-3 py-1 uppercase">THE COCKROACHES WALKED</span>
            </div>
            <h3 className="font-display text-3xl text-[#EADBCE] uppercase mb-3">TENS OF THOUSANDS JOINED PEACEFUL MARCH</h3>
            <p className="text-xs md:text-sm text-[#EADBCE] leading-relaxed mb-4">
              Section 163 BNSS was imposed covering New Delhi district. Metro stations were shut at Patel Chowk, Rajiv Chowk, and Janpath. Mobile internet was cut. Yet tens of thousands of students, parents, teachers, and workers joined the peaceful march to Sansad Bhawan.
            </p>
          </div>

        </div>

        {/* 11 UNANSWERED QUESTIONS SECTION (#JawaabDijiye) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[11px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">ELEVEN UNANSWERED QUESTIONS</span>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase">#JAWAAB DIJIYE</h2>
            <p className="text-xs text-[#EADBCE] max-w-xl mx-auto mt-2">
              Unlawful acts documented on 20 July that the Delhi Police and Home Ministry must explain.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {questionsList.map((q) => (
              <div key={q.num} className="bg-[#231F1A] border-2 border-[#D9572B] p-8 shadow-xl">
                
                <div className="flex justify-between items-center border-b border-[#D9572B]/30 pb-3 mb-4">
                  <span className="font-display text-4xl text-[#D9572B]">{q.num}</span>
                  <span className="bg-[#16120D] text-[#EADBCE] text-[10px] font-extrabold px-3 py-1 uppercase tracking-wider">
                    LEGAL: {q.legalContext}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-white uppercase mb-3">
                  {q.title}
                </h3>

                <p className="text-xs md:text-sm text-[#EADBCE] leading-relaxed font-medium mb-4">
                  {q.desc}
                </p>

                <div className="bg-[#16120D] border border-[#D9572B]/40 p-3 text-[11px] text-[#EADBCE] flex items-center justify-between">
                  <span><strong>EVIDENCE:</strong> {q.evidence}</span>
                  <span className="text-[#D9572B] font-bold">SOURCE: {q.sourceName}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* THE AGREEMENT & BROKEN PROMISES */}
        <div className="bg-[#231F1A] border-2 border-white/20 p-8 md:p-12 max-w-4xl mx-auto mb-20 shadow-2xl">
          <h2 className="font-display text-4xl text-white uppercase mb-6 border-b border-white/20 pb-4">
            THE 25 JULY AGREEMENT &amp; STATUS
          </h2>

          <div className="space-y-4 text-xs md:text-sm text-[#EADBCE] mb-8 font-medium">
            <div className="flex items-center justify-between p-3 bg-[#16120D] border border-green-500/50">
              <span>1. Union Education Minister Resignation</span>
              <span className="text-green-400 font-extrabold uppercase">✅ DONE</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#16120D] border border-yellow-500/50">
              <span>2. ₹1 Crore Compensation to Families of Deceased Students</span>
              <span className="text-yellow-400 font-extrabold uppercase">⏳ PENDING</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#16120D] border border-yellow-500/50">
              <span>3. Withdrawal of Action &amp; FIRs Against Student Protesters</span>
              <span className="text-yellow-400 font-extrabold uppercase">⏳ PENDING (SG Refused 2,700 FIRs)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#16120D] border border-yellow-500/50">
              <span>4. Public Apology from RAF and Delhi Police</span>
              <span className="text-yellow-400 font-extrabold uppercase">⏳ PENDING</span>
            </div>
          </div>

          <div className="bg-[#16120D] border border-[#D9572B] p-6 text-xs text-[#EADBCE] space-y-3">
            <span className="font-extrabold text-[#D9572B] block uppercase text-sm">SUPREME COURT OBSERVATIONS (CJI SURYA KANT)</span>
            <p>
              "Peaceful Protests Constitutionally Protected, Mere Agitation Can't Justify Lathi-Charge."
            </p>
            <p className="text-[11px] text-white/70">
              On 18 August, the Supreme Court asked the Union Government to provide a consolidated list of FIRs against student protesters to quash under Article 142. Solicitor General stated 2,700 FIRs will not be withdrawn.
            </p>
          </div>
        </div>

        {/* CLOSING BANNER */}
        <div className="bg-[#D9572B] text-white p-12 text-center max-w-4xl mx-auto shadow-2xl border-2 border-white/20">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-4">
            30 DAYS AND COUNTING.
          </h2>
          <p className="font-hindi text-2xl md:text-4xl font-black mb-6">
            सब याद रखा जाएगा।
          </p>
          <div className="text-xs font-extrabold uppercase tracking-widest">
            #JAWAABDIJIYE · #BLACKMONDAY · COCKROACH JANTA PARTY
          </div>
        </div>

      </div>
    </div>
  );
};
