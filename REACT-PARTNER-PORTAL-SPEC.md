# 🏢 PARTNER PORTAL - REACT + FRAMER MOTION

## ESPECIFICAÇÃO COMPLETA DO PORTAL EM REACT

---

## 1. LOGIN PAGE

```typescript
// src/components/portal/LoginPage.tsx

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function LoginPage({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login(email, password);
    setIsLoading(false);

    if (success) {
      onLoginSuccess();
    } else {
      setError(t.portal.login.error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e]">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Orbital Gradients - EXATAMENTE como Figma */}
      <div className="absolute inset-0">
        {/* Gradient 1 */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-8 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #00639A 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Gradient 2 */}
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-6 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #21B6F3 0%, transparent 65%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 w-full max-w-md px-6"
      >
        <motion.div
          variants={fadeInUp}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1729]/80 p-8 shadow-2xl backdrop-blur-xl"
        >
          
          {/* Logo */}
          <motion.div variants={staggerItem} className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00639A] to-[#21B6F3]">
                <LogIn className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              {t.portal.login.title}
            </h1>
            <p className="text-sm text-slate-400">
              {t.portal.login.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form variants={staggerItem} onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                {t.portal.login.emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#1a2234] py-3 pl-12 pr-4 text-white placeholder-slate-500 transition-all focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                  placeholder={t.portal.login.emailPlaceholder}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                {t.portal.login.passwordLabel}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#1a2234] py-3 pl-12 pr-12 text-white placeholder-slate-500 transition-all focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                  placeholder={t.portal.login.passwordPlaceholder}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400"
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-[#00639A] to-[#21B6F3] py-3 font-semibold text-white shadow-lg transition-all disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <motion.div
                      className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    {t.portal.login.loading}
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    {t.portal.login.submit}
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"
                initial={false}
              />
            </motion.button>
          </motion.form>

          {/* Demo Credentials */}
          <motion.div
            variants={staggerItem}
            className="mt-6 rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Demo Credentials:
            </p>
            <div className="space-y-1 text-xs text-slate-400">
              <p>Partner: parceiro@demo.com / demo123</p>
              <p>Admin: admin@btsglobal.com / admin123</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
```

---

## 2. PORTAL LAYOUT

