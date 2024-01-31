// -----IntersectionObserver------

let observerOptions = {
  rootMargin: '10px',
};

const start = (callback) => (entries, obs) => {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    // Отключаем «наблюдателя»
    obs.unobserve(entry.target);
    callback();

    window.removeEventListener('load', createObserver);
  });
};

const createObserver = (callback, target) => () => {
  observer = new IntersectionObserver(start(callback), observerOptions);
  observer.observe(target);
};

// -----RESULTS SECTION------

let statistics = document.querySelectorAll('.statisticsSection_itemTitle');

const showStatistics = () => {
  for (let i = 0; i < statistics.length; i++) {
    statistics[i].style.transitionDelay = `${0.8 * i}s`;
    statistics[i].style.opacity = '1';
  }
};

window.addEventListener('load', createObserver(showStatistics, statistics[0]));
