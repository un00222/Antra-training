function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

console.log("5:", titleCase("the quick brown fox"));