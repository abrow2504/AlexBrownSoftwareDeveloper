interface InsightCardProps {
  insightTitle: string
  insightCategory: string
  insightDescription: string
  onViewDetails: () => void
}

export default function InsightCard({
  insightTitle,
  insightCategory,
  insightDescription,
  onViewDetails
}: InsightCardProps) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{insightTitle}</h3>
        <span className="project-tech">{insightCategory}</span>
      </div>
      <p className="project-description">{insightDescription}</p>
      <button onClick={onViewDetails} className="btn btn-secondary">
        Read More
      </button>
    </div>
  )
}
