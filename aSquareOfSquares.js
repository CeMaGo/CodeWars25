var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  if (n === 0) {
    return true;
  }

  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
};
