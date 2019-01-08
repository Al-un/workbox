// Pictures
import './img/miku.png';
import './img/luka.png';
import './img/miku-chibi-by-chipmunkintheblender-512.png';
import './img/miku-chibi-by-chipmunkintheblender-192.png';
// Styles
import './main.scss';
// Dependent HTML pages
import './pages/home.html';
import './pages/about.html';
import './pages/vocaloid/miku.md';
import './pages/vocaloid/luka.md';
// Dependencies
import { onHashChange, loadDefaultPage } from './utils/pageLoader';
import { toggleMenu } from './utils/bulma';

// Check service worker registration
if ('serviceWorker' in navigator) {
  // Use window load even to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
} else {
  console.log('Service Workers are not supported in this browser');
}

// Re-export Bulma stuff
export { toggleMenu };

// pseudo routing
window.onhashchange = onHashChange;
loadDefaultPage();
