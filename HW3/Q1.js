function reverseNumber(n) {
  return parseInt(String(n).split('').reverse().join(''));
}
 
console.log(reverseNumber(32243))