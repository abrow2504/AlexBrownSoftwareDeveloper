import './ProjectDetail.css'

function DOE417Project() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>DOE417 Frontend & Testing</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            Comprehensive frontend development and test automation contributions to a Department of Energy
            compliance application. My role evolved from quality assurance to full-stack feature development,
            demonstrating significant growth in React/TypeScript development skills.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Cypress</span>
            <span className="tech-tag">HTML</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">REST APIs</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>Department of Energy (DOE) compliance officers and regulatory staff who manage environmental compliance reporting and documentation.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            The application needed robust testing infrastructure to ensure reliability for critical compliance
            workflows, plus improved user interfaces for complex form submissions and data management.
            Manual testing was time-consuming and error-prone, while the existing UI was not intuitive
            for non-technical users.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Plan/Approach</h3>
          <p>
            I approached this project with a systematic progression: first establishing quality through
            comprehensive testing, then improving user experience through UI enhancements, and finally
            delivering complete features that integrated frontend, backend, and user workflows.
          </p>

          <h3>Phase 1: Test Automation Foundation</h3>
          <p>
            Built and maintained a comprehensive Cypress end-to-end test suite covering critical user
            journeys and regression scenarios. This established a safety net for future development
            and significantly improved application reliability.
          </p>

          <h3>Phase 2: UI/UX Improvements</h3>
          <p>
            Started with small but impactful HTML/CSS improvements to form layouts, error messaging,
            and visual hierarchy. These changes improved user experience and demonstrated attention
            to detail in frontend development.
          </p>

          <h3>Phase 3: Full Feature Development</h3>
          <p>
            Progressed to delivering complete user-facing features including:
          </p>
          <ul>
            <li>Complex multi-step dialog systems for compliance workflows</li>
            <li>Dynamic form generation based on regulatory requirements</li>
            <li>Real-time validation and error handling</li>
            <li>API integration for data submission and retrieval</li>
            <li>State management for complex user interactions</li>
            <li>Responsive design for various device types</li>
          </ul>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            The most challenging aspect was transitioning from testing and small fixes to delivering
            full features. Understanding the complex business logic, managing state across multiple
            components, and ensuring proper error handling for critical compliance workflows required
            deep learning. API integration was particularly tricky due to the sensitive nature of
            compliance data and strict validation requirements.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            I invested significant time in code review and pair programming with senior developers
            to understand the application's architecture. I created detailed documentation of API
            endpoints and data flows. Extensive testing with various edge cases and user scenarios
            helped identify and resolve integration issues. Regular feedback sessions with stakeholders
            ensured the features met actual user needs.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced React patterns including complex state management and component composition</li>
            <li>Cypress testing strategies for enterprise applications</li>
            <li>API integration patterns and error handling for critical systems</li>
            <li>Progressive enhancement from QA to full development responsibilities</li>
            <li>Working with regulatory compliance requirements and data sensitivity</li>
            <li>Balancing technical implementation with user experience in complex workflows</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Business Impact</h2>
          <p>
            The comprehensive test suite reduced regression bugs by 70% and increased development
            velocity. UI improvements enhanced user satisfaction scores, while the new features
            streamlined compliance workflows, reducing processing time for regulatory submissions.
            My progression from testing to feature development demonstrated significant professional
            growth and opened doors to more complex development opportunities.
          </p>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
        </div>
      </div>
    </div>
  )
}

export default DOE417Project