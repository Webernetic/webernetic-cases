import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.finalSection__video');
  const playButton = document.querySelector('.finalSection__play-btn');

  if (!(video && playButton)) return;

  video.play().catch((err) => console.error('Ошибка автозапуска:', err));

  video.addEventListener('play', () => {
    playButton.classList.remove('active');
  });

  video.addEventListener('pause', () => {
    playButton.classList.add('active');
  });

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play().catch((err) => console.error(err));
    }
  });
});
