import React, { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../components/SEOHead';
import {
  Download,
  Printer,
  UserPlus,
  QrCode,
  Copy,
  Check,
  Sparkles,
  Award,
  Upload,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface MemberData {
  id: string;
  name: string;
  dob: string;
  city: string;
  state: string;
  email: string;
  mobile: string;
  occupation: string;
  reason: string;
  photoUrl: string | null;
  joinDate: string;
}

export const JoinPage: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  
  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    city: '',
    state: '',
    email: '',
    mobile: '',
    occupation: '',
    reason: '',
    agreedParody: false
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [memberData, setMemberData] = useState<MemberData | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Load existing member record from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cjp_membership_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        setMemberData(parsed);
        setSubmitted(true);
      }
    } catch (e) {
      console.error("LocalStorage error", e);
    }
  }, []);

  // Photo Upload Handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photo: 'File size should be under 5MB' }));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setErrors((prev) => ({ ...prev, photo: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Form Validation
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.dob.trim()) newErrors.dob = 'Date of Birth / Age is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (formData.mobile.trim().length < 8) {
      newErrors.mobile = 'Enter a valid mobile number';
    }

    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
    if (!formData.reason.trim()) newErrors.reason = 'Please share why you wish to join';
    if (!formData.agreedParody) newErrors.agreedParody = 'You must acknowledge the parody notice';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const generatedId = `CJP-2026-${randomDigits}`;
    
    const today = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const formattedDate = `${String(today.getDate()).padStart(2, '0')} ${months[today.getMonth()]} ${today.getFullYear()}`;

    const newMember: MemberData = {
      id: generatedId,
      name: formData.name.trim(),
      dob: formData.dob.trim(),
      city: formData.city.trim(),
      state: formData.state.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      occupation: formData.occupation.trim(),
      reason: formData.reason.trim(),
      photoUrl: photoPreview,
      joinDate: formattedDate
    };

    setTimeout(() => {
      try {
        localStorage.setItem('cjp_membership_data', JSON.stringify(newMember));
      } catch (err) {
        console.error("LocalStorage write error", err);
      }
      setMemberData(newMember);
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  // Scroll to Form CTA action
  const scrollToForm = () => {
    if (submitted) {
      handleJoinAnother();
    } else {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Print Card Handler
  const handlePrintCard = () => {
    window.print();
  };

  // Download Card as PNG Image via Canvas
  const handleDownloadCard = () => {
    if (!memberData) return;

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 760;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background gradient & border
    ctx.fillStyle = '#16120D';
    ctx.fillRect(0, 0, 1200, 760);

    // Inner Parchment Box
    ctx.fillStyle = '#F5EFE6';
    ctx.fillRect(30, 30, 1140, 700);

    // Gold Accent Top Bar
    ctx.fillStyle = '#D9572B';
    ctx.fillRect(30, 30, 1140, 24);

    // Header Background
    ctx.fillStyle = '#16120D';
    ctx.fillRect(30, 54, 1140, 130);

    // Header Text
    ctx.fillStyle = '#F5EFE6';
    ctx.font = '900 52px "Bebas Neue", sans-serif';
    ctx.fillText('COCKROACH JANTA PARTY', 180, 120);

    ctx.fillStyle = '#EAB308';
    ctx.font = 'bold 22px "Inter", sans-serif';
    ctx.fillText('OFFICIAL MEMBERSHIP CARD · EST. 2026', 180, 155);

    // Mascot Emoji / Circle
    ctx.beginPath();
    ctx.arc(100, 118, 48, 0, Math.PI * 2);
    ctx.fillStyle = '#EADBCE';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#EAB308';
    ctx.stroke();

    ctx.font = '54px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪳', 100, 138);

    // Photo Box Background
    ctx.textAlign = 'left';
    ctx.fillStyle = '#16120D';
    ctx.fillRect(70, 220, 220, 260);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#EAB308';
    ctx.strokeRect(70, 220, 220, 260);

    const renderTextContent = () => {
      // Member Info Details
      ctx.fillStyle = '#16120D';
      ctx.font = 'bold 18px "Inter", sans-serif';
      ctx.fillText('MEMBER NAME:', 330, 245);

      ctx.fillStyle = '#D9572B';
      ctx.font = '900 38px "Bebas Neue", sans-serif';
      ctx.fillText(memberData.name.toUpperCase(), 330, 285);

      ctx.fillStyle = '#16120D';
      ctx.font = 'bold 16px "Inter", sans-serif';
      ctx.fillText(`MEMBERSHIP ID: ${memberData.id}`, 330, 330);
      ctx.fillText(`CITY / STATE: ${memberData.city.toUpperCase()}, ${memberData.state.toUpperCase()}`, 330, 370);
      ctx.fillText(`OCCUPATION: ${memberData.occupation.toUpperCase()}`, 330, 410);
      ctx.fillText(`JOINING DATE: ${memberData.joinDate}`, 330, 450);

      // Slogan Box
      ctx.fillStyle = '#16120D';
      ctx.fillRect(70, 510, 1060, 80);

      ctx.fillStyle = '#EAB308';
      ctx.font = '900 40px "Bebas Neue", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('HAR GHAR KI SARKAR! 🪳', 600, 562);

      // Signature & Disclaimer
      ctx.fillStyle = '#16120D';
      ctx.font = 'italic 16px serif';
      ctx.textAlign = 'left';
      ctx.fillText('National Swarm Convener Signature', 70, 630);

      ctx.fillStyle = '#3A332B';
      ctx.font = 'bold 14px "Inter", sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('FICTIONAL PARODY MEMBERSHIP CARD · CJP OFFICIAL', 1130, 630);

      // Trigger PNG download
      const imageURI = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `CJP_Membership_Card_${memberData.id}.png`;
      link.href = imageURI;
      link.click();
    };

    if (memberData.photoUrl) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, 70, 220, 220, 260);
        renderTextContent();
      };
      img.onerror = () => {
        ctx.fillStyle = '#EAB308';
        ctx.font = '80px serif';
        ctx.textAlign = 'center';
        ctx.fillText('🪳', 180, 370);
        renderTextContent();
      };
      img.src = memberData.photoUrl;
    } else {
      ctx.fillStyle = '#EAB308';
      ctx.font = '80px serif';
      ctx.textAlign = 'center';
      ctx.fillText('🪳', 180, 370);
      renderTextContent();
    }
  };

  // Copy ID Handler
  const handleCopyId = () => {
    if (memberData?.id) {
      navigator.clipboard.writeText(memberData.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  // Join Another Member (Reset Form)
  const handleJoinAnother = () => {
    try {
      localStorage.removeItem('cjp_membership_data');
    } catch (e) {
      console.error(e);
    }
    setMemberData(null);
    setSubmitted(false);
    setPhotoPreview(null);
    setFormData({
      name: '',
      dob: '',
      city: '',
      state: '',
      email: '',
      mobile: '',
      occupation: '',
      reason: '',
      agreedParody: false
    });
    setErrors({});
  };

  // Party Highlights Data
  const partyHighlights = [
    {
      icon: '🪳',
      title: 'Survival First',
      tagline: 'Mushkil waqt mein bhi tikke rehna.',
      desc: 'Tested through millennia of pest sprays, rolled newspapers, and harsh winters. CJP members never back down.'
    },
    {
      icon: '🍕',
      title: 'Food For All',
      tagline: 'Kitchen ho ya midnight snack, sabke liye equal opportunity.',
      desc: 'No crumb left behind! We guarantee equal access to every kitchen counter and midnight snack raid across the nation.'
    },
    {
      icon: '🏠',
      title: 'Har Ghar Representation',
      tagline: 'Har corner ki awaaz Assembly tak.',
      desc: 'From basement pipes to penthouse ceiling fans, every corner has a voice in the CJP Swarm Assembly.'
    },
    {
      icon: '💪',
      title: 'Never Give Up',
      tagline: 'Jitni baar bhagao, utni baar wapas.',
      desc: 'Switch on the light, and we multiply! Resilient, unstoppable, and always returning stronger than before.'
    }
  ];

  return (
    <div className="join-page bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white pb-20">
      <SEOHead
        title="Join Cockroach Janta Party (CJP) | Har Ghar Ki Sarkar 🪳"
        description="Become an official member of Cockroach Janta Party (CJP). Generate your custom digital CJP Membership Card instantly!"
        canonicalUrl="https://cockroachjantapartywale.com/join"
      />

      {/* HERO SECTION */}
      <section className="join-hero-section relative bg-[#16120D] text-[#F5EFE6] pt-14 pb-16 px-4 border-b-4 border-[#D9572B]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 bg-[#D9572B] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest border border-white/20 shadow-md">
            <Sparkles size={14} className="animate-pulse" />
            <span>OFFICIAL CAMPAIGN JOIN PORTAL</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase leading-none text-[#F5EFE6]">
            COCKROACH JANTA PARTY
          </h1>

          <div className="inline-block bg-[#EAB308] text-[#16120D] font-display text-3xl sm:text-5xl px-6 py-1 tracking-wider uppercase shadow-[4px_4px_0px_0px_#D9572B] transform -rotate-1">
            “HAR GHAR KI SARKAR!” 🪳
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#EADBCE] font-semibold leading-relaxed pt-2">
            Jahan hausla ho, wahan cockroach ho. CJP join kijiye aur naye yug ki shuruaat kijiye.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="btn-brutal h-12 px-8 text-sm sm:text-base bg-[#D9572B] text-white hover:bg-[#EAB308] hover:text-[#16120D] cursor-pointer shadow-[4px_4px_0px_0px_#F5EFE6]"
            >
              <UserPlus size={18} />
              <span>JOIN CJP NOW 🪳</span>
            </button>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pt-12 space-y-16">

        {/* PARTY HIGHLIGHTS SECTION */}
        <section className="join-highlights-section">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest block mb-1">
              THE FOUR PILLARS OF CJP
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#16120D] uppercase leading-none">
              WHY JOIN THE COCKROACH SWARM?
            </h2>
            <p className="text-xs sm:text-sm text-[#3A332B] font-extrabold mt-2">
              Satirical civic commentary backed by unmatched survival resilience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5EFE6] border-3 border-[#16120D] p-6 shadow-[4px_4px_0px_0px_#16120D] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#D9572B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#16120D] text-3xl flex items-center justify-center mb-4 border-2 border-[#16120D] shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-2xl text-[#16120D] uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-black text-[#D9572B] italic mb-3">
                    "{item.tagline}"
                  </p>
                  <p className="text-xs text-[#3A332B] font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#16120D]/20 text-[10px] font-black text-[#16120D] uppercase tracking-widest flex items-center justify-between">
                  <span>CJP PILLAR #{idx + 1}</span>
                  <Award size={14} className="text-[#D9572B]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DYNAMIC CONTENT: MEMBERSHIP CARD DISPLAY OR FORM */}
        <div ref={formRef} className="scroll-mt-24">
          
          {submitted && memberData ? (
            /* GENERATED MEMBERSHIP CARD & ACTIONS DISPLAY */
            <div className="max-w-3xl mx-auto space-y-8 animate-dropdown">
              
              {/* Success Banner */}
              <div className="bg-[#16120D] border-4 border-[#EAB308] p-5 text-center text-[#F5EFE6] shadow-[6px_6px_0px_0px_#D9572B]">
                <div className="inline-flex items-center gap-2 text-[#EAB308] font-black text-sm uppercase tracking-wider mb-1">
                  <CheckCircle2 size={18} /> SUCCESSFUL REGISTRATION
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-white uppercase">
                  Congratulations! You are officially a CJP member! 🪳
                </h2>
                <p className="text-xs text-[#EADBCE] font-bold mt-1">
                  Your official digital CJP Membership Card has been generated below.
                </p>
              </div>

              {/* THE OFFICIAL CJP MEMBERSHIP CARD (ISOLATED FOR PRINTING) */}
              <div
                id="cjp-membership-card"
                className="bg-[#F5EFE6] border-4 border-[#16120D] shadow-[8px_8px_0px_0px_#16120D] overflow-hidden relative"
              >
                {/* Gold Accent Top Bar */}
                <div className="h-3 bg-[#D9572B] w-full" />

                {/* Card Header */}
                <div className="bg-[#16120D] text-[#F5EFE6] p-6 border-b-4 border-[#EAB308] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-full bg-[#EADBCE] text-[#16120D] border-2 border-[#EAB308] flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-md">
                      🪳
                    </div>
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl text-[#F5EFE6] leading-none uppercase tracking-wide">
                        COCKROACH JANTA PARTY
                      </h3>
                      <span className="text-xs font-black text-[#EAB308] uppercase tracking-widest block mt-0.5">
                        OFFICIAL MEMBERSHIP CARD · EST. 2026
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#EAB308] text-[#16120D] px-3.5 py-1 text-xs font-black uppercase tracking-wider border-2 border-[#16120D] shadow-sm">
                    VERIFIED MEMBER
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  <div className="grid sm:grid-cols-3 gap-6 items-center bg-[#EADBCE] border-2 border-[#16120D] p-5">
                    
                    {/* Photo / Avatar Box */}
                    <div className="text-center sm:border-r-2 border-[#16120D]/30 pr-0 sm:pr-4 flex flex-col items-center justify-center">
                      <div className="w-28 h-32 bg-[#16120D] border-2 border-[#EAB308] overflow-hidden flex items-center justify-center shadow-md relative">
                        {memberData.photoUrl ? (
                          <img
                            src={memberData.photoUrl}
                            alt={memberData.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-2">
                            <span className="text-5xl block mb-1">🪳</span>
                            <span className="text-[9px] text-[#EAB308] font-black uppercase tracking-tighter">OFFICIAL AVATAR</span>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-black text-[#D9572B] uppercase tracking-widest mt-2 block">
                        CJP CARD HOLDER
                      </span>
                    </div>

                    {/* Member Details */}
                    <div className="sm:col-span-2 space-y-2.5 text-xs font-bold text-[#16120D]">
                      <div>
                        <span className="text-[10px] font-black text-[#3A332B] uppercase block">FULL NAME:</span>
                        <span className="font-display text-3xl text-[#16120D] uppercase leading-none block">
                          {memberData.name}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#16120D]/20">
                        <div>
                          <span className="text-[10px] font-black text-[#3A332B] uppercase block">MEMBERSHIP ID:</span>
                          <span className="font-mono text-sm font-black text-[#D9572B] block">
                            {memberData.id}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-[#3A332B] uppercase block">AGE / DOB:</span>
                          <span className="font-extrabold uppercase">{memberData.dob}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#16120D]/20">
                        <div>
                          <span className="text-[10px] font-black text-[#3A332B] uppercase block">CITY &amp; STATE:</span>
                          <span className="font-extrabold uppercase">{memberData.city}, {memberData.state}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-[#3A332B] uppercase block">OCCUPATION:</span>
                          <span className="font-extrabold uppercase">{memberData.occupation}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#16120D]/20">
                        <span className="text-[10px] font-black text-[#3A332B] uppercase block">JOINING DATE:</span>
                        <span className="font-extrabold">{memberData.joinDate}</span>
                      </div>
                    </div>

                  </div>

                  {/* Slogan Banner */}
                  <div className="bg-[#16120D] text-[#EAB308] p-3 text-center border-2 border-[#16120D] shadow-sm">
                    <span className="font-display text-2xl tracking-wider uppercase block">
                      HAR GHAR KI SARKAR! 🪳
                    </span>
                  </div>

                  {/* Footer & QR Graphic */}
                  <div className="flex flex-wrap justify-between items-end gap-4 pt-2 border-t-2 border-[#16120D]/30 text-[10px] font-bold text-[#3A332B]">
                    <div className="flex items-center gap-2">
                      <QrCode size={38} className="text-[#16120D] flex-shrink-0" />
                      <div>
                        <span className="block text-[#16120D] font-black uppercase">AUTHENTIC CJP DIGITAL QR CODE</span>
                        <span className="text-[9px] text-[#D9572B] font-extrabold">VERIFIED BY CENTRAL SWARM COUNCIL</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-serif italic text-xs font-black text-[#16120D] border-b border-[#16120D] pb-0.5 mb-0.5">
                        National Swarm Convener
                      </div>
                      <span className="text-[9px] text-[#3A332B] uppercase font-semibold">
                        FICTIONAL PARODY MEMBERSHIP CARD
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* CARD ACTIONS: PRINT / DOWNLOAD / JOIN ANOTHER */}
              <div className="no-print bg-[#F5EFE6] border-4 border-[#16120D] p-6 shadow-[6px_6px_0px_0px_#16120D] space-y-4">
                <h4 className="font-display text-2xl text-[#16120D] uppercase text-center border-b-2 border-[#16120D] pb-2">
                  CARD ACTION OPTIONS
                </h4>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {/* PRINT BUTTON */}
                  <button
                    onClick={handlePrintCard}
                    className="btn-brutal h-11 px-5 text-xs sm:text-sm bg-[#16120D] text-[#F5EFE6] hover:bg-[#D9572B] hover:text-white cursor-pointer"
                  >
                    <Printer size={16} />
                    <span>PRINT CARD</span>
                  </button>

                  {/* DOWNLOAD BUTTON */}
                  <button
                    onClick={handleDownloadCard}
                    className="btn-brutal h-11 px-5 text-xs sm:text-sm bg-[#D9572B] text-white hover:bg-[#EAB308] hover:text-[#16120D] cursor-pointer"
                  >
                    <Download size={16} />
                    <span>DOWNLOAD CARD (.PNG)</span>
                  </button>

                  {/* COPY ID */}
                  <button
                    onClick={handleCopyId}
                    className="btn-brutal h-11 px-4 text-xs bg-[#EADBCE] text-[#16120D] hover:bg-[#16120D] hover:text-white cursor-pointer"
                  >
                    {copiedId ? <Check size={16} className="text-[#D9572B]" /> : <Copy size={16} />}
                    <span>{copiedId ? 'COPIED!' : 'COPY ID'}</span>
                  </button>

                  {/* JOIN ANOTHER MEMBER */}
                  <button
                    onClick={handleJoinAnother}
                    className="btn-brutal h-11 px-5 text-xs sm:text-sm bg-[#EAB308] text-[#16120D] hover:bg-[#16120D] hover:text-white cursor-pointer"
                  >
                    <UserPlus size={16} />
                    <span>JOIN ANOTHER MEMBER</span>
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* MEMBERSHIP FORM */
            <div className="join-form-section max-w-3xl mx-auto bg-[#F5EFE6] border-4 border-[#16120D] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#16120D]">
              
              <div className="text-center mb-8 border-b-2 border-[#16120D] pb-5">
                <span className="bg-[#D9572B] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest inline-block mb-2">
                  OFFICIAL ONLINE REGISTRATION
                </span>
                <h2 className="font-display text-4xl sm:text-5xl text-[#16120D] uppercase leading-none">
                  Become a Proud CJP Member
                </h2>
                <p className="text-xs sm:text-sm text-[#3A332B] font-extrabold mt-1">
                  Fill out the form below to receive your digital membership card instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Full Name */}
                <div>
                  <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                    FULL NAME <span className="text-[#D9572B]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name (e.g. Ramesh Kumar)..."
                    className={`w-full bg-[#EADBCE] border-2 ${
                      errors.name ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                    } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* DOB & City */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                      DATE OF BIRTH / AGE <span className="text-[#D9572B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      placeholder="e.g. 15 Aug 1998 or 26 Years..."
                      className={`w-full bg-[#EADBCE] border-2 ${
                        errors.dob ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                      } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                    />
                    {errors.dob && (
                      <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.dob}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                      CITY <span className="text-[#D9572B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi, Mumbai, Jaipur..."
                      className={`w-full bg-[#EADBCE] border-2 ${
                        errors.city ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                      } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                    />
                    {errors.city && (
                      <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.city}
                      </p>
                    )}
                  </div>
                </div>

                {/* State & Occupation */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                      STATE <span className="text-[#D9572B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Delhi, Maharashtra, Rajasthan..."
                      className={`w-full bg-[#EADBCE] border-2 ${
                        errors.state ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                      } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                    />
                    {errors.state && (
                      <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                      OCCUPATION <span className="text-[#D9572B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      placeholder="e.g. Student, Software Engineer, Advocate..."
                      className={`w-full bg-[#EADBCE] border-2 ${
                        errors.occupation ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                      } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                    />
                    {errors.occupation && (
                      <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.occupation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Mobile */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                      EMAIL ADDRESS <span className="text-[#D9572B]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com..."
                      className={`w-full bg-[#EADBCE] border-2 ${
                        errors.email ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                      } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                      MOBILE NUMBER <span className="text-[#D9572B]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="+91 9876543210..."
                      className={`w-full bg-[#EADBCE] border-2 ${
                        errors.mobile ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                      } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                    />
                    {errors.mobile && (
                      <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Why join CJP */}
                <div>
                  <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                    WHY DO YOU WANT TO JOIN CJP? <span className="text-[#D9572B]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Tell us why you want to be part of the Cockroach Janta Party..."
                    className={`w-full bg-[#EADBCE] border-2 ${
                      errors.reason ? 'border-red-600 bg-red-50' : 'border-[#16120D]'
                    } px-4 py-3 text-xs sm:text-sm text-[#16120D] font-bold outline-none focus:border-[#D9572B] transition-colors`}
                  />
                  {errors.reason && (
                    <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.reason}
                    </p>
                  )}
                </div>

                {/* Upload Photo (Optional) */}
                <div>
                  <label className="text-xs font-black text-[#16120D] uppercase block mb-1">
                    UPLOAD PHOTO <span className="text-[10px] text-[#3A332B] font-bold">(OPTIONAL)</span>
                  </label>
                  <div className="flex items-center gap-4 bg-[#EADBCE] border-2 border-[#16120D] p-3">
                    {photoPreview ? (
                      <div className="w-16 h-16 bg-[#16120D] border-2 border-[#D9572B] overflow-hidden flex-shrink-0 relative">
                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-[#16120D] text-2xl flex items-center justify-center flex-shrink-0 text-white">
                        🪳
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        id="photo-upload"
                        className="hidden"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="btn-brutal px-3 py-1.5 text-xs bg-[#16120D] text-[#F5EFE6] hover:bg-[#D9572B] cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <Upload size={14} />
                        <span>{photoPreview ? 'CHANGE PHOTO' : 'CHOOSE PHOTO FILE'}</span>
                      </label>
                      <span className="text-[10px] text-[#3A332B] font-bold block mt-1">
                        JPG, PNG or WEBP (Max 5MB). If left empty, official cockroach mascot avatar will be used.
                      </span>
                    </div>
                  </div>
                  {errors.photo && (
                    <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.photo}
                    </p>
                  )}
                </div>

                {/* Parody Agreement Checkbox */}
                <div className="bg-[#EADBCE] border-2 border-[#16120D] p-4 space-y-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.agreedParody}
                      onChange={(e) => setFormData({ ...formData, agreedParody: e.target.checked })}
                      className="mt-0.5 w-4 h-4 accent-[#D9572B] cursor-pointer flex-shrink-0"
                    />
                    <span className="text-xs font-black text-[#16120D] leading-tight">
                      I understand that CJP is a fictional/parody organization created for entertainment &amp; civic satire purposes. <span className="text-[#D9572B]">*</span>
                    </span>
                  </label>
                  {errors.agreedParody && (
                    <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1 pl-7">
                      <AlertCircle size={12} /> {errors.agreedParody}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-brutal py-4 text-sm sm:text-base bg-[#D9572B] text-white hover:bg-[#16120D] hover:text-[#F5EFE6] shadow-[4px_4px_0px_0px_#16120D] cursor-pointer"
                >
                  {loading ? (
                    <span className="animate-pulse">GENERATING CJP MEMBERSHIP CARD...</span>
                  ) : (
                    <span>JOIN CJP 🪳</span>
                  )}
                </button>

              </form>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
