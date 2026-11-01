import { EXPERIENCES } from '../../data/experience';
import './Experience.css';

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Career History</div>
          <h2 id="experience-heading" className="section-title">
            Engineering Experience
          </h2>
          <p className="section-lead">
            Building backend services, application workflows, and responsive frontend systems.
          </p>
        </div>

        <div className="experience-timeline" role="list">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className={`experience-card ${exp.isCurrent ? 'current' : ''}`}
              role="listitem"
            >
              <div className="experience-card-header">
                <div className="experience-card-title-group">
                  <h3 className="experience-role">
                    <span>{exp.role}</span>
                    {exp.isCurrent && <span className="current-badge">Current Role</span>}
                  </h3>
                  <div className='experience-company-wrapper'>
                    <button className='experience-company' onClick={() => window.open(exp.link?.[0], '_blank')}>
                      {exp.company}
                    </button>
                  </div>
                </div>
                <div className="experience-period">{exp.period}</div>
              </div>

              <p className="experience-summary">{exp.summary}</p>


              <div className="experience-contributions">
                {exp.contributions.map((contribution, idx) => (
                  <div key={idx} className="contribution-item">
                    {contribution}
                  </div>
                ))}
              </div>

              <div className="experience-tech-list" aria-label={`Technologies used at ${exp.company}`}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
