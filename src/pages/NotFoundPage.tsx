import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page py-24 bg-[#EADBCE] text-[#16120D] text-center font-sans">
      <SEOHead
        title="404 Page Not Found"
        description="The page you are looking for does not exist on Cockroach Janta Party portal."
      />

      <div className="max-w-md mx-auto px-4 bg-[#F5EFE6] border-2 border-[#16120D] p-10 shadow-xl">
        <div className="w-20 h-20 rounded-full bg-[#16120D] text-[#EADBCE] border-2 border-[#16120D] flex items-center justify-center text-4xl mx-auto mb-4">
          🪳
        </div>
        
        <span className="text-[10px] font-extrabold text-[#D9572B] bg-[#16120D] px-3 py-1 uppercase tracking-widest inline-block mb-3">
          ERROR 404
        </span>

        <h1 className="font-serif font-black text-4xl text-[#16120D] mb-3">
          WRONG CORRIDOR.
        </h1>

        <p className="text-xs text-[#3A332B] italic font-medium mb-8">
          "Even cockroaches occasionally take the wrong turn in the municipal maze."
        </p>

        <Link to="/" className="bg-[#16120D] text-[#F5EFE6] font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 border-2 border-[#16120D] hover:bg-[#D9572B] hover:border-[#D9572B] transition-all inline-block">
          RETURN TO MAIN PORTAL →
        </Link>
      </div>
    </div>
  );
};
