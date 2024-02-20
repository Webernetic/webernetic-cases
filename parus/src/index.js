import './scss/main.scss';

import { items, titlesBefore, titlesAfter } from './constants/constants'
import { debounce, createItem, showSlideTitle } from './js/main'
import { initSwiper } from './js/initSwiper'


document.addEventListener("DOMContentLoaded", () => {

    const listTasks = document.querySelector(".decor-content__list");
    const badgeBefore = document.querySelector(".before-slider__badge");
    const badgeAfter = document.querySelector(".after-slider__badge");

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


    const afterSwiper = initSwiper('.after-swiper', titlesAfter, badgeAfter, 'animate__slideInUp')
    const beforeSwiper = initSwiper('.before-swiper', titlesBefore, badgeBefore, 'animate__slideInUp')

    showSlideTitle(beforeSwiper.activeIndex, titlesBefore, badgeBefore, 'animate__slideInUp');
    showSlideTitle(afterSwiper.activeIndex, titlesAfter, badgeAfter, 'animate__slideInUp');

})
