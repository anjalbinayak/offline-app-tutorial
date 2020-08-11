console.log("Service Worket Registered");
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offlineAppDemo').then(function(cache){
            
            return cache.addAll([
               '/',
              '/index.html',
              '/styles/style.css',
              '/scripts/app.js',
              '/img/offline.png',
              '/img/online.png'

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