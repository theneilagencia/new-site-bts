/**
 * Bitcoin Capital Reserve Design System
 * TypeScript Implementation Example
 * 
 * Este arquivo demonstra como implementar os tokens do design system
 * extraídos do site bitcoincapreserve.com em um projeto React/TypeScript
 */

// ============================================================================
// COLORS
// ============================================================================

export const colors = {
  primary: {
    black: '#263654',
    blue: '#1258ca',
    accent: '#c70a1a',
  },
  neutral: {
    white: '#ffffff',
    black: '#292a2d',
    gray: {
      light: '#abb8c3',
      medium: '#79797c',
      dark: '#323639',
    },
  },
  semantic: {
    success: '#88c559',
    error: '#cf2e2e',
    warning: '#fcb900',
    info: '#0693e3',
  },
  custom: {
    footerBg: '#0B0F1F',
  },
  extended: {
    palePink: '#f78da7',
    vividRed: '#cf2e2e',
    luminousOrange: '#ff6900',
    luminousAmber: '#fcb900',
    lightGreenCyan: '#7bdcb5',
    vividGreenCyan: '#00d084',
    paleCyanBlue: '#8ed1fc',
    vividCyanBlue: '#0693e3',
    vividPurple: '#9b51e0',
  },
} as const;

// ============================================================================
// GRADIENTS
// ============================================================================

export const gradients = {
  cyanToPurple: 'linear-gradient(135deg, #0693e3 0%, #9b51e0 100%)',
  greenCyan: 'linear-gradient(135deg, #7adcb4 0%, #00d082 100%)',
  amberToOrange: 'linear-gradient(135deg, #fcb900 0%, #ff6900 100%)',
  orangeToRed: 'linear-gradient(135deg, #ff6900 0%, #cf2e2e 100%)',
  luminousDusk: 'linear-gradient(135deg, #ffcb70 0%, #c751c0 50%, #4158d0 100%)',
  paleOcean: 'linear-gradient(135deg, #fff5cb 0%, #b6e3d4 50%, #33a7b5 100%)',
  midnight: 'linear-gradient(135deg, #020381 0%, #2874fc 100%)',
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fallback: 'system-ui, sans-serif',
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    '2xl': '42px',
  },
  fluidSizes: {
    footerTitle: 'clamp(28px, 3.2vw, 48px)',
    socialLinks: 'clamp(16px, 1.6vw, 22px)',
    copyrightText: 'clamp(12px, 1.1vw, 16px)',
  },
  lineHeights: {
    tight: '1.1',
    normal: '1.5',
    relaxed: '1.75',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: '0',
  xs: '0.44rem',   // ~7px
  sm: '0.67rem',   // ~11px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2.25rem',   // 36px
  '2xl': '3.38rem', // ~54px
  '3xl': '5.06rem', // ~81px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '1rem',
  full: '9999px',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  none: 'none',
  natural: '6px 6px 9px rgba(0, 0, 0, 0.2)',
  deep: '12px 12px 50px rgba(0, 0, 0, 0.4)',
  sharp: '6px 6px 0px rgba(0, 0, 0, 0.2)',
  outlined: '6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)',
  crisp: '6px 6px 0px rgba(0, 0, 0, 1)',
} as const;

// ============================================================================
// OPACITY
// ============================================================================

export const opacity = {
  0: '0',
  20: '0.2',
  40: '0.4',
  60: '0.6',
  80: '0.8',
  90: '0.9',
  100: '1',
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  mobile: '700px',
  tabletHeight: '1024px',
  mobileHeight: '640px',
} as const;

// Media query helpers
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tabletHeight: `@media screen and (max-height: ${breakpoints.tabletHeight})`,
  mobileHeight: `@media screen and (max-height: ${breakpoints.mobileHeight})`,
} as const;

// ============================================================================
// CONTAINERS
// ============================================================================

export const containers = {
  footer: '1320px',
  content: '1920px',
} as const;

// ============================================================================
// ASPECT RATIOS
// ============================================================================

export const aspectRatios = {
  square: '1',
  video: '16/9',
  portrait: '3/4',
  landscape: '4/3',
  widePortrait: '2/3',
  wideLandscape: '3/2',
  verticalVideo: '9/16',
} as const;

// ============================================================================
// ANIMATIONS
// ============================================================================

export const animations = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ============================================================================
// THEMES
// ============================================================================

export const themes = {
  light: {
    background: '#ffffff',
    foreground: '#263654',
    muted: '#f7f7f7',
  },
  dark: {
    background: '#0B0F1F',
    foreground: '#ffffff',
    muted: '#292a2d',
  },
} as const;

// ============================================================================
// COMPONENT STYLES
// ============================================================================

