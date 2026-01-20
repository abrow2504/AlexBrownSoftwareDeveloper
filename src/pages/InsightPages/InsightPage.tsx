import { useEffect } from 'react'
import '../ProjectPages/ProjectDetail.css'
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
    measurableOutcomes: string[]
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
      <div className="project-detail">
        <div className="container">
          <h1>{insightTitle}</h1>

          <div className="two-column-layout">
            <div className="left-column">
              <div className="project-overview">
                <h2>Overview</h2>
                <p>{insightOverview}</p>
              </div>

              <div className="project-context">
                <h2>Context</h2>
                <h3>Background</h3>
                <p>{context.background}</p>
                <h3>The Challenge</h3>
                <p>{context.challenge}</p>
              </div>

              <div className="project-solution">
                <h2>Approach</h2>
                <h3>Philosophy</h3>
                <p>{approach.philosophy}</p>

                <h3>Key Principles</h3>
                <ul>
                  {approach.keyPrinciples.map((principle, index) => (
                    <li key={index}>{principle}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="right-column">
              <div className="project-tech-stack">
                <h2>Category</h2>
                <div className="tech-tags">
                  <span className="tech-tag">{category}</span>
                </div>
                <h3>Measurable Outcomes</h3>
                <ul>
                  {impact.measurableOutcomes.map((outcome, index) => (
                    <li key={index}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="project-challenges">
            <h2>Implementation</h2>
            <h3>Strategies</h3>
            <p>{implementation.strategies}</p>

            <h3>Key Practices</h3>
            <ul>
              {implementation.practices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>

          <div className="project-challenges">
            <h2>Reflections & Learning</h2>
            <h3>What I've Discovered</h3>
            <p>{reflections.outcomes}</p>

            <h3>Lessons Learned</h3>
            <ul>
              {reflections.lessonsLearned.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>

          <div className="project-impact">
            <h2>Impact & Results</h2>
            <p>{impact.results}</p>
          </div>

          <div className="project-links">
            <button onClick={() => navigateToSection('insights')} className="btn">
              ← Back to Insights
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
