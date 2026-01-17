export default function SkillsSection() {
  return (
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
  )
}
