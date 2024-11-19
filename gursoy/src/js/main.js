document.addEventListener('DOMContentLoaded', function () {
  const showButtons = document.querySelectorAll('.resutSection__button');
  const modal = document.querySelector('.modal-gursoy');
  const modalContent = document.querySelector('.modal-gursoy .modal__content');
  const closeButton = document.querySelector(
    '.modal-gursoy .modal__close-button',
  );

  if (!(modal && closeButton && modalContent && showButtons.length)) return;

  showButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const src = button.getAttribute('data-image');

      modalContent.innerHTML = '';

      const img = document.createElement('img');
      img.classList.add('modal__image');
      img.src = src;
      img.alt = 'graph';
      modalContent.appendChild(img);

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
