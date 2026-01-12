import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update base/outDir so GitHub Pages can host from the docs folder
export default defineConfig({
  base: '/AlexBrownSoftwareDeveloper/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
