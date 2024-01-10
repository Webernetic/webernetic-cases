import './index.html';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {

  const title = document.querySelector('.header__title');
  const originalContent = title.innerText.split(' ');

  const debounce = (func, delay) => {
    let debounceTimer;
    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    }
  }

  window.addEventListener('resize', debounce((e) => {
    const width = e.target.innerWidth;
    if (width <= 480) {
      title.innerText = originalContent.slice(0, 4).join(' ');
    } else {
      title.innerText = originalContent.join(' ');
    }
  }, 250));
})
