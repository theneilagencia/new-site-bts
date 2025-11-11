import React, { useState } from 'react';
import { LanguageProvider } from './contexts/language-context';
import { ThemeProvider } from './contexts/theme-context';
import { AuthProvider } from './contexts/auth-context';
import { HeaderV2 } from './components/layout/header-v2';
import { HeroV2 } from './components/sections/hero-v2';
import { WhyV4 } from './components/sections/why-v4';
import { PrivacyV2 } from './components/sections/privacy-v2';
import { TrustedV2 } from './components/sections/trusted-v2';
import { SolutionsV2 } from './components/sections/solutions-v2';
import { AboutV3 } from './components/sections/about-v3';
import { PartnerV6 } from './components/sections/partner-v6';
import { FooterV2 } from './components/layout/footer-v2';
import { CursorGlow } from './components/ui/cursor-glow';
import { ScrollToTop } from './components/ui/scroll-to-top';
import { PageLoader } from './components/ui/page-loader';
import { LoginPage } from './components/auth/login-page';
import { PortalApp } from './components/portal/portal-app';
import { Toaster } from './components/ui/sonner';

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
                <HeaderV2 onAccessPortal={() => setCurrentView('portal')} />
                <main>
                  <HeroV2 />
                  <WhyV4 />
                  <PrivacyV2 />
                  <TrustedV2 />
                  <SolutionsV2 />
                  <AboutV3 />
                  <PartnerV6 onAccessPortal={() => setCurrentView('portal')} />
                </main>
                <FooterV2 />
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