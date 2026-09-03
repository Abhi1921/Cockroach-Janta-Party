import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { siteConfig } from '../data/siteConfig';
import {
  ShieldAlert,
  FileText,
  ChevronDown,
  Users,
  Droplet,
  Wrench,
  FileSearch,
  School,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Building,
  Target
} from 'lucide-react';

export const ManifestoPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const manifestoDemands = [
    {
      num: '01',
      icon: Wrench,
      titleEn: 'MANDATORY SUBTERRANEAN DRAINAGE & SEWER DESILTING',
      titleHi: 'अनिवार्य भूमिगत ड्रेनेज व सीवर सफाई',
      summaryEn: 'Bi-weekly mechanized desilting of municipal drain channels with public geotagged records.',
      summaryHi: 'सार्वजनिक जीआईएस डेटा के साथ नगर निगम नालों की नियमित सफाई की गारंटी।',
      explanationEn: 'Under municipal charter guidelines, all subterranean drainage networks must undergo regular mechanized desilting prior to monsoon seasons. CJP demands open digital publishing of cleaning schedules to eliminate urban waterlogging.',
      explanationHi: 'नगर निगम दिशानिर्देशों के तहत बारिश से पहले सभी भूमिगत सीवर चैनलों की मशीनीकृत सफाई अनिवार्य होनी चाहिए।',
      contextEn: 'Urban waterlogging repeatedly damages local infrastructure and household property in low-lying ward sectors.',
      positionTag: "CJP STATED POSITION · CIVIC CHARTER",
      source: 'CJP Civic Audit Series 2026 / Municipal Works Manual'
    },
    {
      num: '02',
      icon: ShieldCheck,
      titleEn: 'PHYSICAL 3-YEAR CONTRACTOR REPAIR WARRANTY BOARDS',
      titleHi: 'सड़क निर्माण स्थलों पर 3-वर्षीय ठेकेदार वारंटी बोर्ड',
      summaryEn: 'Mandatory physical notice boards displaying contractor liability contact info on all paving sites.',
      summaryHi: 'सार्वजनिक सड़क निर्माण पर ठेकेदार के दायित्व और संपर्क विवरण का भौतिक बोर्ड लगाना।',
      explanationEn: 'Every public road construction contract exceeding ₹5 Lakhs must feature an on-site physical notice board displaying contractor contact details, warranty expiration dates, and municipal engineer liability contact information.',
      explanationHi: '₹5 लाख से अधिक की सड़क परियोजनाओं पर 3 साल की वारंटी अवधि का स्पष्ट बोर्ड होना अनिवार्य है।',
      contextEn: 'Potholes re-emerging within months of road construction often go unaddressed due to lack of public contractor liability information.',
      positionTag: "CJP STATED POSITION · PUBLIC TRANSPARENCY",
      source: 'Section 4 RTI Disclosure Guidelines / PWD Contract Terms'
    },
    {
      num: '03',
      icon: Droplet,
      titleEn: 'PIPED DRINKING WATER QUALITY TESTING KIOSKS',
      titleHi: 'नि:शुल्क घरेलू पेयजल गुणवत्ता परीक्षण कियोस्क',
      summaryEn: 'Free rapid volunteer TDS and chlorine testing hubs for household tap water connections.',
      summaryHi: 'घरों में पानी की टीडीएस व क्लोरीन जांच के लिए नि:शुल्क परीक्षण केंद्र।',
      explanationEn: 'Establishing free mobile test kiosks in public markets to measure total dissolved solids (TDS) and residual chlorine in municipal drinking water lines, ensuring safe household tap water.',
      explanationHi: 'सार्वजनिक बाजारों में पीने के पानी की शुद्धता जांचने के लिए मोबाइल परीक्षण कियोस्क स्थापित करना।',
      contextEn: 'Contaminated tap water supply leads to waterborne illnesses in densely populated ward sectors.',
      positionTag: "CJP STATED POSITION · PUBLIC HEALTH",
      source: 'Bureau of Indian Standards IS 10500 Drinking Water Guidelines'
    },
    {
      num: '04',
      icon: Users,
      titleEn: 'DIRECT MUNICIPAL WAGE DISBURSEMENT & SANITATION SAFETY',
      titleHi: 'सीधा बैंक वेतन भुगतान व स्वच्छता कर्मचारी सुरक्षा',
      summaryEn: 'Elimination of contractor middleman wage retention and provision of ergonomic safety gear.',
      summaryHi: 'बिचौलियों की कटौती समाप्त कर सीधा बैंक भुगतान और सुरक्षा उपकरण प्रदान करना।',
      explanationEn: 'Sanitation workers must receive direct municipal bank wage transfers to prevent contractor middleman deductions. Additionally, proper safety gear and health insurance must be provided to all ward maintenance staff.',
      explanationHi: 'सफाई कर्मचारियों को सीधे बैंक खाते में वेतन और अनिवार्य सुरक्षा उपकरण मिलना चाहिए।',
      contextEn: 'Subcontractor wage deductions unfairly diminish monthly compensation for municipal sanitation laborers.',
      positionTag: "CJP STATED POSITION · LABOR DIGNITY",
      source: 'Municipal Sanitation Safety Charter 2026'
    },
    {
      num: '05',
      icon: FileSearch,
      titleEn: 'OPEN RTI DIGITIZATION & ZERO PAYWALL LEDGERS',
      titleHi: 'खुला आरटीआई पोर्टल व मुफ्त सार्वजनिक बजट खाते',
      summaryEn: 'Zero paywall digital access to ward budgets, tender documents, and expenditure ledgers.',
      summaryHi: 'नगर निगम बजट, निविदा दस्तावेजों और आरटीआई प्रश्नों तक नि:शुल्क ऑनलाइन पहुंच।',
      explanationEn: 'Proactive digital publishing under Section 4 of the Right to Information Act, giving citizens instant online access to ward maintenance ledgers, contractor bill-of-quantities, and municipal expenditure approvals.',
      explanationHi: 'सूचना का अधिकार अधिनियम की धारा 4 के तहत सभी सार्वजनिक निविदाओं को ऑनलाइन प्रकाशित करना।',
      contextEn: 'Complex administrative procedures often deter ordinary residents from tracking local ward spending.',
      positionTag: "CJP STATED POSITION · DIGITAL TRANSPARENCY",
      source: 'Right to Information Act 2005 / Section 4 Mandate'
    },
    {
      num: '06',
      icon: School,
      titleEn: 'PUBLIC SCHOOL & INFRASTRUCTURE RENOVATION',
      titleHi: 'सरकारी स्कूलों व सार्वजनिक बुनियादी ढांचे का सुधार',
      summaryEn: 'Modernizing primary municipal school facilities and expanding public library access.',
      summaryHi: 'प्राथमिक विद्यालयों का आधुनिकीकरण और नि:शुल्क अध्ययन केंद्रों की स्थापना।',
      explanationEn: 'Public infrastructure must prioritize civic education centers and neighborhood schools. We demand dedicated ward budget allocation for structural repairs, clean sanitation blocks, and digital learning labs.',
      explanationHi: 'सार्वजनिक वार्ड बजट का प्राथमिक हिस्सा सरकारी प्राथमिक विद्यालयों की मरम्मत और पुस्तकालयों में लगाया जाए।',
      contextEn: 'Neglected municipal school buildings undermine the educational foundation of working-class neighborhoods.',
      positionTag: "CJP STATED POSITION · CIVIC EDUCATION",
      source: 'Right to Education & Municipal Infrastructure Charter'
    },
    {
      num: '07',
      icon: Target,
      titleEn: 'CITIZEN CIVIC AUDITS & REAL-TIME DEFECT MAPPING',
      titleHi: 'नागरिक वार्ड ऑडिट व रीयल-टाइम समस्या ट्रैकिंग',
      summaryEn: 'Geotagged civic grievance portals with mandatory 48-hour municipal response SLAs.',
      summaryHi: 'भू-टैग की गई शिकायतों के समाधान के लिए 48 घंटे की अनिवार्य समय-सीमा।',
      explanationEn: 'Empowering local ward residents with digital verification tools to audit road repairs, streetlights, and garbage collection routes in real time.',
      explanationHi: 'स्थानीय निवासियों को सड़क मरम्मत और कचरा प्रबंधन का ऑडिट करने के लिए तकनीकी अधिकार प्रदान करना।',
      contextEn: 'Unresolved municipal grievances stall neighborhood development without transparent SLA tracking.',
      positionTag: "CJP STATED POSITION · CITIZEN AUDIT",
      source: 'CJP Swarm Ward Governance Protocol 2026'
    }
  ];

  const beliefStatements = [
    {
      textEn: 'WE BELIEVE REAL CIVIC CHANGE IS NOT PROMISED IN ELECTIONS. IT IS DEMANDED BY CITIZENS.',
      textHi: 'हम मानते हैं कि वास्तविक नागरिक बदलाव चुनावों का वादा नहीं, नागरिकों की मांग है।',
      bgClass: 'bg-[#16120D] text-[#EADBCE]'
    },
    {
      textEn: 'WE BELIEVE IN ZERO PAYWALL TRANSPARENCY FOR EVERY WARD RUPEE SPENT.',
      textHi: 'हम मानते हैं कि खर्च किए गए हर एक वार्ड रुपये में पूर्ण डिजिटल पारदर्शिता होनी चाहिए।',
      bgClass: 'bg-[#D9572B] text-white'
    },
    {
      textEn: 'WE BELIEVE SANITATION WORKERS DESERVE DIGNITY, SAFETY GEAR, AND DIRECT WAGES.',
      textHi: 'हम मानते हैं कि सफाई कर्मचारी सम्मान, सुरक्षा उपकरण और सीधे बैंक वेतन के हकदार हैं।',
      bgClass: 'bg-[#F5EFE6] text-[#16120D] border-y-2 border-[#16120D]'
    },
    {
      textEn: 'WE BELIEVE PUBLIC INFRASTRUCTURE MUST SURVIVE THE MONSOON, NOT DISINTEGRATE.',
      textHi: 'हम मानते हैं कि सार्वजनिक बुनियादी ढांचे को मानसून में टिकना चाहिए, नष्ट नहीं होना चाहिए।',
      bgClass: 'bg-[#231F1A] text-[#EADBCE]'
    },
    {
      textEn: 'WE BELIEVE IN FEWER POLITICAL SLOGANS AND BETTER CITIZEN QUESTIONS.',
      textHi: 'हम मानते हैं कि राजनीतिक नारों की जगह तीखे और सही सवालों की जरूरत है।',
      bgClass: 'bg-[#EADBCE] text-[#16120D] border-y-2 border-[#16120D]'
    }
  ];

  const actionMatrix = [
    {
      badge: 'BELIEVE',
      badgeBg: 'bg-[#16120D] text-[#F5EFE6]',
      titleEn: 'Civic Conviction',
      titleHi: 'हमारा विश्वास',
      descEn: 'Civic progress begins when citizens stop enduring systemic neglect and start demanding contractual accountability.',
      descHi: 'नागरिक प्रगति तब शुरू होती है जब लोग लापरवाही सहना बंद करके जवाबदेही मांगते हैं।'
    },
    {
      badge: 'BUILD',
      badgeBg: 'bg-[#D9572B] text-white',
      titleEn: 'Transparency Tools',
      titleHi: 'पारदर्शिता उपकरण',
      descEn: 'We create open-source RTI templates, geotagged pothole auditing tools, and digital budget verification ledgers.',
      descHi: 'हम नि:शुल्क आरटीआई फॉर्मूले, गड्ढा ट्रैकर और बजट ऑडिट खाते उपलब्ध कराते हैं।'
    },
    {
      badge: 'ACT',
      badgeBg: 'bg-[#16120D] text-[#F5EFE6]',
      titleEn: 'Swarm Inspections',
      titleHi: 'निरीक्षण व कार्रवाई',
      descEn: 'Our 148,000+ Swarm members conduct physical ward walk-throughs, inspect contractor warranty boards, and report defects.',
      descHi: 'हमारे 1,48,000+ सदस्य भौतिक निरीक्षण करते हैं और ठेकेदार वारंटी बोर्ड की जांच करते हैं।'
    },
    {
      badge: 'IMPACT',
      badgeBg: 'bg-[#D9572B] text-white',
      titleEn: 'Measurable Progress',
      titleHi: 'मापने योग्य प्रभाव',
      descEn: 'Over 18,400 potholes flagged, 3,120 RTIs filed, and active citizen audit networks operating across 84 Indian cities.',
      descHi: '18,400+ गड्ढे दर्ज, 3,120+ आरटीआई दायर और 84 शहरों में सक्रिय नागरिक नेटवर्क।'
    }
  ];

  const coreCommitments = [
    {
      icon: Users,
      titleEn: 'Labor & Safety',
      titleHi: 'श्रमिक सम्मान व सुरक्षा',
      descEn: 'Direct bank transfer of wages to sanitation laborers, eliminating subcontractor commissions and providing PPE gear.'
    },
    {
      icon: Droplet,
      titleEn: 'Public Health & Water',
      titleHi: 'पेजल व स्वास्थ्य',
      descEn: 'Free community tap water testing kiosks ensuring compliance with BIS IS 10500 drinking water purity benchmarks.'
    },
    {
      icon: Layers,
      titleEn: 'Open Data & RTI',
      titleHi: 'खुला डेटा व आरटीआई',
      descEn: 'Proactive digital publishing under RTI Section 4, placing municipal ledgers and tender contracts online.'
    },
    {
      icon: ShieldCheck,
      titleEn: 'Infrastructure Warranty',
      titleHi: '3-वर्षीय सड़क गारंटी',
      descEn: 'Mandatory physical notice boards detailing contractor name, warranty date, and municipal engineer contact info.'
    },
    {
      icon: Building,
      titleEn: 'School Renovation',
      titleHi: 'स्कूल व पुस्तकालय',
      descEn: 'Channeling civic ward budgets toward modernizing primary municipal schools and free reading rooms.'
    },
    {
      icon: Activity,
      titleEn: 'Satirical Auditing',
      titleHi: 'पैरोडी व तीखा ऑडिट',
      descEn: 'Using sharp satire and humor to highlight governance flaws while strictly advancing legal civic rights.'
    }
  ];

  return (
    <div className="manifesto-page bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white overflow-hidden">
      <SEOHead
        title="Official Civic Manifesto | Cockroach Janta Party"
        description="Read the official editorial manifesto of Cockroach Janta Party: 7-point civic demands including drain desilting, contractor warranty boards, RTI transparency, and sanitation safety."
        canonicalUrl="https://cockroachjantapartywale.com/manifesto"
      />

      {/* SECTION 1: HERO — THE BELIEF */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between bg-[#16120D] text-[#EADBCE] px-4 sm:px-8 py-12 md:py-20 border-b-4 border-[#16120D] overflow-hidden">
        {/* Background Visual Texture */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity bg-cover bg-center" style={{ backgroundImage: "url('/cjp_banner.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#16120D]/90 via-[#16120D]/95 to-[#16120D] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-[#D9572B] text-white px-4 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-white/20">
              {lang === 'hi' ? 'नागरिक घोषणापत्र 2026' : 'OUR CIVIC MANIFESTO 2026'}
            </span>
            <span className="h-px bg-white/20 flex-1 max-w-[120px]"></span>
            <span className="text-[11px] text-[#EADBCE]/70 font-mono uppercase tracking-wider hidden sm:inline-block">
              CHARTER NO. CJP-2026-M
            </span>
          </div>

          {/* Very Large Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.9] mb-8 max-w-6xl">
            {lang === 'hi' ? (
              <>
                हम मानते हैं <span className="text-[#D9572B]">बदलाव</span> वादों से नहीं, <span className="underline decoration-[#D9572B] decoration-4">नागरिक मांगों</span> से बनता है।
              </>
            ) : (
              <>
                WE BELIEVE A <span className="text-[#D9572B]">BETTER WARD</span> IS SOMETHING WE <span className="underline decoration-[#D9572B] decoration-4">DEMAND TOGETHER</span>.
              </>
            )}
          </h1>

          {/* Short Emotional Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-8 text-base sm:text-lg md:text-2xl text-[#EADBCE]/90 font-medium leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? "कम समारोह। अधिक जवाबदेही। कम खोखले नारे। बेहतर और तीखे सवाल। कॉकरोच जनता पार्टी का 7-सूत्रीय नागरिक चार्टर।"
                : "Less ceremony. More contractual accountability. Fewer election slogans. Sharper citizen questions. Read CJP's 7-point civic declaration."}
            </p>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  `COCKROACH JANTA PARTY - OFFICIAL CIVIC MANIFESTO 2026\n\n1. Mandatory Subterranean Drainage & Sewer Desilting\n2. Physical 3-Year Contractor Repair Warranty Boards\n3. Piped Drinking Water Quality Testing Kiosks\n4. Direct Municipal Wage Disbursement & Sanitation Safety\n5. Open RTI Digitization & Zero Paywall Ledgers\n6. Public School & Infrastructure Renovation\n7. Citizen Civic Audits & Real-Time Defect Mapping\n\nHar Ghar Ki Sarkar! 🪳`
                )}`}
                download="cjp_civic_manifesto_2026.txt"
                className="btn-brutal bg-[#D9572B] text-white px-6 py-4 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-[#16120D] transition-colors"
                id="manifesto-hero-download-btn"
              >
                <FileText size={18} />
                <span>DOWNLOAD CHARTER (TXT)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-8 flex justify-between items-center text-xs text-[#EADBCE]/60 uppercase tracking-widest border-t border-white/10 mt-12">
          <span>COCKROACH JANTA PARTY</span>
          <a href="#introduction" className="flex items-center gap-2 text-[#D9572B] hover:text-white transition-colors animate-scroll-bounce">
            <span>SCROLL TO READ</span>
            <ChevronDown size={16} />
          </a>
          <span>84 CITIES ACTIVE</span>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION — WHY WE EXIST */}
      <section id="introduction" className="py-20 md:py-28 px-4 sm:px-8 max-w-[1400px] mx-auto border-b-2 border-[#16120D]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Heading */}
          <div className="lg:col-span-5">
            <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
              01 / WHY WE EXIST
            </span>
            <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#16120D] leading-tight uppercase">
              {lang === 'hi' ? 'हम क्यों अस्तित्व में हैं' : 'WHY THE SWARM EXISTS'}
            </h2>
            <p className="mt-4 text-sm font-bold text-[#D9572B] uppercase tracking-wider">
              {lang === 'hi' ? 'सहानुभूति से परे, ठोस ठेका जवाबदेही की ओर' : 'BEYOND CYNICISM · TOWARD CONTRACTUAL ACCOUNTABILITY'}
            </p>
          </div>

          {/* Right Column Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-10 shadow-[6px_6px_0px_0px_#16120D]">
              <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#D9572B] uppercase leading-tight mb-4">
                {lang === 'hi'
                  ? '"हम स्थिति बनाए रखने के लिए नहीं हैं। हम इसे उजागर करने और अपने वार्डों को पुनः प्राप्त करने आए हैं।"'
                  : '"WE ARE NOT HERE TO FOLLOW THE STATUS QUO. WE ARE HERE TO EXPOSE IT AND RECLAIM OUR WARDS."'}
              </h3>
              <p className="text-base sm:text-lg text-[#3A332B] font-medium leading-relaxed">
                {lang === 'hi'
                  ? "वर्षों से नागरिकों को टूटी सड़कों, उफनते सीवरों और घटिया निर्माण को नियति मान लेने के लिए कहा गया है। कॉकरोच जनता पार्टी इस उदासीनता को खारिज करती है। हम व्यंग्य, आरटीआई और धरातली निरीक्षण के माध्यम से प्रशासन से हिसाब मांगते हैं।"
                  : "For decades, taxpayers have been conditioned to accept re-emerging potholes, overflowing drains, and undisclosed tender documents as unalterable realities. Cockroach Janta Party rejects civic apathy. We channel satire, open data, and relentless audit into direct public pressure."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#3A332B] font-medium leading-relaxed">
              <div className="border-l-4 border-[#16120D] pl-4">
                <h4 className="font-black text-[#16120D] uppercase mb-1">01. CONTRACTUAL LIABILITY</h4>
                <p>Every municipal rupee paid to road contractors must guarantee 3-year performance warranties backed by public on-site notice boards.</p>
              </div>
              <div className="border-l-4 border-[#D9572B] pl-4">
                <h4 className="font-black text-[#16120D] uppercase mb-1">02. WORKER DIGNITY</h4>
                <p>Subcontractor commissions must end. Sanitation workers keeping our cities clean deserve direct bank transfers and full safety gear.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: MANIFESTO PRINCIPLES */}
      <section className="py-20 md:py-28 px-4 sm:px-8 max-w-[1400px] mx-auto border-b-2 border-[#16120D]/20">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            02 / CORE DEMANDS
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#16120D] uppercase leading-tight">
            {lang === 'hi' ? 'हमारा 7-सूत्रीय नागरिक एजेंडा' : 'THE 7 CIVIC PRINCIPLES'}
          </h2>
          <p className="text-[#3A332B] text-base sm:text-lg font-medium mt-3">
            {lang === 'hi'
              ? "हमारे प्रत्येक सिद्धांत का उद्देश्य सीधे आपके वार्ड की जमीनी व्यवस्था को सुधारना है।"
              : "Every demand is grounded in municipal works manuals, Indian standards, and statutory RTI disclosures."}
          </p>
        </div>

        {/* Legal Notice Box */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 max-w-4xl mb-16 shadow-[4px_4px_0px_0px_#16120D] flex items-start gap-4">
          <ShieldAlert size={26} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] font-medium leading-relaxed">
            <span className="font-extrabold text-[#16120D] block uppercase mb-1">EDITORIAL NOTICE & CITIZEN CHARTER STATUS</span>
            The 7 points below represent Cockroach Janta Party's public civic demands and satirical advocacy targets. They draw directly from existing Indian municipal charter guidelines, RTI mandates, and Bureau of Indian Standards specifications.
          </div>
        </div>

        {/* Principles Stack */}
        <div className="space-y-12">
          {manifestoDemands.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                id={`principle-${item.num}`}
                className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#16120D] hover:shadow-[12px_12px_0px_0px_#D9572B] transition-all duration-200 group"
              >
                
                {/* Number & Tag Header */}
                <div className="flex flex-wrap justify-between items-center gap-4 border-b-2 border-[#16120D]/15 pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="font-serif font-black text-5xl sm:text-7xl text-[#D9572B] group-hover:scale-105 transition-transform">
                      {item.num}
                    </span>
                    <div className="p-3 bg-[#16120D] text-[#EADBCE]">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-xs font-extrabold bg-[#16120D] text-[#F5EFE6] px-3.5 py-1.5 uppercase tracking-widest border border-white/10">
                    {item.positionTag}
                  </span>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Title & Summary */}
                  <div className="lg:col-span-7">
                    <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#16120D] uppercase mb-4 leading-tight">
                      {lang === 'hi' ? item.titleHi : item.titleEn}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-[#D9572B] leading-relaxed mb-6">
                      {lang === 'hi' ? item.summaryHi : item.summaryEn}
                    </p>

                    <div className="space-y-4 text-xs sm:text-sm text-[#3A332B] font-medium leading-relaxed bg-[#EADBCE]/50 p-5 border-l-4 border-[#16120D]">
                      <p>
                        <strong className="text-[#16120D] uppercase">EXPLANATION:</strong>{' '}
                        {lang === 'hi' ? item.explanationHi : item.explanationEn}
                      </p>
                      <p>
                        <strong className="text-[#16120D] uppercase">CIVIC CONTEXT:</strong> {item.contextEn}
                      </p>
                    </div>
                  </div>

                  {/* Reference & CTA Box */}
                  <div className="lg:col-span-5 bg-[#16120D] text-[#EADBCE] p-6 border-2 border-[#16120D] flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[10px] font-mono text-[#D9572B] uppercase tracking-widest block mb-2">
                        STATUTORY & TECHNICAL REFERENCE
                      </span>
                      <p className="text-xs font-bold text-white mb-4">
                        {item.source}
                      </p>
                      <div className="h-px bg-white/15 my-4"></div>
                      <p className="text-[11px] text-[#EADBCE]/80 leading-relaxed mb-6">
                        CJP ward observers monitor compliance with this mandate across active municipal zones.
                      </p>
                    </div>

                    <Link
                      to="/issues"
                      className="inline-flex items-center justify-between text-xs font-black text-white bg-[#D9572B] px-4 py-3 border border-white/20 hover:bg-white hover:text-[#16120D] transition-colors"
                    >
                      <span>VIEW RELATED WARDS &amp; ISSUES</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION 4: VISUAL MANIFESTO */}
      <section className="relative py-24 md:py-36 bg-[#16120D] text-[#EADBCE] overflow-hidden border-b-4 border-[#16120D]">
        <div
          className="absolute inset-0 opacity-25 mix-blend-luminosity bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/cjp_school_thik_karo_poster.png')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#16120D] via-[#16120D]/90 to-[#16120D] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 text-center">
          <span className="inline-block bg-[#D9572B] text-white px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-6">
            03 / VISUAL DECLARATION
          </span>

          <h2 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white max-w-5xl mx-auto leading-[0.95] mb-8">
            WHEN INFRASTRUCTURE FAILS, CITIZENS PAY THE PRICE.
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-[#EADBCE]/90 font-serif max-w-3xl mx-auto italic mb-10">
            "Transparency is non-negotiable. Potholes are not act-of-god misfortunes; they are breached contractor warranties."
          </p>

          <div className="inline-flex items-center gap-3 bg-[#231F1A] border-2 border-white/20 px-6 py-3 text-xs font-mono text-[#D9572B]">
            <Sparkles size={16} />
            <span>OFFICIAL CAMPAIGN POSTER #02 · SCHOOL THIK KARO &amp; MANIFESTO</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: "WE BELIEVE..." STATEMENTS */}
      <section className="py-20 md:py-28 border-b-2 border-[#16120D]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-12">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            04 / CONVICTION STATEMENTS
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#16120D] uppercase">
            WHAT WE BELIEVE
          </h2>
        </div>

        <div className="space-y-4">
          {beliefStatements.map((st, idx) => (
            <div
              key={idx}
              className={`${st.bgClass} py-12 md:py-16 px-4 sm:px-8 transition-transform duration-300 hover:scale-[1.005]`}
            >
              <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <span className="font-mono text-xs opacity-60 font-bold uppercase tracking-widest">
                  BELIEF NO. 0{idx + 1}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight max-w-5xl">
                  {lang === 'hi' ? st.textHi : st.textEn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: MANIFESTO IN ACTION */}
      <section className="py-20 md:py-28 px-4 sm:px-8 max-w-[1400px] mx-auto border-b-2 border-[#16120D]/20">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            05 / EXECUTION FRAMEWORK
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#16120D] uppercase">
            MANIFESTO IN ACTION
          </h2>
          <p className="text-[#3A332B] text-base sm:text-lg font-medium mt-3">
            How Cockroach Janta Party translates core beliefs into daily civic intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {actionMatrix.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-[6px_6px_0px_0px_#16120D] flex flex-col justify-between hover:border-[#D9572B] transition-all"
            >
              <div>
                <span className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6 ${item.badgeBg}`}>
                  {item.badge}
                </span>
                <h3 className="font-serif font-black text-2xl text-[#16120D] uppercase mb-3">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A332B] font-medium leading-relaxed">
                  {lang === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#16120D]/15 text-[10px] font-mono font-bold text-[#D9572B] uppercase tracking-wider">
                PHASE 0{idx + 1} · CJP WORKFLOW
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: IMAGE + STORY SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-8 max-w-[1400px] mx-auto border-b-2 border-[#16120D]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#16120D] border-4 border-[#16120D] p-3 shadow-[12px_12px_0px_0px_#16120D]">
              <img
                src="/cjp_press_conference_photo.jpg"
                alt="CJP Civic Press Conference and Ward Audit Team"
                className="w-full h-auto object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="mt-3 flex justify-between items-center text-[10px] font-mono text-[#EADBCE] uppercase tracking-wider border-t border-white/10 pt-2">
                <span>CJP CIVIC PRESS CONFERENCE</span>
                <span>NEW DELHI SECRETARIAT</span>
              </div>
            </div>
          </div>

          {/* Right Column Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest">
              06 / ORIGIN &amp; CONVICTION
            </span>

            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#16120D] uppercase leading-tight">
              FROM SATIRICAL SCOLDING TO CIVIC RECKONING
            </h2>

            <p className="text-base text-[#3A332B] font-medium leading-relaxed">
              Founded by Abhijeet Dipke, Cockroach Janta Party began as a satirical movement highlighting the resilience of urban citizens who navigate waterlogged streets, unpaved roads, and bureaucratic evasion daily—much like the indestructible cockroach surviving in municipal drains.
            </p>

            <p className="text-base text-[#3A332B] font-medium leading-relaxed">
              Today, CJP unites over 148,000 ward observers across 84 Indian cities. By blending parody posters with actionable RTI templates, CJP turns passive outrage into organized civic transparency.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/founder"
                className="btn-brutal bg-[#16120D] text-white px-6 py-3 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>READ FOUNDER STORY</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/members"
                className="btn-brutal bg-[#F5EFE6] text-[#16120D] px-6 py-3 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>MEET LEADERSHIP SWARM</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: CORE COMMITMENTS */}
      <section className="py-20 md:py-28 px-4 sm:px-8 max-w-[1400px] mx-auto border-b-2 border-[#16120D]/20">
        <div className="mb-16 max-w-3xl">
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            07 / COMMITMENT MATRIX
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-6xl text-[#16120D] uppercase">
            OUR CORE COMMITMENTS
          </h2>
          <p className="text-[#3A332B] text-base sm:text-lg font-medium mt-3">
            Six pillars defining CJP's engagement with citizens, labor, and municipal authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCommitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 shadow-[6px_6px_0px_0px_#16120D] hover:shadow-[10px_10px_0px_0px_#16120D] transition-all"
              >
                <div className="w-12 h-12 bg-[#16120D] text-white flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="font-serif font-black text-xl sm:text-2xl text-[#16120D] uppercase mb-3">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A332B] font-medium leading-relaxed">
                  {item.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: FINAL STATEMENT */}
      <section className="py-24 md:py-36 bg-[#16120D] text-[#EADBCE] text-center px-4 sm:px-8 border-b-4 border-[#16120D]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block bg-[#D9572B] text-white px-4 py-1 text-xs font-extrabold uppercase tracking-widest mb-8">
            08 / DECLARATION
          </span>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white leading-[0.9] max-w-5xl mx-auto mb-8">
            THIS IS WHAT WE STAND FOR. THIS IS WHAT WE BELIEVE. THIS IS WHAT WE DEMAND.
          </h2>

          <p className="text-base sm:text-2xl text-[#EADBCE]/80 font-serif italic max-w-3xl mx-auto">
            "No more silent endurance of broken roads and unaccountable budgets. Join the Swarm today."
          </p>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="bg-[#16120D] text-[#F5EFE6] border-4 border-[#16120D] p-10 sm:p-16 text-center max-w-5xl mx-auto shadow-[12px_12px_0px_0px_#D9572B] relative overflow-hidden">
          
          <span className="inline-block bg-[#D9572B] text-white px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-6">
            JOIN THE CIVIC REVOLUTION
          </span>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white mb-6 leading-tight">
            READY TO BE PART OF THE CHANGE?
          </h2>

          <p className="text-base sm:text-lg text-[#EADBCE]/90 font-medium max-w-2xl mx-auto mb-10">
            Become a verified CJP Ward Observer, file RTIs for your neighborhood, and download your official digital membership card.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/join"
              className="btn-brutal bg-[#D9572B] text-white px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider w-full sm:w-auto hover:bg-white hover:text-[#16120D]"
              id="manifesto-cta-join-btn"
            >
              {t('navJoinSwarm')}
            </Link>

            <Link
              to="/issues"
              className="btn-brutal bg-[#F5EFE6] text-[#16120D] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider w-full sm:w-auto hover:bg-[#D9572B] hover:text-white"
            >
              EXPLORE CIVIC ISSUES
            </Link>

            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                `COCKROACH JANTA PARTY - CIVIC MANIFESTO 2026\n\nFull digital charter available at https://cockroachjantapartywale.com/manifesto`
              )}`}
              download="cjp_manifesto_summary.txt"
              className="btn-brutal bg-transparent border-2 border-white/30 text-white px-6 py-4 text-xs font-black uppercase tracking-wider w-full sm:w-auto hover:border-white"
            >
              DOWNLOAD CHARTER
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-[11px] font-mono text-[#EADBCE]/60 flex flex-wrap justify-between items-center gap-4">
            <span>COCKROACH JANTA PARTY SECRETARIAT</span>
            <span>TAGLINE: {siteConfig.tagline}</span>
            <span>{siteConfig.metrics.citiesActive} CITIES ACTIVE</span>
          </div>

        </div>
      </section>

    </div>
  );
};
