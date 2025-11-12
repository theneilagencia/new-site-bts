export interface User {
  id: string;
  email: string;
  name: string;
  role: 'partner' | 'admin';
  company?: string;
  phone?: string;
  cpf_cnpj?: string;
  avatar?: string;
}

export interface Proposal {
  id: string;
  partnerId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  structure: string;
  structureName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt?: string;
  pdfUrl?: string;
  notes?: string;
}

export interface Structure {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  image?: string;
}

export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    solutions: string;
    partner: string;
    contact: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  [key: string]: any;
}

export interface AgenticMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AgenticConversation {
  id: string;
  userId?: string;
  messages: AgenticMessage[];
  status: 'active' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}
