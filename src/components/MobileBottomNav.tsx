'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Flag, Newspaper, Search } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();

  const navs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Manifesto', href: '/manifesto', icon: FileText },
    { label: 'News', href: '/news', icon: Newspaper },
    { label: 'Campaigns', href: '/campaigns', icon: Flag },
    { label: 'Search', href: '/search', icon: Search }
  ];

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation Bar">
      <div className="bottom-nav-inner">
        {navs.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} className="bottom-nav-icon" />
              <span className="bottom-nav-label">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <style jsx>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: var(--bg-surface);
          border-top: 1px solid var(--border-light);
          box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.05);
          padding: 0.4rem 0 calc(0.4rem + env(safe-area-inset-bottom));
        }
        .bottom-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          color: var(--text-muted);
          font-size: 0.72rem;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
          transition: color 0.15s ease;
        }
        .bottom-nav-item.active {
          color: var(--primary);
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};
