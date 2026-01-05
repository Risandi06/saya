const CACHE_NAME = "alpha-event-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./bg-body.jpg",
  "./logo.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>res || fetch(e.request))
  );
});
