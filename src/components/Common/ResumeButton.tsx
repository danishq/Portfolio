import { useState, type ReactNode } from 'react';
import { RESUME_CONFIG, downloadResumeFile } from '../../data/resume';

interface ResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'nav' | 'minimal';
  className?: string;
  children?: ReactNode;
  iconOnly?: boolean;
}

export function ResumeButton({
  variant = 'primary',
  className = '',
  children,
  iconOnly = false,
}: ResumeButtonProps) {
  const [downloading, setDownloading] = useState(false);

  const handleClick = async () => {
    setDownloading(true);
    await downloadResumeFile();
    setTimeout(() => {
      setDownloading(false);
    }, 1200);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--color-accent)',
          color: '#FFFFFF',
          padding: '10px 20px',
          borderRadius: 'var(--radius-md)',
          fontWeight: 500,
          boxShadow: 'var(--shadow-sm)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border)',
          padding: '10px 18px',
          borderRadius: 'var(--radius-md)',
          fontWeight: 500,
        };
      case 'nav':
        return {
          backgroundColor: 'var(--color-accent-light)',
          color: 'var(--color-accent)',
          border: '1px solid var(--color-accent-border)',
          padding: '7px 14px',
          borderRadius: 'var(--radius-full)',
          fontWeight: 600,
          fontSize: '0.85rem',
        };
      case 'minimal':
        return {
          color: 'var(--color-accent)',
          fontWeight: 500,
          padding: '6px 12px',
        };
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Download Danish Qureshi's Resume (${RESUME_CONFIG.filename})`}
      className={`resume-btn resume-btn-${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'all 0.18s ease',
        ...getVariantStyles(),
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{
          transform: downloading ? 'translateY(1px)' : 'none',
          transition: 'transform 0.15s ease',
        }}
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      {!iconOnly && (children || (downloading ? 'Downloading...' : 'Download Resume'))}
    </button>
  );
}
