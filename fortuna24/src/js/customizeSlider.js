const getActiveSlide = () => document.querySelector('.swiper-slide-active');

const updateSlideNumber = () => {
  const currentNumber = getActiveSlide().getAttribute('aria-label')[0];
  const currentNumberElement = document.querySelector(
    '.swiper-currentSlide-number',
  );

  currentNumberElement.innerHTML = currentNumber;
};

const updateCountOfSlides = () => {
  const slides = document.querySelectorAll('.swiper-slide');
  const countOfSlides = slides.length;

  const countSlidesElement = document.querySelector('.swiper-count-slides');
  countSlidesElement.innerHTML = countOfSlides;
};

document.addEventListener('DOMContentLoaded', () => {
  updateSlideNumber();
  updateCountOfSlides();

  const btnPrev = document.querySelector('.swiper-button-prev');
  const btnNext = document.querySelector('.swiper-button-next');

  updateCountOfSlides();

  btnPrev.addEventListener('click', updateSlideNumber);
  btnNext.addEventListener('click', updateSlideNumber);
});
