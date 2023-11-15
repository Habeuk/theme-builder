import { getScript } from 'jquery';
import './gallery-swiper.html'
import './gallery-swiper.scss'
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    speed: 400
})
swiper.on('slideChange', function () {
    console.log('slide changed');
});
// getScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', () => {
//     const swiper = new Swiper('.swiper')
// })