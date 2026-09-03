import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Home, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page py-24 bg-[#EADBCE] text-[#16120D] text-center font-sans selection:bg-[#D9572B] selection:text-white">
      <SEOHead
        title="404 — This Cockroach Couldn't Find the Page | CJP"
        description="404 Error: The page you are looking for does not exist on Cockroach Janata Party (CJP) portal."
      />

      <div className="max-w-md mx-auto px-4 bg-[#F5EFE6] border-4 border-[#16120D] p-10 shadow-[8px_8px_0px_0px_#16120D]">
        
        {/* Animated Roach Icon */}
        <div className="w-24 h-24 rounded-full bg-[#16120D] text-[#EADBCE] border-4 border-[#16120D] flex items-center justify-center text-5xl mx-auto mb-5 shadow-lg animate-bounce">
          🪳
        </div>
        
        <span className="bg-[#D9572B] text-white text-[10px] font-black px-3.5 py-1 uppercase tracking-widest inline-block mb-3 border border-[#16120D]">
          404 CIVIC NAVIGATION ERROR
        </span>

        <h1 className="font-display text-4xl sm:text-5xl text-[#16120D] uppercase font-black leading-none mb-3">
          404 — THIS COCKROACH COULDN'T FIND THE PAGE
        </h1>

        <p className="text-xs text-[#3A332B] font-bold italic mb-8">
          "Even cockroaches occasionally crawl down an un-mapped sewer pipe in the municipal maze."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link 
            to="/" 
            className="w-full sm:w-auto btn-brutal py-3 px-6 bg-[#16120D] text-[#F5EFE6] hover:bg-[#D9572B] hover:text-white text-xs font-black uppercase flex items-center justify-center gap-2"
          >
            <Home size={14} /> BACK HOME
          </Link>

          <Link 
            to="/join" 
            className="w-full sm:w-auto btn-brutal py-3 px-6 bg-[#D9572B] text-white hover:bg-[#16120D] text-xs font-black uppercase flex items-center justify-center gap-2"
          >
            <span>JOIN THE SWARM</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
