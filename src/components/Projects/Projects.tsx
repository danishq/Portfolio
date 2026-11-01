import { PROJECTS } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Featured Work</div>
          <h2 id="projects-heading" className="section-title">
            Engineered Systems & Tooling
          </h2>
          <p className="section-lead">
            Production-focused integrations, backend services, and multi-repository developer infrastructure.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
