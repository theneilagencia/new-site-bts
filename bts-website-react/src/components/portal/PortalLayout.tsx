import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, User, LogOut, Menu, X,
  Settings, Users, Bell, ChevronDown 
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface PortalLayoutProps {
  children: ReactNode;
  currentPage?: string;
  onBackToPublic?: () => void;
}

export function PortalLayout({ children, currentPage = 'dashboard', onBackToPublic }: PortalLayoutProps) {
  const { user, logout, isAdmin } = useAuth();
  const { t } = useLanguage();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    if (onBackToPublic) onBackToPublic();
  };

  const partnerNavItems = [
    { key: 'dashboard', label: t.portal.nav.dashboard, icon: LayoutDashboard, href: '#dashboard', badge: undefined },
    { key: 'new-proposal', label: t.portal.nav.newProposal, icon: FileText, href: '#new-proposal', badge: undefined },
    { key: 'proposals', label: t.portal.nav.proposals, icon: FileText, href: '#proposals', badge: undefined },
    { key: 'profile', label: t.portal.nav.profile, icon: User, href: '#profile', badge: undefined },
  ];

  const adminNavItems = [
    { key: 'admin-dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#admin-dashboard', badge: undefined },
    { key: 'admin-proposals', label: 'Propostas', icon: FileText, href: '#admin-proposals', badge: 5 },
    { key: 'admin-users', label: 'Usuários', icon: Users, href: '#admin-users', badge: undefined },
    { key: 'admin-settings', label: 'Configurações', icon: Settings, href: '#admin-settings', badge: undefined },
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
                <span className="font-bold text-white text-sm">BTS</span>
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
              const isActive = currentPage === item.key;
              
              return (
                <motion.button
                  key={item.key}
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

          {/* User Info */}
          <div className="border-t border-white/5 p-4">
            <div className="mb-3 flex items-center gap-3 rounded-lg bg-white/5 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00639A] to-[#21B6F3] text-sm font-bold text-white">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-semibold text-white">{user?.name}</p>
                <p className="truncate text-xs text-slate-400">{user?.email}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
            
            <motion.button
                onClick={handleLogout}
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
              {/* Same content as desktop */}
              <div className="flex h-full flex-col">
                <div className="flex h-20 items-center justify-between border-b border-white/5 px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#00639A] to-[#21B6F3]">
                      <span className="font-bold text-white text-sm">BTS</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">BTS Global</p>
                    </div>
                  </div>
                  <button onClick={() => setIsMobileSidebarOpen(false)}>
                    <X className="h-5 w-5 text-slate-400" />
                  </button>
                </div>
                
                <nav className="flex-1 space-y-1 px-3 py-6">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.key}
                        onClick={() => setIsMobileSidebarOpen(false)}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-400 hover:bg-white/5"
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
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
            <Menu size={20} />
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
