import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { trackContactClicks } from './analytics';
import './index.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// En la versión publicada el HTML ya viene prerenderizado (scripts/prerender.mjs): solo se hidrata
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

trackContactClicks();
