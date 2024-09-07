// Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    perPage: 4,
    gap: 20,
    rewind: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      1400: {
        perPage: 3,
      },
    },
  }).mount();
});
