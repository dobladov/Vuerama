importScripts('/Vuerama/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/Vuerama/05952600a6272d1d7a05.js",
    "revision": "18d3f7b005433cea6d934d6dc6ecd747"
  },
  {
    "url": "/Vuerama/14677cbafcc23b819a52.js",
    "revision": "e48b868f0621dcf89d6a4acc86722597"
  },
  {
    "url": "/Vuerama/27823187a1c07338e878.js",
    "revision": "8881371143443b74f66d8599b8ef0238"
  },
  {
    "url": "/Vuerama/d045fe7b7affb683eb9a.js",
    "revision": "9845e07dc0b019b10d813b694e767738"
  },
  {
    "url": "/Vuerama/e7c3ee877ab989fff8f3.js",
    "revision": "8e75345738265148c410f78aa4d2c72e"
  }
], {
  "cacheId": "vuerama",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/Vuerama/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
