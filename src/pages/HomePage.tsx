import NavBar from '../components/NavBar'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import InsightsSection from '../components/sections/InsightsSection'
import WhatsNextSection from '../components/sections/WhatsNextSection'
import ContactSection from '../components/sections/ContactSection'
import CursorSpotlight from '../components/CursorSpotlight'

interface HomePageProps {
  onViewWork: () => void
  onProjectClick: (projectId: string) => void
  onInsightClick: (insightId: string) => void
}

export default function HomePage({ onViewWork, onProjectClick, onInsightClick }: HomePageProps) {
  return (
    <>
      <CursorSpotlight />
      <NavBar />
      <main>
        <HeroSection onViewWork={onViewWork} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onProjectClick={onProjectClick} />
        <WhatsNextSection />
        <InsightsSection onInsightClick={onInsightClick} />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Alex Brown. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
