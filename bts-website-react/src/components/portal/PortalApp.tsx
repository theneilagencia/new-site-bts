import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { LoginPage } from './LoginPage';
import { PortalLayout } from './PortalLayout';
import { Dashboard } from './Dashboard';
import { NewProposal } from './NewProposal';
import { ProposalsHistory } from './ProposalsHistory';
import { Profile } from './Profile';

export function PortalApp() {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  // Get page from hash
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      if (hash) setCurrentPage(hash);
    });
  }

  if (!user) {
    return <LoginPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'new-proposal':
        return <NewProposal />;
      case 'proposals':
        return <ProposalsHistory />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <PortalLayout currentPage={currentPage}>
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
    </PortalLayout>
  );
}
