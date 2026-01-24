export interface InsightData {
  id: string
  title: string
  category: string
  description: string
  summary: string
}

export const insights: InsightData[] = [
  {
    id: 'ai-coding-approach',
    title: 'AI-Assisted Development Approach',
    category: 'Methodology',
    description: 'A systematic framework for leveraging AI tools to accelerate learning and development while maintaining code quality and deep understanding.',
    summary: 'How I use ChatGPT, Claude, GitHub Copilot, and other AI tools to learn faster, solve problems more effectively, and improve code quality—without sacrificing genuine understanding or creating technical debt.'
  },
  {
    id: 'ai-automated-documentation',
    title: 'AI-Assisted Runbooks for Power Automate',
    category: 'Documentation Automation',
    description: 'How I use GitHub Copilot to turn exported Power Automate solution JSONs into user-ready runbooks and admin guides in under an hour.',
    summary: 'A lightweight, repeatable workflow for generating Power Automate manuals that capture roles, triggers, connectors, and maintenance steps—reducing single-point-of-failure risk and speeding onboarding.'
  }
]
