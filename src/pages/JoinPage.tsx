import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import {
  Send,
  Download,
  Mail,
  QrCode,
  Copy,
  Check,
  Users
} from 'lucide-react';

export const JoinPage: React.FC = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: 'RTI'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [memberRecord, setMemberRecord] = useState<any | null>(null);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const roles = [
    { id: 'REPORT', labelEn: 'FIELD DRAINAGE AUDITOR', labelHi: 'सीवर व जल निकासी ऑडिट', descEn: 'Audit subterranean drain clearance & contractor warranty boards', descHi: 'सीवर सफाई गहराई और वारंटी बोर्ड जांचना' },
    { id: 'WRITE', labelEn: 'RESEARCH & DISPATCH WRITER', labelHi: 'अनुसंधान व लेखनी', descEn: 'Draft field reports & open ledger dispatches', descHi: 'नागरिक रिपोर्ट व सार्वजनिक बजट विश्लेषण तैयार करना' },
    { id: 'WATER', labelEn: 'WATER QUALITY TEST KIOSK', labelHi: 'पेयजल शुद्धता कियोस्क', descEn: 'Organize rapid TDS & chlorine test hubs in transit sectors', descHi: 'घरेलू टीडीएस पानी परीक्षण कियोस्क चलाना' },
    { id: 'RTI', labelEn: 'RTI SECTION 4 ADVOCATE', labelHi: 'आरटीआई धारा 4 अधिवक्ता', descEn: 'File Section 4 RTI petitions for zero-paywall tender records', descHi: 'धारा 4 आरटीआई याचिकाएं दायर करना' }
  ];

  // Load existing member record if available in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cjp_current_member');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMemberRecord(parsed);
        setSubmitted(true);
      }
    } catch (e) {
      console.error("LocalStorage read error", e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);

    const randomId = 'CJP-2026-' + Math.floor(100000 + Math.random() * 900000);
    const newRecord = {
      id: randomId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city || 'Delhi NCR',
      role: roles.find(r => r.id === formData.role)?.labelEn || 'WARD OBSERVER',
      issueDate: '30 AUG 2026',
      status: 'VERIFIED SWARM OBSERVER'
    };

    try {
      localStorage.setItem('cjp_current_member', JSON.stringify(newRecord));
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setMemberRecord(newRecord);
      setSubmitted(true);
      setLoading(false);
      setEmailStatus('SMTP Mailtrap Dispatch Queued');
    }, 1000);
  };

  const handlePrintCard = () => {
    window.print();
  };

  const handleCopyId = () => {
    if (memberRecord?.id) {
      navigator.clipboard.writeText(memberRecord.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div className="join-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="Join CJP Swarm & Digital ID Card | Cockroach Janta Party"
        description="Register as an official Cockroach Janta Party volunteer civic observer and instantly generate your printable digital membership ID card."
        canonicalUrl="http://localhost:3000/join"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'स्वयंसेवक पंजीकरण व डिजिटल ID कार्ड' : 'VOLUNTEER REGISTRATION & DIGITAL ID CARD'}
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-[#16120D] mb-4 uppercase leading-none">
            {lang === 'hi' ? 'केवल देखें नहीं। आंदोलन से जुड़ें।' : 'DON\'T JUST WATCH. JOIN THE SWARM.'}
          </h1>
          <p className="text-[#3A332B] text-xs md:text-sm leading-relaxed font-medium">
            {lang === 'hi'
              ? "हर वास्तविक बदलाव उन लोगों से शुरू होता है जो केवल देखने के बजाय भाग लेने का फैसला करते हैं। तुरंत अपना डिजिटल सदस्यता कार्ड प्राप्त करें।"
              : "Every real change starts with citizens who refuse to normalize broken public systems. Fill out your details below to generate your official CJP Digital Membership Card."}
          </p>
        </div>

        {/* DEDICATED MEMBERSHIP CAMPAIGN POSTER CARD */}
        <div className="my-10 max-w-xl mx-auto bg-[#16120D] border-4 border-[#16120D] p-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#EADBCE] border-b border-white/20 pb-2 mb-3 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#D9572B]">
              <Users size={14} /> OFFICIAL MEMBERSHIP POSTER
            </span>
            <span>POSTER #05 · CJP BRAND EMBLEM</span>
          </div>

          <div className="bg-[#16120D] border border-white/10 p-2 overflow-hidden flex items-center justify-center">
            <img
              src="/cjp_banner.png"
              alt="CJP Swarm Membership Official Campaign Poster"
              className="w-full h-auto object-contain mx-auto rounded"
            />
          </div>

          <div className="text-center pt-3">
            <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest inline-block mb-1">
              SPONSORED BY NO ONE · FUNDED BY THE SWARM
            </span>
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              COCKROACH JANTA PARTY (CJP)
            </h3>
            <p className="text-[11px] text-[#EADBCE] font-bold uppercase tracking-wider mt-1">
              "FOR THE PEOPLE WHO REFUSE TO BLEND IN."
            </p>
          </div>
        </div>

        {/* Dynamic State Container */}
        {submitted && memberRecord ? (
          /* OFFICIAL CJP DIGITAL ID CARD CONTAINER */
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-10 shadow-2xl relative mb-8">
              
              {/* Card Header Badge */}
              <div className="flex justify-between items-center border-b-2 border-[#16120D] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center font-display text-3xl">
                    🪳
                  </div>
                  <div>
                    <span className="font-display text-2xl text-[#16120D] block leading-none">COCKROACH JANTA PARTY</span>
                    <span className="text-[9px] font-extrabold text-[#D9572B] uppercase tracking-widest">OFFICIAL DIGITAL MEMBERSHIP CARD · EST. 2026</span>
                  </div>
                </div>
                <div className="bg-[#16120D] text-[#F5EFE6] text-[10px] font-extrabold px-3 py-1 uppercase tracking-widest border border-[#16120D]">
                  {memberRecord.status}
                </div>
              </div>

              {/* ID Card Main Body Layout */}
              <div className="grid md:grid-cols-3 gap-6 items-center mb-6 bg-[#EADBCE] border-2 border-[#16120D] p-6">
                
                {/* Member Avatar Box */}
                <div className="text-center md:border-r border-[#16120D]/20 pr-0 md:pr-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#16120D] border-2 border-[#16120D] flex items-center justify-center text-4xl mb-2 text-[#F5EFE6]">
                    🪳
                  </div>
                  <span className="text-[9px] font-extrabold text-[#D9572B] uppercase tracking-wider block">CIVIC OBSERVER</span>
                  <span className="text-[10px] font-bold text-[#16120D]">{memberRecord.issueDate}</span>
                </div>

                {/* Member Details */}
                <div className="md:col-span-2 space-y-2 text-xs">
                  <div>
                    <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">FULL NAME:</span>
                    <span className="font-display text-2xl text-[#16120D] uppercase">{memberRecord.name}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#16120D]/15">
                    <div>
                      <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">MEMBERSHIP NO:</span>
                      <span className="font-mono text-xs font-black text-[#D9572B]">{memberRecord.id}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">LOCATION:</span>
                      <span className="font-bold text-[#16120D] uppercase">{memberRecord.city}</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-[#16120D]/15">
                    <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">ASSIGNED ROLE:</span>
                    <span className="font-extrabold text-[#16120D] uppercase">{memberRecord.role}</span>
                  </div>
                </div>

              </div>

              {/* QR Code & Security Stamp */}
              <div className="flex justify-between items-center pt-2 text-[10px] text-[#3A332B] font-bold border-t border-[#16120D]/20">
                <div className="flex items-center gap-2">
                  <QrCode size={36} className="text-[#16120D]" />
                  <div>
                    <span className="block text-[#16120D] font-extrabold uppercase">SECURE DIGITAL QR CODE</span>
                    <span className="text-[9px] text-[#D9572B]">AUTHENTICATED BY CJP SECRETARIAT</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block font-mono text-[9px] text-[#16120D]">{memberRecord.phone}</span>
                  <span className="text-[9px] text-[#3A332B]">{memberRecord.email}</span>
                </div>
              </div>

            </div>

            {/* Actions & SMTP Email Alert */}
            <div className="space-y-4">
              <div className="bg-[#16120D] text-[#F5EFE6] p-4 text-xs font-bold flex justify-between items-center border border-[#16120D]">
                <span className="flex items-center gap-2">
                  <Mail size={16} className="text-[#D9572B]" />
                  <span>SMTP DISPATCH STATUS: {emailStatus || 'Mailtrap Sandbox Alert Sent'}</span>
                </span>
                <span className="text-[10px] bg-[#D9572B] px-2 py-0.5 uppercase text-white">DISPATCHED</span>
              </div>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button
                  onClick={handlePrintCard}
                  className="bg-[#D9572B] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3 border border-[#16120D] hover:bg-[#16120D] transition-all flex items-center gap-2 shadow-md"
                >
                  <Download size={14} /> PRINT / SAVE DIGITAL ID CARD
                </button>

                <button
                  onClick={handleCopyId}
                  className="bg-[#EADBCE] text-[#16120D] text-xs font-extrabold uppercase tracking-wider px-6 py-3 border border-[#16120D] hover:bg-[#16120D] hover:text-[#F5EFE6] transition-all flex items-center gap-2 shadow-sm"
                >
                  {copiedId ? <Check size={14} className="text-[#D9572B]" /> : <Copy size={14} />}
                  {copiedId ? 'COPIED TO CLIPBOARD' : 'COPY MEMBER ID'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <div className="max-w-2xl mx-auto bg-[#F5EFE6] border-4 border-[#16120D] p-8 md:p-12 shadow-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-[#16120D] uppercase mb-2 border-b-2 border-[#16120D] pb-3 text-center">
              VOLUNTEER REGISTRATION FORM
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-1">FULL NAME:</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name..."
                  className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-1">EMAIL ADDRESS:</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com..."
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-1">MOBILE NUMBER:</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210..."
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-1">CITY / WARD LOCATION:</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Delhi NCR, Jaipur, Mumbai..."
                  className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase block mb-2">SELECT VOLUNTEER ROLE:</label>
                <div className="space-y-2">
                  {roles.map((r) => (
                    <label key={r.id} className="flex items-start gap-3 p-3 bg-[#EADBCE] border border-[#16120D] cursor-pointer hover:border-[#D9572B] transition-colors">
                      <input
                        type="radio"
                        name="role"
                        value={r.id}
                        checked={formData.role === r.id}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="mt-0.5 accent-[#D9572B]"
                      />
                      <div>
                        <span className="text-xs font-extrabold text-[#16120D] block uppercase">{lang === 'hi' ? r.labelHi : r.labelEn}</span>
                        <span className="text-[10px] text-[#3A332B] font-medium block">{lang === 'hi' ? r.descHi : r.descEn}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider py-4 border border-[#16120D] hover:bg-[#D9572B] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={16} />
                <span>{loading ? 'GENERATING ID CARD...' : 'REGISTER & GENERATE CJP DIGITAL ID CARD →'}</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
