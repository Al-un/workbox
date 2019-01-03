// Check service worker registration
if ('serviceWorker' in navigator) {
  // Use window load even to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}
