function firstNonRepeated(str) {
  return str.split('').find(c => str.indexOf(c) === str.lastIndexOf(c)) || null;
}

console.log("23:", firstNonRepeated("abacddbec"));
