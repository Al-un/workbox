console.log('Hello from sw.js');

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

function settingUpWorkbox() {
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  settingUpWorkbox();
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
