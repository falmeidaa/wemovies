import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import EnvironmentPlugin from 'vite-plugin-environment'


export default defineConfig({
  base: '/wemovies/',
  plugins: [react(),
    EnvironmentPlugin(['API_URL'])
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
