import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './styles/shared/animations.css'
import './styles/shared/buttons.css'
import './styles/shared/cards.css'
import './styles/shared/section-headers.css'
import './styles/layout/app.css'
import './styles/layout/responsive.css'
import { NavigationProvider } from './NavigationContext'
import HomePage from './pages/HomePage'
import ProjectRouter from './pages/ProjectRouter'
import InsightDetailPage from './pages/InsightDetailPage'

type SectionId = 'hero' | 'about' | 'whatsnext' | 'skills' | 'projects' | 'insights' | 'contact'

const SECTIONS: Record<SectionId, string> = {
  hero: 'hero',
  about: 'about',
  whatsnext: 'whatsnext',
  skills: 'skills',
  projects: 'projects',
  insights: 'insights',
  contact: 'contact',
}

function scrollToSection(sectionId: SectionId): void {
  const el = document.getElementById(SECTIONS[sectionId])
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function AppContent() {
  const navigate = useNavigate()

  const navigationValue = {
    navigateToHome: () => navigate('/'),
    navigateToProjects: () => {
      navigate('/')
      setTimeout(() => {
        scrollToSection('projects')
      }, 100)
    },
    navigateToInsights: () => {
      navigate('/')
      setTimeout(() => {
        scrollToSection('insights')
      }, 100)
    },
    navigateToSection: (section: SectionId) => {
      navigate('/')
      setTimeout(() => {
        scrollToSection(section)
      }, 100)
    }
  }

  return (
    <NavigationProvider value={navigationValue}>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onViewWork={() => scrollToSection('projects')}
                onProjectClick={(projectId) => navigate(`/project/${projectId}`)}
                onInsightClick={(insightId) => navigate(`/insight/${insightId}`)}
              />
            } 
          />
          <Route 
            path="/project/:projectId" 
            element={<ProjectRouter />}
          />
          <Route 
            path="/insight/:insightId" 
            element={<InsightDetailPage />}
          />
        </Routes>
      </div>
    </NavigationProvider>
  )
}

function App() {
  return (
    <Router basename="/AlexBrownSoftwareDeveloper">
      <AppContent />
    </Router>
  )
}

export default App
