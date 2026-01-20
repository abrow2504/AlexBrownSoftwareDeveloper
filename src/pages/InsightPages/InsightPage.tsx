import { useEffect } from 'react'
import './InsightDetail.css'
import { useNavigation } from '../../NavigationContext'
import NavBar from '../../components/NavBar'

interface InsightPageProps {
  insightTitle: string
  insightOverview: string
  category: string
  context: {
    background: string
    challenge: string
  }
  approach: {
    philosophy: string
    keyPrinciples: string[]
  }
  implementation: {
    strategies: string
    practices: string[]
  }
  reflections: {
    outcomes: string
    lessonsLearned: string[]
  }
  impact: {
    results: string
  }
}

export default function InsightPage({
  insightTitle,
  insightOverview,
  category,
  context,
  approach,
  implementation,
  reflections,
  impact
}: InsightPageProps) {
  const { navigateToSection } = useNavigation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar />
      <div className="insight-detail">
        <div className="insight-container">
          {/* Article Header */}
          <header className="insight-header">
            <div className="insight-category">{category}</div>
            <h1>{insightTitle}</h1>
            <p className="insight-overview">{insightOverview}</p>
          </header>

          {/* Article Content */}
          <article className="insight-content">
            {/* Context Section */}
            <section className="insight-section">
              <h2>The Context</h2>
              <h3>Background</h3>
              <p>{context.background}</p>
              <h3>The Challenge</h3>
              <p>{context.challenge}</p>
            </section>

            {/* Approach Section */}
            <section className="insight-section">
              <h2>My Approach</h2>
              <div className="insight-emphasis">
                <p><strong>Philosophy:</strong> {approach.philosophy}</p>
              </div>
              <h3>Guiding Principles</h3>
              <ul>
                {approach.keyPrinciples.map((principle, index) => (
                  <li key={index}>{principle}</li>
                ))}
              </ul>
            </section>

            {/* Implementation Section */}
            <section className="insight-section">
              <h2>Implementation in Practice</h2>
              <p>{implementation.strategies}</p>
              <h3>Key Practices</h3>
              <ul>
                {implementation.practices.map((practice, index) => (
                  <li key={index}>{practice}</li>
                ))}
              </ul>
            </section>

            {/* Reflections Section */}
            <section className="insight-section">
              <h2>Reflections & Discovery</h2>
              <p>{reflections.outcomes}</p>
              <h3>Lessons Learned</h3>
              <ul>
                {reflections.lessonsLearned.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </section>

            {/* Impact Section */}
            <section className="insight-section">
              <h2>Impact & Results</h2>
              <p>{impact.results}</p>
            </section>
          </article>

          {/* Navigation */}
          <nav className="insight-navigation">
            <button onClick={() => navigateToSection('insights')} className="btn">
              ← Back to Insights
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}
