import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/assets/style'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@component': path.resolve(__dirname, './src/component'),
    },
  },
})
