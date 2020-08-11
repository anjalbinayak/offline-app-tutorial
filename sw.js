console.log("Service Worket Registered");
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offlineAppDemo').then(function(cache){
            
            return cache.addAll([
               '/offline-app-tutorial/',
              '/offline-app-tutorial/index.html',
              '/offline-app-tutorial/styles/style.css',
              '/offline-app-tutorial/scripts/app.js',
              '/offline-app-tutorial/img/offline.png',
              '/offline-app-tutorial/img/online.png'

            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            return response || fetch(event.request);
        })
    )
});