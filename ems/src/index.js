import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // tabs
  const tabs = document.querySelectorAll('.devSection__tab');
  const cards = document.querySelectorAll('.devSection__card');

  if (!(tabs.length && cards.length)) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = tab.getAttribute('data-index');

      tabs.forEach((t) => t.classList.remove('active'));
      cards.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      cards[index].classList.add('active');
    });
  });

  //dropdown
  /*
  const dropdownButton = document.querySelector('.tabSection__dropdown-button');
  const dropdownList = document.querySelector('.tabSection__dropdown-list');
  const selectedOption = document.querySelector('.tabSection__selected-option');
  const dropdownItems = document.querySelectorAll('.tabSection__dropdown-item');
  const renderingBlocks = document.querySelectorAll('.tabSection__card');
  const dropdownArrow = document.querySelector('.tabSection__dropdown-icon');

  if (
    !(
      dropdownButton &&
      dropdownList &&
      selectedOption &&
      dropdownItems.length &&
      renderingBlocks.length &&
      dropdownArrow
    )
  )
    return;

  // dropdown-menu
  dropdownButton.addEventListener('click', toggleDropdownList);
  dropdownItems.forEach((item) => item.addEventListener('click', selectOption));

  function toggleDropdownList() {
    dropdownList.classList.toggle('show');
    dropdownArrow.classList.toggle('show');
  }

  function selectOption(event) {
    const selectedItem = event.currentTarget;

    const dataIndex = selectedItem.getAttribute('data-index');

    selectedOption.textContent = selectedItem.textContent;
    renderContent(dataIndex);
    console.log(dataIndex);

    toggleDropdownList();
  }

  // dropdown-content

  function renderContent(dataIndex) {
    renderingBlocks.forEach((block) => {
      if (block.getAttribute('data-index') === dataIndex) {
        console.log('нужный блок', block);
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  }*/

  //animation

  const blocks = document.querySelectorAll('.workSection__item-pic');

  if (!blocks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Используем entry.target вместо block
        observer.unobserve(entry.target); // Прекращаем наблюдение за этим элементом
      }
    });
  });

  blocks.forEach((block) => {
    observer.observe(block);
  });
});
