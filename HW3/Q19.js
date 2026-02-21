function largerThan(arr, n) {
  return arr.filter(x => x > n);
}

console.log("19:", largerThan([1, 5, 3, 8, 2], 4));
