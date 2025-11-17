import React, { useState, useEffect, useCallback } from 'react';
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
import { NotificationSettings } from './notification-settings';
import { PDFViewerModal } from './pdf-viewer-modal';
import { Proposal } from '@/lib/proposal-types';
import { User } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { sendStatusChangeNotification } from '@/lib/email-notifications';
import { ApiError, usersApi, ApiUser } from '@/lib/api';

interface PortalAppProps {
  onBackToPublic?: () => void;
}

const MOCK_PROPOSALS: Proposal[] = [];

const mapApiUserToUser = (apiUser: ApiUser): User => ({
  id: apiUser.id,
  email: apiUser.email,
  name: apiUser.name,
  role: apiUser.role,
  company: apiUser.company,
  phone: apiUser.phone,
  status: apiUser.status,
});

export function PortalApp({ onBackToPublic }: PortalAppProps) {
  const { user, isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
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

  const getErrorMessage = (err: unknown) => {
    if (err instanceof ApiError) return err.message;
    if (err instanceof Error) return err.message;
    return 'Tente novamente em instantes.';
  };

  const fetchUsers = useCallback(async () => {
    if (user?.role !== 'admin') return;
    setIsLoadingUsers(true);
    try {
      const apiUsers = await usersApi.list();
      setUsers(apiUsers.map(mapApiUserToUser));
    } catch (err) {
      console.error('Erro ao carregar usuários:', err);
      toast.error('Não foi possível carregar os usuários', {
        description: getErrorMessage(err),
      });
    } finally {
      setIsLoadingUsers(false);
    }
  }, [user?.role]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleUserActionError = (title: string, err: unknown) => {
    console.error(title, err);
    toast.error(title, { description: getErrorMessage(err) });
  };

  const handleCreateUser = async (userData: Omit<User, 'id'> & { password: string }) => {
    try {
      await usersApi.create({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
        company: userData.company,
        phone: userData.phone,
        status: userData.status ?? 'active',
      });

      toast.success('Usuário criado e salvo com sucesso!', {
        description: `${userData.name} (${userData.email})`,
      });

      await fetchUsers();
    } catch (err) {
      handleUserActionError('Erro ao criar usuário', err);
      throw err;
    }
  };

  const handleUpdateUser = async (id: string, updates: Partial<User>) => {
    try {
      await usersApi.update(id, updates);
      toast.success('Usuário atualizado e salvo!');
      await fetchUsers();
    } catch (err) {
      handleUserActionError('Erro ao atualizar usuário', err);
      throw err;
    }
  };

  const handleToggleUserStatus = async (id: string, nextStatus: 'active' | 'inactive') => {
    try {
      await usersApi.update(id, { status: nextStatus });
      toast.success(
        nextStatus === 'active' ? 'Usuário reativado com sucesso!' : 'Usuário desativado com sucesso!'
      );
      await fetchUsers();
    } catch (err) {
      handleUserActionError('Erro ao atualizar status do usuário', err);
      throw err;
    }
  };

  const handleResetPassword = async (id: string, newPassword: string) => {
    try {
      await usersApi.resetPassword(id, newPassword);
      toast.success('Senha resetada e salva!', {
        description: 'O usuário já pode fazer login com a nova senha.',
      });
    } catch (err) {
      handleUserActionError('Erro ao resetar senha', err);
      throw err;
    }
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
                isLoading={isLoadingUsers}
              onCreateUser={handleCreateUser}
              onUpdateUser={handleUpdateUser}
              onToggleStatus={handleToggleUserStatus}
              onResetPassword={handleResetPassword}
            />
          );
        case 'settings':
          return <NotificationSettings />;
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