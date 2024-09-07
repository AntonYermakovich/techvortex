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

menuIcon.addEventListener("click", menuOpenHandler);

function menuOpenHandler() {
  if (this.classList.contains("header__icon_active")) {
    this.classList.remove("header__icon_active");
    headerLogo.classList.remove("header__logo_light");
    headerMenu.classList.remove("menu_show");
  } else {
    this.classList.add("header__icon_active");
    headerLogo.classList.add("header__logo_light");
    headerMenu.classList.add("menu_show");
  }
}

// mask for number
const phone = document.getElementById("phone");
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
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ])
  .addField("#phone", [
    {
      rule: "required",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ]);

document.querySelector("#form").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (validator.isValid && mask.masked.isComplete) {
    const formData = {
        name:e.target.name.value,
        phone:e.target.phone.value,
        email:e.target.email.value 
    }

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
  } else {
    Swal.fire({
      title: "Ваше сообщение не отправлено!",
      text: "Пожалуйста заполните все поля правильно!",
      icon: "error",
    });
  }
});

AOS.init({
    offset: 120,
    once: true
});