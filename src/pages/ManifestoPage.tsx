import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldAlert, CheckCircle, ExternalLink } from 'lucide-react';

export const ManifestoPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const manifestoDemands = [
    {
      num: '01',
      titleEn: 'MANDATORY SUBTERRANEAN DRAINAGE & SEWER DESILTING',
      titleHi: 'अनिवार्य भूमिगत ड्रेनेज व सीवर सफाई',
      summaryEn: 'Bi-weekly mechanized desilting of municipal drain channels with public geotagged records.',
      summaryHi: 'सार्वजनिक जीआईएस डेटा के साथ नगर निगम नालों की नियमित सफाई की गारंटी।',
      explanationEn: 'Under municipal charter guidelines, all subterranean drainage networks must undergo regular mechanized desilting prior to monsoon seasons. CJP demands open digital publishing of cleaning schedules to eliminate urban waterlogging.',
      explanationHi: 'नगर निगम दिशानिर्देशों के तहत बारिश से पहले सभी भूमिगत सीवर चैनलों की मशीनीकृत सफाई अनिवार्य होनी चाहिए।',
      contextEn: 'Urban waterlogging repeatedly damages local infrastructure and household property in low-lying ward sectors.',
      positionTag: "CJP'S STATED POSITION · CIVIC CHARTER",
      source: 'CJP Civic Audit Series 2026 / Municipal Works Manual'
    },
    {
      num: '02',
      titleEn: 'PHYSICAL 3-YEAR CONTRACTOR REPAIR WARRANTY BOARDS',
      titleHi: 'सड़क निर्माण स्थलों पर 3-वर्षीय ठेकेदार वारंटी बोर्ड',
      summaryEn: 'Mandatory physical notice boards displaying contractor liability contact info on all paving sites.',
      summaryHi: 'सार्वजनिक सड़क निर्माण पर ठेकेदार के दायित्व और संपर्क विवरण का भौतिक बोर्ड लगाना।',
      explanationEn: 'Every public road construction contract exceeding ₹5 Lakhs must feature an on-site physical notice board displaying contractor contact details, warranty expiration dates, and municipal engineer liability contact information.',
      explanationHi: '₹5 लाख से अधिक की सड़क परियोजनाओं पर 3 साल की वारंटी अवधि का स्पष्ट बोर्ड होना अनिवार्य है।',
      contextEn: 'Potholes re-emerging within months of road construction often go unaddressed due to lack of public contractor liability information.',
      positionTag: "CJP'S STATED POSITION · PUBLIC TRANSPARENCY",
      source: 'Section 4 RTI Disclosure Guidelines / PWD Contract Terms'
    },
    {
      num: '03',
      titleEn: 'PIPED DRINKING WATER QUALITY TESTING KIOSKS',
      titleHi: 'नि:शुल्क घरेलू पेयजल गुणवत्ता परीक्षण कियोस्क',
      summaryEn: 'Free rapid volunteer TDS and chlorine testing hubs for household tap water connections.',
      summaryHi: 'घरों में पानी की टीडीएस व क्लोरीन जांच के लिए नि:शुल्क परीक्षण केंद्र।',
      explanationEn: 'Establishing free mobile test kiosks in public markets to measure total dissolved solids (TDS) and residual chlorine in municipal drinking water lines, ensuring safe household tap water.',
      explanationHi: 'सार्वजनिक बाजारों में पीने के पानी की शुद्धता जांचने के लिए मोबाइल परीक्षण कियोस्क स्थापित करना।',
      contextEn: 'Contaminated tap water supply leads to waterborne illnesses in densely populated ward sectors.',
      positionTag: "CJP'S STATED POSITION · PUBLIC HEALTH",
      source: 'Bureau of Indian Standards IS 10500 Drinking Water Guidelines'
    },
    {
      num: '04',
      titleEn: 'DIRECT MUNICIPAL WAGE DISBURSEMENT & SANITATION SAFETY',
      titleHi: 'सीधा बैंक वेतन भुगतान व स्वच्छता कर्मचारी सुरक्षा',
      summaryEn: 'Elimination of contractor middleman wage retention and provision of ergonomic safety gear.',
      summaryHi: 'बिचौलियों की कटौती समाप्त कर सीधा बैंक भुगतान और सुरक्षा उपकरण प्रदान करना।',
      explanationEn: 'Sanitation workers must receive direct municipal bank wage transfers to prevent contractor middleman deductions. Additionally, proper safety gear and health insurance must be provided to all ward maintenance staff.',
      explanationHi: 'सफाई कर्मचारियों को सीधे बैंक खाते में वेतन और अनिवार्य सुरक्षा उपकरण मिलना चाहिए।',
      contextEn: 'Subcontractor wage deductions unfairly diminish monthly compensation for municipal sanitation laborers.',
      positionTag: "CJP'S STATED POSITION · LABOR DIGNITY",
      source: 'Municipal Sanitation Safety Charter 2026'
    },
    {
      num: '05',
      titleEn: 'OPEN RTI DIGITIZATION & ZERO PAYWALL LEDGERS',
      titleHi: 'खुला आरटीआई पोर्टल व मुफ्त सार्वजनिक बजट खाते',
      summaryEn: 'Zero paywall digital access to ward budgets, tender documents, and expenditure ledgers.',
      summaryHi: 'नगर निगम बजट, निविदा दस्तावेजों और आरटीआई प्रश्नों तक नि:शुल्क ऑनलाइन पहुंच।',
      explanationEn: 'Proactive digital publishing under Section 4 of the Right to Information Act, giving citizens instant online access to ward maintenance ledgers, contractor bill-of-quantities, and municipal expenditure approvals.',
      explanationHi: 'सूचना का अधिकार अधिनियम की धारा 4 के तहत सभी सार्वजनिक निविदाओं को ऑनलाइन प्रकाशित करना।',
      contextEn: 'Complex administrative procedures often deter ordinary residents from tracking local ward spending.',
      positionTag: "CJP'S STATED POSITION · DIGITAL TRANSPARENCY",
      source: 'Right to Information Act 2005 / Section 4 Mandate'
    }
  ];

  return (
    <div className="manifesto-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title="CJP Manifesto | Cockroach Janta Party"
        description="Read the official 5-point civic manifesto of Cockroach Janta Party: Subterranean sewer desilting, 3-year contractor road warranties, drinking water testing, and open RTI transparency."
        canonicalUrl="http://localhost:3000/manifesto"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'नागरिक घोषणापत्र' : 'CIVIC MANIFESTO'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'हमारा 5-सूत्रीय घोषणापत्र' : 'THE CJP MANIFESTO'}
          </h1>
          <p className="text-[#3A332B] text-base md:text-lg leading-relaxed font-medium">
            {lang === 'hi'
              ? "कम समारोह। अधिक जवाबदेही। कम नारे। बेहतर सवाल।"
              : "Less ceremony. More accountability. Fewer slogans. Better questions."}
          </p>
        </div>

        {/* Legal / Editorial Disclaimer */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 max-w-4xl mx-auto mb-16 shadow-md flex items-start gap-4">
          <ShieldAlert size={24} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#3A332B] font-medium leading-relaxed">
            <span className="font-extrabold text-[#16120D] block uppercase mb-1">EDITORIAL NOTICE &amp; POSITIONING</span>
            The points below represent Cockroach Janta Party's publicly stated civic positions and satirical charter demands. They are presented for public commentary and transparent citizen debate.
          </div>
        </div>

        {/* Manifesto Cards List */}
        <div className="space-y-10 max-w-4xl mx-auto mb-20">
          {manifestoDemands.map((item) => (
            <div key={item.num} className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-10 shadow-xl hover:border-[#D9572B] transition-all">
              
              {/* Header Bar */}
              <div className="flex justify-between items-center border-b border-[rgba(22,18,13,0.18)] pb-4 mb-6">
                <span className="font-serif font-black text-5xl text-[#D9572B]">{item.num}</span>
                <span className="text-[10px] font-extrabold bg-[#16120D] text-[#F5EFE6] px-3 py-1 uppercase tracking-widest">
                  {item.positionTag}
                </span>
              </div>

              {/* Title & Summary */}
              <h2 className="font-serif font-black text-2xl md:text-3xl text-[#16120D] uppercase mb-4 leading-tight">
                {lang === 'hi' ? item.titleHi : item.titleEn}
              </h2>

              <p className="text-sm font-bold text-[#D9572B] mb-4">
                {lang === 'hi' ? item.summaryHi : item.summaryEn}
              </p>

              <div className="space-y-3 text-xs text-[#3A332B] font-medium leading-relaxed mb-6">
                <p><strong>DETAILS:</strong> {lang === 'hi' ? item.explanationHi : item.explanationEn}</p>
                <p><strong>CONTEXT:</strong> {item.contextEn}</p>
              </div>

              {/* Source Reference Tag */}
              <div className="pt-4 border-t border-[rgba(22,18,13,0.18)] flex justify-between items-center text-[10px] text-[#3A332B] font-bold">
                <span className="flex items-center gap-1 text-[#16120D]">
                  <CheckCircle size={14} className="text-[#D9572B]" /> SOURCE / REFERENCE: {item.source}
                </span>
                <Link to="/issues" className="hover:text-[#D9572B] flex items-center gap-1">
                  VIEW RELATED ISSUE <ExternalLink size={12} />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Sources & References Section */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-8 max-w-4xl mx-auto shadow-md mb-16">
          <h3 className="font-serif font-black text-lg text-[#16120D] uppercase mb-3 border-b border-[#16120D]/20 pb-2">
            SOURCES &amp; REFERENCES
          </h3>
          <ul className="text-xs text-[#3A332B] font-medium space-y-2">
            <li>• <strong>Section 4 RTI Mandate:</strong> Right to Information Act 2005, Government of India.</li>
            <li>• <strong>Municipal Public Works Manual:</strong> Standard PWD Contract Terms for Warranty Notice Boards.</li>
            <li>• <strong>Water Quality Specifications:</strong> Bureau of Indian Standards IS 10500 Drinking Water Norms.</li>
            <li>• <strong>CJP Stated Position:</strong> Cockroach Janta Party Civic Audit Series 2026.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[#16120D] text-[#F5EFE6] p-10 text-center max-w-3xl mx-auto border-2 border-[#16120D]">
          <h2 className="font-serif font-black text-3xl mb-4 uppercase">
            {lang === 'hi' ? 'घोषणापत्र का समर्थन करें' : 'SUPPORT THE MANIFESTO'}
          </h2>
          <Link to="/join" className="inline-block bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 border-2 border-[#D9572B] hover:bg-[#EADBCE] hover:text-[#16120D] transition-all">
            {t('navJoinSwarm')}
          </Link>
        </div>

      </div>
    </div>
  );
};
