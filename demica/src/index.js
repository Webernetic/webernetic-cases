import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  //table with percents
  function colorCells() {
    const rows = document.querySelectorAll('.promotionSection__table tr');

    rows.length &&
      rows.forEach((row) => {
        const cells = row.querySelectorAll('td');

        if (cells.length > 0) {
          cells[0].classList.add('cell-orange');
          cells[1].classList.add('cell-percent');

          for (let i = 1; i < cells.length; i++) {
            const cellValue = cells[i].textContent.trim();

            if (cellValue.startsWith('+')) {
              cells[i].classList.add('cell-positive');
            } else if (cellValue.startsWith('-')) {
              cells[i].classList.add('cell-negative');
            } else {
              cells[i].classList.add('cell-neutral');
            }
          }
        }
      });
  }

  function animatePercentages() {
    const cells = document.querySelectorAll('.cell-percent');

    cells.forEach((cell) => {
      const targetValue = +cell.textContent.replace('%', '');

      if (!isNaN(targetValue)) {
        cell.textContent = '1%';
        let currentValue = 1;

        function updateNumber() {
          if (currentValue < targetValue) {
            const increment = Math.max(
              1,
              Math.ceil((targetValue - currentValue) / 200),
            );
            currentValue += increment;
            cell.textContent = `${currentValue}%`;
            setTimeout(updateNumber, 150);
          } else {
            cell.textContent = `${targetValue}%`;
          }
        }

        updateNumber();
      }
    });
  }

  function initIntersectionObserver() {
    const tables = document.querySelectorAll('.promotionSection__table');
    const chartContainer = document.querySelector(
      '.resultSection__chart-container',
    );

    if (tables.length === 0 && !chartContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;

            if (target.classList.contains('promotionSection__table')) {
              animatePercentages(target);
            } else if (
              target.classList.contains('resultSection__chart-container')
            ) {
              console.log(target);
              const chart = target.querySelector('.resultSection__chart');

              if (chart) {
                chart.style.animation = 'reveal 2s forwards';
              }
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    tables.forEach((table) => observer.observe(table));

    if (chartContainer) {
      observer.observe(chartContainer);
    }
  }

  colorCells();
  initIntersectionObserver();

  // modals

  const showButtons = document.querySelectorAll('.show-modal-btn');
  const modal = document.querySelector('.modal-demica');
  const modalContent = document.querySelector('.modal-demica .modal__content');
  const closeButton = document.querySelector(
    '.modal-demica .modal__close-button',
  );

  if (!(modal && closeButton && modalContent && showButtons.length)) return;

  showButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const images = JSON.parse(button.getAttribute('data-images'));

      modalContent.innerHTML = '';

      images.forEach((item) => {
        const img = document.createElement('img');
        img.classList.add('modal__image');
        img.src = item;
        img.alt = 'data';
        modalContent.appendChild(img);
      });

      modal.classList.add('active');
    });
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal && !modalContent.contains(event.target)) {
      modal.classList.remove('active');
    }
  });
});
