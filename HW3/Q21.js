function subsets(arr, len) {
  const result = [];
  function combine(start, combo) {
    if (combo.length === len) { result.push([...combo]); return; }
    for (let i = start; i < arr.length; i++)
      combine(i + 1, [...combo, arr[i]]);
  }
  combine(0, []);
  return result;
}

console.log("21:", subsets([1, 2, 3], 2));