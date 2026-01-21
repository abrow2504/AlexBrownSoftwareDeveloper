export interface ProjectData {
  id: string
  name: string
  tech: string
  description: string
  writeup?: string
  image?: string
  repoLink?: string
}

export const projects: ProjectData[] = [
  {
    id: 'travel-system',
    name: 'Connected Travel System',
    tech: 'Power Automate, SharePoint Lists, Microsoft Teams, Outlook, HTML Email Templates',
    description: 'A comprehensive Power Automate solution for managing complex travel requests and approvals across multiple organizational units.',
    writeup: 'Highly popular automation system used by administrators across various PNNL organizations. Streamlines the entire travel lifecycle from request to completion with automated notifications and status tracking.'
  },
  {
    id: 'mood-garden',
    name: 'Mood Garden',
    tech: 'React 19, TypeScript, Firebase Auth, Firestore, Vite, Express Proxy, OpenAI API, CSS Animations',
    description: 'A personal React/TypeScript web app that combines mood tracking with AI-generated insights and cute spooky illustrations.',
    repoLink: '#',
    image: `${import.meta.env.BASE_URL}moodGarden/moodGarden.png`,
    // writeup: 'Built right after graduation as a creative outlet combining my love for art and technology. Features Firebase authentication, AI-powered mood insights, and hand-drawn spooky illustrations with smooth animations.'
  },
  {
    id: 'doe417',
    name: 'DOE-417 Form Reporting System',
    tech: 'React, TypeScript, Cypress, CosmosDB, HTML, CSS, REST APIs',
    description: 'Frontend development for a DOE electric emergency incident reporting system, focusing on admin interfaces, testing, and CosmosDB integration.',

    writeup: 'Built admin interfaces for exercises and organizations management with CosmosDB CRUD operations. Started with Cypress testing to learn the codebase, then progressed to full feature development including API updates and data transformation.'
  },
  {
    id: 'calendar-automation',
    name: 'Division Calendar Automation',
    tech: 'Power Apps, Power Automate, SharePoint, Outlook, SQL Database, Microsoft Graph',
    description: 'A multi-component Microsoft ecosystem solution combining a searchable Power App, SharePoint lists, and advanced Power Automate workflows to create a transparent out-of-office visibility system.',
    writeup: 'Complex workflow designed to automate calendar management tasks across departments. Uses HTTP calls to integrate with external systems and provides real-time updates through email notifications.'
  },
  {
    id: 'proposal-system',
    name: 'Proposal Management System',
    tech: 'SharePoint, Power Apps, Power Automate',
    description: 'A Power Apps solution for managing portfolio proposals with custom forms, approval workflows, and status tracking.',
    writeup: 'Streamlines the entire proposal process from submission to approval. Features custom Power Apps interfaces for users and automated workflows for reviewers and approvers.'
  },
  {
    id: 'concert-finder',
    name: 'US Concert Finder',
    tech: 'Python, Selenium, Beautiful Soup, GitHub Actions, SMTP (Gmail), Telegram Bot API',
    description: 'A Python automation script that monitors a concert website and sends instant notifications when new US dates are announced.',
    repoLink: '#',
    writeup: 'Personal project that runs automatically every 10 minutes on GitHub Actions, scraping concert websites for new US tour dates and delivering instant notifications via iOS and email.'
  }
]
