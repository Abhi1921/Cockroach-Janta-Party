import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, Target, Users, BookOpen, ArrowRight, Eye, Lightbulb, CheckCircle, Award } from 'lucide-react';

export const VisionPage: React.FC = () => {
  const { lang } = useLanguage();

  const conversationDrivers = [
    {
      issue: 'Subterranean Sewer Desilting',
      why: 'Pre-monsoon blockage causes urban waterlogging and structural damage to low-lying ward sectors.',
      position: 'Bi-weekly mechanized desilting with geotagged online depth logs.',
      icon: <Target size={28} />
    },
    {
      issue: 'Contractor 3-Year Paving Warranties',
      why: 'Potholes re-emerge quickly when contractors are not held to physical public liability notice boards.',
      position: 'Mandatory physical notice boards displaying contractor liability.',
      icon: <ShieldCheck size={28} />
    },
    {
      issue: 'Piped Drinking Water Quality',
      why: 'Contaminated supply lines lead to waterborne illnesses in densely populated neighborhoods.',
      position: 'Free rapid volunteer TDS and chlorine testing kiosks.',
      icon: <CheckCircle size={28} />
    },
    {
      issue: 'Direct Sanitation Worker Wages',
      why: 'Contractor middleman wage retention unfairly diminishes monthly earnings for ward workers.',
      position: 'Direct municipal bank wage transfers and safety gear.',
      icon: <Users size={28} />
    },
    {
      issue: 'Open RTI Digital Publishing',
      why: 'Complex administrative hurdles deter ordinary citizens from auditing public tender ledgers.',
      position: 'Zero paywall public access to ward budgets and tender documents.',
      icon: <BookOpen size={28} />
    },
    {
      issue: 'Youth Civic Apprenticeships',
      why: 'Young graduates face entry-level employment barriers despite possessing strong technical skills.',
      position: 'Transparent ward maintenance apprentice positions.',
      icon: <Award size={28} />
    }
  ];

  const values = [
    {
      title: 'Radical Transparency',
      desc: 'No hidden ledgers, no closed-door policies. We believe public funds demand public accountability.',
      icon: <Eye size={32} strokeWidth={1.5} />
    },
    {
      title: 'Satirical Auditing',
      desc: 'Using humor and design as weapons of mass instruction to expose bureaucratic absurdities.',
      icon: <Lightbulb size={32} strokeWidth={1.5} />
    },
    {
      title: 'Grassroots Action',
      desc: 'Change does not happen in parliament; it happens on the streets, in the drains, and at the ward level.',
      icon: <Users size={32} strokeWidth={1.5} />
    },
    {
      title: 'Youth Empowerment',
      desc: 'Harnessing the immense energy of students and young professionals to drive civic innovation.',
      icon: <Target size={32} strokeWidth={1.5} />
    }
  ];

  const impactStats = [
    { value: '148,920+', label: 'Swarm Members' },
    { value: '2,450+', label: 'Graphics Created' },
    { value: '18,400+', label: 'Potholes Logged' },
    { value: '84', label: 'Active Cities' }
  ];

  return (
    <div className="vision-page bg-[#F5EFE6] text-[#16120D] font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="CJP Vision & Mission | Cockroach Janta Party"
        description="Explore the vision, core philosophy, and conversation drivers of Cockroach Janta Party: Building a better future, together."
        canonicalUrl="https://cockroachjantapartywale.com/vision"
      />

      {/* 1. Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#16120D]/80 via-[#16120D]/60 to-[#16120D]/90 z-10" />
        {/* Background Image */}
        <img 
          src="/cjp_dispatch_paying_attention_poster.png" 
          alt="CJP Civic Vision Hero" 
          className="absolute inset-0 w-full h-full object-cover object-top z-0 transform scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          loading="lazy"
        />
        
        <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center mt-16 animate-fade-in-up">
          <span className="text-[#D9572B] font-extrabold uppercase tracking-[0.3em] text-xs sm:text-sm mb-6 bg-[#16120D]/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            {lang === 'hi' ? 'हमारा दृष्टिकोण' : 'OUR VISION'}
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-black uppercase mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
            Building a Better <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EADBCE] to-[#D9572B]">Future, Together.</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-12 max-w-3xl mx-auto text-[#EADBCE] leading-relaxed drop-shadow-md">
            Navigating municipal administration often feels like being lost in a maze. We are a youth-led movement transforming public apathy into active neighborhood engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <Link to="/join" className="group bg-[#D9572B] text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#16120D] transition-all duration-300 rounded-md shadow-[0_0_40px_rgba(217,87,43,0.4)] flex items-center justify-center gap-2">
              Join The Movement <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/manifesto" className="bg-transparent border-2 border-white/50 text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white/10 hover:border-white transition-all duration-300 rounded-md flex items-center justify-center">
              Read Manifesto
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Vision Section */}
      <section className="py-24 px-6 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#EADBCE] rounded-3xl transform rotate-3 group-hover:rotate-1 transition-all duration-500 z-0 hidden md:block"></div>
            <img 
              src="/cjp_school_thik_karo_poster.png" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square md:aspect-[4/5] hover:scale-[1.02] transition-transform duration-500" 
              alt="Civic Vision" 
              loading="lazy"
            />
          </div>
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-[#D9572B] font-black uppercase tracking-widest text-xs border-b-2 border-[#D9572B] pb-1">
                OUR VISION
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#16120D] leading-[1.1]">
              A Transparent <br />Civic Ecosystem.
            </h2>
            <div className="space-y-6 text-[#3A332B] text-lg md:text-xl font-medium leading-relaxed">
              <p>
                We view satire not as an escape from reality, but as an empirical lens to examine real-world public issues — from subterranean sewer desilting to 3-year contractor road warranties and open RTI disclosures.
              </p>
              <p>
                By combining citizen audit note-taking with lighthearted commentary, we aim to transform public apathy into active neighborhood engagement.
              </p>
              <p>
                Our ultimate vision is straightforward: a <span className="text-[#D9572B] font-bold">transparent, proactive civic ecosystem</span> where public institutions operate with total openness and citizens feel empowered to ask uncomfortable questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission Section (Drivers) */}
      <section className="py-24 px-6 bg-[#EADBCE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D9572B] font-black uppercase tracking-widest text-xs border-b-2 border-[#D9572B] pb-1 inline-block">
              OUR MISSION
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#16120D]">
              Civic Drivers &amp; Goals
            </h2>
            <p className="text-[#3A332B] text-lg font-medium">
              The core issues that drive our conversations, policy proposals, and on-ground street actions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conversationDrivers.map((cd, idx) => (
              <div key={idx} className="bg-[#F5EFE6] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#16120D]/5 group flex flex-col h-full relative overflow-hidden hover:-translate-y-2">
                <div className="absolute top-0 right-0 p-8 text-[#EADBCE] font-display text-8xl font-black opacity-30 group-hover:opacity-50 transition-opacity pointer-events-none -mr-4 -mt-4">
                  0{idx + 1}
                </div>
                
                <div className="text-[#D9572B] mb-6 bg-[#EADBCE] w-16 h-16 rounded-xl flex items-center justify-center shadow-inner relative z-10">
                  {cd.icon}
                </div>
                
                <h3 className="font-serif text-xl font-black uppercase text-[#16120D] mb-4 relative z-10 leading-tight">
                  {cd.issue}
                </h3>
                <p className="text-[#3A332B] text-sm md:text-base font-medium leading-relaxed mb-6 flex-grow relative z-10">
                  {cd.why}
                </p>
                
                <div className="mt-auto relative z-10">
                  <div className="h-0.5 w-full bg-[#EADBCE] mb-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-[#D9572B] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>
                  <p className="text-xs font-black text-[#16120D] uppercase tracking-wider">
                    <span className="text-[#D9572B]">Action:</span> {cd.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Values */}
      <section className="py-24 px-6 bg-[#16120D] text-[#F5EFE6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="flex-1 space-y-4">
              <span className="text-[#D9572B] font-black uppercase tracking-widest text-xs border-b-2 border-[#D9572B] pb-1 inline-block">
                CORE PRINCIPLES
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none">
                Our Values.
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-[#EADBCE] text-lg font-medium border-l-4 border-[#D9572B] pl-6 py-2">
                We are guided by a commitment to unfiltered truth, civic duty, and the relentless pursuit of administrative accountability.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-[#231F1A] border border-white/5 p-8 rounded-2xl hover:bg-[#2A2520] transition-colors duration-300 group">
                <div className="text-[#EADBCE] mb-6 group-hover:text-[#D9572B] transition-colors duration-300 group-hover:scale-110 transform origin-left">
                  {val.icon}
                </div>
                <h3 className="font-serif text-xl font-bold uppercase mb-3 text-white">
                  {val.title}
                </h3>
                <p className="text-[#EADBCE] text-sm font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Image + Story Section (Editorial Style) */}
      <section className="py-24 px-6 bg-[#F5EFE6] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/cjp_sep5_protest_poster.png" 
                alt="Youth Dimension Protest" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#EADBCE] rounded-full blur-3xl opacity-60 z-0"></div>
            <div className="hidden md:block absolute -top-12 -left-12 w-48 h-48 border border-[#16120D]/10 rounded-full z-0"></div>
          </div>

          <div className="lg:col-span-6 space-y-8 relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#16120D] leading-[1.1]">
              The Youth <br />Dimension.
            </h2>
            
            <blockquote className="relative p-6 md:p-8 bg-white rounded-2xl shadow-xl border border-[#16120D]/5">
              <span className="absolute top-4 left-4 text-[#EADBCE] text-6xl font-serif leading-none">"</span>
              <p className="relative z-10 text-xl md:text-2xl font-serif italic text-[#16120D] leading-relaxed">
                Young minds should not merely observe civic decay, but actively lead ward depth audits and open data discussions.
              </p>
            </blockquote>

            <div className="space-y-4 text-[#3A332B] text-lg font-medium leading-relaxed">
              <p>
                Young students, recent graduates, and aspiring professionals represent the core energy of Cockroach Janta Party. 
              </p>
              <p>
                Public funds belong to the people. True municipal accountability requires publishing contractor tender ledgers, warranty expiration dates, and sewer cleaning logs in the open digital domain under Section 4 RTI mandates.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Impact Section */}
      <section className="py-20 px-6 bg-[#D9572B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-black uppercase">Real-World Impact</h2>
            <p className="text-[#F5EFE6] mt-4 font-medium max-w-2xl mx-auto">
              Our movement is growing every day, turning online satire into offline civic accountability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#F5EFE6]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-32 px-6 bg-[#16120D] text-center relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#F5EFE6] leading-tight">
            Together, We Can Shape <br />
            <span className="text-[#D9572B]">What Comes Next.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#EADBCE] font-medium max-w-2xl">
            Join thousands of citizens who are already asking the right questions and demanding better systems.
          </p>
          <Link to="/join" className="mt-8 bg-[#D9572B] text-white px-10 py-5 font-black uppercase tracking-widest text-base hover:bg-white hover:text-[#16120D] transition-all duration-300 rounded-md shadow-[0_0_50px_rgba(217,87,43,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] scale-100 hover:scale-105">
            Become A Member Today
          </Link>
        </div>
      </section>

    </div>
  );
};
