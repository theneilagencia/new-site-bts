import React from 'react';
import { useTheme } from '../../contexts/theme-context';
import btsLogoDark from 'figma:asset/572a92fbbf22c89867bf1fabc7776fbcc1a9a804.png';
import btsLogoLight from 'figma:asset/258e308a40bb02d3a0f11d8c08b844ee8259563e.png';

interface BTSLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'auto';
}

export function BTSLogo({ className = "h-8 w-auto", variant = 'auto' }: BTSLogoProps) {
  const { theme } = useTheme();
  
  // Determine which logo to use
  let logoSrc = btsLogoDark; // default: white logo for dark backgrounds
  
  if (variant === 'auto') {
    // Auto mode: use theme
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