import './scss/main.scss';

import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';

document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper('.swiper', {
        modules: [Scrollbar],

        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        mousewheel: true,
    });

})
