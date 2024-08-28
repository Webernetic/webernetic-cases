// сброс табов фильтров
const toggleModal = () => {
  const modal = document.querySelector('.modalFeedback');

  if (modal) {
    const fields = modal.querySelectorAll('input[name], textarea[name]');
    modal.classList.toggle('show');
    fields.forEach((field) => (field.value = ''));
    document.body.classList.toggle('hideScroll');
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.toggleModal');
  const modalOverlay = document.querySelector('.modal.overlay');

  console.log(modalOverlay);
  btns.forEach((btn) => {
    btn.addEventListener('click', toggleModal);
  });

  // if (!modalOverlay) return;

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      toggleModal();
    }
  });
});
