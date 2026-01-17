import NavBar from '../components/NavBar'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import WhatsNextSection from '../components/sections/WhatsNextSection'
import ContactSection from '../components/sections/ContactSection'

interface HomePageProps {
  onViewWork: () => void
  onProjectClick: (projectId: string) => void
}

export default function HomePage({ onViewWork, onProjectClick }: HomePageProps) {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection onViewWork={onViewWork} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onProjectClick={onProjectClick} />
        <WhatsNextSection />
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
