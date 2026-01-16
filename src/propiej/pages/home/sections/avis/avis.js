import "./avis.html";
import "./avis.scss";
// import "@stephane888/wbu-atomique/js/swiper/swiper-drupal.js";
import SwiperManager from "@stephane888/wbu-atomique/js/swiper/swiper.js";

const AvisSwiper = function (context) {
  if (document.querySelector(".swiper-full-options", context)) {
    const sw = new SwiperManager();
    sw.build();
  }
};
AvisSwiper();
