import './ProjectDetail.css'

function ConcertFinderProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>US Concert Date Finder</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            A Python automation script that runs on GitHub Actions every 10 minutes, monitoring concert
            tour websites for new US tour dates and delivering instant notifications via iOS and email.
            Perfect for fans who want to be first in line for tickets to their favorite artists.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Selenium</span>
            <span className="tech-tag">GitHub Actions</span>
            <span className="tech-tag">iOS Notifications</span>
            <span className="tech-tag">Email API</span>
            <span className="tech-tag">Beautiful Soup</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>Myself and fellow fans of the Clair Obscur Symphony, though the script is easily adaptable for any concert tour.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            Concert tickets for popular international artists often sell out within minutes of being
            announced. Manually checking tour websites multiple times a day is inefficient and easy
            to forget. I needed an automated solution that would monitor for new dates and alert me
            instantly so I could secure tickets before they disappeared.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Plan/Approach</h3>
          <p>
            The solution combines web scraping, scheduled automation, and multi-channel notifications
            to provide real-time concert date monitoring. The script runs continuously in the cloud,
            checking for updates and delivering notifications through preferred channels.
          </p>

          <h3>Code Architecture</h3>
          <ul>
            <li><strong>Web Scraping:</strong> Selenium for JavaScript-heavy sites, Beautiful Soup as fallback</li>
            <li><strong>Automation:</strong> GitHub Actions workflow running on 10-minute intervals</li>
            <li><strong>Data Storage:</strong> JSON file tracking known dates to detect new additions</li>
            <li><strong>Notifications:</strong> Pushover API for iOS notifications, SMTP for email alerts</li>
            <li><strong>Error Handling:</strong> Robust retry logic and failure notifications</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Automated monitoring every 10 minutes, 24/7</li>
            <li>Instant iOS push notifications for new dates</li>
            <li>Email alerts with detailed concert information</li>
            <li>Duplicate detection to avoid spam notifications</li>
            <li>Configurable for any concert tour website</li>
            <li>Comprehensive logging and error reporting</li>
          </ul>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            The main challenges were handling dynamic JavaScript-heavy websites that required Selenium,
            implementing reliable duplicate detection to avoid notification spam, and setting up
            proper error handling for a system that runs autonomously. Website changes and anti-bot
            measures also required ongoing maintenance.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            I started with simple requests/Beautiful Soup but quickly realized Selenium was necessary
            for the dynamic content. I implemented a hash-based comparison system for detecting new
            dates while avoiding false positives. Extensive testing with mock data and gradual rollout
            helped identify edge cases. I also built in comprehensive logging to debug issues when
            the script runs in the cloud environment.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced web scraping techniques for modern websites</li>
            <li>GitHub Actions for scheduled automation and CI/CD</li>
            <li>Multi-channel notification systems and API integration</li>
            <li>Building resilient automation that runs without supervision</li>
            <li>Handling dynamic content and anti-bot countermeasures</li>
            <li>Python best practices for maintainable automation scripts</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Personal Impact</h2>
          <p>
            This project successfully alerted me to new US tour dates for Clair Obscur Symphony,
            allowing me to purchase tickets before they sold out. The script has been running reliably
            for months with zero false notifications. Beyond the practical benefit, it demonstrated
            how automation can solve real-life problems and showcased my ability to build end-to-end
            solutions combining multiple technologies.
          </p>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
          <a href="#" className="btn" target="_blank">View GitHub Repo</a>
        </div>
      </div>
    </div>
  )
}

export default ConcertFinderProject