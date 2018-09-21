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
    "revision": "f7f69c4703b942ac996a71730f45355f"
  },
  {
    "url": "assets/css/0.styles.286200e0.css",
    "revision": "6b63c4b8423b1e0bbba7ffa8fdcd199b"
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
    "url": "assets/js/4.80594f73.js",
    "revision": "939795a108927cece88152b64bf61b15"
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
    "url": "assets/js/8.91ae2cdd.js",
    "revision": "d75bc42b70102f9abf602180f075dd3b"
  },
  {
    "url": "assets/js/9.0c2b6f1c.js",
    "revision": "ac9a296f945568058fa20488f54121cd"
  },
  {
    "url": "assets/js/app.8c1e67dd.js",
    "revision": "befcbb032fdab1f7d72e3b6594bced0f"
  },
  {
    "url": "contribute.html",
    "revision": "d3b7f8a21d03b7464e52027ec18b5c1f"
  },
  {
    "url": "develop/index.html",
    "revision": "48af8bd727670b2299b0f3d16e833f18"
  },
  {
    "url": "develop/semver.html",
    "revision": "9bd34838356d8a08e9908b9d9d85ebc5"
  },
  {
    "url": "en/contribute.html",
    "revision": "cee1c6913a7d1eebdcda2fe5ac0f038d"
  },
  {
    "url": "en/develop/index.html",
    "revision": "1684b7b51ed7fd600a840c10c990656e"
  },
  {
    "url": "en/develop/semver.html",
    "revision": "d241cdb9688289f42c997a1f81c1d375"
  },
  {
    "url": "en/index.html",
    "revision": "17ab546e3b0a66ee869bb844df7c696e"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "57582637024897a3f6dfee823877bd27"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "c02b9ba4f53325ca12556a709925dac6"
  },
  {
    "url": "index.html",
    "revision": "eeabf5b0b8f564a28036fde5a5d7448e"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "c1b09fca7174abd4aaf3dc9abc820e39"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "1062c9d99d4b8eda17f5f7576093a579"
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
