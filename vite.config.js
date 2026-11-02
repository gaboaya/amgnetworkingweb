import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import seo from './scripts/vite-plugin-seo.js';

export default defineConfig({
  plugins: [react(), seo()],
});
