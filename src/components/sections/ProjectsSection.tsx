import '../projectCard.css'
import ProjectCard from '../projectCard'
import { projects } from '../../data/projectsData'

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="card-section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              projectName={project.name}
              projectTech={project.tech}
              projectDescription={project.description}
              onViewDetails={() => onProjectClick(project.id)}
              repoLink={project.repoLink}
              projectWriteup={project.writeup}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
