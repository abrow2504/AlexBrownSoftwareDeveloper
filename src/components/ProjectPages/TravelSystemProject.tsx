import ProjectPage from './ProjectPage'

// Import images directly from public folder
import image003 from '/image003.png'
import image004 from '/image004.png'
import image005 from '/image005.png'
import image006 from '/image006.png'
import image007 from '/image007.png'
import image008 from '/image008.png'
import image009 from '/image009.png'

const galleryImages = [
        {
    original: image009,
    thumbnail: image009,
    description: 'SharePoint tracker list with custom views for active trips, personal assignments, and archives',
    originalWidth: 1655,
    originalHeight: 418
  },
  {
    original: image003,
    thumbnail: image003,
    description: 'Flow #1 - Request submission and notification',
    originalWidth: 1655,
    originalHeight: 418
  },
  {
    original: image004,
    thumbnail: image004,
    description: 'Flow #2 - Automated notifications for status changes to keep travelers in the loop',
    originalWidth: 1655,
    originalHeight: 418
  },
  { original: image006,
    thumbnail: image006,
    description: 'Flow #3 - If ATR Submitted satus logic branch > daily departure reminders with travel letter PDF',
    originalWidth: 1655,
    originalHeight: 418
  },
  
    {
    original: image005,
    thumbnail: image005,
    description: 'Flow #2 - If Travel Booked status logic branch > sends traveler an official travel letter PDF',
    originalWidth: 1655,
    originalHeight: 418
  },


    {
    original: image007,
    thumbnail: image007,
    description: 'Flow #3 Departure Reminders - daily scheduled trigger at 10 AM PST to notify tomorrow\'s travelers',
    originalWidth: 1655,
    originalHeight: 418
  }, 
      {
    original: image008,
    thumbnail: image008,
    description: 'Flow #4 Return Reminders - daily scheduled trigger at 10 AM PST to notify yesterday\'s returnees',
    originalWidth: 1655,
    originalHeight: 418
  }, 

]


function TravelSystemProject() {
  return (
    <ProjectPage
      projectTitle="Power Platform Travel System"
      projectOverview="The project that kickstarted my career pivot into automation and Power Platform development. What began as a simple Microsoft Form with basic email notifications evolved over the years into a sophisticated end-to-end travel management system for Research Computing staff at PNNL. Through continuous iteration and adding functionality, the system now uses SharePoint lists and Power Automate workflows to streamline travel tracking, team coordination, and expense reporting. While admins still book travel through external services, my system eliminates hours of back-and-forth communication by enabling easier tracking, workload sharing, and transparency across the entire travel lifecycle. As we hired more admins who adopted the system, I refined it into a polished solution that gained popularity lab-wide, with half a dozen other PNNL organizations now using tailored versions."
      techStack={["Power Automate", "SharePoint Lists", "Microsoft Teams", "Outlook", "HTML Email Templates"]}
      context={{
        forWho: "Research Computing staff travelers, RC administrators, and managers requiring efficient travel coordination and expense tracking-- and eventually other PNNL organizations seeking similar solutions.",
        problemToSolve: "Travel coordination for RC staff involved manual tracking across multiple systems, time-consuming email chains, and hours of back-and-forth communication for each trip. Admins faced missed deadlines for expense reporting and lack of visibility into travel status. Without a centralized system, admins struggled to share workload, monitor upcoming departures, ensure proper documentation, and maintain compliance with PNNL travel policies. Travelers were often confused about process steps and requirements."
      }}
      solution={{
        approach: "Started with a simple Microsoft Form for travelers and a basic Power Automate flow that sent email notifications when the form was submitted. Over two years, I continuously iterated on the system, progressively adding functionality based on user needs and pain points. As the RC team grew and more admins came on board, I evolved the simple notification into a comprehensive SharePoint-based tracking system with four automated workflows handling the complete travel lifecycle. The system now features a centralized SharePoint list for all travel data, automated status progression, multi-channel notifications, and scheduled daily checks for departures and returns. The shared inbox and assignment features enable entire teams of admins to coordinate seamlessly and stay in the loop on all organizational travel.",
        keyFeatures: [
          "Centralized shared inbox for team-wide visibility and coordination",
          "Assignment field allowing admins to self-assign and track personal workload",
          "Automated request confirmation and admin notifications on submission",
          "6-stage status lifecycle tracking (Waiting for ATR → Submitted ATR → Travel Booked → Expense Report Pending → Complete)",
          "Daily automated departure reminders with official travel letter PDFs (10 AM PST)",
          "Daily post-return expense report automation with template distribution",
          "Multi-channel notifications (Email + Teams) for status changes",
          "Custom SharePoint views for active trips, personal assignments, and archives",
          "Conditional logic to exclude cancelled trips from automated processing",
          "Professional HTML email templates with embedded trip details and links"
        ]
      }}
      challenges={{
        difficulties: "Designing an internal tracking system that complements (rather than replaces) external booking services was challenging - the system needed to provide value without duplicating functionality. Handling edge cases like last-minute cancellations, trip modifications, and missing documentation required careful planning. Ensuring the daily scheduled triggers correctly identified travelers based on date logic while filtering out cancelled trips needed precise conditional expressions. Balancing automation with the reality that admins still use external systems for actual booking required thoughtful workflow design.",
        resolutions: "I created detailed process maps for each workflow and tested extensively with real travel scenarios. Implemented robust date-based filtering logic in the scheduled workflows to accurately target tomorrow's departures and yesterday's returns. Built in cancellation-aware conditional checks throughout all automated processes. Developed comprehensive documentation including a full runbook for admins with troubleshooting procedures, edge case handling, and system maintenance guidelines. Used connection references to maintain consistent authentication and permissions across workflows.",
        lessonsLearned: [
          "The power of iterative development - starting simple and adding complexity over time",
          "How to identify automation opportunities and progressively build on them",
          "Advanced Power Automate date manipulation and filtering techniques",
          "Designing resilient scheduled workflows with conditional logic",
          "Creating maintainable automation with proper documentation and runbooks",
          "Managing file attachments and dynamic content in automated emails",
          "SharePoint list architecture for workflow-driven applications",
          "Multi-stakeholder coordination and change management for automated systems",
          "Importance of edge case planning and manual fallback procedures",
          "Building solutions that scale to support growing teams and organizational adoption"
        ]
      }}
      impact={{
        results: "The Power Platform Travel System has become my most popular Connected Learning Partners project at PNNL. Beyond serving as the standard for Research Computing travel management, the system's success led to adoption across the laboratory. I've helped at least half a dozen other PNNL organizations implement similar systems tailored to their specific travel workflows and organizational needs. The shared inbox and assignment features enable entire admin teams to coordinate effectively, ensuring no requests fall through the cracks while distributing workload evenly. The automated daily checks ensure no traveler misses critical pre-departure or post-return requirements. Admins can now manage multiple simultaneous travel requests efficiently through centralized SharePoint views, eliminating confusion around travel procedures and significantly reducing processing delays.",
        measurableOutcomes: [
          "Most widely adopted Connected Learning Partners Project, replicated across at least 6+ PNNL organizations",
          "Enables seamless coordination across entire admin teams for organizational travel",
          "100% automation of routine status notifications and reminders",
          "4 integrated Power Automate workflows handling the complete travel lifecycle",
          "Daily automated processing at 10 AM PST for departures and returns",
          "Reduced expense report lag through automated template distribution",
          "Comprehensive audit trail through SharePoint list history"
        ]
      }}
      includeGallery={true}
      images={galleryImages}
    />
  )
}

export default TravelSystemProject