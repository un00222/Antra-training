function longestWord(str) {
  return str.split(' ').reduce((a, b) => a.length >= b.length ? a : b);
}

console.log("6:", longestWord("Web Development Tutorial"));