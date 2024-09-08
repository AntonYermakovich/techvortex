// Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#thumbnail-carousel", {
    perPage: 4,
    gap: 20,
    rewind: true,
    pagination: false,
    arrows: false,
    padding: "30px",

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
const menuIcon = document.querySelector(".header__icon");
const headerLogo = document.querySelector(".header__logo");
const headerMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");

menuIcon.addEventListener("click", menuOpenHandler);
menuLinks.forEach((link) => link.addEventListener("click", scrollToSection));

function scrollToSection() {
  menuIcon.classList.remove("header__icon_active");
  headerLogo.classList.remove("header__logo_light");
  headerMenu.classList.remove("menu_show");
  document.body.classList.remove("hidden");
}

function menuOpenHandler() {
  if (this.classList.contains("header__icon_active")) {
    this.classList.remove("header__icon_active");
    headerLogo.classList.remove("header__logo_light");
    headerMenu.classList.remove("menu_show");
    document.body.classList.remove("hidden");
  } else {
    this.classList.add("header__icon_active");
    headerLogo.classList.add("header__logo_light");
    headerMenu.classList.add("menu_show");
    document.body.classList.add("hidden");
  }
}

// mask for number
const phone = document.getElementById("phone");
// const maskOptions = {
//   mask: "+{7}(000) 000-00-00",
//   lazy: true,
// };
const maskOptions = {
  mask: "+{7}(000) 000-00-00",
  lazy: true,
};
const mask = IMask(phone, maskOptions);

// validate form
const validator = new JustValidate("#form");
validator
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Имя обязательно для заполнения",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимальная длина имени 2 символа",
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
      errorMessage: "Введите ваш номер телефона",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Введите ваш e-mail",
    },
    {
      rule: "email",
      errorMessage: "Это не e-mail",
    },
  ]);

document.querySelector("#form").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (validator.isValid && mask.masked.isComplete) {
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };

    await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    Swal.fire({
      title: "Ваше сообщение отправлено!",
      text: "Наши специалисты скоро с вами свяжутся!",
      icon: "success",
    });
    e.target.reset();
  }
});

AOS.init({
  offset: 120,
  once: true,
});
