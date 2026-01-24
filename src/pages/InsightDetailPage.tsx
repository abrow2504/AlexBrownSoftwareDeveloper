import { useParams } from 'react-router-dom'
import AICodingInsightPage from './InsightPages/AICodingInsightPage'
import AIDocumentationInsightsPage from './InsightPages/AIDocumentationInsightsPage'

export default function InsightDetailPage() {
  const { insightId } = useParams()

  switch (insightId) {
    case 'ai-coding-approach':
      return <AICodingInsightPage />
    case 'ai-automated-documentation':
      return <AIDocumentationInsightsPage />
    default:
      return <div>Insight not found</div>
  }
}
