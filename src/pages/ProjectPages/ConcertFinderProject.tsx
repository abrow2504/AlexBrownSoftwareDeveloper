import ProjectTemplate from './ProjectTemplate'

function ConcertFinderProject() {
  return (
    <ProjectTemplate
      projectTitle="US Tour Date Checker"
      projectOverview="A configurable Python scraper that runs on GitHub Actions every 10 minutes to watch any tour site for new U.S. dates, then alerts me by email (plus optional SMS via carrier gateways and Telegram). It keeps state so only genuinely new shows trigger messages."
      techStack={["Python", "Selenium", "Beautiful Soup", "GitHub Actions", "SMTP (Gmail)", "Telegram Bot API"]}
      context={{
        forWho: "Fans who want U.S. tour announcements fast, and anyone who needs a reusable monitor for event listings.",
        problemToSolve: "Tour pages change without notice and hot U.S. dates sell out fast. As a video game soundtrack lover, I initially built this to watch for the Clair Obscur Expedition 33 concert series. While most concert sites offer mailing lists, I tend to miss emails or they end up in my 'promotions' inbox that I never check—I needed a headless checker that could watch sites for me, ignore repeats, and send phone notifications through channels I actually read."
      }}
      solution={{
        approach: "A JSON-driven scraper built with Selenium + BeautifulSoup, scheduled via GitHub Actions. It loads JavaScript-heavy pages headlessly, extracts events with CSS selectors from config, filters for U.S. locations, and pushes alerts via email/SMS/Telegram using repo secrets for credentials.",
        keyFeatures: [
          "Runs on GitHub Actions every 10 minutes; manual dispatch supported",
          "Configurable CSS selectors and wait conditions per site via config.json",
          "U.S.-only filtering with postal/State detection or worldwide mode",
          "Deduplicated alerts using a committed seen_dates.json state file",
          "Email notifications with optional SMS via carrier gateway and Telegram",
          "Debug artifacts (saved HTML, scraped events) to tune selectors"
        ]
      }}
      challenges={{
        difficulties: "Tour pages are JavaScript-heavy and change markup frequently. Running Selenium/Chrome in GitHub Actions reliably and preventing duplicate alerts without a database were the big hurdles.",
        resolutions: "Switched to headless Selenium with explicit wait targets from config, and ship debug_html + all_events to inspect scraping. I store state in seen_dates.json committed back from the workflow and compare full event strings to suppress repeat notifications. Optional channels are isolated so missing credentials won't fail the run.",
        lessonsLearned: [
          "Hardening Selenium for CI (timeouts, headless flags, wait strategies)",
          "Designing config-driven scrapers that adapt to new sites quickly",
          "Stateful automation patterns using JSON artifacts instead of a DB",
          "Safely handling credentials via GitHub Actions secrets",
          "Testing notification paths with FORCE_SEND_FIRST hooks"
        ]
      }}
      impact={{
        results: "I now get reliable heads-up emails when new U.S. shows land, without noise from already-seen dates. Friends have reused it by dropping in their own selectors and secrets, no code changes needed.",
        measurableOutcomes: [
          "Automated checks every 10 minutes via Actions with zero manual babysitting",
          "No duplicate alerts thanks to state tracking committed from CI",
          "Shared configuration reused by others to monitor different artists"
        ]
      }}
    />
  )
}

export default ConcertFinderProject