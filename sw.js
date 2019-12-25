importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05952600a6272d1d7a05.js",
    "revision": "18d3f7b005433cea6d934d6dc6ecd747"
  },
  {
    "url": "/_nuxt/0c136c6efc59e646ca60.js",
    "revision": "95b69dc697ec7bc95890a7d84c75eae4"
  },
  {
    "url": "/_nuxt/14677cbafcc23b819a52.js",
    "revision": "e48b868f0621dcf89d6a4acc86722597"
  },
  {
    "url": "/_nuxt/8b876074a32bc2763f2d.js",
    "revision": "10a0aab799dd3a1aae0b1ea23020407b"
  },
  {
    "url": "/_nuxt/d045fe7b7affb683eb9a.js",
    "revision": "9845e07dc0b019b10d813b694e767738"
  }
], {
  "cacheId": "vuerama",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
