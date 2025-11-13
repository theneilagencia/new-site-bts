import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Plus, Trash2, Save, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const STORAGE_KEY = 'bts-notification-emails';

// Default emails
const DEFAULT_EMAILS = [
  'comercial@btsglobalcorp.com',
  'vinicius.debian@btsglobalcorp.com',
];

export function NotificationSettings() {
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [errors, setErrors] = useState<string>('');

  // Load emails from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setEmails(Array.isArray(parsed) ? parsed : DEFAULT_EMAILS);
      } catch {
        setEmails(DEFAULT_EMAILS);
      }
    } else {
      setEmails(DEFAULT_EMAILS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EMAILS));
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleAddEmail = () => {
    setErrors('');

    if (!newEmail.trim()) {
      setErrors('Por favor, digite um e-mail');
      return;
    }

    if (!validateEmail(newEmail.trim())) {
      setErrors('E-mail inválido');
      return;
    }

    if (emails.includes(newEmail.trim())) {
      setErrors('Este e-mail já está cadastrado');
      return;
    }

    const updatedEmails = [...emails, newEmail.trim()];
    setEmails(updatedEmails);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEmails));
    setNewEmail('');
    toast.success('E-mail adicionado com sucesso!');
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    const updatedEmails = emails.filter(e => e !== emailToRemove);
    setEmails(updatedEmails);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEmails));
    toast.success('E-mail removido com sucesso!');
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emails));
    toast.success('Configurações salvas com sucesso!', {
      description: `${emails.length} e-mail(s) configurado(s)`,
    });
  };

  const handleResetToDefaults = () => {
    setEmails(DEFAULT_EMAILS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EMAILS));
    toast.success('Restaurado para e-mails padrão!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Configurações de Notificações
          </h1>
          <p className="text-[#C6CEDF]/70">
            Gerencie os e-mails que receberão notificações de mudança de status das propostas
          </p>
        </div>
      </div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1F4AFF]/10 border border-[#1F4AFF]/20 rounded-lg p-4"
      >
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#1F4AFF] mt-0.5" />
          <div>
            <h3 className="text-white font-semibold mb-1">Notificações Automáticas</h3>
            <p className="text-sm text-[#C6CEDF]/70">
              Os e-mails cadastrados abaixo receberão notificações automáticas quando uma proposta
              entrar em status de <span className="text-yellow-400 font-semibold">Análise</span> ou{' '}
              <span className="text-green-400 font-semibold">Aprovada</span>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Add New Email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/[0.02] border border-white/10 rounded-lg p-6"
      >
        <h2 className="text-lg font-semibold text-white mb-4">Adicionar Novo E-mail</h2>
        
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
                setErrors('');
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleAddEmail();
                }
              }}
              placeholder="exemplo@btsglobalcorp.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] focus:ring-2 focus:ring-[#1F4AFF]/20 transition-all"
            />
            {errors && (
              <div className="flex items-center gap-2 mt-2 text-sm text-red-400">
                <AlertCircle className="w-4 h-4" />
                <span>{errors}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={handleAddEmail}
            className="px-6 py-3 bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] rounded-lg text-white font-medium hover:shadow-lg hover:shadow-[#1F4AFF]/30 transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Adicionar
          </button>
        </div>
      </motion.div>

      {/* Email List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/[0.02] border border-white/10 rounded-lg p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">
            E-mails Cadastrados ({emails.length})
          </h2>
          <button
            onClick={handleResetToDefaults}
            className="text-sm text-[#C6CEDF]/70 hover:text-[#1F4AFF] transition-colors"
          >
            Restaurar Padrão
          </button>
        </div>

        {emails.length === 0 ? (
          <div className="text-center py-8 text-[#C6CEDF]/50">
            <Mail className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Nenhum e-mail cadastrado</p>
            <p className="text-sm mt-1">Adicione e-mails para receber notificações</p>
          </div>
        ) : (
          <div className="space-y-2">
            {emails.map((email, index) => (
              <motion.div
                key={email}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-[#1F4AFF]/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F4AFF] to-[#00E5FF] flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{email}</p>
                    <p className="text-xs text-[#C6CEDF]/50">
                      Receberá notificações de mudança de status
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => handleRemoveEmail(email)}
                  className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-all opacity-0 group-hover:opacity-100"
                  title="Remover e-mail"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-end"
      >
        <button
          onClick={handleSave}
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2"
        >
          <Save className="w-5 h-5" />
          Salvar Configurações
        </button>
      </motion.div>
    </div>
  );
}
