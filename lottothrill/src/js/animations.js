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

//SHOW FROM OPACITY 0 TO 1
let titles = document.querySelectorAll('.aboutSection_itemTitle');
let texts = document.querySelectorAll('.aboutSection_itemText');
let images = document.querySelectorAll('.aboutSection_imageWrapper');
let increaseSectionText = document.querySelectorAll(
  '.increaseKeysSection_text',
);
let increaseKeysSectionItem = document.querySelectorAll(
  '.increaseKeysSection__descriptionItem',
);
let attendanceSectionItem = document.querySelectorAll(
  '.attendanceSection__descriptionItem',
);
let attendanceSectionItemSecondary = document.querySelectorAll(
  '.attendanceSection__descriptionItemSecondary',
);
let finalSectionContent = document.querySelectorAll(
  '.finalSection_contentWrapper',
);

const showElements = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.opacity = '1';
  }
};

window.addEventListener(
  'load',
  createObserver(() => showElements(titles), titles[0]),
);
window.addEventListener(
  'load',
  createObserver(() => showElements(texts), texts[0]),
);
window.addEventListener(
  'load',
  createObserver(() => showElements(images), images[0]),
);
window.addEventListener(
  'load',
  createObserver(
    () => showElements(increaseSectionText),
    increaseSectionText[0],
  ),
);
window.addEventListener(
  'load',
  createObserver(
    () => showElements(increaseKeysSectionItem),
    increaseKeysSectionItem[0],
  ),
);

window.addEventListener(
  'load',
  createObserver(
    () => showElements(attendanceSectionItem),
    attendanceSectionItem[0],
  ),
);
window.addEventListener(
  'load',
  createObserver(
    () => showElements(attendanceSectionItemSecondary),
    attendanceSectionItemSecondary[0],
  ),
);

window.addEventListener(
  'load',
  createObserver(
    () => showElements(finalSectionContent),
    finalSectionContent[0],
  ),
);

let cards = document.querySelectorAll('.peculiaritiesSection_item');

const showOneByOne = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.transitionDelay = `${0.5 * i}s`;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0%)';
  }
};

window.addEventListener(
  'load',
  createObserver(() => showOneByOne(cards), cards[0]),
);
