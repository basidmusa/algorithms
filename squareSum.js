function squareSum(arr) {
  return arr.map(n => n*n).reduce((acc, next) => acc + next, 0);
}

squareSum([1, 2, 3]);  // 14
