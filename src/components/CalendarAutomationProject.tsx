import './ProjectDetail.css'

function CalendarAutomationProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>Division Calendar Automation</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            An advanced Power Automate workflow that utilizes direct HTTP API calls to create
            sophisticated calendar management and notification systems. This project demonstrates
            going beyond built-in actions to create custom integrations and complex automation logic.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">Power Automate</span>
            <span className="tech-tag">HTTP APIs</span>
            <span className="tech-tag">Microsoft Graph</span>
            <span className="tech-tag">SharePoint</span>
            <span className="tech-tag">Azure AD</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>Division administrators, project managers, and team leads who need to coordinate complex schedules and resources across multiple teams.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            Traditional calendar management becomes challenging when coordinating across multiple
            teams, time zones, and resource constraints. Built-in calendar actions were insufficient
            for complex scenarios involving conditional logic, external system integration, and
            sophisticated notification rules. Manual coordination was time-consuming and error-prone.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Plan/Approach</h3>
          <p>
            Instead of relying on built-in calendar actions, I designed a solution using direct
            HTTP API calls to Microsoft Graph and other services. This approach provided greater
            flexibility and control over calendar operations and enabled complex business logic
            that wasn't possible with standard connectors.
          </p>

          <h3>Technical Implementation</h3>
          <ul>
            <li><strong>HTTP Actions:</strong> Direct API calls to Microsoft Graph for calendar operations</li>
            <li><strong>Authentication:</strong> OAuth 2.0 flows for secure API access</li>
            <li><strong>Data Processing:</strong> Complex JSON parsing and manipulation</li>
            <li><strong>Conditional Logic:</strong> Advanced branching based on calendar data and business rules</li>
            <li><strong>Error Handling:</strong> Robust retry logic and fallback mechanisms</li>
          </ul>

          <h3>Key Features</h3>
          <ul>
            <li>Automated meeting scheduling based on availability and preferences</li>
            <li>Cross-timezone coordination with automatic time conversion</li>
            <li>Resource conflict detection and resolution</li>
            <li>Intelligent reminder systems with escalation protocols</li>
            <li>Integration with project management tools for context-aware scheduling</li>
            <li>Automated follow-up actions based on meeting outcomes</li>
            <li>Reporting and analytics on scheduling efficiency</li>
          </ul>

          <h3>Advanced HTTP Call Examples</h3>
          <div className="code-example">
            <h4>Complex Availability Query</h4>
            <p>Using Microsoft Graph API to find optimal meeting times across multiple calendars with custom business rules.</p>
          </div>

          <div className="code-example">
            <h4>Dynamic Event Creation</h4>
            <p>HTTP POST requests with conditional logic for creating events based on project status and team availability.</p>
          </div>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            The primary challenge was mastering HTTP API calls within Power Automate's constraints.
            Understanding OAuth authentication flows, handling API rate limits, and parsing complex
            JSON responses required deep technical knowledge. Debugging API issues in the Power
            Automate environment was also challenging due to limited visibility into HTTP requests.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            I invested significant time studying Microsoft Graph API documentation and OAuth 2.0
            specifications. I built test workflows to experiment with different API endpoints and
            authentication methods. I created detailed logging mechanisms to capture API responses
            and error messages. Collaboration with API experts and extensive testing helped me
            develop reliable patterns for complex HTTP operations.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced HTTP API integration within Power Automate</li>
            <li>OAuth 2.0 authentication and token management</li>
            <li>Microsoft Graph API patterns and best practices</li>
            <li>Complex JSON parsing and data transformation</li>
            <li>API rate limiting and error handling strategies</li>
            <li>Debugging techniques for cloud-based automation</li>
            <li>Designing scalable solutions beyond built-in connectors</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Business Impact</h2>
          <p>
            This advanced automation has transformed calendar management for the division, enabling
            more efficient coordination and reducing scheduling conflicts. The HTTP-based approach
            has served as a blueprint for other complex integrations, demonstrating the power of
            going beyond built-in actions to create sophisticated business solutions.
          </p>

          <h3>Technical Achievements</h3>
          <ul>
            <li>Reduced scheduling conflicts by 80%</li>
            <li>Automated 200+ monthly calendar operations</li>
            <li>Established patterns for complex API integrations</li>
            <li>Improved cross-team coordination efficiency</li>
          </ul>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
        </div>
      </div>
    </div>
  )
}

export default CalendarAutomationProject