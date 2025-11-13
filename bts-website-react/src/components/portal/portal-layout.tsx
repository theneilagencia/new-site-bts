import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { BtsLogo } from '@/components/ui/BtsLogo';
import { 
  FileText, 
  History, 
  User, 
  LogOut, 
  Menu, 
  X,
  Users,
  LayoutDashboard,
  FileCheck,
  Settings
} from 'lucide-react';

interface PortalLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (section: string) => void;
  onBackToPublic?: () => void;
}

export function PortalLayout({ children, activeSection, onNavigate, onBackToPublic }: PortalLayoutProps) {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const partnerMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'new-proposal', label: 'Nova Proposta', icon: FileText },
    { id: 'history', label: 'Histórico', icon: History },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  const adminMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'proposals', label: 'Propostas', icon: FileCheck },
    { id: 'users', label: 'Usuários', icon: Users },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const menuItems = user?.role === 'admin' ? adminMenu : partnerMenu;

  const handleLogout = () => {
    logout();
    if (onBackToPublic) {
      onBackToPublic();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B18] via-[#0A1432] to-[#050B18]">
      {/* Orbital background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-[#1F4AFF] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:h-screen lg:sticky lg:top-0 border-r border-white/10 bg-white/[0.02] backdrop-blur-xl">
          <div className="p-6 border-b border-white/10 flex-shrink-0">
            <BtsLogo className="h-8 w-auto mb-4" />
            <div>
              <p className="text-sm text-white">{user?.name}</p>
              <p className="text-xs text-[#C6CEDF]/70">{user?.email}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs rounded-md bg-[#1F4AFF]/20 text-[#00E5FF] border border-[#00E5FF]/20">
                {user?.role === 'admin' ? 'Administrador' : 'Parceiro'}
              </span>
            </div>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-[#1F4AFF]/20 to-[#00E5FF]/20 text-white border border-[#1F4AFF]/30'
                        : 'text-[#C6CEDF] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-white/10 flex-shrink-0">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#C6CEDF] hover:bg-red-500/10 hover:text-red-400 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span>Sair</span>
            </button>
          </div>
        </aside>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              className="lg:hidden fixed inset-0 z-40 bg-[#050B18]/95 backdrop-blur-xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10">
                <BtsLogo className="h-8 w-auto mb-4" />
                <div>
                  <p className="text-sm text-white">{user?.name}</p>
                  <p className="text-xs text-[#C6CEDF]/70">{user?.email}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs rounded-md bg-[#1F4AFF]/20 text-[#00E5FF] border border-[#00E5FF]/20">
                    {user?.role === 'admin' ? 'Administrador' : 'Parceiro'}
                  </span>
                </div>
              </div>

              <nav className="flex-1 p-4 overflow-y-auto">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onNavigate(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-[#1F4AFF]/20 to-[#00E5FF]/20 text-white border border-[#1F4AFF]/30'
                            : 'text-[#C6CEDF] hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-white/10">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[#C6CEDF] hover:bg-red-500/10 hover:text-red-400 transition-all"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sair</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container max-w-7xl mx-auto p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}