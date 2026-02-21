function longestCountryName(countries) {
  return countries.reduce((a, b) => a.length >= b.length ? a : b);
}

console.log("25:", longestCountryName(["Australia", "Germany", "United States of America"]));
