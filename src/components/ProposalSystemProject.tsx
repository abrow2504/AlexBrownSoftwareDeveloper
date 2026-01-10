import './ProjectDetail.css'

function ProposalSystemProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>Portfolio Proposal System</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            A comprehensive Power Apps solution for managing portfolio proposals with custom forms,
            multi-tier approval workflows, and integrated reporting capabilities. This system streamlines
            the entire proposal lifecycle from submission through approval and execution.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">Power Apps</span>
            <span className="tech-tag">SharePoint</span>
            <span className="tech-tag">Power Automate</span>
            <span className="tech-tag">Power BI</span>
            <span className="tech-tag">Dataverse</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>Project managers, portfolio managers, and executive stakeholders involved in proposal development, review, and approval processes.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            Portfolio proposal management was fragmented across multiple systems and manual processes.
            Tracking proposal status, managing approvals, and generating reports required significant
            manual effort. Stakeholders lacked visibility into proposal pipelines, and the approval
            process was inconsistent and time-consuming.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Plan/Approach</h3>
          <p>
            Built a unified platform that combines Power Apps for the user interface, SharePoint
            for document management, Power Automate for workflow automation, and Power BI for
            reporting and analytics. The solution provides end-to-end proposal management with
            consistent processes and real-time visibility.
          </p>

          <h3>System Architecture</h3>
          <ul>
            <li><strong>User Interface:</strong> Custom Power Apps canvas app with responsive design</li>
            <li><strong>Data Storage:</strong> SharePoint lists and Dataverse for structured data</li>
            <li><strong>Workflow Engine:</strong> Power Automate for approval routing and notifications</li>
            <li><strong>Document Management:</strong> SharePoint document libraries with version control</li>
            <li><strong>Reporting:</strong> Power BI dashboards for portfolio analytics</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Dynamic proposal forms with conditional fields based on proposal type</li>
            <li>Multi-tier approval workflows with parallel and sequential routing</li>
            <li>Document upload and version control for proposal artifacts</li>
            <li>Real-time status tracking and progress visualization</li>
            <li>Automated notifications and deadline reminders</li>
            <li>Integration with project management systems</li>
            <li>Comprehensive reporting and analytics dashboard</li>
            <li>Mobile-responsive design for field access</li>
          </ul>

          <h3>Workflow Complexity</h3>
          <p>
            The approval system handles complex scenarios including:
          </p>
          <ul>
            <li>Budget-based routing (different thresholds require different approval levels)</li>
            <li>Department-specific requirements and compliance checks</li>
            <li>Parallel approvals for cross-functional review</li>
            <li>Escalation protocols for overdue approvals</li>
            <li>Conditional approvals based on risk assessment scores</li>
          </ul>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            The most challenging aspect was designing approval workflows that could handle the
            complex business rules and organizational hierarchies. Power Apps formula language
            for complex conditional logic was initially difficult to master. Integrating multiple
            Microsoft services while maintaining data consistency and user experience was also
            technically demanding.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            I created detailed workflow diagrams and decision trees before implementation.
            I built the solution iteratively, starting with simple workflows and gradually
            adding complexity. Extensive user testing and feedback sessions helped refine
            the user experience. I also studied advanced Power Apps patterns and formula
            techniques through documentation and community resources.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced Power Apps development with complex formulas and data relationships</li>
            <li>Designing scalable approval workflows for enterprise processes</li>
            <li>Integration patterns between Power Platform services</li>
            <li>User experience design for complex business applications</li>
            <li>Data modeling and relationships in Dataverse</li>
            <li>Building responsive canvas apps for various device types</li>
            <li>Creating effective Power BI reports for business stakeholders</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Business Impact</h2>
          <p>
            The Portfolio Proposal System has transformed how proposals are managed, providing
            transparency, efficiency, and consistency across the organization. The integrated
            reporting capabilities have improved decision-making and resource allocation.
          </p>

          <h3>Measurable Results</h3>
          <ul>
            <li>60% reduction in proposal processing time</li>
            <li>Improved approval consistency across departments</li>
            <li>Real-time visibility into $50M+ proposal pipeline</li>
            <li>Enhanced stakeholder communication and collaboration</li>
            <li>Comprehensive audit trail for compliance reporting</li>
          </ul>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
        </div>
      </div>
    </div>
  )
}

export default ProposalSystemProject