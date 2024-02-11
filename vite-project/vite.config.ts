// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

const scope = '/prefix/'

export default {
  base: scope,
  plugins: [
    VitePWA({
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
    })
  ]
}
