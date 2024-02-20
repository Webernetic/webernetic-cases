import './scss/main.scss';

import { items, titles } from './constants/constants'
import { debounce, createItem, showSlideTitle } from './js/main'


import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';

document.addEventListener("DOMContentLoaded", () => {

    const listTasks = document.querySelector(".decor-content__list");
    const badgeSlide = document.querySelector(".before-slider__badge");

    let isMobileView = window.innerWidth < 768;


    window.addEventListener('resize', debounce((e) => {
        const windowWidth = e.target.innerWidth;
        const newIsMobileView = windowWidth < 768;

        if (newIsMobileView !== isMobileView) {
            isMobileView = newIsMobileView;
            listTasks.innerHTML = '';

            if (isMobileView) {
                listTasks.insertAdjacentHTML('beforeend', createItem(items[1]))
                listTasks.insertAdjacentHTML('beforeend', createItem(items[2]))
            } else {
                listTasks.insertAdjacentHTML('beforeend', createItem(items[0]))
            }
        }
    }));

    const swiper = new Swiper('.swiper', {

        modules: [FreeMode],
        direction: "vertical",
        slidesPerView: "auto",
        autoHeight: true,
        freeMode: true,

        on: {
            slideChange: (swiper) => {
                showSlideTitle(swiper.activeIndex, titles, badgeSlide, 'animate__slideInUp')
            }
        }
    });

    showSlideTitle(swiper.activeIndex, titles, badgeSlide, 'animate__slideInUp')

})
