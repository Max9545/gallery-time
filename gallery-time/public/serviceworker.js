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

