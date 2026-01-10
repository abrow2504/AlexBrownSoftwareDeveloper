import ProjectPage from './ProjectPage'

function TravelSystemProject() {
  return (
    <ProjectPage
      projectTitle="Connected Travel System"
      projectOverview="A comprehensive Power Automate solution for managing complex travel requests and approvals across multiple organizational units at PNNL. This system has become widely adopted by administrators across various organizations due to its efficiency and user-friendly design."
      techStack={["Power Automate", "SharePoint", "Microsoft Forms", "Outlook", "Teams"]}
      context={{
        forWho: "PNNL employees, managers, and travel administrators across multiple research divisions and support organizations.",
        problemToSolve: "Travel coordination at a large research institution involves complex approval chains, multiple stakeholders, and strict compliance requirements. The previous manual process was time-consuming, error-prone, and lacked visibility. Travel requests could take weeks to process, and status tracking was difficult for both requesters and approvers."
      }}
      solution={{
        approach: "Designed an end-to-end automated workflow that handles the complete travel lifecycle from initial request through final approval and execution. The system incorporates conditional logic for different travel types, automated notifications, and comprehensive status tracking.",
        keyFeatures: [
          "Dynamic approval routing based on destination, duration, and cost",
          "Automated email notifications to all stakeholders",
          "Real-time status updates and progress tracking",
          "Integration with calendar systems for scheduling",
          "Compliance checking for institutional travel policies",
          "Mobile-responsive design for on-the-go access",
          "Comprehensive audit trail for compliance reporting"
        ]
      }}
      challenges={{
        difficulties: "The most complex aspect was designing conditional approval workflows that could handle the various travel scenarios and organizational hierarchies at PNNL. Coordinating with multiple stakeholders across different departments to understand their specific requirements and approval processes was challenging. Ensuring the system remained flexible enough to accommodate policy changes while maintaining compliance was also difficult.",
        resolutions: "I conducted extensive stakeholder interviews and process mapping sessions to understand the complete travel approval landscape. I created detailed flowcharts and decision trees before implementing the automation. Iterative testing with real users from different departments helped identify edge cases and refine the workflows. I also built in administrative controls that allow authorized users to modify routing rules without developer intervention.",
        lessonsLearned: [
          "Advanced Power Automate workflow design and conditional logic",
          "Stakeholder management and requirements gathering for enterprise systems",
          "Designing scalable automation solutions for complex business processes",
          "Integration patterns between Microsoft 365 services",
          "Change management and user adoption strategies for automated systems",
          "Balancing automation efficiency with human oversight needs"
        ]
      }}
      impact={{
        results: "The Connected Travel System has been adopted by administrators across multiple PNNL organizations and has become a model for other automation initiatives. Travel request processing time has been reduced from weeks to days, with some routine approvals happening automatically. The system has improved transparency and accountability while significantly reducing administrative overhead.",
        measurableOutcomes: [
          "70% reduction in travel request processing time",
          "95% user satisfaction rate among administrators",
          "Adopted by 8+ different PNNL organizations",
          "$50K+ annual savings in administrative time"
        ]
      }}
    />
  )
}

export default TravelSystemProject