// -----PositionSection------

//step in %
const scrollRight = (element, step) => {
  let scrollWidth = element.offsetWidth;

  if (!scrollWidth) {
    return;
  }

  let scrollStep = (scrollWidth * step) / 100;

  element.scrollBy(scrollStep, 0);
};

const addArrowButtonListener = ({ btnId, section }) => {
  let arrowBtn = document.querySelector(btnId);

  let wrapper = arrowBtn
    .closest(`.${section}_scrollWrapper`)
    .querySelector(`.${section}_imageWrapper`);

  arrowBtn.addEventListener('click', () => {
    scrollRight(wrapper, 30);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const arrowButtons = [
    { btnId: '#btn1_positionSection', section: 'positionSection' },
    { btnId: '#btn2_positionSection', section: 'positionSection' },
    { btnId: '#btn_trafficSection', section: 'trafficSection' },
  ];

  arrowButtons.forEach((button) => addArrowButtonListener(button));
});
