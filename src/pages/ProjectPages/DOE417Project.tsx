import ProjectPage from './ProjectPage'

function DOE417Project() {
  return (
    <ProjectPage
      projectTitle="DOE417 Frontend & Testing"
      projectOverview="Comprehensive frontend development and test automation contributions to a Department of Energy compliance application. My role evolved from quality assurance to full-stack feature development, demonstrating significant growth in React/TypeScript development skills."
      techStack={["React", "TypeScript", "Cypress", "HTML", "CSS", "REST APIs"]}
      context={{
        forWho: "Department of Energy (DOE) compliance officers and regulatory staff who manage environmental compliance reporting and documentation.",
        problemToSolve: "The application needed robust testing infrastructure to ensure reliability for critical compliance workflows, plus improved user interfaces for complex form submissions and data management. Manual testing was time-consuming and error-prone, while the existing UI was not intuitive for non-technical users."
      }}
      solution={{
        approach: "I approached this project with a systematic progression: first establishing quality through comprehensive testing, then improving user experience through UI enhancements, and finally delivering complete features that integrated frontend, backend, and user workflows.",
        keyFeatures: [
          "Comprehensive Cypress end-to-end test suite covering critical user journeys",
          "HTML/CSS improvements to form layouts, error messaging, and visual hierarchy",
          "Complex multi-step dialog systems for compliance workflows",
          "Dynamic form generation based on regulatory requirements",
          "Real-time validation and error handling",
          "API integration for data submission and retrieval",
          "State management for complex user interactions",
          "Responsive design for various device types"
        ]
      }}
      challenges={{
        difficulties: "The most challenging aspect was transitioning from testing and small fixes to delivering full features. Understanding the complex business logic, managing state across multiple components, and ensuring proper error handling for critical compliance workflows required deep learning. API integration was particularly tricky due to the sensitive nature of compliance data and strict validation requirements.",
        resolutions: "I invested significant time in code review and pair programming with senior developers to understand the application's architecture. I created detailed documentation of API endpoints and data flows. Extensive testing with various edge cases and user scenarios helped identify and resolve integration issues. Regular feedback sessions with stakeholders ensured the features met actual user needs.",
        lessonsLearned: [
          "Advanced React patterns including complex state management and component composition",
          "Cypress testing strategies for enterprise applications",
          "API integration patterns and error handling for critical systems",
          "Progressive enhancement from QA to full development responsibilities",
          "Working with regulatory compliance requirements and data sensitivity",
          "Balancing technical implementation with user experience in complex workflows"
        ]
      }}
      impact={{
        results: "The comprehensive test suite reduced regression bugs by 70% and increased development velocity. UI improvements enhanced user satisfaction scores, while the new features streamlined compliance workflows, reducing processing time for regulatory submissions. My progression from testing to feature development demonstrated significant professional growth and opened doors to more complex development opportunities.",
        measurableOutcomes: [
          "70% reduction in regression bugs through test suite",
          "Increased development velocity",
          "Enhanced user satisfaction scores",
          "Reduced processing time for regulatory submissions",
          "Demonstrated professional growth and readiness for advanced responsibilities"
        ]
      }}
    />
  )
}

export default DOE417Project