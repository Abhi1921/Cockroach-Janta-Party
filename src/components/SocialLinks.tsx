'use client';

import React from 'react';
import { Twitter, Facebook, Youtube, Instagram, Send, Linkedin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface SocialLinksProps {
  variant?: 'light' | 'dark' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'light', size = 'md' }) => {
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  const platforms = [
    { name: 'X / Twitter', url: siteConfig.socialLinks.x, icon: Twitter },
    { name: 'Facebook', url: siteConfig.socialLinks.facebook, icon: Facebook },
    { name: 'YouTube', url: siteConfig.socialLinks.youtube, icon: Youtube },
    { name: 'Instagram', url: siteConfig.socialLinks.instagram, icon: Instagram },
    { name: 'Telegram', url: siteConfig.socialLinks.telegram, icon: Send },
    { name: 'LinkedIn', url: siteConfig.socialLinks.linkedin, icon: Linkedin }
  ];

  return (
    <div className={`social-links-container variant-${variant}`}>
      {platforms.map((platform) => {
        const IconComponent = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Official ${platform.name} account`}
            className="social-btn"
          >
            <IconComponent size={iconSize} />
          </a>
        );
      })}

      <style jsx>{`
        .social-links-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${size === 'sm' ? '32px' : size === 'lg' ? '44px' : '38px'};
          height: ${size === 'sm' ? '32px' : size === 'lg' ? '44px' : '38px'};
          border-radius: 50%;
          transition: all 0.2s ease;
        }
        .variant-light .social-btn {
          background-color: var(--bg-subtle);
          color: var(--text-main);
          border: 1px solid var(--border-light);
        }
        .variant-light .social-btn:hover {
          background-color: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .variant-dark .social-btn {
          background-color: var(--bg-dark-surface);
          color: var(--text-inverse);
          border: 1px solid var(--border-dark);
        }
        .variant-dark .social-btn:hover {
          background-color: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        .variant-minimal .social-btn {
          background: transparent;
          color: var(--text-secondary);
        }
        .variant-minimal .social-btn:hover {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};
