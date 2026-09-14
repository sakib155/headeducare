import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import seoDevPlugin from './vite-plugin-seo'

export default defineConfig({
  plugins: [seoDevPlugin(), react(), tailwindcss()],
})
