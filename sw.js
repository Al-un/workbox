importScripts("precache-manifest.9c37bce2ac0c8a5a7335d6179e1848a6.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

console.log('Hello from sw.js');

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

/**
 * Configure workbox for this project
 */
const configureWorkbox = () => {
  // Global config?
  workbox.setConfig({
    // Force development build even in production
    debug: true
  });

  // Cache naming
  workbox.core.setCacheNameDetails({
    prefix: 'workbox',
    suffix: 'v1',
    precache: 'precaching',
    runtime: 'running'
  });

  // Log level
  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
};

/**
 * Define cached objects
 */
const setWorkboxCaching = () => {
  // Cache and route
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
};

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  configureWorkbox();
  setWorkboxCaching();
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

