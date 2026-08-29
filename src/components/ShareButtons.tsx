'use client';

import React, { useState } from 'react';
import { Share2, Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? (url || window.location.href) : '';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    }
  ];

  return (
    <div className="share-bar">
      <span className="share-label">
        <Share2 size={16} /> Share article:
      </span>
      <div className="share-actions">
        {shareLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn"
              title={`Share on ${item.name}`}
              aria-label={`Share on ${item.name}`}
            >
              <Icon size={16} />
            </a>
          );
        })}
        <button
          onClick={handleCopy}
          className="share-btn copy-btn"
          title="Copy page link"
          aria-label="Copy page link"
        >
          {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
        </button>
        {copied && <span className="copied-toast">Link Copied!</span>}
      </div>

      <style jsx>{`
        .share-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.25rem;
          background-color: var(--bg-subtle);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          margin: 1.5rem 0;
          flex-wrap: wrap;
        }
        .share-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }
        .share-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }
        .share-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          transition: all 0.2s ease;
        }
        .share-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background-color: var(--primary-light);
        }
        .copied-toast {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-green);
          background-color: var(--accent-green-bg);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
