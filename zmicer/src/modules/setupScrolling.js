export const setupScrolling = (blockSelector, scrollContainerSelector) => {
  let scrollAmount = 0;
  let blockScrolling = false;
  let blockScrolled = false;

  const block = document.querySelector(blockSelector);
  const scrollContainer = document.querySelector(scrollContainerSelector);

  if (!block || !scrollContainer) {
    console.error("Block or scroll container not found");
    return;
  }

  const checkScroll = () => {
    const blockPosition = block.getBoundingClientRect();

    if (
      blockPosition.top < window.innerHeight / 2 &&
      blockPosition.bottom >= window.innerHeight / 2
    ) {
      if (!blockScrolled) {
        document.body.style.overflow = "hidden";
        blockScrolling = true;
      }
    } else if (blockPosition.bottom < window.innerHeight / 2) {
      document.body.style.overflow = "auto";
      blockScrolling = false;
    }

    requestAnimationFrame(checkScroll);
  };

  checkScroll();

  window.addEventListener(
    "wheel",
    (e) => {
      if (blockScrolling) {
        e.preventDefault();
        const containerHeight = scrollContainer.getBoundingClientRect().height;
        scrollAmount -= e.deltaY;

        if (scrollAmount > 0) {
          scrollAmount = 0;
        }

        if (-containerHeight / 1.1 > scrollAmount) {
          scrollAmount = -containerHeight / 1.1;
          document.body.style.overflow = "auto";
          blockScrolling = false;
          blockScrolled = true;
        }

        scrollContainer.style.transform = `translateY(${scrollAmount}px)`;
      }
    },
    { passive: false }
  );
};
