function longestPalindrome(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    for (const [l, r] of [[i, i], [i, i + 1]]) {
      let left = l, right = r;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        if (right - left + 1 > result.length) result = str.slice(left, right + 1);
        left--; right++;
      }
    }
  }
  return result;
}

console.log("27:", longestPalindrome("bananas"));