const resetFilters = (activeFilterName) => {
  let allFilters = document.querySelectorAll('.filterItem');
  allFilters.forEach((item) => {
    if (
      item.getAttribute('data-filter-name') !== activeFilterName &&
      item.classList.contains('activeFilter')
    ) {
      item.classList.remove('activeFilter');
    }
  });
};

const toggleActiveFilterName = ({ target }) => {
  let activeFilterName = null;

  if (target.classList.contains('filterItem')) {
    target.classList.toggle('activeFilter');
    activeFilterName = target.getAttribute('data-filter-name');
  }

  resetFilters(activeFilterName);
};

const getActiveFilter = () => {
  let allFilters = document.querySelectorAll('.filterItem');
  let activeFilterName = null;

  allFilters.forEach((item) => {
    if (item.classList.contains('activeFilter')) {
      activeFilterName = item.getAttribute('data-filter-name');
      return;
    }
  });

  return activeFilterName;
};

const showFilteredElements = (activeFilterName) => {
  let allElements = document.querySelectorAll('.case');

  if (!activeFilterName) {
    allElements.forEach((item) =>
      item.classList.add('activeFiltartionElement'),
    );
    return;
  }

  allElements.forEach((item) => {
    if (item.getAttribute('data-filter-value') === activeFilterName) {
      item.classList.add('activeFiltartionElement');
    } else {
      item.classList.remove('activeFiltartionElement');
    }
  });
};

const filtration = (e) => {
  toggleActiveFilterName(e);
  let activeFilterName = getActiveFilter();
  showFilteredElements(activeFilterName);
};

document.addEventListener('DOMContentLoaded', () => {
  const filtersWrapper = document.querySelector('.filtersWrapper');

  filtersWrapper.addEventListener('click', filtration);
});
