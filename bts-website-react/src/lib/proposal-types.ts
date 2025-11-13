export interface Proposal {
  id: string;
  clientName: string;
  clientEmail: string;
  country: string;
  structures: string[];
  description: string;
  currency: string;
  amount: number;
  maintenanceFee: number;
  customClauses: string;
  status: 'generated' | 'review' | 'approved' | 'rejected';
  createdAt: string;
  partnerName: string;
  partnerId: string;
}

export interface Structure {
  id: string;
  name: string;
  jurisdiction: string;
  type: string;
  setupFee: number;
  annualFee: number;
  description: string;
}

export type StructureType = string;

export const STATUS_LABELS = {
  generated: 'Gerado',
  review: 'Em Revisão',
  approved: 'Aprovado',
  rejected: 'Rejeitado',
};

export const STATUS_COLORS = {
  generated: '#21B6F3',
  review: '#FFA500',
  approved: '#00BCA5',
  rejected: '#FF5555',
};

export const STRUCTURE_OPTIONS = [
  {
    id: 'digital-offshore-bahamas',
    label: 'Digital Offshore - Bahamas',
    name: 'Digital Offshore - Bahamas',
    jurisdiction: 'Bahamas',
    type: 'IBC',
    setupFee: 3000,
    basePrice: 3000,
    annualFee: 500,
    maintenanceFee: 500,
    description: 'Offshore company for digital businesses',
  },
  {
    id: 'dao-wyoming',
    label: 'DAO - Wyoming',
    name: 'DAO - Wyoming',
    jurisdiction: 'USA (Wyoming)',
    type: 'DAO LLC',
    setupFee: 2500,
    basePrice: 2500,
    annualFee: 400,
    maintenanceFee: 400,
    description: 'Decentralized Autonomous Organization',
  },
  {
    id: 'foundation-switzerland',
    label: 'Foundation - Switzerland',
    name: 'Foundation - Switzerland',
    jurisdiction: 'Switzerland',
    type: 'Foundation',
    setupFee: 15000,
    basePrice: 15000,
    annualFee: 2000,
    maintenanceFee: 2000,
    description: 'Swiss foundation for wealth management',
  },
];
