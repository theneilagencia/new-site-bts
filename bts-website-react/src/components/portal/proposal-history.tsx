import React from 'react';
import { motion } from 'framer-motion';
import { History, Eye, Copy, Edit, Trash2, Download } from 'lucide-react';
import { Proposal, STATUS_LABELS, STATUS_COLORS } from '@/lib/proposal-types';

interface ProposalHistoryProps {
  proposals: Proposal[];
  onViewPDF: (proposal: Proposal) => void;
  onDuplicate: (proposal: Proposal) => void;
  onDelete: (id: string) => void;
}

export function ProposalHistory({ 
  proposals, 
  onViewPDF, 
  onDuplicate, 
  onDelete 
}: ProposalHistoryProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const handleDownload = (proposal: Proposal) => {
    // Dynamically import and generate PDF
    import('@/lib/pdf-generator').then(({ generateProposalPDF }) => {
      generateProposalPDF(proposal);
    }).catch(err => {
      console.error('Erro ao gerar PDF:', err);
      alert('Erro ao gerar PDF. Por favor, tente novamente.');
    });
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <History className="w-8 h-8 text-[#00E5FF]" />
          <h1 className="text-3xl text-white">Histórico de Propostas</h1>
        </div>
        <p className="text-[#C6CEDF]">
          Visualize e gerencie todas as propostas contratuais criadas.
        </p>
      </div>

      {proposals.length === 0 ? (
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15 p-12 text-center">
          <History className="w-16 h-16 text-[#C6CEDF]/30 mx-auto mb-4" />
          <p className="text-[#C6CEDF] mb-2">Nenhuma proposta criada ainda</p>
          <p className="text-sm text-[#C6CEDF]/70">Crie sua primeira proposta para começar</p>
        </div>
      ) : (
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    ID Proposta
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    Estrutura
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-4 text-left text-xs text-[#C6CEDF] uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {proposals.map((proposal, index) => (
                  <motion.tr
                    key={proposal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-1 rounded border border-[#00E5FF]/20">
                          {proposal.id}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-white font-medium">{proposal.clientName}</p>
                        <p className="text-xs text-[#C6CEDF]/70">{proposal.clientEmail}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[#C6CEDF] text-sm">
                        {proposal.structures.length} estrutura(s)
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white font-medium">
                        {proposal.currency} ${proposal.amount.toLocaleString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs border ${STATUS_COLORS[proposal.status]}`}>
                        {STATUS_LABELS[proposal.status]}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[#C6CEDF] text-sm">
                      {formatDate(proposal.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onViewPDF(proposal)}
                          className="p-2 rounded-lg hover:bg-white/10 text-[#00E5FF] transition-colors"
                          title="Visualizar PDF"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDownload(proposal)}
                          className="p-2 rounded-lg hover:bg-white/10 text-[#C6CEDF] transition-colors"
                          title="Baixar PDF"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDuplicate(proposal)}
                          className="p-2 rounded-lg hover:bg-white/10 text-[#C6CEDF] transition-colors"
                          title="Duplicar"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDelete(proposal.id)}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-white/10">
            {proposals.map((proposal, index) => (
              <motion.div
                key={proposal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 space-y-3"
              >
                {/* ID Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-1 rounded border border-[#00E5FF]/20">
                    {proposal.id}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{proposal.clientName}</p>
                    <p className="text-xs text-[#C6CEDF]/70">{proposal.clientEmail}</p>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs border ${STATUS_COLORS[proposal.status]}`}>
                    {STATUS_LABELS[proposal.status]}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#C6CEDF]/70 mb-1">Valor</p>
                    <p className="text-white font-medium">
                      {proposal.currency} ${proposal.amount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C6CEDF]/70 mb-1">Data</p>
                    <p className="text-white">{formatDate(proposal.createdAt)}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => onViewPDF(proposal)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1F4AFF]/20 border border-[#1F4AFF]/30 rounded-lg text-[#00E5FF] hover:bg-[#1F4AFF]/30 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Ver</span>
                  </button>
                  <button
                    onClick={() => handleDownload(proposal)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[#C6CEDF] hover:bg-white/10 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">PDF</span>
                  </button>
                  <button
                    onClick={() => onDuplicate(proposal)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[#C6CEDF] hover:bg-white/10 transition-colors"
                    title="Duplicar"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(proposal.id)}
                    className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:bg-red-500/20 transition-colors"
                    title="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}