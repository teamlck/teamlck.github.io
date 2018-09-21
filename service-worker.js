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
    "revision": "0647e5834012ec795b6cfc30bc268a4a"
  },
  {
    "url": "another.html",
    "revision": "84054f5b3427f2b0a5e3682e57d664eb"
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
    "url": "assets/js/10.b6ee5a3e.js",
    "revision": "17725dc4f3d93eefd8e7bc7299ca77e5"
  },
  {
    "url": "assets/js/11.91fc2634.js",
    "revision": "e8187c6d5fad9e0d42af238660b20eab"
  },
  {
    "url": "assets/js/12.2fd2394c.js",
    "revision": "214ddd1b633cde7e27361e2c07246760"
  },
  {
    "url": "assets/js/13.8a333af3.js",
    "revision": "37b62c96a8fa90c9ef8f4e993e922085"
  },
  {
    "url": "assets/js/14.0ceba614.js",
    "revision": "652f2b83c3f829e126371180c172b664"
  },
  {
    "url": "assets/js/15.abe7a39f.js",
    "revision": "9f358108968b2fda53e5ac15d15766a0"
  },
  {
    "url": "assets/js/2.2eacc74f.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.0d6ec4cf.js",
    "revision": "d8e1846e0b1669bcf2a38650b8709f1b"
  },
  {
    "url": "assets/js/4.a268ef96.js",
    "revision": "1bd79ef1626157a633e4238cd35dc280"
  },
  {
    "url": "assets/js/5.ee7dc606.js",
    "revision": "2a6bdc5d3eb11cb835ed9409e32a9be2"
  },
  {
    "url": "assets/js/6.44b12f34.js",
    "revision": "402055fe3b8763ba8edeb4591e3ecacc"
  },
  {
    "url": "assets/js/7.1d4b4031.js",
    "revision": "6ec049a04e30a5ce5813f6493f5cfa99"
  },
  {
    "url": "assets/js/8.02e5c5c0.js",
    "revision": "9b01f5648da1fa23b9710ec62caa6785"
  },
  {
    "url": "assets/js/9.c255dee6.js",
    "revision": "7b555f43ac5a27cdb8950ddf537d4b1b"
  },
  {
    "url": "assets/js/app.7693f4a0.js",
    "revision": "ba1c5b08d3cb5d6f30f9f47e6f71a6ca"
  },
  {
    "url": "develop/index.html",
    "revision": "40610b711e5a3fcc7e307f81f38ec6c8"
  },
  {
    "url": "develop/semver.html",
    "revision": "712dfd3580c52c3f086a680685c9ab74"
  },
  {
    "url": "en/another.html",
    "revision": "f312ca9d80bec58cd26da29e40fc3a28"
  },
  {
    "url": "en/develop/index.html",
    "revision": "4697a011112af3f2a47cb3bb8300ce9a"
  },
  {
    "url": "en/develop/semver.html",
    "revision": "b2545039529f55267ba5bcad0f94bb5f"
  },
  {
    "url": "en/index.html",
    "revision": "1508f6120d0160c1ba033449949b55f8"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "f65f2b9528d0e81a2a65c5ad7efb8ebf"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "891bc9e6513b0a7f21200c1f5ed17203"
  },
  {
    "url": "index.html",
    "revision": "7ff916d5754f7f0ab4768a22bfc3e5f7"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "06dc13a6185d0a44b869e911dcec3d96"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "f6666897467fe343d1b1aa5843511159"
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
