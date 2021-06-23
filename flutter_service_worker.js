'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "794fb82575896cd38a7c27fc3cf3e08c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6cb851355d6bd139dd717ae20c176051",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7094801d417b4aad73479603569d1bd5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1406fb590b7474fc0f9b7beed6837bdb",
".git/logs/refs/heads/master": "1406fb590b7474fc0f9b7beed6837bdb",
".git/logs/refs/remotes/origin/master": "8eef440e41d8c30f8c75a6174c9e3d34",
".git/objects/01/46980724c18a625f456376e5928c3e05225452": "62b2a07f3996304146b62842feaeb16f",
".git/objects/06/c5f9b706b26855306caf5309461d51d242c148": "8341e0a57221f2263909d06a11b3f239",
".git/objects/0a/d1c4c2e300c38251238117917fea8b885d360f": "1268f0437200800c10de5c0070130178",
".git/objects/0e/1454f4c32a91b3d783e785ef6c507d4d8daf2f": "9228bbacaadfdf1466470cc4829239c9",
".git/objects/11/00e82014d5260333b9a654c7bc3147354f2d29": "1d1adc07d50ec39960dca420e4e8b6a2",
".git/objects/12/70d03685bbe43baeb457df118051dc4c30f366": "cbe27bb9af2cf6ccbc46cc8987224cdf",
".git/objects/14/20249193e29d4c00d17a3c2ad4413e07cd9ea7": "cacd899733e782e31108d7190dae3667",
".git/objects/17/c6b756533d240aefff66633bed6bcd7243a53c": "cf55a1d9ccbee373dce1d49bac8d4a49",
".git/objects/1c/7fc0e2c06f2e33add4a0ae8f4abc71c91d32eb": "03d3a13f66de09d0ca49c06daee99f55",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/1e/68eb7ded97dce669e42923ac64a9319c95b517": "8be7e2b12b469d11de9a79bb5495994c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2d/749a6bf4a1919e0eb21113491ac8e97ade556e": "daca72ea03cc1e98bfec85fd61947a03",
".git/objects/33/0e53a5c28a4594cfff421c843e3560ab346714": "3caa5b43108f2c9d83ccbcd4b2bd1645",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/bfbe8a49b3dbbfadf15dcf7b4ded8613a1a86c": "b320d04010ca1107cc3746862fd43ac0",
".git/objects/4a/1283522817ae3c98a780e2949630618c71b9db": "c1df979a65786131c92e2576627c3860",
".git/objects/4b/d7887327501e01e0becf7cec20472df7274eaf": "0b8947e06980e89c6f2759126a1116ee",
".git/objects/4b/e0b9ccb6b950b5d3453695fbfb60bdecc03523": "a408cc22e1ef93175716feaa83869c55",
".git/objects/4e/ef1639b883b804508057769102a26e6a32356b": "508dd172416a5fe7c4b7d68a16f8b603",
".git/objects/53/96edb312df11c22034cd614ad6a22070f8803e": "553e637857a6ebd4deef54b129fdae39",
".git/objects/54/4ddb9bcc195d419a0b50986eef76ed0ede1208": "b896d259d1ac0fb6263075ecbe82aeac",
".git/objects/64/c3ffa77b4bf783edaf5851000b5cdb538dff07": "60c6c9a543fc4b821c4158981e6c47f7",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/74/8e1184ba7e43bfd8346b626a91830fb6ac5485": "2ecd6e06147d0ca141a92eb819f64e5f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8d82f84d5bb79fea15c4b127e39b087dc406c9": "2b6c1994cfe1089a9ca1430f502ed482",
".git/objects/98/ff6ea01a74b131ae5201cbe1d56be7b126f72f": "a2e2a5045648b7b635e7b35489a64a2a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/e8573cea06d91605cdb6e282c40a47ae5141f1": "1503e4671839ed8dc1c4d1f815b4aefb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2c827837a5e60e518322db883949cfae8b6411": "33ac980479393fff541236e1e351f700",
".git/objects/ad/fc80f10aea9586eae856cdd6c90edc226a1afc": "90279ea857049a06b672a82aafb2d573",
".git/objects/af/f6edc1392e28660e3d2074457d5de575682a16": "dc84424ffa1201a386b7c3542f462a8a",
".git/objects/b6/57d461d94caae5f1670b7bab96add4f0100c7b": "1d9fe5d98affd087d71709a06dc3a559",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/4c72406325f231bd55cbb893e9d90e7af68feb": "609fd3b238a95eda3ba7610fe912ba71",
".git/objects/ba/7836efa3b2c12d66096b17b9ce0fc0043ad9c1": "5efc31705cd5eb42e6922e270c7e476b",
".git/objects/cb/3ddd10f4d36b6fd625ff7965cefdf74ccc1f65": "11ded7e49d2d10f27604ac628af47e57",
".git/objects/da/2f781cdf1687355815a7d62c291263e1073635": "6c18a96b23d6c122afc2c2d4d849ac14",
".git/objects/da/405755349784ad4c956593186439bc2ed33089": "9588f6ef103ec249f0b74f88dc6c86d3",
".git/objects/de/73e0e41b1001b0acc269ac26857875ced66611": "cc333c7577af9a9ede4d2e84b2fe9c4d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/ffe2944821dbb11d5145c357d0f763300d0180": "005104e56eed0ecf4f5d7d9258e77ca1",
".git/objects/eb/1116892baad168d82244b6c6b8056b9553efc9": "57ad77a4a36fd3c582915c02c5d32d7a",
".git/objects/eb/3e8961bb371bd8717fffc617ecea2a23456773": "763d03f33fdfd718ed1c898b7a1026bf",
".git/objects/ec/8fa3891acef0cabd2153f4fe86a6e49130f1b0": "812a80712d4be0db7725006756074e92",
".git/objects/ed/41d0a5b516be8a4430b9ccde4fe0535601f0b1": "e5017c89eca761f81c502124f3cf848b",
".git/objects/ed/de422ceb62c50cc7dded3078892e15be086341": "f84852129a1a20284ec30b7c7e6a4dd3",
".git/objects/f0/449d912a01bca45faf7fd0905a4fc115b6e61b": "c8f5526455efb106b4d43b9d54b00cc3",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/6d37633dfc9eb24e6d7d467ddf480a3f4c4ebe": "49ca0fe04a8f0ceb0f9e26bf55a8a6b8",
".git/objects/f7/0b154e0023ffcd6ec8c07829d5839ebe1dc91a": "88e5497a44acd52df231877c68fce3be",
".git/objects/fb/18df7e81447fc2eb6c741ab68fefae338fe7fb": "a070a821fd256a23b0e69a7dd8bd2699",
".git/ORIG_HEAD": "bea26f5f337e50b88c71f818bf9a05fa",
".git/refs/heads/master": "5a6dc725f6f4e40bfb581b298f0ecde8",
".git/refs/remotes/origin/master": "5a6dc725f6f4e40bfb581b298f0ecde8",
"assets/AssetManifest.json": "991a56355198948d5c14735909367202",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "14a8e5674a432350aca6f9977ae044d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/photos/ABSS.jpg": "529929e0abdcc3c66516aed14cda6b34",
"assets/photos/BACAK.jpg": "ffc126bcad6f8b58344a41d916f04d47",
"assets/photos/BACK.jpg": "d10223a165de91047f73bc857bbc0f29",
"assets/photos/bench.jpg": "74fce99b43334728dce28e285bf7cccb",
"assets/photos/dips.jpg": "8de77d90478c871f57a13ed1048659ca",
"assets/photos/dumbell.jpg": "cb9561b317c47e5e41624a9b731ef380",
"assets/photos/FULL.jpg": "3b01fb61cd2ea58f4ad2f5033f3520e0",
"assets/photos/GENEL.jpg": "9c4906f82e3c1c940dc18511db2ee9dc",
"assets/photos/indir.png": "ef61ac07eb60b7ba47f7c7c1756d86a1",
"assets/photos/KOL.jpg": "75b43f8209cb3390c14449cb16e4294f",
"assets/photos/ST%2520KAPAK.jpg": "57f69b55d7654d313688cad8c1d48268",
"assets/photos/XX.jpg": "7f7d4b730ae5d34f63985f6075ff9a0a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "801e629e51d8ef89460cea7167deb15a",
"/": "801e629e51d8ef89460cea7167deb15a",
"main.dart.js": "51e144e1ad8df97b8ba5f1862f043587",
"manifest.json": "124989bf81446713db870a9669a22673",
"version.json": "14bcaa93c1a856869b0af1d8275665c5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
