import { ReactNode } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { ContactFormProvider } from '@/contexts/ContactFormContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <ContactFormProvider>{children}</ContactFormProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
