import ProjectHeader from './ProjectHeader/ProjectHeader'
import ProjectCard from './ProjectCard/ProjectCard'
import { projects } from './projects.data'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <ProjectHeader />
      
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  )
}