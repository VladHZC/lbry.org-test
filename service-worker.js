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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7e1156c192dacceaeb84eac87d70b0e4"
  },
  {
    "url": "assets/css/0.styles.629a8624.css",
    "revision": "7ef41ee9635001c548d16fee4356cef8"
  },
  {
    "url": "assets/fonts/roboto-all-300-normal.130eafc2.woff",
    "revision": "130eafc23a987a6cf560c9b69af84818"
  },
  {
    "url": "assets/fonts/roboto-all-400-italic.623257fb.woff",
    "revision": "623257fb07c66742e64481df50113229"
  },
  {
    "url": "assets/fonts/roboto-all-400-normal.73f26bf9.woff",
    "revision": "73f26bf98a715ecab4d2287ff3a02ad0"
  },
  {
    "url": "assets/fonts/roboto-all-500-italic.c01f80aa.woff",
    "revision": "c01f80aae6dadf6e585cc8462cc72be5"
  },
  {
    "url": "assets/fonts/roboto-all-500-normal.08926d7a.woff",
    "revision": "08926d7a008503f9c640b1772c225476"
  },
  {
    "url": "assets/fonts/roboto-all-700-normal.8b2b2aae.woff",
    "revision": "8b2b2aae46819bb8c37c438760dbb4f6"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-400-italic.60bd3b04.woff2",
    "revision": "60bd3b04afa268185f625e4806bed4b1"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-500-italic.6b7b4bbc.woff2",
    "revision": "6b7b4bbcc9b74a11ec7cd2cc06666887"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-300-normal.607808ee.woff2",
    "revision": "607808ee335a962bdfa989bbfd5e8c57"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-400-italic.5a3cc362.woff2",
    "revision": "5a3cc362fe1633bab9ce42fe3a7a3fe2"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-400-normal.2e0b8660.woff2",
    "revision": "2e0b8660b87034ecf56aa9f488fbc08e"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-500-italic.0fac1914.woff2",
    "revision": "0fac19148d422bf3bd57f908d3fe82e6"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-500-normal.d697abd3.woff2",
    "revision": "d697abd346b57baaaa3c64733e998c6a"
  },
  {
    "url": "assets/fonts/roboto-cyrillic-ext-700-normal.638fd23b.woff2",
    "revision": "638fd23bbc8523124320a4bee32cc43b"
  },
  {
    "url": "assets/fonts/roboto-latin-300-normal.80fe119e.woff2",
    "revision": "80fe119e5efa3911b9d61b265f723b3d"
  },
  {
    "url": "assets/fonts/roboto-latin-400-italic.0bd48206.woff2",
    "revision": "0bd48206165307e9ae7b2e20f7ed55ca"
  },
  {
    "url": "assets/fonts/roboto-latin-400-normal.aa23b7b4.woff2",
    "revision": "aa23b7b4bcf2b8f0e876106bb3de69c6"
  },
  {
    "url": "assets/fonts/roboto-latin-500-italic.faed19ea.woff2",
    "revision": "faed19ea281c3bfdfd8d6de9d8bab192"
  },
  {
    "url": "assets/fonts/roboto-latin-500-normal.f00e7e44.woff2",
    "revision": "f00e7e4432f7c70d8c97efbe2c50d43b"
  },
  {
    "url": "assets/fonts/roboto-latin-700-normal.bf28241e.woff2",
    "revision": "bf28241e67511184c14dbd0ef7d39f91"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-300-normal.065438c9.woff2",
    "revision": "065438c98de2b7f979decf5d7e3eb8a0"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-400-italic.ff06c506.woff2",
    "revision": "ff06c506f19b6d60a457255f8af4036a"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-400-normal.718dded3.woff2",
    "revision": "718dded3393324e992b225ac61329e0c"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-500-italic.74826a5c.woff2",
    "revision": "74826a5c01de0b9ea44677e2aaad5e69"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-500-normal.dd464b28.woff2",
    "revision": "dd464b28ac4bc3d57d9336cf31fde8f1"
  },
  {
    "url": "assets/fonts/roboto-latin-ext-700-normal.01a68cca.woff2",
    "revision": "01a68cca6394bb55312ae1d723285d73"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.38b01925.js",
    "revision": "11a4703bb71b1117becf034b09407880"
  },
  {
    "url": "assets/js/10.4314bd17.js",
    "revision": "59ed72841e39dc8a7ee75dec95acf3df"
  },
  {
    "url": "assets/js/11.a4360e85.js",
    "revision": "0595652de0be2c977951beb6ba3cfa26"
  },
  {
    "url": "assets/js/12.9f4172a5.js",
    "revision": "bc3b91fdc25afdba9384bde91af5c4a0"
  },
  {
    "url": "assets/js/13.1787fdf0.js",
    "revision": "39aec705f136dd6c0ad1dd4cb8ac743c"
  },
  {
    "url": "assets/js/14.10b655f3.js",
    "revision": "caab1c28ac3b91947644ed8bc4a9a670"
  },
  {
    "url": "assets/js/15.ba382793.js",
    "revision": "710f70aa2a3994c52a57743bbd942366"
  },
  {
    "url": "assets/js/16.dcc944c2.js",
    "revision": "51dba858731e71817d3c9c96aded321c"
  },
  {
    "url": "assets/js/17.d432e4c3.js",
    "revision": "df56960f547823a6176d200157222a2c"
  },
  {
    "url": "assets/js/18.8962b1c7.js",
    "revision": "60b937629f2dadd0be61d63e8bfa7518"
  },
  {
    "url": "assets/js/19.bd2ab5cd.js",
    "revision": "444546ee6662ce37c008dffa13d4554d"
  },
  {
    "url": "assets/js/2.d3dc470b.js",
    "revision": "04d3de928aefb93b828018e4e98d34c7"
  },
  {
    "url": "assets/js/20.5c9155db.js",
    "revision": "cc7c68921f960886a01a3609e59a330a"
  },
  {
    "url": "assets/js/21.357e4a06.js",
    "revision": "80442fac400df590a3860b9252fdf89a"
  },
  {
    "url": "assets/js/22.283fe7e1.js",
    "revision": "6d095db4ab74d30c3f12abfc33e212d9"
  },
  {
    "url": "assets/js/23.ef1631a6.js",
    "revision": "8b76752a87040917532415b4921e8cd6"
  },
  {
    "url": "assets/js/24.84de7394.js",
    "revision": "2d89542f3d52b094d32cc8b7c5cfddd6"
  },
  {
    "url": "assets/js/25.09043a0a.js",
    "revision": "88d4a0ecece771232b97f2f4eac3e155"
  },
  {
    "url": "assets/js/26.4b3a39f4.js",
    "revision": "65501858e7ca11145e2ce6d8e901ea67"
  },
  {
    "url": "assets/js/4.31c74a9c.js",
    "revision": "835aa98cbbcf949a444b16ee045fd968"
  },
  {
    "url": "assets/js/5.13eaafeb.js",
    "revision": "14f06c6011aadca1fd200551375f51f3"
  },
  {
    "url": "assets/js/6.9994f7d3.js",
    "revision": "2c78476c5655ec24f311020d80afeed4"
  },
  {
    "url": "assets/js/7.e0ac86e1.js",
    "revision": "50a1cdd088600db54c38bd8fbd53b257"
  },
  {
    "url": "assets/js/8.85088b5e.js",
    "revision": "d3a16a389c84d45ed9134e680a607598"
  },
  {
    "url": "assets/js/9.59d239d4.js",
    "revision": "4bfa722d65a85217d5e205f6508bacf1"
  },
  {
    "url": "assets/js/app.738670a2.js",
    "revision": "d39789b7ffc675fe65e82625ce463048"
  },
  {
    "url": "governance/creators-council/index.html",
    "revision": "6852befdea146fb2d27ea75572d5ed9a"
  },
  {
    "url": "governance/curators/index.html",
    "revision": "9d289fa36ecde896902b810303b12d94"
  },
  {
    "url": "governance/index.html",
    "revision": "045e041c2ebf249061aaaca2d52ad9ff"
  },
  {
    "url": "governance/marketing/index.html",
    "revision": "a6db27c2d8c5d218f9313798267e6c2b"
  },
  {
    "url": "hives/index.html",
    "revision": "9139f33eb7b83b8b22e5b7cce987c898"
  },
  {
    "url": "index.html",
    "revision": "8e395987d7e4ab6e56737b12215f7dd5"
  },
  {
    "url": "logo-fit.png",
    "revision": "2ac65981e0fa2de7bf53aeca7cf1416f"
  },
  {
    "url": "logo-fit.svg",
    "revision": "ed5003ba3ddf3b6d72742d0cad245195"
  },
  {
    "url": "logo-horizontal.png",
    "revision": "3e7a25a74964abed4dc3e326097fa8b8"
  },
  {
    "url": "logo-horizontal.svg",
    "revision": "03eab9da0e5cfae773e823f5e58e2666"
  },
  {
    "url": "logo-vertical.png",
    "revision": "e979fe20d0df8c0098faf01b4564a313"
  },
  {
    "url": "logo-vertical.svg",
    "revision": "654f7bc851fb39afd50d7207c2ff04ff"
  },
  {
    "url": "logo.png",
    "revision": "19e9df7baa1c0d1b2e8a6916d49bb90f"
  },
  {
    "url": "logo.svg",
    "revision": "ebcbe2d04f709021fb34d5993297d030"
  },
  {
    "url": "logo/android-chrome-192x192.png",
    "revision": "859782d7166b4cc43f8616d94774fbc8"
  },
  {
    "url": "logo/android-chrome-512x512.png",
    "revision": "4b483bfa4bc5dd0006b5e3a067980721"
  },
  {
    "url": "logo/apple-touch-icon.png",
    "revision": "c57aaab99e336b2b1a7b93f3635d4c58"
  },
  {
    "url": "logo/favicon-16x16.png",
    "revision": "ddf8ade88ec0f17edf41e172b4ca0242"
  },
  {
    "url": "logo/favicon-32x32.png",
    "revision": "bd66dcf4aeb538395057f47fa5729717"
  },
  {
    "url": "logo/mstile-144x144.png",
    "revision": "7ecee6d057054ee9c4f07a549b4a76b7"
  },
  {
    "url": "logo/mstile-150x150.png",
    "revision": "2b78bb0613bba8f86e4386420726fa58"
  },
  {
    "url": "logo/mstile-310x150.png",
    "revision": "684db972adc4cc235349221b4e80b5c8"
  },
  {
    "url": "logo/mstile-310x310.png",
    "revision": "b3b662b20614fc62b4f0d741b162448a"
  },
  {
    "url": "logo/mstile-70x70.png",
    "revision": "4f08d583bba0b471ff728da86061ee5a"
  },
  {
    "url": "logo/safari-pinned-tab.svg",
    "revision": "df4b508bcf30c66d813cc10f9ffaf8ff"
  },
  {
    "url": "musichive.png",
    "revision": "5555cdc634a81d4b9ee914cf2873b689"
  },
  {
    "url": "privacy/index.html",
    "revision": "10f002ee16d26bb5e8fb4e67f427e5b4"
  },
  {
    "url": "projects/index.html",
    "revision": "852c6a5d1b8b68b0bacf3ebd887d40c1"
  },
  {
    "url": "projects/podcast/index.html",
    "revision": "9ceec4bb945cf2a34560afa66531b845"
  },
  {
    "url": "projects/radio/index.html",
    "revision": "f6e1631e7712c1044eb1d31f8ee26903"
  },
  {
    "url": "projects/swarm/index.html",
    "revision": "ae765d50dbcc41eef78e902c7fa860c2"
  },
  {
    "url": "roadmap/index.html",
    "revision": "9a33728d0957b47a9ee376e52fb889ec"
  },
  {
    "url": "verify/index.html",
    "revision": "f86a2d9e1fc87c58a4cca4e0f16abd1d"
  }
].concat(self.__precacheManifest || []);
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
