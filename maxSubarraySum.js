// take an arrray of integers & a number n as input, return the maximum sum of n consecutive numbers in the array

// NAIVE SOLUTION : O(N^2)
// function maxSubarraySum(arr, n) {
//   if (n > arr.length) {
//     return null;
//   }
//   var maxSum = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     tempSum = 0;
//     for (let j = 0; j < n; j++) {
//       tempSum += arr[i + j];
//     }
//     if (tempSum > maxSum) {
//       maxSum = tempSum;
//     }
//   }
//   return maxSum;
// }

// SLIDING WINDOW APPROACH : O(N)
// Instead of looping through each subarray everytime, we subtract the previous and add the next to the sum to get the temporary sum.
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = maxSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

// TESTCASES
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // expected: 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // expected: 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // expected: 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // expected: 13
console.log(maxSubarraySum([], 4)); // expected: null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 9, 6, 3], 3)); // expected: 23
