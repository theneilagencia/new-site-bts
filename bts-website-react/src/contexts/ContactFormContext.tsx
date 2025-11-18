import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ContactFormModal } from '@/components/contact/ContactFormModal';

interface ContactFormContextValue {
  isOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextValue | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  const value = useMemo(
    () => ({
      isOpen,
      openContactForm,
      closeContactForm,
    }),
    [isOpen],
  );

  return (
    <ContactFormContext.Provider value={value}>
      {children}
      <ContactFormModal isOpen={isOpen} onClose={closeContactForm} />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
}
