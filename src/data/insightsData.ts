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
  }
]
