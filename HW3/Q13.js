function getFactors(n) {
  const factors = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) factors.push(i);
  return factors;
}

console.log("13:", getFactors(12));