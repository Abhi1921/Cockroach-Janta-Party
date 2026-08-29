'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'A valid email address is required.';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="contact-success-card">
        <CheckCircle2 size={48} className="success-icon" />
        <h3 className="success-title">Message Successfully Received</h3>
        <p className="success-text">
          Thank you for contacting Cockroach Janta Party Wale. Your public inquiry has been logged with our secretariat desk. A representative will respond within 2 business days.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
          }}
          className="btn btn-outline btn-sm"
        >
          Send Another Message
        </button>

        <style jsx>{`
          .contact-success-card {
            background-color: var(--bg-surface);
            border: 1px solid var(--accent-green-bg);
            border-radius: var(--radius-lg);
            padding: 2.5rem;
            text-align: center;
            box-shadow: var(--shadow-md);
          }
          .success-icon {
            color: var(--accent-green);
            margin-bottom: 1rem;
          }
          .success-title {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
            color: var(--text-main);
          }
          .success-text {
            font-size: 0.95rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
        `}</style>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact Us Form">
      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">
          Full Name <span className="required-star">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`form-input ${errors.name ? 'invalid' : ''}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'error-name' : undefined}
          placeholder="e.g. Rajesh Kumar"
        />
        {errors.name && (
          <span id="error-name" className="form-error">
            <AlertCircle size={14} /> {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">
          Email Address <span className="required-star">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`form-input ${errors.email ? 'invalid' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'error-email' : undefined}
          placeholder="e.g. rajesh@example.com"
        />
        {errors.email && (
          <span id="error-email" className="form-error">
            <AlertCircle size={14} /> {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject" className="form-label">
          Inquiry Type / Subject
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="form-select"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Sanitation Hazard Report">Sanitation Hazard Report</option>
          <option value="Media & Press Inquiry">Media & Press Inquiry</option>
          <option value="RTI & Data Verification">RTI & Data Verification</option>
          <option value="Editorial Correction Request">Editorial Correction Request</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Message Details <span className="required-star">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`form-textarea ${errors.message ? 'invalid' : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'error-message' : undefined}
          placeholder="Describe your inquiry or verified public issue..."
        />
        {errors.message && (
          <span id="error-message" className="form-error">
            <AlertCircle size={14} /> {errors.message}
          </span>
        )}
      </div>

      <div className="form-privacy-note">
        Your email and submission details are processed in accordance with our Privacy Policy. No private personal data is published without consent.
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-full">
        {loading ? 'Transmitting Message...' : (
          <>
            Submit Message <Send size={18} />
          </>
        )}
      </button>

      <style jsx>{`
        .contact-form {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .form-group {
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
        }
        .form-label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }
        .required-star {
          color: var(--primary);
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          color: var(--text-main);
          background-color: var(--bg-surface);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px var(--primary-light);
        }
        .form-input.invalid, .form-textarea.invalid {
          border-color: #DC2626;
        }
        .form-error {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #DC2626;
          font-size: 0.8rem;
          margin-top: 0.35rem;
          font-weight: 500;
        }
        .form-privacy-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .w-full {
          width: 100%;
        }
      `}</style>
    </form>
  );
};
