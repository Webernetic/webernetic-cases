const getDistanceBetweenBlocks = (firstBlock, secondBlock) => {
  console.log('firstBlock.offsetTop', firstBlock.offsetTop);
  console.log('secondBlock.offsetTop', secondBlock.offsetTop);
  console.log('firstBlock.offsetHeight', firstBlock.offsetHeight);
  if (secondBlock.offsetTop > firstBlock.offsetTop) {
    return (
      secondBlock.offsetTop - firstBlock.offsetTop - firstBlock.offsetHeight
    );
  }
  return (
    firstBlock.offsetTop - secondBlock.offsetTop - secondBlock.offsetHeight
  );
};
