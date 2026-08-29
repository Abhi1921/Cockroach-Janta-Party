'use client';

import React, { useState } from 'react';
import { UserPlus, CheckCircle2, AlertCircle } from 'lucide-react';

export const JoinForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityWard: '',
    interest: 'Civic Sanitation Observer'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required.';
    }
    if (!formData.cityWard.trim()) newErrors.cityWard = 'City/Ward location is required.';
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
      <div className="join-success-card">
        <CheckCircle2 size={48} className="success-icon" />
        <h3 className="success-title">Volunteer Registration Submitted</h3>
        <p className="success-text">
          Thank you for joining the Cockroach Janta Party Wale civic network. Your volunteer profile for <strong>{formData.cityWard}</strong> has been registered. You will receive an orientation kit via email.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: '', email: '', phone: '', cityWard: '', interest: 'Civic Sanitation Observer' });
          }}
          className="btn btn-outline btn-sm"
        >
          Register Another Volunteer
        </button>

        <style jsx>{`
          .join-success-card {
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
    <form onSubmit={handleSubmit} className="join-form" noValidate aria-label="Volunteer Registration Form">
      <div className="form-group">
        <label htmlFor="join-name" className="form-label">
          Full Name <span className="required-star">*</span>
        </label>
        <input
          id="join-name"
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={`form-input ${errors.fullName ? 'invalid' : ''}`}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'err-name' : undefined}
          placeholder="e.g. Priya Sharma"
        />
        {errors.fullName && (
          <span id="err-name" className="form-error">
            <AlertCircle size={14} /> {errors.fullName}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="join-email" className="form-label">
          Email Address <span className="required-star">*</span>
        </label>
        <input
          id="join-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`form-input ${errors.email ? 'invalid' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'err-email' : undefined}
          placeholder="e.g. priya@example.com"
        />
        {errors.email && (
          <span id="err-email" className="form-error">
            <AlertCircle size={14} /> {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="join-phone" className="form-label">
          Contact Phone Number (Optional)
        </label>
        <input
          id="join-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="form-input"
          placeholder="e.g. +91 98765 43210"
        />
      </div>

      <div className="form-group">
        <label htmlFor="join-ward" className="form-label">
          City & Ward Location <span className="required-star">*</span>
        </label>
        <input
          id="join-ward"
          type="text"
          value={formData.cityWard}
          onChange={(e) => setFormData({ ...formData, cityWard: e.target.value })}
          className={`form-input ${errors.cityWard ? 'invalid' : ''}`}
          aria-invalid={!!errors.cityWard}
          aria-describedby={errors.cityWard ? 'err-ward' : undefined}
          placeholder="e.g. Delhi Ward 28 / Sector 14"
        />
        {errors.cityWard && (
          <span id="err-ward" className="form-error">
            <AlertCircle size={14} /> {errors.cityWard}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="join-interest" className="form-label">
          Primary Area of Civic Interest
        </label>
        <select
          id="join-interest"
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="form-select"
        >
          <option value="Civic Sanitation Observer">Civic Sanitation Observer (Drainage Audits)</option>
          <option value="RTI & Legal Research">RTI & Public Works Tender Verification</option>
          <option value="Water Quality Testing Team">Water Quality Kiosk Volunteer</option>
          <option value="Media & Graphic Designer">Media, Graphic & Editorial Contributor</option>
          <option value="General Volunteer">General Ward Community Volunteer</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-full">
        {loading ? 'Processing Registration...' : (
          <>
            Register Volunteer Profile <UserPlus size={18} />
          </>
        )}
      </button>

      <style jsx>{`
        .join-form {
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
        .form-input, .form-select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          color: var(--text-main);
          background-color: var(--bg-surface);
        }
        .form-input:focus, .form-select:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px var(--primary-light);
        }
        .form-input.invalid {
          border-color: #DC2626;
        }
        .form-error {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #DC2626;
          font-size: 0.8rem;
          margin-top: 0.35rem;
        }
        .w-full {
          width: 100%;
        }
      `}</style>
    </form>
  );
};
