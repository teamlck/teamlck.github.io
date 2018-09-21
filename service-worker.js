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
    "revision": "da4b83319e8bd84ff2a648b6dead8060"
  },
  {
    "url": "another.html",
    "revision": "253cea9b8440cedc6e6226b107e7d8b2"
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
    "url": "assets/js/6.5735c18d.js",
    "revision": "b89cb212b52dea9559f4f2bb872f6878"
  },
  {
    "url": "assets/js/7.146caec9.js",
    "revision": "b438be83c92266e928707c46929e7c4a"
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
    "url": "assets/js/app.e3251802.js",
    "revision": "3ddd9019449309372609c9f0adee337b"
  },
  {
    "url": "develop/index.html",
    "revision": "15694efe738722fe824563e6117f4af8"
  },
  {
    "url": "en/another.html",
    "revision": "df7adb4c43f3127e2fc8a7c696ba6120"
  },
  {
    "url": "en/develop/index.html",
    "revision": "265f96f7e916182072c5eb2ff53d57b3"
  },
  {
    "url": "en/index.html",
    "revision": "23a626d477c9bb0531cc84f7a099f78c"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "47f52dfc2fb312593897b9476dab4f6c"
  },
  {
    "url": "index.html",
    "revision": "06a94ada32c104eea98662dfb40a3364"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "a5980d1d0362fe25ea0c0a73815436cb"
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
