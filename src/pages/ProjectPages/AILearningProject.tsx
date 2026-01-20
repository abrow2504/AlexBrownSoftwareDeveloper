import ProjectTemplate from './ProjectTemplate'

function AILearningProject() {
  return (
    <ProjectTemplate
      projectTitle="AI-Assisted Learning Approach"
      projectOverview="A comprehensive methodology and toolkit for leveraging AI tools to accelerate software development learning, problem-solving, and productivity while maintaining code quality and deep understanding. This 'project' represents my systematic approach to integrating AI assistants into the development workflow."
      techStack={["ChatGPT", "GitHub Copilot", "Claude", "Cursor", "Perplexity", "v0"]}
      context={{
        forWho: "Developers at all levels looking to accelerate their learning and improve productivity while maintaining high code quality and deep technical understanding.",
        problemToSolve: "The rapid pace of technology evolution makes it challenging to stay current and learn new frameworks/tools efficiently. AI tools can help but also risk creating superficial understanding or encouraging copy-paste coding without comprehension. I needed a systematic approach that maximizes AI benefits while ensuring genuine skill development."
      }}
      solution={{
        approach: "Developed a systematic evaluation framework and workflow that uses AI as an accelerator rather than a replacement for understanding. The approach includes research, planning, implementation, review, testing, and documentation phases, each with specific AI-assisted strategies.",
        keyFeatures: [
          "AI as Accelerator, Not Replacement—Use AI to speed up learning, not skip understanding",
          "Active Learning—Always understand and modify AI-generated code",
          "Verification—Test, debug, and verify all AI suggestions",
          "Context Matters—Provide detailed context for better AI assistance",
          "Iterative Refinement—Use AI suggestions as starting points for improvement",
          "Tool-Specific Strategies for GitHub Copilot, ChatGPT/Claude, and specialized AI tools"
        ]
      }}
      challenges={{
        difficulties: "The biggest challenge was finding the right balance between AI assistance and genuine learning. Early on, I relied too heavily on AI suggestions without understanding the underlying concepts, leading to fragile code. I also struggled with prompt engineering and providing adequate context for meaningful AI assistance.",
        resolutions: "I developed a systematic evaluation framework: for every AI suggestion, I ask myself 'Do I understand why this works?' and 'Could I recreate this without AI?' I started documenting my AI interactions and reflecting on what worked vs. what didn't. I also built a personal knowledge base of effective prompts and use cases for different scenarios.",
        lessonsLearned: [
          "Advanced prompt engineering techniques for technical questions",
          "Evaluating AI suggestions for correctness, security, and maintainability",
          "Building genuine understanding while using AI accelerators",
          "Creating effective feedback loops for AI-assisted learning",
          "Identifying when AI helps vs. when human expertise is essential",
          "Developing a personal AI toolkit and workflow optimization"
        ]
      }}
      impact={{
        results: "This approach has accelerated my learning by 3-5x while ensuring deep understanding. I've successfully learned React, TypeScript, various APIs, and complex automation workflows much faster than traditional methods. The methodology has become a core part of my development process, and I've shared these techniques with colleagues to help them adopt AI tools effectively.",
        measurableOutcomes: [
          "Reduced time-to-competency for new technologies by ~70%",
          "Improved code quality through AI-assisted review and testing",
          "Enhanced problem-solving through multiple AI-generated approaches",
          "Better documentation through AI-assisted technical writing"
        ]
      }}
    />
  )
}

export default AILearningProject