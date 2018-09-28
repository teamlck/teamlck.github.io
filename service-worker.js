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
    "revision": "f9303553d609ee0413c6db6293fa5ad6"
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
    "url": "assets/js/4.58f0fd93.js",
    "revision": "ff50ad4291479677c1d3940882159897"
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
    "url": "assets/js/7.22f6f73b.js",
    "revision": "a3aeddf7f09c5bb323d9c5580274659f"
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
    "url": "assets/js/app.7d42d0c1.js",
    "revision": "796e56f111f544359a5ee6a85d681570"
  },
  {
    "url": "contribute.html",
    "revision": "baa3fdd398b6e59bf6149a1de2f3ef5f"
  },
  {
    "url": "develop/index.html",
    "revision": "327e54f116014159d9023ddd0c2a4f29"
  },
  {
    "url": "en/contribute.html",
    "revision": "6f519e32467e49e5d1065feda09d721a"
  },
  {
    "url": "en/develop/index.html",
    "revision": "7896631228a3ae025626c7003fdfd8cb"
  },
  {
    "url": "en/index.html",
    "revision": "38fe215ed3189e4be45a7949eaa421f8"
  },
  {
    "url": "en/raspberrypi/index.html",
    "revision": "f91b480de6252b60be494ccf0aca52f5"
  },
  {
    "url": "en/smart-analytics/index.html",
    "revision": "b28b6618912b80240e51159f5b65b324"
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
    "revision": "821907799192a7f9ce6c79a638192533"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "63d6a028e233f770aec524f4665e690e"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "cf66828b10069ba14adb64cbc19dc999"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "216f06f6cc695f7ef29f8d210f57d44b"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "c23b3d684b7bc1e10e7ba3c4a204a827"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "219a0fa10f3f135535d5d2d8c84d0476"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "bf03188e919f4431e5aeeee71f9cf10b"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "27c60856c46f3ed2c08b4a30e80f2059"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "3e410dfdcd63aa2dea50eb4eb54b8378"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "3b3fd384cf2a61f28926be805dde2221"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "3b3fd384cf2a61f28926be805dde2221"
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
    "revision": "52cd8ba6dad8a16d030570b7cdb4862f"
  },
  {
    "url": "raspberrypi/index.html",
    "revision": "3171722f632f0b3450085d647bc6a916"
  },
  {
    "url": "smart-analytics/index.html",
    "revision": "54e2c7a671f1e8cdfa01eeec40be0eb8"
  },
  {
    "url": "teamlck-logo.png",
    "revision": "ad999f2643cc098aa913b95ebdde54ce"
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
