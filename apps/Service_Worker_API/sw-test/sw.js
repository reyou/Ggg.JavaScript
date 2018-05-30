//=============================================================================
//see the Updating your service worker section later on.
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Updating_your_service_worker
//=============================================================================
const version = "v2";
console.log("Service_Worker_API-sw-test-sw.js started.");
console.log("Version: " + version);
//=============================================================================
self.addEventListener('install', function (event) {
  // https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil
  event.waitUntil(
    // https://developer.mozilla.org/en-US/docs/Web/API/Cache
    // https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open
    caches.open(version).then(function (cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
//=============================================================================
/*There is also an activate event. The point where this event fires is generally 
a good time to clean up old caches and other things associated with the previous 
version of your service worker. */
self.addEventListener('activate', function (event) {
  console.log("self.addEventListener.activate");
  var cacheWhitelist = [version];
  event.waitUntil(
    caches.keys().then(function (keyList) {
      console.log("self.addEventListener.activate.keyList:");
      console.log(keyList);
      const keyListPromise = keyList.map(function (key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      });
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
      /*The Promise.all(iterable) method returns a single Promise that resolves when all 
      of the promises in the iterable argument have resolved or when the iterable argument contains no 
      promises. It rejects with the reason of the first promise that rejects. */
      return Promise.all(keyListPromise);
    })
  );
});
//=============================================================================
let intervalCounter = 0;
let fetchInterval = setInterval(function () {
  let fetchThen = function (res) {
    console.log("fetchInterval:", intervalCounter, res);
    intervalCounter++;
    if (intervalCounter >= 3) {
      clearInterval(fetchInterval);
      console.log("fetchInterval:", "finished.");
    }
  }
  let fetchCatch = function (err) {
    console.log("fetchInterval.err:", err);
  }
  let url = "/sw-test/image-list.js";
  fetch(url).then(fetchThen).catch(fetchCatch);
}, 5000);

//=============================================================================
/*Now you’ve got your site assets cached, you need to tell service workers to 
do something with the cached content. This is easily done with the fetch event.*/
self.addEventListener('fetch', function (event) {
  console.log("self.addEventListener.fetch");
  /*You can attach a fetch event listener to the service worker, then call the 
  respondWith() method on the event to hijack our HTTP responses and update 
  them with your own magic. */
  // https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/match
  let cachePromise = caches.match(event.request)
    .then(function (response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        return fetch(event.request)
          .then(function (response) {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();
            caches.open(version)
              .then(function (cache) {
                // cache.put() is used to add the resource to the cache. 
                cache.put(event.request, responseClone);
              });
            return response;
          })
          .catch(function () {
            return caches.match('/sw-test/gallery/myLittleVader.jpg');
          });
      }
    });
  event.respondWith(cachePromise);
});
//=============================================================================