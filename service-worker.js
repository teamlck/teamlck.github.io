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
    "revision": "335de2046e1f5aa4439e26706d530eb5"
  },
  {
    "url": "another.html",
    "revision": "9947b9d30f02079bfb9067e69f6d22e9"
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
    "url": "assets/js/7.ef287471.js",
    "revision": "24da44a8df10d559c702c95800362a99"
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
    "url": "assets/js/app.15547482.js",
    "revision": "d91463903d5d4bf358599cbf16bbc629"
  },
  {
    "url": "develop/index.html",
    "revision": "0cdb31ccf6747f18b9471a17b91bc762"
  },
  {
    "url": "develop/semver.html",
    "revision": "7d388dec8290f20262c976ccd81eb4b6"
  },
  {
    "url": "en/another.html",
    "revision": "b97933a8cec43b639629774c59e65719"
  },
  {
    "url": "en/develop/index.html",
    "revision": "48934c8727a12b9ffa124712f64e4763"
  },
  {
    "url": "en/develop/semver.html",
    "revision": "e80c9e95912efd240208568d1b280f90"
  },
  {
    "url": "en/index.html",
    "revision": "4e64e83e50809791cc2830feee35f606"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "055a9e2514cf64a8103dfc18e4a2bdcd"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "67562ce0a7c9ea8a93fc47b9d13d4b1c"
  },
  {
    "url": "index.html",
    "revision": "c7952084043951f7c95d5cf08a666107"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "3bae30daf334a882c43df2705bbdca44"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "5210c3b6e79e915ff10c2c9ab5a3d33d"
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
