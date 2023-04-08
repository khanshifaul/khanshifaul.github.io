import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "chunks/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        manualChunks: (id) => {
          if (id.includes('node_modules')) return id.toString().split('node_modules/')[1].split('/')[0].toString();
        }
      }
    }
  },
  plugins: [vue(), splitVendorChunkPlugin(), viteCompression(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': fileURLToPath(new URL('node_modules/bootstrap', import.meta.url)),
    }
  },
  base: '/',
})

