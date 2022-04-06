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
        // manualChunks: {
        //   'main-route-group1': [
        //     './src/views/admin/index.vue',
        //     './src/views/boards/index.vue',
        //   ],
        //   'admin-route-group1': [
        //     './src/views/admin/LogsError.vue',
        //     './src/views/admin/News.vue',
        //     './src/views/admin/ProjectPermissions.vue',
        //   ],
        //   'admin-route-group2': [
        //     './src/views/admin/Routes.vue',
        //     './src/views/admin/Rules.vue',
        //     './src/views/admin/Salons.vue',
        //     './src/views/admin/Users.vue',
        //   ],
        //   'project-route-group1': [
        //     './src/views/boards/ProjectRoutes.vue',
        //     './src/views/boards/ProjectPlaces.vue',
        //     './src/views/boards/ProjectPlacesCategories.vue',
        //     './src/views/boards/ProjectPlans.vue',
        //     './src/views/boards/ProjectGallery.vue',
        //
        //     './src/views/boards/ProjectLinks.vue',
        //     './src/views/boards/ProjectDocuments.vue',
        //     './src/views/boards/ProjectDocumentsFolders.vue',
        //     './src/views/boards/ProjectGeneralPlans.vue',
        //     './src/views/boards/ProjectVistas.vue',
        //
        //     './src/views/boards/ProjectBuildingVr.vue',
        //     './src/views/boards/ProjectBuilding.vue',
        //     './src/views/boards/ProjectColorSimulator.vue',
        //     './src/views/boards/ProjectRoomVrTypes.vue',
        //   ],
        //   'project-route-group2': [
        //     './src/views/boards/ProjectRoomVrFloors.vue',
        //   ]
        // },
      },
    },
  },
})
