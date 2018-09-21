/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c8f7e9a7553c1eacc82a9dd33f38e137"
  },
  {
    "url": "another.html",
    "revision": "4a02338bbd96aa540803b438639a9347"
  },
  {
    "url": "assets/css/0.styles.87a3a746.css",
    "revision": "f5e5583c072edaa25c3ac5b3f499cc36"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7aa60926.js",
    "revision": "d912895f2f1d7860c2b3ed34e080d6b3"
  },
  {
    "url": "assets/js/11.a0d8bc8f.js",
    "revision": "eee8459f585845ee6c3c122d32bfa369"
  },
  {
    "url": "assets/js/2.2eacc74f.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.cb0a5f5a.js",
    "revision": "bc80775ba98cf5ec16a9cf1c2322e72a"
  },
  {
    "url": "assets/js/4.bd3be30e.js",
    "revision": "2b449398a9d24d2afc736d508bb2348e"
  },
  {
    "url": "assets/js/5.3d296617.js",
    "revision": "d1471eeb3b3e3c6057c97d4a813a8b10"
  },
  {
    "url": "assets/js/6.28faefec.js",
    "revision": "19174e0f8b8252ccd3abecabdb132c95"
  },
  {
    "url": "assets/js/7.33a37db2.js",
    "revision": "9f4f1cc67c9a1643e4cb59d3c6eefd62"
  },
  {
    "url": "assets/js/8.2bd7274b.js",
    "revision": "9fd215699de152200809fa9b716ccdd6"
  },
  {
    "url": "assets/js/9.4513ab45.js",
    "revision": "b7de3eaab7e7fefafcab5c2247afd048"
  },
  {
    "url": "assets/js/app.4dd5d264.js",
    "revision": "b2b0085e31c0ead89ba1ccf3be2a64a0"
  },
  {
    "url": "develop/index.html",
    "revision": "cee1d170469905b644e92b56f1d5fcb7"
  },
  {
    "url": "en/another.html",
    "revision": "cac92e43fe02b50654238c0f8a49362a"
  },
  {
    "url": "en/develop/index.html",
    "revision": "690df890e0aacd0da93d756f5fa90ed4"
  },
  {
    "url": "en/index.html",
    "revision": "e8cdf1109e3dd29f01cfb6b05cd87e09"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "1b68f3db02c6e39582fc0da0207c836a"
  },
  {
    "url": "index.html",
    "revision": "24fb5b09a149063e35001b2e7ca0a9b9"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "681ba1102180582bd96a4301e2974434"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
