import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { NavigationProvider } from './NavigationContext'
import HomePage from './pages/HomePage'
import ProjectDetailPage from './pages/ProjectDetailPage'

type SectionId = 'hero' | 'about' | 'whatsnext' | 'skills' | 'projects' | 'contact'

const SECTIONS: Record<SectionId, string> = {
  hero: 'hero',
  about: 'about',
  whatsnext: 'whatsnext',
  skills: 'skills',
  projects: 'projects',
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
              />
            } 
          />
          <Route 
            path="/project/:projectId" 
            element={<ProjectDetailPage />}
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
