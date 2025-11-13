import { useTheme } from '@/contexts/ThemeContext';
import btsLogoDark from '@/assets/bts-logo-dark.png';
import btsLogoLight from '@/assets/bts-logo-light.png';

interface BtsLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'auto';
}

export function BtsLogo({ className = "h-8 w-auto", variant = 'auto' }: BtsLogoProps) {
  const { theme } = useTheme();
  
  // Determine which logo to use
  // btsLogoDark = white logo (for dark backgrounds)
  // btsLogoLight = dark logo (for light backgrounds)
  let logoSrc = btsLogoDark; // default: white logo for dark backgrounds
  
  if (variant === 'auto') {
    // Auto mode: use theme
    // If theme is 'light', use dark logo (dark text on light background)
    // If theme is 'dark', use white logo (white text on dark background)
    logoSrc = theme === 'light' ? btsLogoLight : btsLogoDark;
  } else if (variant === 'light') {
    // Light variant: use dark logo (for light backgrounds)
    logoSrc = btsLogoLight;
  } else {
    // Dark variant: use white logo (for dark backgrounds)
    logoSrc = btsLogoDark;
  }
  
  return (
    <img 
      src={logoSrc}
      alt="BTS Global Corp"
      className={className}
    />
  );
}
