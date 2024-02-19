import './scss/main.scss';

import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';

document.addEventListener("DOMContentLoaded", () => {

    const badgeSlide = document.querySelector(".before-slider__badge");
    const titles = [
        "На первом блоке отсутствует CTA (кнопка призыва к действию)",
        "В текстовом блоке обрывается фраза",
        "Много пустого пространства",
        "Текст не читается на фоне фотографии",
        "Однотипные пункты со схожим оформлением текста",
        "Использованы разные по стилистике иконки",
    ]

    const actionClasses = (keys, add) => {
        const method =
            add === undefined ? 'toggle' : add ? 'add' : 'remove';

        const keysArray = Array.isArray(keys) ? keys : [keys];

        keysArray.forEach((key) => {
            const { element, toggleClass } = key;

            if (element && toggleClass) {
                element.classList[method](toggleClass);
            }
        });
    };

    const showSlideTitle = (index, titles, badge) => {
        if (!(badge && index !== undefined && titles.length > 0)) return

        const { firstChild, lastChild } = badge;

        if (titles[index]) {
            firstChild.textContent = index + 1;
            lastChild.textContent = titles[index];

            actionClasses([
                {
                    element: firstChild,
                    toggleClass: 'animate__slideInUp'
                },
                {
                    element: lastChild,
                    toggleClass: 'animate__slideInUp'
                }
            ], true)

        }
        document.addEventListener('animationend', () => {
            actionClasses([
                {
                    element: firstChild,
                    toggleClass: 'animate__slideInUp'
                },
                {
                    element: lastChild,
                    toggleClass: 'animate__slideInUp'
                }
            ], false)
        });

    }

    const swiper = new Swiper('.swiper', {

        modules: [FreeMode],
        direction: "vertical",
        slidesPerView: "auto",
        autoHeight: true,
        freeMode: true,

        on: {
            slideChange: (swiper) => {
                showSlideTitle(swiper.activeIndex, titles, badgeSlide)
            }
        }
    });

    showSlideTitle(swiper.activeIndex, titles, badgeSlide)

})
