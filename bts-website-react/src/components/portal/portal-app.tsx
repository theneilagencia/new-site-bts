import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoginPage } from '../auth/login-page';
import { PortalLayout } from './portal-layout';
import { NewProposalForm } from './new-proposal-form';
import { ProposalHistory } from './proposal-history';
import { PartnerProfile } from './partner-profile';
import { PartnerDashboard } from './partner-dashboard';
import { AdminDashboard } from './admin-dashboard';
import { AdminProposals } from './admin-proposals';
import { AdminUsers } from './admin-users';
import { PDFViewerModal } from './pdf-viewer-modal';
import { Proposal } from '@/lib/proposal-types';
import { User } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { sendStatusChangeNotification } from '@/lib/email-notifications';

interface PortalAppProps {
  onBackToPublic?: () => void;
}

// Production - Clean database
const MOCK_PROPOSALS: Proposal[] = [];

// Production - SuperAdmin only (managed in AuthContext)
const MOCK_USERS: User[] = [
  {
    id: 'superadmin-001',
    name: 'Super Admin',
    email: 'admin@btsglobalcorp.com',
    role: 'admin',
    company: 'BTS Global Corp',
    status: 'active',
  },
];

export function PortalApp({ onBackToPublic }: PortalAppProps) {
  const { user, isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [viewingProposal, setViewingProposal] = useState<Proposal | null>(null);

  // If not authenticated, show login
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => {}} />;
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

  const handleApproveProposal = async (id: string) => {
    const proposal = proposals.find(p => p.id === id);
    if (!proposal) return;

    const previousStatus = proposal.status;
    const newStatus: 'approved' = 'approved';

    setProposals(proposals.map(p => 
      p.id === id ? { ...p, status: newStatus } : p
    ));
    
    toast.success('Proposta aprovada!');

    // Send email notification
    const emailSent = await sendStatusChangeNotification({
      proposal: { ...proposal, status: newStatus },
      previousStatus,
      newStatus,
    });

    if (emailSent) {
      toast.success('Notificação enviada por email!', {
        description: 'comercial@btsglobalcorp.com, vinicius.debian@btsglobalcorp.com',
      });
    }
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
        case 'dashboard':
          return <PartnerDashboard proposals={proposals.filter(p => p.partnerId === user.id)} />;
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
          return <PartnerDashboard proposals={proposals.filter(p => p.partnerId === user.id)} />;
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