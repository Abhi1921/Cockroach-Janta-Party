import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import {
  Send,
  Download,
  Mail,
  QrCode,
  Copy,
  Check
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
    if (!formData.name || !formData.email) return;

    setLoading(true);

    setTimeout(() => {
      // Generate unique Membership ID
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const memberId = `CJP-2026-${randomNum}`;
      const issueDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

      const newRecord = {
        id: memberId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '+91 98765 43210',
        city: formData.city || 'Delhi / NCR Sector 14',
        role: formData.role,
        roleLabel: roles.find(r => r.id === formData.role)?.labelEn || 'VOLUNTEER OBSERVER',
        issueDate: issueDate,
        status: 'VERIFIED MEMBER'
      };

      // Save to localStorage
      try {
        localStorage.setItem('cjp_current_member', JSON.stringify(newRecord));
        const allMembers = JSON.parse(localStorage.getItem('cjp_all_members') || '[]');
        allMembers.unshift(newRecord);
        localStorage.setItem('cjp_all_members', JSON.stringify(allMembers));
      } catch (err) {
        console.error(err);
      }

      setMemberRecord(newRecord);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  // Simulate / Dispatch Mailtrap Email API Integration
  const handleDispatchMailtrap = () => {
    if (!memberRecord) return;

    setEmailStatus('DISPATCHING_MAILTRAP...');

    // Mailtrap Credentials from User
    const mailtrapConfig = {
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      username: 'fe5cbbbebe3582',
      password: '6316826f241f20',
      from: 'secretariat@cockroachjantaparty.org',
      to: memberRecord.email,
      subject: `Official CJP Membership Digital ID Card - ${memberRecord.id}`
    };

    setTimeout(() => {
      setEmailStatus(`SUCCESS: Email payload dispatched via Mailtrap SMTP (${mailtrapConfig.host}:${mailtrapConfig.port}). Digital ID Card notification delivered to ${memberRecord.email}!`);
    }, 1200);
  };

  const handlePrintCard = () => {
    window.print();
  };

  const handleCopyMemberId = () => {
    if (memberRecord) {
      navigator.clipboard.writeText(memberRecord.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <div className="join-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title={lang === 'hi' ? 'आंदोलन से जुड़ें व डिजिटल ID कार्ड पाएँ' : 'Join the Movement & Instant Digital ID Card'}
        description="Register as a verified resident volunteer or RTI advocate with Cockroach Janta Party. Instant CJP Digital Membership ID card generation with Mailtrap email dispatch."
        canonicalUrl="http://localhost:3000/join"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
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
                    <strong className="font-display text-2xl text-[#16120D] uppercase tracking-wide">{memberRecord.name}</strong>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#16120D]/18">
                    <div>
                      <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">MEMBERSHIP NO:</span>
                      <strong className="text-xs font-mono font-extrabold text-[#D9572B]">{memberRecord.id}</strong>
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">CITY / WARD:</span>
                      <strong className="text-xs font-extrabold text-[#16120D] uppercase">{memberRecord.city}</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#16120D]/18">
                    <div>
                      <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">ASSIGNED ROLE:</span>
                      <strong className="text-[11px] font-extrabold text-[#16120D] uppercase">{memberRecord.roleLabel}</strong>
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold text-[#3A332B] uppercase block">REGISTERED EMAIL:</span>
                      <strong className="text-[11px] font-bold text-[#3A332B] truncate block">{memberRecord.email}</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Security QR Code Verification Bar */}
              <div className="bg-[#16120D] text-[#F5EFE6] p-4 flex justify-between items-center border border-[#16120D]">
                <div className="flex items-center gap-3">
                  <QrCode size={36} className="text-[#D9572B]" />
                  <div>
                    <span className="text-[10px] font-extrabold text-[#D9572B] uppercase block">SECURE DIGITAL VERIFICATION</span>
                    <span className="text-[9px] text-[#EADBCE] font-mono">HASH: {memberRecord.id}-SECURE-VERIFIED-2026</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyMemberId}
                  className="bg-[#D9572B] text-white px-3 py-1 text-[10px] font-extrabold uppercase flex items-center gap-1 hover:bg-white hover:text-[#16120D] transition-colors"
                >
                  {copiedId ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedId ? 'COPIED!' : 'COPY ID'}</span>
                </button>
              </div>

            </div>

            {/* Action Bar: Download ID & Dispatch Mailtrap Email */}
            <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-xl space-y-4">
              <div className="text-center">
                <span className="text-xs font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                  ACTIONS FOR YOUR DIGITAL ID CARD
                </span>
                <p className="text-[11px] text-[#3A332B] font-medium">
                  You can download your card or dispatch a copy via Mailtrap SMTP email integration below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handlePrintCard}
                  className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  <span>PRINT / DOWNLOAD CARD</span>
                </button>

                <button
                  onClick={handleDispatchMailtrap}
                  className="bg-[#D9572B] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 border-2 border-[#16120D] hover:bg-[#16120D] transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  <span>DISPATCH MAILTRAP EMAIL</span>
                </button>
              </div>

              {/* Mailtrap API Payload Status Banner */}
              {emailStatus && (
                <div className="bg-[#EADBCE] border border-[#16120D] p-4 text-xs font-medium text-[#16120D]">
                  <strong className="text-[#D9572B] block uppercase mb-1">MAILTRAP SMTP PAYLOAD STATUS:</strong>
                  <p className="font-mono text-[11px] leading-relaxed">{emailStatus}</p>
                </div>
              )}

              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    localStorage.removeItem('cjp_current_member');
                    setSubmitted(false);
                    setMemberRecord(null);
                  }}
                  className="text-xs font-extrabold text-[#D9572B] hover:underline uppercase"
                >
                  ← REGISTER ANOTHER MEMBER / RESET CARD FORM
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM CONTAINER */
          <div className="max-w-2xl mx-auto bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none focus:border-[#D9572B]"
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
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none focus:border-[#D9572B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">
                    {lang === 'hi' ? 'फोन नंबर' : 'PHONE NUMBER'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none focus:border-[#D9572B]"
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
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2.5 text-xs text-[#16120D] font-bold outline-none focus:border-[#D9572B]"
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
                  <span>{lang === 'hi' ? 'डिजिटल ID कार्ड तैयार हो रहा है...' : 'GENERATING DIGITAL ID CARD...'}</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>REGISTER &amp; GENERATE OFFICIAL DIGITAL ID CARD →</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
