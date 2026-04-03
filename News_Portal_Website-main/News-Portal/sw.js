const CACHE_NAME = 'newsportal-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    // Do not cache the dynamic API endpoint
    if (e.request.url.includes('/.netlify/functions/')) {
        return;
    }
    
    // Serve from static cache, fallback to network
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        }).catch(() => {
            // Optional offline fallback
            if(e.request.destination === 'document') {
                return caches.match('/index.html');
            }
        })
    );
});
