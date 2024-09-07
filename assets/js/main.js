// Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    perPage: 4,
    gap: 20,
    rewind: true,
    pagination: false,
    arrows: false,
    padding: '30px',

    breakpoints: {
      1400: {
        perPage: 3,
      },
      1200: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();
});

// Burger
const menuIcon = document.querySelector('.header__icon');
const headerLogo = document.querySelector('.header__logo');
const headerMenu = document.querySelector('.menu');

menuIcon.addEventListener('click', menuOpenHandler)

function menuOpenHandler () {
  if(this.classList.contains('header__icon_active')) {
    this.classList.remove('header__icon_active')
    headerLogo.classList.remove('header__logo_light')
    headerMenu.classList.remove('menu_show')
  } else {
    this.classList.add('header__icon_active')
    headerLogo.classList.add('header__logo_light')
    headerMenu.classList.add('menu_show')
  }
}
