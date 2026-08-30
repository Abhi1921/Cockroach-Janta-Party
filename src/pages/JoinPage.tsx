import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { CheckCircle2, Send } from 'lucide-react';

export const JoinPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', role: 'REPORT' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 'REPORT', labelEn: 'FIELD REPORTING', labelHi: 'फील्ड रिपोर्टिंग', descEn: 'Geotag subterranean drainage depths & potholes', descHi: 'भूमिगत सीवर सफाई की गहराई मापना' },
    { id: 'WRITE', labelEn: 'RESEARCH & WRITING', labelHi: 'अनुसंधान व लेखन', descEn: 'Draft field dispatches & policy summaries', descHi: 'फील्ड रिपोर्ट व नीति विश्लेषण तैयार करना' },
    { id: 'WATER', labelEn: 'WATER QUALITY TESTING', labelHi: 'जल गुणवत्ता परीक्षण', descEn: 'Organize rapid TDS & chlorine test kiosks', descHi: 'टीडीएस व क्लोरीन पानी परीक्षण कियोस्क चलाना' },
    { id: 'RTI', labelEn: 'RTI ADVOCACY', labelHi: 'आरटीआई वकालत', descEn: 'File Section 4 RTI public tender disclosures', descHi: 'धारा 4 आरटीआई आवेदन तैयार करना' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 600);
    }
  };

  return (
    <div className="join-page py-16 bg-[#EADBCE] text-[#16120D] font-sans">
      <SEOHead
        title={lang === 'hi' ? 'आंदोलन से जुड़ें' : 'Join the Movement'}
        description="Register as a verified resident volunteer or RTI advocate with Cockroach Janta Party. Take an active role in local ward governance."
        canonicalUrl="http://localhost:3000/join"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'स्वयंसेवक पंजीकरण' : 'VOLUNTEER REGISTRATION'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4">
            {lang === 'hi' ? 'केवल देखें नहीं। आंदोलन से जुड़ें।' : 'DON\'T JUST WATCH. JOIN US.'}
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? "हर वास्तविक बदलाव उन लोगों से शुरू होता है जो केवल देखने के बजाय भाग लेने का फैसला करते हैं।"
              : "Every real change starts with individuals who decide that watching isn't enough."}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl">
          {submitted ? (
            <div className="bg-[#EADBCE] border-2 border-[#16120D] text-[#16120D] p-10 text-center">
              <CheckCircle2 size={48} className="mx-auto mb-4 text-[#D9572B]" />
              <h2 className="font-serif font-black text-3xl mb-2 uppercase">
                {lang === 'hi' ? 'आंदोलन में आपका स्वागत है!' : 'WELCOME TO THE SWARM!'}
              </h2>
              <p className="text-xs text-[#3A332B] font-medium">
                {lang === 'hi'
                  ? "आपका पंजीकरण सफलतापूर्वक जमा हो गया है। एक स्थानीय वार्ड कैप्टन जल्द ही आपसे संपर्क करेगा।"
                  : "Your volunteer registration has been confirmed. A local ward audit captain will contact you shortly."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                    {lang === 'hi' ? 'पूरा नाम *' : 'FULL NAME *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'hi' ? "आपका नाम" : "Your full name"}
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                    {lang === 'hi' ? 'ईमेल पता *' : 'EMAIL ADDRESS *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                    {lang === 'hi' ? 'फोन नंबर' : 'PHONE NUMBER'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                    {lang === 'hi' ? 'शहर / वार्ड' : 'CITY / WARD'}
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Delhi Ward 14"
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-2">
                  {lang === 'hi' ? 'आप किस क्षेत्र में मदद करना चाहते हैं?' : 'AREA OF VOLUNTEER INTEREST:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: r.id })}
                      className={`p-3 text-left border-2 transition-all ${
                        formData.role === r.id
                          ? 'bg-[#16120D] text-[#F5EFE6] border-[#16120D]'
                          : 'bg-[#EADBCE] text-[#16120D] border-[#16120D] hover:bg-[#E2D2BF]'
                      }`}
                    >
                      <span className="font-extrabold text-xs block">
                        {lang === 'hi' ? r.labelHi : r.labelEn}
                      </span>
                      <span className="text-[10px] block mt-0.5 opacity-80">
                        {lang === 'hi' ? r.descHi : r.descEn}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider py-4 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>{lang === 'hi' ? 'जमा हो रहा है...' : 'SUBMITTING...'}</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t('navJoinSwarm')}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
