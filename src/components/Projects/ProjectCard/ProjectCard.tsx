import { Project } from "../projects.data";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Map status to display label + color class
  const statusConfig = {
    deployed: { label: "DEPLOYED", className: "status-active" },
    live: { label: "LIVE", className: "status-active" },
    building: { label: "CURRENTLY BUILDING", className: "status-building" },
    archived: { label: "ARCHIVED", className: "status-archived" },
  };

  const status = statusConfig[project.status];
  const isBuilding = project.status === "building";

  return (
    <article
      className={`project-card ${isBuilding ? "project-card-building" : ""}`}
    >
      <div className="project-card-meta-row">
        <div className="project-card-meta-left">
          <span className="project-card-number">{project.number}</span>
          <span className={`project-card-status ${status.className}`}>
            <span className="status-dot"></span>
            {status.label}
          </span>
        </div>
        <span className="project-card-year">{project.year}</span>
      </div>

      <h3 className="project-card-title">
        {project.title}
        {project.titlePunctuation && (
          <span className="title-punctuation">{project.titlePunctuation}</span>
        )}
      </h3>
      <p className="project-card-subtitle">{project.subtitle}</p>

      <p className="project-card-description">{project.description}</p>

      <div className="project-card-tech">
        <div className="tech-block">
          <div className="tech-label">— STACK</div>
          {project.stack.map((item, i) => (
            <div key={i} className="tech-value">
              {item}
            </div>
          ))}
        </div>
        <div className="tech-block">
          <div className="tech-label">— ROLE</div>
          <div className="tech-value">{project.role}</div>
        </div>
      </div>

      {project.links.length > 0 && (
        <div className="project-card-links">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-link-pill ${link.primary ? "pill-primary" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
