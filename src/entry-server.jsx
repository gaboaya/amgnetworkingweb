import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Usado al compilar (scripts/prerender.mjs) para generar el HTML completo de la página
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
