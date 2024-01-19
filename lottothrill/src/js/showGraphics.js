// DESKTOP VERSION

const btnFirst = document.querySelector('#arrBtn1');
const fromFirst = document.querySelector('#increaseKeysSection_title');
const toFirst = document.querySelector('#attendanceSection_title');
const wrapperFirst = document.querySelector(
  '#increaseKeysSection_originalsGrahpics',
);

const btnSecond = document.querySelector('#arrBtn2');
const fromSecond = document.querySelector('#attendanceSection_title');
const toSecond = document.querySelector('#attendanceSection_statisticsWrapper');
const wrapperSecond = document.querySelector(
  '#attendanceSection_originalsGrahpics',
);

const btnThird = document.querySelector('#arrBtn3');
const fromThird = document.querySelector('#increaseTrafficSection_title');
const toThird = document.querySelector('#finalSection');
const wrapperThird = document.querySelector(
  '#increaseTrafficSection_originalsGrahpics',
);

const toggleBlockVisibility = (btn, from, to, block) => {
  let height = getDistanceBetweenBlocks(from, to);
  block.style.maxHeight = `${height - 50}px`;
  toggleActiveClass(btn, 'active');
  toggleActiveClass(block, 'active');
};

btnFirst.addEventListener('click', () =>
  toggleBlockVisibility(btnFirst, fromFirst, toFirst, wrapperFirst),
);

btnSecond.addEventListener('click', () =>
  toggleBlockVisibility(btnSecond, fromSecond, toSecond, wrapperSecond),
);

btnThird.addEventListener('click', () =>
  toggleBlockVisibility(btnThird, fromThird, toThird, wrapperThird),
);

// MOBILE VERSION

const btn4 = document.querySelector('#arrBtn4');
const btn5 = document.querySelector('#arrBtn5');
const btn6 = document.querySelector('#arrBtn6');

btn4.addEventListener('click', () =>
  toggleActiveClass(wrapperFirst, 'activeMobile'),
);

btn5.addEventListener('click', () =>
  toggleActiveClass(wrapperSecond, 'activeMobile'),
);

btn6.addEventListener('click', () =>
  toggleActiveClass(wrapperThird, 'activeMobile'),
);

const graphWrapper = document.querySelector(
  '.increaseKeysSection_graphWrapper',
);

const scrollToRight = (element, screenWidth) => {
  let windowWidth = window.innerWidth;

  if (windowWidth <= screenWidth) {
    element.scrollTo(element.scrollWidth, 0);
  }
};

document.addEventListener('DOMContentLoaded', () =>
  scrollToRight(graphWrapper, 576),
);

const scrollByToRight = (element, screenWidth, step) => {
  let windowWidth = window.innerWidth;

  if (windowWidth <= screenWidth) {
    element.scrollBy(step, 0);
  }
};
