import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { PageLoader } from '@/components/ui/page-loader';
import { PortalApp } from '@/components/portal/portal-app';
import { Toaster } from '@/components/ui/Toaster';

export default function App() {
  const [currentView, setCurrentView] = useState<'public' | 'portal'>('public');

  const handleBackToPublic = () => {
    setCurrentView('public');
    // Clear any stored session
    localStorage.removeItem('bts-user');
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <div className="min-h-screen">
            {currentView === 'public' ? (
              <>
                <PageLoader />
                <CursorGlow />
                <ScrollToTop />
                <Header onAccessPortal={() => setCurrentView('portal')} />
                <main>
                  <HeroSection />
                  <PrivacySection />
                  <TrustedSection />
                  <SolutionsSection />
                  <AboutSection />
                  <PartnerSection onAccessPortal={() => setCurrentView('portal')} />
                </main>
                <Footer />
              </>
            ) : (
              <PortalApp onBackToPublic={handleBackToPublic} />
            )}
            <Toaster />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
