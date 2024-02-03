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

// -----PROCESS SECTION------

let processes = document.querySelectorAll('.processSection_firstCardItem');

const animateFirstProcess = () => {
  processes[0].classList.add('processSection__firstCardItemActiveFirst');
  setTimeout(() => {
    processes[1].classList.add('processSection__firstCardItemActiveSecond');
  }, [1500]);
};

window.addEventListener(
  'load',
  createObserver(animateFirstProcess, processes[0]),
);

let orders = document.querySelectorAll('.processSection_thirdCardImageWrapper');

const showOrder = () => {
  for (let i = orders.length - 1; i >= 0; i--) {
    orders[i].style.transitionDelay = `${2.8 + 0.6 * (orders.length - i - 1)}s`;
    orders[i].style.opacity = '1';
  }
};

window.addEventListener('load', createObserver(showOrder, orders[0]));
