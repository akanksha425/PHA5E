/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for hero content
    const heroContent = document.querySelector(".hero-content");
    heroContent.classList.add("fade-in");

    // Mouse movement effect on hero images
    const images = document.querySelectorAll(".image-wrapper");

    images.forEach(image => {
        image.addEventListener("mousemove", (e) => {
            const { offsetX, offsetY } = e;
            const { offsetWidth, offsetHeight } = image;

            const moveX = (offsetX / offsetWidth - 0.5) * 15;
            const moveY = (offsetY / offsetHeight - 0.5) * 15;

            image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "translate(0, 0) scale(1)";
        });
    });

    // Hover effect for hero section navigation links
    const heroLinks = document.querySelectorAll(".hero-links a");

    heroLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff4081";
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "white";
            link.style.transform = "scale(1)";
        });
    });
});
