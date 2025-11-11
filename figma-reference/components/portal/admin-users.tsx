import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Plus, Edit, X, UserX, UserCheck } from 'lucide-react';
import { User } from '../../contexts/auth-context';

interface AdminUsersProps {
  users: User[];
  onCreateUser: (user: Omit<User, 'id'> & { password: string }) => void;
  onUpdateUser: (id: string, updates: Partial<User>) => void;
  onToggleStatus: (id: string) => void;
}

export function AdminUsers({ users, onCreateUser, onUpdateUser, onToggleStatus }: AdminUsersProps) {
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'partner' as 'partner' | 'admin',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      onUpdateUser(editingUser.id, {
        name: formData.name,
        email: formData.email,
        role: formData.role,
      });
    } else {
      onCreateUser({
        ...formData,
        status: 'active',
      });
    }

    setShowModal(false);
    setEditingUser(null);
    setFormData({ name: '', email: '', password: '', role: 'partner' });
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: '',
      role: user.role,
    });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormData({ name: '', email: '', password: '', role: 'partner' });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-[#00E5FF]" />
            <h1 className="text-xl text-white">Usuários</h1>
          </div>
          <p className="text-sm text-[#C6CEDF]/70">
            Gerenciar contas de parceiros e administradores
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] rounded-lg text-white text-sm hover:shadow-lg hover:shadow-[#1F4AFF]/30 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Novo</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white/[0.03] backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                  Perfil
                </th>
                <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2.5 text-left text-xs text-[#C6CEDF]/70 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-4 py-2.5">
                    <p className="text-sm text-white">{user.name}</p>
                  </td>
                  <td className="px-4 py-2.5">
                    <p className="text-sm text-[#C6CEDF]/70">{user.email}</p>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${
                      user.role === 'admin'
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {user.role === 'admin' ? 'Admin' : 'Parceiro'}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${
                      user.status === 'active'
                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {user.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleEdit(user)}
                        className="p-1.5 rounded hover:bg-white/10 text-[#00E5FF] transition-colors"
                        title="Editar"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onToggleStatus(user.id)}
                        className={`p-1.5 rounded transition-colors ${
                          user.status === 'active'
                            ? 'hover:bg-red-500/10 text-red-400'
                            : 'hover:bg-green-500/10 text-green-400'
                        }`}
                        title={user.status === 'active' ? 'Desativar' : 'Ativar'}
                      >
                        {user.status === 'active' ? <UserX className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden divide-y divide-white/5">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              className="p-4 space-y-2.5"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-white">{user.name}</p>
                  <p className="text-xs text-[#C6CEDF]/60">{user.email}</p>
                </div>
                <div className="flex gap-1.5">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${
                    user.role === 'admin'
                      ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}>
                    {user.role === 'admin' ? 'Admin' : 'Parceiro'}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${
                    user.status === 'active'
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border-red-500/20'
                  }`}>
                    {user.status === 'active' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => handleEdit(user)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#1F4AFF]/20 border border-[#1F4AFF]/30 rounded text-[#00E5FF] hover:bg-[#1F4AFF]/30 transition-colors"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span className="text-xs">Editar</span>
                </button>
                <button
                  onClick={() => onToggleStatus(user.id)}
                  className={`px-3 py-2 border rounded transition-colors ${
                    user.status === 'active'
                      ? 'bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20'
                      : 'bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20'
                  }`}
                >
                  {user.status === 'active' ? <UserX className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Create/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/[0.04] backdrop-blur-2xl rounded-xl border border-white/15 w-full max-w-md"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="text-lg text-white">
                  {editingUser ? 'Editar Usuário' : 'Novo Usuário'}
                </h2>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded hover:bg-white/10 text-[#C6CEDF] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <div>
                  <label className="block text-xs text-[#C6CEDF]/70 mb-1.5">Nome *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="João Silva"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#C6CEDF]/70 mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@empresa.com"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] transition-colors"
                  />
                </div>

                {!editingUser && (
                  <div>
                    <label className="block text-xs text-[#C6CEDF]/70 mb-1.5">Senha temporária *</label>
                    <input
                      type="password"
                      required={!editingUser}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-[#C6CEDF]/30 focus:outline-none focus:border-[#1F4AFF] transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs text-[#C6CEDF]/70 mb-1.5">Perfil *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as 'partner' | 'admin' })}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#1F4AFF] transition-colors"
                  >
                    <option value="partner">Parceiro</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>

                <div className="flex gap-2 pt-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-[#C6CEDF] hover:bg-white/10 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-[#1F4AFF] to-[#00E5FF] rounded text-sm text-white hover:shadow-lg hover:shadow-[#1F4AFF]/30 transition-all"
                  >
                    {editingUser ? 'Salvar' : 'Criar'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}