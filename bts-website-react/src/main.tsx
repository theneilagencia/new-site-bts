import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ContactPage from './pages/ContactPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

const rootElement = document.getElementById('root');
const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
const isContactPage = normalizedPath === '/contato';
const RootComponent = isContactPage ? ContactPage : App;

createRoot(rootElement!).render(
  <StrictMode>
    <ErrorBoundary>
      <RootComponent />
    </ErrorBoundary>
  </StrictMode>,
);
