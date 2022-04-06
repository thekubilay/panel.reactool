const {resolve} = require('path');
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: process.env.NODE_ENV === "production" ? resolve('./') : resolve("./"),
  // base: process.env.NODE_ENV === "production" ? "/static/" : "http://0.0.0.0:3000/",
  base: process.env.NODE_ENV === "production" ? "/static/" : "./",
  server: {
    host: 'localhost', // local
    // host: '0.0.0.0', // network
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: resolve('./dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./src/main.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
})
