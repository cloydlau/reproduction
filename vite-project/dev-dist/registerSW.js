if('serviceWorker' in navigator) navigator.serviceWorker.register('/prefix/dev-sw.js?dev-sw', { scope: '/prefix/', type: 'module' })