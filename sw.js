console.log('Hello from sw.js');

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

function settingUpWorkbox() {
  // Cache JavaScript files
  workbox.routing.registerRoute(
    new RegExp('.*.js'),
    workbox.strategies.networkFirst({
        cacheName: 'workbox/cache-js'
    })
  );

  // Cache CSS files
  workbox.routing.registerRoute(
    /.*\.css/,
    // Cached but updated in background ASAP
    workbox.strategies.staleWhileRevalidate({
      // custom cache name
      cacheName: 'workbox/cache-css'
    })
  );

  // Cache pictures
  workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // custom name
      cacheName: 'workbox/cache-image',
      plugins: [
        new workbox.expiration.Plugin({
          // max cache count
          maxEntries: 20,
          // cache for a week
          maxAgeSeconds: 7 * 24 * 60 * 60
        })
      ]
    })
  );
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  settingUpWorkbox();
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
