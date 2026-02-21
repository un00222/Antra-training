function countOccurrences(str, letter) {
  return str.split(letter).length - 1;
}

console.log("22:", countOccurrences("microsoft.com", "o"));