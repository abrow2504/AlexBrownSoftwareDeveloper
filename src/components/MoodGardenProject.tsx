import './ProjectDetail.css'

function MoodGardenProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>Mood Garden</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            A personal React/TypeScript web application that combines mood tracking with AI-generated insights
            and hand-drawn spooky illustrations. Built right after graduation as a creative outlet combining
            my love for art and technology.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Firebase Auth</span>
            <span className="tech-tag">OpenAI API</span>
            <span className="tech-tag">Firestore</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">CSS Animations</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>Myself and anyone interested in creative mood tracking with a spooky twist.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            Traditional mood tracking apps can feel clinical and impersonal. I wanted to create something
            that combines emotional self-reflection with creative expression and AI-powered insights,
            while incorporating my love for spooky aesthetics and fantasy elements.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Plan/Approach</h3>
          <p>
            The app allows users to log their daily moods through an intuitive interface featuring
            hand-drawn illustrations. Each mood entry triggers AI analysis to provide personalized
            insights and suggestions. The "garden" metaphor represents emotional growth over time.
          </p>

          <h3>Code Architecture</h3>
          <ul>
            <li><strong>Frontend:</strong> React with TypeScript for type safety and better development experience</li>
            <li><strong>Authentication:</strong> Firebase Auth for secure user management</li>
            <li><strong>Database:</strong> Firestore for real-time mood data storage</li>
            <li><strong>AI Integration:</strong> OpenAI API for generating personalized mood insights</li>
            <li><strong>Backend:</strong> Express.js server to handle API calls and protect API keys</li>
            <li><strong>Styling:</strong> Custom CSS with animations for the spooky illustrations</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Secure user authentication and personalized mood gardens</li>
            <li>Intuitive mood logging with visual mood indicators</li>
            <li>AI-generated insights and coping strategies</li>
            <li>Progress tracking with garden growth visualization</li>
            <li>Hand-drawn spooky illustrations with smooth animations</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            Integrating the OpenAI API while maintaining user privacy and data security was challenging.
            I also struggled with creating smooth CSS animations for the hand-drawn illustrations
            while keeping the app performant.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            For the AI integration, I implemented proper error handling and rate limiting on the backend.
            I studied CSS animation performance best practices and used transform properties instead
            of layout-triggering properties. Extensive testing ensured the animations were smooth
            across different devices.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced Firebase integration patterns for auth and real-time data</li>
            <li>Responsible AI API usage and security considerations</li>
            <li>CSS animation performance optimization techniques</li>
            <li>Creating engaging user experiences through visual design</li>
            <li>Balancing technical functionality with creative expression</li>
          </ul>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
          <a href="#" className="btn" target="_blank">View GitHub Repo</a>
        </div>
      </div>
    </div>
  )
}

export default MoodGardenProject