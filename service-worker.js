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
    "revision": "fb7a1915d21c2a4abcf8cb5e6a448aa3"
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
    "url": "assets/js/14.8dead851.js",
    "revision": "ee41dd92382c175bb712f7a04285748b"
  },
  {
    "url": "assets/js/15.2f291ee6.js",
    "revision": "0eb635d94d6b03a3d7512ed5fcbf7987"
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
    "url": "assets/js/6.9f3c1429.js",
    "revision": "8547129e714a892f10c763634a4787be"
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
    "url": "assets/js/app.82882c6e.js",
    "revision": "7a819e8df6bc856ac269958ab1692e60"
  },
  {
    "url": "contribute.html",
    "revision": "7cf920bc3c2a23b6c6fdfc913f75d761"
  },
  {
    "url": "develop/index.html",
    "revision": "06e8a8973b7539919adf017fd18d8783"
  },
  {
    "url": "develop/semver.html",
    "revision": "89c163a8aed2164b444896789d0a5d4a"
  },
  {
    "url": "en/contribute.html",
    "revision": "b5d44f9dfd863c3c415e1418c8309ea1"
  },
  {
    "url": "en/develop/index.html",
    "revision": "6ca1f55d3e377dbda98529b374668997"
  },
  {
    "url": "en/develop/semver.html",
    "revision": "13fafb3c56d340f04589636c93ab1cc7"
  },
  {
    "url": "en/index.html",
    "revision": "2d9b6cd3502b5387899392ab81b41851"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "fc2a656cca133fc9f152a73916eb8656"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "034c6f7e2bd7207b41232a6f1830d225"
  },
  {
    "url": "index.html",
    "revision": "a50842542fcb40e0f99ab948ec743a31"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "3f9d899fc328349f9e2a57f8067aaaf1"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "83c34cbb7be812c37017f3486f8e2880"
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
