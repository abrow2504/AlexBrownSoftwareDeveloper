import './ProjectDetail.css'

function TravelSystemProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>Connected Travel System</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            A comprehensive Power Automate solution for managing complex travel requests and approvals
            across multiple organizational units at PNNL. This system has become widely adopted by
            administrators across various organizations due to its efficiency and user-friendly design.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">Power Automate</span>
            <span className="tech-tag">SharePoint</span>
            <span className="tech-tag">Microsoft Forms</span>
            <span className="tech-tag">Outlook</span>
            <span className="tech-tag">Teams</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>PNNL employees, managers, and travel administrators across multiple research divisions and support organizations.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            Travel coordination at a large research institution involves complex approval chains,
            multiple stakeholders, and strict compliance requirements. The previous manual process
            was time-consuming, error-prone, and lacked visibility. Travel requests could take
            weeks to process, and status tracking was difficult for both requesters and approvers.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Plan/Approach</h3>
          <p>
            Designed an end-to-end automated workflow that handles the complete travel lifecycle
            from initial request through final approval and execution. The system incorporates
            conditional logic for different travel types, automated notifications, and comprehensive
            status tracking.
          </p>

          <h3>System Architecture</h3>
          <ul>
            <li><strong>Request Forms:</strong> Custom SharePoint forms with validation and conditional fields</li>
            <li><strong>Approval Workflows:</strong> Multi-level approval routing based on travel parameters</li>
            <li><strong>Status Tracking:</strong> Real-time dashboard for all stakeholders</li>
            <li><strong>Notifications:</strong> Automated email alerts for status changes and deadlines</li>
            <li><strong>Integration:</strong> Connection with existing PNNL travel and procurement systems</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Dynamic approval routing based on destination, duration, and cost</li>
            <li>Automated email notifications to all stakeholders</li>
            <li>Real-time status updates and progress tracking</li>
            <li>Integration with calendar systems for scheduling</li>
            <li>Compliance checking for institutional travel policies</li>
            <li>Mobile-responsive design for on-the-go access</li>
            <li>Comprehensive audit trail for compliance reporting</li>
          </ul>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            The most complex aspect was designing conditional approval workflows that could handle
            the various travel scenarios and organizational hierarchies at PNNL. Coordinating with
            multiple stakeholders across different departments to understand their specific requirements
            and approval processes was challenging. Ensuring the system remained flexible enough
            to accommodate policy changes while maintaining compliance was also difficult.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            I conducted extensive stakeholder interviews and process mapping sessions to understand
            the complete travel approval landscape. I created detailed flowcharts and decision trees
            before implementing the automation. Iterative testing with real users from different
            departments helped identify edge cases and refine the workflows. I also built in
            administrative controls that allow authorized users to modify routing rules without
            developer intervention.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced Power Automate workflow design and conditional logic</li>
            <li>Stakeholder management and requirements gathering for enterprise systems</li>
            <li>Designing scalable automation solutions for complex business processes</li>
            <li>Integration patterns between Microsoft 365 services</li>
            <li>Change management and user adoption strategies for automated systems</li>
            <li>Balancing automation efficiency with human oversight needs</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Business Impact</h2>
          <p>
            The Connected Travel System has been adopted by administrators across multiple PNNL
            organizations and has become a model for other automation initiatives. Travel request
            processing time has been reduced from weeks to days, with some routine approvals
            happening automatically. The system has improved transparency and accountability
            while significantly reducing administrative overhead.
          </p>

          <h3>Quantitative Results</h3>
          <ul>
            <li>70% reduction in travel request processing time</li>
            <li>95% user satisfaction rate among administrators</li>
            <li>Adopted by 8+ different PNNL organizations</li>
            <li>$50K+ annual savings in administrative time</li>
          </ul>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
        </div>
      </div>
    </div>
  )
}

export default TravelSystemProject