import { useState } from 'react'
import './App.css'
import mePhoto from './assets/me.png'
import { NavigationProvider } from './NavigationContext'
import { useScreenSize } from './hooks/useScreenSize'
import TravelTrackingProject from './components/ProjectPages/TravelTrackingProject'
import MoodGardenProject from './components/ProjectPages/MoodGardenProject'
import DOE417Project from './components/ProjectPages/DOE417Project'
import TravelSystemProject from './components/ProjectPages/TravelSystemProject'
import CalendarAutomationProject from './components/ProjectPages/CalendarAutomationProject'
import ProposalSystemProject from './components/ProjectPages/ProposalSystemProject'
import ConcertFinderProject from './components/ProjectPages/ConcertFinderProject'
import AILearningProject from './components/ProjectPages/AILearningProject'
import ProjectCard from './components/projectCard'
import NavBar from './components/NavBar'

type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact'

const SECTIONS: Record<SectionId, string> = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
}

function scrollToSection(sectionId: SectionId): void {
  const el = document.getElementById(SECTIONS[sectionId])
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  const [currentView, setCurrentView] = useState('home')
  const { isMobile } = useScreenSize()

  const navigationValue = {
    navigateToHome: () => setCurrentView('home'),
    navigateToProjects: () => {
      setCurrentView('home')
      setTimeout(() => {
        scrollToSection('projects')
      }, 100)
    },
    navigateToSection: (section: SectionId) => {
      setCurrentView('home')
      setTimeout(() => {
        scrollToSection(section)
      }, 100)
    }
  }

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
      <NavigationProvider value={navigationValue}>
        <div className="app">
          {renderView()}
        </div>
      </NavigationProvider>
    )
  }

  return (
    <NavigationProvider value={navigationValue}>
      <div className="app">
        <NavBar />
        <main>
          <section id="hero" className={`hero ${isMobile ? 'hero-mobile' : ''}`}>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Hi, I'm Alex Brown</h1>
                <h2>Software Engineer (Frontend / Automation)</h2>
                <p>Passionate about workplace automation, frontend development, and creating scalable technical solutions that improve operational efficiency.</p>
                <button onClick={() => scrollToSection('projects')} className="btn">View My Work</button>
              </div>
              <div className="hero-photo">
                <img src={mePhoto} alt="Alex Brown" className="profile-photo" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I never imagined myself in tech. I always saw my future in the arts or writing—anything creative felt like home. 
              But life had other plans. My journey into software development began unexpectedly at Pacific Northwest National Laboratory (PNNL), 
              where I started as an Administrative Coordinator supporting the Research Computing Division.
            </p>
            <p>
              Surrounded by brilliant software engineers, I watched them solve real problems with code and became curious. 
              I started exploring low-code platforms like Microsoft Power Apps and Power Automate to automate tedious administrative tasks. 
              What began as curiosity about "how does this work?" turned into hours of YouTube tutorials and hands-on experimentation. 
              With encouragement from my managers, peers, and my partner, I took a leap into something completely new and foreign to me.
            </p>
            <p>
              And I fell in love with it. Software development feels like actual magic to me—creating something out of nothing. 
              Nearly four years later, I've progressed from administrative coordination to delivering production software solutions 
              and earning a Bachelor's Degree in Software Engineering from WGU. Now I want to make magic every day.
            </p>
            <p>
              I love the intersection of technical problem-solving and user experience design, whether I'm building end-to-end 
              Power Platform solutions for operational efficiency or writing Cypress tests to ensure application reliability.
            </p>
            <p>
              When I'm not coding, you'll find me as a self-identified "indoorsy" person diving into fantasy and horror novels, 
              binge-watching anime, creating digital art, painting, drawing, and most of all, playing PC video games.
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
                            <ProjectCard
                projectName="Connected Travel System"
                projectTech="Power Automate, SharePoint, Microsoft Forms, Email Integration"
                projectDescription="A comprehensive Power Automate solution for managing complex travel requests and approvals across multiple organizational units."
                onViewDetails={() => setCurrentView('travel-system')}
                repoLink="#"
                projectWriteup="Highly popular automation system used by administrators across various PNNL organizations. Streamlines the entire travel lifecycle from request to completion with automated notifications and status tracking."
              />
              <ProjectCard
                projectName="Mood Garden"
                projectTech="React, TypeScript, Firebase Auth, OpenAI API, Firestore, Vite, Express, CSS Animations"
                projectDescription="A personal React/TypeScript web app that combines mood tracking with AI-generated insights and cute spooky illustrations."
                onViewDetails={() => setCurrentView('mood-garden')}
                repoLink="#"
                projectWriteup="Built right after graduation as a creative outlet combining my love for art and technology. Features Firebase authentication, AI-powered mood insights, and hand-drawn spooky illustrations with smooth animations."
              />
              <ProjectCard
                projectName="DOE417 Frontend & Testing"
                projectTech="React, TypeScript, Cypress, HTML, CSS, REST APIs"
                projectDescription="Comprehensive frontend development and test automation for a DOE compliance application, progressing from QA to full feature development."
                onViewDetails={() => setCurrentView('doe417')}
                repoLink="#"
                projectWriteup="Started with Cypress end-to-end test automation, then progressed to HTML/CSS improvements, and finally delivered complete user-facing features with form submissions and API integration."
              />

              <ProjectCard
                projectName="Division Calendar Automation"
                projectTech="Power Automate, HTTP APIs, Microsoft Graph, SharePoint"
                projectDescription="Advanced Power Automate workflow using HTTP calls and custom integrations for automated calendar management and notifications."
                onViewDetails={() => setCurrentView('calendar-automation')}
                repoLink="#"
                projectWriteup="Complex workflow designed to automate calendar management tasks across departments. Uses HTTP calls to integrate with external systems and provides real-time updates through email notifications."
              />
              <ProjectCard
                projectName="Proposal Management System"
                projectTech="Power Apps, Power Automate, SharePoint, Microsoft Forms"
                projectDescription="A Power Apps solution for managing portfolio proposals with custom forms, approval workflows, and status tracking."
                onViewDetails={() => setCurrentView('proposal-system')}
                repoLink="#"
                projectWriteup="Streamlines the entire proposal process from submission to approval. Features custom Power Apps interfaces for users and automated workflows for reviewers and approvers."
              />
              <ProjectCard
                projectName="US Concert Finder"
                projectTech="Technologies:</strong> Python, Selenium, GitHub Actions, iOS Notifications, Email APIs"
                projectDescription="A Python automation script that monitors a concert website and sends instant notifications when new US dates are announced."
                onViewDetails={() => setCurrentView('concert-finder')}
                repoLink="#"
                projectWriteup="Personal project that runs automatically every 10 minutes on GitHub Actions, scraping concert websites for new US tour dates and delivering instant notifications via iOS and email."
              />
              <ProjectCard
                projectName="AI Learning Approach"
                projectTech="ChatGPT, GitHub Copilot, Claude, Various AI Coding Assistants"
                projectDescription="A comprehensive methodology for leveraging AI tools to accelerate software development learning and problem-solving."
                onViewDetails={() => setCurrentView('ai-learning')}
                repoLink="#"
                projectWriteup="Documented approach to using AI tools effectively for learning new technologies, debugging, code review, and accelerating development workflows while maintaining code quality and understanding."
              />  

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
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/albrown0605/" target="_blank">https://www.linkedin.com/in/albrown0605/</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/abrow2504/" target="_blank">github.com/abrow2504</a></p>
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
    </NavigationProvider>
  )
}

export default App
