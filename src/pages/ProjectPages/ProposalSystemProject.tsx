import ProjectTemplate from './ProjectTemplate'

function ProposalSystemProject() {
  return (
    <ProjectTemplate
      projectTitle="Research Computing Portfolio Proposal System"
      projectOverview="A SharePoint and Power Automate-based workflow system that manages the complete lifecycle of Research Computing portfolio proposals from initial submission through final approval and Work Package Number (WPN) generation. The system automates multi-tier approvals, notifications, and status tracking for research computing project proposals."
      techStack={["SharePoint", "Power Apps", "Power Automate"]}
      context={{
        forWho: "Research Computing division stakeholders including Offering Leads (proposal submitters), Capability Leads (group leads), Division Directors, Portfolio Managers, and RC Admins who manage the proposal review process.",
        problemToSolve: "The division needed a structured, automated system to manage research computing portfolio proposals through a complex approval process. Without standardization, proposals lacked consistent review criteria, stakeholders missed notifications, approval status was unclear, and tracking proposals from submission to Work Package Number assignment was manual and error-prone."
      }}
      solution={{
        approach: "Designed and implemented an integrated SharePoint and Power Automate solution with custom Power Apps forms. The system uses SharePoint lists as the data repository, Power Automate for automated workflows and notifications, and a custom Power Apps form for user interactions. Role-based permissions ensure proper access control while automated workflows handle state transitions and stakeholder communications.",
        keyFeatures: [
          "Multi-tier approval workflow: Capability Lead → Division Director → Leadership Team Review",
          "Automated email notifications sent from shared rc.admins@pnnl.gov address to all stakeholders",
          "Dynamic status tracking through 8 lifecycle states (Pending Pre-Approval, Draft, Ready for Review, Pending RC GL Review, Approved, Declined, WPN Issued, Hold, Needs Revision)",
          "Custom Power Apps form with tabbed interface (Overview, Details, Risks, Approvals)",
          "Built-in SharePoint commenting system for reviewer feedback and collaboration",
          "Role-based access control via Portfolio Process Roles list",
          "Automatic approver assignment based on capability area",
          "Conditional workflow logic that restarts pre-approval if revisions requested early in process",
          "Save as Draft functionality for offering leads to work incrementally",
          "Complete audit trail of all approval decisions and status changes",
          "Work Package Number (WPN) tracking and assignment workflow",
          "Comprehensive technical runbooks for both end users (Offering Leads, approvers) and Power Platform developers with detailed troubleshooting procedures and workflow architecture"
        ]
      }}
      challenges={{
        difficulties: "The primary challenge was designing approval workflows that could handle complex conditional logic—specifically, determining when to restart the pre-approval cycle versus proceeding to leadership review based on the revision point in the lifecycle. Ensuring email notifications reached the right stakeholders at the right time required careful Power Automate flow design. Managing user expectations around the asynchronous nature of approval processes was also challenging.",
        resolutions: "I created detailed workflow diagrams mapping all possible state transitions and decision points before building the Power Automate flows. I implemented status-based conditional logic to track whether proposals had completed pre-approval, enabling the system to intelligently route revision requests. For notifications, I standardized email templates that included proposal details, current status, required actions, and direct links to SharePoint items. User testing with actual stakeholders revealed pain points that led to UX improvements like clearer button labeling and the addition of the 'Save as Draft' feature.",
        lessonsLearned: [
          "Power Automate workflow design for complex business processes with multiple decision branches",
          "SharePoint list architecture and custom column configuration for workflow-driven data",
          "Power Apps form development with conditional visibility and dynamic data validation",
          "Email notification strategy and template design for automated business communications",
          "Role-based security model implementation in SharePoint",
          "User-centered design principles for business process automation",
          "Importance of iterative development and stakeholder feedback in workflow design",
          "Documentation best practices for complex enterprise systems—comprehensive technical runbooks are essential for both end-user adoption and developer maintainability"
        ]
      }}
      impact={{
        results: "The Research Computing Portfolio Proposal System has established a standardized, transparent process for managing research computing proposals. Automated workflows ensure consistent application of approval criteria across all capability areas while automated notifications keep stakeholders informed. Portfolio managers now have clear visibility into the proposal pipeline and can efficiently track items from submission through WPN issuance.",
        measurableOutcomes: [
          "Automated notification system eliminates manual stakeholder communications",
          "Standardized pre-approval process ensures consistent evaluation across all capability areas",
          "Complete audit trail provides transparency and accountability for all approval decisions",
          "Reduced manual tracking burden for portfolio managers through automated status updates",
          "Integrated commenting system facilitates clear, documented feedback between reviewers and offering leads",
          "Portfolio managers can efficiently monitor proposal pipeline and escalate delayed approvals",
          "Established foundation for data-driven analysis of proposal trends and outcomes"
        ]
      }}
    />
  )
}

export default ProposalSystemProject