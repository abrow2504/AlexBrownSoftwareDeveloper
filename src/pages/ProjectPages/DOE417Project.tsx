import ProjectTemplate from './ProjectTemplate'
import DOE417home from '/doe417/DOE417home.png'

const galleryImages = [
    {
    original: DOE417home,
    thumbnail: DOE417home,
    description: 'DOE-417 Landing Page',
    originalWidth: 1655,
    originalHeight: 418
  }
]


function DOE417Project() {
  return (
    <ProjectTemplate
      projectTitle="DOE-417 Form Reporting System"
        projectOverview="I am actively developing the Electric Emergency Incident and Disturbance Report (Form DOE-417) system. This critical application collects information on electric incidents and emergencies for the Department of Energy's national security and energy emergency management responsibilities. My current work focuses on admin interfaces, testing infrastructure, API updates, and UI improvements."
      techStack={["React", "TypeScript", "Cypress", "CosmosDB", "HTML", "CSS", "REST APIs"]}
      context={{
        forWho: "Department of Energy (DOE) and Energy Information Administration (EIA) staff who monitor and analyze electric power emergency incidents and disturbances across U.S. electric energy supply systems.",
        problemToSolve: "The DOE needed a reliable, secure system to collect and manage real-time information about electric emergency incidents. The application required robust admin interfaces for exercises management and organization administration, comprehensive testing infrastructure, and backend APIs to support critical data collection for national security and energy emergency management."
      }}
      solution={{
          approach: "I am approaching this project with a systematic progression: establishing quality through comprehensive testing, building admin-focused interfaces, and continuously improving overall user experience. My primary contributions center on administrative functionality, building the infrastructure that enables DOE staff to manage exercises and organizations effectively. I regularly collaborate with UX designers and stakeholders to ensure the interfaces meet actual user needs and workflows. Currently, I am developing new admin-privileged views, refactoring components for greater reusability, and writing test plans for our QA tester.",
        keyFeatures: [
           "Complete exercises management interface for admin users to configure and monitor drills",
           "Organizations management interface for admin oversight of reporting entities (actively developing new admin-privileged views)",
           "Recent refactoring to make components more reusable",
           "Writing test plans for QA tester",
           "API updates and helper functions supporting admin features (organizations, accounts, exercises)",
           "Comprehensive Cypress end-to-end test suite covering critical workflows",
           "HTML/CSS improvements to form layouts, error messaging, and visual hierarchy",
           "Complex multi-step dialog systems for administrative workflows",
           "Real-time validation and error handling for sensitive energy data",
           "API integration for incident reporting and organizational data",
           "State management for complex administrative interfaces"
        ]
      }}
      includeGallery={true}
      images={galleryImages}
      challenges={{
          difficulties: "As my first professional React application, there was a significant learning curve not only in mastering the framework and TypeScript, but especially in understanding the complex database relationships that underpin the system. One of my main challenges was grasping how account types, user roles, organizations, reports, and other entities intersected and interacted across the application's data containers. Navigating these relationships was critical for building robust admin features and ensuring data integrity and security throughout the system.",
          resolutions: "To overcome these challenges, I engaged in ongoing, detailed communication with fellow developers, UX designers, and project stakeholders. Through regular meetings, collaborative design sessions, and feedback loops, I developed a clear understanding of how the various data entities and containers were meant to intersect and support the application's workflows. This collaborative approach enabled me to design and implement features that accurately reflected the system's requirements and ensured seamless integration between user roles, organizations, and reporting structures.",
        lessonsLearned: [
          "TypeScript fundamentals and type system from ground zero",
          "React component patterns, hooks, and state management",
          "Using Cypress testing as a learning tool to understand codebases",
          "Navigating and mapping complex database relationships between account types, user roles, organizations, and reports",
          "The importance of ongoing cross-functional communication to clarify requirements and data intersections",
          "Building admin-focused interfaces with complex data management requirements",
          "API integration patterns and error handling in React applications",          "Progressive skill development from testing to full feature implementation"
        ]
      }}
      impact={{
          results: "The exercises management interface enables DOE administrators to efficiently configure and monitor emergency drills across reporting organizations. API updates and helper functions improve CosmosDB CRUD operations and data transformation for admin features including organizations, accounts, and exercises management. The comprehensive test suite continues to reduce regression bugs and increase development confidence. I am actively developing new admin-privileged views, refactoring components for reusability, and writing test plans to support our QA process. The organizations management interface (in development) will further streamline administrative oversight of reporting entities across U.S. electric energy supply systems.",
        measurableOutcomes: [
          "Complete exercises management system for emergency drill administration",
          "API updates and helper functions improving CosmosDB CRUD operations and data transformation",
          "Significant reduction in regression bugs through comprehensive test coverage",
          "Enhanced administrative efficiency for DOE/EIA staff",
          "Organizations management and accounts management interfaces in active development",
          "Demonstrated frontend development capabilities on national security infrastructure"
        ]
      }}
    />
  )
}

export default DOE417Project