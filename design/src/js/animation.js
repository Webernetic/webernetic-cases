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

let acceptions = document.querySelectorAll(
  '.processSection_secondCardImageWrapper',
);

const showAcception = () => {
  for (let i = 0; i < acceptions.length; i++) {
    acceptions[i].style.transitionDelay = `${1.8 + 0.5 * i}s`;
    acceptions[i].style.opacity = '1';
  }
};

let orders = document.querySelectorAll('.processSection_thirdCardImageWrapper');

window.addEventListener('load', createObserver(showAcception, acceptions[0]));

const showOrder = () => {
  for (let i = orders.length - 1; i >= 0; i--) {
    orders[i].style.transitionDelay = `${3.3 + 0.5 * (orders.length - i - 1)}s`;
    orders[i].style.opacity = '1';
  }
};

window.addEventListener('load', createObserver(showOrder, orders[0]));

// -----TEAM SECTION------

let teamWrapper = document.querySelector('.teamSection_teamWrapper');
let teammates = document.querySelectorAll('.teamSection_imageWrapper');
let roles = document.querySelectorAll('.teamSection_role');

const getActiveRoleId = (target) => {
  if (target.classList.contains('teamSection_img')) {
    return target.getAttribute('data-id');
  }
};

const animateTeammates = (activeRoleId) => {
  teammates.forEach((teammate) => {
    if (teammate.getAttribute('data-id') !== activeRoleId) {
      teammate.style.transform = 'scale(0.84)';
    }
  });
};

const visibleActiveRole = (activeRoleId) => {
  roles.forEach((role) => {
    if (role.getAttribute('data-id') === activeRoleId) {
      role.classList.add('teamSection__activeRole');
    }
  });
};

const showRole = ({ target }) => {
  if (window.innerWidth >= 576) {
    let activeRoleId = getActiveRoleId(target);
    if (activeRoleId && activeRoleId !== '1') {
      animateTeammates(activeRoleId);
      visibleActiveRole(activeRoleId);
    }
  }
};

const hideRole = () => {
  if (window.innerWidth >= 576) {
    roles.forEach((role) => role.classList.remove('teamSection__activeRole'));
    teammates.forEach((teammate) => (teammate.style.transform = 'scale(1)'));
  }
};

teamWrapper.addEventListener('mouseover', showRole);
teamWrapper.addEventListener('mouseout', hideRole);
