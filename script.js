/* =========================================
   FAIZ SERVICES - SCRIPT.JS
========================================= */

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Sticky Header

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
/* =========================================
   HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");

    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

    // پہلی Slide دکھائیں
    showSlide(0);

    // ہر 5 سیکنڈ بعد Slide تبدیل کریں
    setInterval(nextSlide, 5000);

    }
