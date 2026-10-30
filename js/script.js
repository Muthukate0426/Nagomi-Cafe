
/* =========================================
   Nagomi Café - JavaScript
   ========================================= */

// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    // Open and close the mobile menu
    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close the menu after selecting a link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });

    });

}
