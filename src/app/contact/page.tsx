import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { SocialLinks } from '@/components/SocialLinks';
import { siteConfig } from '@/data/siteConfig';
import { Mail, PhoneCall, MapPin, ShieldCheck, Newspaper } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Cockroach Janta Party Wale',
  description: 'Official contact portal for public inquiries, RTI correspondence, media requests, and verified civic sanitation reports.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/contact'
  }
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="grid-2">
          {/* Left Column: Official Details */}
          <div className="contact-info-card">
            <span className="badge badge-saffron mb-3">Communication Desk</span>
            <h1 className="heading-display page-h1">Contact Secretariat</h1>
            <p className="page-lead">
              Have a verified civic inquiry, municipal RTI request, or media release? Reach out through our official public channels below.
            </p>

            <div className="channels-list mt-4">
              <div className="channel-box card-base">
                <Mail size={22} className="channel-icon" />
                <div>
                  <h3 className="channel-h3">General Inquiries</h3>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="channel-link">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="channel-box card-base">
                <Newspaper size={22} className="channel-icon" />
                <div>
                  <h3 className="channel-h3">Press &amp; Media Desk</h3>
                  <a href={`mailto:${siteConfig.pressEmail}`} className="channel-link">
                    {siteConfig.pressEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="social-section mt-4">
              <h3 className="heading-display text-lg mb-3">Official Social Channels</h3>
              <SocialLinks variant="light" size="md" />
            </div>

            <div className="privacy-callout mt-4">
              <ShieldCheck size={20} className="callout-icon" />
              <div>
                <strong>Data Protection Standard:</strong>
                <p className="text-xs text-secondary mt-1">We maintain zero-spam policy. Personal details are used exclusively for responding to verified inquiries.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-h1 {
          font-size: 2.6rem;
          margin-bottom: 0.75rem;
        }
        .page-lead {
          font-size: 1.12rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .channels-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .channel-box {
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: var(--bg-surface);
        }
        .channel-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .channel-h3 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.15rem;
        }
        .channel-link {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.92rem;
        }
        .channel-link:hover {
          text-decoration: underline;
        }
        .privacy-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-light);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.88rem;
        }
        .callout-icon {
          color: var(--accent-green);
          flex-shrink: 0;
        }
        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
