import './ProjectDetail.css'

function AILearningProject() {
  return (
    <div className="project-detail">
      <div className="container">
        <h1>AI-Assisted Learning Approach</h1>

        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            A comprehensive methodology and toolkit for leveraging AI tools to accelerate software
            development learning, problem-solving, and productivity while maintaining code quality
            and deep understanding. This "project" represents my systematic approach to integrating
            AI assistants into the development workflow.
          </p>
        </div>

        <div className="project-tech-stack">
          <h2>AI Tools & Platforms</h2>
          <div className="tech-tags">
            <span className="tech-tag">ChatGPT</span>
            <span className="tech-tag">GitHub Copilot</span>
            <span className="tech-tag">Claude</span>
            <span className="tech-tag">Cursor</span>
            <span className="tech-tag">Perplexity</span>
            <span className="tech-tag">v0</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Context</h2>
          <h3>For Who?</h3>
          <p>Developers at all levels looking to accelerate their learning and improve productivity while maintaining high code quality and deep technical understanding.</p>

          <h3>What's the Problem to Solve?</h3>
          <p>
            The rapid pace of technology evolution makes it challenging to stay current and learn
            new frameworks/tools efficiently. AI tools can help but also risk creating superficial
            understanding or encouraging copy-paste coding without comprehension. I needed a
            systematic approach that maximizes AI benefits while ensuring genuine skill development.
          </p>
        </div>

        <div className="project-solution">
          <h2>Solution</h2>

          <h3>Core Principles</h3>
          <ul>
            <li><strong>AI as Accelerator, Not Replacement:</strong> Use AI to speed up learning, not skip understanding</li>
            <li><strong>Active Learning:</strong> Always understand and modify AI-generated code</li>
            <li><strong>Verification:</strong> Test, debug, and verify all AI suggestions</li>
            <li><strong>Context Matters:</strong> Provide detailed context for better AI assistance</li>
            <li><strong>Iterative Refinement:</strong> Use AI suggestions as starting points for improvement</li>
          </ul>

          <h3>Learning Workflow</h3>
          <ol>
            <li><strong>Research Phase:</strong> Use AI for initial research and concept explanation</li>
            <li><strong>Planning Phase:</strong> Generate high-level architecture and approach suggestions</li>
            <li><strong>Implementation Phase:</strong> Request specific code snippets with detailed requirements</li>
            <li><strong>Review Phase:</strong> Analyze, modify, and improve AI-generated code</li>
            <li><strong>Testing Phase:</strong> Use AI for test case generation and debugging assistance</li>
            <li><strong>Documentation Phase:</strong> Generate documentation and explanation requests</li>
          </ol>

          <h3>Tool-Specific Strategies</h3>
          <div className="tool-strategy">
            <h4>GitHub Copilot</h4>
            <p><strong>Use for:</strong> Code completion, function generation, API integration</p>
            <p><strong>Strategy:</strong> Write descriptive function names/comments, provide context through existing code patterns</p>
          </div>

          <div className="tool-strategy">
            <h4>ChatGPT/Claude</h4>
            <p><strong>Use for:</strong> Complex problem-solving, architecture decisions, debugging</p>
            <p><strong>Strategy:</strong> Provide detailed context, ask for multiple approaches, request explanations</p>
          </div>

          <div className="tool-strategy">
            <h4>Specialized AI Tools</h4>
            <p><strong>Use for:</strong> UI design (v0), research (Perplexity), code editing (Cursor)</p>
            <p><strong>Strategy:</strong> Choose the right tool for each specific task type</p>
          </div>
        </div>

        <div className="project-challenges">
          <h2>Challenges & Skills Learned</h2>

          <h3>What Was Difficult</h3>
          <p>
            The biggest challenge was finding the right balance between AI assistance and genuine
            learning. Early on, I relied too heavily on AI suggestions without understanding the
            underlying concepts, leading to fragile code. I also struggled with prompt engineering
            and providing adequate context for meaningful AI assistance.
          </p>

          <h3>How I Figured It Out</h3>
          <p>
            I developed a systematic evaluation framework: for every AI suggestion, I ask myself
            "Do I understand why this works?" and "Could I recreate this without AI?" I started
            documenting my AI interactions and reflecting on what worked vs. what didn't. I also
            built a personal knowledge base of effective prompts and use cases for different scenarios.
          </p>

          <h3>What I Learned</h3>
          <ul>
            <li>Advanced prompt engineering techniques for technical questions</li>
            <li>Evaluating AI suggestions for correctness, security, and maintainability</li>
            <li>Building genuine understanding while using AI accelerators</li>
            <li>Creating effective feedback loops for AI-assisted learning</li>
            <li>Identifying when AI helps vs. when human expertise is essential</li>
            <li>Developing a personal AI toolkit and workflow optimization</li>
          </ul>
        </div>

        <div className="project-impact">
          <h2>Impact & Results</h2>
          <p>
            This approach has accelerated my learning by 3-5x while ensuring deep understanding.
            I've successfully learned React, TypeScript, various APIs, and complex automation
            workflows much faster than traditional methods. The methodology has become a core
            part of my development process, and I've shared these techniques with colleagues
            to help them adopt AI tools effectively.
          </p>

          <h3>Measurable Outcomes</h3>
          <ul>
            <li>Reduced time-to-competency for new technologies by ~70%</li>
            <li>Improved code quality through AI-assisted review and testing</li>
            <li>Enhanced problem-solving through multiple AI-generated approaches</li>
            <li>Better documentation through AI-assisted technical writing</li>
          </ul>
        </div>

        <div className="project-links">
          <a href="#projects" className="btn">← Back to Projects</a>
        </div>
      </div>
    </div>
  )
}

export default AILearningProject