import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { LoginPage } from '../auth/login-page';
import { PortalLayout } from './portal-layout';
import { NewProposalForm } from './new-proposal-form';
import { ProposalHistory } from './proposal-history';
import { PartnerProfile } from './partner-profile';
import { AdminDashboard } from './admin-dashboard';
import { AdminProposals } from './admin-proposals';
import { AdminUsers } from './admin-users';
import { PDFViewerModal } from './pdf-viewer-modal';
import { Proposal } from '../../lib/proposal-types';
import { User } from '../../contexts/auth-context';
import { toast } from 'sonner@2.0.3';

interface PortalAppProps {
  onBackToPublic?: () => void;
}

// Mock initial data
const MOCK_PROPOSALS: Proposal[] = [
  {
    id: 'PROP-1731337200000',
    clientName: 'Cassio Altiva',
    clientEmail: 'cassio@altiva.com',
    country: 'Brasil',
    structures: ['digital-offshore-bahamas'],
    description: 'Cliente busca estruturação offshore para consultoria internacional',
    currency: 'USD',
    amount: 3000,
    maintenanceFee: 500,
    customClauses: '',
    status: 'generated',
    createdAt: '2025-11-10T10:00:00.000Z',
    partnerName: 'Elcio Reis',
    partnerId: '1',
  },
  {
    id: 'PROP-1731250800000',
    clientName: 'Ana Duarte',
    clientEmail: 'ana@duarte.com',
    country: 'Portugal',
    structures: ['dao-wyoming'],
    description: 'Criação de DAO para projeto Web3',
    currency: 'USD',
    amount: 2500,
    maintenanceFee: 400,
    customClauses: '',
    status: 'review',
    createdAt: '2025-11-09T10:00:00.000Z',
    partnerName: 'Elcio Reis',
    partnerId: '1',
  },
];

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Elcio Reis',
    email: 'elcio@bts.com',
    role: 'partner',
    status: 'active',
  },
  {
    id: '2',
    name: 'Admin BTS',
    email: 'admin@bts.com',
    role: 'admin',
    status: 'active',
  },
];

export function PortalApp({ onBackToPublic }: PortalAppProps) {
  const { user, isAuthenticated } = useAuth();
  const [showPortal, setShowPortal] = useState(false);
  const [activeSection, setActiveSection] = useState(
    user?.role === 'admin' ? 'dashboard' : 'new-proposal'
  );
  const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [viewingProposal, setViewingProposal] = useState<Proposal | null>(null);

  const handleLoginSuccess = () => {
    setShowPortal(true);
  };

  // If not authenticated or not showing portal, show login
  if (!isAuthenticated || !showPortal) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  const handleProposalCreated = (proposal: Proposal) => {
    setProposals([proposal, ...proposals]);
    toast.success('Proposta gerada com sucesso!');
    setActiveSection('history');
  };

  const handleDuplicate = (proposal: Proposal) => {
    const duplicated: Proposal = {
      ...proposal,
      id: `PROP-${Date.now()}`,
      status: 'generated',
      createdAt: new Date().toISOString(),
    };
    setProposals([duplicated, ...proposals]);
    toast.success('Proposta duplicada com sucesso!');
  };

  const handleDelete = (id: string) => {
    if (confirm('Deseja realmente excluir esta proposta?')) {
      setProposals(proposals.filter(p => p.id !== id));
      toast.success('Proposta excluída com sucesso!');
    }
  };

  const handleApproveProposal = (id: string) => {
    setProposals(proposals.map(p => 
      p.id === id ? { ...p, status: 'approved' as const } : p
    ));
    toast.success('Proposta aprovada!');
  };

  const handleCreateUser = (userData: Omit<User, 'id'> & { password: string }) => {
    const newUser: User = {
      id: `${Date.now()}`,
      name: userData.name,
      email: userData.email,
      role: userData.role,
      status: userData.status,
    };
    setUsers([...users, newUser]);
    toast.success('Usuário criado com sucesso!');
  };

  const handleUpdateUser = (id: string, updates: Partial<User>) => {
    setUsers(users.map(u => u.id === id ? { ...u, ...updates } : u));
    toast.success('Usuário atualizado com sucesso!');
  };

  const handleToggleUserStatus = (id: string) => {
    setUsers(users.map(u => 
      u.id === id 
        ? { ...u, status: u.status === 'active' ? 'inactive' as const : 'active' as const }
        : u
    ));
    toast.success('Status atualizado com sucesso!');
  };

  const renderContent = () => {
    // Partner sections
    if (user?.role === 'partner') {
      switch (activeSection) {
        case 'new-proposal':
          return <NewProposalForm onProposalCreated={handleProposalCreated} />;
        case 'history':
          return (
            <ProposalHistory
              proposals={proposals.filter(p => p.partnerId === user.id)}
              onViewPDF={setViewingProposal}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
            />
          );
        case 'profile':
          return <PartnerProfile />;
        default:
          return <NewProposalForm onProposalCreated={handleProposalCreated} />;
      }
    }

    // Admin sections
    if (user?.role === 'admin') {
      switch (activeSection) {
        case 'dashboard':
          return (
            <AdminDashboard
              proposals={proposals}
              onViewPDF={setViewingProposal}
              onApproveProposal={handleApproveProposal}
            />
          );
        case 'proposals':
          return (
            <AdminProposals
              proposals={proposals}
              onViewPDF={setViewingProposal}
              onApproveProposal={handleApproveProposal}
            />
          );
        case 'users':
          return (
            <AdminUsers
              users={users}
              onCreateUser={handleCreateUser}
              onUpdateUser={handleUpdateUser}
              onToggleStatus={handleToggleUserStatus}
            />
          );
        default:
          return (
            <AdminDashboard
              proposals={proposals}
              onViewPDF={setViewingProposal}
              onApproveProposal={handleApproveProposal}
            />
          );
      }
    }

    return null;
  };

  return (
    <>
      <PortalLayout 
        activeSection={activeSection} 
        onNavigate={setActiveSection}
        onBackToPublic={onBackToPublic}
      >
        {renderContent()}
      </PortalLayout>
      
      <PDFViewerModal
        proposal={viewingProposal}
        onClose={() => setViewingProposal(null)}
      />
    </>
  );
}