importScripts("precache-manifest.d1b1ae9d50cdcb7fef281df4071f1b93.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

