import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, FileDown, Check } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Proposal } from '@/types';
import { generateId, formatCurrency } from '@/lib/utils';

const structures = [
  { id: '1', name: 'Residencial Geminado Semi-acabado', basePrice: 240000, description: 'Casa geminada com acabamento básico' },
  { id: '2', name: 'Residencial Isolado Semi-acabado', basePrice: 270000, description: 'Casa isolada com acabamento básico' },
  { id: '3', name: 'Residencial Isolado Acabado', basePrice: 330000, description: 'Casa isolada com acabamento completo' },
  { id: '4', name: 'Comercial Flex 50m²', basePrice: 95000, description: 'Espaço comercial 50m²' },
  { id: '5', name: 'Comercial Flex 100m²', basePrice: 145000, description: 'Espaço comercial 100m²' },
  { id: '6', name: 'Industrial Galpão', basePrice: 380000, description: 'Galpão industrial' },
];

export function NewProposal() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [proposals, setProposals] = useLocalStorage<Proposal[]>('bts-proposals', []);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    structureId: '',
    quantity: 1,
  });

  const selectedStructure = structures.find((s) => s.id === formData.structureId);
  const unitPrice = selectedStructure?.basePrice || 0;
  const totalPrice = unitPrice * formData.quantity;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const proposal: Proposal = {
      id: generateId(),
      partnerId: user?.id || '',
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone,
      structure: formData.structureId,
      structureName: selectedStructure?.name || '',
      quantity: formData.quantity,
      unitPrice,
      totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    setProposals([...proposals, proposal]);
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Reset form
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      structureId: '',
      quantity: 1,
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mx-auto max-w-4xl"
    >
      <motion.div variants={staggerItem} className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          {t.portal.newProposal.title}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.portal.newProposal.subtitle}
        </p>
      </motion.div>

      <motion.form
        variants={staggerItem}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Client Info */}
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            1. {t.portal.newProposal.clientInfo}
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Nome Completo *
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                placeholder="João Silva"
                required
              />
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                E-mail *
              </label>
              <input
                type="email"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                placeholder="cliente@email.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Telefone *
              </label>
              <input
                type="tel"
                value={formData.clientPhone}
                onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                placeholder="(11) 98765-4321"
                required
              />
            </div>
          </div>
        </div>

        {/* Structure */}
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            2. {t.portal.newProposal.structure}
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {structures.map((structure) => (
              <motion.label
                key={structure.id}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer rounded-lg border p-4 transition-all ${
                  formData.structureId === structure.id
                    ? 'border-[#00639A] bg-[#00639A]/10'
                    : 'border-white/10 bg-[#1a2234]/50 hover:border-white/20'
                }`}
              >
                <input
                  type="radio"
                  name="structure"
                  value={structure.id}
                  checked={formData.structureId === structure.id}
                  onChange={(e) => setFormData({ ...formData, structureId: e.target.value })}
                  className="sr-only"
                  required
                />
                <p className="font-medium text-white">{structure.name}</p>
                <p className="mt-1 text-xs text-slate-400">{structure.description}</p>
                <p className="mt-2 text-sm font-semibold text-[#21B6F3]">
                  {formatCurrency(structure.basePrice)}
                </p>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            3. {t.portal.newProposal.quantity}
          </h2>
          
          <input
            type="number"
            min="1"
            max="100"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
            className="w-full max-w-xs rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
          />
        </div>

        {/* Total */}
        <div className="rounded-xl border border-[#00639A]/30 bg-gradient-to-r from-[#00639A]/10 to-[#21B6F3]/10 p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-white">{t.portal.newProposal.total}:</span>
            <span className="text-3xl font-bold text-[#21B6F3]">
              {formatCurrency(totalPrice)}
            </span>
          </div>
          {formData.quantity > 1 && (
            <p className="mt-2 text-sm text-slate-400">
              {formData.quantity}x {formatCurrency(unitPrice)} = {formatCurrency(totalPrice)}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00639A] to-[#21B6F3] px-6 py-3 font-semibold text-white"
            disabled={!formData.structureId}
          >
            <Save size={20} />
            {t.portal.newProposal.save}
          </motion.button>
          
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
            disabled={!formData.structureId}
          >
            <FileDown size={20} />
            {t.portal.newProposal.generatePdf}
          </motion.button>
        </div>
      </motion.form>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 flex items-center gap-3 rounded-lg border border-green-500/20 bg-green-500/10 px-6 py-4 text-white shadow-lg backdrop-blur-sm"
          >
            <Check className="h-5 w-5 text-green-400" />
            <span>Proposta criada com sucesso!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
