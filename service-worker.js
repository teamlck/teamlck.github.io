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
    "revision": "c8c7c2f85bbb6f1d143c31a1b7014074"
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
    "url": "assets/js/10.d41c5a01.js",
    "revision": "8e7ef01e946458bd415b0559cc6f8043"
  },
  {
    "url": "assets/js/11.5ac524bf.js",
    "revision": "f2e479d5658b009eb39da2b30523bb21"
  },
  {
    "url": "assets/js/12.261316f6.js",
    "revision": "8ab372c871b4fe42aa8b55db3ed38166"
  },
  {
    "url": "assets/js/13.714d380b.js",
    "revision": "b0035d724fb40b0353370a48646723dd"
  },
  {
    "url": "assets/js/2.2eacc74f.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/3.e62c53c4.js",
    "revision": "aada17183a1a351b19d71d81bb0223f1"
  },
  {
    "url": "assets/js/4.ca15bd43.js",
    "revision": "dcefc5c7202d06e10fb3689cc5c5d5d2"
  },
  {
    "url": "assets/js/5.9f1ed155.js",
    "revision": "27330579e0dc70a8e994f35d1cbfe451"
  },
  {
    "url": "assets/js/6.0432210d.js",
    "revision": "81e3d0d6ed51abf54dacbe3ede289b25"
  },
  {
    "url": "assets/js/7.1a6f4dff.js",
    "revision": "70955c4a627463d9a35814d00aabf3c2"
  },
  {
    "url": "assets/js/8.594ec09c.js",
    "revision": "d57475cd6a204acd031971fe37eb5b20"
  },
  {
    "url": "assets/js/9.ff3f16f0.js",
    "revision": "155b30860642807a7186e897a39dc0b7"
  },
  {
    "url": "assets/js/app.93bb2be6.js",
    "revision": "d522be520299a203d348f92e4beca780"
  },
  {
    "url": "contribute.html",
    "revision": "283da44552f07eedb0411c71fda55ad5"
  },
  {
    "url": "develop/index.html",
    "revision": "afe03227373e014ba61e816555f18c46"
  },
  {
    "url": "en/contribute.html",
    "revision": "827cd4bc10c0766b4cdcbb27c94170ff"
  },
  {
    "url": "en/develop/index.html",
    "revision": "62a81c2d88cd58bd53fdf9ddc9f5bfbf"
  },
  {
    "url": "en/index.html",
    "revision": "f17e110e771c6a35d677ba45e3abcb91"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "f4a940172dcabc1be472f7ddc8888f8c"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "6d89a003390973be5f6fe16fc933b456"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "203668d8f3939313bc76b454e73afb52"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "5fe1add680f0fea97683979cab5d87e6"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "6cf84f08a45896ac86226670e6190c43"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "b980f3b9b1c453d6d53752fb231a46a6"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "f3758f456f27cd6cf91804bafce62c49"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "4708520cce97ecd60613824b6650715f"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "c4ce60fa4ef90bc7e1424701b64073f3"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "877739ea05f22517ccefc7115fb809a9"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "203668d8f3939313bc76b454e73afb52"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "8e69bea97053235684d6a6ee1f9d5a24"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "e81f698e00cc7aa064b18478668d2b9b"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "9484a8afe7423d7f59073cca5d2e1feb"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "d17fec86239923629bf640300b5aa059"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "f3758f456f27cd6cf91804bafce62c49"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "f486d2df4dc7a12950b9e3b4ed399d0c"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "bb876b46798bcb368c58cd6690262711"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "bb876b46798bcb368c58cd6690262711"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "36f302d33bb0c9c11df3b062bea21de0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2344c6d1fe2b428b3c5d543554187e8a"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "4708520cce97ecd60613824b6650715f"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "203668d8f3939313bc76b454e73afb52"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "c2d6b1d470723b5e5655c2acbe1bb0da"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "de5162876729525ac0b1d23aa0b6712b"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "df9bb4eb0372d6efec51057f194c22f5"
  },
  {
    "url": "index.html",
    "revision": "cfc2193d19e5a84650a9b106e001e193"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "93ade9a9837e4c2cc1c0f7e44c1c4b9a"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "6f6a86e7cfc0c5dd336c8317c18318f0"
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
