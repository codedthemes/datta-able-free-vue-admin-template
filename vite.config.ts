import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  optimizeDeps: {
    include: ['fast-deep-equal'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        verbose: true,
        quietDeps: true,
        silenceDeprecations: ['import'],
      },
    },
  },
  server: {
    open: true,
    host: true,
    port: 3000,
  },
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          apexcharts: ['apexcharts'],
          jsvectormap: ['jsvectormap'],
        },
      },
    },
  },
})
