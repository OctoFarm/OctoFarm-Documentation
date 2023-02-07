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
    "revision": "df305d80f01c40981117103605024156"
  },
  {
    "url": "api/index.html",
    "revision": "387a360bd6a71522505c6daf76dc2706"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/clone-of.74241f73.png",
    "revision": "74241f73d4aefb9524fb3392e4230348"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/open-c.296bfbfd.png",
    "revision": "296bfbfdb95d3c5ceb2514310e42a7a8"
  },
  {
    "url": "assets/img/pm2-install.3e05ff0a.png",
    "revision": "3e05ff0a415accd76ca300186e32b2db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start-octofarm.07ee2557.png",
    "revision": "07ee2557d21f00f16ed1ef736752bc79"
  },
  {
    "url": "assets/js/10.1e710ca1.js",
    "revision": "6fb34fa4352ed0b10837bb0c172e1401"
  },
  {
    "url": "assets/js/11.3aeb6364.js",
    "revision": "e0fcee77c4bab818df176d61401e5ba0"
  },
  {
    "url": "assets/js/12.6a316914.js",
    "revision": "1169151fb3cf9a569a465f9ef8c7dd4b"
  },
  {
    "url": "assets/js/13.5ed144e5.js",
    "revision": "6bc7e7083cb02dcba55aaba9ef840784"
  },
  {
    "url": "assets/js/14.e0a5aa28.js",
    "revision": "c8ce426f2657bf4249e48a15ac0ee436"
  },
  {
    "url": "assets/js/15.d0ae670b.js",
    "revision": "54e48737d7abeaf661342fe197a33228"
  },
  {
    "url": "assets/js/16.82ca0b25.js",
    "revision": "e81c0cf81a456be67302ba01cdcb1904"
  },
  {
    "url": "assets/js/17.94415a2f.js",
    "revision": "fa5661743b5663482be5c765064f1863"
  },
  {
    "url": "assets/js/18.c67f3c9d.js",
    "revision": "fa032c741deedf50d921b762e88d4f45"
  },
  {
    "url": "assets/js/19.375f685d.js",
    "revision": "993d296b0604944044d94c349ba87263"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.ab70697b.js",
    "revision": "c646aae170f37bc31f12edf1ba7f3098"
  },
  {
    "url": "assets/js/21.64d5d0b5.js",
    "revision": "d8afd3bf5c5f27c73dedf7271364bec0"
  },
  {
    "url": "assets/js/22.d6521196.js",
    "revision": "c3b303d2f58769e9ad5729e062e76707"
  },
  {
    "url": "assets/js/23.a0ad216c.js",
    "revision": "5a6a16707a5096a8988552387bd51bf2"
  },
  {
    "url": "assets/js/24.9edcc577.js",
    "revision": "2bba90f80812de7cd09e395689c37bde"
  },
  {
    "url": "assets/js/25.c81a51fe.js",
    "revision": "d51a823264d18c10ec66835fdd153920"
  },
  {
    "url": "assets/js/26.259358ce.js",
    "revision": "10b548c9d402ca423fb246291bc4a182"
  },
  {
    "url": "assets/js/27.10d20bda.js",
    "revision": "5d3aa2322b2fad83e9107613d556dcfa"
  },
  {
    "url": "assets/js/28.dedb176d.js",
    "revision": "eb256aad9f10823faffb1bbeea033e87"
  },
  {
    "url": "assets/js/29.dce88013.js",
    "revision": "9cc05c65ce2950be0a4d55de88662393"
  },
  {
    "url": "assets/js/3.7ac04033.js",
    "revision": "65329bb54764146de8f0ef5c84a52232"
  },
  {
    "url": "assets/js/30.32ed1cef.js",
    "revision": "7a5ac67d9c62496988630e45e42c6fcb"
  },
  {
    "url": "assets/js/31.8002ee73.js",
    "revision": "3fc940566b59120c86bb1ccd9b41182b"
  },
  {
    "url": "assets/js/32.3f0f6196.js",
    "revision": "0368f59606ddc622caa9e954103c659c"
  },
  {
    "url": "assets/js/33.3933490d.js",
    "revision": "c3ec69c91eea94bfc343394f734ec3de"
  },
  {
    "url": "assets/js/34.89425a09.js",
    "revision": "26e788c38c593a4b7d85490f6fe9e545"
  },
  {
    "url": "assets/js/35.c28071e6.js",
    "revision": "daa02626f2f74773a134196e222c9ff8"
  },
  {
    "url": "assets/js/36.75012aba.js",
    "revision": "fd653fb2bfd6dbd5391c127752131317"
  },
  {
    "url": "assets/js/37.6ee75b18.js",
    "revision": "6ed8992ed1650b3b853fc8e39bcbe2b9"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.b307729f.js",
    "revision": "3f0c8a4a67c84961957bb80188151e0c"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.ee729bdd.js",
    "revision": "614dfd9f12643fc2f42ce3c286008488"
  },
  {
    "url": "assets/js/9.75a81c4f.js",
    "revision": "821719f6a05598ed1604a99c8988f6ac"
  },
  {
    "url": "assets/js/app.f0cea3be.js",
    "revision": "dd960e2532f68326112f4f14ba886453"
  },
  {
    "url": "contributing/index.html",
    "revision": "d255c24d8841fd15a858cf2a0c45d64c"
  },
  {
    "url": "getting-started/index.html",
    "revision": "c49a15e846950793928c019d273137f5"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "6eeb7f3335851c30d7f467e90fb91f05"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "2ddc578742fc10e1332dc3b82986547c"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "8fa3a7eb2252bb59789f947c7d251f4f"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "ffc993140f2193e5f6c6f015c3328cbb"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "6596d1d3c9f558e55518188872592dd4"
  },
  {
    "url": "getting-started/octoprint-supported-plugins.html",
    "revision": "b3bdc88a47508a1847ca01a21b33562e"
  },
  {
    "url": "guides/index.html",
    "revision": "e242e283d617708fcae2fcd7a098c60c"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "1aa026eef89834010e385d73b10b7d97"
  },
  {
    "url": "guides/octofarm-updating.html",
    "revision": "592b2fb22ff6ad9e0dba59dbcbc67c0d"
  },
  {
    "url": "guides/upgrade-mongodb-database.html",
    "revision": "9c915e2df44fdf6f902cd632104da478"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "b6edac60b2c100c39f6dc824a72db01d"
  },
  {
    "url": "installation/index.html",
    "revision": "13feb7e528c45ac0079d50d3faf63455"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "3b1e8625cc088ede1d0a75356bb0f5c0"
  },
  {
    "url": "installation/install-linux-arch.html",
    "revision": "139a152c2e0dd10f55eb0d1164f31ef7"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "d57b7d7707e4695a06b41719b3437d47"
  },
  {
    "url": "installation/install-linux-opensuse.html",
    "revision": "ecbcd20064cb500f059e2edff692cf29"
  },
  {
    "url": "installation/install-linux-redhat.html",
    "revision": "6c94c0281fa477b21fe7768a375bb537"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "08f0a4c3c01231e0e2b62793e0bd15ca"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "86beaeb6154bae3d895e806cef6676d8"
  },
  {
    "url": "installation/install-windows.html",
    "revision": "78a0ed73b8e71b279f70df15cf654876"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "f3b8966e23a995df9aea28410a9a828c"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "7266bb6d74332ac5d7ef0be436bbd74f"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
  },
  {
    "url": "usage-instructions/index.html",
    "revision": "52fad97d7d8ec26e212537b10842f3b1"
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
