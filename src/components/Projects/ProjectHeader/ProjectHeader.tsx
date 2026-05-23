import './ProjectHeader.css'

export default function ProjectHeader() {
  return (
    <div className="project-header">
      <div className="project-header-text">
        <div className="project-header-label">— CHAPTER III</div>
        <h2 className="project-header-title">
          Selected <span className="title-italic">works.</span>
        </h2>
      </div>

      <div className="project-header-meta">
        <div>03 PROJECTS</div>
        <div>2024 — 2026</div>
      </div>
    </div>
  )
}