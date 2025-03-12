import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // ✅ Ensures assets are correctly linked
  build: {
    outDir: 'dist',
  },
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0',
    allowedHosts: ['kaushikranjan-portfolio.onrender.com'],
  }
});
