import './ProjectDetail.css'
import ProjectTemplate from './ProjectTemplate'

function CalendarAutomationProject() {
  return (
    <ProjectTemplate
      projectTitle="Division Calendar Automation"
      projectOverview="A multi-component Microsoft ecosystem solution combining a searchable Power App, two SharePoint lists, and advanced Power Automate workflows to create a transparent out-of-office visibility system for an entire division. This project demonstrates solving real organizational pain points with practical, user-friendly technology."
      techStack={["Power Apps", "Power Automate", "SharePoint", "Outlook", "SQL Database", "Microsoft Graph"]} 
      context={{
        forWho: "Division staff and administrators who needed better visibility into out-of-office schedules and the ability to track when colleagues were unavailable.",
        problemToSolve: "The division had been using an MS Teams calendar for managing out-of-office time, but it had critical adoption issues. People only saw updates if they actively visited the calendar, and some users received notifications every time someone added an entry, which was extremely annoying. There was no way to subscribe to specific colleagues' schedules, and important OOO information was easily missed or ignored."
      }}
      solution={{
        approach: "I built an integrated system with three main components: a Power App for managing subscriptions, a SharePoint calendar for division-wide visibility, and Power Automate workflows to synchronize everything with Outlook and notify subscribers. The workflow allows staff to subscribe to colleagues they need to track, admins can schedule on behalf of others, and everyone sees updates automatically through Outlook calendar invites.",
        keyFeatures: [
          "Searchable and filterable Power App gallery of division staff backed by SQL database",
          "Subscribe/unsubscribe functionality with visual indicators (greyed-out buttons for already-subscribed staff)",
          "My Subscriptions tab showing all people you're tracking with unsubscribe options",
          "My Subscribers tab showing who is subscribed to you (read-only)",
          "SharePoint calendar view for all division staff to add their out-of-office time",
          "OOO entry form with start/end dates, delegate pickers, and notes section",
          "Admin feature to schedule OOO on behalf of another person",
          "Automatic Outlook calendar invite generation sent to user, subscribers, and delegates",
          "Update propagation: changes to SharePoint calendar items sync to Outlook invites",
          "Cancellation via choice field to preserve data integrity for automations",
          "Comprehensive technical runbooks for both end users and Power Platform developers with detailed troubleshooting guides and system architecture documentation"
        ]
      }}
      challenges={{
        difficulties: "One key technical hurdle was handling cancellations. Initially, I considered allowing direct deletion of calendar items, but discovered that Power Automate needed the event Ids that were recorded as part of the process to update and remove the corresponding Outlook events. Deleting items destroyed these IDs, making it impossible for the automations to function properly. Another challenge was ensuring the subscription system worked bidirectionally—syncing existing Outlook events to new subscribers while maintaining the power app's usability with a large staff database.",
        resolutions: "For cancellations, I implemented a 'choice' field (essentially a status field) in the SharePoint calendar items rather than allowing deletion. This preserves the ID that Power Automate needs to cancel the Outlook event. For subscriptions, I designed the flow to check for upcoming events and send them to newly added subscribers, ensuring they immediately see relevant calendar information. Testing with real division data helped identify edge cases like duplicate subscriptions and timezone handling.",
        lessonsLearned: [
          "Data integrity is critical when automations depend on unique identifiers—never delete when an ID is needed downstream",
          "Power App performance requires careful database design and filtering strategies",
          "Bidirectional synchronization between multiple systems requires well-thought-out flow logic",
          "User experience in Power Apps can make or break adoption—visual feedback (disabled buttons, tab switching) is essential",
          "SharePoint choice fields are effective for status tracking without destroying data",
          "Comprehensive technical documentation is essential for system maintainability and enables other developers to troubleshoot and extend the solution"
        ]
      }}
      impact={{ 
        results: "The division now has true transparency into out-of-office schedules without notification fatigue. Staff can easily find and subscribe to colleagues they work with frequently, admins can proactively schedule coverage, and everyone receives relevant calendar information through Outlook without cluttering their inboxes. The solution is self-maintaining—users control their own subscriptions and add their own OOO entries.",
        measurableOutcomes: [
          "Eliminated notification spam from calendar updates",
          "Enabled targeted subscription model instead of one-size-fits-all approach",
          "Reduced time spent asking colleagues about their availability",
          "Created single source of truth for division out-of-office information",
          "Demonstrated practical low-code/no-code solution to complex organizational problem"
        ]
      }}
        />

  )
}

export default CalendarAutomationProject