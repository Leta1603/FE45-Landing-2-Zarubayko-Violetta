const burgerMenu = document.querySelector(".burger-menu");
if (burgerMenu) {
  const nav = document.querySelector(".nav");
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    burgerMenu.classList.toggle("_active");
    nav.classList.toggle("_active");
  });
}

new Swiper(".swiper", {
  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Буллеты
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //Свайп
  simulateTouch: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper",
  },

  autoHeight: true,

  initialSlide: 1,

  loop: true,

  speed: 800,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },
});
