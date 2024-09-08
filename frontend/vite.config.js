import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Fixes the issue with routing
  server: {
    historyApiFallback: true,
  },
});
