import { motion } from 'framer-motion';
import { FileText, Filter, Search, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Proposal } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';
import { useState } from 'react';

export function ProposalsHistory() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [proposals] = useLocalStorage<Proposal[]>('bts-proposals', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const userProposals = proposals.filter(p => p.partnerId === user?.id);

  const filteredProposals = userProposals.filter(p => {
    const matchesSearch = p.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.structureName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'rejected': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'pending': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved': return 'Aprovada';
      case 'rejected': return 'Rejeitada';
      case 'pending': return 'Pendente';
      default: return status;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mx-auto max-w-7xl"
    >
      <motion.div variants={staggerItem} className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          {t.portal.proposals.title}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.portal.proposals.subtitle}
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={staggerItem} className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por cliente ou estrutura..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#0f1729]/50 py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-slate-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#0f1729]/50 px-4 py-3 text-white focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
          >
            <option value="all">Todos</option>
            <option value="pending">Pendente</option>
            <option value="approved">Aprovada</option>
            <option value="rejected">Rejeitada</option>
          </select>
        </div>
      </motion.div>

      {/* Proposals List */}
      <motion.div variants={staggerItem} className="space-y-4">
        {filteredProposals.length > 0 ? (
          filteredProposals.map((proposal) => (
            <motion.div
              key={proposal.id}
              whileHover={{ scale: 1.01 }}
              className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6 transition-all hover:border-white/20"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#00639A] to-[#21B6F3]">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{proposal.clientName}</h3>
                    <p className="text-sm text-slate-400">{proposal.structureName}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      ID: {proposal.id.slice(0, 8)} • {formatDate(proposal.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Quantidade</p>
                    <p className="font-semibold text-white">{proposal.quantity}x</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-400">Valor Total</p>
                    <p className="text-lg font-bold text-[#21B6F3]">
                      {formatCurrency(proposal.totalPrice)}
                    </p>
                  </div>

                  <div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusColor(proposal.status)}`}>
                      {getStatusLabel(proposal.status)}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5"
                  >
                    <Download className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-12 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-slate-600" />
            <p className="text-lg text-slate-400">
              {searchTerm || statusFilter !== 'all'
                ? 'Nenhuma proposta encontrada com os filtros aplicados'
                : 'Você ainda não tem propostas. Crie sua primeira!'}
            </p>
          </div>
        )}
      </motion.div>

      {/* Summary */}
      {filteredProposals.length > 0 && (
        <motion.div
          variants={staggerItem}
          className="mt-6 rounded-xl border border-white/10 bg-[#0f1729]/50 p-6"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-sm text-slate-400">Total de Propostas</p>
              <p className="text-2xl font-bold text-white">{filteredProposals.length}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">Valor Total</p>
              <p className="text-2xl font-bold text-[#21B6F3]">
                {formatCurrency(filteredProposals.reduce((sum, p) => sum + p.totalPrice, 0))}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400">Taxa de Aprovação</p>
              <p className="text-2xl font-bold text-green-400">
                {Math.round((filteredProposals.filter(p => p.status === 'approved').length / filteredProposals.length) * 100)}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
