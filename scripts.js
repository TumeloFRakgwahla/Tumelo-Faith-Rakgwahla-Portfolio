document.addEventListener('DOMContentLoaded', function () {

// Side menu toggle
var sidemeu = document.getElementById("sidemeun");

window.openmenu = function () {
    sidemeu.style.right = "0";
    document.body.style.overflow = "hidden";
}

window.closemenu = function () {
    sidemeu.style.right = "-320px";
    document.body.style.overflow ="auto";
}

document.addEventListener("click", function(event) {
    if (event.target.closest(".fa-bars") === null && event.target !== sidemeu) {
        sidemeu.style.right = "-320px";
        document.body.style.overflow ="auto";
    }
});

// Object to store the current index for each slideshow container
const slideIndices = {};

function showSlide(containerId, index) {
  const container = document.getElementById(containerId);
  const slides = container.querySelectorAll(".slide");

  // Ensure index wraps correctly
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  // Store the current index
  slideIndices[containerId] = index;

  // Show only the current slide
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// This function will be triggered by arrows
window.changeSlide = function(n, containerId) {
  const current = slideIndices[containerId] ?? 0;
  showSlide(containerId, current + n);
}

// Initialize all slideshows on page load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow-container").forEach(container => {
    const id = container.id;
    slideIndices[id] = 0;
    showSlide(id, 0);
  });
});

});
