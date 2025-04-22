 // Contact form message
document.addEventListener('DOMContentLoaded', function () {
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
}

// Side menu toggle
var sidemeu = document.getElementById("sidemeun");

window.openmenu = function () {
    sidemeu.style.right = "0";
}

window.closemenu = function () {
    sidemeu.style.right = "-320px";
}

document.addEventListener("click", function(event) {
    if (event.target.closest(".fa-bars") === null && event.target !== sidemeu) {
        sidemeu.style.right = "-320px";
    }
});

// Slideshow logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

window.changeSlide = function(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

// Initialize slideshow
if (slides.length > 0) {
    showSlide(currentSlide);
}
});
