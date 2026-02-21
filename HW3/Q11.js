function secondLowestGreatest(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  return [sorted[1], sorted[sorted.length - 2]];
}

console.log("11:", secondLowestGreatest([1,2,3,4,5]));