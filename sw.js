importScripts("precache-manifest.e28e36af6d4ada8431b528149c53623c.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

console.log('Hello from sw.js');

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

function settingUpWorkbox() {
  const cacheFromWebpackPlugin = self.__precacheManifest || [];
  const manualCache = ['/workbox/index.html', '/workbox/favicon.ico'];
  workbox.precaching.precacheAndRoute(
    manualCache.concat(cacheFromWebpackPlugin)
  );
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  settingUpWorkbox();
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

