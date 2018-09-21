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
    "revision": "c5bd412d36084afdabfb65af332ceee7"
  },
  {
    "url": "assets/css/0.styles.44379349.css",
    "revision": "785c0dfaebfa2b82349bc8d38be15d4b"
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
    "url": "assets/js/4.c07f393a.js",
    "revision": "c9018855913a1a8397603e1920851e90"
  },
  {
    "url": "assets/js/5.29776ddd.js",
    "revision": "d6108daab520da473cb1718e22dc2d70"
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
    "url": "assets/js/8.f463ad9a.js",
    "revision": "820cbcbd3f90c87e39ace525fe1c8c16"
  },
  {
    "url": "assets/js/9.0c2b6f1c.js",
    "revision": "ac9a296f945568058fa20488f54121cd"
  },
  {
    "url": "assets/js/app.7579a4f8.js",
    "revision": "ee12070aa8587fcbbfb4ca64d81d4d54"
  },
  {
    "url": "contribute.html",
    "revision": "9ff3223d1fac0499135b1ffc3928f7b0"
  },
  {
    "url": "develop/index.html",
    "revision": "96365d57c16c11e80eba647b0177a0fa"
  },
  {
    "url": "develop/semver.html",
    "revision": "9d2547f286d43d7c32919bdac46b4e5b"
  },
  {
    "url": "en/contribute.html",
    "revision": "547e954dd3c21291aceeae226da6e7d1"
  },
  {
    "url": "en/develop/index.html",
    "revision": "d7047eeaa94e4c36d12477e4e7c90376"
  },
  {
    "url": "en/develop/semver.html",
    "revision": "b5c9b5153204ef6f10a803754eaea004"
  },
  {
    "url": "en/index.html",
    "revision": "0efa68e86cf8ebf24d201b042a7a7595"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "6a2e0bb72d907c32d54538b239bc4cff"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "cb84ce00d927a01e5394d51d1609dfdb"
  },
  {
    "url": "index.html",
    "revision": "0a403108c5154320080883b38f458e0a"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "f8b3120b26d73c0b36273f51560d791a"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "4918be5cc4af914432952dbf18f881ad"
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