export const components = {
  button: {
    default: {
      backgroundColor: '#32373c',
      color: '#ffffff',
      borderRadius: borderRadius.full,
      padding: 'calc(.667em + 2px) calc(1.333em + 2px)',
      fontSize: '1.125em',
      textDecoration: 'none',
      boxShadow: shadows.none,
      border: 'none',
      cursor: 'pointer',
      fontFamily: typography.fontFamily.primary,
      fontWeight: typography.fontWeights.medium,
      transition: `all ${animations.duration.normal} ${animations.timing.easeInOut}`,
    },
  },
  footer: {
    container: {
      backgroundColor: colors.custom.footerBg,
      color: colors.neutral.white,
      padding: '56px 24px 40px',
      fontFamily: typography.fontFamily.primary,
    },
    containerMobile: {
      padding: '40px 20px',
    },
    wrapper: {
      maxWidth: containers.footer,
      margin: '0 auto',
    },
    title: {
      fontWeight: typography.fontWeights.extrabold,
      letterSpacing: typography.letterSpacing.wide,
      lineHeight: typography.lineHeights.tight,
      fontSize: typography.fluidSizes.footerTitle,
      textTransform: 'uppercase' as const,
      margin: '0 0 24px 0',
    },
    divider: {
      border: '0',
      height: '1px',
      background: `rgba(255, 255, 255, ${opacity[80]})`,
      width: '100%',
      margin: '0 0 28px 0',
    },
    bottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap' as const,
    },
    social: {
      display: 'flex',
      gap: '48px',
      flexWrap: 'wrap' as const,
    },
    socialMobile: {
      gap: '28px',
    },
    socialLink: {
      color: colors.neutral.white,
      textDecoration: 'none',
      fontSize: typography.fluidSizes.socialLinks,
      transition: `opacity ${animations.duration.normal} ${animations.timing.easeInOut}`,
    },
    copyright: {
      opacity: opacity[90],
      fontSize: typography.fluidSizes.copyrightText,
      whiteSpace: 'nowrap' as const,
    },
    copyrightMobile: {
      whiteSpace: 'normal' as const,
    },
  },
} as const;

// ============================================================================
// TYPE EXPORTS (for TypeScript)
// ============================================================================

export type Color = typeof colors;
export type Gradient = typeof gradients;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadow = typeof shadows;
export type Opacity = typeof opacity;
export type Breakpoint = typeof breakpoints;
export type Container = typeof containers;
export type AspectRatio = typeof aspectRatios;
export type Animation = typeof animations;
export type Theme = typeof themes;
export type Component = typeof components;

// ============================================================================
// DESIGN SYSTEM OBJECT (everything in one place)
// ============================================================================

export const designSystem = {
  colors,
  gradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  opacity,
  breakpoints,
  media,
  containers,
  aspectRatios,
  animations,
  themes,
  components,
} as const;

export default designSystem;

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/*
// Example 1: Using in styled-components
import styled from 'styled-components';
import { colors, typography, spacing, borderRadius } from './design-tokens';

const Button = styled.button`
  background-color: ${colors.primary.blue};
  color: ${colors.neutral.white};
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSizes.base};
  padding: ${spacing.md} ${spacing.lg};
  border-radius: ${borderRadius.full};
  border: none;
  cursor: pointer;
`;

// Example 2: Using with Tailwind CSS (in tailwind.config.js)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#263654',
          blue: '#1258ca',
          accent: '#c70a1a',
        },
        // ... rest of colors
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '0.44rem',
        'sm': '0.67rem',
        // ... rest of spacing
      },
    },
  },
};

// Example 3: Using inline in React components
import { designSystem } from './design-tokens';

const MyComponent = () => {
  return (
    <div style={{
      backgroundColor: designSystem.colors.primary.blue,
      padding: designSystem.spacing.lg,
      borderRadius: designSystem.borderRadius.md,
    }}>
      Hello World
    </div>
  );
};

// Example 4: Using with CSS Modules
// styles.module.css
.button {
  background-color: var(--color-primary-blue);
  padding: var(--spacing-md) var(--spacing-lg);
}

// In your component, inject CSS variables
const root = document.documentElement;
root.style.setProperty('--color-primary-blue', designSystem.colors.primary.blue);
root.style.setProperty('--spacing-md', designSystem.spacing.md);
root.style.setProperty('--spacing-lg', designSystem.spacing.lg);

// Example 5: Using with Material-UI theme
import { createTheme } from '@mui/material/styles';
import { colors, typography, spacing } from './design-tokens';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary.blue,
      dark: colors.primary.black,
    },
    secondary: {
      main: colors.primary.accent,
    },
    success: {
      main: colors.semantic.success,
    },
    error: {
      main: colors.semantic.error,
    },
  },
  typography: {
    fontFamily: typography.fontFamily.primary,
    fontSize: 16,
    fontWeightLight: typography.fontWeights.light,
    fontWeightRegular: typography.fontWeights.regular,
    fontWeightMedium: typography.fontWeights.medium,
    fontWeightBold: typography.fontWeights.bold,
  },
  spacing: 8, // base unit (1rem = 16px)
});

// Example 6: Footer component implementation
const Footer = () => {
  return (
    <footer style={designSystem.components.footer.container}>
      <div style={designSystem.components.footer.wrapper}>
        <h2 style={designSystem.components.footer.title}>
          Building Value Through Bitcoin
        </h2>
        <hr style={designSystem.components.footer.divider} />
        <div style={designSystem.components.footer.bottom}>
          <div style={designSystem.components.footer.social}>
            <a href="#" style={designSystem.components.footer.socialLink}>
              LinkedIn
            </a>
            <a href="#" style={designSystem.components.footer.socialLink}>
              Substack
            </a>
            <a href="#" style={designSystem.components.footer.socialLink}>
              Instagram
            </a>
          </div>
          <div style={designSystem.components.footer.copyright}>
            © 2025 Bitcoin Capital Reserve
          </div>
        </div>
      </div>
    </footer>
  );
};
*/
