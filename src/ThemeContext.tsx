import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { lightTheme, darkTheme } from './theme';
import type { Theme } from './theme';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme with CSS custom properties
  useEffect(() => {
    const currentTheme = isDarkMode ? darkTheme : lightTheme;
    const root = document.documentElement;

    // Update CSS custom properties
    root.style.setProperty('--color-primary', currentTheme.colors.primary);
    root.style.setProperty('--color-secondary', currentTheme.colors.secondary);
    
    root.style.setProperty('--color-bg-light', currentTheme.colors.background.light);
    root.style.setProperty('--color-bg-medium', currentTheme.colors.background.medium);
    root.style.setProperty('--color-bg-dark', currentTheme.colors.background.dark);
    
    root.style.setProperty('--color-text-primary', currentTheme.colors.text.primary);
    root.style.setProperty('--color-text-secondary', currentTheme.colors.text.secondary);
    root.style.setProperty('--color-text-light', currentTheme.colors.text.light);
    root.style.setProperty('--color-text-inverse', currentTheme.colors.text.inverse);

    // Toggle dark mode class for additional styling
    root.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    theme: isDarkMode ? darkTheme : lightTheme,
    isDarkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
