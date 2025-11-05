import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

const repoName = 'nickostark.github.io'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
