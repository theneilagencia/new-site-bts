import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { Proposal, STATUS_LABELS } from '@/lib/proposal-types';

interface PartnerDashboardProps {
  proposals: Proposal[];
}

export function PartnerDashboard({ proposals }: PartnerDashboardProps) {
  // Calculate stats
  const totalProposals = proposals.length;
  const approvedProposals = proposals.filter(p => p.status === 'approved').length;
  const pendingProposals = proposals.filter(p => 
    p.status === 'review' || p.status === 'generated' || p.status === 'sent' || p.status === 'draft'
  ).length;
  const totalRevenue = proposals
    .filter(p => p.status === 'approved')
    .reduce((sum, p) => sum + p.amount, 0);

  const stats = [
    {
      id: 'total',
      label: 'Total de Propostas',
      value: totalProposals,
      icon: FileText,
      color: 'from-[#1F4AFF] to-[#00E5FF]',
      bgColor: 'bg-[#1F4AFF]/10',
    },
    {
      id: 'approved',
      label: 'Propostas Aprovadas',
      value: approvedProposals,
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
    },
    {
      id: 'pending',
      label: 'Aguardando Análise',
      value: pendingProposals,
      icon: Clock,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      id: 'revenue',
      label: 'Valor total de Propostas',
      value: `$${totalRevenue.toLocaleString('en-US')}`,
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const recentProposals = proposals.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-[#1F4AFF]/20 to-[#00E5FF]/20 border border-[#1F4AFF]/30">
          <LayoutDashboard className="w-6 h-6 text-[#00E5FF]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-sm text-[#C6CEDF]">Visão geral das suas propostas</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor} border border-white/10`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-sm text-[#C6CEDF] mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Proposals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur-xl" />
        <div className="relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00E5FF]" />
            Propostas Recentes
          </h2>

          {recentProposals.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-[#C6CEDF]/30 mx-auto mb-3" />
              <p className="text-[#C6CEDF]/70">Nenhuma proposta criada ainda</p>
              <p className="text-sm text-[#C6CEDF]/50 mt-1">
                Comece criando sua primeira proposta
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {recentProposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex-1">
                    <p className="text-white font-medium">{proposal.clientName}</p>
                    <p className="text-sm text-[#C6CEDF]/70">{proposal.clientEmail}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-white font-medium">
                        {proposal.currency} {proposal.amount.toLocaleString()}
                      </p>
                      <p className="text-xs text-[#C6CEDF]/70">
                        {new Date(proposal.createdAt).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        proposal.status === 'approved'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : proposal.status === 'rejected'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {STATUS_LABELS[proposal.status as keyof typeof STATUS_LABELS]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
