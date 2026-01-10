import ProjectPage from './ProjectPage'

function MoodGardenProject() {
  return (
    <ProjectPage
      projectTitle="Mood Garden"
      projectOverview="A personal React/TypeScript web application that combines mood tracking with AI-generated insights and hand-drawn spooky illustrations. Built right after graduation as a creative outlet combining my love for art and technology."
      techStack={["React", "TypeScript", "Firebase Auth", "OpenAI API", "Firestore", "Vite", "Express", "CSS Animations"]}
      context={{
        forWho: "Myself and anyone interested in creative mood tracking with a spooky twist.",
        problemToSolve: "Traditional mood tracking apps can feel clinical and impersonal. I wanted to create something that combines emotional self-reflection with creative expression and AI-powered insights, while incorporating my love for spooky aesthetics and fantasy elements."
      }}
      solution={{
        approach: "The app allows users to log their daily moods through an intuitive interface featuring hand-drawn illustrations. Each mood entry triggers AI analysis to provide personalized insights and suggestions. The 'garden' metaphor represents emotional growth over time.",
        keyFeatures: [
          "Secure user authentication and personalized mood gardens",
          "Intuitive mood logging with visual mood indicators",
          "AI-generated insights and coping strategies",
          "Progress tracking with garden growth visualization",
          "Hand-drawn spooky illustrations with smooth animations",
          "Responsive design for mobile and desktop"
        ]
      }}
      challenges={{
        difficulties: "Integrating the OpenAI API while maintaining user privacy and data security was challenging. I also struggled with creating smooth CSS animations for the hand-drawn illustrations while keeping the app performant.",
        resolutions: "For the AI integration, I implemented proper error handling and rate limiting on the backend. I studied CSS animation performance best practices and used transform properties instead of layout-triggering properties. Extensive testing ensured the animations were smooth across different devices.",
        lessonsLearned: [
          "Advanced Firebase integration patterns for auth and real-time data",
          "Responsible AI API usage and security considerations",
          "CSS animation performance optimization techniques",
          "Creating engaging user experiences through visual design",
          "Balancing technical functionality with creative expression"
        ]
      }}
      impact={{
        results: "Successfully created a unique mood tracking application that combines technical sophistication with creative expression. The application demonstrates my ability to integrate complex APIs, manage authentication, and create engaging user experiences with custom visual design.",
        measurableOutcomes: [
          "Functional full-stack application with secure authentication",
          "Seamless AI API integration for personalized insights",
          "Smooth animations and visual polish across devices",
          "Creative expression combined with technical implementation"
        ]
      }}
    />
  )
}

export default MoodGardenProject