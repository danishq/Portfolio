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
            Bridging production backend reliability with performant, maintainable client-side architecture.
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
              application integrations, and React-based interfaces. I believe software engineering is
              at its best when data flow is predictable, system boundaries are respected, and technical
              trade-offs are evaluated with operational reality in mind.
            </p>
            <p className="about-body-text">
              Whether designing clean REST contracts in Spring Boot, tuning multi-condition Elasticsearch
              filters, or organizing reusable React primitives with strict state separation, I prioritize
              maintainability, correctness, and speed.
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
                <h3 className="focus-card-title">Backend Architecture & APIs</h3>
              </div>
              <p className="focus-card-desc">
                Constructing predictable, type-safe REST APIs in Java and Spring Boot. Implementing stateless
                JWT security, handling webhooks asynchronously, and managing domain lifecycles.
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
                <h3 className="focus-card-title">Query Tuning, Search & CDC</h3>
              </div>
              <p className="focus-card-desc">
                Designing structured document schemas in MongoDB, crafting Elasticsearch aggregation
                pipelines, and leveraging Change Data Capture (CDC) to synchronize datastores.
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
                <h3 className="focus-card-title">Frontend Architecture & Tooling</h3>
              </div>
              <p className="focus-card-desc">
                Structuring React & TypeScript applications with clear single sources of truth. Building
                builder canvas interfaces, native Service Workers, and cross-framework developer integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
