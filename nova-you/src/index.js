import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // modals
  const showButtons = document.querySelectorAll('.show-modal-btn');
  const modal = document.querySelector('.modal-nova-you');
  const modalContent = document.querySelector(
    '.modal-nova-you .modal__content',
  );
  const closeButton = document.querySelector(
    '.modal-nova-you .modal__close-button',
  );

  if (!(modal && closeButton && modalContent && showButtons.length)) return;

  showButtons.forEach((button) => {
    button.addEventListener('click', function () {
      console.log(button);
      const dataImage = button.getAttribute('data-image');
      const datatitle = button.getAttribute('data-title');

      console.log(dataImage);

      modalContent.innerHTML = '';

      const title = document.createElement('h3');
      title.innerText = datatitle;

      const img = document.createElement('img');
      img.classList.add('modal__image');
      img.src = dataImage;
      img.alt = 'graph';

      modalContent.appendChild(title);
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
