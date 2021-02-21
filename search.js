// given a sorted array and an integer, return the index of the number in the array, -1 if not found.

// NAIVE SOLUTION - LINEAR SEARCH : O(n)
// function search(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//       return i;
//     }
//   }
//   return -1;
// }

// DIVIDE & CONQUER - BINARY SEACRCH : O(logn)
function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] < n) {
      min = mid + 1;
    } else if (arr[mid] > n) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// TESTCASES
console.log(search([1, 2, 3, 4, 5, 6], 4)); // expected: 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // expected: 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // expected: -1
