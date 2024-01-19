'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c40d6e1de853b5f5d620a43bf9a3d381",
"assets/AssetManifest.bin.json": "9a3ac7b5a371e1d884d310512b0546bc",
"assets/AssetManifest.json": "9b70d9e618943b00c5a7282caff4fe07",
"assets/assets/404animation.json": "63fa162c44be24d619ee08e1321b092e",
"assets/assets/background.json": "a09200314986fea6b96a134a2df0a05a",
"assets/assets/cat.json": "46d5687a8ac9f7846c7f913392a2e08a",
"assets/assets/celebration.json": "ff63a9b38d34fece66ab25e011855e49",
"assets/assets/checklist.json": "ed39a6ae200028fefb03e840e511db7e",
"assets/assets/cpu.json": "fc17e201193513be739d677ae76708f9",
"assets/assets/desktop.ini": "87bab73ef10975667bda4b0d6d927495",
"assets/assets/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Oxanium-VariableFont_wght.ttf": "de876b23cee7a2993a020e844ac9f0e1",
"assets/assets/icons/comment.png": "60223384831843a53b5ca9758819dfb1",
"assets/assets/icons/heart.png": "ccbb4c65bc18a3625cd4277661a03a73",
"assets/assets/icons/star.png": "ddf39bb8a93b0f6fc01d00f46d2ccf0c",
"assets/assets/icons/upload.png": "5dc55d5d6251cbbe1195636af3d14f2b",
"assets/assets/images/badge/comments1000.png": "a34d1804158f410757fec1cc67f2eef5",
"assets/assets/images/badge/comments10000.png": "b712e79cf887cadb35b7ca4b1052b3d5",
"assets/assets/images/badge/comments200.png": "3e24232bf8a8ee52ff5f34c5ec20fe1a",
"assets/assets/images/badge/comments50.png": "df465fb9512ade5b6e1101dbeb16e7fb",
"assets/assets/images/badge/firstuser.png": "5c42109c45c17eb8471dd9460d87a3c3",
"assets/assets/images/badge/truster.png": "f16352fe4c6e0ad78ab45b7cc0c65df1",
"assets/assets/images/badge/uploads200.png": "46e078481cd8b19508013f30dc63e020",
"assets/assets/images/badge/uploads50.png": "b77c3e591d46ad13e1000c3cd2265d74",
"assets/assets/images/game_cbplace.png": "a0c06af4b1aa0db682f9ed80cee62046",
"assets/assets/images/game_howlucky.png": "8af92cbe96cdf941658c8afc40268141",
"assets/assets/images/game_memearena.png": "7350e12f75a098d0caa62898225f3969",
"assets/assets/images/game_monstersmash.png": "90b8525f9612d881b630019ca61f10c2",
"assets/assets/images/game_sideeffect.png": "4ca8fd813e4e124d1f54adf6880266da",
"assets/assets/images/game_worlddestroyer.png": "912d738ce651d15c43e42d68dae9b972",
"assets/assets/images/ic_launcher.png": "0cdf7e13894854e491ac585ce851d145",
"assets/assets/images/ic_launcher_background.png": "3bd4aa820f7f7e13d423a130f42b91d3",
"assets/assets/images/ic_launcher_foreground.png": "b161329337cd4b534f42a5f10a6ded89",
"assets/assets/images/ic_launcher_monochrome.png": "b161329337cd4b534f42a5f10a6ded89",
"assets/assets/images/loadingdata.gif": "23f0e0fb31121c62005016a08465425a",
"assets/assets/images/logo_b128.png": "94bf6ecaeed99a9d72d8e6db0b6e32e9",
"assets/assets/images/logo_w128.gif": "236d45e0f6cac356540270f599bcb5a7",
"assets/assets/images/logo_w128.png": "d64f9842d8b0f5e7d44eba62740e2e8b",
"assets/assets/images/logo_w128_blackbackground.png": "6c3e1ebc3650b66a939d431ebf8e00c0",
"assets/assets/images/nointernet.gif": "c5eba3adae4d7eca5f84c3cdbdc8bc38",
"assets/assets/images/noprofilpicture.png": "69bd8ab9ef31bf1d704d9a52c1e68f9f",
"assets/assets/images/profiletest.gif": "23cfc9e8af9284557081663344e76793",
"assets/assets/images/profiletest2.gif": "a45ed49be8ea90694c6534359f627d77",
"assets/assets/images/ressourcebackground.png": "3f332ebbfac98b06e3342f218021b6f5",
"assets/assets/images/walletbackground.png": "869fcdda3176fd2ef44748d56a6f53d1",
"assets/assets/keyboardupdown.json": "2d52f2869b47d2e4c6963ad667f7fc95",
"assets/assets/mixer.json": "0e4b9f8a79d53ffb8f395e1dfad262c0",
"assets/assets/mousescroll.json": "c8ccfb61f0006c91b256e4adb2c864e7",
"assets/assets/net.json": "43baf525d69a51960c11202c437b40e0",
"assets/assets/ok.json": "3163b8c93069117645f9433246fd81d5",
"assets/assets/pepe.json": "749365234e840a05daa654f0f1d1ed84",
"assets/assets/press.json": "a8f7d871bfa5bdca22ec5f5b896030bf",
"assets/assets/ram.json": "79bd3dc00ad11f7b064ae3aa9052afd4",
"assets/assets/report.json": "6126afda08e4cb2e147f64ee3f35ffc2",
"assets/assets/reportchecklist.json": "02212025d5f5316f3c47f76d0988d74d",
"assets/assets/scanqr.json": "d3994b5cd8fa0e6535ecc2ea64a98552",
"assets/assets/sorry.json": "75f0dcf1fb9017e4a7b95b2418b6b8f7",
"assets/assets/sounds/cash1.m4a": "e39992cd9cd68a48fd45b885d21387b1",
"assets/assets/sounds/cash2.m4a": "ce1fbf159d1e1bb467e3dbe3827e819f",
"assets/assets/sounds/cash3.m4a": "08fcde76dc8260c6e83b5ccbe88bdf82",
"assets/assets/sounds/fail.m4a": "3b925048ad79256cf763a633760f41c8",
"assets/assets/sounds/wow.m4a": "7c7596389cf71342547a722c186bb43f",
"assets/assets/swipe.json": "a8f9d1a149c0ec5d5b94c04b0b71a82c",
"assets/assets/swipedown.json": "d5e503a298aa7cd67742525287fba148",
"assets/assets/trophy.json": "2439ad7e4c8d35189a7d7083aa42d271",
"assets/assets/up.json": "665bf0703e11e4d05af9de81ef10bd05",
"assets/assets/upload.json": "7537440c9ba67e2fe93c26feff8c9c38",
"assets/assets/wait.json": "9eb192e1dedcf59821fd3cce0bf811d6",
"assets/assets/wallet.json": "ccae5bd7fae4e1668cb29eb2b1d552fd",
"assets/assets/walletsymbol.json": "8b9eab3b1c89d7aa0e6310986c65a1c2",
"assets/assets/world.json": "eb7d9dc38bb2376872f3c5c55d7e0bbf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1abf8499d1fa6b272cb42e26c43bf01b",
"assets/NOTICES": "3e6e28cf0259ceb45214924c1208c99c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4707f3b30abce8ef54ada8ee421e209e",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "96b35579476ce63ed6470f5e5019b5e0",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "72c13165920c2b10b2c0ffe40799c008",
"icons/Icon-512.png": "3dcfba88810cb70ab33d5ba327429ae7",
"icons/Icon-maskable-192.png": "72c13165920c2b10b2c0ffe40799c008",
"icons/Icon-maskable-512.png": "3dcfba88810cb70ab33d5ba327429ae7",
"index.html": "62552bbb89ac952c0f0f601b0b698449",
"/": "62552bbb89ac952c0f0f601b0b698449",
"main.dart.js": "cdee37470373d0c873db2f000cb38692",
"manifest.json": "ec0ee6447af63df5b4c51abafb826daa",
"version.json": "17b37391a2fa84cfc4d7e9e1362c61d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
