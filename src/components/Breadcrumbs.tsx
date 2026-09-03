import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#3A332B] uppercase tracking-wider mb-6 flex-wrap select-none" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 text-[#16120D] hover:text-[#D9572B] transition-colors">
        <Home size={12} />
        <span>HOME</span>
      </Link>
      
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={12} className="text-[#D9572B]" />
          {item.href ? (
            <Link to={item.href} className="text-[#16120D] hover:text-[#D9572B] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#D9572B] font-black truncate max-w-[200px] sm:max-w-xs">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
