import { useState } from 'react';
import './Contact.css';

interface ContactProps {
  onCopySuccess: (text: string) => void;
}

export function Contact({ onCopySuccess }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const email = 'dqureshi08@gmail.com';

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

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <div className="section-eyebrow">Let's Connect</div>
            <h2 id="contact-heading" className="contact-heading">
              Have a project or opportunity in mind?
            </h2>
            <p className="contact-subtext">
              I'm open to interesting engineering opportunities and technical conversations. Feel free
              to reach out directly via email or connect with me on LinkedIn.
            </p>
          </div>

          <div className="contact-methods">
            {/* Email Card */}
            <div className="contact-method-card">
              <div className="contact-method-top">
                <span className="contact-method-label">Direct Email</span>
                <button
                  type="button"
                  className="contact-action-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy Danish's email address to clipboard"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    {copied ? (
                      <polyline points="20 6 9 17 4 12" />
                    ) : (
                      <>
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </>
                    )}
                  </svg>
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <a href={`mailto:${email}`} className="contact-method-value" title={email}>
                {email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-method-card">
              <div className="contact-method-top">
                <span className="contact-method-label">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/danishqureshi08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-btn"
                  aria-label="Visit Danish's LinkedIn profile"
                >
                  <span>Connect</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <a
                href="https://linkedin.com/in/danishqureshi08"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-value"
                title="LinkedIn Profile"
              >
                in/danishqureshi08
              </a>
            </div>

            {/* GitHub Card */}
            <div className="contact-method-card">
              <div className="contact-method-top">
                <span className="contact-method-label">GitHub</span>
                <a
                  href="https://github.com/danishq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-btn"
                  aria-label="Visit Danish's GitHub profile"
                >
                  <span>Explore</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <a
                href="https://github.com/danishq"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-value"
                title="GitHub Profile"
              >
                github.com/danishq
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
