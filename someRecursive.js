// accept an array and a callback, return true if a single value in the array satisfies the callback, false otherwise;

const isOdd = (val) => val % 2 === 1;

// O(n) time
function someRecursive(arr, func) {
  if (arr.length === 0) {
    return false;
  }
  return func(arr[0]) ? true : someRecursive(arr.slice(1), func);
}

// TESTCASES
console.log(someRecursive([1, 2, 3, 4], isOdd)); // expected:  true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // expected:  true
console.log(someRecursive([4, 6, 8], isOdd)); // expected:  false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // expected:  false
