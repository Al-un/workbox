import './main.css';

// Check service worker registration
if ('serviceWorker' in navigator) {
  // Use window load even to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
} else {
  console.log('Service Workers are not supported in this browser');
}
