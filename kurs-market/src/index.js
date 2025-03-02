import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  //header animation
  const headerTitle = document.querySelector('.headerSection__title');
  const headerCircles = document.querySelector('.headerSection__right');
  const headerBadge1 = document.querySelector('.headerSection .badge1');
  const headerBadge2 = document.querySelector('.headerSection .badge2');

  if (!headerTitle && headerCircles && headerBadge1 && headerBadge2) return;

  const animateHeader = (entry, element) => {
    if (entry.isIntersecting) {
      element.classList.add('animate');
      headerObserver.unobserve(entry.target);
    }
  };

  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headerTitle) {
          animateHeader(entry, headerTitle);
        } else if (entry.target === headerCircles) {
          animateHeader(entry, headerCircles);
        } else if (entry.target === headerBadge1) {
          animateHeader(entry, headerBadge1);
        } else if (entry.target === headerBadge2) {
          animateHeader(entry, headerBadge2);
        }
      });
    },
    { threshold: 0.5 },
  );

  // animation diffrent blocks

  const cards = document.querySelectorAll('.animate-card');
  const texts = document.querySelectorAll('.animate-text');

  if (!(cards.length && texts.length)) return;

  // card animation

  const animateCard = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObserver.unobserve(entry.target);
      }
    });
  };

  const cardObserver = new IntersectionObserver(animateCard, {
    threshold: 0.4,
  });

  cards.forEach((card) => {
    cardObserver.observe(card);
  });

  // text animation

  const animateText = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        textObserver.unobserve(entry.target);
      }
    });
  };

  const textObserver = new IntersectionObserver(animateText, {
    threshold: 0.8,
  });

  texts.forEach((text) => {
    textObserver.observe(text);
  });
});
