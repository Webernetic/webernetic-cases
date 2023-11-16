document.addEventListener("DOMContentLoaded", function () {
  const animatedEls = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate')
          }            
      })
  });

  if (animatedEls.length) {
      for (let i = 0; i < animatedEls.length; i++) {
          const elements = animatedEls[i];
       
          observer.observe(elements);
      }    
  }
})