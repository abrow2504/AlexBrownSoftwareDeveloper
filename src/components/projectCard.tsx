import './ProjectDetail.css'

interface ProjectCardProps {
  projectName: string
  projectTech: string
  projectDescription: string
  onViewDetails: () => void
  repoLink: string
  projectWriteup: string
}

export default function ProjectCard({ projectName, projectTech, projectDescription, onViewDetails, repoLink, projectWriteup }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      <div className="project-tech">
        <strong>Technologies:</strong> {projectTech}
      </div>
      <div className="project-links">
        <button className="btn" onClick={onViewDetails}>View Details</button>
        <a href={repoLink} className="btn" target="_blank">GitHub Repo</a>
      </div>
      <div className="project-writeup">
        <h4>Project Process</h4>
        <p>{projectWriteup}</p>
      </div>
    </div>
  )
}