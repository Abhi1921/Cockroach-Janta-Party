import React from 'react';
import { ResourceItem } from '@/data/resourcesData';
import { Download, FileText, FileCode, Archive } from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="card-base resource-card">
      <div className="resource-icon-wrapper">
        <FileText size={24} className="resource-icon" />
      </div>

      <div className="resource-body">
        <div className="resource-header">
          <span className="badge badge-saffron">{resource.category}</span>
          <span className="resource-size">{resource.format} • {resource.fileSize}</span>
        </div>

        <h3 className="resource-title">{resource.title}</h3>
        <p className="resource-desc">{resource.description}</p>

        <div className="resource-footer">
          <span className="resource-date">Published: {resource.date}</span>
          <a
            href={resource.downloadUrl}
            className="btn btn-outline btn-sm download-btn"
            onClick={(e) => {
              e.preventDefault();
              alert(`Simulated Download: ${resource.title} (${resource.fileSize})`);
            }}
          >
            <Download size={14} /> Download {resource.format}
          </a>
        </div>
      </div>

      <style jsx>{`
        .resource-card {
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
        }
        .resource-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background-color: var(--primary-light);
          color: var(--primary-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .resource-body {
          flex-grow: 1;
        }
        .resource-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .resource-size {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .resource-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }
        .resource-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .resource-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .resource-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
