console.log('Hello, World!');

/**
 * Site header menu toggle
 *
 * Shows and hides the site header menu when the hamburger icon is tapped,
 * users can also tap anywhere on the screen to close the menu. This script
 * also changes the appearance of the hamburger icon to the cross icon when
 * tapped.
 */

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.site-header__menu-toggle');
  const mobileMenu = document.querySelector('.site-header__menu');
  const openIcon = document.querySelector('.site-header__menu-icon-open');
  const closeIcon = document.querySelector('.site-header__menu-icon-close');

  let isMenuOpen = false; // Initialize the menu state

  menuToggle.addEventListener('click', function (event) {
    isMenuOpen = !isMenuOpen;
    updateMenuState();
    event.stopPropagation(); // Stop the click event from propagating
  });

  // Function to update menu state based on the viewport width
  function updateMenuState() {
    if (window.innerWidth < 768) {
      mobileMenu.style.display = isMenuOpen ? 'block' : 'none';
      menuToggle.setAttribute('aria-expanded', isMenuOpen);
      openIcon.style.display = isMenuOpen ? 'none' : 'block';
      closeIcon.style.display = isMenuOpen ? 'block' : 'none';
      document.body.classList.toggle('menu-open', isMenuOpen); // Add or remove the 'menu-open' class
    } else {
      mobileMenu.style.display = 'block'; // Always show the menu for wider viewports
      menuToggle.setAttribute('aria-expanded', true);
      openIcon.style.display = 'none';
      closeIcon.style.display = 'none';
      document.body.classList.remove('menu-open'); // Remove the class for wider viewports
    }
  }

  // Function to close the menu when clicking outside
  function closeMenuOnClickOutside(event) {
    if (
      isMenuOpen &&
      !mobileMenu.contains(event.target) &&
      event.target !== menuToggle
    ) {
      isMenuOpen = false;
      updateMenuState();
    }
  }

  // Initial call to set menu state
  updateMenuState();

  // Add a resize event listener to handle changes in the viewport width
  window.addEventListener('resize', updateMenuState);

  // Add a click event listener to close the menu when clicking outside
  document.addEventListener('click', closeMenuOnClickOutside);
});
