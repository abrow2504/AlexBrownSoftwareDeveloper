import { useParams } from 'react-router-dom'
import MoodGardenProject from './ProjectPages/MoodGardenProject'
import DOE417Project from './ProjectPages/DOE417Project'
import TravelSystemProject from './ProjectPages/TravelSystemProject'
import CalendarAutomationProject from './ProjectPages/CalendarAutomationProject'
import ProposalSystemProject from './ProjectPages/ProposalSystemProject'
import ConcertFinderProject from './ProjectPages/ConcertFinderProject'
import AILearningProject from './ProjectPages/AILearningProject'

const PROJECT_COMPONENTS: Record<string, () => React.ReactElement> = {
  'travel-system': TravelSystemProject,
  'mood-garden': MoodGardenProject,
  'doe417': DOE417Project,
  'calendar-automation': CalendarAutomationProject,
  'proposal-system': ProposalSystemProject,
  'concert-finder': ConcertFinderProject,
  'ai-learning': AILearningProject,
}

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const ProjectComponent = projectId ? PROJECT_COMPONENTS[projectId] : null
  
  if (!ProjectComponent) {
    return null
  }

  return <ProjectComponent />
}
