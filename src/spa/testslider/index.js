import "./index.html";
import "./index.scss";

/**
 * Pour l'env. Drupal, il faudra importer : import "@stephane888/wbu-atomique/js/swiper/swiper-drupal.js";
 */
import SwiperManager from "@stephane888/wbu-atomique/js/swiper/swiper.js";
const currentProd = {
  direction: "horizontal",
  effect: "slide",
  speed: 500,
  spaceBetween: 10,
  loop: false,
  zoom: false,
  pagination: false,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", enabled: 1 },
  parallax: false,
  autoplay: {
    delay: 80000,
  },
  centeredSlides: 0,
  freeMode: {
    enabled: false,
  },
  slidesPerView: 5,
  breakpoints: {
    576: {
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
    769: {
      centeredSlides: 0,
      slidesPerView: "5",
      spaceBetween: 0,
    },
    992: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: 1,
      },
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
    1201: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: 1,
      },
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
    1601: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: 1,
      },
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
  },
  grabCursor: 0,
};
/**
 * TOP
 */
const settingsGalleryTops = {
  direction: "horizontal",
  effect: "coverflow",
  speed: 5000,
  spaceBetween: 10,
  loop: true,
  pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, enabled: 1 },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", enabled: 1 },
  parallax: false, // https://swiperjs.com/swiper-api#parallax
  freeMode: {
    enabled: true,
    minimumVelocity: 0.2,
    momentum: true,
    momentumBounce: true,
    momentumBounceRatio: 1,
    momentumRatio: 1,
    momentumVelocityRatio: 1,
    sticky: 1,
  },
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    waitForTransition: true,
    stopOnLastSlide: false,
  },
  centeredSlides: 0,
  slidesPerView: 4,
  grabCursor: 0,
  // test responsive
  breakpoints: {
    576: {
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
    769: {
      centeredSlides: 0,
      slidesPerView: "5",
      spaceBetween: 0,
    },
    992: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: 1,
      },
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
    1201: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: 1,
      },
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
    1601: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: 1,
      },
      centeredSlides: 0,
      slidesPerView: "6",
      spaceBetween: 0,
    },
  },
};
document.querySelector(".testslider.swiper-full-options").setAttribute("data-swiper", JSON.stringify(currentProd));

const galleryThumbs = new SwiperManager();
galleryThumbs.build();
