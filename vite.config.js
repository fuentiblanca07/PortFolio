import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/fuentiblanca07.github.io/', // ← add this (your repo name)
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
  build: {
    outDir: 'dist',           // ← where the build output goes
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
})