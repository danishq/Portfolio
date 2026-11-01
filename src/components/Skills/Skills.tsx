import { SKILL_CATEGORIES } from '../../data/skills';
import './Skills.css';

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Technical Competencies</div>
          <h2 id="skills-heading" className="section-title">
            Skills & Technology Stack
          </h2>
          <p className="section-lead">
            Categorized technical stack focused on scalable backend systems, robust storage, and maintainable frontends.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="skill-category-card">
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <span className="skill-category-count">{category.skills.length} technologies</span>
              </div>
              <div className="skills-tags-wrap" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
