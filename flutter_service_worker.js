'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "078f1104dc5a3d9b743afffbd0339c13",
"assets/AssetManifest.json": "85475408f56556fd562d5f954fad4a83",
"assets/assets/404animation.json": "63fa162c44be24d619ee08e1321b092e",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Oxanium-VariableFont_wght.ttf": "de876b23cee7a2993a020e844ac9f0e1",
"assets/assets/harold.json": "02275c43e1d6ceb300afc6af64089e97",
"assets/assets/icons/comment.png": "60223384831843a53b5ca9758819dfb1",
"assets/assets/icons/heart.png": "ccbb4c65bc18a3625cd4277661a03a73",
"assets/assets/icons/star.png": "ddf39bb8a93b0f6fc01d00f46d2ccf0c",
"assets/assets/icons/upload.png": "5dc55d5d6251cbbe1195636af3d14f2b",
"assets/assets/images/backgroundtest.gif": "27aa61d72f25b5eaef8feeb38df8f1cc",
"assets/assets/images/backgroundtest.jpg": "fb4a04a7a5851f4a5a97bb81b0672dc8",
"assets/assets/images/badge_01.png": "141267e059dab9b4cfab4d703e604234",
"assets/assets/images/badge_02.png": "9dc45089e32354fbf2c77f2693cde593",
"assets/assets/images/Games_example.png": "1766bac21efa223de3a7eb9621ecbfc5",
"assets/assets/images/ic_launcher.png": "0cdf7e13894854e491ac585ce851d145",
"assets/assets/images/ic_launcher_background.png": "3bd4aa820f7f7e13d423a130f42b91d3",
"assets/assets/images/ic_launcher_foreground.png": "b161329337cd4b534f42a5f10a6ded89",
"assets/assets/images/ic_launcher_monochrome.png": "b161329337cd4b534f42a5f10a6ded89",
"assets/assets/images/logo_b128.png": "94bf6ecaeed99a9d72d8e6db0b6e32e9",
"assets/assets/images/logo_w128.gif": "236d45e0f6cac356540270f599bcb5a7",
"assets/assets/images/logo_w128.png": "d64f9842d8b0f5e7d44eba62740e2e8b",
"assets/assets/images/logo_w128_blackbackground.png": "6c3e1ebc3650b66a939d431ebf8e00c0",
"assets/assets/images/profiletest.gif": "23cfc9e8af9284557081663344e76793",
"assets/assets/images/profiletest2.gif": "a45ed49be8ea90694c6534359f627d77",
"assets/assets/images/Status_example.png": "2a8b031fa751ba475c8d8846e89a498d",
"assets/assets/images/Wallet_example.jpg": "a8fc23da961337be5916227e6d58c572",
"assets/assets/pepe.json": "749365234e840a05daa654f0f1d1ed84",
"assets/assets/report.json": "b6c8f30195a245c01a13ecb119ee9098",
"assets/assets/sorry.json": "75f0dcf1fb9017e4a7b95b2418b6b8f7",
"assets/assets/swipe.json": "a8f9d1a149c0ec5d5b94c04b0b71a82c",
"assets/assets/wait.json": "9eb192e1dedcf59821fd3cce0bf811d6",
"assets/assets/wallet.json": "ccae5bd7fae4e1668cb29eb2b1d552fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "de6c82928f1daabe67f9f34cf95313b2",
"assets/NOTICES": "81120d776d66121e537d77f663745de9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4707f3b30abce8ef54ada8ee421e209e",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "96b35579476ce63ed6470f5e5019b5e0",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "72c13165920c2b10b2c0ffe40799c008",
"icons/Icon-512.png": "3dcfba88810cb70ab33d5ba327429ae7",
"icons/Icon-maskable-192.png": "72c13165920c2b10b2c0ffe40799c008",
"icons/Icon-maskable-512.png": "3dcfba88810cb70ab33d5ba327429ae7",
"index.html": "0fe27b00a9ec1bbf06d8ba7789a90a0a",
"/": "0fe27b00a9ec1bbf06d8ba7789a90a0a",
"main.dart.js": "240471809a6235ee7e6b57ffaac8fa28",
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
