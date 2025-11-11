export type ProposalStatus = 'generated' | 'review' | 'approved';

export type StructureType = 
  | 'digital-offshore-bahamas'
  | 'dao-wyoming'
  | 'us-hybrid-foundation';

export interface Proposal {
  id: string;
  clientName: string;
  clientEmail: string;
  country: string;
  structures: StructureType[];
  description: string;
  currency: string;
  amount: number;
  maintenanceFee: number;
  customClauses: string;
  status: ProposalStatus;
  createdAt: string;
  partnerName: string;
  partnerId: string;
}

export const STRUCTURE_OPTIONS = [
  {
    id: 'digital-offshore-bahamas' as StructureType,
    label: 'Digital Offshore Bahamas',
    description: 'Entidade offshore digital dedicada e exclusiva',
    basePrice: 3000,
    maintenanceFee: 500,
  },
  {
    id: 'dao-wyoming' as StructureType,
    label: 'DAO Wyoming',
    description: 'Organização autônoma descentralizada com reconhecimento legal',
    basePrice: 2500,
    maintenanceFee: 400,
  },
  {
    id: 'us-hybrid-foundation' as StructureType,
    label: 'Fundação US Hybrid',
    description: 'Fundação híbrida com benefícios fiscais e operacionais',
    basePrice: 4000,
    maintenanceFee: 600,
  },
];

export const STATUS_LABELS: Record<ProposalStatus, string> = {
  generated: 'Gerada',
  review: 'Revisão',
  approved: 'Aprovada',
};

export const STATUS_COLORS: Record<ProposalStatus, string> = {
  generated: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  review: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  approved: 'bg-green-500/20 text-green-400 border-green-500/30',
};
