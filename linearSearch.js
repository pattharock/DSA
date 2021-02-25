// accept an array and a value, return the index at which the values occurs in thte  array, -1 otherwise


// O(1) best case, O(n) worst and average case.
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// TESTCASES
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // expected: 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // expected: 5
console.log(linearSearch([100], 100)); // expected: 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // expected: -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // expected: -1
console.log(linearSearch([100], 200)); // expected: -1
