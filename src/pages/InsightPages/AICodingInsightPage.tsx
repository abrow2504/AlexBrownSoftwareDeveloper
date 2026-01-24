import InsightPage from './InsightPage'

function AICodingInsightPage() {
  return (
    <InsightPage
      insightTitle="AI-Assisted Development: From ChatGPT to Expert Mentorship"
      insightOverview="My journey learning to harness AI tools—from simple prompts about syntax to using customized AI personas as personal mentors. This framework covers how I evolved from being scared of 'cheating' to understanding that AI is simply the next step in software development efficiency."
      category="Development Methodology"
      context={{
        background: "I started using AI tools reluctantly-- initially seeing ChatGPT as just a document and email-writing tool. During my programming coursework and early development work, I realized AI could be far more powerful as a learning accelerator. I progressed from asking 'How do I write a Power Automate expression that gives me yesterday's date?' to asking AI to explain complex concepts and troubleshoot real problems.",
        challenge: "Early on, I was afraid using AI was 'cheating' and feared relying too much on it. I typed out all code by hand even when AI gave me exactly what I needed, thinking this would help me learn better. I realized this mindset was actually slowing me down and missing the real opportunity: understanding concepts rather than memorizing syntax. The bigger challenge was learning how to ask good questions and provide enough context for AI to give meaningful help."
      }}
      approach={{
        philosophy: "AI is a tool like any other-- one that helps us work smarter, faster, and focus on solving bigger, more meaningful problems. Just as programming languages moved us beyond zeros and ones, and frameworks gave us pre-built solutions, AI is simply the next step in the evolution toward development efficiency. The key is developing strong prompting and context engineering skills.",
        keyPrinciples: [
          "Grasp Concepts Over Syntax - In an era where AI is becoming core to development, understanding 'why' matters more than memorizing 'how'",
          "Use AI to Learn Concepts - Ask it to explain things ELI5 style, generate practice problems, and break down concepts line-by-line",
          "Experiment with Personas - Train AI to be your ideal mentor by defining its persona, rules, and approach to teaching",
          "Provide Rich Context - The better context you give, the better assistance you get. Structure prompts with problem, constraints, and desired outcome",
          "Ask for Options - Request multiple solutions and explanations of why one approach is better than another",
          "Verify and Understand - Always test, debug, and verify AI suggestions before using them",
          "Personalize Your Learning - Tailor AI interactions to how you best absorb information"
        ]
      }}
      implementation={{
        strategies: "I moved through progressive levels of AI usage complexity. Starting with simple syntax questions, I evolved to asking AI to explain code line-by-line, generate test questions for studying, troubleshoot errors by providing context, and eventually creating custom instruction files that trained AI to be my specific ideal mentor.",
        practices: [
          "Teaching Myself: Asking AI to explain concepts in plain language (ELI5) while learning programming helped solidify understanding",
          "Test Prep: Using ChatGPT to generate practice problems from concepts I'd mastered, ensuring I understood concepts not just memorized answers",
          "Code Explanation: Providing code chunks and asking for line-by-line explanations without jargon",
          "Real-world Problem Solving: When stuck on a bug, explaining the full context (what I expected vs. what happened) rather than just the error",
          "Custom Personas: Creating instruction files that define how AI teaches me - conversational tone, problem-solving approach, and focus on giving me options with reasoning",
          "Multiple Solutions Strategy: When facing a decision, I ask AI to provide 2-3 different approaches, including the pros and cons of each, which solution is recommended, and why. This prevents tunnel vision, shows me alternatives I might not have considered, and helps me understand trade-offs between approaches",
          "Visual Learning: Asking AI for comparisons, analogies, and real-world examples alongside technical explanations"
        ]
      }}
      reflections={{
        outcomes: "Developing strong AI prompting skills has become as important as coding itself. Early attempts were often vague—I'd get generic answers because I hadn't learned to provide adequate context. But once I understood how to ask good questions and even train AI through custom instruction files, it became an incredibly personalized learning tool. AI has also proven invaluable for asking 'But why?' without judgment, something I struggled to do with human mentors at first.",
        lessonsLearned: [
          "It's not about the tool—it's about how you use it. The same AI can be useless or revolutionary depending on your prompting",
          "Context engineering is a real skill. Learning to structure information, define constraints, and ask for specific outputs dramatically improves results",
          "AI helps most when you already have baseline knowledge. For completely new topics, a human or structured learning resource first, then AI for acceleration works better",
          "Teaching actually helps you learn. By asking AI to explain concepts to me in teaching style, I absorbed information much faster",
          "Collaboration matters even with AI. A quick check-in with a mentor like someone pointing me toward a better approach had more impact than hours with AI alone",
          "Syntax is becoming less important. Focusing on understanding architecture, problem-solving approaches, and design patterns matters far more than memorizing language details",
          "AI has a learning curve too. Early models were terrible at math and complex logic; understanding tool limitations is crucial"
        ]
      }}
      impact={{
        results: "This approach to AI-assisted learning has fundamentally shaped how I develop and learn. I was able to accelerate through my programming coursework, transition from Power Platform development to React/TypeScript development, and tackle complex tickets while still new to the field. More importantly, I've developed a framework I can apply to any new technology or language. The most valuable insight: AI doesn't replace the need for understanding—it eliminates friction from the learning process so you can focus on the bigger picture. As we move forward, mastering AI collaboration won't be optional; it will be fundamental to staying effective as a developer."
      }}
    />
  )
}

export default AICodingInsightPage
