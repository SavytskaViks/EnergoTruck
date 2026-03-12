const swiper = new Swiper('.brands-slider', {
  slidesPerView: 5,
  spaceBetween: 40,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

const burgerButton = document.querySelector('.burger-button');
const headerNav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('is-open');
  headerNav.classList.toggle('is-open');
});

/* закривати меню при скролі */

window.addEventListener('scroll', () => {
  if (headerNav.classList.contains('is-open')) {
    burgerButton.classList.remove('is-open');
    headerNav.classList.remove('is-open');
  }
});
