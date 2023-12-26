import "./commerce-gallery.html";
import "./commerce-gallery.scss";
/**
 * Pour l'env. Drupal, il faudra importer : import "@stephane888/wbu-atomique/js/swiper/swiper-drupal.js";
 */
import SwiperManager from "@stephane888/wbu-atomique/js/swiper/swiper.js";
const settingsGalleryThumbs = {
  direction: "vertical",
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  // Configurations supplementaire.
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //modules: ["Navigation", "Pagination", "Scrollbar"], //not work
};
/**
 * TOP
 */
const settingsGalleryTops = {
  direction: "horizontal",
  spaceBetween: 1,
  // Configurations supplementaire.
  pagination: {
    el: ".swiper-pagination",
    type: "bullets", //progressbar|fraction|custom
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  effect: "fade", // slide|fade // module non charger => cube|coverflow|creative|flip/cards
  //modules: ["Navigation", "Pagination", "Scrollbar"], //not work
};
// set config in each slider.
document.querySelector(".galleries-main.swiper-full-options").setAttribute("data-swiper", JSON.stringify(settingsGalleryTops));
document.querySelector(".galleries-thumb.swiper-full-options").setAttribute("data-swiper", JSON.stringify(settingsGalleryThumbs));

const galleryThumbs = new SwiperManager();
galleryThumbs.build();
