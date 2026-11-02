import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// Usado al compilar (scripts/prerender.mjs) para generar el HTML completo de cada página
export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}
