

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
      {projectImage && (
        <div className="project-image-container">
          <img src={projectImage} alt={`${projectName} preview`} className="project-image" />
          {projectWriteup && (
            <div className="project-overlay">
              <div className="project-overlay-content">
                <h4>Project Process</h4>
                <p>{projectWriteup}</p>
              </div>
            </div>
          )}
        </div>
      )}
      {!projectImage && projectWriteup && (
        <div className="project-writeup">
          <h4>Project Process</h4>
          <p>{projectWriteup}</p>
        </div>
      )}
    </div>
  )
}