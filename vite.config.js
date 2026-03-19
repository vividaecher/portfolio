import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        uebermich: resolve(__dirname, 'uebermich.html'),
        imprint: resolve(__dirname, 'imprint.html')
      }
    }
  }
})