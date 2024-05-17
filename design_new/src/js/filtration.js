// сброс табов фильтров
const resetFilters = (filterTab) => {
  const wrapper = filterTab.closest('.filtersTabs');

  const activeFilterName = filterTab.getAttribute('data-filter-name');

  let allFilters = wrapper.querySelectorAll('.filterTab');

  allFilters.forEach((item) => {
    if (item.getAttribute('data-filter-name') !== activeFilterName) {
      item.classList.remove('active');
    }
  });
};

// переключение табов фильтров
const toggleActiveFilterName = (filterTab) => {
  filterTab.classList.toggle('active');

  resetFilters(filterTab);
};

const getActiveFilter = (tab) => {
  let activeFilterName = null;

  if (tab.classList.contains('active')) {
    activeFilterName = tab.getAttribute('data-filter-name');
  }

  return activeFilterName;
};

// отображение отфильтрованных элементов
const showFilteredElements = (target) => {
  let activeFilterName = getActiveFilter(target);
  const wrapper = target.closest('.filtersWrapper');

  let allElements = wrapper.querySelectorAll('.filterItem');

  if (!activeFilterName) {
    allElements.forEach((item) => {
      item.classList.remove('active');
      item.classList.remove('disactive');
    });

    return;
  }

  allElements.forEach((item) => {
    if (item.getAttribute('data-filter-value') === activeFilterName) {
      item.classList.add('active');
      item.classList.remove('disactive');
    } else {
      item.classList.remove('active');
      item.classList.add('disactive');
    }
  });
};

// фильтрация
const filtration = ({ target }) => {
  if (target.classList.contains('filterTab')) {
    toggleActiveFilterName(target);
    showFilteredElements(target);

    const wrapper = document.querySelector('.casesSection_casesWrapper');
    showMoreButton(wrapper);
  }
};

// для планшета и мобильного телефона отображаем только 4 карточки
const hideItemsByDefault = () => {
  const width = window.innerWidth;

  if (width < 992) {
    const wrapper = document.querySelector('.casesSection_casesWrapper');
    wrapper.classList.add('short');
    controlWrapperHeight(wrapper);
  }
};

// обработка отображения кнопки showMore
const showMoreButton = (wrapper) => {
  const width = window.innerWidth;
  const btn = document.querySelector('#showMoreBtn');

  if (width < 992) {
    const items = wrapper.querySelectorAll('.casesSection_case');

    //находим количество активных карточек
    let i = 0;
    items.forEach((item) => {
      if (!item.classList.contains('disactive')) {
        i++;
      }
    });

    //отображение кнопки
    if (i < 4) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'block';
    }
  }

  //изменение текста кнопки
  if (wrapper.classList.contains('short')) {
    btn.textContent = btn.getAttribute('data-title') || 'Загрузить больше';
  } else {
    btn.textContent = btn.getAttribute('data-title-short') || 'Свернуть';
  }
};

// controller высоты контейнера с карточками
const controlWrapperHeight = (wrapper) => {
  const items = wrapper.querySelectorAll('.casesSection_case');

  let maxHeight = 'none';

  if (wrapper.classList.contains('short')) {
    let height = 0;
    let i = 0;

    items.forEach((item) => {
      if (!item.classList.contains('disactive') && i < 4) {
        height += item.offsetHeight;
        i++;
      }
    });

    maxHeight = `${height + 3 * 46}px`;
  }

  wrapper.style.maxHeight = maxHeight;
};

const showMore = () => {
  const wrapper = document.querySelector('.casesSection_casesWrapper');
  wrapper.classList.toggle('short');
  controlWrapperHeight(wrapper);
  showMoreButton(wrapper);
};

document.addEventListener('DOMContentLoaded', () => {
  const filtersWrappers = document.querySelectorAll('.filtersWrapper');

  filtersWrappers.forEach((wrapper) =>
    wrapper.addEventListener('click', filtration),
  );
  const showMoreBtn = document.querySelector('#showMoreBtn');
  showMoreBtn.addEventListener('click', showMore);
});

window.addEventListener('load', () => {
  hideItemsByDefault();
});
