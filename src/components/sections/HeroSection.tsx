import mePhoto from '../../assets/me.png'
import { useScreenSize } from '../../hooks/useScreenSize'

interface HeroSectionProps {
  onViewWork: () => void
}

function downloadResume() {
  const link = document.createElement('a')
  link.href = '/AlexBrownSoftwareDeveloper/Alex_Brown_Resume_2026.pdf'
  link.download = 'Alex_Brown_Resume_2026.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function HeroSection({ onViewWork }: HeroSectionProps) {
  const { isMobile } = useScreenSize()

  return (
    <section id="hero" className={`hero ${isMobile ? 'hero-mobile' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello world!</p>
            <h1>I'm Alex Brown</h1>
            <h2>Software Engineer (Frontend / Automation)</h2>
            <p>Passionate about workplace automation, frontend development, and creating scalable technical solutions that improve operational efficiency.</p>
            <div className="hero-buttons">
              <button onClick={onViewWork} className="btn btn-primary">View My Work</button>
              <button onClick={downloadResume} className="btn btn-primary">Download My Resume</button>
            </div>
          </div>
          <div className="hero-photo">
            <img src={mePhoto} alt="Alex Brown" className="profile-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
