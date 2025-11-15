import React, { useState } from "react";
import {
  useAuth,
  getAllStoredUsers,
  createStoredUser,
  updateStoredUser,
  resetStoredUserPassword,
  deleteStoredUser,
} from "@/contexts/AuthContext";
import { LoginPage } from "../auth/login-page";
import { PortalLayout } from "./portal-layout";
import { NewProposalForm } from "./new-proposal-form";
import { ProposalHistory } from "./proposal-history";
import { PartnerProfile } from "./partner-profile";
import { PartnerDashboard } from "./partner-dashboard";
import { AdminDashboard } from "./admin-dashboard";
import { AdminProposals } from "./admin-proposals";
import { AdminUsers } from "./admin-users";
import { NotificationSettings } from "./notification-settings";
import { PDFViewerModal } from "./pdf-viewer-modal";
import { Proposal } from "@/lib/proposal-types";
import { User } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { sendStatusChangeNotification } from "@/lib/email-notifications";
import { useEffect } from "react";

interface PortalAppProps {
  onBackToPublic?: () => void;
}

// Production - Clean database
const MOCK_PROPOSALS: Proposal[] = [];

export function PortalApp({ onBackToPublic }: PortalAppProps) {
  const { user, isAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [proposals, setProposals] = useState<Proposal[]>(MOCK_PROPOSALS);

  // Load users from localStorage on mount
  const [users, setUsers] = useState<User[]>(() => getAllStoredUsers());

  // Sync users whenever they change
  useEffect(() => {
    setUsers(getAllStoredUsers());
  }, []);
  const [viewingProposal, setViewingProposal] = useState<Proposal | null>(null);

  // If not authenticated, show login
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => {}} />;
  }

  if (!user) {
    return null;
  }

  const handleProposalCreated = (proposal: Proposal) => {
    setProposals([proposal, ...proposals]);
    toast.success("Proposta gerada com sucesso!");
    setActiveSection("history");
  };

  const handleDuplicate = (proposal: Proposal) => {
    const duplicated: Proposal = {
      ...proposal,
      id: `PROP-${Date.now()}`,
      status: "generated",
      createdAt: new Date().toISOString(),
    };
    setProposals([duplicated, ...proposals]);
    toast.success("Proposta duplicada com sucesso!");
  };

  const handleDelete = (id: string) => {
    if (confirm("Deseja realmente excluir esta proposta?")) {
      setProposals(proposals.filter((p) => p.id !== id));
      toast.success("Proposta excluída com sucesso!");
    }
  };

  const handleApproveProposal = async (id: string) => {
    const proposal = proposals.find((p) => p.id === id);
    if (!proposal) return;

    const previousStatus = proposal.status;
    const newStatus: "approved" = "approved";

    setProposals(
      proposals.map((p) => (p.id === id ? { ...p, status: newStatus } : p)),
    );

    toast.success("Proposta aprovada!");

    // Send email notification
    const emailSent = await sendStatusChangeNotification({
      proposal: { ...proposal, status: newStatus },
      previousStatus,
      newStatus,
    });

    if (emailSent) {
      toast.success("Notificação enviada por email!", {
        description:
          "comercial@btsglobalcorp.com, vinicius.debian@btsglobalcorp.com",
      });
    }
  };

  const handleCreateUser = (
    userData: Omit<User, "id"> & { password: string },
  ) => {
    try {
      // Validate email
      if (!userData.email || !userData.email.includes("@")) {
        toast.error("E-mail inválido!");
        return;
      }

      // Validate password
      if (!userData.password || userData.password.length < 6) {
        toast.error("Senha deve ter no mínimo 6 caracteres!");
        return;
      }

      const newUser: User & { password: string } = {
        id: `user_${Date.now()}`,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        status: userData.status || "active",
        password: userData.password,
      };

      // Save to localStorage
      const success = createStoredUser(newUser);

      if (!success) {
        toast.error("E-mail já cadastrado!", {
          description: "Use outro e-mail ou edite o usuário existente.",
        });
        return;
      }

      // Update local state
      setUsers(getAllStoredUsers());

      toast.success("✅ Usuário criado e salvo com sucesso!", {
        description: `${newUser.name} (${newUser.email})`,
      });

      console.log("✅ Usuário persistido no localStorage");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Erro ao criar usuário!", {
        description: "Tente novamente ou contate o suporte.",
      });
    }
  };

  const handleUpdateUser = (id: string, updates: Partial<User>) => {
    const success = updateStoredUser(id, updates);

    if (success) {
      setUsers(getAllStoredUsers());
      toast.success("✅ Usuário atualizado e salvo!");
    } else {
      toast.error("❌ Erro ao atualizar usuário!");
    }
  };

  const handleToggleUserStatus = (id: string) => {
    const targetUser = users.find((u) => u.id === id);
    if (!targetUser) return;

    const nextStatus = targetUser.status === "active" ? "inactive" : "active";
    const success = updateStoredUser(id, { status: nextStatus });

    if (success) {
      setUsers(getAllStoredUsers());
      toast.success(
        nextStatus === "active"
          ? "✅ Usuário reativado com sucesso!"
          : "✅ Usuário desativado com sucesso!",
      );
    } else {
      toast.error("❌ Não foi possível atualizar o status do usuário.");
    }
  };

  const handleResetPassword = (id: string, newPassword: string) => {
    const success = resetStoredUserPassword(id, newPassword);

    if (success) {
      toast.success("✅ Senha resetada e salva!", {
        description: "O usuário já pode fazer login com a nova senha.",
      });
      console.log("✅ Nova senha persistida no localStorage");
    } else {
      toast.error("❌ Erro ao resetar senha!");
    }
  };

  const userRole = user?.role;
  const isPartner = userRole === "partner";
  const isAdminUser = userRole === "admin" || userRole === "superadmin";

  const handleDeleteUser = (id: string) => {
    const targetUser = users.find((u) => u.id === id);
    if (!targetUser) return;

    if (targetUser.id === user?.id) {
      toast.error("❌ Você não pode excluir o próprio usuário logado.");
      return;
    }

    if (targetUser.role === "superadmin") {
      toast.error("❌ Não é possível excluir outro Super Admin.");
      return;
    }

    const confirmed = confirm(
      `Deseja realmente excluir ${targetUser.name}? Essa ação não pode ser desfeita.`,
    );
    if (!confirmed) return;

    const success = deleteStoredUser(id);

    if (success) {
      setUsers(getAllStoredUsers());
      toast.success("🗑️ Usuário excluído com sucesso!", {
        description: `${targetUser.name} (${targetUser.email})`,
      });
    } else {
      toast.error("❌ Erro ao excluir usuário.");
    }
  };

  const renderContent = () => {
    // Partner sections
    if (isPartner) {
      switch (activeSection) {
        case "dashboard":
          return (
            <PartnerDashboard
              proposals={proposals.filter((p) => p.partnerId === user.id)}
            />
          );
        case "new-proposal":
          return <NewProposalForm onProposalCreated={handleProposalCreated} />;
        case "history":
          return (
            <ProposalHistory
              proposals={proposals.filter((p) => p.partnerId === user.id)}
              onViewPDF={setViewingProposal}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
            />
          );
        case "profile":
          return <PartnerProfile />;
        default:
          return (
            <PartnerDashboard
              proposals={proposals.filter((p) => p.partnerId === user.id)}
            />
          );
      }
    }

    // Admin sections
    if (isAdminUser) {
      switch (activeSection) {
        case "dashboard":
          return (
            <AdminDashboard
              proposals={proposals}
              onViewPDF={setViewingProposal}
              onApproveProposal={handleApproveProposal}
            />
          );
        case "proposals":
          return (
            <AdminProposals
              proposals={proposals}
              onViewPDF={setViewingProposal}
              onApproveProposal={handleApproveProposal}
            />
          );
        case "users":
          return (
            <AdminUsers
              users={users}
              onCreateUser={handleCreateUser}
              onUpdateUser={handleUpdateUser}
              onToggleStatus={handleToggleUserStatus}
              onResetPassword={handleResetPassword}
              onDeleteUser={handleDeleteUser}
              currentUserRole={userRole}
            />
          );
        case "settings":
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
