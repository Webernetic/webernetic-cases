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
  toggleActiveClass(btn);
  toggleActiveClass(block);
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
