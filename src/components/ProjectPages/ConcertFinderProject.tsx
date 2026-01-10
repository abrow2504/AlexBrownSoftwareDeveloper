import ProjectPage from './ProjectPage'

function ConcertFinderProject() {
  return (
    <ProjectPage
      projectTitle="US Concert Date Finder"
      projectOverview="A Python automation script that runs on GitHub Actions every 10 minutes, monitoring concert tour websites for new US tour dates and delivering instant notifications via iOS and email. Perfect for fans who want to be first in line for tickets to their favorite artists."
      techStack={["Python", "Selenium", "GitHub Actions", "iOS Notifications", "Email API", "Beautiful Soup"]}
      context={{
        forWho: "Myself and fellow fans of the Clair Obscur Symphony, though the script is easily adaptable for any concert tour.",
        problemToSolve: "Concert tickets for popular international artists often sell out within minutes of being announced. Manually checking tour websites multiple times a day is inefficient and easy to forget. I needed an automated solution that would monitor for new dates and alert me instantly so I could secure tickets before they disappeared."
      }}
      solution={{
        approach: "The solution combines web scraping, scheduled automation, and multi-channel notifications to provide real-time concert date monitoring. The script runs continuously in the cloud, checking for updates and delivering notifications through preferred channels.",
        keyFeatures: [
          "Automated monitoring every 10 minutes, 24/7",
          "Instant iOS push notifications for new dates",
          "Email alerts with detailed concert information",
          "Duplicate detection to avoid spam notifications",
          "Configurable for any concert tour website",
          "Comprehensive logging and error reporting"
        ]
      }}
      challenges={{
        difficulties: "The main challenges were handling dynamic JavaScript-heavy websites that required Selenium, implementing reliable duplicate detection to avoid notification spam, and setting up proper error handling for a system that runs autonomously. Website changes and anti-bot measures also required ongoing maintenance.",
        resolutions: "I started with simple requests/Beautiful Soup but quickly realized Selenium was necessary for the dynamic content. I implemented a hash-based comparison system for detecting new dates while avoiding false positives. Extensive testing with mock data and gradual rollout helped identify edge cases. I also built in comprehensive logging to debug issues when the script runs in the cloud environment.",
        lessonsLearned: [
          "Advanced web scraping techniques for modern websites",
          "GitHub Actions for scheduled automation and CI/CD",
          "Multi-channel notification systems and API integration",
          "Building resilient automation that runs without supervision",
          "Handling dynamic content and anti-bot countermeasures",
          "Python best practices for maintainable automation scripts"
        ]
      }}
      impact={{
        results: "This project successfully alerted me to new US tour dates for Clair Obscur Symphony, allowing me to purchase tickets before they sold out. The script has been running reliably for months with zero false notifications. Beyond the practical benefit, it demonstrated how automation can solve real-life problems and showcased my ability to build end-to-end solutions combining multiple technologies.",
        measurableOutcomes: [
          "Successfully detected and notified of new concert dates",
          "Zero false notification rate over months of operation",
          "Demonstrated end-to-end automation solution"
        ]
      }}
    />
  )
}

export default ConcertFinderProject