'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { SocialLinks } from './SocialLinks';
import { Shield, Mail, CheckCircle2, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        {/* Column 1: Brand & Mission */}
        <div className="footer-col footer-col-brand">
          <div className="footer-logo">
            <Shield size={24} className="logo-icon" />
            <span className="footer-logo-title">{siteConfig.name}</span>
          </div>
          <p className="footer-description">
            {siteConfig.description}
          </p>
          <div className="verification-badge">
            <CheckCircle2 size={16} className="badge-icon" />
            <span>Empirically Verified Civic Material</span>
          </div>
          <div className="footer-social-wrapper">
            <SocialLinks variant="dark" size="sm" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Civic Portals</h3>
          <ul className="footer-links">
            {siteConfig.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal & Compliance */}
        <div className="footer-col">
          <h3 className="footer-heading">Legal & Standards</h3>
          <ul className="footer-links">
            {siteConfig.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Corrections */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact & Press</h3>
          <p className="footer-contact-text">
            For verified public inquiries, RTI correspondence, or media releases:
          </p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="footer-email-link">
            <Mail size={16} /> {siteConfig.contactEmail}
          </a>
          <div className="editorial-notice">
            <HeartHandshake size={16} className="notice-icon" />
            <span>Non-Partisan Public Informational Portal. No exaggerated or unverified claims.</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Built for civic transparency & public hygiene awareness.
          </p>
          <p className="domain-text">
            Official Domain: <strong>cockroachjantapartywale.com</strong>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--bg-dark-section);
          color: var(--text-inverse);
          padding-top: 4.5rem;
          margin-top: auto;
        }
        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.25fr;
          gap: 2.5rem;
          padding-bottom: 3.5rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }
        .footer-logo-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.25rem;
          color: #ffffff;
        }
        .footer-description {
          font-size: 0.9rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .verification-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-dark-surface);
          border: 1px solid var(--border-dark);
          color: var(--accent-green-bg);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .footer-heading {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 1.25rem;
          letter-spacing: 0.02em;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          color: #94A3B8;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--primary-border);
          text-decoration: underline;
        }
        .footer-contact-text {
          font-size: 0.88rem;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }
        .footer-email-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-border);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }
        .footer-email-link:hover {
          text-decoration: underline;
        }
        .editorial-notice {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background-color: rgba(255, 255, 255, 0.05);
          border-left: 3px solid var(--primary);
          padding: 0.75rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 0.8rem;
          color: #CBD5E1;
        }
        .footer-bottom {
          border-top: 1px solid var(--border-dark);
          padding: 1.5rem 0;
          background-color: #090D16;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.82rem;
          color: #64748B;
        }
        .domain-text strong {
          color: #94A3B8;
        }

        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
