function combinations(str) {
  const result = [];
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j <= str.length; j++)
      result.push(str.slice(i, j));
  return result.join(', ');
}

console.log("3:", combinations("dog"));