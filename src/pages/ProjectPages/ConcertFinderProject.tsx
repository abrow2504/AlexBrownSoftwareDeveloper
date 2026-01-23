import ProjectTemplate from './ProjectTemplate'
import tourNotif from '/tourdates/tourNotif.png'
import pytests from '/tourdates/pytests.png'

const galleryImages = [
    {
    original: tourNotif,
    thumbnail: tourNotif,
    description: 'US Tour Date Checker Notification Email Sample',
    originalWidth: 1655,
    originalHeight: 418
  },
      {
    original: pytests,
    thumbnail: pytests,
    description: 'Comprehensive pytest test suite for the US Tour Date Checker',
    originalWidth: 1655,
    originalHeight: 418
  }
]

function ConcertFinderProject() {
  return (
    <ProjectTemplate
      projectTitle="US Tour Date Checker"
      projectOverview="A production-ready, modular Python scraper that runs on GitHub Actions every 10 minutes to monitor any tour site for new U.S. dates, then sends alerts via email, SMS, and Telegram. Built with clean separation of concerns and comprehensive test coverage using pytest."
      techStack={["Python", "Selenium", "Beautiful Soup", "pytest", "GitHub Actions", "SMTP (Gmail)", "Telegram Bot API"]}
      context={{
        forWho: "Fans who want U.S. tour announcements fast, and anyone who needs a reusable, well-tested monitor for event listings.",
        problemToSolve: "Tour pages change without notice and hot U.S. dates sell out fast. As a video game soundtrack lover, I initially built this to watch for the Clair Obscur Expedition 33 concert series. While most concert sites offer mailing lists, I tend to miss emails or they end up in my 'promotions' inbox that I never check—I needed a headless checker that could watch sites for me, ignore repeats, and send phone notifications through channels I actually read."
      }}
      solution={{
        approach: "A modular, JSON-driven scraper with clean architecture and comprehensive testing. The system is split into five focused modules (config, scraper, notifier, state, main) that handle configuration loading, web scraping, multi-channel notifications, state persistence, and orchestration respectively. Scheduled via GitHub Actions with secrets management for credentials.",
        keyFeatures: [
          "Modular architecture: Separate modules for config, scraping, notifications, and state management",
          "Comprehensive test suite: Unit tests for each module plus end-to-end integration tests using pytest",
          "Runs on GitHub Actions every 10 minutes with manual dispatch support",
          "Fully configurable via config.json with CSS selectors and wait conditions per site",
          "Multi-channel notifications: Email (HTML tables), SMS (carrier gateway), and Telegram",
          "Smart deduplication using composite event keys (date+city+venue+address+link)",
          "Debug artifacts automatically saved (HTML snapshots, scraped events JSON)",
          "Graceful degradation: Missing notification credentials won't break the run"
        ]
      }}
      includeGallery={true}
      images={galleryImages}
      challenges={{
        difficulties: "Tour pages are JavaScript-heavy and change markup frequently. Running Selenium/Chrome in GitHub Actions reliably, preventing duplicate alerts without a database, and ensuring the system is maintainable and testable were the key challenges.",
        resolutions: "Refactored from a monolithic script into five focused modules with clear responsibilities. Implemented comprehensive pytest test suite with mocks for external dependencies (SMTP, Telegram API, Selenium). Store state in seen_dates.json committed from workflow and compare composite event keys to suppress duplicates. Added debug artifacts and proper error handling for missing credentials. Test coverage includes unit tests for each module and an end-to-end test simulating the full workflow.",
        lessonsLearned: [
          "Modular architecture patterns: Splitting concerns into config, scraper, notifier, state, and main orchestrator",
          "Testing strategies for external dependencies: Mocking SMTP, HTTP APIs, and browser automation",
          "Stateful automation with JSON artifacts instead of a database",
          "Hardening Selenium for CI environments (timeouts, headless flags, wait strategies)",
          "Designing config-driven scrapers that adapt to new sites without code changes",
          "Safe credential handling via environment variables and GitHub Actions secrets",
          "Writing maintainable tests with proper fixtures and monkeypatching"
        ]
      }}
      impact={{
        results: "I now get reliable, immediate notifications when new U.S. shows are announced, without noise from duplicate alerts. The modular codebase with comprehensive tests makes it easy to debug, extend, and share with others who can adapt it to different sites by simply updating the config.",
        measurableOutcomes: [
          "5 focused modules with single responsibilities (config, scraper, notifier, state, main)",
          "Comprehensive test coverage: 5 test files covering unit and integration scenarios",
          "Automated checks every 10 minutes via GitHub Actions with zero manual intervention",
          "100% deduplication accuracy using composite event keys",
          "Reusable by others through config changes—no code modifications needed",
          "All tests passing with mocked external dependencies for fast, reliable CI"
        ]
      }}
    />
  )
}

export default ConcertFinderProject