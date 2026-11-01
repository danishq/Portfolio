import './About.css';

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Engineering Focus</div>
          <h2 id="about-heading" className="section-title">
            Understanding how systems fit together
          </h2>
          <p className="section-lead">
            Connecting backend data workflows with maintainable frontend features.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p className="about-lead-text">
              I enjoy working on problems that require understanding how systems fit together — from
              API design and database queries to frontend architecture and third-party integrations.
            </p>
            <p className="about-body-text">
              My experience spans production backend workflows, search and analytics systems,
              application integrations, and React-based interfaces. I focus on clean component
              structure, reliable data flow between services, and practical engineering trade-offs.
            </p>
            <p className="about-body-text">
              Whether writing REST endpoints in Spring Boot, tuning Elasticsearch queries, or
              building modular React components, I prioritize maintainability, correctness, and clarity.
            </p>
          </div>

          <div className="about-focus-cards">
            <div className="focus-card">
              <div className="focus-card-header">
                <div className="focus-card-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <h3 className="focus-card-title">Backend Services &amp; APIs</h3>
              </div>
              <p className="focus-card-desc">
                Developing REST APIs in Java and Spring Boot, implementing JWT authentication,
                and handling webhook integrations and core business workflows.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-card-header">
                <div className="focus-card-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <h3 className="focus-card-title">Databases, Search &amp; CDC</h3>
              </div>
              <p className="focus-card-desc">
                Writing MongoDB queries and filters, configuring Elasticsearch search queries and
                aggregations, and working with Change Data Capture (CDC) pipelines.
              </p>
            </div>

            <div className="focus-card">
              <div className="focus-card-header">
                <div className="focus-card-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="focus-card-title">Frontend Features &amp; Tooling</h3>
              </div>
              <p className="focus-card-desc">
                Building modular React and TypeScript components, developing template builders with
                GrapesJS, and working with browser Service Workers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
