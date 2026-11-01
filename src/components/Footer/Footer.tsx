import './Footer.css';

interface FooterProps {
  onTriggerExitIntent: () => void;
}

export function Footer({ onTriggerExitIntent }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-name">Danish Qureshi</div>
          <div className="footer-copyright">
            © {currentYear} Danish Qureshi. Built with React &amp; TypeScript.
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a
              href="https://github.com/danishq"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/danishqureshi08"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a href="mailto:dqureshi08@gmail.com" className="footer-link">
              Email
            </a>
          </div>

          <button
            type="button"
            className="footer-dev-trigger"
            onClick={onTriggerExitIntent}
            title="Preview the Exit-Intent Modal"
            aria-label="Test exit intent popup modal"
          >
            ✦ Preview Exit Card
          </button>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={handleScrollToTop}
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
