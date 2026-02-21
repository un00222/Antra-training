function amountToCoins(amount, coins) {
  const result = [];
  for (const coin of coins) {
    while (amount >= coin) { result.push(coin); amount -= coin; }
  }
  return result;
}

console.log("14:", amountToCoins(46, [25, 10, 5, 2, 1]));
