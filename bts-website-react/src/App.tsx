import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhySection } from '@/components/sections/WhySection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { Footer } from '@/components/layout/Footer';
import { PortalApp } from '@/components/portal/PortalApp';
import { AgenticChat } from '@/components/ui/AgenticChat';

export default function App() {
  const [showPortal, setShowPortal] = useState(false);

  useEffect(() => {
    // Add loaded class for initial animations
    document.body.classList.add('loaded');
    
    // Check if user wants to access portal
    const isPortalRoute = window.location.pathname.includes('/portal') || 
                         window.location.hash.includes('portal');
    setShowPortal(isPortalRoute);

    // Listen for navigation changes
    const handleNavigation = () => {
      const isPortal = window.location.pathname.includes('/portal') || 
                      window.location.hash.includes('portal');
      setShowPortal(isPortal);
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          {showPortal ? (
            <PortalApp />
          ) : (
            <>
              <div className="min-h-screen bg-[var(--color-bg-primary)]">
                <Header />
                <main>
                  <HeroSection />
                  <WhySection />
                  <PrivacySection />
                  <TrustedSection />
                  <SolutionsSection />
                  <AboutSection />
                  <PartnerSection />
                </main>
                <Footer />
              </div>
              <AgenticChat />
            </>
          )}
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
