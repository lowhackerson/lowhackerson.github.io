// Responsive Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Initialize Animations (using AOS Library for Example)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        offset: 200,
    });
});
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000, // Animation duration (in milliseconds)
        easing: "ease-in-out", // Easing style
        once: true, // Whether animation should happen only once
        offset: 120, // Offset in pixels for triggering animation
    });
});
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});


