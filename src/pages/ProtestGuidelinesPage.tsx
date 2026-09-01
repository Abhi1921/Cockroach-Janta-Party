import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, Scale, CheckSquare } from 'lucide-react';

export const ProtestGuidelinesPage: React.FC = () => {
  const { lang } = useLanguage();

  const constitutionalRights = [
    {
      title: "Article 19(1)(b) Freedom of Assembly",
      desc: "Guarantees all citizens of India the fundamental right to assemble peacefully and without arms on public grounds and roads."
    },
    {
      title: "Article 19(1)(a) Freedom of Expression",
      desc: "Protects the right to carry banners, wear satirical badges, perform street theatre, and voice grievances without unlawful pre-censorship."
    },
    {
      title: "Right to Police Liaison",
      desc: "Volunteers have the right to inform the local Police Control Room (PCR) in advance and request traffic management assistance for peaceful marches."
    }
  ];

  const groundRules = [
    "Strict Non-Violence: Zero tolerance for property damage, inflammatory hate speech, or physical aggression.",
    "Identification & Badges: Carry your CJP Swarm Member Digital ID Card and student/government identity card at all times.",
    "Field Marshals: Follow instructions from designated CJP yellow-vest field marshals and medical volunteers.",
    "Clean-Up Guarantee: Leave protest venues cleaner than found. Volunteers collect trash and banners post-assembly.",
    "Legal Aid Hotlines: Keep emergency contact numbers saved on your phone and activated in BitChat offline mode."
  ];

  return (
    <div className="protest-guidelines-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'विरोध प्रदर्शन दिशानिर्देश | कॉकरोच जनता पार्टी' : 'Protest & Peaceful Ground Assembly Guidelines | CJP'}
        description="Article 19(1)(b) constitutional rights, peaceful assembly code of conduct, police liaison protocol, and de-escalation guidelines for CJP ground rallies."
        canonicalUrl="https://cockroachjantapartywale.com/protest-guidelines"
      />

      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            CONSTITUTIONAL RIGHTS &amp; SAFETY DOSSIER
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-3 uppercase tracking-tight">
            GROUND PROTEST GUIDELINES
          </h1>
          <p className="text-sm text-[#3A332B] font-extrabold uppercase tracking-wider max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'अनुच्छेद 19(1)(b) के तहत शांतिपूर्ण विरोध प्रदर्शन का अधिकार और ज़मीनी स्वयंसेवक नियम।'
              : 'Constitutional framework, non-violent protocols, and safety guidelines for all CJP civic rallies.'}
          </p>
        </div>

        {/* Article 19 Banner */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-8 border-4 border-[#16120D] shadow-2xl mb-16 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/20 pb-3">
            <Scale size={28} className="text-[#D9572B]" />
            <h2 className="font-serif font-black text-2xl uppercase">
              CONSTITUTION OF INDIA — ARTICLE 19(1)(b)
            </h2>
          </div>
          <p className="text-xs text-[#EADBCE] font-serif italic leading-relaxed">
            &ldquo;All citizens shall have the right to assemble peacefully and without arms.&rdquo;
          </p>
          <p className="text-[11px] text-[#EADBCE] font-sans leading-relaxed">
            Every CJP rally, protest march, and ward audit is conducted strictly within the boundaries of constitutional peace. We assert our right to hold government institutions accountable while respecting law, order, and public harmony.
          </p>
        </div>

        {/* Rights Grid */}
        <div className="mb-16">
          <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase border-b-4 border-[#16120D] pb-2 mb-6">
            YOUR LEGAL RIGHTS ON THE GROUND
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {constitutionalRights.map((r, i) => (
              <div key={i} className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-lg space-y-3">
                <span className="bg-[#D9572B] text-white text-[9px] font-black px-2 py-0.5 uppercase">
                  LEGAL PROTECTIONS #{i + 1}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase">{r.title}</h3>
                <p className="text-xs text-[#3A332B] font-medium leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ground Code of Conduct */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-xl space-y-6 mb-12">
          <div className="flex items-center gap-3 border-b-2 border-[#16120D] pb-3">
            <ShieldCheck size={28} className="text-[#D9572B]" />
            <h3 className="font-serif font-black text-2xl text-[#16120D] uppercase">
              VOLUNTEER CODE OF CONDUCT
            </h3>
          </div>

          <div className="space-y-3">
            {groundRules.map((rule, idx) => (
              <div key={idx} className="bg-[#EADBCE] border border-[#16120D] p-4 flex items-start gap-3 text-xs text-[#16120D] font-bold">
                <CheckSquare size={16} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
