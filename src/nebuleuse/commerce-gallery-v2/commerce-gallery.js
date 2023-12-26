import "./commerce-gallery.html";
import "./commerce-gallery.scss";
/**
 * Pour l'env Drupal, il faudra importer : import "@stephane888/wbu-atomique/js/swiper/swiper-drupal.js";
 */
import SwiperManager from "@stephane888/wbu-atomique/js/swiper/swiper.js";
const settingsGalleryThumbs = {
  centeredSlides: true,
  centeredSlidesBounds: true,
  direction: "horizontal",
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  watchOverflow: true,
  breakpoints: {
    480: {
      direction: "vertical",
      slidesPerView: 3,
    },
  },
  // spaceBetween: 10,
  // slidesPerView: 3,
  // freeMode: true,
  // watchSlidesProgress: true,
};
/**
 * TOP
 */
const settingsGalleryTops = {
  direction: "horizontal",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
  keyboard: {
    enabled: true,
  },
  // spaceBetween: 10,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
};
// set config in each slider.
document.querySelector(".gallery-top.swiper-full-options").setAttribute("data-swiper", JSON.stringify(settingsGalleryTops));
document.querySelector(".gallery-thumbs.swiper-full-options").setAttribute("data-swiper", JSON.stringify(settingsGalleryThumbs));

const galleryThumbs = new SwiperManager();
galleryThumbs.build();

//

// galleryTop.on("slideChangeTransitionStart", function () {
//   galleryThumbs.slideTo(galleryTop.activeIndex);
// });
// galleryThumbs.on("transitionStart", function () {
//   galleryTop.slideTo(galleryThumbs.activeIndex);
// });

function test() {
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    direction: "horizontal",
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    breakpoints: {
      480: {
        direction: "vertical",
        slidesPerView: 3,
      },
    },
  });
  var galleryTop = new Swiper(".gallery-top", {
    direction: "horizontal",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
  galleryTop.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
  galleryThumbs.on("transitionStart", function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
}
