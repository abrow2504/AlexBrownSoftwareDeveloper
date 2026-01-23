import './NavBar.css'
import { useTheme } from '../ThemeContext'
import { useScreenSize } from '../hooks/useScreenSize'
import { useNavigation } from '../NavigationContext'

type SectionId = 'hero' | 'about' | 'whatsnext' | 'skills' | 'projects' | 'insights' | 'contact'

const NAV_LINKS = [
  { label: 'About', section: 'about' as SectionId },
  { label: 'Skills', section: 'skills' as SectionId },
  { label: 'Projects', section: 'projects' as SectionId },
  { label: "What's Next", section: 'whatsnext' as SectionId },
  { label: 'Insights', section: 'insights' as SectionId },
  { label: 'Contact', section: 'contact' as SectionId },
]

export default function NavBar() {
  const { isDarkMode, toggleTheme } = useTheme()
  const { isMobile } = useScreenSize()
  const { navigateToHome, navigateToSection } = useNavigation()

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-container">
          {!isMobile && (
            <button 
              className="nav-title-btn"
              onClick={navigateToHome}
            >
              <h1 className="nav-title">Alex Brown</h1>
            </button>
          )}
          <div className="nav-right">
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.section}>
                  <button
                    className="nav-link"
                    onClick={() => navigateToSection(l.section)}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}