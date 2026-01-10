import './ProjectDetail.css'

function TravelTrackingProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>Travel Tracking & Communication System</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            A comprehensive travel management solution designed to streamline the complex travel coordination process
            at Pacific Northwest National Laboratory (PNNL). The system handles travel requests from submission through
            approval and execution, with automated status tracking and stakeholder communications.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">SharePoint</span>
            <span className="tech-tag">Power Automate</span>
            <span className="tech-tag">Power Apps</span>
            <span className="tech-tag">Microsoft Forms</span>
          </div>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Solutions</h2>
          <div className="challenge-solution">
            <h3>Complex Approval Workflows</h3>
            <p>
              Travel requests require multiple levels of approval based on destination, duration, and cost.
              <strong>Solution:</strong> Implemented conditional routing in Power Automate that automatically
              determines approval paths and notifies the appropriate managers.
            </p>
          </div>

          <div className="challenge-solution">
            <h3>Real-time Status Communication</h3>
            <p>
              Stakeholders needed timely updates on travel status without constant manual checking.
              <strong>Solution:</strong> Built automated email notifications triggered by status changes,
              keeping all parties informed throughout the travel lifecycle.
            </p>
          </div>
        </div>

        <div className="project-features">
          <h2>Key Features</h2>
          <ul>
            <li>Online travel request forms with validation</li>
            <li>Automated approval routing based on travel parameters</li>
            <li>Real-time status tracking dashboard</li>
            <li>Event-driven email notifications</li>
            <li>Integration with existing PNNL systems</li>
            <li>Mobile-responsive design for on-the-go access</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Business Impact</h2>
          <p>
            The system has significantly reduced administrative overhead in travel coordination, allowing support
            staff to focus on higher-value activities. Travel requesters now have full visibility into their
            request status, reducing follow-up inquiries by approximately 70%.
          </p>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
        </div>
      </div>
    </div>
  )
}

export default TravelTrackingProject