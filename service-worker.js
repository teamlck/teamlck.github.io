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
    "revision": "083bedaf3fda38c78381677fc3ac2930"
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
    "url": "assets/js/app.6fa3ae54.js",
    "revision": "cf96b4f8dab03f9f5611c4042e5c548e"
  },
  {
    "url": "contribute.html",
    "revision": "9da5a483a3067fc8078c21534f591b93"
  },
  {
    "url": "develop/index.html",
    "revision": "1e272b65ff78e444b337d9c39f63dee2"
  },
  {
    "url": "develop/semver.html",
    "revision": "0d9aa8d1d84c521d176c4d996d16a3de"
  },
  {
    "url": "en/contribute.html",
    "revision": "13a56555c3fed96de833185c86c4a6a8"
  },
  {
    "url": "en/develop/index.html",
    "revision": "db5a928b9824bd50674541dc25121d7f"
  },
  {
    "url": "en/develop/semver.html",
    "revision": "b1a4c0ae69f4b7cc8e47e3f44aea95b7"
  },
  {
    "url": "en/index.html",
    "revision": "2193008ae26fe23d5b83ad851780325f"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "2286b5c653f9b28961455eb0655e55d1"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "6e3ea2c3d9a1d321e4b20b14107edfbf"
  },
  {
    "url": "index.html",
    "revision": "c125f58497fb770f87f2316da0393364"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "35e577eb10e0ab742a252670d38494f4"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "b34d742320ba3e1a536900ccc2b86755"
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
