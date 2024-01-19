const getDistanceBetweenBlocks = (firstBlock, secondBlock) => {
  if (
    secondBlock.getBoundingClientRect().y > firstBlock.getBoundingClientRect().y
  ) {
    return (
      secondBlock.getBoundingClientRect().y -
      firstBlock.getBoundingClientRect().y -
      firstBlock.offsetHeight
    );
  }
  return (
    firstBlock.getBoundingClientRect().y -
    secondBlock.getBoundingClientRect().y -
    secondBlock.offsetHeight
  );
};
