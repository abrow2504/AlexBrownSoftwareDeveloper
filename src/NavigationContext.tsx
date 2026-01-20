import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

type SectionId = 'hero' | 'about' | 'whatsnext' | 'skills' | 'projects' | 'insights' | 'contact'

interface NavigationContextType {
  navigateToHome: () => void
  navigateToProjects: () => void
  navigateToInsights: () => void
  navigateToSection: (section: SectionId) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({ children, value }: { children: ReactNode; value: NavigationContextType }) {
  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
