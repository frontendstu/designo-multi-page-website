import './sass/style.scss';

/* =============================================================================
 * HEADER NAVIGATION TOGGLE
 * -----------------------------------------------------------------------------
 *
 * Controls the mobile navigation menu by toggling visibility
 *
 * ========================================================================== */

const nav = document.querySelector(".header-nav");
const toggle = document.querySelector(".header-toggle");

toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.setAttribute("data-visible", String(!isOpen));
});
