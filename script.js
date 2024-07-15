const drop = document.querySelector("#dropbtn");
const visiblecontent = document.querySelector(".visible");

const dropl = document.querySelector(".visible");
const dropl2 = document.querySelector(".visible2");

drop.addEventListener("mouseover", () => {
  visiblecontent.classList.add("active");
});

dropl.addEventListener("mouseleave", () => {
  visiblecontent.classList.remove("active");
});

const drop2 = document.querySelector("#dropen");
const visiblecontent2 = document.querySelector(".visible2");

drop2.addEventListener("mouseover", () => {
  visiblecontent2.classList.add("active");
});

dropl2.addEventListener("mouseleave", () => {
  visiblecontent2.classList.remove("active");
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar ul");
const cross = document.querySelector(".cross");

burger.addEventListener("click", () => {
  nav.classList.add("active");
  cross.classList.add("active");
})

cross.addEventListener("click", () => {
  nav.classList.remove("active");
  cross.classList.remove("active");
})




//SWIPER
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 3000, // Set transition speed to 600ms for smooth transitions
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },

    500: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});
