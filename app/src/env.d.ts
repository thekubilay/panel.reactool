/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_DATABASE_URL: string
  readonly VITE_APP_LOGOUT: string
  readonly VITE_APP_GOOGLE_MAPS_KEY: string
  readonly VITE_APP_BASE_PATH: string
  readonly VITE_APP_FRONT_PATH: string
  readonly VITE_APP_404_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'three/build/three.module.js';
declare module '*.vue' {
  import {DefineComponent} from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
