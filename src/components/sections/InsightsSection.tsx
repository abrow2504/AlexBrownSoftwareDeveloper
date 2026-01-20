import '../projectCard.css'
import InsightCard from '../insightCard'
import { insights } from '../../data/insightsData'

interface InsightsSectionProps {
  onInsightClick: (insightId: string) => void
}

export default function InsightsSection({ onInsightClick }: InsightsSectionProps) {
  return (
    <section id="insights" className="card-section">
      <div className="container">
        <h2>Insights & Writing</h2>
        <p className="section-intro">
          Thoughts on development practices, learning approaches, and technical methodologies
        </p>
        <div className="card-grid">
          {insights.map((insight) => (
            <InsightCard
              key={insight.id}
              insightTitle={insight.title}
              insightCategory={insight.category}
              insightDescription={insight.description}
              onViewDetails={() => onInsightClick(insight.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
