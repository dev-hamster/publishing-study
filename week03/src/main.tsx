import App from '@/App.tsx';
import '@/app/styles/global.css';
import '@/app/styles/reset.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
