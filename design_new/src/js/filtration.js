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

const showFilteredElements = (target) => {
  console.log(target);

  let activeFilterName = getActiveFilter(target);
  console.log(activeFilterName);
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

const filtration = ({ target }) => {
  if (target.classList.contains('filterTab')) {
    toggleActiveFilterName(target);
    showFilteredElements(target);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const filtersWrappers = document.querySelectorAll('.filtersWrapper');

  filtersWrappers.forEach((wrapper) =>
    wrapper.addEventListener('click', filtration),
  );
});
