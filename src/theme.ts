/**
 * Color Palette Theme
 */

export const colors = {
  black: '#000505',
  vintageGrape: '#3b3355',
  dustyGrape: '#5d5d81',
  paleSlate: '#bfcde0',
  white: '#fefcfd',
} as const;

/**
 * Theme structure with semantic color mappings
 */
interface ThemeColors {
  primary: string;
  secondary: string;
  background: {
    light: string;
    medium: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    light: string;
    inverse: string;
  };
  accent: {
    white: string;
    slate: string;
    dusty: string;
    grape: string;
    dark: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    subtle: string;
    accent: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

/**
 * Light theme (default)
 */
export const lightTheme: Theme = {
  colors: {
    // Primary colors
    primary: colors.vintageGrape,
    secondary: colors.dustyGrape,
    
    // Background colors
    background: {
      light: colors.white,
      medium: colors.paleSlate,
      dark: colors.black,
    },
    
    // Text colors
    text: {
      primary: colors.black,
      secondary: colors.vintageGrape,
      light: colors.dustyGrape,
      inverse: colors.white,
    },
    
    // Accent colors
    accent: {
      white: colors.white,
      slate: colors.paleSlate,
      dusty: colors.dustyGrape,
      grape: colors.vintageGrape,
      dark: colors.black,
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(120deg, #3b3355 0%, #5d5d81 100%)',
      secondary: 'linear-gradient(90deg, #3b3355, #5d5d81)',
      subtle: 'linear-gradient(135deg, rgba(59, 51, 85, 0.1), rgba(93, 93, 129, 0.1))',
      accent: 'linear-gradient(135deg, rgba(59, 51, 85, 0.15), rgba(93, 93, 129, 0.15))',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
};

/**
 * Dark theme (inverted colors)
 */
export const darkTheme: Theme = {
  colors: {
    // Primary colors (reversed)
    primary: colors.paleSlate,
    secondary: colors.dustyGrape,
    
    // Background colors (reversed)
    background: {
      light: colors.black,
      medium: colors.vintageGrape,
      dark: colors.white,
    },
    
    // Text colors (reversed)
    text: {
      primary: colors.white,
      secondary: colors.paleSlate,
      light: colors.paleSlate,
      inverse: colors.black,
    },
    
    // Accent colors
    accent: {
      white: colors.white,
      slate: colors.paleSlate,
      dusty: colors.dustyGrape,
      grape: colors.vintageGrape,
      dark: colors.black,
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(120deg, #ffffff 0%, #bfcde0 100%)',
      secondary: 'linear-gradient(90deg, #bfcde0, rgba(255, 255, 255, 0.6))',
      subtle: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
      accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
};

export default lightTheme;
