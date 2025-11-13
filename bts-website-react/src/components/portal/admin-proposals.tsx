import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Eye, Download, Check, Filter } from 'lucide-react';
import { Proposal, STATUS_LABELS, STATUS_COLORS } from '@/lib/proposal-types';

interface AdminProposalsProps {
  proposals: Proposal[];
  onViewPDF: (proposal: Proposal) => void;
  onApproveProposal: (id: string) => void;
}

export function AdminProposals({ proposals, onViewPDF, onApproveProposal }: AdminProposalsProps) {
  const [filter, setFilter] = useState({
    partner: '',
    status: '',
    search: '',
  });

  const filteredProposals = proposals.filter(p => {
    if (filter.partner && !p.partnerName.toLowerCase().includes(filter.partner.toLowerCase())) return false;
    if (filter.status && p.status !== filter.status) return false;
    if (filter.search && 
        !p.clientName.toLowerCase().includes(filter.search.toLowerCase()) &&
        !p.id.toLowerCase().includes(filter.search.toLowerCase())) return false;
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

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileCheck className="w-5 h-5 text-[#00E5FF]" />
            <h1 className="text-xl text-white">Propostas</h1>
          </div>
          <p className="text-sm text-[#C6CEDF]/70">
            Gerenciar e aprovar propostas contratuais
          </p>
        </div>
        <div className="text-xs text-[#C6CEDF]/50">
          {filteredProposals.length} de {proposals.length}
        </div>
      </div>

      {/* Filters - Compact */}
      <div className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <input
            type="text"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            placeholder="Buscar ID ou cliente..."
            className="px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] transition-colors"
          />
          <input
            type="text"
            value={filter.partner}
            onChange={(e) => setFilter({ ...filter, partner: e.target.value })}
            placeholder="Filtrar por parceiro..."
            className="px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] transition-colors"
          />
          <select
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#1F4AFF] transition-colors"
          >
            <option value="">Todos os status</option>
            <option value="generated">Gerada</option>
            <option value="review">Revisão</option>
            <option value="approved">Aprovada</option>
          </select>
          <button
            onClick={() => setFilter({ partner: '', status: '', search: '' })}
            className="px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-[#C6CEDF] hover:bg-white/10 transition-colors"
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Proposals Table */}
      <div className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden">
        {filteredProposals.length === 0 ? (
          <div className="text-center py-16">
            <FileCheck className="w-12 h-12 text-[#C6CEDF]/20 mx-auto mb-3" />
            <p className="text-sm text-[#C6CEDF]/50">Nenhuma proposta encontrada</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Parceiro
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Estrut.
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Valor
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredProposals.map((proposal, index) => (
                    <motion.tr
                      key={proposal.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.02 }}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="px-4 py-2.5">
                        <span className="font-mono text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-1.5 py-0.5 rounded border border-[#00E5FF]/20">
                          {proposal.id}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <p className="text-sm text-white">{proposal.partnerName}</p>
                      </td>
                      <td className="px-4 py-2.5">
                        <div>
                          <p className="text-sm text-white">{proposal.clientName}</p>
                          <p className="text-xs text-[#C6CEDF]/50">{proposal.clientEmail}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2.5">
                        <p className="text-xs text-[#C6CEDF]/70">
                          {proposal.structures.length}x
                        </p>
                      </td>
                      <td className="px-4 py-2.5">
                        <p className="text-sm text-white">
                          ${proposal.amount.toLocaleString()}
                        </p>
                      </td>
                      <td className="px-4 py-2.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${STATUS_COLORS[proposal.status]}`}>
                          {STATUS_LABELS[proposal.status]}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-xs text-[#C6CEDF]/70">
                        {formatDate(proposal.createdAt)}
                      </td>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => onViewPDF(proposal)}
                            className="p-1.5 rounded hover:bg-white/10 text-[#00E5FF] transition-colors"
                            title="Ver PDF"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDownload(proposal)}
                            className="p-1.5 rounded hover:bg-white/10 text-[#C6CEDF] transition-colors"
                            title="Baixar PDF"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                          {proposal.status !== 'approved' && (
                            <button
                              onClick={() => onApproveProposal(proposal.id)}
                              className="p-1.5 rounded hover:bg-green-500/10 text-green-400 transition-colors"
                              title="Aprovar"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden divide-y divide-white/5">
              {filteredProposals.map((proposal, index) => (
                <motion.div
                  key={proposal.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="p-4 space-y-2.5"
                >
                  {/* ID Badge */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-1.5 py-0.5 rounded border border-[#00E5FF]/20">
                      {proposal.id}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-[#C6CEDF]/50 mb-0.5">Parceiro</p>
                      <p className="text-sm text-white">{proposal.partnerName}</p>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${STATUS_COLORS[proposal.status]}`}>
                      {STATUS_LABELS[proposal.status]}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-xs text-[#C6CEDF]/50 mb-0.5">Cliente</p>
                    <p className="text-sm text-white">{proposal.clientName}</p>
                    <p className="text-xs text-[#C6CEDF]/50">{proposal.clientEmail}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-[#C6CEDF]/50 mb-0.5">Valor</p>
                      <p className="text-sm text-white">
                        ${proposal.amount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#C6CEDF]/50 mb-0.5">Data</p>
                      <p className="text-sm text-white">{formatDate(proposal.createdAt)}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => onViewPDF(proposal)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#1F4AFF]/20 border border-[#1F4AFF]/30 rounded text-[#00E5FF] hover:bg-[#1F4AFF]/30 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-xs">Ver</span>
                    </button>
                    <button
                      onClick={() => handleDownload(proposal)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded text-[#C6CEDF] hover:bg-white/10 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="text-xs">PDF</span>
                    </button>
                    {proposal.status !== 'approved' && (
                      <button
                        onClick={() => onApproveProposal(proposal.id)}
                        className="px-3 py-2 bg-green-500/10 border border-green-500/20 rounded text-green-400 hover:bg-green-500/20 transition-colors"
                        title="Aprovar"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}