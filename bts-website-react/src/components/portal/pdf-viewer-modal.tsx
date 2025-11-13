import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { Proposal, STRUCTURE_OPTIONS } from '@/lib/proposal-types';

interface PDFViewerModalProps {
  proposal: Proposal | null;
  onClose: () => void;
}

export function PDFViewerModal({ proposal, onClose }: PDFViewerModalProps) {
  if (!proposal) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const getStructureDetails = () => {
    return proposal.structures.map(id => 
      STRUCTURE_OPTIONS.find(s => s.id === id)
    ).filter(Boolean);
  };

  const handleDownload = () => {
    if (!proposal) return;
    
    // Dynamically import and generate PDF
    import('@/lib/pdf-generator').then(({ generateProposalPDF }) => {
      generateProposalPDF(proposal);
    }).catch(err => {
      console.error('Erro ao gerar PDF:', err);
      alert('Erro ao gerar PDF. Por favor, tente novamente.');
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl text-white font-medium">Proposta Contratual - {proposal.id}</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-[#1F4AFF]/20 border border-[#1F4AFF]/30 rounded-lg text-[#00E5FF] hover:bg-[#1F4AFF]/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 text-[#C6CEDF] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Content Preview */}
          <div className="flex-1 overflow-auto p-8 space-y-8">
            {/* Cover Page */}
            <div className="bg-gradient-to-br from-[#1F4AFF]/10 to-[#00E5FF]/10 border border-[#1F4AFF]/20 rounded-xl p-12 text-center">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-xs text-[#00E5FF] uppercase tracking-widest">Confidencial</span>
                </div>
                <h1 className="text-3xl text-white font-medium">Proposta Contratual</h1>
                <div className="text-[#C6CEDF] space-y-1">
                  <p className="text-xl">{proposal.clientName}</p>
                  <p className="text-sm">{formatDate(proposal.createdAt)}</p>
                </div>
                <div className="pt-4 text-xs text-[#C6CEDF]/70">
                  <p>Emitida por: {proposal.partnerName}</p>
                  <p>ID: {proposal.id}</p>
                </div>
              </div>
            </div>

            {/* Section 1: BTS Introduction */}
            <div className="space-y-4">
              <h2 className="text-xl text-white border-b border-white/10 pb-2">1. Apresentação da BTS Global Corp</h2>
              <div className="text-[#C6CEDF] space-y-3 text-sm leading-relaxed">
                <p>
                  A BTS Global Corp é uma infraestrutura digital para estruturação internacional, privacidade e conformidade jurídica. 
                  Oferecemos soluções completas para fundadores, family offices e cidadãos globais que buscam operar com liberdade, 
                  transparência e segurança em jurisdições estratégicas.
                </p>
                <p>
                  Nossa plataforma combina tecnologia de ponta com expertise jurídica internacional, garantindo que cada estrutura 
                  seja construída sob os mais altos padrões de compliance e governança.
                </p>
              </div>
            </div>

            {/* Section 2: Scope */}
            <div className="space-y-4">
              <h2 className="text-xl text-white border-b border-white/10 pb-2">2. Escopo da Proposta</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-[#C6CEDF] mb-2">Cliente:</p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white">{proposal.clientName}</p>
                    <p className="text-sm text-[#C6CEDF]">{proposal.clientEmail}</p>
                    <p className="text-sm text-[#C6CEDF]">Jurisdição: {proposal.country}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-[#C6CEDF] mb-2">Estruturas Selecionadas:</p>
                  <div className="space-y-2">
                    {getStructureDetails().map((structure) => (
                      structure && (
                        <div key={structure.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-white font-medium">{structure.label}</p>
                            <p className="text-[#00E5FF]">${structure.basePrice.toLocaleString()}</p>
                          </div>
                          <p className="text-sm text-[#C6CEDF]">{structure.description}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {proposal.description && (
                  <div>
                    <p className="text-sm text-[#C6CEDF] mb-2">Descrição do Caso:</p>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-[#C6CEDF] text-sm">{proposal.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Commercial Terms */}
            <div className="space-y-4">
              <h2 className="text-xl text-white border-b border-white/10 pb-2">3. Condições Comerciais e Operacionais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-xs text-[#C6CEDF] mb-1">Valor Total da Estrutura</p>
                  <p className="text-2xl text-white font-medium">
                    {proposal.currency} ${proposal.amount.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-xs text-[#C6CEDF] mb-1">Manutenção Anual</p>
                  <p className="text-2xl text-white font-medium">
                    {proposal.currency} ${proposal.maintenanceFee.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-[#C6CEDF] space-y-2">
                <p><strong className="text-white">Prazo de Execução:</strong> 30 a 45 dias úteis após aprovação</p>
                <p><strong className="text-white">Entregáveis:</strong> Certificados digitais, documentação completa, acesso ao portal de gestão</p>
                <p><strong className="text-white">Forma de Pagamento:</strong> Wire transfer, criptomoedas ou outros métodos acordados</p>
              </div>
            </div>

            {/* Section 4: Terms and Clauses */}
            <div className="space-y-4">
              <h2 className="text-xl text-white border-b border-white/10 pb-2">4. Termos e Cláusulas Contratuais</h2>
              <div className="text-[#C6CEDF] text-sm space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-2">4.1 Vigência</h3>
                  <p>Este contrato entra em vigor a partir da data de assinatura e possui vigência indeterminada, podendo ser rescindido conforme cláusulas estabelecidas.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">4.2 Obrigações das Partes</h3>
                  <p><strong>BTS:</strong> Fornecer toda infraestrutura digital, documentação legal e suporte necessário.</p>
                  <p><strong>Cliente:</strong> Fornecer informações precisas, realizar pagamentos conforme acordado e cumprir requisitos de compliance.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">4.3 Confidencialidade</h3>
                  <p>Todas as informações trocadas entre as partes são consideradas confidenciais e protegidas sob selo "One-Way Mirror of Trust".</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">4.4 Privacidade e Compliance</h3>
                  <p>A BTS opera sob rigorosos padrões de privacidade e conformidade internacional, garantindo total transparência verificável.</p>
                </div>
                {proposal.customClauses && (
                  <div>
                    <h3 className="text-white font-medium mb-2">4.5 Cláusulas Específicas</h3>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p>{proposal.customClauses}</p>
                    </div>
                  </div>
                )}
                <div>
                  <h3 className="text-white font-medium mb-2">4.6 Jurisdição</h3>
                  <p>Este contrato será regido pelas leis aplicáveis às jurisdições selecionadas: {proposal.country}.</p>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="space-y-4">
              <h2 className="text-xl text-white border-b border-white/10 pb-2">5. Assinatura Digital</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
                  <p className="text-sm text-[#C6CEDF]">BTS Global Corp</p>
                  <div className="border-t-2 border-dashed border-white/20 pt-3">
                    <p className="text-xs text-[#C6CEDF]/70">Assinatura e carimbo</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
                  <p className="text-sm text-[#C6CEDF]">{proposal.clientName}</p>
                  <div className="border-t-2 border-dashed border-white/20 pt-3">
                    <p className="text-xs text-[#C6CEDF]/70">Assinatura e data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center space-y-3 pt-8 border-t border-white/10">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-xs text-[#00E5FF]">One-Way Mirror of Trust™</span>
              </div>
              <p className="text-xs text-[#C6CEDF]/70">BTS Global Corp · Infraestrutura Digital Global</p>
              <p className="text-xs text-[#C6CEDF]/50">ID de Verificação: {proposal.id}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
