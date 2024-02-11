const scope = '/prefix/'

export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt',
  ],

  app: {
    baseURL: scope,
  },

  pwa: {
    strategies: 'injectManifest',
    srcDir: 'service-worker',
    filename: 'sw.ts',
    scope,
    base: scope,
    workbox: {
      clientsClaim: true,
      cleanupOutdatedCaches: true,
      skipWaiting: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})
