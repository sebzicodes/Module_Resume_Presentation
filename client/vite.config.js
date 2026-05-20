import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Module_Resume_Presentation/',
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})
