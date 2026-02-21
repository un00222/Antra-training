function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

console.log("7:", countVowels("The quick brown fox"));
