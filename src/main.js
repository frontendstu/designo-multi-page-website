import './sass/style.scss';

/* =============================================================================
 * Designo Multi-Page Website Frontend Mentor Challenge
 *
 * Author: Stu Cowley (@frontendstu)
 * Date: 03-10-2025
 * Challenge URL:
 * https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT
 *
 * Description:
 * This file contains the scripts for this challenge.
 * ========================================================================== */

/**
 * Utility Functions
 * -------------------------------------------------------------------------- */

// ----- Toggle Attribute
function toggleAttribute(element, attribute, addClass, removeClass) {
    if (element.hasAttribute(attribute)) {
        element.removeAttribute(attribute);
        addClass && addClass.forEach((cls) => element.classList.remove(cls));
    } else {
        element.setAttribute(attribute, '');
        removeClass && removeClass.forEach((cls) => element.classList.add(cls));
    }
}

/**
 * DOMContentLoaded Initialisation
 * -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const headerMenuToggle = document.querySelector('.header-toggle');
    const headerMenuNav = document.querySelector('.header-menu');
    const menuLinks = document.querySelectorAll('.header-menu a');
    const body = document.body;

    // Header Menu Toggle
    header.addEventListener('click', () => {
        const isExpanded =
            headerMenuToggle.getAttribute('aria-expanded') === 'true';
        headerMenuToggle.setAttribute('aria-expanded', !isExpanded);

        // Toggle the visibility of the menu
        toggleAttribute(headerMenuNav, 'data-visible', [], []);

        // Prevent scrolling by toggling the no-scroll class on the body
        body.classList.toggle(
            'no-scroll',
            headerMenuNav.hasAttribute('data-visible')
        );
    });

    // Close menu when clicking anywhere on the menu
    headerMenuNav.addEventListener('click', () => {
        headerMenuNav.removeAttribute('data-visible');
        headerMenuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('no-scroll');
    });

    // Close menu on link click
    menuLinks.forEach((link) =>
        link.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent menu close for link clicks
            headerMenuNav.removeAttribute('data-visible');
            headerMenuToggle.setAttribute('aria-expanded', 'false');
            body.classList.remove('no-scroll');
        })
    );
});
