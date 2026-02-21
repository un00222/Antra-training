function longestUniqueSubstring(str) {
  let max = '', current = '';
  for (const char of str) {
    const idx = current.indexOf(char);
    if (idx !== -1) current = current.slice(idx + 1);
    current += char;
    if (current.length > max.length) max = current;
  }
  return max;
}

console.log("26:", longestUniqueSubstring("abcabcbb"));