//  accept an array of positve integers and a positive integer, return the minimum length of the contiguos subarray
// for which the sum is greater than or equal to rhe integer passed to the function, return zero if none

function minSubArrayLen(arr, n) {
  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let total = 0;
  while (left < arr.length) {
    if (total < n) {
      total += arr[right];
      right++;
    } else if (total >= n) {
      let tempLen = right - left;
      if (tempLen < minLen) {
        minLen = tempLen;
      }
      total -= arr[left];
      left++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// TESTCASES
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // expected: 2 since [4, 3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // expected: 2 since [5, 4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // expected: 1 since [62]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // expected: 3 since [4, 16, 22]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // expected: 5 since [16, 22, 5, 7, 8]
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // expected: 2 since [3, 8]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // expected: 0
