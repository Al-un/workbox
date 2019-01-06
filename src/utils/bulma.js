/**
 * Bulma specific stuff
 */
const CSS_ACTIVE_MENU = 'is-active';

/**
 * When on mobile view, toggle menu content
 */
export const toggleMenu = () => {
  document
    // toggle menu content AND menu toggler burger
    .querySelectorAll('.navbar > .container > .navbar-menu, .navbar-burger')
    .forEach(node => {
      node.classList.toggle(CSS_ACTIVE_MENU);
    });
};
