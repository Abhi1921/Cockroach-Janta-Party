import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { manifestoData } from '@/data/manifestoData';
import { newsData } from '@/data/newsData';
import { campaignsData } from '@/data/campaignsData';
import { galleryData } from '@/data/galleryData';
import { faqData } from '@/data/faqData';
import { founderData } from '@/data/founderData';
import { ManifestoCard } from '@/components/ManifestoCard';
import { NewsCard } from '@/components/NewsCard';
import { CampaignCard } from '@/components/CampaignCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  FileText,
  Search,
  Users,
  Award,
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const featuredNews = newsData.slice(0, 3);
  const featuredManifesto = manifestoData.slice(0, 3);
  const activeCampaign = campaignsData.find((c) => c.status === 'Ongoing') || campaignsData[0];
  const galleryPreview = galleryData.slice(0, 4);
  const faqPreview = faqData.slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. Editorial Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={16} /> Official Public Information Portal
            </div>

            <h1 className="heading-display hero-h1">
              Cockroach Janta Party Wale — Official Information &amp; Civic Movement
            </h1>

            <p className="hero-description">
              Dedicated to non-partisan civic hygiene, transparent municipal auditing, subterranean drainage rights, and scientific public health pest management across urban wards.
            </p>

            <div className="hero-actions">
              <Link href="/manifesto" className="btn btn-primary btn-lg">
                Read 2026 Civic Manifesto <ArrowRight size={18} />
              </Link>
              <Link href="/campaigns" className="btn btn-outline btn-lg">
                Explore Active Campaigns
              </Link>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <CheckCircle size={16} className="trust-icon" />
                <span>Empirical Audit Reports</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={16} className="trust-icon" />
                <span>Open Data Transparency</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={16} className="trust-icon" />
                <span>Non-Partisan Civic Advocacy</span>
              </div>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-image-frame">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
                alt="Cockroach Janta Party public event in New Delhi inspecting municipal drainage desilting"
                width={700}
                height={500}
                className="hero-img"
                priority
              />
              <div className="hero-media-caption">
                <span className="caption-tag">Field Inspection</span>
                <p>Pre-monsoon subterranean drain audit conducted by civic research volunteers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Organization Introduction Banner */}
      <section className="intro-section section-padding">
        <div className="container">
          <div className="intro-card">
            <div className="intro-grid">
              <div className="intro-text">
                <span className="badge badge-saffron mb-2">Our Mission</span>
                <h2 className="heading-display text-2xl mb-4">
                  Advocating for Clean Neighborhoods Through Public Data &amp; Citizen Participation
                </h2>
                <p className="intro-paragraph">
                  Cockroach Janta Party Wale was established to address fundamental urban hygiene challenges. We empower residents with verified Right to Information (RTI) tools, open-source tender tracking, and structured drain audit protocols.
                </p>
                <p className="intro-paragraph">
                  All statistics, news articles, and campaign milestones published on this website are backed by verifiable public records and documented physical field inspections.
                </p>
                <Link href="/about" className="btn btn-outline btn-sm mt-3">
                  Learn About Our History &rarr;
                </Link>
              </div>

              <div className="intro-pillars">
                <div className="pillar-box">
                  <div className="pillar-num">01</div>
                  <h3>Underground Drainage Rights</h3>
                  <p>Guaranteed bi-weekly mechanized cleaning of subterranean sewer networks.</p>
                </div>
                <div className="pillar-box">
                  <div className="pillar-num">02</div>
                  <h3>Tender Transparency</h3>
                  <p>Mandatory digital publishing of all municipal project work orders and warranties.</p>
                </div>
                <div className="pillar-box">
                  <div className="pillar-num">03</div>
                  <h3>Scientific Pest Control</h3>
                  <p>WHO-compliant biological vector suppression in residential food hubs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Manifesto Preview Section */}
      <section className="manifesto-preview-section section-padding bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-saffron">2026 Policy Charter</span>
            <h2 className="heading-display section-h2">The CJP Civic Manifesto</h2>
            <p className="section-subtitle">
              Read our five non-partisan policy pillars for clean, accountable, and healthy urban sectors.
            </p>
          </div>

          <div className="grid-3">
            {featuredManifesto.map((point) => (
              <ManifestoCard key={point.id} point={point} />
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/manifesto" className="btn btn-primary btn-lg">
              View All Manifesto Points <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Campaign Section */}
      {activeCampaign && (
        <section className="featured-campaign-section section-padding">
          <div className="container">
            <div className="campaign-feature-card">
              <div className="campaign-feature-grid">
                <div className="campaign-feature-media">
                  <Image
                    src={activeCampaign.featuredImage}
                    alt={activeCampaign.imageAlt}
                    width={800}
                    height={500}
                    className="feature-img"
                  />
                  <span className="badge badge-green feature-badge">{activeCampaign.status} Initiative</span>
                </div>
                <div className="campaign-feature-content">
                  <span className="badge badge-saffron mb-2">Featured Campaign</span>
                  <h2 className="heading-display campaign-feature-h2">{activeCampaign.title}</h2>
                  <p className="campaign-feature-summary">{activeCampaign.summary}</p>
                  
                  <div className="goals-callout">
                    <span className="goals-title">Key Campaign Objectives:</span>
                    <ul>
                      {activeCampaign.goals.map((goal, idx) => (
                        <li key={idx}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="feature-actions mt-4">
                    <Link href={`/campaigns/${activeCampaign.slug}`} className="btn btn-primary">
                      View Campaign Progress <ArrowRight size={16} />
                    </Link>
                    <Link href="/campaigns" className="btn btn-outline">
                      All Campaigns Index
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Latest Verified Updates & News */}
      <section className="news-preview-section section-padding bg-subtle">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="badge badge-saffron">Verified Articles</span>
              <h2 className="heading-display section-h2">Latest Civic News &amp; Reports</h2>
            </div>
            <Link href="/news" className="btn btn-outline">
              Explore News Archive &rarr;
            </Link>
          </div>

          <div className="grid-3">
            {featuredNews.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Media Gallery Preview */}
      <section className="gallery-preview-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-saffron">Visual Archive</span>
            <h2 className="heading-display section-h2">Field Audits &amp; Community Gallery</h2>
            <p className="section-subtitle">
              Documenting ground-level civic inspection events, community forums, and public audits.
            </p>
          </div>

          <div className="gallery-preview-grid">
            {galleryPreview.map((item) => (
              <div key={item.id} className="gallery-thumb-card">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={500}
                  height={340}
                  className="thumb-img"
                />
                <div className="thumb-caption">
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/gallery" className="btn btn-outline">
              Open Complete Media Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Leadership & Founder Spotlight */}
      <section className="founder-preview-section section-padding bg-dark-section">
        <div className="container">
          <div className="founder-spotlight-box">
            <div className="founder-spotlight-text">
              <span className="badge badge-saffron mb-3">Leadership Profile</span>
              <h2 className="heading-display-dark text-3xl mb-3">{founderData.name}</h2>
              <p className="founder-subtitle">{founderData.role} — {founderData.organization}</p>
              
              <p className="founder-bio">
                {founderData.biography[0]}
              </p>
              <p className="founder-bio">
                {founderData.biography[1]}
              </p>

              <div className="founder-actions mt-4">
                <Link href="/founder" className="btn btn-primary">
                  Read Leadership Biography <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="founder-commitments-card">
              <h3 className="commitments-heading">Public Charter Commitments</h3>
              <ul className="commitments-list">
                {founderData.publicCommitments.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="item-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview Section */}
      <section className="faq-preview-section section-padding">
        <div className="container container-narrow">
          <div className="section-header text-center">
            <span className="badge badge-saffron">Public Information</span>
            <h2 className="heading-display section-h2">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers to key questions regarding Cockroach Janta Party Wale, our verification protocols, and public access.
            </p>
          </div>

          <FAQAccordion items={faqPreview} />

          <div className="text-center mt-4">
            <Link href="/faq" className="btn btn-outline">
              View All Questions &amp; Verification Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Civic Participation CTA Banner */}
      <section className="cta-banner-section section-padding bg-subtle">
        <div className="container">
          <div className="cta-box text-center">
            <Sparkles size={32} className="cta-icon" />
            <h2 className="heading-display text-3xl mb-3">Get Involved in Your Local Ward Audit</h2>
            <p className="cta-description">
              Join resident volunteer teams monitoring local sanitation schedules, verifying public water quality, and filing proactive RTI disclosures.
            </p>
            <div className="cta-buttons">
              <Link href="/join" className="btn btn-primary btn-lg">
                Join Volunteer Network <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Contact Secretariat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(180deg, var(--primary-light) 0%, var(--bg-page) 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border-light);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: #FFFFFF;
          color: var(--primary-hover);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-border);
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          box-shadow: var(--shadow-sm);
        }
        .hero-h1 {
          font-size: 2.75rem;
          line-height: 1.18;
          margin-bottom: 1.25rem;
          color: var(--text-main);
        }
        .hero-description {
          font-size: 1.12rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .hero-trust-bar {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-medium);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .trust-icon {
          color: var(--primary);
        }
        .hero-media-frame {
          background-color: white;
          padding: 0.75rem;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--border-light);
        }
        .hero-img {
          border-radius: var(--radius-lg);
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .hero-media-caption {
          margin-top: 0.75rem;
          padding: 0.5rem 0.5rem 0;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .caption-tag {
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          font-size: 0.7rem;
          margin-right: 0.5rem;
        }

        /* Intro Section */
        .intro-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3rem;
        }
        .intro-paragraph {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .intro-pillars {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .pillar-box {
          background-color: var(--bg-subtle);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          position: relative;
          border-left: 3px solid var(--primary);
        }
        .pillar-num {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
          opacity: 0.5;
          margin-bottom: 0.25rem;
        }
        .pillar-box h3 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .pillar-box p {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        /* Grids & Headers */
        .section-header {
          margin-bottom: 3rem;
        }
        .section-h2 {
          font-size: 2.2rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          max-width: 650px;
          margin: 0 auto;
        }
        .section-header-flex {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* Featured Campaign */
        .campaign-feature-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .campaign-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .campaign-feature-media {
          position: relative;
          min-height: 380px;
        }
        .feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .feature-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
        }
        .campaign-feature-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .campaign-feature-h2 {
          font-size: 1.85rem;
          margin-bottom: 1rem;
        }
        .campaign-feature-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .goals-callout {
          background-color: var(--primary-light);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--primary-border);
          font-size: 0.92rem;
        }
        .goals-title {
          font-weight: 700;
          color: var(--primary-hover);
          display: block;
          margin-bottom: 0.5rem;
        }
        .goals-callout ul {
          padding-left: 1.25rem;
          color: var(--text-main);
        }
        .feature-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Gallery Preview */
        .gallery-preview-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .gallery-thumb-card {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          height: 220px;
        }
        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .gallery-thumb-card:hover .thumb-img {
          transform: scale(1.06);
        }
        .thumb-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%);
          padding: 1rem 0.85rem 0.65rem;
          color: white;
        }
        .thumb-caption h4 {
          font-size: 0.92rem;
          font-weight: 600;
          margin-bottom: 0.15rem;
        }
        .thumb-caption p {
          font-size: 0.75rem;
          color: #94A3B8;
        }

        /* Founder Preview Dark Section */
        .founder-spotlight-box {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .founder-subtitle {
          color: var(--primary-border);
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1.25rem;
        }
        .founder-bio {
          color: #CBD5E1;
          font-size: 1.02rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .founder-commitments-card {
          background-color: var(--bg-dark-surface);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius-xl);
          padding: 2rem;
        }
        .commitments-heading {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: white;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-dark);
        }
        .commitments-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .commitments-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #E2E8F0;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .item-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        /* CTA Banner */
        .cta-box {
          background-color: var(--bg-surface);
          border: 1.5px solid var(--primary-border);
          border-radius: var(--radius-xl);
          padding: 3.5rem 2rem;
          box-shadow: var(--shadow-lg);
        }
        .cta-icon {
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .cta-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .intro-grid {
            grid-template-columns: 1fr;
          }
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .campaign-feature-grid {
            grid-template-columns: 1fr;
          }
          .gallery-preview-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .founder-spotlight-box {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .hero-h1 {
            font-size: 2.1rem;
          }
          .gallery-preview-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
