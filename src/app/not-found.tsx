import React from 'react';
import Link from 'next/link';
import { Home, Search, Newspaper, PhoneCall, Bug } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found-page py-5">
      <div className="container container-narrow text-center">
        <div className="card-base 404-card p-5">
          <div className="icon-badge mx-auto mb-4">
            <Bug size={48} className="text-primary" />
          </div>

          <h1 className="heading-display text-4xl mb-3">404 — Page Not Found</h1>
          <p className="lead-text text-lg text-secondary mb-4">
            &quot;Looks like this page has gone off the swarm.&quot;
          </p>
          <p className="text-sm text-muted max-w-md mx-auto mb-5">
            The civic route or document you requested might have been moved, updated, or does not exist. Use the helpful links below to navigate back to active portals.
          </p>

          <div className="nav-buttons flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary">
              <Home size={16} /> Home Landing Page
            </Link>
            <Link href="/search" className="btn btn-outline">
              <Search size={16} /> Site Search
            </Link>
            <Link href="/news" className="btn btn-outline">
              <Newspaper size={16} /> Latest Updates
            </Link>
            <Link href="/contact" className="btn btn-outline">
              <PhoneCall size={16} /> Contact Support
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .not-found-page {
          min-height: 70vh;
          display: flex;
          align-items: center;
        }
        .icon-badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
