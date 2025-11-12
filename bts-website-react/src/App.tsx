import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhySection } from '@/components/sections/WhySection';
import { PrivacySection } from '@/components/sections/PrivacySection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { Footer } from '@/components/layout/Footer';

export default function App() {
  useEffect(() => {
    // Add loaded class for initial animations
    document.body.classList.add('loaded');
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <div className="min-h-screen bg-[var(--color-bg-primary)]">
            <Header />
            <main>
              <HeroSection />
              <WhySection />
              <PrivacySection />
              <HowItWorksSection />
              <TrustedSection />
              <SolutionsSection />
              <AboutSection />
              <PartnerSection />
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
