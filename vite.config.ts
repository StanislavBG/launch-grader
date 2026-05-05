import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Built into bilko.run/projects/launch-grader/ as a static-path host.
export default defineConfig({
  base: '/projects/launch-grader/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2022',
  },
});
