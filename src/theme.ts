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
