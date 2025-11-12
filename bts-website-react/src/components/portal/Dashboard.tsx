import { motion } from 'framer-motion';
import { FileText, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Proposal } from '@/types';
import { formatCurrency } from '@/lib/utils';

export function Dashboard() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [proposals] = useLocalStorage<Proposal[]>('bts-proposals', []);

  const userProposals = proposals.filter(p => p.partnerId === user?.id);
  const totalProposals = userProposals.length;
  const approved = userProposals.filter(p => p.status === 'approved').length;
  const pending = userProposals.filter(p => p.status === 'pending').length;
  const totalRevenue = userProposals
    .filter(p => p.status === 'approved')
    .reduce((sum, p) => sum + p.totalPrice, 0);

  const stats = [
    { label: t.portal.dashboard.stats.proposals, value: totalProposals, icon: FileText, color: 'from-blue-500 to-blue-600' },
    { label: t.portal.dashboard.stats.approved, value: approved, icon: CheckCircle, color: 'from-green-500 to-green-600' },
    { label: t.portal.dashboard.stats.pending, value: pending, icon: Clock, color: 'from-yellow-500 to-yellow-600' },
    { label: t.portal.dashboard.stats.revenue, value: formatCurrency(totalRevenue), icon: DollarSign, color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mx-auto max-w-7xl"
    >
      {/* Welcome */}
      <motion.div variants={staggerItem} className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          {t.portal.dashboard.welcome}, {user?.name}!
        </h1>
        <p className="mt-2 text-slate-400">
          Dashboard do parceiro BTS Global
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0f1729]/50 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-1 text-sm text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <motion.div variants={staggerItem} className="rounded-xl border border-white/10 bg-[#0f1729]/50 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Atividade Recente</h2>
          <TrendingUp className="h-5 w-5 text-green-400" />
        </div>
        
        {userProposals.length > 0 ? (
          <div className="space-y-4">
            {userProposals.slice(0, 5).map((proposal) => (
              <div key={proposal.id} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-4">
                <div>
                  <p className="font-medium text-white">{proposal.clientName}</p>
                  <p className="text-sm text-slate-400">{proposal.structureName}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#21B6F3]">{formatCurrency(proposal.totalPrice)}</p>
                  <span className={`text-xs ${
                    proposal.status === 'approved' ? 'text-green-400' :
                    proposal.status === 'rejected' ? 'text-red-400' :
                    'text-yellow-400'
                  }`}>
                    {proposal.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 py-8">
            Nenhuma proposta ainda. Crie sua primeira proposta!
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
