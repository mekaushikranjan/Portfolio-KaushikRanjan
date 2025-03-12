import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Ensure correct port usage
    host: '0.0.0.0',
    strictPort: true, // Ensures it only runs on this port
    allowedHosts: ['kaushikranjan-portfolio.onrender.com'], // ✅ Add your Render domain here
  }
});
