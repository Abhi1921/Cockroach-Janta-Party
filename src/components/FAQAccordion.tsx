'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || (items[0]?.id ?? null));

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-accordion-container">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              onClick={() => toggleItem(item.id)}
              className="faq-question-btn"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-btn-${item.id}`}
            >
              <div className="question-left">
                <HelpCircle size={18} className="question-icon" />
                <span className="question-text">{item.question}</span>
              </div>
              <ChevronDown size={18} className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="faq-answer-box"
              >
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}

      <style jsx>{`
        .faq-accordion-container {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .faq-item {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-item.open {
          border-color: var(--primary-border);
          box-shadow: var(--shadow-sm);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          text-align: left;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-main);
          background: none;
          border: none;
          cursor: pointer;
        }
        .question-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .question-icon {
          color: var(--primary);
          flex-shrink: 0;
        }
        .question-text {
          font-family: var(--font-serif);
        }
        .arrow-icon {
          color: var(--text-muted);
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }
        .arrow-icon.rotate {
          transform: rotate(180deg);
          color: var(--primary);
        }
        .faq-answer-box {
          padding: 0 1.5rem 1.25rem 3.25rem;
          border-top: 1px dashed var(--border-light);
          margin-top: -0.25rem;
          padding-top: 1rem;
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-answer-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
