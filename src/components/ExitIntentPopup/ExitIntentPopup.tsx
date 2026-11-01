import { useEffect, useRef, useState } from 'react';
import { useEngagementTimer } from '../../hooks/useEngagementTimer';
import { downloadResumeFile, RESUME_CONFIG } from '../../data/resume';
import './ExitIntentPopup.css';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (message: string) => void;
}

export function ExitIntentPopup({ isOpen, onClose, onCopySuccess }: ExitIntentPopupProps) {
  const { formattedDuration } = useEngagementTimer();
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const email = 'dqureshi08@gmail.com';

  // Handle focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (firstElement) {
      firstElement.focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);
    return () => window.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      onCopySuccess('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onCopySuccess('Failed to copy. Please manually copy dqureshi08@gmail.com');
    }
  };

  const handleDownloadResume = async () => {
    await downloadResumeFile();
  };

  return (
    <div
      className="exit-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="exit-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
        aria-describedby="exit-modal-desc"
      >
        <button
          type="button"
          className="exit-close-btn"
          onClick={onClose}
          aria-label="Close modal and continue browsing"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="exit-header">
          <div className="exit-eyebrow-row">
            <span className="exit-label">✦ Before You Go</span>
            <span className="exit-timer">
              You've spent {formattedDuration} exploring this portfolio!
            </span>
          </div>

          <h2 id="exit-modal-title" className="exit-heading">
            I hope I kept you engaged with the work.
          </h2>

          <p id="exit-modal-desc" className="exit-supporting-text">
            Before you close this tab, grab a copy of my resume or get in touch.
          </p>
        </div>

        <div className="exit-cards-grid">
          {/* Card 1: Direct Email */}
          <div className="exit-action-card">
            <div className="exit-card-info">
              <div className="exit-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="exit-card-title">Copy Direct Email</div>
                <div className="exit-card-value">{email}</div>
              </div>
            </div>
            <button
              type="button"
              className="exit-btn-action exit-btn-copy"
              onClick={handleCopyEmail}
              aria-label="Copy direct email address"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: Resume Download */}
          <div className="exit-action-card">
            <div className="exit-card-info">
              <div className="exit-card-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <div className="exit-card-title">My Resume</div>
                <div className="exit-card-value">{RESUME_CONFIG.filename}</div>
              </div>
            </div>
            <button
              type="button"
              className="exit-btn-action exit-btn-download"
              onClick={handleDownloadResume}
              aria-label="Download Danish Qureshi's Resume"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="exit-social-row">
          <span className="exit-social-label">Connect:</span>
          <div className="exit-social-links">
            <a
              href="https://linkedin.com/in/danishqureshi08"
              target="_blank"
              rel="noopener noreferrer"
              className="exit-social-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/danishq"
              target="_blank"
              rel="noopener noreferrer"
              className="exit-social-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        <div className="exit-footer">
          <span className="exit-footer-message">Thank you for taking the time to review my work.</span>
          <button type="button" className="exit-btn-continue" onClick={onClose}>
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
