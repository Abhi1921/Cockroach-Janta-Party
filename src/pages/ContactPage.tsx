import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { Send, CheckCircle2, ShieldAlert, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', category: 'GENERAL', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page py-16 bg-[#EADBCE] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="Contact CJP | Official Information & Website Queries"
        description="Reach out to Cockroach Janta Party secretariat for website queries, press inquiries, legal advocacy assistance, or volunteer coordination."
        canonicalUrl="http://localhost:3000/contact"
      />

      <div className="max-w-[1440px] mx-auto px-4">
        
        {/* Header Hero */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#16120D] text-[#F5EFE6] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest mb-4">
            {lang === 'hi' ? 'नागरिक संवाद' : 'CIVIC DIALOGUE & INTAKE'}
          </span>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-[#16120D] mb-4 uppercase">
            CONTACT THE SECRETARIAT
          </h1>
          <p className="text-[#3A332B] text-base leading-relaxed font-medium">
            Separate desks for General Website Queries, Official Movement Communications, and Press Desk.
          </p>
        </div>

        {/* DEDICATED CONTACT & SECRETARIAT POSTER CARD */}
        <div className="my-10 max-w-xl mx-auto bg-[#16120D] border-4 border-[#16120D] p-4 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#EADBCE] border-b border-white/20 pb-2 mb-3 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-[#D9572B]">
              <Mail size={14} /> OFFICIAL SECRETARIAT POSTER
            </span>
            <span>POSTER #05 · OPEN INTAKE DESK</span>
          </div>

          <div className="bg-[#16120D] border border-white/10 p-2 overflow-hidden flex items-center justify-center">
            <img
              src="/cjp_banner.png"
              alt="CJP Open Secretariat Official Poster"
              className="w-full h-auto object-contain mx-auto rounded"
            />
          </div>

          <div className="text-center pt-3">
            <span className="bg-[#D9572B] text-white text-[9px] font-extrabold px-2.5 py-0.5 uppercase tracking-widest inline-block mb-1">
              OPEN CIVIC SECRETARIAT &amp; INTAKE DESK
            </span>
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              TALK TO THE SWARM · SPEAK UP FOR YOUR WARD
            </h3>
            <p className="text-[11px] text-[#EADBCE] font-bold uppercase tracking-wider mt-1">
              "INFO@COCKROACHJANTAPARTY.ORG.IN · OPEN TO ALL CITIZENS"
            </p>
          </div>
        </div>

        {/* 3 Contact Desks Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">DESK 01</span>
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">GENERAL WEBSITE</h3>
            <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4">For technical feedback, website bug reporting, or general user questions.</p>
            <span className="text-xs font-bold text-[#16120D] block">webmaster@cockroachjantaparty.org.in</span>
          </div>

          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">DESK 02</span>
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">OFFICIAL MOVEMENT</h3>
            <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4">For ward audit reports, Section 4 RTI filings, and community observer inquiries.</p>
            <span className="text-xs font-bold text-[#16120D] block">info@cockroachjantaparty.org.in</span>
          </div>

          <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 shadow-md">
            <span className="text-[10px] font-extrabold text-[#D9572B] uppercase tracking-widest block mb-2">DESK 03</span>
            <h3 className="font-serif font-bold text-lg text-[#16120D] uppercase mb-2">PRESS &amp; MEDIA</h3>
            <p className="text-xs text-[#3A332B] font-medium leading-relaxed mb-4">For journalist inquiries, interview requests, and publication statements.</p>
            <span className="text-xs font-bold text-[#16120D] block">press@cockroachjantaparty.org.in</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto bg-[#F5EFE6] border-2 border-[#16120D] p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif font-black text-3xl text-[#16120D] uppercase">SEND A DIRECT MESSAGE</h2>
            <p className="text-xs text-[#3A332B] font-medium mt-1">Select your target inquiry desk below.</p>
          </div>

          {submitted ? (
            <div className="bg-[#EADBCE] border-2 border-[#16120D] p-8 text-center text-[#16120D]">
              <CheckCircle2 size={40} className="mx-auto mb-3 text-[#D9572B]" />
              <h3 className="font-serif font-black text-2xl mb-2 uppercase">MESSAGE TRANSMITTED!</h3>
              <p className="text-xs font-medium">Thank you for reaching out. A secretariat volunteer will respond to your query shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">INQUIRY DESK</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#EADBCE] border border-[#16120D] px-3 py-2 text-xs text-[#16120D] font-bold outline-none"
                >
                  <option value="GENERAL">General Website Inquiry</option>
                  <option value="OFFICIAL">Official Movement / Ward Audit</option>
                  <option value="PRESS">Press &amp; Media Interview Request</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2 text-xs text-[#16120D] font-bold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-[#16120D] uppercase tracking-wider block mb-1">MESSAGE *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-[#EADBCE] border border-[#16120D] px-3.5 py-2 text-xs text-[#16120D] outline-none resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all flex items-center justify-center gap-2"
              >
                <Send size={14} /> TRANSMIT MESSAGE TO SECRETARIAT →
              </button>
            </form>
          )}
        </div>

        {/* Disclaimer */}
        <div className="bg-[#F5EFE6] border-2 border-[#16120D] p-6 max-w-2xl mx-auto shadow-md flex items-start gap-3">
          <ShieldAlert size={20} className="text-[#D9572B] flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#3A332B] font-medium">
            Contact addresses provided above represent official CJP communications. Fake or unauthorized email domain inquiries will be ignored.
          </p>
        </div>

      </div>
    </div>
  );
};
