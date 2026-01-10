import ProjectPage from './ProjectPage'

function ProposalSystemProject() {
  return (
    <ProjectPage
      projectTitle="Portfolio Proposal System"
      projectOverview="A comprehensive Power Apps solution for managing portfolio proposals with custom forms, multi-tier approval workflows, and integrated reporting capabilities. This system streamlines the entire proposal lifecycle from submission through approval and execution."
      techStack={["Power Apps", "SharePoint", "Power Automate", "Power BI", "Dataverse"]}
      context={{
        forWho: "Project managers, portfolio managers, and executive stakeholders involved in proposal development, review, and approval processes.",
        problemToSolve: "Portfolio proposal management was fragmented across multiple systems and manual processes. Tracking proposal status, managing approvals, and generating reports required significant manual effort. Stakeholders lacked visibility into proposal pipelines, and the approval process was inconsistent and time-consuming."
      }}
      solution={{
        approach: "Built a unified platform that combines Power Apps for the user interface, SharePoint for document management, Power Automate for workflow automation, and Power BI for reporting and analytics. The solution provides end-to-end proposal management with consistent processes and real-time visibility.",
        keyFeatures: [
          "Dynamic proposal forms with conditional fields based on proposal type",
          "Multi-tier approval workflows with parallel and sequential routing",
          "Document upload and version control for proposal artifacts",
          "Real-time status tracking and progress visualization",
          "Automated notifications and deadline reminders",
          "Integration with project management systems",
          "Comprehensive reporting and analytics dashboard",
          "Mobile-responsive design for field access",
          "Budget-based routing with different approval thresholds",
          "Escalation protocols for overdue approvals"
        ]
      }}
      challenges={{
        difficulties: "The most challenging aspect was designing approval workflows that could handle the complex business rules and organizational hierarchies. Power Apps formula language for complex conditional logic was initially difficult to master. Integrating multiple Microsoft services while maintaining data consistency and user experience was also technically demanding.",
        resolutions: "I created detailed workflow diagrams and decision trees before implementation. I built the solution iteratively, starting with simple workflows and gradually adding complexity. Extensive user testing and feedback sessions helped refine the user experience. I also studied advanced Power Apps patterns and formula techniques through documentation and community resources.",
        lessonsLearned: [
          "Advanced Power Apps development with complex formulas and data relationships",
          "Designing scalable approval workflows for enterprise processes",
          "Integration patterns between Power Platform services",
          "User experience design for complex business applications",
          "Data modeling and relationships in Dataverse",
          "Building responsive canvas apps for various device types",
          "Creating effective Power BI reports for business stakeholders"
        ]
      }}
      impact={{
        results: "The Portfolio Proposal System has transformed how proposals are managed, providing transparency, efficiency, and consistency across the organization. The integrated reporting capabilities have improved decision-making and resource allocation.",
        measurableOutcomes: [
          "60% reduction in proposal processing time",
          "Improved approval consistency across departments",
          "Real-time visibility into $50M+ proposal pipeline",
          "Enhanced stakeholder communication and collaboration",
          "Comprehensive audit trail for compliance reporting"
        ]
      }}
    />
  )
}

export default ProposalSystemProject