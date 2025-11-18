import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-3 -right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-[#C6CEDF] transition hover:bg-white/10"
              aria-label="Fechar formulário de contato"
            >
              <X className="w-5 h-5" />
            </button>

            <ContactForm variant="modal" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
