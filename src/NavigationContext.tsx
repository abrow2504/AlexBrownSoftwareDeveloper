import { createContext, useContext, ReactNode } from 'react'

interface NavigationContextType {
  navigateToHome: () => void
  navigateToProjects: () => void
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
