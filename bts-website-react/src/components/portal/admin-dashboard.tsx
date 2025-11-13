import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileCheck, Users, Eye, Check, X, Download, TrendingUp, Clock } from 'lucide-react';
import { Proposal, STATUS_LABELS, STATUS_COLORS } from '@/lib/proposal-types';

interface AdminDashboardProps {
  proposals: Proposal[];
  onViewPDF: (proposal: Proposal) => void;
  onApproveProposal: (id: string) => void;
}

export function AdminDashboard({ proposals, onViewPDF, onApproveProposal }: AdminDashboardProps) {
  const [filter, setFilter] = useState({
    partner: '',
    status: '',
    structure: '',
  });

  const filteredProposals = proposals.filter(p => {
    if (filter.partner && !p.partnerName.toLowerCase().includes(filter.partner.toLowerCase())) return false;
    if (filter.status && p.status !== filter.status) return false;
    return true;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handleDownload = (proposal: Proposal) => {
    const content = `
PROPOSTA CONTRATUAL
${proposal.id}

Cliente: ${proposal.clientName}
Email: ${proposal.clientEmail}
País: ${proposal.country}

Estruturas: ${proposal.structures.length}
Valor: ${proposal.currency} $${proposal.amount.toLocaleString()}
Taxa de Manutenção: ${proposal.currency} $${proposal.maintenanceFee.toLocaleString()}

Data de Geração: ${formatDate(proposal.createdAt)}
Parceiro Responsável: ${proposal.partnerName}

Status: ${STATUS_LABELS[proposal.status]}

---
BTS Global Corp
Infraestrutura Global para Liberdade Empresarial
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BTS-Proposta-${proposal.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const stats = {
    total: proposals.length,
    generated: proposals.filter(p => p.status === 'generated').length,
    review: proposals.filter(p => p.status === 'review').length,
    approved: proposals.filter(p => p.status === 'approved').length,
    totalValue: proposals.reduce((sum, p) => sum + p.amount, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard className="w-5 h-5 text-[#00E5FF]" />
            <h1 className="text-xl text-white">Dashboard</h1>
          </div>
          <p className="text-sm text-[#C6CEDF]/70">
            Visão geral de estatísticas e métricas
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#C6CEDF]/50">
          <Clock className="w-3 h-3" />
          <span>Atualizado agora</span>
        </div>
      </div>

      {/* Stats Cards - Compact */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 p-4 hover:bg-white/[0.05] transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#C6CEDF]/70">Total</span>
            <FileCheck className="w-4 h-4 text-[#00E5FF]/50" />
          </div>
          <p className="text-2xl text-white">{stats.total}</p>
          <p className="text-xs text-[#C6CEDF]/50 mt-1">propostas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 p-4 hover:bg-white/[0.05] transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#C6CEDF]/70">Geradas</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <p className="text-2xl text-white">{stats.generated}</p>
          <p className="text-xs text-[#C6CEDF]/50 mt-1">pendentes</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 p-4 hover:bg-white/[0.05] transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#C6CEDF]/70">Revisão</span>
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          </div>
          <p className="text-2xl text-white">{stats.review}</p>
          <p className="text-xs text-[#C6CEDF]/50 mt-1">em análise</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 p-4 hover:bg-white/[0.05] transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#C6CEDF]/70">Aprovadas</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <p className="text-2xl text-white">{stats.approved}</p>
          <p className="text-xs text-[#C6CEDF]/50 mt-1">concluídas</p>
        </motion.div>
      </div>

      {/* Additional Stats - More Compact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#1F4AFF]/5 to-transparent backdrop-blur-xl rounded-lg border border-[#1F4AFF]/20 p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-xs text-[#C6CEDF]/70">Valor Total</span>
          </div>
          <p className="text-2xl text-white">
            ${stats.totalValue.toLocaleString()}
          </p>
          <p className="text-xs text-[#C6CEDF]/50 mt-1">USD em propostas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-gradient-to-br from-[#00E5FF]/5 to-transparent backdrop-blur-xl rounded-lg border border-[#00E5FF]/20 p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-xs text-[#C6CEDF]/70">Parceiros Ativos</span>
          </div>
          <p className="text-2xl text-white">
            {new Set(proposals.map(p => p.partnerId)).size}
          </p>
          <p className="text-xs text-[#C6CEDF]/50 mt-1">gerando propostas</p>
        </motion.div>
      </div>

      {/* Recent Activity - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden"
      >
        <div className="px-4 py-3 border-b border-white/10">
          <h2 className="text-sm text-white">Atividade Recente</h2>
        </div>
        <div className="divide-y divide-white/5">
          {proposals.slice(0, 5).map((proposal, index) => (
            <motion.div
              key={proposal.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.03] transition-colors group"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  proposal.status === 'approved' ? 'bg-green-400' :
                  proposal.status === 'review' ? 'bg-yellow-400' :
                  'bg-blue-400'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{proposal.clientName}</p>
                  <p className="text-xs text-[#C6CEDF]/60">
                    {proposal.partnerName} • {formatDate(proposal.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-3">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${STATUS_COLORS[proposal.status]}`}>
                  {STATUS_LABELS[proposal.status]}
                </span>
                <button
                  onClick={() => onViewPDF(proposal)}
                  className="p-1.5 rounded hover:bg-white/10 text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-all"
                  title="Ver"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDownload(proposal)}
                  className="p-1.5 rounded hover:bg-white/10 text-[#C6CEDF] opacity-0 group-hover:opacity-100 transition-all"
                  title="Download"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {proposals.length === 0 && (
          <div className="text-center py-12">
            <FileCheck className="w-10 h-10 text-[#C6CEDF]/20 mx-auto mb-2" />
            <p className="text-sm text-[#C6CEDF]/50">Nenhuma atividade recente</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}