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
    // processes[0].classList.remove('processSection__firstCardItemActiveFirst');
    processes[1].classList.add('processSection__firstCardItemActiveSecond');
  }, [1500]);
  // setTimeout(() => {
  //   processes[1].classList.remove('processSection__firstCardItemActiveSecond');
  // }, [3500]);
};

window.addEventListener(
  'load',
  createObserver(animateFirstProcess, processes[0]),
);