```typescript
// src/components/portal/PortalLayout.tsx

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, User, LogOut, Menu, X,
  Settings, Users, Bell 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavItem {
  key: string;
  label: string;
  icon: any;
  href: string;
  badge?: number;
}

export function PortalLayout({ children }: { children: ReactNode }) {
  const { user, logout, isAdmin } = useAuth();
  const { t } = useLanguage();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('dashboard');

  const partnerNavItems: NavItem[] = [
    { key: 'dashboard', label: t.portal.nav.dashboard, icon: LayoutDashboard, href: '/portal' },
    { key: 'new-proposal', label: t.portal.nav.newProposal, icon: FileText, href: '/portal/new-proposal' },
    { key: 'proposals', label: t.portal.nav.proposals, icon: FileText, href: '/portal/proposals' },
    { key: 'profile', label: t.portal.nav.profile, icon: User, href: '/portal/profile' },
  ];

  const adminNavItems: NavItem[] = [
    { key: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/portal/admin' },
    { key: 'admin-proposals', label: 'Propostas', icon: FileText, href: '/portal/admin/proposals', badge: 5 },
    { key: 'admin-users', label: 'Usuários', icon: Users, href: '/portal/admin/users' },
    { key: 'admin-settings', label: 'Configurações', icon: Settings, href: '/portal/admin/settings' },
  ];

  const navItems = isAdmin ? adminNavItems : partnerNavItems;

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-white/5 bg-[#0f1729] lg:block">
        <div className="flex h-full flex-col">
          
          {/* Logo */}
          <div className="flex h-20 items-center border-b border-white/5 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00639A] to-[#21B6F3]">
                <span className="font-bold text-white">BTS</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">BTS Global</p>
                <p className="text-xs text-slate-400">
                  {isAdmin ? 'Admin Portal' : 'Partner Portal'}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.key;
              
              return (
                <motion.button
                  key={item.key}
                  onClick={() => setActiveRoute(item.key)}
                  className={`relative w-full rounded-lg px-4 py-3 text-left transition-colors ${
                    isActive
                      ? 'bg-[#00639A]/10 text-[#21B6F3]'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-300'
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
                      >
                        {item.badge}
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg border-2 border-[#00639A]/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* User Info + Logout */}
          <div className="border-t border-white/5 p-4">
            <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/5 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00639A] to-[#21B6F3] text-sm font-bold text-white">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-semibold text-white">{user?.name}</p>
                <p className="truncate text-xs text-slate-400">{user?.email}</p>
              </div>
            </div>
            
            <motion.button
              onClick={logout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10"
            >
              <LogOut className="h-4 w-4" />
              {t.portal.nav.logout}
            </motion.button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-50 h-screen w-64 border-r border-white/5 bg-[#0f1729] lg:hidden"
            >
              {/* Same content as desktop sidebar */}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/5 bg-[#0f1729]/95 px-6 backdrop-blur-lg">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="lg:hidden rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5"
          >
            {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5"
            >
              <Bell size={20} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </motion.button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
```

---

## 3. NEW PROPOSAL PAGE

```typescript
// src/components/portal/NewProposal.tsx

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Save, FileDown } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

const structures = [
  { id: '1', name: 'Residencial Geminado Semi-acabado', basePrice: 240000 },
  { id: '2', name: 'Residencial Isolado Semi-acabado', basePrice: 270000 },
  { id: '3', name: 'Residencial Isolado Acabado', basePrice: 330000 },
  { id: '4', name: 'Comercial Flex 50m²', basePrice: 95000 },
  { id: '5', name: 'Comercial Flex 100m²', basePrice: 145000 },
];

export function NewProposal() {
  const { user } = useAuth();
  const { t } = useLanguage();
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
    
    // Save to localStorage (or API)
    const proposal = {
      id: Date.now().toString(),
      partnerId: user?.id || '',
      ...formData,
      structureName: selectedStructure?.name || '',
      unitPrice,
      totalPrice,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const proposals = JSON.parse(localStorage.getItem('bts-proposals') || '[]');
    proposals.push(proposal);
    localStorage.setItem('bts-proposals', JSON.stringify(proposals));

    // Show success toast (implement toast system)
    alert('Proposta criada com sucesso!');
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
        {/* Client Info Section */}
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            1. Informações do Cliente
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Nome Completo
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                required
              />
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                E-mail
              </label>
              <input
                type="email"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white placeholder-slate-500 focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
                required
              />
            </div>
          </div>
        </div>

        {/* Structure Selection */}
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            2. Estrutura
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
                />
                <p className="font-medium text-white">{structure.name}</p>
                <p className="mt-1 text-sm text-[#21B6F3]">
                  R$ {structure.basePrice.toLocaleString('pt-BR')}
                </p>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
          <h2 className="mb-6 text-xl font-semibold text-white">
            3. Quantidade
          </h2>
          
          <input
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
            className="w-full max-w-xs rounded-lg border border-white/10 bg-[#1a2234] px-4 py-3 text-white focus:border-[#00639A] focus:outline-none focus:ring-2 focus:ring-[#00639A]/30"
          />
        </div>

        {/* Total */}
        <div className="rounded-xl border border-[#00639A]/30 bg-gradient-to-r from-[#00639A]/10 to-[#21B6F3]/10 p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-white">Valor Total:</span>
            <span className="text-3xl font-bold text-[#21B6F3]">
              R$ {totalPrice.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00639A] to-[#21B6F3] px-6 py-3 font-semibold text-white"
          >
            <Save size={20} />
            Salvar Proposta
          </motion.button>
          
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            <FileDown size={20} />
            Gerar PDF
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
}
```

---

## CONTINUANDO...

Nos próximos arquivos:
- ✅ Proposal History
- ✅ Partner Profile
- ✅ Admin Dashboard
- ✅ Admin Proposals
- ✅ Admin Users

**STATUS:** 🔄 Partner Portal React em criação...
