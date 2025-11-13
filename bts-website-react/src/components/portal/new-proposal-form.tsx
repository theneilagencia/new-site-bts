import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Loader } from 'lucide-react';
import { STRUCTURE_OPTIONS, type StructureType, type Proposal } from '@/lib/proposal-types';
import { useAuth } from '@/contexts/AuthContext';

interface NewProposalFormProps {
  onProposalCreated: (proposal: Proposal) => void;
}

export function NewProposalForm({ onProposalCreated }: NewProposalFormProps) {
  const { user } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientCpfCnpj: '',
    country: '',
    structures: [] as StructureType[],
    description: '',
    currency: 'USD',
    status: 'draft' as 'draft' | 'generated' | 'sent' | 'review' | 'approved' | 'rejected',
    customClauses: '',
    acceptedTerms: false,
  });

  const calculateTotal = () => {
    return formData.structures.reduce((sum, structureId) => {
      const structure = STRUCTURE_OPTIONS.find(s => s.id === structureId);
      return sum + (structure?.basePrice || 0);
    }, 0);
  };

  const calculateMaintenance = () => {
    return formData.structures.reduce((sum, structureId) => {
      const structure = STRUCTURE_OPTIONS.find(s => s.id === structureId);
      return sum + (structure?.maintenanceFee || 0);
    }, 0);
  };

  const handleStructureToggle = (structureId: StructureType) => {
    setFormData(prev => ({
      ...prev,
      structures: prev.structures.includes(structureId)
        ? prev.structures.filter(s => s !== structureId)
        : [...prev.structures, structureId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptedTerms) {
      alert('Por favor, confirme que revisou as condições e termos da BTS.');
      return;
    }

    setIsGenerating(true);

    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newProposal: Proposal = {
      id: `PROP-${Date.now()}`,
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientCpfCnpj: formData.clientCpfCnpj,
      country: formData.country,
      structures: formData.structures,
      description: formData.description,
      currency: formData.currency,
      amount: calculateTotal(),
      maintenanceFee: calculateMaintenance(),
      customClauses: formData.customClauses,
      status: formData.status,
      createdAt: new Date().toISOString(),
      partnerName: user?.name || '',
      partnerId: user?.id || '',
    };

    onProposalCreated(newProposal);
    setIsGenerating(false);
    setShowSuccess(true);

    // Reset form
    setTimeout(() => {
      setFormData({
        clientName: '',
        clientEmail: '',
        clientCpfCnpj: '',
        country: '',
        structures: [],
        description: '',
        currency: 'USD',
        status: 'draft',
        customClauses: '',
        acceptedTerms: false,
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-8 h-8 text-[#00E5FF]" />
          <h1 className="text-3xl text-white">Gerador de Propostas BTS</h1>
        </div>
        <p className="text-[#C6CEDF]">
          Crie e gere contratos personalizados em formato PDF com termos oficiais da BTS Global Corp.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/15 p-8 space-y-6">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">Nome completo do cliente *</label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="João Silva"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
              />
            </div>

            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">E-mail *</label>
              <input
                type="email"
                required
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                placeholder="joao@empresa.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">CPF/CNPJ *</label>
              <input
                type="text"
                required
                value={formData.clientCpfCnpj}
                onChange={(e) => setFormData({ ...formData, clientCpfCnpj: e.target.value })}
                placeholder="000.000.000-00 ou 00.000.000/0000-00"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
              />
            </div>

            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">País / Jurisdição principal *</label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder="Brasil"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
              />
            </div>
          </div>

          {/* Structure Selection */}
          <div>
            <label className="block text-sm text-[#C6CEDF] mb-3">Estrutura desejada *</label>
            <div className="space-y-3">
              {STRUCTURE_OPTIONS.map((structure) => (
                <label
                  key={structure.id}
                  className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.structures.includes(structure.id)
                      ? 'bg-[#1F4AFF]/10 border-[#1F4AFF]/50'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.structures.includes(structure.id)}
                    onChange={() => handleStructureToggle(structure.id)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#1F4AFF] focus:ring-[#1F4AFF]/20"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white font-medium">{structure.label}</span>
                      <span className="text-[#00E5FF] text-sm">
                        ${structure.basePrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-[#C6CEDF]/70">{structure.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-[#C6CEDF] mb-2">Descrição personalizada do caso</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              placeholder="Descreva o contexto e necessidades específicas do cliente..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20 resize-none"
            />
          </div>

          {/* Status Selection */}
          <div>
            <label className="block text-sm text-[#C6CEDF] mb-2">Status da Proposta</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
            >
              <option value="draft">Rascunho</option>
              <option value="generated">Gerada</option>
              <option value="sent">Enviada</option>
              <option value="review">Em Análise</option>
              <option value="approved">Aprovada</option>
              <option value="rejected">Rejeitada</option>
            </select>
            <p className="text-xs text-[#C6CEDF]/50 mt-1">
              Selecione o status atual desta proposta
            </p>
          </div>

          {/* Currency and Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">Moeda</label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="BRL">BRL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">Valor total</label>
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                ${calculateTotal().toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#C6CEDF] mb-2">Manutenção (anual)</label>
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                ${calculateMaintenance().toLocaleString()}
              </div>
            </div>
          </div>

          {/* Custom Clauses */}
          <div>
            <label className="block text-sm text-[#C6CEDF] mb-2">Cláusulas específicas (opcional)</label>
            <textarea
              value={formData.customClauses}
              onChange={(e) => setFormData({ ...formData, customClauses: e.target.value })}
              rows={3}
              placeholder="Adicione cláusulas ou condições específicas para este contrato..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20 resize-none"
            />
          </div>

          {/* Terms Acceptance */}
          <label className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={formData.acceptedTerms}
              onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
              className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#1F4AFF] focus:ring-[#1F4AFF]/20"
            />
            <span className="text-sm text-[#C6CEDF]">
              Confirmo que revisei as condições e termos da BTS e que as informações fornecidas estão corretas.
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isGenerating || formData.structures.length === 0 || !formData.acceptedTerms}
            className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] p-[1px] transition-all hover:shadow-lg hover:shadow-[#1F4AFF]/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="relative flex items-center justify-center gap-2 bg-[#050B18] rounded-lg px-6 py-4 group-hover:bg-transparent transition-all">
              {isGenerating ? (
                <>
                  <Loader className="w-5 h-5 text-white animate-spin" />
                  <span className="text-white font-medium">Gerando Proposta Contratual...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white font-medium">Gerar Proposta Contratual (PDF)</span>
                </>
              )}
            </div>
          </button>
        </div>
      </form>

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 bg-green-500/20 border border-green-500/30 rounded-lg p-4 backdrop-blur-xl"
        >
          <p className="text-green-400 font-medium">✓ Proposta gerada com sucesso!</p>
        </motion.div>
      )}
    </div>
  );
}
