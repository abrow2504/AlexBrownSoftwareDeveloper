import ProjectTemplate from './ProjectTemplate'

// Import images directly from public folder
import gardenLoading from '/moodGarden/gardenLoading.png'
import login from '/moodGarden/login.png'
import oracle from '/moodGarden/oracle.png'
import moodGarden from '/moodGarden/moodGarden.png'

const galleryImages = [
    {
    original: moodGarden,
    thumbnail: moodGarden,
    description: 'Mood Garden home page and mood logging interface',
    originalWidth: 1655,
    originalHeight: 418
  },
  {
    original: login,
    thumbnail: login,
    description: 'Login modal with email/password authentication',
    originalWidth: 1655,
    originalHeight: 418
  },
  {
    original: gardenLoading,
    thumbnail: gardenLoading,
    description: 'Empty states for garden oracle and mood garden.',
    originalWidth: 1655,
    originalHeight: 418
  },
  {
    original: oracle,
    thumbnail: oracle,
    description: 'Oracle narration delivering AI-powered insights based on mood entries',
    originalWidth: 1655,
    originalHeight: 418
  }
]

function MoodGardenProject() {
  return (
    <ProjectTemplate
      projectTitle="Mood Garden"
      projectOverview="A post-graduation passion project that transforms daily mood logging into a spooky haunted garden. Mood Garden pairs a React + TypeScript front end with AI narration and hand-drawn art so emotional check-ins feel like tending an enchanted landscape."
      projectLink="#"
      projectLinkText="Visit Mood Garden"
      
      techStack={["React 19", "TypeScript", "Firebase Auth", "Firestore", "Vite", "Express Proxy", "OpenAI API", "CSS Animations"]}
      context={{
        forWho: "Built for fun to marry my new skills as newly graduated software engineer with my love of illustration and all things spooky.",
        problemToSolve: "To challenge myself to build a full-stack app that blends creativity with technical rigor, while exploring how AI can enhance personal reflection. This one's still a work in progress that I try to iterate on in my spare time!",
      }}
      solution={{
        approach: "Users log moods through a hand-illustrated interface, storing entries in Firestore and syncing the garden view in real time. Each submission passes through an Express proxy to the OpenAI API, returning gothic narration while the front end animates bespoke plants that evolve with every mood.",
        keyFeatures: [
          "Email/password auth that gates each user's private garden",
          "Mood-specific plants with floating lonely spirits that drift across the scene",
          "Oracle narration pipeline delivering AI insights grounded in recent entries",
          "Timeline-backed progress view so gardens grow with every log",
          "Hand-drawn illustrations paired with transform-based CSS animation",
          "Responsive layout tuned for phones, tablets, and widescreen"
        ]
      }}
      challenges={{
        difficulties: "Shielding the OpenAI key, handling narration failures gracefully, and animating heavy illustration assets without jank were the biggest hurdles-- in fact I'm still wrestling to get the garden to handle screen size changes gracefully!",
        resolutions: "I introduced an Express proxy with rate limiting and custom error surfacing, cached narration fallbacks in the hook, and rewrote animations to rely on transforms while preloading assets and throttling motion updates.",
        lessonsLearned: [
          "Typed Firebase auth and Firestore patterns within React context",
          "Practical API hardening with proxy routing and rate controls",
          "Animation performance tuning for illustration-heavy UIs",
          "Designing cohesive experiences where narrative, art, and data align",
          "Balancing experimentation with production-ready guardrails",
          "Exploring AI-assisted development workflows while maintaining code ownership and architectural decisions"
        ]
      }}
      impact={{
        results: "Mood Garden proves I can ship a polished, expressive product that marries full-stack engineering with storytelling, from secure auth to AI-assisted narrative UX.",
        measurableOutcomes: [
          "Deployed full-stack flow with Firebase-authenticated mood history",
          "Express proxy that guards the OpenAI API key while logging errors transparently",
          "Adaptive lonely-spirit animation system that stays performant across devices",
          "Portfolio-ready demo that highlights my ability to blend creativity with robust engineering"
        ]
      }}
      includeGallery={true}
      images={galleryImages}
    />
  )
}

export default MoodGardenProject