import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AppProvider } from './providers/appProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
