import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, MapPin, Save, Camera } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function Profile() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '(11) 98765-4321',
    company: 'Construtora XYZ',
    city: 'São Paulo',
    state: 'SP',
  });

  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
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
          {t.portal.profile.title}
        </h1>
        <p className="mt-2 text-slate-400">
          {t.portal.profile.subtitle}
        </p>
      </motion.div>

      {/* Profile Header */}
      <motion.div variants={staggerItem} className="mb-6 rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#00639A] to-[#21B6F3] text-3xl font-bold text-white">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0f1729] bg-[#00639A]"
            >
              <Camera className="h-4 w-4 text-white" />
            </motion.button>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{user?.name}</h2>
            <p className="text-slate-400">{user?.email}</p>
            <div className="mt-2 inline-flex items-center rounded-full border border-[#00639A]/30 bg-[#00639A]/10 px-3 py-1 text-xs font-medium text-[#21B6F3]">
              Parceiro {user?.role === 'admin' ? 'Admin' : 'Ativo'}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsEditing(!isEditing)}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10"
          >
            {isEditing ? 'Cancelar' : 'Editar Perfil'}
          </motion.button>
        </div>
      </motion.div>

      {/* Profile Form */}
      <motion.div variants={staggerItem} className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
        <h3 className="mb-6 text-xl font-semibold text-white">Informações Pessoais</h3>
        
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <User className="h-4 w-4" />
                Nome Completo
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!isEditing}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 disabled:opacity-50 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Mail className="h-4 w-4" />
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!isEditing}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 disabled:opacity-50 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Phone className="h-4 w-4" />
                Telefone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={!isEditing}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 disabled:opacity-50 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <Building2 className="h-4 w-4" />
                Empresa
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                disabled={!isEditing}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 disabled:opacity-50 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <MapPin className="h-4 w-4" />
                Cidade
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                disabled={!isEditing}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 disabled:opacity-50 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                <MapPin className="h-4 w-4" />
                Estado
              </label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                disabled={!isEditing}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 disabled:opacity-50 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
              />
            </div>
          </div>

          {isEditing && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleSave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00639A] to-[#21B6F3] px-6 py-3 font-semibold text-white"
            >
              <Save className="h-5 w-5" />
              Salvar Alterações
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={staggerItem} className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6 text-center">
          <p className="text-sm text-slate-400">Membro desde</p>
          <p className="mt-1 text-xl font-bold text-white">Jan 2024</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6 text-center">
          <p className="text-sm text-slate-400">Total de Propostas</p>
          <p className="mt-1 text-xl font-bold text-[#21B6F3]">24</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6 text-center">
          <p className="text-sm text-slate-400">Taxa de Sucesso</p>
          <p className="mt-1 text-xl font-bold text-green-400">87%</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
