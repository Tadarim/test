import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  base: './',
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
})
