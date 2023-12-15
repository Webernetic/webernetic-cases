import './index.pug';
import './index.scss';


document.addEventListener("DOMContentLoaded", () => {
    const animationParams = {
        tackImgs: document.querySelectorAll(".task__img"),
        phoneImg: document.querySelectorAll(".problem__phone"),
        options: {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        },
        callback: (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const addAnimtarget = entry.target;

                    addAnimtarget.classList.add('animation');

                    observer.unobserve(addAnimtarget)
                }
            });
        },
        delayVisible: (elements, delay = 300) => {
            elements.forEach((icon, i) => setTimeout(() => observer.observe(icon), delay * (i + 1)))
        },
    }

    const observer = new IntersectionObserver(animationParams.callback, animationParams.options);

    animationParams.delayVisible(animationParams.phoneImg);
    animationParams.delayVisible(animationParams.tackImgs);
})