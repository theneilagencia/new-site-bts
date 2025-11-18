import { useState } from 'react';
import { AppProviders } from '@/contexts/AppProviders';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import { PageLoader } from '@/components/ui/page-loader';
import { AgenticChat } from '@/components/ui/AgenticChat';
import { PortalApp } from '@/components/portal/portal-app';
import { Toaster } from '@/components/ui/Toaster';
import { ContactForm } from '@/components/contact/ContactForm';

function ContactPageContent() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const heading = isEnglish
    ? 'We are ready to engineer your next global chapter'
    : 'Estamos prontos para estruturar o seu próximo capítulo global';
  const description = isEnglish
    ? 'Fill out the form below and a BTS strategist will contact you to conduct a tailored analysis and design the ideal structure for your case.'
    : 'Preencha o formulário abaixo e um estrategista BTS entrará em contato para conduzir uma análise personalizada e desenhar a estrutura ideal para o seu caso.';
  const eyebrow = isEnglish ? 'Contact' : 'Contato';

  return (
    <div className="relative overflow-hidden bg-[var(--bg-primary)] py-24">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--border-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--border-color) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F4AFF]/20 blur-3xl" />
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/15 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.5em] text-[#00E5FF]/60 font-mono">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl text-white font-semibold">
              {heading}
            </h1>
            <p className="mt-4 text-base text-[#C6CEDF]/80">{description}</p>
        </div>

        <ContactForm variant="page" />
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [currentView, setCurrentView] = useState<'public' | 'portal'>('public');

  const handleAccessPortal = () => setCurrentView('portal');
  const handleBackToPublic = () => {
    setCurrentView('public');
    localStorage.removeItem('bts-user');
  };

  return (
    <AppProviders>
      <div className="min-h-screen">
        {currentView === 'public' ? (
          <>
            <PageLoader />
            <CursorGlow />
            <ScrollToTop />
            <AgenticChat />
            <Header onAccessPortal={handleAccessPortal} />
            <main>
              <ContactPageContent />
            </main>
            <Footer />
          </>
        ) : (
          <PortalApp onBackToPublic={handleBackToPublic} />
        )}
        <Toaster />
      </div>
    </AppProviders>
  );
}
