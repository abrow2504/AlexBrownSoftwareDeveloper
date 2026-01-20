import { useParams } from 'react-router-dom'
import AICodingInsightPage from './InsightPages/AICodingInsightPage'

export default function InsightDetailPage() {
  const { insightId } = useParams()

  switch (insightId) {
    case 'ai-coding-approach':
      return <AICodingInsightPage />
    default:
      return <div>Insight not found</div>
  }
}
