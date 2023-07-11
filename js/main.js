const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const swiper1 = new Swiper(".feedback__slider", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".certificates__slider", {
  spaceBetween: 20,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    400: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = document.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon__text");
    accordeonTitle.classList.toggle("accordeon__title--active");
    currentText.classList.toggle("accordeon__text--visible");

    if (currentText.classList.contains("accordeon__text--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
