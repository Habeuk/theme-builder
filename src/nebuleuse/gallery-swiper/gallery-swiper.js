import { getScript } from 'jquery';
import './gallery-swiper.html'
import './gallery-swiper.scss'
import Swiper, { Autoplay, Controller } from 'swiper';

// autoplay: {
//     delay: 5000,
//     disableOnInteraction: false
// },
const swiper = new Swiper(".swiper", {
    modules: [Autoplay, Controller],
    speed: 500,
})

const swiper2 = new Swiper(".slider-thumb", {
    modules: [Autoplay, Controller],
    speed: 500,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
})
swiper.controller.control = swiper2
swiper2.controller.control = swiper
// swiper.on('slideChange', function () {
//     console.log('slide changed');
// });

// getScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', () => {
//     const swiper = new Swiper('.swiper', {
//         modules: [Pagination, Navigation, Autoplay, Zoom],
//         slidesPerView: 1,
//         speed: 500,
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//             dynamicBullets: true
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         autoplay: {
//             delay: 5000,
//             disableOnInteraction: false
//         },
//         zoom: true,
//     })
// })
