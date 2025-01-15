import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
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
              console.log(cellValue);
            } else if (cellValue.startsWith('-')) {
              cells[i].classList.add('cell-negative');
            } else {
              cells[i].classList.add('cell-neutral');
            }
          }
        }
      });
  }

  colorCells();
});
