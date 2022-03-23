'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "43e40aaf39106de9ae1ae998fb2caa10",
"assets/assets/bottle.jpg": "11f842aac0f37ab6aadecf58e6b86715",
"assets/assets/calender.png": "7d0bf8492179979ff785e66bbffef679",
"assets/assets/doko%2520logo.png": "d1bf32c5eab8347e564e572b41ab6cad",
"assets/assets/garbage/candywrapper.jpg": "3956eca0b7f15451927068db0b0f1e24",
"assets/assets/garbage/ceramicdish.png": "f6f5125908d0d6766f25243b05c2269f",
"assets/assets/garbage/clingwrap.jpg": "7e6147a21f4f54cfc0cdc0508a7d654d",
"assets/assets/garbage/glasspiece.jpg": "e863f98ac624afe0f6091da1be01b5c8",
"assets/assets/garbage/plasticbags.jpg": "951238bf4a388e3ded2bb05e379b88d9",
"assets/assets/garbage/plasticbox.jpg": "8b5d9e92ec1961ca90fa46dbbba5948f",
"assets/assets/garbage/plasticutensils.jpeg": "cf6b891654466daf8c612d552958707c",
"assets/assets/garbage/styrofoam.jpg": "b57576ba75b2ace26b03207ea148d153",
"assets/assets/helpline.png": "c9d4ba3c6ed5cf830e3bac4a32915c71",
"assets/assets/hotel.jpg": "1962be119389cd198b333110b7716a3d",
"assets/assets/house.jpg": "6b50c8fc007bc82cc3deea297a17b2d4",
"assets/assets/khalisisi_logo.jpg": "2ddd572c23cdff5fb20f7b62283a604b",
"assets/assets/milkbottle.jpg": "c926166476fec2fdec0c0a25dea1b4da",
"assets/assets/notification.png": "e2c9476fadc7799a2e3ff29f82c9994c",
"assets/assets/organicwaste/balloons.jpg": "61209478e038f81c39f855b2165c39f0",
"assets/assets/organicwaste/coffeefilter.jpg": "9edf721daa93e8721fa623a97c631005",
"assets/assets/organicwaste/deadplants.jpg": "1640e09aca42aa17f66215acd942cced",
"assets/assets/organicwaste/foodwaste.jpg": "c7d8c1974c69646a1d0a00f5b1336cb0",
"assets/assets/organicwaste/gloves.png": "7131862b1b137f20f7fef9c91c1d5bc6",
"assets/assets/organicwaste/napkin.jpg": "e623b249ccdcf7a134e55ae4ffca45d3",
"assets/assets/organicwaste/napkin.png": "23e86f19a528f2a5f83a30e12ef314a5",
"assets/assets/person.jpg": "5ea261babcf6161d89afe63a31ee863e",
"assets/assets/plastic.jpg": "a6a1e641f41e8324df53e07fb02d7f8a",
"assets/assets/profile.png": "9051695e9c4bee3830c9103e8bad1f8f",
"assets/assets/recyclingwaste/container/Aluminium.jpg": "c6c8dc850729182cf85f2f8bb1d06836",
"assets/assets/recyclingwaste/container/cuplid.png": "3c1df2f25dbea08974afd56f99c4fffe",
"assets/assets/recyclingwaste/container/Glass.jpg": "5e49c2f9b9458f370fb38f4ae1741986",
"assets/assets/recyclingwaste/container/Metal.JPG": "763a624fe7d006d66ef244ca2421789b",
"assets/assets/recyclingwaste/container/milkcarton.png": "cf5a51bbb79dccf6dd5c578e6efb0cbb",
"assets/assets/recyclingwaste/container/plastics.png": "45a80aa9c4c7582dd306daad7e9ac75b",
"assets/assets/recyclingwaste/paper/books.jfif": "91f6910198543786528563b28bdd1cff",
"assets/assets/recyclingwaste/paper/Cardboard.JPG": "8f75b20acc5d4e2131f050670238bcfa",
"assets/assets/recyclingwaste/paper/eggcarton.png": "af572d741014059998a9a66fc6e61449",
"assets/assets/recyclingwaste/paper/envelope.png": "e49b5d14817f728fd1a03c6031a8f0e6",
"assets/assets/recyclingwaste/paper/Magazine.jpg": "a61926a92e7388e6d2ccb46ba87d274a",
"assets/assets/recyclingwaste/paper/newspaper.png": "2aa318611fd39f596af1e91844447936",
"assets/assets/report1.png": "81e871fd7a29df99ca312722b026fa72",
"assets/assets/resue.jpg": "ca950dd907183c1cdb803dae7b4553ba",
"assets/assets/reward.png": "1dc093fde7caf4ea02246066f2a0618a",
"assets/assets/Smartbin.png": "4aa429673dda3502eef95cf5e1a1adee",
"assets/assets/smart_dhobi_logo.jpg": "8ee60c3a4aa3af9aeb24e244576e8b29",
"assets/assets/tips.PNG": "3cafdb816cb26e2973baa3ca8fa7f334",
"assets/FontManifest.json": "b0301359c158d164cf8ff88d1092161a",
"assets/fonts/JosefinSans-Regular.ttf": "6762afeccd02d16a80409b78fb85251c",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Solway-Regular.ttf": "0314833123d831ab7fea21d772112343",
"assets/NOTICES": "d3240bdbdbbe2e8aa63527f8976bbdfb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e4db7ef93e293ad04e10bcf72ea72d62",
"/": "e4db7ef93e293ad04e10bcf72ea72d62",
"main.dart.js": "ced67b7b59f1136565ce5e8dedfb17c9",
"manifest.json": "0381d10d3e2011fbb67b1527e81b257c",
"version.json": "37daf6dd64ff6554378d2aafae9c21bf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
