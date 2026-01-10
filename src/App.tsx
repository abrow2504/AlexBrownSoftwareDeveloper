import { useState } from 'react'
import './App.css'
import TravelTrackingProject from './components/TravelTrackingProject'
import MoodGardenProject from './components/MoodGardenProject'
import DOE417Project from './components/DOE417Project'
import TravelSystemProject from './components/TravelSystemProject'
import CalendarAutomationProject from './components/CalendarAutomationProject'
import ProposalSystemProject from './components/ProposalSystemProject'
import ConcertFinderProject from './components/ConcertFinderProject'
import AILearningProject from './components/AILearningProject'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const renderView = () => {
    switch(currentView) {
      case 'travel-project':
        return <TravelTrackingProject />
      case 'mood-garden':
        return <MoodGardenProject />
      case 'doe417':
        return <DOE417Project />
      case 'travel-system':
        return <TravelSystemProject />
      case 'calendar-automation':
        return <CalendarAutomationProject />
      case 'proposal-system':
        return <ProposalSystemProject />
      case 'concert-finder':
        return <ConcertFinderProject />
      case 'ai-learning':
        return <AILearningProject />
      default:
        return null
    }
  }

  if (currentView !== 'home') {
    return (
      <div className="app">
        {renderView()}
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            <h1 className="nav-title">Alex Brown</h1>
            <ul className="nav-links">
              <li><button onClick={() => setCurrentView('home')} className="nav-link">About</button></li>
              <li><button onClick={() => setCurrentView('home')} className="nav-link">Skills</button></li>
              <li><button onClick={() => setCurrentView('home')} className="nav-link">Projects</button></li>
              <li><button onClick={() => setCurrentView('home')} className="nav-link">Contact</button></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container">
            <h1>Hi, I'm Alex Brown</h1>
            <h2>Software Engineer (Frontend / Automation)</h2>
            <p>Passionate about workplace automation, frontend development, and creating scalable technical solutions that improve operational efficiency.</p>
            <a onClick={() => setCurrentView('home')} className="btn">View My Work</a>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              My journey into software development began in an unexpected place—at Pacific Northwest National Laboratory (PNNL),
              where I started as an Administrative Coordinator. What began as a role supporting research teams evolved into a
              passion for technology when I discovered the power of low and no-code platforms like Microsoft Power Apps and Power Automate.
            </p>
            <p>
              I was inspired by the brilliant software engineers in PNNL's research computing division. Watching them build elegant
              solutions to complex scientific challenges sparked something in me. I started small—automating tedious administrative
              tasks—but soon found myself diving deeper into development. What began as curiosity about "how does this work?"
              turned into late nights learning TypeScript, React, and modern web development practices.
            </p>
            <p>
              Nearly four years later, I've progressed from administrative coordination to delivering production software solutions.
              I love the intersection of technical problem-solving and user experience design, whether I'm building end-to-end
              Power Platform solutions for operational efficiency or writing Cypress tests to ensure application reliability.
            </p>
            <p>
              When I'm not coding, you'll find me as a self-identified "indoorsy" person diving into fantasy and horror novels,
              binge-watching anime, creating digital art, painting, drawing, and crafting, and most of all, playing PC video games.
              These hobbies fuel my creativity and help me unwind after debugging complex workflows or wrestling with stubborn APIs.
            </p>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages & Frameworks</h3>
                <ul>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Microsoft Power Platform</h3>
                <ul>
                  <li>Power Automate</li>
                  <li>Power Apps</li>
                  <li>SharePoint</li>
                  <li>SPFx</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Testing & Tooling</h3>
                <ul>
                  <li>Cypress (E2E testing)</li>
                  <li>REST APIs</li>
                  <li>Git</li>
                  <li>Azure DevOps</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Other Expertise</h3>
                <ul>
                  <li>UI/UX Collaboration</li>
                  <li>Requirements Gathering</li>
                  <li>Technical Documentation</li>
                  <li>Agile & Scrum</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>Mood Garden</h3>
                <p>A personal React/TypeScript web app that combines mood tracking with AI-generated insights and cute spooky illustrations.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> React, TypeScript, Firebase Auth, OpenAI API, Firestore, Vite, Express, CSS Animations
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('mood-garden')}>View Details</button>
                  <a href="#" className="btn" target="_blank">GitHub Repo</a>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>Built right after graduation as a creative outlet combining my love for art and technology. Features Firebase authentication, AI-powered mood insights, and hand-drawn spooky illustrations with smooth animations.</p>
                </div>
              </div>

              <div className="project-card">
                <h3>DOE417 Frontend & Testing</h3>
                <p>Comprehensive frontend development and test automation for a DOE compliance application, progressing from QA to full feature development.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> React, TypeScript, Cypress, HTML, CSS, REST APIs
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('doe417')}>View Details</button>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>Started with Cypress end-to-end test automation, then progressed to HTML/CSS improvements, and finally delivered complete user-facing features with form submissions and API integration.</p>
                </div>
              </div>

              <div className="project-card">
                <h3>Connected Travel System</h3>
                <p>A comprehensive Power Automate solution for managing complex travel requests and approvals across multiple organizational units.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> Power Automate, SharePoint, Microsoft Forms, Email Integration
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('travel-system')}>View Details</button>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>Highly popular automation system used by administrators across various PNNL organizations. Streamlines the entire travel lifecycle from request to completion with automated notifications and status tracking.</p>
                </div>
              </div>

              <div className="project-card">
                <h3>Division Calendar Automation</h3>
                <p>Advanced Power Automate workflow using HTTP calls and custom integrations for automated calendar management and notifications.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> Power Automate, HTTP APIs, Microsoft Graph, SharePoint
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('calendar-automation')}>View Details</button>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>Complex automation that goes beyond built-in actions, utilizing direct HTTP calls to integrate with various systems for comprehensive calendar management and automated notifications.</p>
                </div>
              </div>

              <div className="project-card">
                <h3>Portfolio Proposal System</h3>
                <p>A Power Apps solution for managing portfolio proposals with custom forms, approval workflows, and reporting capabilities.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> Power Apps, SharePoint, Power Automate, Power BI
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('proposal-system')}>View Details</button>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>End-to-end solution for proposal management including custom forms, multi-tier approvals, automated notifications, and integrated reporting dashboards.</p>
                </div>
              </div>

              <div className="project-card">
                <h3>US Concert Date Finder</h3>
                <p>A Python automation script that monitors concert tour websites and sends instant notifications when new US dates are announced.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> Python, Selenium, GitHub Actions, iOS Notifications, Email API
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('concert-finder')}>View Details</button>
                  <a href="#" className="btn" target="_blank">GitHub Repo</a>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>Personal project that runs automatically every 10 minutes on GitHub Actions, scraping concert websites for new US tour dates and delivering instant notifications via iOS and email.</p>
                </div>
              </div>

              <div className="project-card">
                <h3>AI-Assisted Learning Approach</h3>
                <p>A comprehensive methodology for leveraging AI tools to accelerate software development learning and problem-solving.</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> ChatGPT, GitHub Copilot, Claude, Various AI Coding Assistants
                </div>
                <div className="project-links">
                  <button className="btn" onClick={() => setCurrentView('ai-learning')}>View Details</button>
                </div>
                <div className="project-writeup">
                  <h4>Project Process</h4>
                  <p>Documented approach to using AI tools effectively for learning new technologies, debugging, code review, and accelerating development workflows while maintaining code quality and understanding.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <p>I'm always interested in new opportunities and collaborations in software development and workplace automation.</p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:al.brown0605@gmail.com">al.brown0605@gmail.com</a></p>
              <p><strong>Phone:</strong> 801-864-4267</p>
              <p><strong>LinkedIn:</strong> <a href="#" target="_blank">linkedin.com/in/alex-brown</a></p>
              <p><strong>GitHub:</strong> <a href="#" target="_blank">github.com/alexbrown</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Alex Brown. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
