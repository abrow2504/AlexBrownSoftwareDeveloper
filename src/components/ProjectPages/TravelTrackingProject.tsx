import ProjectPage from './ProjectPage'

function TravelTrackingProject() {
  return (
    <ProjectPage
      projectTitle="Travel Tracking & Communication System"
      projectOverview="A comprehensive travel management solution designed to streamline the complex travel coordination process at Pacific Northwest National Laboratory (PNNL). The system handles travel requests from submission through approval and execution, with automated status tracking and stakeholder communications."
      techStack={["SharePoint", "Power Automate", "Power Apps", "Microsoft Forms"]}
      context={{
        forWho: "PNNL employees, managers, and support staff involved in travel coordination and management.",
        problemToSolve: "Travel coordination requires managing complex approval workflows, notifying multiple stakeholders, and providing visibility into travel status. The manual process was inefficient and prone to miscommunication, with stakeholders needing constant manual updates about travel request status."
      }}
      solution={{
        approach: "Built an integrated travel management system combining SharePoint for data storage, Power Automate for workflow automation, and Microsoft Forms for data collection. The system provides automated notifications, real-time status tracking, and seamless stakeholder communication throughout the travel lifecycle.",
        keyFeatures: [
          "Online travel request forms with validation",
          "Automated approval routing based on travel parameters",
          "Real-time status tracking dashboard",
          "Event-driven email notifications",
          "Integration with existing PNNL systems",
          "Mobile-responsive design for on-the-go access"
        ]
      }}
      challenges={{
        difficulties: "Complex approval workflows needed to handle various travel scenarios and organizational hierarchies. Real-time status communication required ensuring all stakeholders received timely updates without overwhelming them with notifications. Maintaining data consistency across multiple systems was also a technical challenge.",
        resolutions: "Implemented conditional routing in Power Automate to automatically determine approval paths. Built automated email notifications triggered by specific status changes. Created data validation rules to ensure consistency, and tested extensively with real users to identify and address edge cases.",
        lessonsLearned: [
          "Designing conditional workflows for complex business processes",
          "Implementing effective notification systems without causing notification fatigue",
          "Integrating multiple Microsoft 365 services seamlessly",
          "Creating user-friendly dashboards for status tracking",
          "Managing stakeholder expectations in automated systems",
          "Building scalable solutions that accommodate organizational growth"
        ]
      }}
      impact={{
        results: "The system has significantly reduced administrative overhead in travel coordination, allowing support staff to focus on higher-value activities. Travel requesters now have full visibility into their request status, reducing follow-up inquiries and improving overall satisfaction with the process.",
        measurableOutcomes: [
          "Reduced administrative overhead in travel coordination",
          "70% reduction in follow-up inquiries about travel status",
          "Improved visibility for all stakeholders",
          "Enhanced efficiency in travel management processes"
        ]
      }}
    />
  )
}

export default TravelTrackingProject