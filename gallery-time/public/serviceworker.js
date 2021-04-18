// const CACHE_NAME = 'version-1';
// const urlsToCache = ['index.html', 'offline.html'];
// const self = this;

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   )
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//     .then(() => {
//       return fetch(event.request)
//         .catch(() => caches.match('offline.html'))
//     })
//   )
// });

// self.addEventListener('activate', (event) => {
//   const cacheWhitelist = [];
//   cacheWhitelist.push(CACHE_NAME);
//   event.waitUntil(
//     caches.keys().then((cacheNames) => Promise.all(
//       cacheNames.map((cacheName) => {
//         if(!cacheWhitelist.includes(cacheName)) {
//           return caches.delete(cacheName);
//         }
//       })
//     ))
//   )
// });

const cacheName = 'version-1';
const self = this;
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(
    caches.keys().then(cacheName => {
      return Promise.all(
        cacheName.map(cache => {
          if(cache !== cacheName) {
            console.log('Service Worker: clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker: fetching');
  event.respondWith(
    fetch(event.request)
      .then(res => {
        const resClone = res.clone();
        caches
        .open(cacheName)
        .then(cache => {
          cache.put(event.request, resClone);
        });
        return res;
      }).catch(err => caches.match(event.request).then(res => res))
  );
});

