

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
    server: {
    port: 5173,
    host: 'localhost'
  }
})