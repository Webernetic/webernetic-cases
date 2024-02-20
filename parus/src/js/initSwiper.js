import Swiper from 'swiper';
import { FreeMode } from 'swiper/modules';
import { showSlideTitle } from './main'

export const initSwiper = (selector, titles, badge, animationClass) => {
    return new Swiper(selector, {
        modules: [FreeMode],
        direction: "vertical",
        slidesPerView: "auto",
        autoHeight: true,
        freeMode: true,
        on: {
            slideChange: (swiper) => {
                showSlideTitle(swiper.activeIndex, titles, badge, animationClass)
            }
        }
    });
}