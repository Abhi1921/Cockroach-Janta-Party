import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JoinForm } from '@/components/JoinForm';
import { UserPlus, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join The Movement | Cockroach Janta Party Wale',
  description: 'Register as a volunteer civic observer for urban sanitation, RTI audits, drinking water testing, and ward community action.',
  alternates: {
    canonical: 'https://cockroachjantapartywale.com/join'
  }
};

export default function JoinPage() {
  return (
    <div className="join-page">
      <div className="container py-4">
        <Breadcrumbs items={[{ label: 'Get Involved' }]} />

        <div className="grid-2">
          {/* Left Column: Info */}
          <div className="join-info-card">
            <span className="badge badge-saffron mb-3">
              <UserPlus size={14} /> Volunteer Network
            </span>
            <h1 className="heading-display page-h1">Become a Civic Observer</h1>
            <p className="page-lead">
              Cockroach Janta Party Wale depends on citizen volunteers to monitor municipal sanitation work, verify drain desilting schedules, and file proactive RTI disclosures.
            </p>

            <div className="benefits-list mt-4">
              <h2 className="heading-display text-xl mb-3">What Volunteers Do:</h2>
              <div className="benefit-item">
                <CheckCircle2 size={18} className="icon-orange" />
                <div>
                  <strong>Ward Sanitation Mapping:</strong> Documenting underground drain desilting and waterlogging hotspots.
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={18} className="icon-orange" />
                <div>
                  <strong>Tender Specification Verification:</strong> Inspecting local municipal road paving and streetlights.
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={18} className="icon-orange" />
                <div>
                  <strong>Community Kiosks:</strong> Assisting residents with free drinking water sample testing.
                </div>
              </div>
            </div>

            <div className="ethics-callout mt-4">
              <ShieldCheck size={20} className="icon-shield" />
              <div>
                <strong>Non-Partisan Engagement:</strong> Participation is strictly non-partisan and non-commercial. No membership fees or financial contributions are requested.
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="join-form-wrapper">
            <JoinForm />
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-h1 {
          font-size: 2.6rem;
          margin-bottom: 1rem;
        }
        .page-lead {
          font-size: 1.12rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.98rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .benefit-item strong {
          color: var(--text-main);
        }
        .icon-orange {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .ethics-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background-color: var(--primary-light);
          border: 1px solid var(--primary-border);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          color: var(--text-main);
        }
        .icon-shield {
          color: var(--primary-hover);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
