function uniqueChars(str) {
  return [...new Set(str)].join('');
}

console.log("16:", uniqueChars("thequickbrownfoxjumpsoverthelazydog"));
