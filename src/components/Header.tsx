'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Search, Menu, X, ChevronDown, Shield, FileText, Users, Newspaper, Flag, Image as GalleryIcon, HelpCircle, PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo & Name */}
        <Link href="/" className="brand-logo" aria-label="Cockroach Janta Party Wale Homepage">
          <div className="logo-mark">
            <Shield size={24} className="logo-icon" />
          </div>
          <div className="logo-text-group">
            <span className="logo-title">{siteConfig.name}</span>
            <span className="logo-subtitle">Official Public Information</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li
                  key={item.title}
                  className={`nav-item ${hasChildren ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.title)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-expanded={hasChildren ? activeDropdown === item.title : undefined}
                  >
                    {item.title}
                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                    {hasChildren && <ChevronDown size={14} className="dropdown-arrow" />}
                  </Link>

                  {hasChildren && activeDropdown === item.title && (
                    <div className="dropdown-menu">
                      <div className="dropdown-inner">
                        {item.children?.map((child) => (
                          <Link key={child.href} href={child.href} className="dropdown-item">
                            <span className="dropdown-item-title">{child.title}</span>
                            {child.description && (
                              <span className="dropdown-item-desc">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions Group */}
        <div className="header-actions">
          <Link href="/search" className="search-btn-trigger" title="Search Portal" aria-label="Search portal">
            <Search size={18} />
            <span className="search-text-desktop">Search</span>
          </Link>

          <Link href="/join" className="btn btn-primary btn-sm header-cta">
            Join Movement
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="container mobile-drawer-inner">
            <ul className="mobile-nav-list">
              {siteConfig.navItems.map((item) => (
                <li key={item.title} className="mobile-nav-item">
                  <Link
                    href={item.href}
                    className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.title}</span>
                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                  </Link>
                  {item.children && (
                    <ul className="mobile-sub-list">
                      {item.children.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="mobile-sub-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <Link href="/join" className="btn btn-primary btn-full">
                Join Movement
              </Link>
              <Link href="/search" className="btn btn-outline btn-full">
                <Search size={16} /> Site Search
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-light);
          transition: all 0.25s ease;
        }
        .header.scrolled {
          box-shadow: var(--shadow-md);
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-mark {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: white;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }
        .logo-text-group {
          display: flex;
          flex-direction: column;
        }
        .logo-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-main);
          line-height: 1.2;
        }
        .logo-subtitle {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          list-style: none;
        }
        .nav-item {
          position: relative;
        }
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 500;
          font-size: 0.92rem;
          color: var(--text-secondary);
          padding: 0.5rem 0.25rem;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }
        .dropdown-arrow {
          transition: transform 0.2s ease;
        }
        .nav-item:hover .dropdown-arrow {
          transform: rotate(180deg);
        }
        .nav-badge {
          background-color: var(--primary-light);
          color: var(--primary-hover);
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-border);
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 260px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xl);
          padding: 0.5rem;
          z-index: 1100;
          animation: dropDownIn 0.2s ease;
        }
        @keyframes dropDownIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item {
          display: block;
          padding: 0.6rem 0.8rem;
          border-radius: var(--radius-sm);
          transition: background 0.15s ease;
        }
        .dropdown-item:hover {
          background-color: var(--bg-subtle);
        }
        .dropdown-item-title {
          display: block;
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text-main);
        }
        .dropdown-item-desc {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.1rem;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .search-btn-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.85rem;
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .search-btn-trigger:hover {
          border-color: var(--primary);
          color: var(--primary);
          background-color: var(--primary-light);
        }
        .mobile-toggle {
          display: none;
          color: var(--text-main);
          padding: 0.5rem;
        }

        @media (max-width: 992px) {
          .desktop-nav {
            display: none;
          }
          .search-text-desktop {
            display: none;
          }
          .header-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-surface);
          z-index: 999;
          overflow-y: auto;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-light);
        }
        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-main);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-light);
        }
        .mobile-nav-link.active {
          color: var(--primary);
        }
        .mobile-sub-list {
          list-style: none;
          padding-left: 1rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-sub-link {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .mobile-drawer-footer {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .btn-full {
          width: 100%;
        }
      `}</style>
    </header>
  );
};
