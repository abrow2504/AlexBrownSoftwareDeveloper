

interface ProjectCardProps {
  projectName: string
  projectTech: string
  projectDescription: string
  onViewDetails: () => void
  repoLink?: string
  projectWriteup?: string
  projectImage?: string
}

export default function ProjectCard({ projectName, projectTech, projectDescription, onViewDetails, repoLink, projectWriteup, projectImage }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      <div className="project-tech">
        <strong>Technologies:</strong> {projectTech}
      </div>
      <div className="project-links">
        <button className="btn" onClick={onViewDetails}>View Details</button>
        {repoLink && (
          <a href={repoLink} className="btn" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        )}
      </div>
      {projectImage ? (
        <div className="project-image">
          <img src={projectImage} alt={`${projectName} preview`} />
        </div>
      ) : projectWriteup ? (
        <div className="project-writeup">
          <h4>Project Process</h4>
          <p>{projectWriteup}</p>
        </div>
      ) : null}
    </div>
  )
}